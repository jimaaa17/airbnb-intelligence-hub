# Airbnb Intelligence Hub 🏠✨

> **Enterprise Decoupled 3-Tier Semantic Intelligence & Real-Time Predictive AI Platform**

[![CI/CD Pipeline](https://github.com/jimaaa17/airbnb-intelligence-hub/actions/workflows/ci_cd_pipeline.yml/badge.svg)](https://github.com/jimaaa17/airbnb-intelligence-hub/actions/workflows/ci_cd_pipeline.yml)
[![FastAPI](https://img.shields.io/badge/API-FastAPI%200.115-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![dbt](https://img.shields.io/badge/Semantic%20Layer-dbt%20MetricFlow-FF694B?logo=dbt&logoColor=white)](https://www.getdbt.com/)
[![Docker](https://img.shields.io/badge/Container-Docker%20Compose-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

---

## 🏛️ Architecture Overview

The platform decouples data transformation, machine learning inference, and presentation into three autonomous, containerized tiers connected via strict contracts:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 3: OOP FRONTEND (Next.js 14 App Router + TypeScript)                   │
│ • Object-Oriented Services (ApiClient, MetricsService, PredictionService)   │
│ • Airbnb Design System (Cereal typography, #FF385C Rausch, floating cards)  │
│ • Production Host: Cloudflare Pages / Vercel ($0.00/mo)                     │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ HTTPS REST / OpenAPI Contract
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 2: SERVING GATEWAY & REAL-TIME ML INFERENCE (FastAPI)                  │
│ • Governed Semantic Endpoints (/api/v1/metrics/query, /api/v1/catalog)      │
│ • Real-Time ML Inference (/api/v1/predict/price, /api/v1/predict/cancel)    │
│ • Zipline Feature Store: 30-day As-Of sliding window joins (no leakage)     │
│ • Production Host: Render.com / Google Cloud Run ($0.00/mo)                 │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ Secure SQL Wire
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ TIER 1: DATA WAREHOUSE & GOVERNANCE (Snowflake + dbt)                       │
│ • Medallion Architecture: S3 Raw → Bronze → Silver → Gold OBT & Dimensions  │
│ • dbt Semantic Layer / MetricFlow (Single Source of Truth)                  │
│ • 82 Data Tests continuously verified in CI/CD                              │
│ • Production Host: Snowflake (60s auto-suspend = <$0.15/mo)                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start (Local Docker Compose)

Spin up the entire decoupled 3-tier product locally with a single command:

```bash
# 1. Clone the repository
git clone https://github.com/jimaaa17/airbnb-intelligence-hub.git
cd airbnb-intelligence-hub

# 2. Boot the full multi-container stack
docker compose up --build
```

* **Frontend UI (Next.js):** [http://localhost:3000](http://localhost:3000)
* **Serving & ML Gateway (FastAPI):** [http://localhost:8000/docs](http://localhost:8000/docs)
* **Health Check:** `http://localhost:8000/health`

---

## 🌐 Zero-Cost ($0.00 / Month) Production Hosting Blueprint

Deploy the entire enterprise platform live to the public internet for **$0.00 / month**:

| Component | Target Host | Monthly Cost | Deployment Trigger |
| :--- | :--- | :--- | :--- |
| **Tier 3: Frontend** | **Cloudflare Pages** or **Vercel** | **$0.00** (Unlimited bandwidth) | Git push to `web/` |
| **Tier 2: ML API** | **Render.com** (Free Web Service) | **$0.00** (750 instance hrs/mo) | Git push to `services/api/` |
| **Tier 1: Data Mart** | **Snowflake** (`AUTO_SUSPEND = 60`) | **<$0.15** (~$0.00) | Scheduled dbt GitHub Action |
| **CI/CD Runners** | **GitHub Actions** (2,000 mins/mo) | **$0.00** (Free for public repo)| Git push to `main` |

---

## 📁 Repository Structure

```
airbnb-intelligence-hub/
├── .github/workflows/ci_cd_pipeline.yml  # Monorepo CI/CD quality gate
├── data/                                 # Tier 1: dbt Snowflake models, macros & tests
├── services/api/                         # Tier 2: FastAPI microservice & serialized ML models
│   ├── app/                              # Routers, schemas, and main application
│   ├── ml/                               # Feature Store, transformers, and inference service
│   ├── Dockerfile                        # Multi-stage production Python container
│   └── requirements.txt
├── web/                                  # Tier 3: Next.js OOP TypeScript frontend
│   ├── src/core/                         # Object-Oriented models and service clients
│   ├── src/components/                   # Airbnb Design System UI components
│   ├── src/app/                          # Next.js App Router views (Overview, RCA, ML Studio)
│   └── Dockerfile                        # Multi-stage production Node Alpine container
├── docker-compose.yml                    # Local multi-container orchestration
└── README.md
```

---

## 📄 License
MIT License. Open-source enterprise data product blueprint.
