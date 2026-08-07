import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import fssaiBanner from "@/assests/services/FSSAI.webp";

export function FssaiBanner() {
  return (
    <section className={styles.banner} aria-label="FSSAI Registration banner">
      <Image
        src={fssaiBanner}
        alt="FSSAI Registration in India — Food business licensing and compliance"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}


