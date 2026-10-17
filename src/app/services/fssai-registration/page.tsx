import type { Metadata } from "next";
import { FssaiBanner } from "./sections/FssaiBanner";
import { FssaiPageContent } from "./sections/FssaiPageContent";

const CANONICAL = "https://www.ornatequality.com/services/fssai-registration";

export const metadata: Metadata = {
  title: {
    absolute: "FSSAI Registration | Ornate Quality Services",
  },
  description:
    "Get FSSAI registration online for your food business with expert support from application to certificate. Basic, state and central license filing on FoSCoS by Ornate Quality Service Pvt Ltd.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    siteName: "Ornate Quality Services",
    title: "FSSAI Registration | Ornate Quality Services",
    description:
      "Get FSSAI registration online for your food business with expert support from application to certificate. Basic, state and central license filing on FoSCoS by Ornate Quality Service Pvt Ltd.",
    url: CANONICAL,
  },
};

export default function FssaiRegistrationPage() {
  return (
    <>
      <FssaiBanner />
      <FssaiPageContent />
    </>
  );
}
