import React from "react";
import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import styles from "@/styles/ads.module.css";
import buildingImg from "@/assests/supernova.png";

const STATS = [
  { value: "5000+", label: "Satisfied Clients" },
  { value: "25+", label: "Industries Served" },
  { value: "10000+", label: "Certifications Completed" },
  { value: "100%", label: "Client Satisfaction" },
] as const;

export default function AdsAbout() {
  return (
    <section className={styles.about} aria-labelledby="ads-about-heading">
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutMedia}>
            <div className={styles.aboutImageWrap}>
              <Image
                src={buildingImg}
                alt="Ornate Quality Services office at Supernova Astralis, Noida"
                fill
                sizes="(max-width: 768px) 92vw, 520px"
                quality={82}
              />
            </div>
            <div className={styles.aboutBadge} aria-hidden="true">
              <strong>13+</strong>
              Years of Excellence
            </div>
          </div>

          <div>
            <div className={styles.aboutKicker}>About Ornate Quality</div>
            <h2 id="ads-about-heading" className={`${styles.aboutTitle} ${playfair.className}`}>
              Trusted · Experienced · Professional
            </h2>
            <p className={styles.aboutText}>
              Ornate Quality Services Pvt. Ltd. is India&apos;s trusted certification and compliance
              consultancy. We help manufacturers, importers and brands obtain BIS, WPC, BEE, EPR,
              TEC, LMPC and other mandatory approvals with end-to-end support — from documentation
              and testing coordination to final certification.
            </p>
            <p className={styles.aboutText}>
              With 13+ years of industry experience, our expert team delivers faster approvals,
              transparent communication and dedicated support at every step of your compliance journey.
            </p>

            <div className={styles.aboutStats} role="list">
              {STATS.map(({ value, label }) => (
                <div key={label} className={styles.aboutStat} role="listitem">
                  <span className={styles.aboutStatValue}>{value}</span>
                  <span className={styles.aboutStatLabel}>{label}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className={styles.aboutBtn}>
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
