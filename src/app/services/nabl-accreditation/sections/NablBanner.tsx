import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import nablBanner from "@/assests/services/NABL Testing.png";

export function NablBanner() {
  return (
    <ServicePageBanner
      src={nablBanner}
      alt="NABL Accredited Lab Testing Services in India — Test reports from accredited laboratories"
      label="NABL Lab Testing banner"
    />
  );
}
