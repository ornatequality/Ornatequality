import type { Metadata } from "next";
import { TrademarkBanner } from "./sections/TrademarkBanner";
import { TrademarkPageContent } from "./sections/TrademarkPageContent";

const CANONICAL = "https://www.ornatequality.com/services/trademark-registration";

export const metadata: Metadata = {
  title: {
    absolute: "Trademark Registration | Ornate Quality Services",
  },
  description:
    "Protect your brand name, logo and tagline with a filing prepared properly the first time. Trademark search, class selection, IP India filing, objection handling and renewal support by Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Trademark Registration | Ornate Quality Services",
    description:
      "Protect your brand name, logo and tagline with a filing prepared properly the first time. Trademark search, class selection, IP India filing, objection handling and renewal support by Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function TrademarkRegistrationPage() {
  return (
    <>
      <TrademarkBanner />
      <TrademarkPageContent />
    </>
  );
}
