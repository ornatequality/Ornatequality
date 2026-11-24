import type { Metadata } from "next";
import React from "react";
import styles from "@/styles/servicesPage.module.css";
import { SITE_URL } from "@/lib/site";

import { ServicesContent } from "./sections/ServicesContent";

export const metadata: Metadata = {
  title: "Certification & Inspection Services in India",
  description:
    "BIS, WPC, TEC, BEE, EPR, LMPC, ISO, CE and inspection services from Ornate Quality. Documentation, filing and factory support end to end.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <ServicesContent />
    </div>
  );
}
