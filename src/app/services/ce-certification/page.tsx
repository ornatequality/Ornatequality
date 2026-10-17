import type { Metadata } from "next";
import { CeBanner } from "./sections/CeBanner";
import { CePageContent } from "./sections/CePageContent";

const CANONICAL = "https://www.ornatequality.com/services/ce-certification";

export const metadata: Metadata = {
  title: {
    absolute: "CE Certification & CE Marking Services in India | Ornate Quality Services",
  },
  description:
    "End-to-end CE certification for Indian manufacturers and exporters. Ornate Quality Service Pvt Ltd identifies EU directives, prepares the technical file, coordinates testing and the EU Declaration of Conformity.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "CE Certification & CE Marking Services in India | Ornate Quality Services",
    description:
      "End-to-end CE certification for Indian manufacturers and exporters. Ornate Quality Service Pvt Ltd identifies EU directives, prepares the technical file, coordinates testing and the EU Declaration of Conformity.",
    url: CANONICAL,
  },
};

export default function CeCertificationPage() {
  return (
    <>
      <CeBanner />
      <CePageContent />
    </>
  );
}
