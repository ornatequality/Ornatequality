import type { Metadata } from "next";
import { FriBanner } from "./sections/FriBanner";
import { FriPageContent } from "./sections/FriPageContent";

const CANONICAL = "https://ornatequality.com/services/final-random-inspection";

export const metadata: Metadata = {
  title: {
    absolute: "Final Random Inspection | Ornate Quality Services",
  },
  description:
    "Independent AQL-based final random inspection in India. Ornate Quality Service Pvt Ltd checks finished, packed goods at the supplier's factory before shipment and before you release payment.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "Final Random Inspection | Ornate Quality Services",
    description:
      "Independent AQL-based final random inspection in India. Ornate Quality Service Pvt Ltd checks finished, packed goods at the supplier's factory before shipment and before you release payment.",
    url: CANONICAL,
  },
};

export default function FinalRandomInspectionPage() {
  return (
    <>
      <FriBanner />
      <FriPageContent />
    </>
  );
}
