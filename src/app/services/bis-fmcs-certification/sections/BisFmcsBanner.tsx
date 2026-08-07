import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import bisBanner from "@/assests/services/fmcs.webp";

export function BisFmcsBanner() {
  return (
    <section className={styles.banner} aria-label="BIS FMCS Certification banner">
      <Image
        src={bisBanner}
        alt="BIS FMCS Certification for Foreign Manufacturers — Complete guide to selling products in India"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
