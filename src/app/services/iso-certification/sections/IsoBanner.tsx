import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import isoBanner from "@/assests/certi-img/iso.png";

export function IsoBanner() {
  return (
    <section className={styles.banner} aria-label="ISO Certification banner">
      <Image
        src={isoBanner}
        alt="ISO Certification in India — Quality, environmental and safety management systems"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
