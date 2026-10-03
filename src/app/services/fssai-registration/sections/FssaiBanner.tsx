import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import fssaiBanner from "@/assests/services/Fassi regetration.png";

export function FssaiBanner() {
  return (
    <ServicePageBanner
      src={fssaiBanner}
      alt="FSSAI Registration & Food License Consultant in India — Application to certificate support"
      label="FSSAI Registration banner"
    />
  );
}
