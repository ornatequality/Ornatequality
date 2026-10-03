import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import ceBanner from "@/assests/services/CE certification.png";

export function CeBanner() {
  return (
    <ServicePageBanner
      src={ceBanner}
      alt="CE Certification & CE Marking Services in India — Take your product into the European market with documentation that stands up to scrutiny"
      label="CE Certification banner"
    />
  );
}
