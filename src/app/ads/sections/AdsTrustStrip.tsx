import React from "react";
import styles from "@/styles/ads.module.css";

const ITEMS = [
  { value: "13+", label: "Years Experience" },
  { value: "5000+", label: "Certifications Delivered" },
  { value: "100+", label: "Global Clients" },
  { value: "98%", label: "Success Rate" },
] as const;

export default function AdsTrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Company highlights">
      <div className={styles.container}>
        <div className={styles.trustStripInner} role="list">
          {ITEMS.map(({ value, label }) => (
            <div key={label} className={styles.trustStripItem} role="listitem">
              <span className={styles.trustStripValue}>{value}</span>
              <span className={styles.trustStripLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
