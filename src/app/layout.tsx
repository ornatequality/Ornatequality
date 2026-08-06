import type { Metadata, Viewport } from "next";
import "./globals.css";

import TopBar from "@/components/common/Topbar";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { JsonLdScripts } from "@/components/seo/JsonLdScripts";
import { inter, manrope, playfair } from "@/lib/fonts";
import {
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_OG_IMAGE_ALT,
  HOME_TITLE,
} from "@/lib/seo/home";
import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import CookieConsent from "@/components/consent/CookieConsent";
import ConsultationPopupGate from "@/components/popup/ConsultationPopupGate";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/analytics/GoogleTagManager";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,

  authors: [{ name: SITE_LEGAL_NAME }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
    creator: "@OrnateQuality",
    site: "@OrnateQuality",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  ...(googleVerification || bingVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification
            ? { other: { "msvalidate.01": bingVerification } }
            : {}),
        },
      }
    : {}),

  formatDetection: {
    telephone: false,
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Noida, Uttar Pradesh, India",
    "geo.position": "28.5510933;77.3245904",
    ICBM: "28.5510933, 77.3245904",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2540",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLdScripts />
        <GoogleTagManagerHead />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <GoogleTagManagerBody />
        <TopBar />
        <Header />
        <main className="grow bg-white">{children}</main>
        <WhatsAppButton/>
        <ConsultationPopupGate />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
      