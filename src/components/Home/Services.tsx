"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/services.module.css";
import bisCrsIcon from "@/assests/certi-img/BIS.webp";
import isiMarkIcon from "@/assests/certi-img/isi.webp";
import wpcEtaIcon from "@/assests/certi-img/wpc.webp";
import eprRegistrationIcon from "@/assests/certi-img/epr-icon.webp";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: StaticImageData;
  iconAlt: string;
  iconBg: string;
  includes: string[];
};

function IconChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <path
        d="M14.5 6 8.5 12l6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
      <path
        d="M9.5 6 15.5 12l-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBack(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        d="M15 6 9 12l6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true" {...props}>
      <path
        d="M3.2 8.2 6.1 11l6.7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Services = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const services = useMemo<ServiceItem[]>(
    () => [
      {
        title: "BIS CRS Registration",
        description: "Complete support for BIS CRS certification for electronic products.",
        href: "/services/bis-crs-registration",
        icon: bisCrsIcon,
        iconAlt: "BIS CRS Registration",
        iconBg: "#ece9fb",
        includes: ["Electronics & IT products", "Solar photovoltaic products", "CRS portal filing"],
      },
      {
        title: "ISI Mark Certification",
        description: "Get ISI Mark for your products as per Indian Standards.",
        href: "/services/bis-isi-mark-certification",
        icon: isiMarkIcon,
        iconAlt: "ISI Mark Certification",
        iconBg: "#fde8d8",
        includes: ["Product testing support", "Factory inspection readiness", "ISI licence application"],
      },
      {
        title: "WPC ETA Approval",
        description: "WPC approval for wireless & telecom products.",
        href: "/services/wpc-eta-approval",
        icon: wpcEtaIcon,
        iconAlt: "WPC ETA Approval",
        iconBg: "#f3edd4",
        includes: ["Equipment Type Approval", "Wireless device filing", "Import clearance support"],
      },
      {
        title: "EPR Registration",
        description: "EPR compliance for producers, importers & brands.",
        href: "/services/epr-registration",
        icon: eprRegistrationIcon,
        iconAlt: "EPR Registration",
        iconBg: "#e4f3ea",
        includes: ["Plastic packaging", "E-waste", "Battery waste"],
      },
    ],
    [],
  );

  const updateNavState = useCallback(() => {
    const track = carouselRef.current;
    if (!track) return;

    const cards = track.querySelectorAll<HTMLElement>("[data-service-card]");
    if (!cards.length) return;

    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < maxScroll);

    let nearest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    setActiveIndex(nearest);
  }, []);

  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;

    updateNavState();
    track.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      track.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, [updateNavState, services.length]);

  const scrollToCard = useCallback((index: number) => {
    const track = carouselRef.current;
    if (!track) return;

    const card = track.querySelectorAll<HTMLElement>("[data-service-card]")[index];
    if (!card) return;

    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  const scrollPrev = () => scrollToCard(Math.max(0, activeIndex - 1));
  const scrollNext = () => scrollToCard(Math.min(services.length - 1, activeIndex + 1));

  return (
    <section className={styles.services} aria-label="Our core certification services">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <p className={styles.sectionTagline}>Your compliance partner —</p>
          <h2 className={`${styles.heading} ${playfair.className}`}>Our Core Certification Services</h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
        </div>

        <div className={styles.carouselWrap}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous service"
          >
            <IconChevronLeft />
          </button>

          <div
            ref={carouselRef}
            className={styles.carousel}
            role="list"
            aria-label="Certification service cards"
          >
            {services.map((s, index) => {
              const isFlipped = flippedIndex === index;
              return (
                <article
                  key={s.title}
                  className={`${styles.card} ${isFlipped ? styles.cardFlipped : ""}`}
                  role="listitem"
                  data-service-card="true"
                  onMouseEnter={() => setFlippedIndex(index)}
                  onMouseLeave={() => setFlippedIndex(null)}
                  onClick={(event) => {
                    const target = event.target as HTMLElement;
                    if (target.closest("a")) return;
                    setFlippedIndex((current) => (current === index ? null : index));
                  }}
                >
                  <div className={styles.flipper}>
                    <div className={`${styles.face} ${styles.faceFront}`}>
                      <div className={styles.frontMain}>
                        <div className={styles.iconWrap} style={{ background: s.iconBg }}>
                          <Image
                            src={s.icon}
                            alt={s.iconAlt}
                            fill
                            sizes="56px"
                            className={styles.serviceIconImg}
                          />
                        </div>
                        <h3 className={styles.cardTitle}>{s.title}</h3>
                      </div>
                      <Link
                        className={styles.exploreLink}
                        href={s.href}
                        onClick={(event) => event.stopPropagation()}
                      >
                        Explore Services <span aria-hidden="true">→</span>
                      </Link>
                    </div>

                    <div className={`${styles.face} ${styles.faceBack}`}>
                      <div className={styles.backTop}>
                        <button
                          type="button"
                          className={styles.backArrow}
                          aria-label={`Close ${s.title} details`}
                          onClick={(event) => {
                            event.stopPropagation();
                            setFlippedIndex(null);
                          }}
                        >
                          <IconBack />
                        </button>
                        <div className={styles.backIcon}>
                          <Image src={s.icon} alt="" fill sizes="28px" className={styles.backIconImg} />
                        </div>
                        <p className={styles.backDesc}>{s.description}</p>
                      </div>
                      <div className={styles.backBody}>
                        <p className={styles.includesLabel}>Services include:</p>
                        <ul className={styles.includesList}>
                          {s.includes.map((item) => (
                            <li key={item} className={styles.includesItem}>
                              <span className={styles.check} aria-hidden="true">
                                <IconCheck />
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <Link className={styles.learnMore} href={s.href} onClick={(event) => event.stopPropagation()}>
                          Learn More <span className={styles.learnMoreArrow} aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next service"
          >
            <IconChevronRight />
          </button>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.ctaBtn} href="/services">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
