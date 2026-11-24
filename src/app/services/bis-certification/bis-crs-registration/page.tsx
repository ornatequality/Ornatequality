import type { Metadata } from "next";
import { BisCrsBanner } from "../../bis-crs-registration/sections/BisCrsBanner";
import { BisCrsPageContent } from "../../bis-crs-registration/sections/BisCrsPageContent";

const CANONICAL =
  "https://ornatequality.com/services/bis-certification/bis-crs-registration";

export const metadata: Metadata = {
  title: {
    absolute: "BIS CRS Registration in India | Ornate Quality Services",
  },
  description:
    "Get BIS CRS registration handled end to end — documentation, test report coordination, application filing, and R-Number tracking for electronics, IT, and solar products in India.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "BIS CRS Registration in India | Ornate Quality Services",
    description:
      "Get BIS CRS registration handled end to end — documentation, test report coordination, application filing, and R-Number tracking for electronics, IT, and solar products in India.",
    url: CANONICAL,
  },
};

export default function BisCrsRegistrationPage() {
  return (
    <>
      <BisCrsBanner />
      <BisCrsPageContent />
    </>
  );
}
