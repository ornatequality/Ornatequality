import type { Metadata } from "next";
import { CliBanner } from "./sections/CliBanner";
import { CliPageContent } from "./sections/CliPageContent";

const CANONICAL = "https://www.ornatequality.com/services/container-loading-inspection";

export const metadata: Metadata = {
  title: {
    absolute: "Container Loading Inspection | Ornate Quality Services",
  },
  description:
    "Ship with confidence. Independent, on-site container loading inspection for exporters, importers and buyers — catching damage, shortages and buyer rejections on the loading dock, not across the ocean.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Container Loading Inspection | Ornate Quality Services",
    description:
      "Ship with confidence. Independent, on-site container loading inspection for exporters, importers and buyers — catching damage, shortages and buyer rejections on the loading dock, not across the ocean.",
    url: CANONICAL,
  },
};

export default function ContainerLoadingInspectionPage() {
  return (
    <>
      <CliBanner />
      <CliPageContent />
    </>
  );
}
