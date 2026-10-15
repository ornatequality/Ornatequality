import type { Metadata } from "next";
import { PesoCcoeBanner } from "./sections/PesoCcoeBanner";
import { PesoCcoePageContent } from "./sections/PesoCcoePageContent";

export const metadata: Metadata = {
  title: "PESO Flame Proof Approval Consultant in India | Ornate Quality Services",
  description:
    "PESO flame proof approval and ex-proof equipment certification support in India. Documentation, zone classification guidance, testing coordination and filing for hazardous-area equipment.",
};

export default function PesoCcoeRegistrationPage() {
  return (
    <>
      <PesoCcoeBanner />
      <PesoCcoePageContent />
    </>
  );
}
