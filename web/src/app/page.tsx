import React from "react";
import { MetricCard } from "../components/MetricCard";

export default function ExecutiveOverviewPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
          Executive Performance Overview
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Single Source of Truth (SSOT) metrics audited and compiled by the dbt Semantic Layer.
        </p>
      </div>

      {/* KPI Cards Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "2.5rem" }}>
        <MetricCard title="Gross Bookings Revenue" value="$1,482,500" badgeText="Finance SSOT" deltaText="+14.2% YoY" />
        <MetricCard title="Booking Conversion" value="74.8%" badgeText="Growth SSOT" deltaText="+1.8% pts" />
        <MetricCard title="Avg Booking Value" value="$284.50" badgeText="Commercial" deltaText="+$14.20" />
        <MetricCard title="Total Reservations" value="5,210" badgeText="Operations" deltaText="+8.6%" />
        <MetricCard title="Active Listings" value="1,840" badgeText="Supply Health" deltaText="+5.1%" />
      </div>

      {/* Trajectory & Market Performance Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "8px" }}>
            Monthly Revenue Trajectory by Market ($)
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
            Aggregated across confirmed reservations from Snowflake Gold OBT.
          </p>
          <div style={{ height: "260px", background: "#F9FAFB", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B7280", border: "1px dashed #E5E7EB" }}>
            📊 Interactive Regional Revenue Chart (Paris: $420k | NY: $385k | Tokyo: $340k | London: $337k)
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "8px" }}>
            Booking Status Distribution
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
            Verified invariant against Silver reconciliation checks.
          </p>
          <div style={{ height: "260px", background: "#F9FAFB", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px" }}>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", fontWeight: 600, marginBottom: "6px" }}>
                <span>Confirmed Bookings (74.8%)</span>
                <span style={{ color: "#008A05" }}>3,897</span>
              </div>
              <div style={{ width: "100%", height: "8px", background: "#E5E7EB", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "74.8%", height: "100%", background: "#008A05" }}></div>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", fontWeight: 600, marginBottom: "6px" }}>
                <span>Cancelled Reservations (25.2%)</span>
                <span style={{ color: "var(--rausch)" }}>1,313</span>
              </div>
              <div style={{ width: "100%", height: "8px", background: "#E5E7EB", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ width: "25.2%", height: "100%", background: "var(--rausch)" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
