import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import pesoBanner from "@/assests/services/CCOE PESO Certificatio.png";

export function PesoCcoeBanner() {
  return (
    <ServicePageBanner
      src={pesoBanner}
      alt="PESO / CCOE Certification — Petroleum, Explosives, Compressed Gases, Hazardous Installations"
      label="PESO / CCOE Registration banner"
    />
  );
}
