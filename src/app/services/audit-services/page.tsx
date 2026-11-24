import type { Metadata } from "next";
import { AuditBanner } from "./sections/AuditBanner";
import { AuditPageContent } from "./sections/AuditPageContent";

const CANONICAL = "https://ornatequality.com/services/audit-services";

export const metadata: Metadata = {
  title: {
    absolute: "Domestic & International Audit Services in India | Ornate Quality Services",
  },
  description:
    "Independent factory, social compliance, supplier and quality management system audits for manufacturers, exporters, brand owners and retail sourcing teams — planned, carried out and reported by Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Domestic & International Audit Services in India | Ornate Quality Services",
    description:
      "Independent factory, social compliance, supplier and quality management system audits for manufacturers, exporters, brand owners and retail sourcing teams — planned, carried out and reported by Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function AuditServicesPage() {
  return (
    <>
      <AuditBanner />
      <AuditPageContent />
    </>
  );
}
