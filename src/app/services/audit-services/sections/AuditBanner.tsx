import React from "react";
import { ServicePageBanner } from "@/components/services/ServicePageBanner";
import auditBanner from "@/assests/services/audit.webp";

export function AuditBanner() {
  return (
    <ServicePageBanner
      src={auditBanner}
      alt="Audit and Certification Services in India — Compliance verification for manufacturers and businesses"
      label="Audit Services banner"
    />
  );
}
