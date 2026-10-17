import type { Metadata } from "next";
import { FacBanner } from "./sections/FacBanner";
import { FacPageContent } from "./sections/FacPageContent";

const CANONICAL = "https://www.ornatequality.com/services/factory-process-inspection";

export const metadata: Metadata = {
  title: {
    absolute: "Factory & Process Inspection | Ornate Quality Services",
  },
  description:
    "Independent factory and process inspection in India. Ornate Quality Service Pvt Ltd audits quality systems, production capability, capacity and social compliance before you commit to an order.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Factory & Process Inspection | Ornate Quality Services",
    description:
      "Independent factory and process inspection in India. Ornate Quality Service Pvt Ltd audits quality systems, production capability, capacity and social compliance before you commit to an order.",
    url: CANONICAL,
  },
};

export default function FactoryProcessInspectionPage() {
  return (
    <>
      <FacBanner />
      <FacPageContent />
    </>
  );
}
