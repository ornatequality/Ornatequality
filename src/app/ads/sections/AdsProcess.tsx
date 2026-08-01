import React from "react";
import styles from "@/styles/ads.module.css";
import AdsSectionHeader from "./AdsSectionHeader";

const STEPS = [
  {
    no: 1,
    title: "Share Your Product Details",
    desc: "Tell us about your product and target market requirements.",
  },
  {
    no: 2,
    title: "Get Expert Advice",
    desc: "Our specialists recommend the right certification path.",
  },
  {
    no: 3,
    title: "Complete Process",
    desc: "We manage documentation, testing and regulatory coordination.",
  },
  {
    no: 4,
    title: "Receive Your Certification",
    desc: "Get your approval and enter the market with confidence.",
  },
] as const;

export default function AdsProcess() {
  return (
    <section className={styles.processSection} aria-labelledby="ads-process-heading">
      <div className={styles.container}>
        <AdsSectionHeader
          id="ads-process-heading"
          eyebrow="Simple Process"
          title="How It Works"
          subtitle="Four clear steps from product inquiry to certification — with expert guidance at every stage."
        />

        <div className={styles.processLayout}>
          <div className={styles.processSteps} role="list">
            {STEPS.map(({ no, title, desc }) => (
              <div key={no} className={styles.processStep} role="listitem">
                <div className={styles.processNo} aria-hidden="true">
                  {no}
                </div>
                <h3 className={styles.processTitle}>{title}</h3>
                <p className={styles.processDesc}>{desc}</p>
              </div>
            ))}
          </div>

          <aside className={styles.callbackCard} aria-label="Request a callback">
            <h3 className={styles.callbackTitle}>Ready to Get Started?</h3>
            <p className={styles.callbackText}>
              Share your details and our compliance experts will guide you on the right certification
              path for your product.
            </p>
            <a className={styles.callbackBtn} href="#consultation-form">
              Request a Callback
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
