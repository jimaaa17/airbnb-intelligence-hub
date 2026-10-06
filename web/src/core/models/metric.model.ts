export interface GovernedMetricDefinition {
  label: string;
  formula: string;
  owner: string;
  tier: string;
}

export interface MetricQueryRequest {
  metrics: string[];
  dimensions: string[];
  time_grain?: string;
}

export interface MetricQueryResponse {
  status: string;
  query_id: string;
  compiled_sql: string;
  metrics_requested: string[];
  dimensions_requested: string[];
  row_count: number;
  data: Record<string, any>[];
}

export interface SemanticCatalog {
  semantic_layer: string;
  governed_metrics: Record<string, GovernedMetricDefinition>;
  certified_source: string;
  data_tests_passing: number;
}
