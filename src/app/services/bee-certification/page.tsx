import type { Metadata } from "next";
import { BeeBanner } from "./sections/BeeBanner";
import { BeePageContent } from "./sections/BeePageContent";

const CANONICAL = "https://www.ornatequality.com/services/bee-certification";

export const metadata: Metadata = {
  title: {
    absolute: "BEE Certification | Ornate Quality Services",
  },
  description:
    "BEE star rating registration for electrical and electronic appliances in India. Documentation, lab coordination, and portal filing for manufacturers, importers, exporters, and brand owners by Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "BEE Certification | Ornate Quality Services",
    description:
      "BEE star rating registration for electrical and electronic appliances in India. Documentation, lab coordination, and portal filing for manufacturers, importers, exporters, and brand owners by Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function BeeCertificationPage() {
  return (
    <>
      <BeeBanner />
      <BeePageContent />
    </>
  );
}
