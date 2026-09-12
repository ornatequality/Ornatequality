import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import pesoBanner from "@/assests/services/pesoccoe.webp";

export function PesoCcoeBanner() {
  return (
    <ServicePageBanner
      src={pesoBanner}
      alt="PESO / CCOE Registration in India — Explosives, petroleum and compressed gas compliance"
      label="PESO / CCOE Registration banner"
    />
  );
}
