import type { Metadata } from "next";
import { LmpcBanner } from "./sections/LmpcBanner";
import { LmpcPageContent } from "./sections/LmpcPageContent";

const CANONICAL = "https://www.ornatequality.com/services/lmpc-registration";

export const metadata: Metadata = {
  title: {
    absolute: "LMPC Registration | Ornate Quality Services",
  },
  description:
    "LMPC registration for importers, manufacturers and packers of pre-packaged goods in India. Document preparation, label review, filing and post-approval compliance by Ornate Quality Service Pvt. Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "LMPC Registration | Ornate Quality Services",
    description:
      "LMPC registration for importers, manufacturers and packers of pre-packaged goods in India. Document preparation, label review, filing and post-approval compliance by Ornate Quality Service Pvt. Ltd.",
    url: CANONICAL,
  },
};

export default function LmpcRegistrationPage() {
  return (
    <>
      <LmpcBanner />
      <LmpcPageContent />
    </>
  );
}
