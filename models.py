from pydantic import BaseModel


class ApplicationRequest(BaseModel):
    citizen_id: str
    service: str
    consent_id: str


class AgentApplicationRequest(BaseModel):
    citizen_id: str
    consent_id: str
    request: str


class LandRecord(BaseModel):
    citizen_id: str
    owner_name: str
    address: str
    ownership_status: str


class TaxStatus(BaseModel):
    citizen_id: str
    tax_status: str
    pending_tax: float
    assessment_year: str


class WelfareStatus(BaseModel):
    citizen_id: str
    income: float
    benefit_status: str