import type { Metadata } from "next";
import { CdscoBanner } from "./sections/CdscoBanner";
import { CdscoPageContent } from "./sections/CdscoPageContent";

const CANONICAL = "https://www.ornatequality.com/services/cdsco-registration";

export const metadata: Metadata = {
  title: {
    absolute: "CDSCO Registration | Ornate Quality Services",
  },
  description:
    "Expert CDSCO certification consultant support for manufacturers, importers and diagnostic companies — from device classification to licence in hand.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "CDSCO Registration | Ornate Quality Services",
    description:
      "Expert CDSCO certification consultant support for manufacturers, importers and diagnostic companies — from device classification to licence in hand.",
    url: CANONICAL,
  },
};

export default function CdscoRegistrationPage() {
  return (
    <>
      <CdscoBanner />
      <CdscoPageContent />
    </>
  );
}
