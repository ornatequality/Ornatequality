import type { Metadata } from "next";
import { TechBanner } from "./sections/TechBanner";
import { TechPageContent } from "./sections/TechPageContent";

export const metadata: Metadata = {
  title: "Technical Documentation & Compliance Support in India | Ornate Quality Service",
  description:
    "Technical documentation services in India for manufacturers, importers, exporters and brand owners — technical file, declaration of conformity, manuals, labelling and submission dossier support.",
};

export default function TechnicalDocumentationPage() {
  return (
    <>
      <TechBanner />
      <TechPageContent />
    </>
  );
}
