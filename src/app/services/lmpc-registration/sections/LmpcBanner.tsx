import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import lmpcBanner from "@/assests/services/lmpc-banner.png";

export function LmpcBanner() {
  return (
    <ServicePageBanner
      src={lmpcBanner}
      alt="LMPC Registration in India — Legal Metrology Packaged Commodities compliance for importers"
      label="LMPC Registration banner"
    />
  );
}
