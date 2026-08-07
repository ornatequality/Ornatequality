"use client";

import React, { useEffect, useMemo, useState } from "react";
import { SERVICE_PAGE_ANCHORS, SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";
import Image from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/servicesPage.module.css";
import faqArt from "@/assests/Faqs.webp";
import aboutHeroImg from "@/assests/about12.webp";

import bisLogo from "@/assests/certi-img/BIS.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import bisBannerImg from "@/assests/ser1.webp";
import wpcBannerImg from "@/assests/ser2.webp";
import tecBannerImg from "@/assests/certi-img/ser3.webp";
import beeBannerImg from "@/assests/certi-img/ser4.webp";
import lmpcBannerImg from "@/assests/certi-img/ser5.webp";
import testingBannerImg from "@/assests/certi-img/ser6.webp";
import ceBannerImg from "@/assests/certi-img/ser7.webp";
import eprBannerImg from "@/assests/certi-img/ser8.webp";
import nablLogo from "@/assests/certi-img/nabl.webp";
import eprIcon from "@/assests/certi-img/epr-icon.webp";
import isoLogo from "@/assests/certi-img/iso.webp";
import lmpcLogo from "@/assests/certi-img/lmpc.webp";

type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: any;
  cardBanner?: any;
};

function TabIcon() {
  return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="3" y="6" width="18" height="12" rx="6" fill="#ffffff" />
        <clipPath id="flagClip">
          <rect x="3" y="6" width="18" height="12" rx="6" />
        </clipPath>
        <g clipPath="url(#flagClip)">
          <rect x="3" y="6" width="18" height="4" fill="#FF9933" />
          <rect x="3" y="10" width="18" height="4" fill="#FFFFFF" />
          <rect x="3" y="14" width="18" height="4" fill="#138808" />
          <circle cx="12" cy="12" r="1.6" fill="#1A5FB4" />
          
        </g>
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="6"
          fill="none"
          stroke="rgba(10, 27, 43, 0.14)"
        />
      </svg>
  );
}

