import type { Metadata } from "next";
import { TpiBanner } from "./sections/TpiBanner";
import { TpiPageContent } from "./sections/TpiPageContent";

const CANONICAL = "https://ornatequality.com/services/third-party-inspection";

export const metadata: Metadata = {
  title: {
    absolute: "Third Party Inspection Services | Ornate Quality Services",
  },
  description:
    "Independent, on-site quality verification at your supplier's factory — before your goods are paid for, dispatched or shipped. Photo-documented inspection reports from Ornate Quality Service Pvt. Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Third Party Inspection Services | Ornate Quality Services",
    description:
      "Independent, on-site quality verification at your supplier's factory — before your goods are paid for, dispatched or shipped. Photo-documented inspection reports from Ornate Quality Service Pvt. Ltd.",
    url: CANONICAL,
  },
};

export default function ThirdPartyInspectionPage() {
  return (
    <>
      <TpiBanner />
      <TpiPageContent />
    </>
  );
}
