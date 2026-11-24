import type { Metadata } from "next";
import { GemBanner } from "./sections/GemBanner";
import { GemPageContent } from "./sections/GemPageContent";

const CANONICAL = "https://ornatequality.com/services/gem-registration";

export const metadata: Metadata = {
  title: {
    absolute: "GeM Portal Registration | Ornate Quality Services",
  },
  description:
    "Complete GeM portal registration support for sellers, manufacturers and service providers — seller ID, OEM registration, vendor assessment and catalogue setup by Ornate Quality Services.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "GeM Portal Registration | Ornate Quality Services",
    description:
      "Complete GeM portal registration support for sellers, manufacturers and service providers — seller ID, OEM registration, vendor assessment and catalogue setup by Ornate Quality Services.",
    url: CANONICAL,
  },
};

export default function GemRegistrationPage() {
  return (
    <>
      <GemBanner />
      <GemPageContent />
    </>
  );
}
