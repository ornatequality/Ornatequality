import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import wpcBanner from "@/assests/certi-img/wpc.webp";

export function WpcBanner() {
  return (
    <section className={styles.banner} aria-label="WPC ETA Approval banner">
      <Image
        src={wpcBanner}
        alt="WPC ETA Approval in India — Wireless and telecom product compliance"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
  
}
