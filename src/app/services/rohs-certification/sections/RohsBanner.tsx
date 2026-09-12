import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import rohsBanner from "@/assests/services/rohs.webp";

export function RohsBanner() {
  return (
    <ServicePageBanner
      src={rohsBanner}
      alt="RoHS Certification in India — Hazardous substance compliance for electronics exporters"
      label="RoHS Certification banner"
    />
  );
}
