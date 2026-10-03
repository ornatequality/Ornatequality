import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import tpiBanner from "@/assests/services/third party.png";

export function TpiBanner() {
  return (
    <ServicePageBanner
      src={tpiBanner}
      alt="Third Party Inspection Services in India — Independent quality verification"
      label="Third Party Inspection banner"
    />
  );
}
