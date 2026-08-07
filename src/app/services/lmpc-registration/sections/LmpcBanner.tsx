import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import lmpcBanner from "@/assests/certi-img/lmpc.webp";

export function LmpcBanner() {
  return (
    <section className={styles.banner} aria-label="LMPC Registration banner">
      <Image
        src={lmpcBanner}
        alt="LMPC Registration in India — Legal Metrology Packaged Commodities compliance for importers"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
