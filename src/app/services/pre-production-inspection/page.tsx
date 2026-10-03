import type { Metadata } from "next";
import { PpiBanner } from "./sections/PpiBanner";
import { PpiPageContent } from "./sections/PpiPageContent";

export const metadata: Metadata = {
  title: "Pre-Production Inspection (PPI) Services in India | Ornate Quality Services",
  description:
    "Independent pre-production inspection in India with AQL-based sampling aligned to ISO 2859-1:2026. Ornate Quality Service Pvt. Ltd. checks raw materials, workmanship and production readiness before mass production.",
};

export default function PreProductionInspectionPage() {
  return (
    <>
      <PpiBanner />
      <PpiPageContent />
    </>
  );
}
