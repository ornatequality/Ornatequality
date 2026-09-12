import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import trademarkBanner from "@/assests/services/trademark-banner.png";

export function TrademarkBanner() {
  return (
    <ServicePageBanner
      src={trademarkBanner}
      alt="Trademark Registration in India — Protect your brand name and logo"
      label="Trademark Registration banner"
    />
  );
}
