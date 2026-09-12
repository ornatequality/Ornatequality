import type { Metadata } from "next";
import { BisIsiBanner } from "./sections/BisIsiBanner";
import { BisIsiPageContent } from "./sections/BisIsiPageContent";

export const metadata: Metadata = {
  title: "BIS-ISI Mark Certification for Domestic Manufacturers | Ornate Quality Services",
  description:
    "Government-approved ISI Mark Certification (Scheme-I) for domestic manufacturers. End-to-end documentation, factory audit preparation, and CM/L licence support by Ornate Quality Service Pvt. Ltd.",
};

export default function BisIsiMarkCertificationPage() {
  return (
    <>
      <BisIsiBanner />
      <BisIsiPageContent />
    </>
  );
}

