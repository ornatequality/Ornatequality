"use client";

import { ServiceCallbackForm } from "@/components/forms/ServiceCallbackForm";

import React, { useCallback, useEffect, useState } from "react";
import { useActiveTocScroll } from "@/hooks/useActiveTocScroll";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import styles from "@/styles/bisCrsRegistration.module.css";
import buildingImage from "@/assests/services/certificate.webp";
import {
  WHY_ORNATE_ITEMS,
  LATEST_NOTIFICATIONS,
  OUR_SERVICES_LINKS,
} from "../../bis-crs-registration/data/bisCrsContent";
import {
  EPR_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  BANNER_SERVICE_NOTE,
  KEY_HIGHLIGHTS,
  INTRO_PARAGRAPHS,
  INTRO_IMPORTANT_NOTE,
  WHAT_IS_PARAGRAPHS,
  ESTABLISHES_TABLE,
  PURPOSE_OBJECTIVES,
  WHAT_IS_ALT_NAMES,
  WHAT_IS_COMPLIANCE_NOTE,
  WHY_MATTERS_INTRO,
  WHY_MATTERS_ITEMS,
  WHO_NEEDS_INTRO,
  OBLIGATED_ROLES,
  OBLIGATED_ROLES_NOTE,
  BUSINESS_TYPES,
  WHO_NEEDS_CLOSING,
  WASTE_STREAMS_INTRO,
  WASTE_STREAMS_ROWS,
  WASTE_STREAM_DETAILS,
  PRODUCTS_COVERED_INTRO,
  PRODUCTS_EWASTE_INTRO,
  PRODUCTS_BATTERY_INTRO,
  PRODUCTS_BATTERY_NOTE,
  PRODUCTS_PLASTIC_INTRO,
  PRODUCTS_PLASTIC_NOTE,
  PRODUCTS_TYRE_INTRO,
  PRODUCTS_USED_OIL_INTRO,
  PRODUCTS_USED_OIL_NOTE,
  BENEFITS_ITEMS,
  SERVICE_INCLUDES,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_QUESTIONS,
  ELIGIBILITY_WHO_QUALIFIES,
  ELIGIBILITY_WHO_NOT,
  ELIGIBILITY_IMPORTANT_NOTES,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  TIMELINE_INTRO,
  TIMELINE_ROWS,
  TIMELINE_PARAGRAPHS,
  COST_INTRO,
  COST_FACTORS,
  COST_HOW_WE_QUOTE,
  VALIDITY_PARAGRAPHS,
  RENEWAL_INTRO,
  RENEWAL_WHEN,
  RENEWAL_PROCESS_STEPS,
  RENEWAL_PRECAUTIONS,
  RENEWAL_CLOSING,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_NOT_PROMISE,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_ROWS,
  MISTAKES_ROWS,
  EXPERT_TIPS,
  STREAM_COMPARISON_INTRO,
  STREAM_COMPARISON_ROWS,
  STREAM_COMPARISON_NOTE,
  FAQ_ITEMS,
  GET_STARTED_PARAGRAPHS,
  GET_STARTED_TAGLINE,
  INTERNAL_LINK_GROUPS,
  type TableRow,
} from "../data/eprContent";
import {
  EWASTE_PRODUCTS,
  BATTERY_PRODUCTS,
  PLASTIC_PACKAGING_PRODUCTS,
  TYRE_PRODUCTS,
  USED_OIL_PRODUCTS,
} from "../data/eprProductTables";

const EPR_PAGE_PATH = "/services/epr-registration";

type DataTableColumn = {
  key: string;
  header: string;
  scope?: "col" | "row";
};

type DataTableProps = {
  columns: DataTableColumn[];
  rows: TableRow[];
  getRowKey: (row: TableRow, index: number) => string;
};

