import React from "react";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";
import {
  IconBriefcase,
  IconCheck,
  IconDoc,
  IconFactory,
  IconTarget,
  IconUsers,
} from "./icons";

const items = [
  {
    title: "Fast Approvals",
    desc: "Accelerated certification process with timely execution and proactive follow-up.",
    icon: <IconTarget />,
  },
  {
    title: "Regulatory Expertise",
    desc: "Deep understanding of national and international compliance frameworks.",
    icon: <IconBriefcase />,
  },
  {
    title: "End-to-End Support",
    desc: "Complete assistance from consultation, documentation, testing to final approval.",
    icon: <IconDoc />,
  },
  {
    title: "Dedicated Project Manager",
    desc: "A single expert point of contact throughout your compliance journey.",
    icon: <IconUsers />,
  },
  {
    title: "Industry-Specific Knowledge",
    desc: "Specialized expertise across electronics, manufacturing, telecom, and consumer products.",
    icon: <IconFactory />,
  },
  {
    title: "Transparent Process",
    desc: "Real-time updates, clear communication, and complete project visibility.",
    icon: <IconCheck />,
  },
];

export function WhyBrandsTrustUs() {
  return (
    <section className={`${styles.trustBar} ${manrope.className}`} aria-label="Why brands trust us">
      <div className={styles.container}>
        <h2 className={`${styles.trustTitle} ${playfair.className}`}>Why brands trust us</h2>

        <div className={styles.trustGrid} role="list">
          {items.map((it) => (
            <div className={styles.trustItem} role="listitem" key={it.title}>
              <div className={styles.trustIcon} aria-hidden="true">
                {it.icon}
              </div>
              <div className={`${styles.trustH} ${playfair.className}`}>{it.title}</div>
              <div className={styles.trustP}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
