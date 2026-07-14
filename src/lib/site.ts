/** Canonical site URL — override via NEXT_PUBLIC_SITE_URL if needed */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ornatequality.com";

export const SITE_NAME = "Ornate Quality Services";
export const SITE_LEGAL_NAME = "Ornate Quality Services Pvt. Ltd.";
export const SITE_ALT_NAME = "Ornate Certification";

export const DEFAULT_PHONE = "+91-9266877738";
export const DEFAULT_PHONE_2 = "+91-8800013897";

export const SITE_EMAIL = "chetan@ornatequality.com";
export const SITE_EMAIL_MARKETING = "marketing@ornatequality.com";

export const SITE_ADDRESS = {
  streetAddress: "Office No. 1726, Astralis Tower, Sector 94",
  addressLocality: "Noida",
  addressRegion: "Uttar Pradesh",
  postalCode: "201301",
  addressCountry: "IN",
} as const;

export const SITE_GEO = {
  latitude: 28.5510933,
  longitude: 77.3245904,
} as const;

export const SITE_SOCIAL = [
  "https://www.facebook.com/Ornatequalityservice",
  "https://www.linkedin.com/company/ornatequality/",
  "https://www.instagram.com/ornatequalityservice/",
  "https://www.youtube.com/@ornatequalityservices6575",
  "https://twitter.com/OrnateQuality",
] as const;
