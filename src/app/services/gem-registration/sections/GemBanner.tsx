import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import gemBanner from "@/assests/services/GEM regestration.png";

export function GemBanner() {
  return (
    <ServicePageBanner
      src={gemBanner}
      alt="GeM Registration Services in India — Complete GeM portal support for sellers, manufacturers and service providers"
      label="GeM Registration banner"
    />
  );
}
