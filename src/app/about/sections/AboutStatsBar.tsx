import React from "react";
import { inter } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";
import { IconBadge, IconBriefcase, IconGlobe, IconUsers } from "./icons";


/** Full-width stats strip — same layout/colors as home Hero stats bar; copy from Who-we-are metrics */
export function AboutStatsBar() {
  return (
    <section
      className={`${styles.aboutStatsSection} ${inter.className}`}
      aria-label="Company highlights"
    >
      <div className={styles.aboutStatsInner} role="list">
        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconBriefcase />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>13+</span>
            <span className={styles.aboutBarStatLabel}>Years Experience</span>
          </div>
        </div>

        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconBadge />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>5000+</span>
            <span className={styles.aboutBarStatLabel}>Projects Completed</span>
          </div>
        </div>

        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconGlobe />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>100+</span>
            <span className={styles.aboutBarStatLabel}>Global Clients</span>
          </div>
        </div>

        <div className={styles.aboutBarStat} role="listitem">
          <span className={styles.aboutBarStatIcon} aria-hidden="true">
            <IconUsers />
          </span>
          <div className={styles.aboutBarStatText}>
            <span className={styles.aboutBarStatValue}>25+</span>
            <span className={styles.aboutBarStatLabel}>Industry Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
