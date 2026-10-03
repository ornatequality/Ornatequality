import type { Metadata } from "next";
import { DpiBanner } from "./sections/DpiBanner";
import { DpiPageContent } from "./sections/DpiPageContent";

export const metadata: Metadata = {
  title: "During Production Inspection (DPI) Services in India | Ornate Quality Service",
  description:
    "Catch defects while your order is still on the line — not after it is packed. Independent DUPRO / DPI inspection in India with AQL-based sampling and photo-documented reporting from Ornate Quality Service Pvt Ltd.",
};

export default function DuringProductionInspectionPage() {
  return (
    <>
      <DpiBanner />
      <DpiPageContent />
    </>
  );
}
