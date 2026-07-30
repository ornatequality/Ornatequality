import type { Metadata } from "next";
import AdsHero from "./sections/AdsHero";
import AdsTrustStrip from "./sections/AdsTrustStrip";
import AdsPartners from "./sections/AdsPartners";
import AdsAbout from "./sections/AdsAbout";
import AdsServices from "./sections/AdsServices";
import AdsWhyChoose from "./sections/AdsWhyChoose";
import AdsIndustries from "./sections/AdsIndustries";
import AdsProcess from "./sections/AdsProcess";
import AdsTestimonials from "./sections/AdsTestimonials";
import styles from "@/styles/ads.module.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Your Product Certified in India",
  description:
    "Expert consultation for BIS, WPC, BEE, EPR and product certification in India. Expert guidance for manufacturers, importers and brands.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${SITE_URL}/ads`,
  },
  openGraph: {
    title: `Get Your Product Certified in India | ${SITE_NAME}`,
    description:
      "Complete certification and compliance solutions for manufacturers, importers and brands.",
    url: `${SITE_URL}/ads`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
};

export default function AdsLandingPage() {
  return (
    <div className={styles.page}>
      <AdsHero />
      <AdsTrustStrip />
      <AdsPartners />
      <AdsAbout />
      <AdsServices />
      <AdsWhyChoose />
      <AdsIndustries />
      <AdsProcess />
      <AdsTestimonials />
    </div>
  );
}
