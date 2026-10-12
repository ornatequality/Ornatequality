import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import techBanner from "@/assests/services/TECHNICAL DOCUMENTATION & COMPLIANCE SUPPORT”.png";

export function TechBanner() {
  return (
    <ServicePageBanner
      src={techBanner}
      alt="Technical Documentation and Compliance Support — technical file, manuals and submission dossier"
      label="Technical Documentation banner"
    />
  );
}
