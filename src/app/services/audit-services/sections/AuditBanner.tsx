import React from "react";
import Image from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";
import auditBanner from "@/assests/services/audit.webp";

export function AuditBanner() {
  return (
    <section className={styles.banner} aria-label="Audit Services banner">
      <Image
        src={auditBanner}
        alt="Audit and Certification Services in India — Compliance verification for manufacturers and businesses"
        priority
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
