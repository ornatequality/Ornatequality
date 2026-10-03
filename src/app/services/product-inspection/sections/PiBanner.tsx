import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import piBanner from "@/assests/services/PI.png";

export function PiBanner() {
  return (
    <ServicePageBanner
      src={piBanner}
      alt="Product Inspection & Quality Monitoring Services in India — Independent AQL-based factory inspection"
      label="Product Inspection banner"
    />
  );
}
