import type { Metadata } from "next";
import { BisCertificationBanner } from "./sections/BisCertificationBanner";
import { BisCertificationPageContent } from "./sections/BisCertificationPageContent";

const CANONICAL = "https://www.ornatequality.com/services/bis-certification";

export const metadata: Metadata = {
  title: {
    absolute:
      "BIS Certification Services in India | ISI Mark, BIS CRS & FMCS | Ornate Quality Services",
  },
  description:
    "BIS certification in India for manufacturers, importers and brand owners. One consulting partner across ISI Mark, BIS CRS and FMCS — documentation, factory inspection and filing handled end to end.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "BIS Certification Services in India | ISI Mark, BIS CRS & FMCS | Ornate Quality Services",
    description:
      "BIS certification in India for manufacturers, importers and brand owners. One consulting partner across ISI Mark, BIS CRS and FMCS — documentation, factory inspection and filing handled end to end.",
    url: CANONICAL,
  },
};

export default function BisCertificationPage() {
  return (
    <>
      <BisCertificationBanner />
      <BisCertificationPageContent />
    </>
  );
}
