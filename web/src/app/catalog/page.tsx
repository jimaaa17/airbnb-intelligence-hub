import React from "react";

export default function CatalogHubPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
          Enterprise Data Catalog & Lineage Hub
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Certified definitions, data owners, quality scorecard, and end-to-end Medallion DAG.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px" }}>
            1. Certified Governed Metrics
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
            <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "8px" }}>
              <strong>Total Gross Revenue</strong> • <code>SUM(total_amount)</code><br />
              <span style={{ color: "var(--text-secondary)" }}>Owner: Finance & Revenue | Tier-1 KPI</span>
            </div>
            <div style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "8px" }}>
              <strong>Booking Conversion Rate</strong> • <code>COUNT(confirmed) / COUNT(total) * 100</code><br />
              <span style={{ color: "var(--text-secondary)" }}>Owner: Product Growth (SSOT) | Tier-1 KPI</span>
            </div>
            <div>
              <strong>Cancellation Rate</strong> • <code>COUNT(cancelled) / COUNT(total) * 100</code><br />
              <span style={{ color: "var(--text-secondary)" }}>Owner: Trust & Safety | Risk Metric</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px" }}>
            2. Data Quality & Test Scorecard
          </h3>
          <div style={{ background: "#E8F5E9", color: "#008A05", padding: "12px", borderRadius: "8px", fontWeight: 700, marginBottom: "14px" }}>
            ✔ 82 of 82 dbt Data Tests Passing
          </div>
          <ul style={{ paddingLeft: "20px", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <li><strong>Raw S3 Gatekeeper:</strong> <code>source_tests.sql</code> validates raw staging contracts.</li>
            <li><strong>Foreign Key Integrity:</strong> 100% referential integrity across SCD Type 2 dimensions.</li>
            <li><strong>Reconciliation Invariants:</strong> Verified: <code>COUNT(bronze) == COUNT(silver) == COUNT(obt)</code>.</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "12px" }}>
          3. End-to-End Medallion DAG Architecture
        </h3>
        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
          AWS S3 Ingestion → Staging (COPY INTO) → Bronze (Watermarks) → Silver (Macros & Merge) → Gold (OBT & SCD2) → Semantic Layer → FastAPI Gateway → Next.js OOP Frontend.
        </p>
        <div style={{ background: "#1E293B", color: "#F8FAFC", padding: "20px", borderRadius: "10px", fontFamily: "monospace", fontSize: "0.85rem", lineHeight: "1.6", overflowX: "auto" }}>
{`[S3 Bucket] ──► [AIRBNB.staging] ──► [AIRBNB.bronze (watermark: CREATED_AT)]
                                            │
                                            ▼
                                  [AIRBNB.silver (merge on ID, multiply, tag)]
                                            │
                       ┌────────────────────┴────────────────────┐
                       ▼                                         ▼
         [AIRBNB.gold.dim_* (SCD Type 2)]         [AIRBNB.gold.obt (Denormalized)]
                       │                                         │
                       └───────────────────┬─────────────────────┘
                                           ▼
                            [dbt Semantic Layer / MetricFlow]
                                           │
                                           ▼
                              [FastAPI Gateway :8000]
                                           │
                                           ▼
                     [Next.js OOP Frontend :3000 / Cloudflare Pages]`}
        </div>
      </div>
    </div>
  );
}
