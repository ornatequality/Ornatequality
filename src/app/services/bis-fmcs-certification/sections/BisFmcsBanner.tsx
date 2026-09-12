import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/fmcs.webp";

export function BisFmcsBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS FMCS Certification for Foreign Manufacturers — Complete guide to selling products in India"
      label="BIS FMCS Certification banner"
    />
  );
}
