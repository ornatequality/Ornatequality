import type { Metadata } from "next";
import { IecBanner } from "./sections/IecBanner";
import { IecPageContent } from "./sections/IecPageContent";

const CANONICAL = "https://www.ornatequality.com/services/iec-registration";

export const metadata: Metadata = {
  title: {
    absolute: "IEC Registration | Ornate Quality Services",
  },
  description:
    "Get your Import Export Code registered with the DGFT, correctly the first time. IEC registration, annual update, reactivation, modification and surrender support across India.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "IEC Registration | Ornate Quality Services",
    description:
      "Get your Import Export Code registered with the DGFT, correctly the first time. IEC registration, annual update, reactivation, modification and surrender support across India.",
    url: CANONICAL,
  },
};

export default function IecRegistrationPage() {
  return (
    <>
      <IecBanner />
      <IecPageContent />
    </>
  );
}
