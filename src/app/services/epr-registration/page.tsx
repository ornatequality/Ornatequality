import type { Metadata } from "next";
import { EprBanner } from "./sections/EprBanner";
import { EprPageContent } from "./sections/EprPageContent";

const CANONICAL = "https://www.ornatequality.com/services/epr-registration";

export const metadata: Metadata = {
  title: {
    absolute: "EPR Registration in India | Ornate Quality Services",
  },
  description:
    "Waste-stream-wise EPR registration support for producers, importers and brand owners in India. End-to-end CPCB portal filing, documentation, query handling and post-approval compliance across e-waste, plastic, battery, tyre and used oil.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "EPR Registration in India | Ornate Quality Services",
    description:
      "Waste-stream-wise EPR registration support for producers, importers and brand owners in India. End-to-end CPCB portal filing, documentation, query handling and post-approval compliance across e-waste, plastic, battery, tyre and used oil.",
    url: CANONICAL,
  },
};

export default function EprRegistrationPage() {
  return (
    <>
      <EprBanner />
      <EprPageContent />
    </>
  );
}
