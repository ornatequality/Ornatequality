import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import fssaiBanner from "@/assests/services/FSSAI.webp";

export function FssaiBanner() {
  return (
    <ServicePageBanner
      src={fssaiBanner}
      alt="FSSAI Registration in India — Food business licensing and compliance"
      label="FSSAI Registration banner"
    />
  );
}
