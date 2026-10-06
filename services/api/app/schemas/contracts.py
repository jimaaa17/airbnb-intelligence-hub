"""Pydantic Contract Schemas for Airbnb Intelligence Hub."""

from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field


class MetricQueryRequest(BaseModel):
    metrics: List[str] = Field(
        ...,
        examples=[["booking_conversion_rate", "total_revenue"]],
        description="List of governed metric names from semantic models"
    )
    dimensions: List[str] = Field(
        default_factory=list,
        examples=[["CITY", "PRICE_PER_NIGHT_TAG"]],
        description="Dimensions to group by (e.g., CITY, ROOM_TYPE)"
    )
    time_grain: Optional[str] = Field("month", description="Time granularity: day, month, year")


class MetricQueryResponse(BaseModel):
    status: str = "success"
    query_id: str
    compiled_sql: str
    metrics_requested: List[str]
    dimensions_requested: List[str]
    row_count: int
    data: List[Dict[str, Any]]


class CancellationRequest(BaseModel):
    booking_date: str = Field("2024-06-15", examples=["2024-06-15"])
    booking_created_at: str = Field("2024-05-15", examples=["2024-05-15"])
    total_amount: float = Field(250.0, examples=[250.0])
    cleaning_fee: float = Field(50.0, examples=[50.0])
    service_fee: float = Field(30.0, examples=[30.0])
    accommodates: int = Field(4, examples=[4])
    bedrooms: int = Field(2, examples=[2])
    bathrooms: float = Field(1.5, examples=[1.5])
    price_per_night: float = Field(150.0, examples=[150.0])
    price_per_night_tag: str = Field("MEDIUM", examples=["MEDIUM"])
    property_type: str = Field("Apartment", examples=["Apartment"])
    room_type: str = Field("Entire home", examples=["Entire home"])
    city: str = Field("Paris", examples=["Paris"])
    is_superhost: str = Field("TRUE", examples=["TRUE"])
    response_rate: float = Field(95.0, examples=[95.0])
    response_rate_band: str = Field("VERY GOOD", examples=["VERY GOOD"])


class CancellationResponse(BaseModel):
    cancellation_probability: float
    cancellation_risk_level: str
    predicted_is_cancelled: int
    threshold_applied: float
    recommended_action: str


class PriceRequest(BaseModel):
    accommodates: int = Field(4, examples=[4])
    bedrooms: int = Field(2, examples=[2])
    bathrooms: float = Field(1.5, examples=[1.5])
    cleaning_fee: float = Field(50.0, examples=[50.0])
    property_type: str = Field("Apartment", examples=["Apartment"])
    room_type: str = Field("Entire home", examples=["Entire home"])
    city: str = Field("Paris", examples=["Paris"])
    is_superhost: str = Field("TRUE", examples=["TRUE"])
    response_rate: float = Field(95.0, examples=[95.0])
    response_rate_band: str = Field("VERY GOOD", examples=["VERY GOOD"])


class PriceResponse(BaseModel):
    predicted_fair_price_per_night: float
    recommended_min_guardrail: float
    recommended_max_guardrail: float
    currency: str = "USD"
    model_version: str = "GradientBoostingRegressor_v1"
