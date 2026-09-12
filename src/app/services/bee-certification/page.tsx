import type { Metadata } from "next";
import { BeeBanner } from "./sections/BeeBanner";
import { BeePageContent } from "./sections/BeePageContent";

export const metadata: Metadata = {
  title: "BEE Star Rating Registration Consultant in India | Ornate Quality Services",
  description:
    "BEE star rating registration for electrical and electronic appliances in India. Documentation, lab coordination, and portal filing for manufacturers, importers, exporters, and brand owners by Ornate Quality Service Pvt Ltd.",
};

export default function BeeCertificationPage() {
  return (
    <>
      <BeeBanner />
      <BeePageContent />
    </>
  );
}
