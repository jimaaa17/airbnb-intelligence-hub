"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "📈 Executive Overview", path: "/" },
  { label: "🔬 Diagnostic RCA & A/B", path: "/diagnostic" },
  { label: "🎯 Predictive ML Studio", path: "/predictive" },
  { label: "⚡ Metric Explorer", path: "/explorer" },
  { label: "📚 Catalog & Lineage Hub", path: "/catalog" },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="nav-pills">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-pill ${isActive ? "active" : ""}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
