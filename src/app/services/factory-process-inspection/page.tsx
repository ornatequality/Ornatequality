import type { Metadata } from "next";
import { FacBanner } from "./sections/FacBanner";
import { FacPageContent } from "./sections/FacPageContent";

export const metadata: Metadata = {
  title: "Factory & Process Inspection Services in India | Ornate Quality Services",
  description:
    "Independent factory and process inspection in India. Ornate Quality Service Pvt Ltd audits quality systems, production capability, capacity and social compliance before you commit to an order.",
};

export default function FactoryProcessInspectionPage() {
  return (
    <>
      <FacBanner />
      <FacPageContent />
    </>
  );
}
