import React from "react";
import "../styles/globals.css";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";

export const metadata = {
  title: "Airbnb Intelligence Hub",
  description: "Enterprise Decoupled 3-Tier Semantic Intelligence & Predictive ML Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navigation />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
