import type { StaticImageData } from "next/image";
import blog1 from "../assests/image.png";
import blog2 from "../assests/blog-2.webp";
import blog3 from "../assests/blog-3.webp";

export type TagTone = "green" | "blue" | "gold";

export type BlogCardData = {
  slug: string;
  href?: string;
  title: string;
  excerpt: string;
  category: string;
  topic?: string;
  tone?: TagTone;
  image: string | StaticImageData;
  readTime?: string;
  body?: string;
};

export const DEFAULT_POSTS: BlogCardData[] = [
  {
    slug: "bis-toy-certification-mistakes",
    title: "Top 10 Common Mistakes Manufacturers Make During BIS Toy Certification",
    excerpt:
      "Learn how to get BIS certification for your products and ensure compliance with Indian standards.",
    category: "BIS certification for toys",
    topic: "BIS",
    image: blog1,
    readTime: "7 min read",
  },
  {
    slug: "future-of-epr",
    title: "The Future of EPR: Why It Matters and How It Will Revolutionise Industries",
    excerpt:
      "Understand Extended Producer Responsibility and how it impacts compliance, sustainability, and your brand's growth.",
    category: "EPR",
    tone: "green",
    image: blog2,
    readTime: "5 min read",
  },
  {
    slug: "wpc-eta-approval-frequency-bands",
    title: "WPC ETA Approval in India: Frequency Bands and Device Compliance Guide",
    excerpt:
      "A practical guide to WPC ETA, from frequency selection to documentation, so you can launch wireless products in India with ease.",
    category: "WPC-ETA",
    tone: "blue",
    image: blog3,
    readTime: "6 min read",
  },
];

export const BLOG_TOPICS = [
  "BIS",
  "ISI Mark",
  "WPC-ETA",
  "EPR",
  "BEE",
  "CRS",
  "LMPC",
  "Quality Inspection",
  "Industry Updates",
];
