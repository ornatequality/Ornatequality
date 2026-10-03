import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/BIS ISI certification.png";

export function BisIsiBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS ISI Certification — For Quality Products. A Safer India."
      label="BIS ISI Mark Certification banner"
    />
  );
}
