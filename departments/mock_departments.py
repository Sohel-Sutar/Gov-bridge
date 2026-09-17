from fastapi import FastAPI
from fastapi.responses import Response
import csv
import io

app = FastAPI(title="Mock Government Departments")


# ==========================================
# LAND RECORDS DEPARTMENT
# ==========================================

@app.get("/land-records/{citizen_id}")
def land_records(citizen_id: str):

    xml_data = f"""<?xml version="1.0" encoding="UTF-8"?>
<LandRecord>
    <CitizenID>{citizen_id}</CitizenID>
    <OwnerName>Sohel</OwnerName>
    <Address>Pune, Maharashtra</Address>
    <OwnershipStatus>VERIFIED</OwnershipStatus>
</LandRecord>
"""

    return Response(
        content=xml_data,
        media_type="application/xml"
    )


# ==========================================
# TAX DEPARTMENT
# ==========================================

@app.get("/tax/{citizen_id}")
def tax_department(citizen_id: str):

    return {
        "citizen_id": citizen_id,
        "tax_status": "CLEAR",
        "pending_tax": 0,
        "assessment_year": "2025-26"
    }


# ==========================================
# WELFARE DEPARTMENT
# ==========================================

@app.get("/welfare/{citizen_id}")
def welfare_department(citizen_id: str):

    csv_data = io.StringIO()

    writer = csv.writer(csv_data)

    writer.writerow([
        "citizen_id",
        "income",
        "benefit_status"
    ])

    writer.writerow([
        citizen_id,
        "180000",
        "ELIGIBLE"
    ])

    return Response(
        content=csv_data.getvalue(),
        media_type="text/csv"
    )

@app.get("/identity/{citizen_id}")
def identity(citizen_id: str):
    return {
        "citizen_id": citizen_id,
        "identity_status": "VERIFIED",
        "name": "Sohel",
        "address": "Pune, Maharashtra"
    }


@app.get("/education/{citizen_id}")
def education(citizen_id: str):
    return f"""<EducationRecord>
    <CitizenID>{citizen_id}</CitizenID>
    <student_status>VERIFIED</student_status>
    <institute>Government Institute</institute>
    <education_level>Undergraduate</education_level>
</EducationRecord>"""


@app.get("/agriculture/{citizen_id}")
def agriculture(citizen_id: str):
    return f"""citizen_id,farmer_status,crop
{citizen_id},ELIGIBLE,Sugarcane
"""