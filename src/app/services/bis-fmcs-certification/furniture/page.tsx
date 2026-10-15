import type { Metadata } from "next";
import { FurniturePageContent } from "./sections/FurniturePageContent";

export const metadata: Metadata = {
  title: "BIS Certification for Furniture in India | QCO 2025, ISI Mark & FMCS | Ornate Quality Services",
  description:
    "BIS certification for furniture under the Furniture (Quality Control) Order, 2025. ISI mark and FMCS support for work chairs, tables, storage units, beds and bunk beds from 13 February 2026.",
};

export default function BisFurniturePage() {
  return <FurniturePageContent />;
}
