import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { playfair } from "@/lib/fonts";
import styles from "@/styles/ads.module.css";

function IconBulb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M9 21h6v-1H9v1Zm3-19a6 6 0 0 0-4 10.7V16h8v-3.3A6 6 0 0 0 12 2Z"
      />
    </svg>
  );
}

function IconExpert(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-7 18a7 7 0 0 1 14 0H5Z" />
    </svg>
  );
}

function IconFast(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

function IconSupport(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Z"
      />
    </svg>
  );
}

function IconHassle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
      />
    </svg>
  );
}

const FEATURES = [
  { title: "Expert Guidance", Icon: IconExpert },
  { title: "Faster Process", Icon: IconFast },
  { title: "End-to-End Support", Icon: IconSupport },
  { title: "Hassle-free Experience", Icon: IconHassle },
] as const;

export default function AdsHero() {
  return (
    <section className={styles.hero} aria-label="Product certification consultation">
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <p className={styles.tagline}>
            <span className={styles.taglineIcon} aria-hidden="true">
              <IconBulb />
            </span>
            Your Certification, Our Responsibility
          </p>

          <h1 className={`${styles.headline} ${playfair.className}`}>
            Get Your Product Certified in India{" "}
            <span className={styles.headlineAccent}>with Ease!</span>
          </h1>

          <p className={styles.subheadline}>
            Complete Certification &amp; Compliance Solutions for Manufacturers, Importers and
            Brands.
          </p>

          <div className={styles.featureRow} role="list">
            {FEATURES.map(({ title, Icon }) => (
              <div key={title} className={styles.featureItem} role="listitem">
                <span className={styles.featureDot} aria-hidden="true">
                  <Icon />
                </span>
                {title}
              </div>
            ))}
          </div>

          <div className={styles.ctaRow}>
            <a className={styles.ctaPrimary} href="#consultation-form">
              Get Expert Consultation
            </a>
            <a className={styles.ctaSecondary} href="#consultation-form">
              Know Your Certification Requirement
            </a>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.formCard} id="consultation-form">
            <div className={styles.formCardAccent} aria-hidden="true" />
            <div className={styles.formCardBody}>
              <h2 className={styles.formCardTitle}>Check Your Product Certification Requirement</h2>
              <p className={styles.formCardSubtitle}>Talk to our compliance experts today!</p>

              <ContactForm variant="ads" />

              <p className={styles.formSecure}>
                <span className={styles.formSecureIcon} aria-hidden="true">🔒</span>
                Your information is 100% secure with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroWave} aria-hidden="true" />
    </section>
  );
}
