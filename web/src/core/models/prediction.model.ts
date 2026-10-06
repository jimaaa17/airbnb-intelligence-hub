export interface PricePredictionRequest {
  accommodates: number;
  bedrooms: number;
  bathrooms: number;
  cleaning_fee: number;
  property_type: string;
  room_type: string;
  city: string;
  is_superhost: string;
  response_rate: number;
  response_rate_band: string;
}

export interface PricePredictionResponse {
  predicted_fair_price_per_night: number;
  recommended_min_guardrail: number;
  recommended_max_guardrail: number;
  currency: string;
  model_version: string;
}

export interface CancellationPredictionRequest {
  booking_date: string;
  booking_created_at: string;
  total_amount: number;
  cleaning_fee: number;
  service_fee: number;
  accommodates: number;
  bedrooms: number;
  bathrooms: number;
  price_per_night: number;
  price_per_night_tag: string;
  property_type: string;
  room_type: string;
  city: string;
  is_superhost: string;
  response_rate: number;
  response_rate_band: string;
}

export interface CancellationPredictionResponse {
  cancellation_probability: number;
  cancellation_risk_level: "LOW" | "MEDIUM" | "HIGH";
  predicted_is_cancelled: number;
  threshold_applied: number;
  recommended_action: string;
}
