import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import eprBanner from "@/assests/services/epr-banner.webp";

export function EprBanner() {
  return (
    <section className={styles.banner} aria-label="EPR Registration banner">
      <Image
        src={eprBanner}
        alt="EPR Registration in India — Extended Producer Responsibility compliance under CPCB"
        priority
        quality={90}
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
