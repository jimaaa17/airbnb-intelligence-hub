"use client";

import React, { useState } from "react";

export default function MetricExplorerPage() {
  const [selectedMetric, setSelectedMetric] = useState("booking_conversion_rate");
  const [selectedDimension, setSelectedDimension] = useState("CITY");

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
          Self-Service Metric Explorer
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Slice and dice governed metrics without writing raw SQL or generating metric drift.
        </p>
      </div>

      <div className="card" style={{ marginBottom: "20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <div>
            <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>Select Governed Metric</label>
            <select className="form-select" value={selectedMetric} onChange={(e) => setSelectedMetric(e.target.value)}>
              <option value="booking_conversion_rate">Booking Conversion Rate (Growth SSOT)</option>
              <option value="total_revenue">Total Gross Revenue (Finance SSOT)</option>
              <option value="average_booking_value">Average Booking Value (Commercial)</option>
              <option value="cancellation_rate">Cancellation Rate (Trust & Safety)</option>
            </select>
          </div>
          <div>
            <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>Group Across Dimension</label>
            <select className="form-select" value={selectedDimension} onChange={(e) => setSelectedDimension(e.target.value)}>
              <option value="CITY">Market / City</option>
              <option value="PROPERTY_TYPE">Property Type</option>
              <option value="PRICE_PER_NIGHT_TAG">Price Tier</option>
              <option value="IS_SUPERHOST">Superhost Status</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "10px" }}>
          Audited Snowflake SQL (Compiled by Semantic Layer)
        </h3>
        <pre style={{ background: "#F9FAFB", padding: "16px", borderRadius: "10px", border: "1px solid #E5E7EB", overflowX: "auto", fontSize: "0.85rem", color: "#1F2937" }}>
{`-- Compiled by dbt MetricFlow Semantic Engine
SELECT
    obt.${selectedDimension},
    COUNT(CASE WHEN booking_status = 'confirmed' THEN 1 END) / COUNT(booking_id) * 100 AS ${selectedMetric}
FROM AIRBNB.gold.obt AS obt
GROUP BY obt.${selectedDimension}
ORDER BY 1 ASC;`}
        </pre>
      </div>
    </div>
  );
}
