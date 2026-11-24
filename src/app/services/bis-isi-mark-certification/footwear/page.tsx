import type { Metadata } from "next";
import { FootwearPageContent } from "../../bis-fmcs-certification/footwear/sections/FootwearPageContent";

export const FOOTWEAR_PATH = "/services/bis-isi-mark-certification/footwear";
export const FOOTWEAR_CANONICAL =
  "https://ornatequality.com/services/bis-isi-mark-certification/footwear";

export const metadata: Metadata = {
  title: {
    absolute: "BIS Certification for Footwear | Ornate Quality Services",
  },
  description:
    "BIS certification for footwear is mandatory under the 2024 footwear QCOs and PPE order. See ISI mark scope, June 2026 updates, FMCS and lab requirements.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: FOOTWEAR_CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "BIS Certification for Footwear (ISI Mark): QCO, FMCS & Process",
    description:
      "Which footwear needs the ISI mark, what changed in June 2026, how testing works and how foreign factories get licensed under FMCS.",
    url: FOOTWEAR_CANONICAL,
    images: [
      {
        url: "https://ornatequality.com/og/footwear.jpg",
        width: 1200,
        height: 630,
        alt: "BIS Certification for Footwear",
      },
    ],
  },
};

export default function BisFootwearPage() {
  return <FootwearPageContent />;
}
