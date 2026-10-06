"use client";

import React, { useState } from "react";

export default function DiagnosticRcaPage() {
  const [ctrlVisitors, setCtrlVisitors] = useState(1200);
  const [ctrlConverted, setCtrlConverted] = useState(840);
  const [testVisitors, setTestVisitors] = useState(1250);
  const [testConverted, setTestConverted] = useState(960);

  const ctrlRate = ctrlVisitors > 0 ? ctrlConverted / ctrlVisitors : 0;
  const testRate = testVisitors > 0 ? testConverted / testVisitors : 0;
  const uplift = ctrlRate > 0 ? ((testRate - ctrlRate) / ctrlRate) * 100 : 0;

  // Two proportion Z test calculation
  const pPool = (ctrlConverted + testConverted) / (ctrlVisitors + testVisitors);
  const se = Math.sqrt(pPool * (1 - pPool) * (1 / ctrlVisitors + 1 / testVisitors));
  const zScore = se > 0 ? (testRate - ctrlRate) / se : 0;
  // Approximation of normal p-value
  const pValue = 2 * (1 - 0.5 * (1 + Math.sign(zScore) * Math.sqrt(1 - Math.exp(-2 * zScore * zScore / Math.PI))));

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
          Diagnostic Root Cause Analysis & A/B Inference
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Decompose platform shifts across underlying cohorts and validate causal uplift from product experiments.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
            🔬 Dimensional Variance Attribution
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
            Isolate conversion performance drivers across dimension cohorts.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#F9FAFB", borderRadius: "8px" }}>
              <span>Superhost Listings (TRUE)</span>
              <strong style={{ color: "#008A05" }}>82.4% Conversion (Top Driver)</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#F9FAFB", borderRadius: "8px" }}>
              <span>Standard Host Listings (FALSE)</span>
              <strong style={{ color: "#D97706" }}>68.1% Conversion</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#F9FAFB", borderRadius: "8px" }}>
              <span>High Price Tier (&gt; $200)</span>
              <strong style={{ color: "var(--rausch)" }}>59.4% Conversion (Optimization Area)</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>
            🧪 A/B Hypothesis Calculator (Two-Proportion Z-Test)
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
            <div>
              <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>Control Impressions</label>
              <input type="number" className="form-input" value={ctrlVisitors} onChange={(e) => setCtrlVisitors(Number(e.target.value))} />
              <label style={{ fontSize: "0.82rem", fontWeight: 600, marginTop: "8px", display: "block" }}>Control Conversions</label>
              <input type="number" className="form-input" value={ctrlConverted} onChange={(e) => setCtrlConverted(Number(e.target.value))} />
              <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>Baseline Rate: <strong>{(ctrlRate * 100).toFixed(2)}%</strong></p>
            </div>
            <div>
              <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>Test Impressions</label>
              <input type="number" className="form-input" value={testVisitors} onChange={(e) => setTestVisitors(Number(e.target.value))} />
              <label style={{ fontSize: "0.82rem", fontWeight: 600, marginTop: "8px", display: "block" }}>Test Conversions</label>
              <input type="number" className="form-input" value={testConverted} onChange={(e) => setTestConverted(Number(e.target.value))} />
              <p style={{ fontSize: "0.85rem", marginTop: "6px" }}>Treatment Rate: <strong>{(testRate * 100).toFixed(2)}%</strong></p>
            </div>
          </div>

          <div style={{ background: "#F9FAFB", padding: "14px", borderRadius: "10px", border: "1px solid #E5E7EB" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span>Relative Uplift:</span>
              <strong style={{ color: uplift >= 0 ? "#008A05" : "var(--rausch)" }}>{uplift >= 0 ? `+${uplift.toFixed(2)}%` : `${uplift.toFixed(2)}%`}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span>Z-Score / p-Value:</span>
              <strong>Z: {zScore.toFixed(2)} | p: {pValue.toFixed(4)}</strong>
            </div>
            {pValue < 0.05 ? (
              <p style={{ color: "#008A05", fontWeight: 700, fontSize: "0.85rem" }}>
                ✅ Statistically Significant (p &lt; 0.05). Reject null hypothesis.
              </p>
            ) : (
              <p style={{ color: "#D97706", fontWeight: 700, fontSize: "0.85rem" }}>
                ⏳ Inconclusive (p ≥ 0.05). Continue test to reach target sample size.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
