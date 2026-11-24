import type { Metadata } from "next";
import { DpiBanner } from "./sections/DpiBanner";
import { DpiPageContent } from "./sections/DpiPageContent";

const CANONICAL = "https://ornatequality.com/services/during-production-inspection";

export const metadata: Metadata = {
  title: {
    absolute: "During Production Inspection | Ornate Quality Services",
  },
  description:
    "Catch defects while your order is still on the line — not after it is packed. Independent DUPRO / DPI inspection in India with AQL-based sampling and photo-documented reporting from Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "During Production Inspection | Ornate Quality Services",
    description:
      "Catch defects while your order is still on the line — not after it is packed. Independent DUPRO / DPI inspection in India with AQL-based sampling and photo-documented reporting from Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function DuringProductionInspectionPage() {
  return (
    <>
      <DpiBanner />
      <DpiPageContent />
    </>
  );
}
