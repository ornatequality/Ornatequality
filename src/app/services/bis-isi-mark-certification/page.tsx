import type { Metadata } from "next";
import { BisIsiBanner } from "./sections/BisIsiBanner";
import { BisIsiPageContent } from "./sections/BisIsiPageContent";

export const metadata: Metadata = {
  title: "BIS ISI Mark Certification | Ornate Quality Services",
  description:
    "Complete guide to ISI Certification in India — process, requirements, documents, and benefits. End-to-end ISI Mark certification support by Ornate Quality Services.",
};

export default function BisIsiMarkCertificationPage() {
  return (
    <>
      <BisIsiBanner />
      <BisIsiPageContent />
    </>
  );
}

