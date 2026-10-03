import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import iecBanner from "@/assests/services/IEC regestrartion.png";

export function IecBanner() {
  return (
    <ServicePageBanner
      src={iecBanner}
      alt="IEC Registration Consultant in India — Import Export Code registration, annual update and reactivation"
      label="IEC Registration banner"
    />
  );
}
