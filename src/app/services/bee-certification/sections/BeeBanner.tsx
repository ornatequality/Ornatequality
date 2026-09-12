import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import beeBanner from "@/assests/services/bee.webp";

export function BeeBanner() {
  return (
    <ServicePageBanner
      src={beeBanner}
      alt="BEE Star Rating Registration Consultant in India — Standards & Labelling for appliances"
      label="BEE Certification banner"
    />
  );
}
