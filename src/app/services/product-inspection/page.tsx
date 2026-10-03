import type { Metadata } from "next";
import { PiBanner } from "./sections/PiBanner";
import { PiPageContent } from "./sections/PiPageContent";

export const metadata: Metadata = {
  title: "Product Inspection & Quality Monitoring Services in India | Ornate Quality Services Pvt Ltd",
  description:
    "Independent, AQL-based product inspection at your supplier's factory. Product quality inspection, pre-shipment checks and quality monitoring for importers, brand owners and manufacturers in India.",
};

export default function ProductInspectionPage() {
  return (
    <>
      <PiBanner />
      <PiPageContent />
    </>
  );
}
