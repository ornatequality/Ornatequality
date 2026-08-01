import React from "react";
import styles from "@/styles/ads.module.css";
import AdsSectionHeader from "./AdsSectionHeader";
import {
  IconDedicatedSupport,
  IconEndToEnd,
  IconExpertTeam,
  IconFastTurnaround,
  IconTransparent,
} from "./AdsWhyChooseIcons";

const ITEMS = [
  {
    title: "Expert Team",
    desc: "Industry experienced professionals with deep regulatory knowledge.",
    Icon: IconExpertTeam,
  },
  {
    title: "End-to-End Support",
    desc: "From consultation and documentation to final certification.",
    Icon: IconEndToEnd,
  },
  {
    title: "Transparent Process",
    desc: "Clear timelines, honest updates and no hidden surprises.",
    Icon: IconTransparent,
  },
  {
    title: "Faster Turnaround",
    desc: "Streamlined filing and proactive follow-ups for quicker approvals.",
    Icon: IconFastTurnaround,
  },
  {
    title: "Dedicated Support",
    desc: "A personal advisor assigned to guide you at every step.",
    Icon: IconDedicatedSupport,
  },
] as const;

export default function AdsWhyChoose() {
  return (
    <section className={styles.whySection} aria-labelledby="ads-why-heading">
      <div className={styles.whyGlow} aria-hidden="true" />

      <div className={styles.container}>
        <AdsSectionHeader
          id="ads-why-heading"
          eyebrow="Why Ornate"
          title="Why Choose Ornate?"
          subtitle="Partner with a team that combines experience, transparency and results-driven support for every certification journey."
          light
        />

        <div className={styles.whyGrid} role="list">
          {ITEMS.map(({ title, desc, Icon }, index) => (
            <article key={title} className={styles.whyItem} role="listitem">
              <span className={styles.whyAccent} aria-hidden="true" />
              <span className={styles.whyNo} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className={styles.whyIconWrap}>
                <Icon />
              </div>
              <h3 className={styles.whyTitle}>{title}</h3>
              <p className={styles.whyDesc}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
