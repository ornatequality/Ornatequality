import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import trademarkBanner from "@/assests/certi-img/trademark.webp";

export function TrademarkBanner() {
  return (
    <section className={styles.banner} aria-label="Trademark Registration banner">
      <Image
        src={trademarkBanner}
        alt="Trademark Registration in India — Protect your brand name and logo"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}

