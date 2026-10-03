import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import eprBanner from "@/assests/services/EPR regestration.png";

export function EprBanner() {
  return (
    <ServicePageBanner
      src={eprBanner}
      alt="EPR Registration in India — Extended Producer Responsibility compliance under CPCB"
      label="EPR Registration banner"
    />
  );
}
