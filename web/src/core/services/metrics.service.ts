import { ApiClient } from "./api-client";
import { MetricQueryRequest, MetricQueryResponse, SemanticCatalog } from "../models/metric.model";

export class MetricsService extends ApiClient {
  public async getCatalog(): Promise<SemanticCatalog> {
    return this.get<SemanticCatalog>("/api/v1/catalog");
  }

  public async queryMetrics(request: MetricQueryRequest): Promise<MetricQueryResponse> {
    return this.post<MetricQueryResponse, MetricQueryRequest>("/api/v1/metrics/query", request);
  }
}

export const metricsService = new MetricsService();
