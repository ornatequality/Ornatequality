import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import rohsBanner from "@/assests/services/rohs.webp";

export function RohsBanner() {
  return (
    <section className={styles.banner} aria-label="RoHS Certification banner">
      <Image
        src={rohsBanner}
        alt="RoHS Certification in India — Hazardous substance compliance for electronics exporters"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
