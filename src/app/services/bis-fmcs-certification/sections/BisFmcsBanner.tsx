import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/FMCS Certification.png";

export function BisFmcsBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="FMCS Certification — Foreign Manufacturers Certification Scheme"
      label="BIS FMCS Certification banner"
    />
  );
}
