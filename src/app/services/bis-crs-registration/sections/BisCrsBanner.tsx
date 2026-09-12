import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/biss.webp";

export function BisCrsBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS Certification Services in India — Complete BIS CRS, ISI and FMCS Registration Support"
      label="BIS Certification Services banner"
    />
  );
}
