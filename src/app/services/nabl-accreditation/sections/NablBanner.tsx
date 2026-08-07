import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import nablBanner from "@/assests/services/nabl.webp";

export function NablBanner() {
  return (
    <section className={styles.banner} aria-label="NABL Accreditation banner">
      <Image
        src={nablBanner}
        alt="NABL Accreditation in India — Testing and calibration laboratory accreditation"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
