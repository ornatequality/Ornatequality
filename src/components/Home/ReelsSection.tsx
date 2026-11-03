"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { playfair } from "@/lib/fonts";
import { SITE_SOCIAL } from "@/lib/site";
import styles from "../../styles/reels.module.css";

type Reel = {
  id: string;
  tag: string;
  title: string;
  description: string;
  src: string;
  duration: string;
  icon: "shield" | "recycle" | "leaf";
};

const REELS: Reel[] = [
  {
    id: "bis",
    tag: "BIS",
    title: "BIS Certification",
    description: "Understand the process, requirements and benefits.",
    src: "/videos/bis.mp4",
    duration: "0:30",
    icon: "shield",
  },
  {
    id: "epr",
    tag: "EPR",
    title: "EPR Registration",
    description: "Clear guidance on producer responsibility and compliance.",
    src: "/videos/epr.mp4",
    duration: "0:20",
    icon: "recycle",
  },
  {
    id: "bee",
    tag: "BEE",
    title: "BEE Compliance",
    description: "Learn about energy efficiency requirements.",
    src: "/videos/bee.mp4",
    duration: "0:20",
    icon: "leaf",
  },
];

const YOUTUBE_URL = SITE_SOCIAL[3];
const INSTAGRAM_URL = SITE_SOCIAL[2];

function ReelIcon({ name }: { name: Reel["icon"] }) {
  if (name === "recycle") {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10.2 3.4 8.4 6.6l-1.8-.4 3.3 4.6 4.6-3.3-.4-1.8-3.2 1.8 1.8-3.2-2.5-.9Zm9.2 4.2-1.6 1.1c.7 1 .9 2.3.6 3.5l1.9.5c.5-1.8.2-3.7-.9-5.1ZM6.2 12.1c.2-1 .7-1.9 1.4-2.6L6.2 8.2A7 7 0 0 0 4.3 12l1.9.1Zm2.5 6.2-1.1 1.6c1.4 1 3.1 1.4 4.8 1.1l-.4-1.9a5 5 0 0 1-3.3-.8Zm7.6.3c-.9.6-2 1-3.1 1.1l.2 2a7 7 0 0 0 4.4-1.6l-1.5-1.5Z"
        />
      </svg>
    );
  }
  if (name === "leaf") {
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.8 4.2c-3.8.2-8.4 2.4-10 6.7-1 2.6-.4 5.3 1.4 7.2.3.3.7.3 1 .1l6.8-5.2c.4-.3.4-.8.1-1.1L13.5 8.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.5 3.6c1.3 1.3 1.6 3.3.8 5-.3.6-.1 1.3.5 1.6.6.3 1.3.1 1.6-.5 1.3-2.8.8-6.2-1.4-8.5-1-1-2.3-1.7-3.8-2.1 3.2.1 6.2 1.7 7.8 4.5.4.6 1.2.8 1.8.4.6-.4.8-1.2.4-1.8-2.2-3.7-6.3-5.8-10.5-5.7Z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3.2 5.5 5.4v5.3c0 4.3 2.8 7.5 6.5 8.9 3.7-1.4 6.5-4.6 6.5-8.9V5.4L12 3.2Zm0 2.1 4.8 1.6v3.8c0 3.2-2 5.7-4.8 6.9-2.8-1.2-4.8-3.7-4.8-6.9V6.9L12 5.3Z"
      />
    </svg>
  );
}

const ReelsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Reel | null>(null);

  const showFrame = useCallback((video: HTMLVideoElement) => {
    if (video.currentTime < 0.12) video.currentTime = 0.15;
  }, []);

  const scrollByCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(`.${styles.card}`);
    const step = card ? card.offsetWidth + 22 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <section className={styles.section} aria-label="Compliance knowledge videos">
      <div className={styles.container}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Knowledge in Action
          <span className={styles.eyebrowLine} />
        </p>
        <h2 className={`${styles.heading} ${playfair.className}`}>
          Compliance, Explained <em>Simply</em>
        </h2>
        <p className={styles.sub}>
          Watch our expert insights on BIS, ISI, WPC, EPR and other product
          compliance topics.
        </p>

        <div className={styles.carousel}>
          <button
            type="button"
            className={`${styles.nav} ${styles.navPrev}`}
            aria-label="Previous videos"
            onClick={() => scrollByCard(-1)}
          >
            <Chevron dir="left" />
          </button>

          <div className={styles.track} ref={trackRef}>
            {REELS.map((reel) => (
              <article key={reel.id} className={styles.card}>
                <video
                  className={styles.video}
                  src={reel.src}
                  muted
                  playsInline
                  preload="metadata"
                  onLoadedData={(e) => showFrame(e.currentTarget)}
                  aria-hidden="true"
                />
                <div className={styles.scrim} />
                <span className={styles.badge}>
                  <span className={styles.badgeIcon}>
                    <ReelIcon name={reel.icon} />
                  </span>
                  {reel.tag}
                </span>
                <button
                  type="button"
                  className={styles.play}
                  aria-label={`Play ${reel.title}`}
                  onClick={() => setActive(reel)}
                >
                  <span className={styles.playInner} />
                </button>
                <div className={styles.meta}>
                  <h3 className={styles.title}>{reel.title}</h3>
                  <div className={styles.metaRow}>
                    <p className={styles.desc}>{reel.description}</p>
                    <span className={styles.time}>
                      <ClockIcon />
                      {reel.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.nav} ${styles.navNext}`}
            aria-label="Next videos"
            onClick={() => scrollByCard(1)}
          >
            <Chevron dir="right" />
          </button>
        </div>

        <div className={styles.actions}>
          <a
            className={styles.primaryBtn}
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Videos
            <span aria-hidden="true">→</span>
          </a>
          <a
            className={styles.ghostBtn}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            Follow Us on Instagram
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {active ? (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div
            className={styles.modalInner}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              aria-label="Close video"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <video
              className={styles.modalVideo}
              src={active.src}
              controls
              autoPlay
              playsInline
            />
            <p className={styles.modalTitle}>{active.title}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      {dir === "left" ? (
        <path
          d="M14.5 5.5 8 12l6.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9.5 5.5 16 12l-6.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 8v4.2l2.6 1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="3.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export default ReelsSection;
