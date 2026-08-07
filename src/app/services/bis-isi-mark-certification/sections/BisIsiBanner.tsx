import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import bisBanner from "@/assests/services/isi.webp";

export function BisIsiBanner() {
  return (
    <section className={styles.banner} aria-label="BIS ISI Mark Certification banner">
      <Image
        src={bisBanner}
        alt="BIS ISI Mark Certification in India — Complete ISI Certification Process, Requirements and Benefits"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
