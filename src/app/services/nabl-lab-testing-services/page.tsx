import type { Metadata } from "next";
import { NablBanner } from "../nabl-accreditation/sections/NablBanner";
import { NablPageContent } from "../nabl-accreditation/sections/NablPageContent";

const CANONICAL = "https://www.ornatequality.com/services/nabl-lab-testing-services";

export const metadata: Metadata = {
  title: {
    absolute: "NABL Lab Testing Services | Ornate Quality Services",
  },
  description:
    "End-to-end NABL accredited lab testing coordination in India — lab selection, test parameter mapping, sample dispatch and accredited test reports for BIS, BEE, WPC, TEC, FSSAI, CDSCO and EPR.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "NABL Lab Testing Services | Ornate Quality Services",
    description:
      "End-to-end NABL accredited lab testing coordination in India — lab selection, test parameter mapping, sample dispatch and accredited test reports for BIS, BEE, WPC, TEC, FSSAI, CDSCO and EPR.",
    url: CANONICAL,
  },
};

export default function NablLabTestingServicesPage() {
  return (
    <>
      <NablBanner />
      <NablPageContent />
    </>
  );
}
