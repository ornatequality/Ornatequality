import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Home/Hero";
import Importance from "@/components/Home/Importance";

const About = dynamic(() => import("@/components/Home/About"));
const Services = dynamic(() => import("@/components/Home/Services"));

const TrustProcess = dynamic(() => import("@/components/Home/TrustProcess"));
const BlogSection = dynamic(() => import("@/components/Home/BlogSection"));
const ValuedClients = dynamic(() => import("@/components/Home/ValuedClients"));
const ClientTestimonials = dynamic(() => import("@/components/Home/ClientTestimonials"));
const Query = dynamic(() => import("@/components/Home/Query"));
const Faq = dynamic(() => import("@/components/Home/Faq"));
import { JsonLdList } from "@/components/seo/JsonLdScripts";
import {
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_OG_IMAGE_ALT,
  HOME_TITLE,
  homeBreadcrumbSchema,
  homeFaqSchema,
  homeWebPageSchema,
} from "@/lib/seo/home";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: HOME_OG_IMAGE_ALT,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OrnateQuality",
    creator: "@OrnateQuality",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <JsonLdList
        schemas={[homeWebPageSchema, homeFaqSchema, homeBreadcrumbSchema]}
      />
      <Hero />
      <About />
      <Importance />
      <Services />
      <TrustProcess />
      <BlogSection />
      <ValuedClients />
      <ClientTestimonials variant="home" />
      <Query />
      <Faq />
    </div>
  );
}
