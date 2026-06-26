"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/blog.module.css";

import blog1 from "../../assests/blog-1.webp";
import blog2 from "../../assests/blog-2.webp";
import blog3 from "../../assests/blog-3.webp";

export default function BlogSection() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top, behavior: "smooth" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  const posts = [
    {
      img: blog1,
      tag: "BIS-Certification for toys",
      title: "Top 10 Common Mistakes Manufacturers Make During BIS Toy Certification",
      excerpt:
        "Learn how to get BIS certification for your products and ensure compliance with Indian standards.",
    },

    {
      img: blog2,
      tag: "EPR",
      title: "The Future of EPR: Why It Matters and How It Will Revolutionise Industries",
      excerpt:
        "Understand Extended Producer Responsibility and how it impacts compliance, sustainability, and your brand’s growth.",
    },
    
    {
      img: blog3,
      tag: "WPC-ETA",
      title: "WPC ETA Approval in India: Frequency Bands and Device Compliance Guide",
      excerpt:
        "A practical guide to WPC ETA—from frequency selection to documentation—so you can launch wireless products faster.",
    },
  ] as const;

  return (
    <section className={styles.page} aria-label="Blogs">
      <div className={styles.container}>
        <div id="latest-news" className={styles.topRow}>
          <div className={styles.headingBlock}>
            {isHome ? (
              <h2 className={`${styles.heading} ${playfair.className}`}>Explore Our Latest Blogs</h2>
            ) : (
              <h1 className={`${styles.heading} ${playfair.className}`}>Explore Our Latest Blogs</h1>
            )}
            <div className={styles.headingUnderline} aria-hidden="true" />
            <p className={styles.subheading}>
              Discover expert insights, updates, and tips from the compliance &amp; certification
              world.
            </p>
          </div>
        </div>

        <div className={styles.grid} role="list" aria-label="Blog posts">
          {posts.map((p) => (
            <article key={p.title} className={styles.card} role="listitem">
              <Link href="/blog" className={styles.cardLink} aria-label={`Read more: ${p.title}`} />
              <div className={styles.media}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 700px) min(100vw, 520px), (max-width: 1100px) 45vw, 32vw"
                  className={styles.img}
                  quality={80}
                  priority={false}
                />
              </div>

              <div className={styles.body}>
                <div className={styles.tag}>{p.tag}</div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <Link className={styles.readMore} href="/blog">
                  Read More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
