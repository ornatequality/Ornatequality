import type { Metadata } from "next";
import { TrademarkBanner } from "./sections/TrademarkBanner";
import { TrademarkPageContent } from "./sections/TrademarkPageContent";

export const metadata: Metadata = {
  title: "Trademark Registration in India | Brand Name & Logo Filing | Ornate Quality Service Pvt Ltd",
  description:
    "Protect your brand name, logo and tagline with a filing prepared properly the first time. Trademark search, class selection, IP India filing, objection handling and renewal support by Ornate Quality Service Pvt Ltd.",
};

export default function TrademarkRegistrationPage() {
  return (
    <>
      <TrademarkBanner />
      <TrademarkPageContent />
    </>
  );
}

