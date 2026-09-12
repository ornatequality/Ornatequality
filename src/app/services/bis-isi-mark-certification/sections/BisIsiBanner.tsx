import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import bisBanner from "@/assests/services/isi.webp";

export function BisIsiBanner() {
  return (
    <ServicePageBanner
      src={bisBanner}
      alt="BIS ISI Mark Certification in India — Complete ISI Certification Process, Requirements and Benefits"
      label="BIS ISI Mark Certification banner"
    />
  );
}
