import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/Bis certification.png";

export function BisCertificationBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS Certification in India — Ensure Product Quality. Meet Indian Standards. Build Trust."
      label="BIS Certification banner"
    />
  );
}
