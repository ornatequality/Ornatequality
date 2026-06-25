"use client";

import React, { useId, useState } from "react";
import { playfair } from "@/lib/fonts";
import { HOME_FAQS } from "@/lib/seo/home";
import styles from "../../styles/faq.module.css";

const Faq = () => {
  const baseId = useId();
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section
      className={styles.section}
      aria-label="Frequently Asked Questions"
    >
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <h2 className={`${styles.heading} ${playfair.className}`}>
            Frequently Asked <span className={styles.accent}>Questions</span>
          </h2>
          <div className={styles.underline} aria-hidden="true" />
        </div>

        <div className={styles.card}>
          {HOME_FAQS.map((it, idx) => {
            const isOpen = openIdx === idx;
            const btnId = `${baseId}-btn-${idx}`;
            const panelId = `${baseId}-panel-${idx}`;

            return (
              <div key={it.q} className={styles.item}>
                <button
                  type="button"
                  id={btnId}
                  className={styles.qRow}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
                >
                  <span className={styles.qText}>{it.q}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
                >
                  <p className={styles.answer}>{it.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

