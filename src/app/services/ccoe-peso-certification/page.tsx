import type { Metadata } from "next";
import { PesoCcoeBanner } from "../peso-ccoe-registration/sections/PesoCcoeBanner";
import { PesoCcoePageContent } from "../peso-ccoe-registration/sections/PesoCcoePageContent";

const CANONICAL = "https://ornatequality.com/services/ccoe-peso-certification";

export const metadata: Metadata = {
  title: {
    absolute: "PESO Flame Proof Approval Consultant in India | Ornate Quality Services",
  },
  description:
    "PESO flame proof approval and ex-proof equipment certification support in India. Documentation, zone classification guidance, testing coordination and filing for hazardous-area equipment.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "PESO Flame Proof Approval Consultant in India | Ornate Quality Services",
    description:
      "PESO flame proof approval and ex-proof equipment certification support in India. Documentation, zone classification guidance, testing coordination and filing for hazardous-area equipment.",
    url: CANONICAL,
  },
};

export default function CcoePesoCertificationPage() {
  return (
    <>
      <PesoCcoeBanner />
      <PesoCcoePageContent />
    </>
  );
}
