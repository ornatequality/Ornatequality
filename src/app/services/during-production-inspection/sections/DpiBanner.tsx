import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import dpiBanner from "@/assests/services/DPI.png";

export function DpiBanner() {
  return (
    <ServicePageBanner
      src={dpiBanner}
      alt="During Production Inspection (DPI) Services in India — Catch defects while production is still running"
      label="During Production Inspection banner"
    />
  );
}
