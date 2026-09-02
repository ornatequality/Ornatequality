import React from "react";
import { playfair } from "@/lib/fonts";
import { CLIENT_TESTIMONIALS } from "@/data/clientTestimonials";
import styles from "@/styles/clientTestimonials.module.css";

type ClientTestimonialsProps = {
  headingId?: string;
  variant?: "home" | "landing";
};

function Stars() {
  return (
    <div className={styles.stars} aria-label="5 out of 5 stars">
      ★★★★★
    </div>
  );
} 

export default function ClientTestimonials({
  headingId,
  variant = "landing",
}: ClientTestimonialsProps) {
  const resolvedHeadingId = headingId ?? "client-testimonials-heading";
  const sectionClass =
    variant === "home" ? `${styles.section} ${styles.sectionHome}` : styles.section;

  return (
    <section className={sectionClass} aria-labelledby={resolvedHeadingId}>
      <div className={styles.container}>
        <h2 id={resolvedHeadingId} className={`${styles.heading} ${playfair.className}`}>
          What Our Clients Say
        </h2>
        <div className={styles.underline} aria-hidden="true" />

        <div className={styles.grid} role="list">
          {CLIENT_TESTIMONIALS.map(({ quote, name, role }) => (
            <article key={name} className={styles.card} role="listitem">
              <Stars />
              <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.name}>{name}</div>
                <div className={styles.role}>{role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
