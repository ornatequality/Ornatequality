import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import tpiBanner from "@/assests/services/thirdparty.webp";

export function TpiBanner() {
  return (
    <section className={styles.banner} aria-label="Third Party Inspection banner">
      <Image
        src={tpiBanner}
        alt="Third Party Inspection Services in India — Independent quality verification"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
