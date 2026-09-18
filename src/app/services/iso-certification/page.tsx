import type { Metadata } from "next";
import { IsoBanner } from "./sections/IsoBanner";
import { IsoPageContent } from "./sections/IsoPageContent";

export const metadata: Metadata = {
  title: "ISO Certification in India | Ornate Quality Services",
  description:
    "End to end ISO certification handling for manufacturers, exporters, MSMEs and startups — gap analysis, documentation, audit preparation and accredited certification body coordination by Ornate Quality Service Pvt Ltd.",
};

export default function IsoCertificationPage() {
  return (
    <>
      <IsoBanner />
      <IsoPageContent />
    </>
  );
}

