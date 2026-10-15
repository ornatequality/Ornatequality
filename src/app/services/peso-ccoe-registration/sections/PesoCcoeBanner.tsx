import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import pesoBanner from "@/assests/services/CCOE PESO Certificatio.png";

export function PesoCcoeBanner() {
  return (
    <ServicePageBanner
      src={pesoBanner}
      alt="PESO Flame Proof Approval — ex-proof equipment certification for hazardous areas"
      label="PESO Flame Proof Approval banner"
    />
  );
}
