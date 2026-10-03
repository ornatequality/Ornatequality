import type { Metadata } from "next";
import { FssaiBanner } from "./sections/FssaiBanner";
import { FssaiPageContent } from "./sections/FssaiPageContent";

export const metadata: Metadata = {
  title: "FSSAI Registration & Food License Consultant in India | Ornate Quality Service Pvt Ltd",
  description:
    "Get FSSAI registration online for your food business with expert support from application to certificate. Basic, state and central license filing on FoSCoS by Ornate Quality Service Pvt Ltd.",
};

export default function FssaiRegistrationPage() {
  return (
    <>
      <FssaiBanner />
      <FssaiPageContent />
    </>
  );
}
