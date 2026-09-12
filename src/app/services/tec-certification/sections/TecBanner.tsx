import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import tecBanner from "@/assests/services/etc.webp";

export function TecBanner() {
  return (
    <ServicePageBanner
      src={tecBanner}
      alt="TEC Approval Services in India — MTCTE certification for telecom equipment"
      label="TEC Approval Services in India banner"
    />
  );
}
