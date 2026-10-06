import { ApiClient } from "./api-client";
import {
  PricePredictionRequest,
  PricePredictionResponse,
  CancellationPredictionRequest,
  CancellationPredictionResponse,
} from "../models/prediction.model";

export class PredictionService extends ApiClient {
  public async predictFairPrice(req: PricePredictionRequest): Promise<PricePredictionResponse> {
    return this.post<PricePredictionResponse, PricePredictionRequest>("/api/v1/predict/price", req);
  }

  public async predictCancellation(req: CancellationPredictionRequest): Promise<CancellationPredictionResponse> {
    return this.post<CancellationPredictionResponse, CancellationPredictionRequest>("/api/v1/predict/cancellation", req);
  }
}

export const predictionService = new PredictionService();
