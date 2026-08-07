import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import iecBanner from "@/assests/services/iec.webp";

export function IecBanner() {
  return (
    <section className={styles.banner} aria-label="IEC Registration banner">
      <Image
        src={iecBanner}
        alt="IEC Registration in India — Import Export Code from DGFT for importers and exporters"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
