import type { Metadata } from "next";
import { FriBanner } from "./sections/FriBanner";
import { FriPageContent } from "./sections/FriPageContent";

export const metadata: Metadata = {
  title: "Final Random Inspection (FRI) Services in India | Ornate Quality Services",
  description:
    "Independent AQL-based final random inspection in India. Ornate Quality Service Pvt Ltd checks finished, packed goods at the supplier's factory before shipment and before you release payment.",
};

export default function FinalRandomInspectionPage() {
  return (
    <>
      <FriBanner />
      <FriPageContent />
    </>
  );
}
