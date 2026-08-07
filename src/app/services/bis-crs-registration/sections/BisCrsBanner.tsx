import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import bisBanner from "@/assests/services/biss.webp";

export function BisCrsBanner() {
  return (
    <section className={styles.banner} aria-label="BIS Certification Services banner">
      <Image
        src={bisBanner}
        alt="BIS Certification Services in India — Complete BIS CRS, ISI and FMCS Registration Support"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}

