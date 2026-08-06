"use client";

import React, { useEffect, useRef } from "react";
import styles from "../../styles/common/topbar.module.css";

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.62 10.79a15.06 15.06 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.59a1 1 0 0 1-.24 1l-2.2 2.2Z"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.33L4 8.2V6l8 5.33L20 6v2.2Z"
      />
    </svg>
  );
}

function IconLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}

const Topbar = () => {
  const topbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = topbarRef.current;
    if (!el) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty("--topbar-height", `${el.offsetHeight}px`);
    };

    syncHeight();
    const observer = new ResizeObserver(syncHeight);
    observer.observe(el);
    window.addEventListener("resize", syncHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeight);
    };
  }, []);

  return (
    <div ref={topbarRef} className={styles.topbar}>
      <div className={styles.inner}>
        <div className={styles.section} data-slot="left">
          <a
            className={styles.item}
            href="tel:+919266877738"
            aria-label="Call +91 926-687-7738"
          >
            <IconPhone className={styles.icon} />
            <span className={styles.text}>+91 926-687-7738</span>
          </a>
        </div>

        <div className={styles.section} data-slot="center">
          <a
            className={styles.item}
            href="mailto:Chetan@ornatequality.com"
            aria-label="Email Chetan at ornatequality.com"
          >
            <IconMail className={styles.icon} />
            <span className={styles.text}>Chetan@ornatequality.com</span>
          </a>
        </div>

        <div className={styles.section} data-slot="right">
          <a
            className={styles.item}
            href="https://www.google.com/maps/place/Supertech+Astralis/@28.5510933,77.3245904,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5ce975fb079:0xe10ea4df9cc7fa68!8m2!3d28.5510933!4d77.3245904!16s%2Fg%2F11gk7j2v35"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Ornate Quality office location in Google Maps"
          >
            <IconLocation className={styles.icon} />
            <span className={styles.text}>Ornate Quality Services Pvt. Ltd.</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
