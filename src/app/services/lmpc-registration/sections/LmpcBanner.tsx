import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import lmpcBanner from "@/assests/services/LMPC regestration.png";

export function LmpcBanner() {
  return (
    <ServicePageBanner
      src={lmpcBanner}
      alt="LMPC Registration in India — Legal Metrology Packaged Commodities Certificate for importers, manufacturers and packers"
      label="LMPC Registration banner"
    />
  );
}
