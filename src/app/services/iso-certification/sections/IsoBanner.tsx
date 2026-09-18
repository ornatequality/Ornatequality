import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import isoBanner from "@/assests/services/iso-banner.png";

export function IsoBanner() {
  return (
    <ServicePageBanner
      src={isoBanner}
      alt="ISO Certification in India — Structured, audit-ready management system certification support"
      label="ISO Certification banner"
    />
  );
}
