import React from "react";

interface MetricCardProps {
  title: string;
  value: string;
  badgeText: string;
  deltaText?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  badgeText,
  deltaText,
}) => {
  return (
    <div className="card">
      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {title}
      </div>
      <div className="metric-value">{value}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="badge badge-rausch">{badgeText}</span>
        {deltaText && (
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#008A05" }}>
            {deltaText}
          </span>
        )}
      </div>
    </div>
  );
};
