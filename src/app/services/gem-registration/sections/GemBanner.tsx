import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import gemBanner from "@/assests/certi-img/GEm.webp";

export function GemBanner() {
  return (
    <section className={styles.banner} aria-label="GeM Portal Registration banner">
      <Image
        src={gemBanner}
        alt="GeM Portal Registration in India — Government e-Marketplace seller onboarding"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
