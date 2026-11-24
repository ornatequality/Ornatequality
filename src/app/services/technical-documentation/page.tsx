import type { Metadata } from "next";
import { TechBanner } from "./sections/TechBanner";
import { TechPageContent } from "./sections/TechPageContent";

const CANONICAL = "https://ornatequality.com/services/technical-documentation";

export const metadata: Metadata = {
  title: {
    absolute: "Technical Documentation | Ornate Quality Services",
  },
  description:
    "Technical documentation services in India for manufacturers, importers, exporters and brand owners — technical file, declaration of conformity, manuals, labelling and submission dossier support.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Technical Documentation | Ornate Quality Services",
    description:
      "Technical documentation services in India for manufacturers, importers, exporters and brand owners — technical file, declaration of conformity, manuals, labelling and submission dossier support.",
    url: CANONICAL,
  },
};

export default function TechnicalDocumentationPage() {
  return (
    <>
      <TechBanner />
      <TechPageContent />
    </>
  );
}
