import type { Metadata } from "next";
import { BisFmcsBanner } from "./sections/BisFmcsBanner";
import { BisFmcsPageContent } from "./sections/BisFmcsPageContent";

export const metadata: Metadata = {
  title: "BIS FMCS Certification | Ornate Quality Services",
  description:
    "Complete BIS FMCS certification guide for foreign manufacturers. End-to-end FMCS application, AIR services, factory inspection support, and licence renewal by Ornate Quality Services.",
};


export default function BisFmcsCertificationPage() {
  return (
    <>
      <BisFmcsBanner />
      <BisFmcsPageContent />
      
    </>
  );
}
