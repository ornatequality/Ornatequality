import type { Metadata } from "next";
import { FurniturePageContent } from "../../bis-fmcs-certification/furniture/sections/FurniturePageContent";

export const FURNITURE_PATH = "/services/bis-isi-mark-certification/furniture";
export const FURNITURE_CANONICAL =
  "https://www.ornatequality.com/services/bis-isi-mark-certification/furniture";

export const metadata: Metadata = {
  title: {
    absolute: "BIS Certification for Furniture | Ornate Quality Services",
  },
  description:
    "BIS certification for furniture is mandatory under the Furniture QCO 2025. See IS 17631–17636 scope, 2026 updates, ISI and FMCS routes. Talk to our experts.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: FURNITURE_CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "BIS Certification for Furniture: QCO 2025, ISI Mark & FMCS Guide",
    description:
      "Which furniture needs the ISI mark, what changed in 2026, how testing works and how foreign factories get licensed under FMCS.",
    url: FURNITURE_CANONICAL,
    images: [
      {
        url: "https://www.ornatequality.com/og/furniture.jpg",
        width: 1200,
        height: 630,
        alt: "BIS Certification for Furniture",
      },
    ],
  },
};

export default function BisFurniturePage() {
  return <FurniturePageContent />;
}
