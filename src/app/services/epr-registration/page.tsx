import type { Metadata } from "next";
import { EprBanner } from "./sections/EprBanner";
import { EprPageContent } from "./sections/EprPageContent";

export const metadata: Metadata = {
  title: "EPR Registration in India | Ornate Quality Services",
  description:
    "Waste-stream-wise EPR registration support for producers, importers and brand owners in India. End-to-end CPCB portal filing, documentation, query handling and post-approval compliance across e-waste, plastic, battery, tyre and used oil.",
};

export default function EprRegistrationPage() {
  return (
    <>
      <EprBanner />
      <EprPageContent />
    </>
  );
}
