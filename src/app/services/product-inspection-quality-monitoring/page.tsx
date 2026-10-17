import type { Metadata } from "next";
import { PiBanner } from "../product-inspection/sections/PiBanner";
import { PiPageContent } from "../product-inspection/sections/PiPageContent";

const CANONICAL =
  "https://www.ornatequality.com/services/product-inspection-quality-monitoring";

export const metadata: Metadata = {
  title: {
    absolute: "Product Inspection & Quality Monitoring | Ornate Quality Services",
  },
  description:
    "Independent, AQL-based product inspection at your supplier's factory. Product quality inspection, pre-shipment checks and quality monitoring for importers, brand owners and manufacturers in India.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Product Inspection & Quality Monitoring | Ornate Quality Services",
    description:
      "Independent, AQL-based product inspection at your supplier's factory. Product quality inspection, pre-shipment checks and quality monitoring for importers, brand owners and manufacturers in India.",
    url: CANONICAL,
  },
};

export default function ProductInspectionPage() {
  return (
    <>
      <PiBanner />
      <PiPageContent />
    </>
  );
}
