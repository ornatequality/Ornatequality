"use client";

import React, { useId, useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";
import { manrope, playfair } from "@/lib/fonts";
import styles from "../../styles/services.module.css";

type ServiceItem = {
  badge: string;
  tag: string;
  title: string;
  description: string;
  href: string;
};

type ServiceGroup = {
  id: string;
  label: string;
  items: ServiceItem[];
};

const GROUPS: ServiceGroup[] = [
  {
    id: "certification",
    label: "Certification",
    items: [
      {
        badge: "BIS",
        tag: "BIS",
        title: "BIS Certification",
        description: "Guide to the ISI Mark, CRS and FMCS schemes.",
        href: SERVICE_ROUTES.bisCertification,
      },
      {
        badge: "ISI",
        tag: "BIS",
        title: "ISI Mark Certification",
        description: "Indian manufacturers of products under a BIS QCO.",
        href: SERVICE_ROUTES.bisIsi,
      },
      {
        badge: "FMCS",
        tag: "BIS",
        title: "FMCS Certification",
        description: "Foreign manufacturers selling ISI-mark products in India.",
        href: SERVICE_ROUTES.bisFmcs,
      },
      {
        badge: "ISO",
        tag: "Certification body",
        title: "ISO Certification",
        description: "Businesses that need a certified management system.",
        href: SERVICE_ROUTES.iso,
      },
      {
        badge: "CE",
        tag: "EU directives",
        title: "CE Certification",
        description: "Indian exporters selling into the EU market.",
        href: SERVICE_ROUTES.ce,
      },
      {
        badge: "PESO",
        tag: "PESO",
        title: "CCOE / PESO Certification",
        description: "Handling of hazardous and explosive materials.",
        href: SERVICE_ROUTES.pesoCcoe,
      },
      {
        badge: "MD",
        tag: "CDSCO",
        title: "CDSCO Registration",
        description: "Medical device and drug importers and makers.",
        href: SERVICE_ROUTES.cdsco,
      },
    ],
  },
  {
    id: "registration",
    label: "Registration",
    items: [
      {
        badge: "CRS",
        tag: "BIS",
        title: "BIS CRS Registration",
        description: "Electronics, IT and solar products under the CRS scheme.",
        href: SERVICE_ROUTES.bisCrs,
      },
      {
        badge: "BEE",
        tag: "Energy label",
        title: "BEE Registration",
        description: "Star labelling for appliances and electrical products.",
        href: SERVICE_ROUTES.bee,
      },
      {
        badge: "EPR",
        tag: "CPCB",
        title: "EPR Registration",
        description: "Producers and importers of plastic, e-waste and batteries.",
        href: SERVICE_ROUTES.epr,
      },
      {
        badge: "GeM",
        tag: "Govt. tenders",
        title: "GeM Registration",
        description: "Sellers listing products on the Government e-Marketplace.",
        href: SERVICE_ROUTES.gem,
      },
      {
        badge: "TM",
        tag: "IP India",
        title: "Trademark Registration",
        description: "Brands protecting their name and logo in India.",
        href: SERVICE_ROUTES.trademark,
      },
      {
        badge: "IEC",
        tag: "DGFT",
        title: "IEC Registration",
        description: "Businesses starting import or export from India.",
        href: SERVICE_ROUTES.iec,
      },
      {
        badge: "LM",
        tag: "Legal Metrology",
        title: "LMPC Registration",
        description: "Importers and packers of pre-packaged commodities.",
        href: SERVICE_ROUTES.lmpc,
      },
    ],
  },
  {
    id: "inspection",
    label: "Inspection & Quality",
    items: [
      {
        badge: "PPI",
        tag: "Pre-production",
        title: "Pre-Production Inspection",
        description: "Check materials and samples before production starts.",
        href: SERVICE_ROUTES.ppi,
      },
      {
        badge: "DPI",
        tag: "In-line",
        title: "During Production Inspection",
        description: "Catch defects on the line while goods are being made.",
        href: SERVICE_ROUTES.dpi,
      },
      {
        badge: "FRI",
        tag: "Pre-shipment",
        title: "Final Random Inspection",
        description: "AQL sampling of finished goods before dispatch.",
        href: SERVICE_ROUTES.fri,
      },
      {
        badge: "CLI",
        tag: "Dispatch",
        title: "Container Loading Inspection",
        description: "Quantity, packing and seal checks at loading.",
        href: SERVICE_ROUTES.cli,
      },
      {
        badge: "FPI",
        tag: "Factory audit",
        title: "Factory & Process Inspection",
        description: "Assess factory capability and process controls.",
        href: SERVICE_ROUTES.fac,
      },
      {
        badge: "PI",
        tag: "Quality check",
        title: "Product Inspection",
        description: "Function, safety and finish checks on your products.",
        href: SERVICE_ROUTES.prd,
      },
      {
        badge: "TPI",
        tag: "Independent",
        title: "Third-Party Inspection",
        description: "Unbiased inspection reports for buyers and sellers.",
        href: SERVICE_ROUTES.tpi,
      },
    ],
  },
  {
    id: "other",
    label: "Other Services",
    items: [
      {
        badge: "FSSAI",
        tag: "Food safety",
        title: "FSSAI Registration",
        description: "Food businesses that need an FSSAI licence.",
        href: SERVICE_ROUTES.fssai,
      },
      {
        badge: "WPC",
        tag: "DoT",
        title: "WPC ETA Approval",
        description: "Wi-Fi, Bluetooth and RF products sold in India.",
        href: SERVICE_ROUTES.wpc,
      },
      {
        badge: "TEC",
        tag: "MTCTE",
        title: "TEC Certification",
        description: "Telecom equipment under TEC regulations.",
        href: SERVICE_ROUTES.tec,
      },
      {
        badge: "RoHS",
        tag: "Hazardous substances",
        title: "RoHS Compliance",
        description: "Electronics makers limiting restricted substances.",
        href: SERVICE_ROUTES.rohs,
      },
      {
        badge: "LAB",
        tag: "NABL",
        title: "NABL Lab Testing",
        description: "Product testing and lab coordination for approvals.",
        href: SERVICE_ROUTES.nabl,
      },
      {
        badge: "AUD",
        tag: "Audit",
        title: "Audit Services",
        description: "Compliance and supplier audits across your operations.",
        href: SERVICE_ROUTES.audit,
      },
      {
        badge: "DOC",
        tag: "Documentation",
        title: "Technical Documentation",
        description: "Technical files and compliance documents, prepared for you.",
        href: SERVICE_ROUTES.technical,
      },
    ],
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(GROUPS[0].id);
  const tabsId = useId();

  const totalServices = useMemo(() => GROUPS.reduce((sum, group) => sum + group.items.length, 0), []);
  const activeGroup = GROUPS.find((group) => group.id === activeId) ?? GROUPS[0];

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const nextGroup = GROUPS[(index + step + GROUPS.length) % GROUPS.length];
    setActiveId(nextGroup.id);
    document.getElementById(`${tabsId}-tab-${nextGroup.id}`)?.focus();
  };

  return (
    <section className={`${styles.services} ${manrope.className}`} aria-label="Our services">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <p className={styles.eyebrow}>Our services</p>
            <h2 className={`${styles.heading} ${playfair.className}`}>
              {totalServices} compliance services.
              <br />
              One accountable team.
            </h2>
          </div>
          <Link className={styles.viewAll} href="/services">
            View all services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Service categories">
          {GROUPS.map((group, index) => {
            const isActive = group.id === activeGroup.id;
            return (
              <button
                key={group.id}
                id={`${tabsId}-tab-${group.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tabsId}-panel`}
                tabIndex={isActive ? 0 : -1}
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setActiveId(group.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                {group.label}
                {isActive && <span className={styles.tabCount}> · {group.items.length}</span>}
              </button>
            );
          })}
        </div>

        <div
          id={`${tabsId}-panel`}
          className={styles.grid}
          role="tabpanel"
          aria-labelledby={`${tabsId}-tab-${activeGroup.id}`}
        >
          {activeGroup.items.map((item) => (
            <article key={item.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.badge} aria-hidden="true">
                  {item.badge}
                </span>
                <span className={styles.tag}>{item.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <Link className={styles.cardLink} href={item.href}>
                View service <span aria-hidden="true">→</span>
                <span className={styles.srOnly}> for {item.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
