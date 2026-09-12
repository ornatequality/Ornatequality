import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import gemBanner from "@/assests/services/gem-banner.png";

export function GemBanner() {
  return (
    <ServicePageBanner
      src={gemBanner}
      alt="GeM Portal Registration in India — Government e-Marketplace seller onboarding"
      label="GeM Portal Registration banner"
    />
  );
}
