"use client";

import React, { useEffect, useState } from "react";
import { SERVICE_PAGE_ANCHORS, SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/servicesPage.module.css";
import heroImg from "@/assests/popup-building.webp";

import bisLogo from "@/assests/certi-img/BIS.webp";
import isiLogo from "@/assests/certi-img/isi.webp";
import isoLogo from "@/assests/certi-img/iso.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import eprLogo from "@/assests/certi-img/epr-icon.webp";
import lmpcLogo from "@/assests/certi-img/lmpc.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import nablLogo from "@/assests/certi-img/nabl.webp";
import trademarkLogo from "@/assests/certi-img/trademark.webp";

import ceImg from "@/assests/services/CE certification.png";
import fmcsImg from "@/assests/services/fmcs.webp";
import pesoImg from "@/assests/services/pesoccoe.webp";
import cdscoImg from "@/assests/services/cdsco.webp";
import gemImg from "@/assests/services/GEM regestration.png";
import iecImg from "@/assests/services/iec.webp";
import ppiImg from "@/assests/services/PPI.png";
import dpiImg from "@/assests/services/DPI.png";
import friImg from "@/assests/services/fri.png";
import cliImg from "@/assests/services/cli-banner.webp";
import facImg from "@/assests/services/FPI.png";
import piImg from "@/assests/services/PI.png";
import tpiImg from "@/assests/services/third party.png";
import fssaiImg from "@/assests/services/Fassi regetration.png";
import rohsImg from "@/assests/services/ROHS regestration.png";
import auditImg from "@/assests/services/Audit services.png";
import techImg from "@/assests/services/TECHNICAL DOCUMENTATION & COMPLIANCE SUPPORT”.png";

type ServiceCard = {
  id?: string;
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  includes: string[];
};

type ServiceGroup = {
  id: string;
  title: string;
  subtitle: string;
  icon: "cert" | "reg" | "insp" | "other";
  items: ServiceCard[];
};

const ICON_BGS = ["#ece9fb", "#fde8d8", "#f3edd4", "#e4f3ea", "#e8f1fb", "#fde8ee", "#eef6ff"];

const GROUPS: ServiceGroup[] = [
  {
    id: "certification",
    title: "Certification",
    subtitle: "Get your products and processes certified as per national and international standards.",
    icon: "cert",
    items: [
      {
        id: SERVICE_PAGE_ANCHORS.bis,
        title: "BIS Certification",
        description:
          "End-to-end support for BIS registration, product testing, documentation, and approvals as per Indian standards.",
        href: SERVICE_ROUTES.bisCertification,
        image: bisLogo,
        includes: ["Product testing support", "Documentation & filings", "Approvals as per Indian standards"],
      },
      {
        title: "ISI Mark Certification",
        description: "Get ISI Mark for your products as per Indian Standards.",
        href: SERVICE_ROUTES.bisIsi,
        image: isiLogo,
        includes: ["Product testing support", "Factory inspection readiness", "ISI licence application"],
      },
      {
        title: "ISO Certification",
        description: "International Organization for Standardization",
        href: SERVICE_ROUTES.iso,
        image: isoLogo,
        includes: ["ISO gap assessment", "Documentation support", "Certification coordination"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.ce,
        title: "CE Certification",
        description: "CE marking support for products entering the European market as per EU directives.",
        href: SERVICE_ROUTES.ce,
        image: ceImg,
        includes: ["EU directive mapping", "Technical file support", "CE marking guidance"],
      },
      {
        title: "FMCS Certification",
        description: "Foreign Manufacturers Certification Scheme",
        href: SERVICE_ROUTES.bisFmcs,
        image: fmcsImg,
        includes: ["FMCS application support", "Factory inspection readiness", "BIS licence coordination"],
      },
      {
        title: "PESO Flame Proof Approval",
        description: "PESO flame proof approval and ex-proof equipment certification",
        href: SERVICE_ROUTES.pesoCcoe,
        image: pesoImg,
        includes: ["Flame proof approval", "Ex-proof certification", "Zone classification guidance"],
      },
      {
        title: "CDSCO Certification",
        description: "Central Drugs Standard Control Organization",
        href: SERVICE_ROUTES.cdsco,
        image: cdscoImg,
        includes: ["CDSCO registration", "Device / drug documentation", "Application filing support"],
      },
    ],
  },
  {
    id: "registration",
    title: "Registration",
    subtitle: "Register your products and operations for market access and ongoing compliance.",
    icon: "reg",
    items: [
      {
        title: "BIS CRS Registration",
        description: "Complete support for BIS CRS certification for electronic products.",
        href: SERVICE_ROUTES.bisCrs,
        image: bisLogo,
        includes: ["Electronics & IT products", "Solar photovoltaic products", "CRS portal filing"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.bee,
        title: "BEE Registration",
        description: "Energy efficiency labeling and registration for appliances and electrical products under BEE.",
        href: SERVICE_ROUTES.bee,
        image: beeLogo,
        includes: ["Energy labelling support", "Appliance registration", "Star rating documentation"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.epr,
        title: "EPR Registration",
        description:
          "EPR authorization for Plastic, E-waste, Battery, and other waste categories under CPCB guidelines.",
        href: SERVICE_ROUTES.epr,
        image: eprLogo,
        includes: ["Plastic packaging", "E-waste", "Battery waste"],
      },
      {
        title: "GeM Registration",
        description: "Government e-Marketplace",
        href: SERVICE_ROUTES.gem,
        image: gemImg,
        includes: ["Vendor registration", "Catalogue listing", "Bid-readiness support"],
      },
      {
        title: "Trademark Registration",
        description: "Trademark Registration",
        href: SERVICE_ROUTES.trademark,
        image: trademarkLogo,
        includes: ["Brand name filing", "Class selection support", "Registration follow-up"],
      },
      {
        title: "IEC Registration",
        description: "Import Export Code",
        href: SERVICE_ROUTES.iec,
        image: iecImg,
        includes: ["IEC application", "DGFT documentation", "Import-export code support"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.lmpc,
        title: "LMPC Registration",
        description: "Legal Metrology registration for importers and packaged commodities under LMPC regulations.",
        href: SERVICE_ROUTES.lmpc,
        image: lmpcLogo,
        includes: ["Importer registration", "Packaged commodity labelling", "Legal Metrology filings"],
      },
    ],
  },
  {
    id: "inspection",
    title: "Inspection & Quality",
    subtitle: "Independent quality, safety and process inspections across production and dispatch.",
    icon: "insp",
    items: [
      {
        title: "Pre-Production Inspection",
        description: "Pre-Production Inspection (PPI)",
        href: SERVICE_ROUTES.ppi,
        image: ppiImg,
        includes: ["Sample verification", "Factory readiness check", "Pre-production reporting"],
      },
      {
        title: "During Production Inspection",
        description: "During Production Inspection (DPI)",
        href: SERVICE_ROUTES.dpi,
        image: dpiImg,
        includes: ["In-process quality checks", "Line inspection", "Defect reporting"],
      },
      {
        title: "Final Random Inspection",
        description: "Final Random Inspection (FRI)",
        href: SERVICE_ROUTES.fri,
        image: friImg,
        includes: ["AQL sampling", "Final quality check", "Shipment release support"],
      },
      {
        title: "Container Loading Inspection",
        description: "Container Loading Inspection (CLI)",
        href: SERVICE_ROUTES.cli,
        image: cliImg,
        includes: ["Loading supervision", "Quantity verification", "Seal & packing check"],
      },
      {
        title: "Factory & Process Inspection",
        description: "Factory & Process Inspection",
        href: SERVICE_ROUTES.fac,
        image: facImg,
        includes: ["Factory assessment", "Process audit", "Compliance reporting"],
      },
      {
        title: "Product Inspection",
        description: "Product Inspection",
        href: SERVICE_ROUTES.prd,
        image: piImg,
        includes: ["Product quality check", "Specification verification", "Inspection report"],
      },
      {
        title: "Third-Party Inspection",
        description: "Third-Party Inspection (TPI)",
        href: SERVICE_ROUTES.tpi,
        image: tpiImg,
        includes: ["Independent inspection", "Quality assurance", "Third-party reporting"],
      },
    ],
  },
  {
    id: "other",
    title: "Other Compliance & Support",
    subtitle: "Additional compliance, testing, audit and documentation support.",
    icon: "other",
    items: [
      {
        title: "FSSAI Registration",
        description: "Food Safety and Standards Authority of India",
        href: SERVICE_ROUTES.fssai,
        image: fssaiImg,
        includes: ["FSSAI licence filing", "Food business documentation", "Registration follow-up"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.wpc,
        title: "WPC ETA Approval",
        description: "Approvals for wireless products including Wi-Fi, Bluetooth, RF, and other telecommunication devices.",
        href: SERVICE_ROUTES.wpc,
        image: wpcLogo,
        includes: ["Equipment Type Approval", "Wireless device filing", "Import clearance support"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.tec,
        title: "TEC Certification",
        description: "Telecommunication product certification and compliance support as per TEC regulations.",
        href: SERVICE_ROUTES.tec,
        image: tecLogo,
        includes: ["TEC / MTCTE filing", "Telecom product testing", "Compliance documentation"],
      },
      {
        title: "RoHS Compliance",
        description: "RoHS Compliance",
        href: SERVICE_ROUTES.rohs,
        image: rohsImg,
        includes: ["Restricted substance checks", "Test coordination", "RoHS documentation"],
      },
      {
        id: SERVICE_PAGE_ANCHORS.testing,
        title: "NABL Lab Testing",
        description: "Product testing, lab coordination, technical file preparation, and compliance documentation support.",
        href: SERVICE_ROUTES.nabl,
        image: nablLogo,
        includes: ["NABL lab coordination", "Product testing", "Test report support"],
      },
      {
        title: "Audit Services",
        description: "Audit Services",
        href: SERVICE_ROUTES.audit,
        image: auditImg,
        includes: ["Compliance audits", "Process review", "Audit reporting"],
      },
      {
        title: "Technical Documentation",
        description: "Technical documentation and compliance support",
        href: SERVICE_ROUTES.technical,
        image: techImg,
        includes: ["Technical file preparation", "Compliance documents", "Dossier support"],
      },
    ],
  },
];

const STATS = [
  { value: "28+", label: "Comprehensive Services" },
  { value: "Pan India & Global", label: "Service Network" },
  { value: "5000+", label: "Certificates Issued" },
  { value: "15+ years", label: "Certified Experience" },
];

function GroupIcon({ type }: { type: ServiceGroup["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 18,
    height: 18,
    "aria-hidden": true,
  } as const;

  if (type === "cert") {
    return (
      <svg {...common}>
        <circle cx="12" cy="9" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.2 13.2 8 21l4-1.6L16 21l-1.2-7.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "reg") {
    return (
      <svg {...common}>
        <path d="M7 4h10a2 2 0 0 1 2 2v14l-3.2-1.6L12 20l-3.8-1.6L5 20V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 10h6M9 13h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "insp") {
    return (
      <svg {...common}>
        <rect x="6" y="3.5" width="12" height="17" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.8 12 2.1 2.1 4.3-4.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M8 4h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M16 4v4h4M8 13h8M8 16h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function StatIcon({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 20,
    height: 20,
    "aria-hidden": true,
  } as const;

  if (index === 0) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l2.5 1.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 12h16M12 4c2.4 2.6 3.6 5.3 3.6 8S14.4 17.4 12 20c-2.4-2.6-3.6-5.3-3.6-8S9.6 6.6 12 4Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <path d="M7 4h10a2 2 0 0 1 2 2v14l-7-2.4L5 20V6a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6.5 19a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

export function ServicesContent() {
  const [flippedHref, setFlippedHref] = useState<string | null>(null);

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

  return (
    <main className={`${styles.main} ${manrope.className}`}>
      <section className={styles.hero} aria-label="Services hero">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src={heroImg}
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
              End-to-End Compliance
              <br />
              Solutions
            </h1>
            <p className={styles.heroText}>
              From certification, testing and regulatory approvals, we provide complete compliance
              support for manufacturers, importers, exporters, startups and global enterprises.
            </p>
          </div>

          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeMark} aria-hidden="true">
              ●
            </span>
            Your Compliance Our Commitment
          </div>
        </div>
      </section>

      <div className={styles.statsWrap}>
        <div className={styles.heroStats} aria-label="Service highlights">
          {STATS.map((stat, index) => (
            <div key={stat.label} className={styles.heroStat}>
              <span className={styles.heroStatIcon}>
                <StatIcon index={index} />
              </span>
              <div>
                <div className={styles.heroStatValue}>{stat.value}</div>
                <div className={styles.heroStatLabel}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id={SERVICE_PAGE_ANCHORS.list} className={styles.groups}>
        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className={styles.group} aria-labelledby={`${group.id}-title`}>
            <div className={styles.groupHead}>
              <div className={styles.groupTitleWrap}>
                <span className={styles.groupIcon} aria-hidden="true">
                  <GroupIcon type={group.icon} />
                </span>
                <div>
                  <h2 id={`${group.id}-title`} className={`${styles.groupTitle} ${playfair.className}`}>
                    {group.title}
                  </h2>
                  <p className={styles.groupSubtitle}>{group.subtitle}</p>
                </div>
              </div>
              <a className={styles.viewAll} href={`#${group.id}`}>
                View all {group.items.length} services <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.grid} role="list">
              {group.items.map((item, index) => {
                const isFlipped = flippedHref === item.href;
                return (
                  <article
                    className={`${styles.card} ${isFlipped ? styles.cardFlipped : ""}`}
                    id={item.id}
                    key={item.href}
                    role="listitem"
                    onMouseEnter={() => setFlippedHref(item.href)}
                    onMouseLeave={() => setFlippedHref(null)}
                    onClick={(event) => {
                      const target = event.target as HTMLElement;
                      if (target.closest("a")) return;
                      setFlippedHref((current) => (current === item.href ? null : item.href));
                    }}
                  >
                    <div className={styles.flipper}>
                      <div className={`${styles.face} ${styles.faceFront}`}>
                        <div className={styles.frontMain}>
                          <div
                            className={styles.iconWrap}
                            style={{ background: ICON_BGS[index % ICON_BGS.length] }}
                          >
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              sizes="56px"
                              className={styles.serviceIconImg}
                            />
                          </div>
                          <h3 className={styles.cardTitle}>{item.title}</h3>
                        </div>
                        <Link
                          className={styles.exploreLink}
                          href={item.href}
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
                            aria-label={`Close ${item.title} details`}
                            onClick={(event) => {
                              event.stopPropagation();
                              setFlippedHref(null);
                            }}
                          >
                            <IconBack />
                          </button>
                          <div className={styles.backIcon}>
                            <Image src={item.image} alt="" fill sizes="28px" className={styles.backIconImg} />
                          </div>
                          <p className={styles.backDesc}>{item.description}</p>
                        </div>
                        <div className={styles.backBody}>
                          <p className={styles.includesLabel}>Services include:</p>
                          <ul className={styles.includesList}>
                            {item.includes.map((entry) => (
                              <li key={entry} className={styles.includesItem}>
                                <span className={styles.check} aria-hidden="true">
                                  <IconCheck />
                                </span>
                                {entry}
                              </li>
                            ))}
                          </ul>
                          <Link
                            className={styles.learnMore}
                            href={item.href}
                            onClick={(event) => event.stopPropagation()}
                          >
                            Learn More <span className={styles.learnMoreArrow} aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className={styles.bottomCta} aria-label="Get expert consultation">
        <div className={styles.bottomCtaInner}>
          <div className={styles.bottomCtaCopy}>
            <span className={styles.bottomCtaIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M12 2 5 5v6c0 5 3.4 9.6 7 11 3.6-1.4 7-6 7-11V5l-7-3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2.1 2.1 4.2-4.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h2 className={`${styles.bottomCtaTitle} ${playfair.className}`}>
              Your Compliance Partner for a Safer Tomorrow
            </h2>
          </div>
          <Link href="/contact" className={styles.bottomCtaBtn}>
            Get Expert Consultation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
