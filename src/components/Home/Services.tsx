"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/services.module.css";
import bisCrsIcon from "@/assests/certi-img/BIS.webp";
import isiMarkIcon from "@/assests/certi-img/isi.png";
import wpcEtaIcon from "@/assests/certi-img/wpc.webp";
import eprRegistrationIcon from "@/assests/certi-img/msmp.jpeg";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: StaticImageData;
  iconAlt: string;
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

const Services = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const services = useMemo<ServiceItem[]>(
    () => [
      {
        title: "BIS CRS Registration",
        description: "Complete support for BIS CRS certification for electronic products.",
        href: "/services/bis-crs-registration",
        icon: bisCrsIcon,
        iconAlt: "BIS CRS Registration",
      },
      {
        title: "ISI Mark Certification",
        description: "Get ISI Mark for your products as per Indian Standards.",
        href: "/services/bis-isi-mark-certification",
        icon: isiMarkIcon,
        iconAlt: "ISI Mark Certification",
      },
      {
        title: "WPC ETA Approval",
        description: "WPC approval for wireless & telecom products.",
        href: "/services/wpc-eta-approval",
        icon: wpcEtaIcon,
        iconAlt: "WPC ETA Approval",
      },
      {
        title: "EPR Registration",
        description: "EPR compliance for producers, importers & brands.",
        href: "/services/epr-registration",
        icon: eprRegistrationIcon,
        iconAlt: "EPR Registration",
      },
    ],
    []
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
          <h2 className={`${styles.heading} ${playfair.className}`}>
            Our Core Certification Services
          </h2>
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
            {services.map((s) => (
              <article
                key={s.title}
                className={styles.card}
                role="listitem"
                data-service-card="true"
              >
                <div className={styles.iconWrap}>
                  <Image
                    src={s.icon}
                    alt={s.iconAlt}
                    width={40}
                    height={40}
                    className={styles.serviceIconImg}
                  />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardText}>{s.description}</p>
                <a className={styles.learnMore} href={s.href}>
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
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
