import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="header-bar">
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg viewBox="0 0 1000 1000" style={{ width: 38, height: 38, fill: "#FF385C" }}>
          <path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-3.9-70 18-93.1 21-22 52-26 84-11.9 8.1 3.9 16.1 9 23.9 15 8-6 16-11.1 24.1-15 32-14.1 63-10.1 84 11.9 22 23.1 28 54.1 18 93.1-10 48-40 104.1-91 168.1zm362.2 43c-7 47-32 86-75 116-43 30-95 45-156 45-79 0-149-26-210-78-61 52-131 78-210 78-61 0-113-15-156-45-43-30-68-69-75-116-8-51 3-107 33-167 31-62 76-124 135-186l143-149 143 149c59 62 104 124 135 186 30 60 41 116 33 167zm70-179c-38-76-92-152-162-227l-203-211c-9-10-21-15-34-15s-25 5-34 15l-203 211c-70 75-124 151-162 227-38 75-52 147-42 215 11 74 51 135 119 183 67 47 149 71 246 71 96 0 178-24 246-71 68-48 108-109 119-183 10-68-4-140-42-215z"/>
        </svg>
        <div>
          <h1 className="brand-title">Airbnb Intelligence Hub</h1>
          <p className="brand-subtitle">Enterprise Semantic Serving & Real-Time Predictive AI Platform</p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F7F7F7", border: "1px solid #EBEBEB", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#008A05", display: "inline-block" }}></span>
          <span>Snowflake Gold Mart • Synced</span>
        </div>
        <div style={{ background: "#FFFFFF", border: "1px solid #EBEBEB", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600 }}>
          <span>👤 Executive SME Workspace</span>
        </div>
      </div>
    </header>
  );
};
