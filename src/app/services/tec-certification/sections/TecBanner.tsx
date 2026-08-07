import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import beeBanner from "@/assests/services/etc.webp";

export function TecBanner() {
  return (
    <section className={styles.banner} aria-label="TEC Certification banner">
      <Image
        src={beeBanner}
        alt="TEC Certification in India — Telecom equipment compliance and MTCTE approval"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
} 