function DataTable({ columns, rows, getRowKey }: DataTableProps) {
  return (
    <div className={styles.tableScroll}>
      <table className={styles.dataTable}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={getRowKey(row, index)}>
              {columns.map((col) => {
                const value = row[col.key] ?? "";
                if (col.scope === "row") {
                  return (
                    <th key={col.key} scope="row">
                      {value}
                    </th>
                  );
                }
                return <td key={col.key}>{value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const PRODUCT_TABLE_COLUMNS: DataTableColumn[] = [
  { key: "srNo", header: "Sr. No." },
  { key: "product", header: "Product", scope: "row" },
  { key: "category", header: "Category" },
  { key: "eprCode", header: "EPR Code" },
  { key: "examples", header: "Examples" },
];

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="epr"
      defaultService="EPR Registration"
      serviceOptions={[
        "EPR Registration",
        "BIS CRS Registration",
        "LMPC Registration",
        "BEE Certification",
        "Other",
      ]}
      successText="Our EPR compliance expert will contact you within one business day."
    />
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={styles.faqItem}>
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.q}
              <span
                className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            {isOpen && <p className={styles.faqAnswer}>{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function EprPageContent() {
  const [activeId, setActiveId] = useState(EPR_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = EPR_TOC.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.page} ${inter.className}`}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Table of contents">
            <div className={styles.tocHead}>Table of Contents</div>
            <ol ref={tocListRef} className={styles.tocList}>
              {EPR_TOC.map((item, i) => (
                <li key={item.id} className={styles.tocItem}>
                  <button
                    type="button"
                    data-toc-id={item.id}
                    className={`${styles.tocLink} ${activeId === item.id ? styles.tocLinkActive : ""}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <span className={styles.tocNum}>{i + 1}.</span>
                    {item.label}
                    <span className={styles.tocArrow} aria-hidden="true">
                      ›
                    </span>
                  </button>
                </li>
              ))}
            </ol>
          </nav>

          <article className={styles.main}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>{BANNER_TITLE}</h2>
              <p className={`${styles.heroLead} ${styles.textJustify}`}>{BANNER_SUBTITLE}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_DESCRIPTION}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_SERVICE_NOTE}</p>
              <div className={styles.highlightsBox}>
                <div className={styles.highlightsTitle}>Key Highlights</div>
                <ul className={styles.bulletList}>
                  {KEY_HIGHLIGHTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to an EPR expert →
                </Link>
                <a href="tel:+919266877738" className={styles.ctaBtnSecondary}>
                  📞 Expert Consultation
                </a>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="EPR registration and CPCB environmental compliance support"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                    {paragraph}
                  </p>
                ))}
                <div className={styles.noteBox}>{INTRO_IMPORTANT_NOTE}</div>
              </div>
            </section>

            <section id="what-is-epr" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is EPR Registration?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <DataTable
                columns={[
                  { key: "establishes", header: "What Registration Establishes", scope: "row" },
                  { key: "whyItMatters", header: "Why It Matters" },
                ]}
                rows={ESTABLISHES_TABLE}
                getRowKey={(row) => row.establishes}
              />
              <h3 className={styles.subsectionTitle}>Purpose and Objectives</h3>
              <ul className={styles.bulletList}>
                {PURPOSE_OBJECTIVES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_ALT_NAMES}</p>
              <div className={styles.noteBox}>{WHAT_IS_COMPLIANCE_NOTE}</div>
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why This Compliance Matters for Your Business</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_MATTERS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHY_MATTERS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs EPR Registration?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "role", header: "Role", scope: "row" },
                  { key: "whoCovers", header: "Who It Covers" },
                  { key: "obligation", header: "Obligation" },
                ]}
                rows={OBLIGATED_ROLES}
                getRowKey={(row) => row.role}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OBLIGATED_ROLES_NOTE}</p>
              <h3 className={styles.subsectionTitle}>Business Types Commonly Obligated</h3>
              <ul className={styles.bulletList}>
                {BUSINESS_TYPES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="waste-streams" className={styles.section}>
              <h2 className={styles.sectionTitle}>Waste Streams Covered Under EPR Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WASTE_STREAMS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "wasteStream", header: "Waste Stream", scope: "row" },
                  { key: "governingRules", header: "Governing Rules" },
                  { key: "whoMustRegister", header: "Who Must Register" },
                  { key: "ourService", header: "Our Service" },
                ]}
                rows={WASTE_STREAMS_ROWS}
                getRowKey={(row) => row.wasteStream}
              />
              <ul className={styles.bulletList}>
                {WASTE_STREAM_DETAILS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products Covered Under EPR Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_COVERED_INTRO}</p>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>E-Waste Products</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_EWASTE_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={EWASTE_PRODUCTS}
                  getRowKey={(row) => `${row.srNo}-${row.product}`}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Battery Waste Products</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_BATTERY_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={BATTERY_PRODUCTS}
                  getRowKey={(row) => `${row.srNo}-${row.product}`}
                />
                <div className={styles.noteBox}>{PRODUCTS_BATTERY_NOTE}</div>
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Plastic Packaging Products</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_PLASTIC_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={PLASTIC_PACKAGING_PRODUCTS}
                  getRowKey={(row) => `${row.srNo}-${row.product}`}
                />
                <div className={styles.noteBox}>{PRODUCTS_PLASTIC_NOTE}</div>
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Waste Tyre Products</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_TYRE_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={TYRE_PRODUCTS}
                  getRowKey={(row) => `${row.srNo}-${row.product}`}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Used Oil Products</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_USED_OIL_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={USED_OIL_PRODUCTS}
                  getRowKey={(row) => `${row.srNo}-${row.product}`}
                />
                <div className={styles.noteBox}>{PRODUCTS_USED_OIL_NOTE}</div>
              </div>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits for Your Business</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="service-includes" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Our Service Includes</h2>
              <ul className={styles.bulletList}>
                {SERVICE_INCLUDES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for EPR Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_QUESTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>Who Typically Qualifies</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO_QUALIFIES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>Who Typically Does Not Need to Register</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO_NOT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>Important Notes</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_IMPORTANT_NOTES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for EPR Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory" },
                  { key: "notes", header: "Notes" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step EPR Registration Process</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_INTRO}</p>
              <div className={styles.processFlow} role="list">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className={styles.processStep} role="listitem">
                    <div className={styles.processCircle} style={{ background: step.color }}>
                      {step.step}
                    </div>
                    <span className={styles.processLabel}>{step.label}</span>
                  </div>
                ))}
              </div>
              {PROCESS_STEPS.map((step) => (
                <div key={step.title}>
                  <h3 className={styles.subsectionTitle}>{step.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{step.text}</p>
                </div>
              ))}
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "stage", header: "Stage", scope: "row" },
                  { key: "duration", header: "What Drives Duration" },
                ]}
                rows={TIMELINE_ROWS}
                getRowKey={(row) => row.stage}
              />
              {TIMELINE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Cost</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <h3 className={styles.subsectionTitle}>Factors That Affect Cost</h3>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_HOW_WE_QUOTE}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Validity</h2>
              {VALIDITY_PARAGRAPHS.slice(0, 2).map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>Two points worth understanding</h3>
              <ul className={styles.bulletList}>
                {VALIDITY_PARAGRAPHS.slice(2).map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Renewal</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <h3 className={styles.subsectionTitle}>When to Renew</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_WHEN}</p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_PROCESS_STEPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>Renewal Precautions</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_PRECAUTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges Businesses Face</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HOW_WE_HELP_NOT_PROMISE}</div>
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry", scope: "row" },
                  { key: "obligation", header: "Typical EPR Obligation" },
                ]}
                rows={INDUSTRIES_ROWS}
                getRowKey={(row) => row.industry}
              />
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes and How to Avoid Them</h2>
              <DataTable
                columns={[
                  { key: "mistake", header: "Mistake", scope: "row" },
                  { key: "why", header: "Why It Happens" },
                  { key: "avoid", header: "How to Avoid" },
                ]}
                rows={MISTAKES_ROWS}
                getRowKey={(row) => row.mistake}
              />
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for a Smooth Application</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="stream-comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>Comparing the EPR Waste Streams</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STREAM_COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "aspect", header: "Aspect", scope: "row" },
                  { key: "eWaste", header: "E-Waste" },
                  { key: "plastic", header: "Plastic Packaging" },
                  { key: "battery", header: "Battery Waste" },
                ]}
                rows={STREAM_COMPARISON_ROWS}
                getRowKey={(row) => row.aspect}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STREAM_COMPARISON_NOTE}</p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>Start Your EPR Registration</h2>
              {GET_STARTED_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GET_STARTED_TAGLINE}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to an EPR expert →
                </Link>
                <a href="tel:+919266877738" className={styles.ctaBtnSecondary}>
                  📞 Expert Consultation
                </a>
              </div>
            </section>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Internal Link Suggestions</h2>
              {INTERNAL_LINK_GROUPS.map((group) => (
                <div key={group.title} className={styles.internalLinkGroup}>
                  <h3 className={styles.internalLinkGroupTitle}>{group.title}</h3>
                  <ul className={styles.internalLinkList}>
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href}>{item.label}</Link>
                        {item.description ? (
                          <>
                            {" "}
                            <span className={styles.internalLinkDesc}>— {item.description}</span>
                          </>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <aside className={styles.sidebar} aria-label="Sidebar">
            <div className={styles.widget}>
              <div className={styles.widgetHead}>Why Ornate?</div>
              <div className={styles.widgetBody}>
                <ul className={styles.checkList}>
                  {WHY_ORNATE_ITEMS.slice(0, 5).map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <span className={styles.checkIcon} aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.widget}>
              <div className={styles.widgetHead}>Free Call Back</div>
              <div className={styles.widgetBody}>
                <CallbackForm />
              </div>
            </div>

            <div className={styles.widget}>
              <div className={styles.widgetHead}>Latest Notifications</div>
              <div className={styles.widgetBody}>
                <ul className={styles.notifList}>
                  {LATEST_NOTIFICATIONS.map((notif) => (
                    <li key={notif.title} className={styles.notifItem}>
                      <span className={styles.notifDate}>{notif.date}</span>
                      <span className={styles.notifTitle}>{notif.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.widget}>
              <div className={styles.widgetHead}>Our Services</div>
              <div className={styles.widgetBody}>
                <ul className={styles.servicesLinks}>
                  {OUR_SERVICES_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`${styles.servicesLink} ${
                          link.href === EPR_PAGE_PATH ? styles.servicesLinkActive : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
