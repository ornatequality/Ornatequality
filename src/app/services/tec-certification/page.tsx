import type { Metadata } from "next";
import { TecBanner } from "./sections/TecBanner";
import { TecPageContent } from "./sections/TecPageContent";

export const metadata: Metadata = {
  title: "TEC Approval Services in India | Ornate Quality Service Pvt Ltd",
  description:
    "Ornate Quality Service Pvt Ltd helps manufacturers, importers, brand owners, and system integrators secure TEC approval and MTCTE certification for telecom equipment sold, imported, or deployed in India.",
};

export default function TecCertificationPage() {
  return (
    <>
      <TecBanner />
      <TecPageContent />
    </>
  );
}
