import {
  DEFAULT_PHONE,
  DEFAULT_PHONE_2,
  SITE_ADDRESS,
  SITE_ALT_NAME,
  SITE_EMAIL,
  SITE_EMAIL_MARKETING,
  SITE_GEO,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_SOCIAL,
  SITE_URL,
} from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: SITE_LEGAL_NAME,
  alternateName: SITE_ALT_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.webp`,
    width: 200,
    height: 60,
  },
  description:
    "Ornate Quality Services Pvt. Ltd. is India's trusted consultancy for BIS Certification, WPC Approval, TEC Certificate, CRS Registration, ISI Mark, LMPC, FMCS, BEE, EPR, ISO, CE and complete regulatory compliance services.",
  telephone: DEFAULT_PHONE,
  email: SITE_EMAIL,
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  sameAs: [...SITE_SOCIAL],
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_LEGAL_NAME,
  alternateName: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.webp`,
    width: 300,
    height: 80,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Ornate Quality Services is India's trusted regulatory compliance and certification consultancy, providing BIS Certification, CRS Registration, ISI Mark, WPC Approval, TEC, BEE, EPR, LMPC, and FMCS services with 13+ years of experience and 5000+ successful certifications.",
  foundingDate: "2011",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
  },
  address: {
    "@type": "PostalAddress",
    ...SITE_ADDRESS,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_GEO.latitude,
    longitude: SITE_GEO.longitude,
  },
  telephone: [DEFAULT_PHONE, DEFAULT_PHONE_2],
  email: [SITE_EMAIL, SITE_EMAIL_MARKETING],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: DEFAULT_PHONE,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Certification & Compliance Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "BIS CRS Registration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "ISI Mark Certification" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "WPC ETA Approval" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "TEC Certification" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "BEE Certification" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "EPR Registration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "LMPC Registration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "FMCS Certification" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CE Certification" },
      },
    ],
  },
  knowsAbout: [
    "BIS Certification",
    "CRS Registration",
    "WPC Approval",
    "TEC Certification",
    "BEE Certification",
    "EPR Registration",
    "LMPC Registration",
    "FMCS Certification",
    "CE Certification",
    "Regulatory Compliance India",
    "Product Certification India",
  ],
  sameAs: [...SITE_SOCIAL],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "BIS Certification, CRS Registration, WPC Approval, TEC Certification, FMCS, LMPC and regulatory compliance consultancy in India.",
  publisher: {
    "@type": "Organization",
    name: SITE_LEGAL_NAME,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.webp`,
    },
  },
};

/** Pretty-printed JSON-LD for readable “View Page Source” (like classic PHP sites). */
export function jsonLdScript(schema: object): string {
  return JSON.stringify(schema, null, 4);
}
