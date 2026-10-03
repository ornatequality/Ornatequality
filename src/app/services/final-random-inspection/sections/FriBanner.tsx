import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import friBanner from "@/assests/services/fri.png";

export function FriBanner() {
  return (
    <ServicePageBanner
      src={friBanner}
      alt="Final Random Inspection (FRI) Services in India — Independent AQL-based inspection of finished, packed goods before shipment"
      label="Final Random Inspection banner"
    />
  );
}
