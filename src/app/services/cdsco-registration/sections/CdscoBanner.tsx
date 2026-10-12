import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import cdscoBanner from "@/assests/services/CDSCO Certification.png";

export function CdscoBanner() {
  return (
    <ServicePageBanner
      src={cdscoBanner}
      alt="CDSCO Certification for Medical Devices in India — classification, dossier, filing and licence"
      label="CDSCO Certification banner"
    />
  );
}
