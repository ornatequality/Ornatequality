import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import cdscoBanner from "@/assests/services/cdsco.webp";

export function CdscoBanner() {
  return (
    <section className={styles.banner} aria-label="CDSCO Registration banner">
      <Image
        src={cdscoBanner}
        alt="CDSCO Registration in India — Medical device and drug regulatory compliance"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}


