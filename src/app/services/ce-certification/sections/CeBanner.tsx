import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import ceBanner from "@/assests/services/ce.webp";

export function CeBanner() {
  return (
    <ServicePageBanner
      src={ceBanner}
      alt="CE Certification for Indian manufacturers — compliance for exporting to Europe"
      label="CE Certification banner"
    />
  );
}
