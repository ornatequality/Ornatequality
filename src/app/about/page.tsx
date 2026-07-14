import Script from "next/script";
import React from "react";
import styles from "@/styles/aboutV2.module.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

import { AboutHero } from "./sections/AboutHero";
import { AboutStatsBar } from "./sections/AboutStatsBar";
import { WhoWeAre } from "./sections/WhoWeAre";
import { Journey } from "./sections/Journey";
import { MissionVision } from "./sections/MissionVision";
import { WhyBrandsTrustUs } from "./sections/WhyBrandsTrustUs";
import { CertificationsAndAssociations } from "./sections/CertificationsAndAssociations";
import { ClientTestimonials } from "./sections/ClientTestimonials";

export const metadata = {
  title: "About Us | BIS Certification Consultants India — Ornate Quality",
  description:
    "Ornate Quality Services — India's trusted BIS Certification Consultant since 2013. 13+ years, 5000+ certifications, 98% success rate. Expert support for WPC, TEC, BEE, EPR & LMPC.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: `${SITE_URL}/about`,
    title: "About Us | BIS Certification Consultants India — Ornate Quality",
    description:
      "Ornate Quality Services — India's trusted BIS Certification Consultant since 2013. 13+ years, 5000+ certifications, 98% success rate. Expert support for WPC, TEC, BEE, EPR & LMPC.",
    images: [
      {
        url: `${SITE_URL}/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "Ornate Quality Services Team — BIS Certification Consultant India since 2013",
      },
    ],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Ornate Quality Services and what does it do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ornate Quality Services Pvt. Ltd. is a regulatory compliance and product certification consultancy based in Noida, India, founded in 2013. The company helps manufacturers, importers, exporters, and global brands obtain mandatory Indian certifications including BIS, CRS, ISI Mark, WPC, TEC, BEE, EPR, and LMPC, with end-to-end support from documentation to final approval.",
      },
    },
    {
      "@type": "Question",
      name: "How many years of experience does Ornate Quality Services have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ornate Quality Services has over 13 years of experience in regulatory compliance and product certification, having been established in 2013. The company has delivered more than 5000 certifications with a 98% first-time approval success rate.",
      },
    },
    {
      "@type": "Question",
      name: "Which certifications does Ornate Quality Services handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ornate Quality Services handles BIS Certification, BIS CRS Registration, ISI Mark Certification, FMCS Certification, WPC ETA Approval, TEC Certification, BEE Registration, EPR Registration, LMPC Registration, CE Certification, and product compliance consulting across India and for international clients.",
      },
    },
    {
      "@type": "Question",
      name: "Can Ornate Quality Services help foreign companies get BIS certification in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ornate Quality Services specializes in helping foreign manufacturers obtain BIS certification and other mandatory Indian certifications. The team assists with appointing an Authorized Indian Representative (AIR), arranging testing at BIS-recognized laboratories, and managing the entire regulatory filing process for international clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is the success rate of Ornate Quality Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ornate Quality Services maintains a 98% first-time certification approval rate, achieved through thorough documentation review, coordinated testing with NABL-accredited laboratories, and direct liaison with regulatory authorities including BIS, WPC, BEE, TEC, and CPCB.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Ornate Quality Services located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ornate Quality Services Pvt. Ltd. is headquartered at Office No. 1726, Astralis Tower, Sector 94, Noida, Uttar Pradesh 201301, India. The company serves clients across India and internationally through remote coordination.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Ornate Quality Services for a consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Ornate Quality Services at +91 9266877738, +91 8880013897, or email chetan@ornatequality.com. A free initial consultation is available to assess your product's certification requirements. You can also reach the team via WhatsApp or through the Contact Us page on the website.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: `${SITE_URL}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <AboutHero />
      <WhoWeAre />
      <AboutStatsBar />
      <MissionVision />
      <Journey />
      <WhyBrandsTrustUs />
      <CertificationsAndAssociations />
      <ClientTestimonials />
    </div>
  );
}
