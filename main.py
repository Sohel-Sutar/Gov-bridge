from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from models import ApplicationRequest, AgentApplicationRequest
from adapters import (
    get_identity,
    get_land_record,
    get_tax_status,
    get_welfare_status,
    get_education,
    get_agriculture
)
from agent import agent
import time
import json
import re
import uuid


class AgentResponseParseError(Exception):
    """Raised when the agent's response cannot be parsed as the expected JSON."""
    pass


VALID_CHECKS = (
    "identity", "land", "tax", "welfare", "education", "agriculture"
)


def parse_agent_json(response_text: str) -> dict:
    """
    Safely parse the LLM's JSON decision.

    Handles: plain JSON, JSON wrapped in ```json ... ``` or ``` ... ``` fences,
    Qwen <think>...</think> reasoning blocks, and stray text before/after the
    JSON object. Raises AgentResponseParseError if nothing usable is found.
    """
    if not isinstance(response_text, str):
        raise AgentResponseParseError("Agent returned an invalid response")

    cleaned = response_text or ""

    # 1. Strip <think>...</think> blocks
    cleaned = re.sub(r"<think>.*?</think>", "", cleaned, flags=re.DOTALL)

    # 2. Strip markdown code fences (```json ... ``` or ``` ... ```)
    cleaned = re.sub(r"```(?:json)?", "", cleaned)
    cleaned = cleaned.strip()

    # 3. Try normal parsing first
    try:
        return json.loads(cleaned)
    except (json.JSONDecodeError, ValueError):
        pass

    # 4. Fall back to extracting the first {...} JSON object
    match = re.search(r"\{.*\}", cleaned, flags=re.DOTALL)
    if match:
        try:
            return json.loads(match.group(0))
        except (json.JSONDecodeError, ValueError):
            pass

    # 5. Give up with a controlled error
    raise AgentResponseParseError("Agent returned an invalid response")


def validate_agent_decision(decision: dict) -> tuple[str, list]:
    if not isinstance(decision, dict):
        raise AgentResponseParseError("Agent returned an invalid response")

    service = decision.get("service", "Government Service")
    required_checks = decision.get("required_checks")
    if (
        not isinstance(service, str)
        or not service.strip()
        or not isinstance(required_checks, list)
        or len(required_checks) != len(set(required_checks))
        or any(check not in VALID_CHECKS for check in required_checks)
    ):
        raise AgentResponseParseError("Agent returned an invalid response")
    return service, required_checks


def new_application_id() -> str:
    return f"GB-2026-{uuid.uuid4().hex[:8].upper()}"


app = FastAPI(
    title="GovBridge API",
    description="Interoperability layer for government digital platforms",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
) 


# -----------------------------
# Temporary Consent Database
# -----------------------------

valid_consents = {
    "CONSENT-1001": {
        "citizen_id": "CIT-1001",
        "status": "ACTIVE"
    }
}
application_jobs = {}

# -----------------------------
# Home
# -----------------------------

@app.get("/")
def home():
    return {
        "message": "GovBridge API is running",
        "status": "operational"
    }


# -----------------------------
# Create Application
# -----------------------------

@app.post("/applications")
def create_application(
    application: ApplicationRequest,
    background_tasks: BackgroundTasks
):
    consent = valid_consents.get(application.consent_id)

    if not consent:
        return {
            "success": False,
            "message": "Consent not found"
        }

    if consent["citizen_id"] != application.citizen_id:
        return {
            "success": False,
            "message": "Consent does not belong to this citizen"
        }

    if consent["status"] != "ACTIVE":
        return {
            "success": False,
            "message": "Consent is not active"
        }

    application_id = new_application_id()

    application_jobs[application_id] = {
        "status": "processing",
        "progress": 0,
        "current_step": "Application submitted",
        "government_data": {}
    }

    background_tasks.add_task(
        process_application,
        application_id,
        application.citizen_id
    )

    return {
        "success": True,
        "message": "Application processing started",
        "application_id": application_id,
        "progress": 0,
        "status": "processing"
    }



@app.post("/agent/application")
def agent_application(
    request: AgentApplicationRequest,
    background_tasks: BackgroundTasks
    ):

    # 1. Ask the Agent what checks are required
    agent_request = f"""
/no_think

{request.request}
"""

    try:
        result = agent.invoke({
            "messages": [
                ("user", agent_request)
            ]
        })
    except Exception:
        return {
            "success": False,
            "message": "Agent could not process this request"
        }

    response_text = ""

    for message in reversed(result["messages"]):
        if hasattr(message, "content") and message.content:
            response_text = message.content
            break

    # 2. Convert Agent's JSON decision into Python data
    try:
        decision = parse_agent_json(response_text)
        service, required_checks = validate_agent_decision(decision)
    except AgentResponseParseError:
        return {
            "success": False,
            "message": "Agent returned an invalid response"
        }


    # 3. Verify consent
    consent = valid_consents.get(request.consent_id)

    if not consent:
        return {
            "success": False,
            "message": "Consent not found"
        }

    if consent["citizen_id"] != request.citizen_id:
        return {
            "success": False,
            "message": "Consent does not belong to this citizen"
        }

    if consent["status"] != "ACTIVE":
        return {
            "success": False,
            "message": "Consent is not active"
        }

    # 4. Create application job
    application_id = new_application_id()

    application_jobs[application_id] = {
    "status": "processing",
    "progress": 0,
    "current_step": "Agent decision completed",
    "agent_decision": {
        "service": service,
        "required_checks": required_checks
    },
    "government_data": {}
}

    # 5. Start only the checks selected by the Agent
    background_tasks.add_task(
        process_agent_application,
        application_id,
        request.citizen_id,
        required_checks
    )

    return {
        "success": True,
        "message": "Agent decision accepted and processing started",
        "application_id": application_id,
        "service": service,
        "required_checks": required_checks,
        "status": "processing",
        "progress": 0
    }



