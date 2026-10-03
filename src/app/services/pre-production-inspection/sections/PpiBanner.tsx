import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import ppiBanner from "@/assests/services/PPI.png";

export function PpiBanner() {
  return (
    <ServicePageBanner
      src={ppiBanner}
      alt="Pre-Production Inspection (PPI) Services in India — Catch quality problems before mass production"
      label="Pre-Production Inspection banner"
    />
  );
}
