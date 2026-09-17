import csv
import io
import xml.etree.ElementTree as ET
import requests

from models import LandRecord, TaxStatus, WelfareStatus


BASE_URL = "http://127.0.0.1:8001"


# -----------------------------
# Land Records
# -----------------------------

def get_land_record(citizen_id: str):
    try:
        response = requests.get(
            f"{BASE_URL}/land-records/{citizen_id}",
            timeout=5
        )
        response.raise_for_status()
        return parse_land_record(response.text)

    except requests.RequestException:
        return {
            "available": False,
            "department": "Land Records Department",
            "error": "Department service temporarily unavailable"
        }
    except (ET.ParseError, ValueError, TypeError) as e:
        return {
            "available": False,
            "department": "Land Records Department",
            "error": "Department response could not be processed"
        }


def parse_land_record(xml_data: str) -> LandRecord:
    root = ET.fromstring(xml_data)

    return LandRecord(
        citizen_id=root.findtext("CitizenID"),
        owner_name=root.findtext("OwnerName"),
        address=root.findtext("Address"),
        ownership_status=root.findtext("OwnershipStatus")
    )


# -----------------------------
# Tax Department
# -----------------------------

def get_tax_status(citizen_id: str):
    try:
        response = requests.get(
            f"{BASE_URL}/tax/{citizen_id}",
            timeout=5
        )
        response.raise_for_status()
        return parse_tax_record(response.json())

    except requests.RequestException:
        return {
            "available": False,
            "department": "Tax Department",
            "error": "Department service temporarily unavailable"
        }
    except (ValueError, TypeError, AttributeError) as e:
        return {
            "available": False,
            "department": "Tax Department",
            "error": "Department response could not be processed"
        }


def parse_tax_record(json_data: dict) -> TaxStatus:
    return TaxStatus(
        citizen_id=json_data.get("citizen_id"),
        tax_status=json_data.get("tax_status"),
        pending_tax=json_data.get("pending_tax"),
        assessment_year=json_data.get("assessment_year")
    )


# -----------------------------
# Welfare Department
# -----------------------------

def get_welfare_status(citizen_id: str):
    try:
        response = requests.get(
            f"{BASE_URL}/welfare/{citizen_id}",
            timeout=5
        )
        response.raise_for_status()
        return parse_welfare_record(response.text)

    except requests.RequestException:
        return {
            "available": False,
            "department": "Welfare Department",
            "error": "Department service temporarily unavailable"
        }
    except (StopIteration, ValueError, TypeError) as e:
        return {
            "available": False,
            "department": "Welfare Department",
            "error": "Department response could not be processed"
        }


def parse_welfare_record(csv_data: str) -> WelfareStatus:
    reader = csv.DictReader(io.StringIO(csv_data))
    row = next(reader)

    return WelfareStatus(
        citizen_id=row.get("citizen_id"),
        income=int(row.get("income", 0)),
        benefit_status=row.get("benefit_status")
    )


def get_identity(citizen_id: str):
    try:
        response = requests.get(
            f"{BASE_URL}/identity/{citizen_id}",
            timeout=5
        )
        response.raise_for_status()
        return parse_identity_record(response.json())

    except requests.RequestException:
        return {
            "available": False,
            "department": "Identity Department",
            "error": "Department service temporarily unavailable"
        }
    except (ValueError, TypeError, AttributeError) as e:
        return {
            "available": False,
            "department": "Identity Department",
            "error": "Department response could not be processed"
        }


def parse_identity_record(json_data: dict):
    return {
        "citizen_id": json_data.get("citizen_id"),
        "identity_status": json_data.get("identity_status"),
        "name": json_data.get("name"),
        "address": json_data.get("address")
    }


def get_education(citizen_id: str):
    try:
        response = requests.get(
            f"{BASE_URL}/education/{citizen_id}",
            timeout=5
        )

        response.raise_for_status()

        # Mock department returns XML as a JSON-encoded string
        xml_data = response.json()

        return parse_education_record(xml_data)

    except requests.RequestException:
        return {
            "available": False,
            "department": "Education Department",
            "error": "Department service temporarily unavailable"
        }
    except (ET.ParseError, ValueError, TypeError) as e:
        return {
            "available": False,
            "department": "Education Department",
            "error": "Department response could not be processed"
        }


def parse_education_record(xml_data: str):
    root = ET.fromstring(xml_data)

    return {
        "citizen_id": root.findtext("CitizenID"),
        "student_status": root.findtext("student_status"),
        "institute": root.findtext("institute"),
        "education_level": root.findtext("education_level")
    }


def get_agriculture(citizen_id: str):
    try:
        response = requests.get(
            f"{BASE_URL}/agriculture/{citizen_id}",
            timeout=5
        )
        response.raise_for_status()

        # Mock department returns CSV as a JSON-encoded string
        csv_data = response.json()

        return parse_agriculture_record(csv_data)

    except requests.RequestException:
        return {
            "available": False,
            "department": "Agriculture Department",
            "error": "Department service temporarily unavailable"
        }
    except (StopIteration, ValueError, TypeError) as e:
        return {
            "available": False,
            "department": "Agriculture Department",
            "error": "Department response could not be processed"
        }


def parse_agriculture_record(csv_data: str):
    reader = csv.DictReader(io.StringIO(csv_data))
    row = next(reader)

    return {
        "citizen_id": row.get("citizen_id"),
        "farmer_status": row.get("farmer_status"),
        "crop": row.get("crop")
    }
