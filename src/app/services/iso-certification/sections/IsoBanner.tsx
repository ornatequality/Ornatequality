import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import isoBanner from "@/assests/services/ISO certifictaion.png";

export function IsoBanner() {
  return (
    <ServicePageBanner
      src={isoBanner}
      alt="ISO Certification in India & Globally — Build a Stronger, More Efficient and Future-Ready Business"
      label="ISO Certification banner"
    />
  );
}
