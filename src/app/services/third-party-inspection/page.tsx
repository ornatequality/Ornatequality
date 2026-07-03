import type { Metadata } from "next";
import { TpiBanner } from "./sections/TpiBanner";
import { TpiPageContent } from "./sections/TpiPageContent";

export const metadata: Metadata = {
  title: "Third Party Inspection Services | Ornate Quality Services",
  description:
    "Professional third party inspection services in India — pre-shipment inspection, factory audits, BIS inspection support, PESO coordination, and supplier qualification by Ornate Quality Services.",
};

export default function ThirdPartyInspectionPage() {
  return (
    <>
      <TpiBanner />
      <TpiPageContent />
    </>
  );
}


