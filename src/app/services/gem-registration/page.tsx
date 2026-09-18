import type { Metadata } from "next";
import { GemBanner } from "./sections/GemBanner";
import { GemPageContent } from "./sections/GemPageContent";

export const metadata: Metadata = {
  title: "GeM Registration Services in India | Ornate Quality Services",
  description:
    "Complete GeM portal registration support for sellers, manufacturers and service providers — seller ID, OEM registration, vendor assessment and catalogue setup by Ornate Quality Services.",
};

export default function GemRegistrationPage() {
  return (
    <>
      <GemBanner />
      <GemPageContent />
      
    </>
  );
}
