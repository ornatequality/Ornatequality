import { SITE_NAME, SITE_URL } from "@/lib/site";

export const HOME_TITLE =
  "BIS Certification Consultant India | Ornate Quality Services";

export const HOME_DESCRIPTION =
  "India's trusted BIS Certification Consultant. Expert support for WPC, TEC, CRS, BEE, EPR & LMPC. 13+ years · 5000+ certifications · 98% success rate. Free consultation.";

export const HOME_KEYWORDS = [
  "BIS Certification Consultant India",
  "BIS CRS Registration",
  "ISI Mark Certification",
  "WPC ETA Approval",
  "TEC Certification",
  "BEE Certification",
  "EPR Registration",
  "LMPC Registration",
  "FMCS Certification",
  "product compliance India",
  "regulatory compliance consultant India",
];

export const HOME_OG_IMAGE_ALT =
  "Ornate Quality Services — BIS Certification Consultant India";

export type HomeFaqItem = {
  q: string;
  a: string;
};

/** Shared by FAQ UI and FAQPage JSON-LD — edit here only (10 items: 5 left + 5 right) */
export const HOME_FAQS: HomeFaqItem[] = [
  {
    q: "What does Ornate Quality Services do?",
    a: "Helps businesses obtain BIS, WPC, BEE, EPR, TEC, LMPC and CE certification in India, end-to-end.",
  },
  {
    q: "What certifications does Ornate help with?",
    a: "BIS (CRS, ISI Mark, FMCS), WPC ETA, TEC, LMPC, BEE, EPR and CE certification.",
  },
  {
    q: "Is Ornate Quality Services a government body?",
    a: "No. It's a private compliance consultancy; certificates are issued by the respective government authorities (BIS, WPC, BEE, CPCB).",
  },
  {
    q: "How many years of experience does Ornate have?",
    a: "13+ years, established in 2013.",
  },
  {
    q: "Which companies has Ornate worked with?",
    a: "Enterprise clients including Flipkart, Croma, Hitachi, Hyundai, Nokia, Reliance Digital and T-Series.",
  },
  {
    q: "Can foreign manufacturers use Ornate's services?",
    a: "Yes, with Authorized Indian Representative (AIR) support.",
  },
  {
    q: "What is Ornate's certification success rate?",
    a: "98%, as stated on the site.",
  },
  {
    q: "How do I start the certification process?",
    a: "Book a free consultation; the process then moves through documentation, testing coordination, and certification.",
  },
  {
    q: "How can I contact Ornate Quality Services?",
    a: "Phone, email, WhatsApp, or the website contact form.",
  },
  {
    q: "Why should I use Ornate instead of applying directly?",
    a: "Ornate prepares accurate documentation, coordinates testing labs, and manages authority follow-ups — with a 98% success rate over 13+ years.",
  },
];

export const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: HOME_TITLE,
  description: HOME_DESCRIPTION,
  url: SITE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
  ],
};
