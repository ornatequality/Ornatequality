import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import pesoBanner from "@/assests/services/pesoccoe.webp";

export function PesoCcoeBanner() {
  return (
    <section className={styles.banner} aria-label="PESO / CCOE Registration banner">
      <Image
        src={pesoBanner}
        alt="PESO / CCOE Registration in India — Explosives, petroleum and compressed gas compliance"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
