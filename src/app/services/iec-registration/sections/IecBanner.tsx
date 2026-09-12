import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import iecBanner from "@/assests/services/iec.webp";

export function IecBanner() {
  return (
    <ServicePageBanner
      src={iecBanner}
      alt="IEC Registration in India — Import Export Code from DGFT for importers and exporters"
      label="IEC Registration banner"
    />
  );
}
