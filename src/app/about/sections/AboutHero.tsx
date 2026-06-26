import React from "react";
import Image from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";

import aboutHeroImg from "@/assests/about12.jpg";

export function AboutHero() {
  return (
    <section className={`${styles.aboutHero} ${manrope.className}`} aria-label="About hero">
      <div className={styles.aboutHeroMedia} aria-hidden="true">
        <Image
          src={aboutHeroImg}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.aboutHeroImg}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.aboutHeroInner}>
          <div className={styles.aboutHeroKicker}>About us</div>

          <h1 className={`${styles.aboutHeroTitle} ${playfair.className}`}>
            The{" "}
            <span className={styles.aboutHeroHighlight}>People, Passion, and Expertise</span> Behind{" "}
            <span className={styles.aboutHeroHighlight}>India&apos;s Trusted Compliance Partner</span>
          </h1>

          <p className={styles.aboutHeroText}>
            For over 13 years, Ornate has been helping manufacturers, importers, and global brands
            simplify regulatory compliance, secure certifications, and achieve seamless market access
            with confidence.
           </p>
          <div className={styles.aboutHeroCtaRow}>
            <a className={styles.aboutHeroBtnPrimary} href="#">
              TALK TO EXPERT →
            </a>
            <a className={styles.aboutHeroBtnSecondary} href="#">
              OUR SERVICES →
            </a>
          </div>

          <div className={styles.aboutHeroCrumbs} aria-label="Breadcrumb">
            <Link className={styles.aboutHeroCrumbLink} href="/">
              Home
            </Link>
            <span className={styles.aboutHeroCrumbSep} aria-hidden="true">
              {">"}
            </span>
            <span className={styles.aboutHeroCrumbCurrent}>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
