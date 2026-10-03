import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import nablBanner from "@/assests/services/NABL Testing.png";

export function NablBanner() {
  return (
    <ServicePageBanner
      src={nablBanner}
      alt="NABL Accreditation in India — Testing and calibration laboratory accreditation"
      label="NABL Accreditation banner"
    />
  );
}
