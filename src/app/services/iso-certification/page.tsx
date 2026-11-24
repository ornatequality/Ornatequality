import type { Metadata } from "next";
import { IsoBanner } from "./sections/IsoBanner";
import { IsoPageContent } from "./sections/IsoPageContent";

const CANONICAL = "https://ornatequality.com/services/iso-certification";

export const metadata: Metadata = {
  title: {
    absolute: "ISO Certification in India | Ornate Quality Services",
  },
  description:
    "End to end ISO certification handling for manufacturers, exporters, MSMEs and startups — gap analysis, documentation, audit preparation and accredited certification body coordination by Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "ISO Certification in India | Ornate Quality Services",
    description:
      "End to end ISO certification handling for manufacturers, exporters, MSMEs and startups — gap analysis, documentation, audit preparation and accredited certification body coordination by Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function IsoCertificationPage() {
  return (
    <>
      <IsoBanner />
      <IsoPageContent />
    </>
  );
}