function PillIcon({ type }: { type: "guidance" | "support" | "speed" | "compliance" }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 16,
    height: 16,
    "aria-hidden": true,
    focusable: false,
  } as const;

  if (type === "guidance") {
    return (
      <svg {...common}>
        <path
          d="M12 2a7 7 0 0 0-4 12.74V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4.26A7 7 0 0 0 12 2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M10 22h4M10 17h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg {...common}>
        <path
          d="M4 12a8 8 0 1 1 16 0v5a3 3 0 0 1-3 3h-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 12v3M18 12v3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "speed") {
    return (
      <svg {...common}>
        <path
          d="M12 3a9 9 0 1 0 9 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 12l5-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M12 2 5 5v6c0 5 3.4 9.6 7 11 3.6-1.4 7-6 7-11V5l-7-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServicesContent() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
  

      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 110;
        window.scrollTo({ top, behavior: "smooth" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  const items = useMemo<ServiceItem[]>(() => {
    const base: ServiceItem[] = [
      {
        slug: SERVICE_PAGE_ANCHORS.bis,
        title: "BIS Certification",
        description:
          "End-to-end support for BIS registration, product testing, documentation, and approvals as per Indian standards.",
        href: SERVICE_ROUTES.bisCrs,
        icon: bisLogo,
        cardBanner: bisBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.wpc,
        title: "WPC Approval",
        description:
          "Approvals for wireless products including Wi-Fi, Bluetooth, RF, and other telecommunication devices.",
        href: SERVICE_ROUTES.wpc,
        icon: wpcLogo,
        cardBanner: wpcBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.tec,
        title: "TEC Certification",
        description:
          "Telecommunication product certification and compliance support as per TEC regulations.",
        href: SERVICE_ROUTES.tec,
        icon: tecLogo,
        cardBanner: tecBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.lmpc,
        title: "LMPC Registration",
        description:
          "Legal Metrology registration for importers and packaged commodities under LMPC regulations.",
        href: SERVICE_ROUTES.lmpc,
        icon: lmpcLogo,
        cardBanner: lmpcBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.bee,
        title: "BEE Registration",
        description:
          "Energy efficiency labeling and registration for appliances and electrical products under BEE.",
        href: SERVICE_ROUTES.bee,
        icon: beeLogo,
        cardBanner: beeBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.epr,
        title: "EPR Registration",
        description:
          "EPR authorization for Plastic, E-waste, Battery, and other waste categories under CPCB guidelines.",
        href: SERVICE_ROUTES.epr,
        icon: eprIcon,
        cardBanner: eprBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.ce,
        title: "CE Certification",
        description:
          "CE marking support for products entering the European market as per EU directives.",
        href: SERVICE_ROUTES.ce,
        icon: isoLogo,
        cardBanner: ceBannerImg,
      },
      {
        slug: SERVICE_PAGE_ANCHORS.testing,
        title: "Testing & Documentation",
        description:
          "Product testing, lab coordination, technical file preparation, and compliance documentation support.",
        href: SERVICE_ROUTES.nabl,
        icon: nablLogo,
        cardBanner: testingBannerImg,
      },
    ];

    return base;
  }, []);

  const faqs = useMemo(
    () => [
      {
        q: "What is BIS certification?",
        a: "BIS certification helps ensure your products meet Indian safety and quality standards. We support registration, testing, documentation, and approvals end to end.",
      },
      {
        q: "How long does the certification process take?",
        a: "Timelines vary by product category and documentation readiness. Our team shares a clear plan and helps you move faster through testing, filings and approvals.",
      },
      {
        q: "Can you help with both Domestic and International certifications?",
        a: "Yes. We support domestic certifications and also guide brands through international approvals and compliance requirements for global markets.",
      },
      {
        q: "What documents are required for certification?",
        a: "Typically you’ll need product details, test reports, technical documentation and manufacturer information. We provide a checklist based on the exact certification you need.",
      },
    ],
    []
  );

  return (
    <main className={`${styles.main} ${manrope.className}`}>
      <section className={styles.hero} aria-label="Services hero">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src={aboutHeroImg}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImg}
          />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.heroKicker}>Our services</p>
            <h1 className={`${styles.heroTitle} ${playfair.className}`}>
              <span className={styles.heroTitleLine}>Certification &amp; Compliance</span>
              <br />
              Solutions
            </h1>
            <p className={styles.heroText}>
              We provide end-to-end support for mandatory certifications, approvals and
              registrations for your products in the Indian market.
            </p>

            <div className={styles.heroScopeBadge}>
              <span className={styles.flag} aria-hidden="true">
                <TabIcon />
              </span>
              Domestic certifications
            </div>
          </div>
        </div>
      </section>

      <section
        id={SERVICE_PAGE_ANCHORS.list}
        className={styles.section}
        aria-label="Services list"
      >
        <div className={styles.sectionHead}>
          <div className={styles.sectionTitleRow}>
            <div className={styles.sectionTitleLeft}>
              <span className={styles.sectionFlag} aria-hidden="true">
                <TabIcon />
              </span>
              <div className={styles.sectionTitleBlock}>
                <h2 className={`${styles.sectionTitle} ${playfair.className}`}>
                  Domestic certifications
                </h2>
                <div className={styles.sectionTitleUnderline} aria-hidden="true" />
                <p className={styles.sectionSubtitle}>
                  Mandatory certifications, registrations and approvals for the Indian market.
                </p>
              </div>
            </div>

            <div className={styles.pills} aria-label="Highlights">
              <div className={styles.pill}>
                <PillIcon type="guidance" />
                Expert Guidance
              </div>
              <div className={styles.pill}>
                <PillIcon type="support" />
                End-to-End Support
              </div>
              <div className={styles.pill}>
                <PillIcon type="speed" />
                Faster Approvals
              </div>
              <div className={styles.pill}>
                <PillIcon type="compliance" />
                Regulatory Compliance
              </div>
            </div>
          </div>
        </div>

        <div className={styles.grid} role="list">
          {items.map((s) => (
            <article className={styles.card} id={s.slug} key={s.slug} role="listitem">
              <Link
                href={s.href}
                className={styles.cardOverlay}
                aria-label={`Learn more about ${s.title}`}
              />
              {s.cardBanner ? (
                <div className={styles.cardBanner} aria-hidden="true">
                  <Image
                    src={s.cardBanner}
                    alt=""
                    fill
                    sizes="(max-width: 520px) 92vw, (max-width: 980px) 46vw, 280px"
                    className={styles.cardBannerImg}
                  />
                </div>
              ) : null}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <div className={styles.cardIconWrap} aria-hidden="true">
                    <Image
                      src={s.icon}
                      alt=""
                      fill
                      sizes="40px"
                      className={styles.cardIcon}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                </div>
                <p className={styles.cardDesc}>{s.description}</p>
                <Link href={s.href} className={styles.cardLink}>
                  Learn More <span className={styles.cardLinkArrow} aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.helpBar} role="region" aria-label="Help choosing">
          <div className={styles.helpLeft}>
            <div className={styles.helpIcon} aria-hidden="true">
              ?
            </div>
            <div>
              <div className={styles.helpTitle}>Need help choosing the right certification?</div>
              <div className={styles.helpText}>
                Our experts will guide you to the correct certification for your product.
              </div>
            </div>
          </div>

          <a className={styles.helpBtn} href="/contact">
            Talk to an Expert <span aria-hidden="true">→</span>
          </a>
        </div>

        <section className={styles.faqWrap} aria-label="Frequently asked questions">
          <div className={styles.faqCard}>
            <div className={styles.faqGrid}>
              <div className={styles.faqLeft}>
                <p className={styles.faqKicker}>FAQ</p>
                <h2 className={`${styles.faqTitle} ${playfair.className}`}>
                  Frequently Asked Questions
                </h2>
                <div className={styles.faqUnderline} aria-hidden="true" />
                <p className={styles.faqSub}>
                  Find quick answers to the most common queries about our certification and
                  compliance services.
                </p>

                <div className={styles.faqList} role="list">
                  {faqs.map((f, idx) => {
                    const open = idx === openFaq;
                    return (
                      <div
                        key={f.q}
                        className={open ? styles.faqItemOpen : styles.faqItem}
                        role="listitem"
                      >
                        <button
                          type="button"
                          className={styles.faqQ}
                          onClick={() => setOpenFaq((v) => (v === idx ? -1 : idx))}
                          aria-expanded={open}
                        >
                          <span
                            className={open ? styles.faqIconOpen : styles.faqIcon}
                            aria-hidden="true"
                          >
                            {idx + 1}
                          </span>
                          <span className={styles.faqQText}>{f.q}</span>
                          <span className={open ? styles.faqChevronOpen : styles.faqChevron} aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18">
                              <path
                                d="m7 10 5 5 5-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </button>
                        {open ? <div className={styles.faqA}>{f.a}</div> : null}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.faqRight}>
                <div className={styles.faqArtWrap} aria-hidden="true">
                  <Image
                    src={faqArt}
                    alt=""
                    className={styles.faqArt}
                    sizes="(max-width: 980px) 92vw, 520px"
                  />
                </div>

                <div className={styles.faqSideCard}>
                  <div className={styles.faqSideTop}>
                    <div className={styles.faqShield} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path
                          d="M12 2 5 5v6c0 5 3.4 9.6 7 11 3.6-1.4 7-6 7-11V5l-7-3Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m9 12 2 2 4-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.faqSideTitle}>Trusted. Certified. Compliant.</div>
                      <div className={styles.faqSideText}>
                        We ensure your products meet all regulatory requirements seamlessly.
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

