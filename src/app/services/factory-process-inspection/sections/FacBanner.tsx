import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import facBanner from "@/assests/services/FPI.png";

export function FacBanner() {
  return (
    <ServicePageBanner
      src={facBanner}
      alt="Factory & Process Inspection Services in India — Know how your supplier really works before you commit to an order"
      label="Factory & Process Inspection banner"
    />
  );
}
