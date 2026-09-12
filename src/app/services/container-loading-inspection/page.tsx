import type { Metadata } from "next";
import { CliBanner } from "./sections/CliBanner";
import { CliPageContent } from "./sections/CliPageContent";

export const metadata: Metadata = {
  title: "Container Loading Inspection (CLI) Services in India | Ornate Quality Service Pvt Ltd",
  description:
    "Ship with confidence. Independent, on-site container loading inspection for exporters, importers and buyers — catching damage, shortages and buyer rejections on the loading dock, not across the ocean.",
};

export default function ContainerLoadingInspectionPage() {
  return (
    <>
      <CliBanner />
      <CliPageContent />
    </>
  );
}
