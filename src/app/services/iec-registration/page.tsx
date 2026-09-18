import type { Metadata } from "next";
import { IecBanner } from "./sections/IecBanner";
import { IecPageContent } from "./sections/IecPageContent";

export const metadata: Metadata = {
  title: "IEC Registration Consultant in India | Import Export Code | Ornate Quality Service Pvt Ltd",
  description:
    "Get your Import Export Code registered with the DGFT, correctly the first time. IEC registration, annual update, reactivation, modification and surrender support across India.",
};

export default function IecRegistrationPage() {
  return (
    <>
      <IecBanner />
      <IecPageContent />
    </>
  );
}
