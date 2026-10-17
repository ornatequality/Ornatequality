import type { Metadata } from "next";
import { BisFmcsBanner } from "../../bis-fmcs-certification/sections/BisFmcsBanner";
import { BisFmcsPageContent } from "../../bis-fmcs-certification/sections/BisFmcsPageContent";

const CANONICAL =
  "https://www.ornatequality.com/services/bis-certification/fmcs-certification";

export const metadata: Metadata = {
  title: {
    absolute: "FMCS Certification for Foreign Manufacturers | Ornate Quality Services",
  },
  description:
    "BIS FMCS certification for foreign manufacturers exporting to India. End-to-end support for AIR appointment, factory audit, documentation, CM/L licence and renewal by Ornate Quality Services.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "FMCS Certification for Foreign Manufacturers | Ornate Quality Services",
    description:
      "BIS FMCS certification for foreign manufacturers exporting to India. End-to-end support for AIR appointment, factory audit, documentation, CM/L licence and renewal by Ornate Quality Services.",
    url: CANONICAL,
  },
};

export default function BisFmcsCertificationPage() {
  return (
    <>
      <BisFmcsBanner />
      <BisFmcsPageContent />
    </>
  );
}
