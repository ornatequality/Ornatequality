import type { Metadata } from "next";
import { NablBanner } from "./sections/NablBanner";
import { NablPageContent } from "./sections/NablPageContent";

export const metadata: Metadata = {
  title: "NABL Accredited Lab Testing Services in India | Ornate Quality Service",
  description:
    "End-to-end NABL accredited lab testing coordination in India — lab selection, test parameter mapping, sample dispatch and accredited test reports for BIS, BEE, WPC, TEC, FSSAI, CDSCO and EPR.",
};

export default function NablAccreditationPage() {
  return (
    <>
      <NablBanner />
      <NablPageContent />
    </>
  );
}