def process_application(application_id: str, citizen_id: str):

    job = application_jobs[application_id]

    # Step 1 — Land Records
    job["current_step"] = "Land Records"
    time.sleep(2)

    land_record = get_land_record(citizen_id)
    if isinstance(land_record, dict) and land_record.get("available") is False:
        job["current_step"] = "Land Records unavailable"
        job["status"] = "failed"
        job["error"] = land_record.get("error", "Land Records unavailable")
        return
    job["government_data"]["land"] = (
        land_record.model_dump()
        if hasattr(land_record, "model_dump")
        else land_record
    )
    job["progress"] = 33

    # Step 2 — Tax Department
    job["current_step"] = "Tax Department"
    time.sleep(2)

    tax_status = get_tax_status(citizen_id)
    if isinstance(tax_status, dict) and tax_status.get("available") is False:
        job["current_step"] = "Tax Department unavailable"
        job["status"] = "failed"
        job["error"] = tax_status.get("error", "Tax Department unavailable")
        return
    job["government_data"]["tax"] = (
        tax_status.model_dump()
        if hasattr(tax_status, "model_dump")
        else tax_status
    )
    job["progress"] = 66

    # Step 3 — Welfare Department
    job["current_step"] = "Welfare Department"
    time.sleep(2)

    welfare_status = get_welfare_status(citizen_id)
    if isinstance(welfare_status, dict) and welfare_status.get("available") is False:
        job["current_step"] = "Welfare Department unavailable"
        job["status"] = "failed"
        job["error"] = welfare_status.get("error", "Welfare Department unavailable")
        return
    job["government_data"]["welfare"] = (
        welfare_status.model_dump()
        if hasattr(welfare_status, "model_dump")
        else welfare_status
    )
    job["progress"] = 100

    job["current_step"] = "Unified response"
    job["status"] = "completed"

def process_agent_application(
    application_id: str,
    citizen_id: str,
    required_checks: list
):
    job = application_jobs[application_id]

    department_functions = {
            "identity": ("Identity Department", get_identity),
            "land": ("Land Records", get_land_record),
            "tax": ("Tax Department", get_tax_status),
            "welfare": ("Welfare Department", get_welfare_status),
            "education": ("Education Department", get_education),
            "agriculture": ("Agriculture Department", get_agriculture)
        }

    valid_checks = [
        check for check in required_checks
        if check in department_functions
    ]
    total_checks = len(valid_checks)

    if total_checks == 0:
        job["progress"] = 100
        job["current_step"] = "Unified response"
        job["status"] = "completed"
        return

    

    completed = 0

    for check in valid_checks:

        if check not in department_functions:
            continue

        department_name, department_function = department_functions[check]

        job["current_step"] = department_name
        time.sleep(2)

        result = department_function(citizen_id)

        if isinstance(result, dict) and result.get("available") is False:
            job["current_step"] = f"{department_name} unavailable"
            job["status"] = "failed"
            job["error"] = result.get(
                "error",
                f"{department_name} unavailable"
            )
            return

        job["government_data"][check] = (
            result.model_dump()
            if hasattr(result, "model_dump")
            else result
        )

        completed += 1

        job["progress"] = int(
            (completed / total_checks) * 100
        )

    job["current_step"] = "Unified response"
    job["status"] = "completed"
    job["progress"] = 100

@app.get("/applications/{application_id}/status")
def get_application_status(application_id: str):

    job = application_jobs.get(application_id)

    if not job:
        return {
            "success": False,
            "message": "Application not found"
        }

    return {
    "success": True,
    "application_id": application_id,
    "status": job["status"],
    "progress": job["progress"],
    "current_step": job["current_step"],
    "agent_decision": job.get("agent_decision", {}),
    "government_data": job["government_data"]
    }


@app.post("/agent/query")
def agent_query(query: str):

    agent_request = f"""
/no_think

{query}
"""

    try:
        result = agent.invoke({
            "messages": [
                ("user", agent_request)
            ]
        })

        response_text = ""

        for message in reversed(result["messages"]):
            if hasattr(message, "content") and message.content:
                response_text = message.content
                break
    except Exception:
        return {
            "success": False,
            "message": "Agent could not process this query"
        }

    return {
        "success": True,
        "response": response_text
    }
