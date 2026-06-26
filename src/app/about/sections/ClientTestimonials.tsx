"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import styles from "@/styles/aboutV2.module.css";
import manPng from "@/assests/man.png";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function ClientTestimonials() {
  const items = useMemo<Testimonial[]>(
    () => [
      {
        quote:
          "Ornate Certification helped us obtain BIS certification within a very short time. Their team is professional and extremely supportive.",
        name: "Rajeev Mehta",
        role: "Procurement Head, Noida",
      },
      {
        quote:
          "Excellent service and transparent communication throughout the process. Highly recommended for all compliance needs.",
        name: "Sneha Kapoor",
        role: "Compliance Manager, Hitachi",
      },
      {
        quote:
          "Their expertise in regulatory compliance is unmatched. They truly care about their clients.",
        name: "Ankit Verma",
        role: "Director, Wipro",
      },
      {
        quote:
          "Fast turnaround and clear guidance. The whole journey was smooth from start to finish.",
        name: "Pooja Sharma",
        role: "Operations Lead",
      },
      {
        quote:
          "Reliable team with strong domain knowledge. We received timely updates at every stage.",
        name: "Vikram Singh",
        role: "Business Head",
      },
    ],
    []
  );

  return (
    <section className={styles.section} aria-label="What our clients say">
      <div className={styles.container}>
        <h2 className={styles.sectionHeadingCenter}>What our clients say</h2>

        <div className={styles.testimonialsWrapV2}>
          <div className={styles.testimonialsMarqueeTrack}>
            {items.map((t, idx) => (
              <article className={styles.testimonialCardV2} key={`a-${t.name}-${idx}`}>
                <div className={styles.quoteMarkV2} aria-hidden="true">
                  “
                </div>
                <p className={styles.testimonialTextV2}>{t.quote}</p>

                <div className={styles.testimonialFooterV2}>
                  <div className={styles.testimonialAvatarV2} aria-hidden="true">
                    <Image src={manPng} alt="" fill sizes="64px" className={styles.testimonialAvatarImgV2} />
                  </div>
                  <div className={styles.testimonialMetaV2}>
                    <div className={styles.testimonialNameV2}>{t.name}</div>
                    <div className={styles.testimonialRoleV2}>{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
            {items.map((t, idx) => (
              <article
                className={styles.testimonialCardV2}
                key={`b-${t.name}-${idx}`}
                aria-hidden="true"
              >
                <div className={styles.quoteMarkV2} aria-hidden="true">
                  “
                </div>
                <p className={styles.testimonialTextV2}>{t.quote}</p>

                <div className={styles.testimonialFooterV2}>
                  <div className={styles.testimonialAvatarV2} aria-hidden="true">
                    <Image src={manPng} alt="" fill sizes="64px" className={styles.testimonialAvatarImgV2} />
                  </div>
                  <div className={styles.testimonialMetaV2}>
                    <div className={styles.testimonialNameV2}>{t.name}</div>
                    <div className={styles.testimonialRoleV2}>{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
