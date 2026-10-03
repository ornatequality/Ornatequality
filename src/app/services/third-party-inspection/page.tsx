import type { Metadata } from "next";
import { TpiBanner } from "./sections/TpiBanner";
import { TpiPageContent } from "./sections/TpiPageContent";

export const metadata: Metadata = {
  title: "Third Party Inspection (TPI) Services in India | Ornate Quality Service",
  description:
    "Independent, on-site quality verification at your supplier's factory — before your goods are paid for, dispatched or shipped. Photo-documented inspection reports from Ornate Quality Service Pvt. Ltd.",
};

export default function ThirdPartyInspectionPage() {
  return (
    <>
      <TpiBanner />
      <TpiPageContent />
    </>
  );
}


