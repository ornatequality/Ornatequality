import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/biss.webp";

export function BisCertificationBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS Certification Services in India — ISI Mark, BIS CRS and FMCS"
      label="BIS Certification banner"
    />
  );
}
