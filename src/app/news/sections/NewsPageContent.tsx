import React from "react";
import Image from "next/image";
import Link from "next/link";
import { inter, playfair } from "@/lib/fonts";
import styles from "@/styles/news.module.css";

import newsFeatured from "@/assests/blog-1.webp";
import newsImg2 from "@/assests/blog-2.webp";
import newsImg3 from "@/assests/blog-3.webp";
import newsImg4 from "@/assests/service.webp";



const newsItems = [
  {
    id: "bis-crs-timeline-update",
    date: "May 10, 2026",
    category: "BIS",
    title: "BIS Announces Revised CRS Registration Timelines for Electronics & IT Goods",
    excerpt:
      "Manufacturers and importers should review updated filing windows and documentation requirements under the Compulsory Registration Scheme.",
    image: newsImg2,
  },
  {
    id: "wpc-eta-wireless-guidelines",
    date: "May 3, 2026",
    category: "WPC",
    title: "WPC Releases Updated ETA Guidance for Wi-Fi & Bluetooth Product Categories",
    excerpt:
      "New frequency band clarifications and test report formats aim to streamline wireless product approvals in India.",
    image: newsImg3,
  },
  {
    id: "bee-star-labeling-appliances",
    date: "April 28, 2026",
    category: "BEE",
    title: "BEE Star Labeling: Key Changes for Room Air Conditioners & Refrigerators",
    excerpt:
      "Brands must align energy performance declarations and lab reports with the latest BEE notification for listed appliances.",
    image: newsImg4,
  
  },
  {
    id: "epr-cpcb-categories",
    date: "April 18, 2026",
    category: "EPR",
    title: "CPCB Expands EPR Compliance Scope for Plastic & E-Waste Producers",
    excerpt:
      "Producers, importers, and brand owners are advised to verify category-wise registration and annual return obligations.",
    image: newsImg2,
  },
  {
    id: "tec-mtcte-reminder",
    date: "April 5, 2026",
    category: "TEC",
    title: "TEC MTCTE: Compliance Reminder for Telecom Equipment Manufacturers",
    excerpt:
      "Equipment categories under MTCTE require valid certificates before sale or import—plan testing and filings early.",
    image: newsImg3,
  },
] as const;

const featuredNews = {
  id: "ornate-quality-noida-office",
  date: "May 12, 2026",
  category: "Company Update",
  title: "Ornate Quality Services Expands Certification Support from Noida Corporate Office",
  excerpt:
    "We now offer faster turnaround for BIS, WPC, BEE, EPR, TEC and international compliance—with dedicated experts for documentation, testing coordination, and regulatory filings.",
  image: newsFeatured,
};

export function NewsPageContent() {
  return (
    <div className={`${styles.page} ${inter.className}`}>
      <section className={styles.hero} aria-label="News hero">
        <div className={styles.heroInner}>
          <p className={styles.kicker}>Knowledge Hub</p>
          <h1 className={`${styles.title} ${playfair.className}`}>Latest News &amp; Updates</h1>
          <div className={styles.titleUnderline} aria-hidden="true" />
          <p className={styles.subtitle}>
            Breaking news, regulatory announcements, and company updates from the compliance
            and certification industry—curated for manufacturers, importers, and brands.
          </p>
        </div>
      </section>

      <section className={styles.content} aria-label="News listings">
        <div className={styles.contentInner}>
        <div className={styles.featuredWrap} id={featuredNews.id}>
          <Link href={`/news#${featuredNews.id}`} className={styles.featuredCard}>
            <div className={styles.featuredBody}>
              <div className={styles.featuredMeta}>
                <span className={styles.featuredBadge}>{featuredNews.category}</span>
                <span className={styles.featuredDate}>{featuredNews.date}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredNews.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredNews.excerpt}</p>
              <span className={styles.featuredLink}>
                Read announcement <span aria-hidden="true">→</span>
              </span>
            </div>
            <div className={styles.featuredMedia} aria-hidden="true">
              <Image
                src={featuredNews.image}
                alt=""
                fill
                className={styles.featuredImg}
                sizes="(max-width: 900px) 100vw, 480px"
                priority
              />
            </div>
          </Link>
        </div>

        <div className={styles.sectionHead}>
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Recent announcements</h2>
          <p className={styles.sectionHint}>Regulatory &amp; industry updates</p>
        </div>

        <ul className={styles.list} role="list">
          {newsItems.map((item) => (
            <li key={item.id} id={item.id}>
              <Link href={`/news#${item.id}`} className={styles.newsCard} role="listitem">
                <span className={styles.newsIcon} aria-hidden="true">
                  <Image
                    src={item.image}
                    alt=""
                    width={52}
                    height={52}
                    className={styles.newsIconImg}
                  />
                </span>
                <span className={styles.newsContent}>
                  <span className={styles.newsMeta}>
                    <span className={styles.newsTag}>{item.category}</span>
                    <span className={styles.newsDate}>{item.date}</span>
                  </span>
                  <span className={styles.newsTitle}>{item.title}</span>
                  <span className={styles.newsExcerpt}>{item.excerpt}</span>
                </span>
                <span className={styles.newsArrow} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      d="m9 6 6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.ctaBar}>
          <div>
            <h3 className={styles.ctaTitle}>Need help with a new regulation?</h3>
            <p className={styles.ctaText}>
              Our compliance team monitors BIS, WPC, BEE, EPR, TEC and global schemes—talk to
              us for product-specific guidance and end-to-end certification support.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.primaryBtn}>
              Talk to an expert <span aria-hidden="true">→</span>
            </Link>
            <Link href="/blog" className={styles.secondaryBtn}>
              Read blogs &amp; articles
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
