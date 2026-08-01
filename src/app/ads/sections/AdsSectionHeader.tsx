import React from "react";
import { playfair } from "@/lib/fonts";
import styles from "@/styles/ads.module.css";

type AdsSectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export default function AdsSectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  light = false,
}: AdsSectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      {eyebrow ? (
        <p className={`${styles.sectionEyebrow} ${light ? styles.sectionEyebrowLight : ""}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`${styles.sectionHeading} ${light ? styles.sectionHeadingLight : ""} ${playfair.className}`}
      >
        {title}
      </h2>
      <div
        className={`${styles.sectionUnderline} ${light ? "" : styles.sectionUnderlineBlue}`}
        aria-hidden="true"
      />
      {subtitle ? (
        <p className={`${styles.sectionSub} ${light ? styles.sectionSubLight : ""}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
