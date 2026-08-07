import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import beeBanner from "@/assests/services/ce.webp";

export function CeBanner() {
  return (
    <section className={styles.banner} aria-label="CE Certification banner">
      <Image
      
        src={beeBanner}
        alt="CE Certification for Indian manufacturers — compliance for exporting to Europe"
        priority
        className={styles.bannerImg}
        sizes="100vw"
        
      />

      
    </section>
  );
}
