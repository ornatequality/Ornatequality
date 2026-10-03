import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import wpcBanner from "@/assests/services/WPC Approval.png";

export function WpcBanner() {
  return (
    <ServicePageBanner
      src={wpcBanner}
      alt="WPC-ETA Approval Consultant in India — Equipment Type Approval for Wireless Products"
      label="WPC ETA Approval banner"
    />
  );
}
