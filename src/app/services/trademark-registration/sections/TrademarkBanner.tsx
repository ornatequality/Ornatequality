import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import trademarkBanner from "@/assests/services/Trademark regestration.png";

export function TrademarkBanner() {
  return (
    <ServicePageBanner
      src={trademarkBanner}
      alt="Trademark Registration in India — Protect your brand name, logo and tagline"
      label="Trademark Registration banner"
    />
  );
}
