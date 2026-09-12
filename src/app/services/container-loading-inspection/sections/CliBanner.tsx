import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import cliBanner from "@/assests/services/cli-banner.webp";

export function CliBanner() {
  return (
    <ServicePageBanner
      src={cliBanner}
      alt="CLI Container Loading Inspection Service — ensuring safe, accurate and compliant shipments"
      label="Container Loading Inspection (CLI) Services in India banner"
    />
  );
}
