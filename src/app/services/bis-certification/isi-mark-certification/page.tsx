import type { Metadata } from "next";
import { BisIsiBanner } from "../../bis-isi-mark-certification/sections/BisIsiBanner";
import { BisIsiPageContent } from "../../bis-isi-mark-certification/sections/BisIsiPageContent";

const CANONICAL =
  "https://www.ornatequality.com/services/bis-certification/isi-mark-certification";

export const metadata: Metadata = {
  title: {
    absolute: "BIS-ISI Mark Certification for Domestic Manufacturers | Ornate Quality Services",
  },
  description:
    "Government-approved ISI Mark Certification (Scheme-I) for domestic manufacturers. End-to-end documentation, factory audit preparation, and CM/L licence support by Ornate Quality Service Pvt. Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "BIS-ISI Mark Certification for Domestic Manufacturers | Ornate Quality Services",
    description:
      "Government-approved ISI Mark Certification (Scheme-I) for domestic manufacturers. End-to-end documentation, factory audit preparation, and CM/L licence support by Ornate Quality Service Pvt. Ltd.",
    url: CANONICAL,
  },
};

export default function BisIsiMarkCertificationPage() {
  return (
    <>
      <BisIsiBanner />
      <BisIsiPageContent />
    </>
  );
}
