import React from "react";
import { playfair } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";
import { IconBadge, IconBriefcase, IconCalendar, IconGlobe, IconTarget, IconUsers } from "./icons";

const milestones = [
  { year: "2013", label: "Company Founded", icon: <IconBriefcase /> },
  { year: "2015", label: "1000+ Certifications", icon: <IconBadge /> },
  { year: "2018", label: "Pan India Expansion", icon: <IconUsers /> },
  { year: "2021", label: "Global Client Network", icon: <IconGlobe /> },
  { year: "2026", label: "Advanced Compliance & Certification Solutions", icon: <IconTarget /> },
  { year: "—", label: "Continuous Growth", icon: <IconCalendar /> },
];

export function Journey() {
  return (
    <section className={styles.journeyWrap} aria-label="Our journey">
      <div className={styles.container}>
        <div className={styles.journeyHead}>
          <h2 className={`${styles.journeyTitle} ${playfair.className}`}>Our journey</h2>
        </div>
        <div className={styles.timeline} role="list" aria-label="Milestones timeline">
          {milestones.map((m) => (
            <div className={styles.milestone} role="listitem" key={`${m.year}-${m.label}`}>
              <div className={styles.milestoneDot} aria-hidden="true">
                {m.icon}
              </div>
              <div className={styles.milestoneYear}>{m.year}</div>
              <div className={styles.milestoneText}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
