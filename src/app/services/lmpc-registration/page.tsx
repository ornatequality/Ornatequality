import type { Metadata } from "next";
import { LmpcBanner } from "./sections/LmpcBanner";
import { LmpcPageContent } from "./sections/LmpcPageContent";

export const metadata: Metadata = {
  title:
    "LMPC Registration in India | Legal Metrology Packaged Commodities Certificate | Ornate Quality Service Pvt. Ltd.",
  description:
    "LMPC registration for importers, manufacturers and packers of pre-packaged goods in India. Document preparation, label review, filing and post-approval compliance by Ornate Quality Service Pvt. Ltd.",
};

export default function LmpcRegistrationPage() {
  return (
    <>
      <LmpcBanner />
      <LmpcPageContent />
    </>
  );
}
