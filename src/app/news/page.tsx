import type { Metadata } from "next";
import { NewsPageContent } from "./sections/NewsPageContent";

export const metadata: Metadata = {
  title: "Latest News & Updates | Ornate Quality Services",
  description:
    "Breaking news and regulatory announcements on BIS, WPC, BEE, EPR, TEC and product compliance in India.",
   
};

export default function NewsPage() {
  return <NewsPageContent />;
}

