import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import nablBanner from "@/assests/services/nabl.webp";

export function NablBanner() {
  return (
    <ServicePageBanner
      src={nablBanner}
      alt="NABL Accreditation in India — Testing and calibration laboratory accreditation"
      label="NABL Accreditation banner"
    />
  );
}
