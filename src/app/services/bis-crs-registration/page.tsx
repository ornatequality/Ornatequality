import type { Metadata } from "next";
import { BisCrsBanner } from "./sections/BisCrsBanner";
import { BisCrsPageContent } from "./sections/BisCrsPageContent";

export const metadata: Metadata = {
  title: "BIS CRS Registration in India | Ornate Quality Services",
  description:
    "Get BIS CRS registration handled end to end — documentation, test report coordination, application filing, and R-Number tracking for electronics, IT, and solar products in India.",
};

export default function BisCrsRegistrationPage() {
  return (
    <>
      <BisCrsBanner />
      <BisCrsPageContent />
    </>
  );
}
