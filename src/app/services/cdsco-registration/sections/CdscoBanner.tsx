import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import cdscoBanner from "@/assests/services/cdsco.webp";

export function CdscoBanner() {
  return (
    <ServicePageBanner
      src={cdscoBanner}
      alt="CDSCO Registration in India — Medical device and drug regulatory compliance"
      label="CDSCO Registration banner"
    />
  );
}
