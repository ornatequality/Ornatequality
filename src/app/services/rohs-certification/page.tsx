import type { Metadata } from "next";
import { RohsBanner } from "./sections/RohsBanner";
import { RohsPageContent } from "./sections/RohsPageContent";

const CANONICAL = "https://ornatequality.com/services/rohs-certification";

export const metadata: Metadata = {
  title: {
    absolute: "RoHS Certification | Ornate Quality Services",
  },
  description:
    "Complete RoHS Certification and compliance support for Indian electronics manufacturers. BOM review, substance testing, technical documentation, and Declaration of Conformity by Ornate Quality Services.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "RoHS Certification | Ornate Quality Services",
    description:
      "Complete RoHS Certification and compliance support for Indian electronics manufacturers. BOM review, substance testing, technical documentation, and Declaration of Conformity by Ornate Quality Services.",
    url: CANONICAL,
  },
};

export default function RohsCertificationPage() {
  return (
    <>
      <RohsBanner />
      <RohsPageContent />
    </>
  );
}
