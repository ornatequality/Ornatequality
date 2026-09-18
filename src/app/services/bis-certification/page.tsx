import type { Metadata } from "next";
import { BisCertificationBanner } from "./sections/BisCertificationBanner";
import { BisCertificationPageContent } from "./sections/BisCertificationPageContent";

export const metadata: Metadata = {
  title: "BIS Certification Services in India | ISI Mark, BIS CRS & FMCS | Ornate Quality Service Pvt Ltd",
  description:
    "BIS certification in India for manufacturers, importers and brand owners. One consulting partner across ISI Mark, BIS CRS and FMCS — documentation, factory inspection and filing handled end to end.",
};

export default function BisCertificationPage() {
  return (
    <>
      <BisCertificationBanner />
      <BisCertificationPageContent />
    </>
  );
}
