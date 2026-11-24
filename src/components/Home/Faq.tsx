"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { manrope } from "@/lib/fonts";
import { HOME_FAQS } from "@/lib/seo/home";
import styles from "../../styles/faq.module.css";

const Faq = () => {
  const baseId = useId();
  const [openIdx, setOpenIdx] = useState<number>(-1);

  return (
    <section
      id="home-faq"
      className={`${styles.section} ${manrope.className}`}
      aria-label="Frequently Asked Questions"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 className={styles.heading}>Frequently Asked Questions</h2>
            <p className={styles.lead}>
              Cannot find your answer? Ask our team about your product.
            </p>
            <Link href="#home-query" className={styles.cta}>
              Ask an Expert
            </Link>
          </div>

          <div className={styles.listWrap}>
            <div className={styles.list}>
              {HOME_FAQS.map((it, idx) => {
                const isOpen = openIdx === idx;
                const btnId = `${baseId}-btn-${idx}`;
                const panelId = `${baseId}-panel-${idx}`;

                return (
                  <div
                    key={it.q}
                    className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                  >
                    <button
                      type="button"
                      id={btnId}
                      className={`${styles.qRow} ${isOpen ? styles.qRowOpen : ""}`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIdx((prev) => (prev === idx ? -1 : idx))}
                    >
                      <span className={styles.qText}>{it.q}</span>
                      <span
                        className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
                        aria-hidden="true"
                      />
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
        </div>
      </div>
    </section>
  );
};

export default Faq;
