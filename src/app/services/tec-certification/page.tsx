import type { Metadata } from "next";
import { TecBanner } from "./sections/TecBanner";
import { TecPageContent } from "./sections/TecPageContent";

const CANONICAL = "https://ornatequality.com/services/tec-certification";

export const metadata: Metadata = {
  title: {
    absolute: "TEC Certification | Ornate Quality Services",
  },
  description:
    "Ornate Quality Service Pvt Ltd helps manufacturers, importers, brand owners, and system integrators secure TEC approval and MTCTE certification for telecom equipment sold, imported, or deployed in India.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "TEC Certification | Ornate Quality Services",
    description:
      "Ornate Quality Service Pvt Ltd helps manufacturers, importers, brand owners, and system integrators secure TEC approval and MTCTE certification for telecom equipment sold, imported, or deployed in India.",
    url: CANONICAL,
  },
};

export default function TecCertificationPage() {
  return (
    <>
      <TecBanner />
      <TecPageContent />
    </>
  );
}
