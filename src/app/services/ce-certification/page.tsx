import type { Metadata } from "next";
import { CeBanner } from "./sections/CeBanner";
import { CePageContent } from "./sections/CePageContent";

export const metadata: Metadata = {
  title: "CE Certification & CE Marking Services in India | Ornate Quality Services",
  description:
    "End-to-end CE certification for Indian manufacturers and exporters. Ornate Quality Service Pvt Ltd identifies EU directives, prepares the technical file, coordinates testing and the EU Declaration of Conformity.",
};

export default function CeCertificationPage() {
  return (
    <>
      <CeBanner />
      <CePageContent />
    </>
  );
}

