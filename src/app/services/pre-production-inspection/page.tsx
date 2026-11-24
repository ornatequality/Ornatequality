import type { Metadata } from "next";
import { PpiBanner } from "./sections/PpiBanner";
import { PpiPageContent } from "./sections/PpiPageContent";

const CANONICAL = "https://ornatequality.com/services/pre-production-inspection";

export const metadata: Metadata = {
  title: {
    absolute: "Pre-Production Inspection | Ornate Quality Services",
  },
  description:
    "Independent pre-production inspection in India with AQL-based sampling aligned to ISO 2859-1:2026. Ornate Quality Service Pvt. Ltd. checks raw materials, workmanship and production readiness before mass production.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Pre-Production Inspection | Ornate Quality Services",
    description:
      "Independent pre-production inspection in India with AQL-based sampling aligned to ISO 2859-1:2026. Ornate Quality Service Pvt. Ltd. checks raw materials, workmanship and production readiness before mass production.",
    url: CANONICAL,
  },
};

export default function PreProductionInspectionPage() {
  return (
    <>
      <PpiBanner />
      <PpiPageContent />
    </>
  );
}
