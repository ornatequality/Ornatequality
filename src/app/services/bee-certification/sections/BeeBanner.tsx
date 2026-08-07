import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import beeBanner from "@/assests/services/bee.webp";

export function BeeBanner() {
  return (
    <section className={styles.banner} aria-label="BEE Certification banner">
      <Image
        src={beeBanner}
        alt="BEE Certification in India — Energy efficiency labeling and star rating registration"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}