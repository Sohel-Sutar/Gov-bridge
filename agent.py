from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langchain.agents import create_agent
import requests


# ---------------------------------
# Government API Base URL
# ---------------------------------

BASE_URL = "http://127.0.0.1:8001"


# ---------------------------------
# Government Tools
# ---------------------------------

@tool
def get_land_record(citizen_id: str):
    """Get land ownership data for a citizen."""
    response = requests.get(
        f"{BASE_URL}/land-records/{citizen_id}",
        timeout=5
    )
    response.raise_for_status()
    return response.text


@tool
def get_tax_status(citizen_id: str):
    """Get tax status for a citizen."""
    response = requests.get(
        f"{BASE_URL}/tax/{citizen_id}",
        timeout=5
    )
    response.raise_for_status()
    return response.json()


@tool
def get_welfare_status(citizen_id: str):
    """Get welfare eligibility for a citizen."""
    response = requests.get(
        f"{BASE_URL}/welfare/{citizen_id}",
        timeout=5
    )
    response.raise_for_status()
    return response.text


# ---------------------------------
# Local Qwen3 Model
# ---------------------------------

llm = ChatOpenAI(
    model="qwen/qwen3-8b",
    temperature=0,
    max_tokens=300,
    base_url="http://localhost:1234/v1",
    api_key="lm-studio"
)


# ---------------------------------
# Agent
# ---------------------------------

tools = []

SYSTEM_PROMPT = """
You are GovBridge, a government interoperability planning agent.

Your job is to understand the citizen's request and decide which
government department checks are required.

Available government checks:
- identity
- land
- tax
- welfare
- education
- agriculture

Rules:
- Do not call any tools.
- Do not provide actual government data.
- Do not explain your reasoning.
- Return ONLY valid JSON.
- "required_checks" must contain only:
  identity, land, tax, welfare, education, agriculture.
- Keep checks in this order:
  identity → land → tax → welfare → education → agriculture.
- Include a service name based on the citizen's request.
- Do not add unnecessary checks.

SERVICE ROUTING:

Housing Subsidy:
- identity
- land
- tax
- welfare

Farmer Benefit:
- identity
- land
- agriculture
- welfare

Social Welfare:
- identity
- welfare

Scholarship / Education:
- identity
- education
- welfare

Identity & Certificate:
- identity

Document Verification:
- identity

ADDITIONAL REQUEST RULES:

- If the citizen asks for identity verification, include "identity".
- If the citizen asks for land ownership or land records, include "land".
- If the citizen asks for tax information or tax status, include "tax".
- If the citizen asks for welfare or benefit eligibility, include "welfare".
- If the citizen asks for education, student or institute verification,
  include "education".
- If the citizen asks for farmer, agriculture or crop information,
  include "agriculture".
- If the citizen explicitly requests multiple checks, include all
  requested checks.
- Do not add a department unless the request requires it.

Return exactly this structure:

{
  "service": "service name",
  "required_checks": ["identity", "land", "tax", "welfare"]
}
"""

agent = create_agent(
    model=llm,
    tools=tools,
    system_prompt=SYSTEM_PROMPT
)


# ---------------------------------
# Test Agent
# ---------------------------------

if __name__ == "__main__":

    request = """
    /no_think

    I want to apply for housing subsidy.
    Check my land ownership, tax status and welfare eligibility.
    """

    result = agent.invoke({
        "messages": [
            ("user", request)
        ]
    })


    print(result["messages"][-1].content)