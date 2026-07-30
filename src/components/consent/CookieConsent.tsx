"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getConsentCookie,
  setConsentCookie,
  updateGtmConsent,
  type ConsentValue,
} from "@/lib/consent";
import styles from "@/styles/cookieConsent.module.css";

function IconCookie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.02 2 11c0 4.2 3.05 7.67 7.07 8.38.5.09.93-.22.93-.72v-1.2c-3.55-.77-3.55-1.72-3.55-2.38 0-.66.44-1.22 1.02-1.42.53-.18 1.01-.55 1.28-1.02.27-.47.27-1.03 0-1.5-.27-.47-.75-.84-1.28-1.02C6.44 10.22 6 9.66 6 9c0-.66.44-1.22 1.02-1.42.53-.18 1.01-.55 1.28-1.02.27-.47.27-1.03 0-1.5-.27-.47-.75-.84-1.28-1.02C6.44 4.22 6 3.66 6 3c0-.55.45-1 1-1h.09c.5 0 .91.36.98.86.08.58.58 1.02 1.17 1.02.39 0 .74-.19.96-.48A7.04 7.04 0 0 1 12 2Zm-1 6a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 11 8Zm4 0a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 15 8Zm-2 4a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 13 12Zm4.5-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM8.5 13.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
      />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
      />
    </svg>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const existing = getConsentCookie();
    if (existing === "accepted") {
      updateGtmConsent(true);
      return;
    }
    if (existing === "rejected") {
      updateGtmConsent(false);
      return;
    }
    setVisible(true);
    requestAnimationFrame(() => setMounted(true));
  }, []);

  function handleChoice(value: ConsentValue) {
    setMounted(false);
    setTimeout(() => {
      setConsentCookie(value);
      updateGtmConsent(value === "accepted");
      setVisible(false);
    }, 220);
  }

  if (!visible) return null;

  return (
    <>
      <div className={styles.overlay} aria-hidden="true" />
      <div
        className={`${styles.banner} ${mounted ? styles.bannerVisible : ""}`}
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-desc"
        aria-live="polite"
      >
      <div className={styles.accent} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.iconWrap} aria-hidden="true">
          <IconCookie />
        </div>

        <div className={styles.content}>
          <p id="cookie-consent-title" className={styles.title}>
            Your privacy matters to us
          </p>
          <p id="cookie-consent-desc" className={styles.text}>
            We use essential cookies to remember your preferences. With your consent, we also use
            analytics and marketing cookies to improve our services and measure campaign performance.
          </p>

          <div className={styles.tags} aria-hidden="true">
            <span className={styles.tag}>Essential</span>
            <span className={`${styles.tag} ${styles.tagOptional}`}>Analytics</span>
            <span className={`${styles.tag} ${styles.tagOptional}`}>Marketing</span>
          </div>

          <p className={styles.policyLine}>
            <IconShield />
            <span>
              Learn more in our{" "}
              <Link className={styles.link} href="/privacy-policy">
                Privacy &amp; Cookie Policy
              </Link>
            </span>
          </p>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnReject} onClick={() => handleChoice("rejected")}>
            Essential Only
          </button>
          <button type="button" className={styles.btnAccept} onClick={() => handleChoice("accepted")}>
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
