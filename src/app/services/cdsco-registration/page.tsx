import type { Metadata } from "next";
import { CdscoBanner } from "./sections/CdscoBanner";
import { CdscoPageContent } from "./sections/CdscoPageContent";

export const metadata: Metadata = {
  title: "CDSCO Certification for Medical Devices in India | Ornate Quality Services",
  description:
    "Expert CDSCO certification consultant support for manufacturers, importers and diagnostic companies — from device classification to licence in hand.",
};

export default function CdscoRegistrationPage() {
  return (
    <>
      <CdscoBanner />
      <CdscoPageContent />
    </>
  );
}
