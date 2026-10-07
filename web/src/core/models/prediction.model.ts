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

export interface SmeCancellationImpact {
  total_bookings_evaluated: number;
  total_booking_volume_usd: number;
  revenue_at_risk_usd: number;
  revenue_protected_usd: number;
  protection_capture_rate: number;
  estimated_salvaged_revenue_usd: number;
  avg_lead_time_days_for_rebooking: number;
  false_alarm_rate: number;
}

export interface SmePricingImpact {
  underpriced_listings_pct: number;
  overpriced_listings_pct: number;
  within_guardrails_pct: number;
  avg_nightly_dollar_error_usd: number;
  avg_underpriced_gap_usd: number;
  estimated_monthly_uplift_per_listing_usd: number;
}

export interface SmeImpactReportResponse {
  cancellation_impact: SmeCancellationImpact;
  pricing_impact: SmePricingImpact;
  registry_champion_alias: string;
  mlflow_tracking_status: string;
}

export interface FeatureImportanceItem {
  feature: string;
  mean_abs_shap: number;
  rank: number;
}

export interface ShapExplanationResponse {
  model_name: string;
  top_global_drivers: FeatureImportanceItem[];
  underpriced_gap_drivers: string[];
}
