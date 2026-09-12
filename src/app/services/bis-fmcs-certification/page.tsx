import type { Metadata } from "next";
import { BisFmcsBanner } from "./sections/BisFmcsBanner";
import { BisFmcsPageContent } from "./sections/BisFmcsPageContent";

export const metadata: Metadata = {
  title: "FMCS Certification for Foreign Manufacturers | Ornate Quality Services",
  description:
    "BIS FMCS certification for foreign manufacturers exporting to India. End-to-end support for AIR appointment, factory audit, documentation, CM/L licence and renewal by Ornate Quality Services.",
};


export default function BisFmcsCertificationPage() {
  return (
    <>
      <BisFmcsBanner />
      <BisFmcsPageContent />
      
    </>
  );
}
