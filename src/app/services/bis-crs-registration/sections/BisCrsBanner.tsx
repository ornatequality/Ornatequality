import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/biss.webp";

export function BisCrsBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS CRS Registration in India — Trusted consultant for electronics, IT and solar products"
      label="BIS CRS Registration banner"
    />
  );
}
