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
  AUDIT_CLASSIFICATION_ROWS,
  AUDIT_TOC,
  AUDIT_TYPES_INTRO,
  AUDIT_TYPES_ROWS,
  AUDIT_VS_INSPECTION_NOTE,
  AUDIT_VS_INSPECTION_ROWS,
  BANNER_DESCRIPTION,
  BANNER_SUBTITLE,
  BANNER_TITLE,
  BENEFITS_ITEMS,
  CHALLENGES_ITEMS,
  CHOOSE_PARTNER_PARAGRAPHS,
  COMPARISON_INTRO,
  COST_CLOSING,
  COST_FACTORS,
  COST_INTRO,
  CTA_BOOK,
  CTA_QUOTE,
  CTA_REQUEST,
  CTA_SEND,
  CTA_TALK,
  DOCUMENTS_CLOSING,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOMESTIC_AUDIT_PARAGRAPH,
  EHS_AUDIT_PARAGRAPH,
  ELIGIBILITY_BEFORE,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_NOTES,
  ELIGIBILITY_WHO,
  EXPERT_TIPS,
  FACTORY_AUDIT_PARAGRAPHS,
  FAQ_ITEMS,
  GET_STARTED_PARAGRAPHS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_NOTE,
  HOW_WE_HELP_START,
  INDUSTRIES_INTRO,
  INDUSTRIES_ROWS,
  INTERNATIONAL_AUDIT_PARAGRAPH,
  INTRO_PARAGRAPHS,
  KEY_FEATURES,
  KEY_HIGHLIGHTS,
  MISTAKES_ROWS,
  PARTY_COMPARISON_NOTE,
  PARTY_COMPARISON_ROWS,
  PROCESS_INTRO,
  PROCESS_NOTE,
  PROCESS_STEPS,
  QMS_AUDIT_PARAGRAPHS,
  RENEWAL_INTRO,
  RENEWAL_PRECAUTIONS,
  RENEWAL_PROCESS,
  RENEWAL_WHEN,
  SOCIAL_AUDIT_CLOSING,
  SOCIAL_AUDIT_FORMATS,
  SOCIAL_AUDIT_FORMATS_INTRO,
  SOCIAL_AUDIT_INTRO,
  SOCIAL_AUDIT_NOTE,
  SOCIAL_SCHEME_LINKS,
  SUPPLIER_AUDIT_PARAGRAPHS,
  TIMELINE_CLOSING,
  TIMELINE_INTRO,
  TIMELINE_ROWS,
  VALIDITY_PARAGRAPHS,
  WHAT_IS_CLOSING,
  WHAT_IS_PARAGRAPHS,
  WHERE_CLOSING,
  WHERE_INTRO,
  WHERE_ROWS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  WHY_CHOOSE_ITEMS,
  WHY_MATTERS_INTRO,
  WHY_MATTERS_ITEMS,
  type TableRow,
} from "../data/auditContent";

const AUDIT_PAGE_PATH = "/services/audit-services";

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

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="audit"
      defaultService="Audit Services"
      serviceOptions={["Audit Services", "Factory Audit", "Social Compliance Audit", "Supplier Audit", "Other"]}
      successText="Our audit services expert will contact you within one business day."
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

function HeroCtas() {
  return (
    <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
      <Link href="/contact" className={styles.ctaBtnPrimary}>
        {CTA_BOOK}
      </Link>
      <Link href="/contact" className={styles.ctaBtnSecondary}>
        {CTA_QUOTE}
      </Link>
    </div>
  );
}

export function AuditPageContent() {
  const [activeId, setActiveId] = useState(AUDIT_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = AUDIT_TOC.map((item) => item.id);
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
              {AUDIT_TOC.map((item, i) => (
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
              <div className={styles.highlightsBox}>
                <div className={styles.highlightsTitle}>Key Highlights</div>
                <ul className={styles.bulletList}>
                  {KEY_HIGHLIGHTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <HeroCtas />
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction: Why Audits Have Become Part of Doing Business</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Domestic and international audit services in India"
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
              </div>
            </section>

            <section id="what-is-audit" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Are Audit Services?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <DataTable
                columns={[
                  { key: "type", header: "Audit classification", scope: "row" },
                  { key: "meaning", header: "What it means" },
                ]}
                rows={AUDIT_CLASSIFICATION_ROWS}
                getRowKey={(row) => row.type}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_CLOSING}</p>
            </section>

            <section id="audit-types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Audit Types Covered Under Our Audit Services</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AUDIT_TYPES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Audit Type", scope: "row" },
                  { key: "question", header: "The Question It Answers" },
                  { key: "requestedBy", header: "Typically Requested By" },
                ]}
                rows={AUDIT_TYPES_ROWS}
                getRowKey={(row) => row.type}
              />

              <h3 className={styles.subsectionTitle}>Factory Audit Services</h3>
              {FACTORY_AUDIT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}

              <h3 className={styles.subsectionTitle}>Social Compliance Audit Services</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SOCIAL_AUDIT_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SOCIAL_AUDIT_FORMATS_INTRO}</p>
              <ul className={styles.bulletList}>
                {SOCIAL_AUDIT_FORMATS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{SOCIAL_AUDIT_NOTE}</div>
              <ul className={styles.bulletList}>
                {SOCIAL_SCHEME_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SOCIAL_AUDIT_CLOSING}</p>

              <h3 className={styles.subsectionTitle}>Supplier Audit Services and Vendor Audit Services</h3>
              {SUPPLIER_AUDIT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}

              <h3 className={styles.subsectionTitle}>Quality Management System Audit</h3>
              {QMS_AUDIT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}

              <h3 className={styles.subsectionTitle}>Domestic Audit Services</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOMESTIC_AUDIT_PARAGRAPH}</p>

              <h3 className={styles.subsectionTitle}>International Audit Services</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTERNATIONAL_AUDIT_PARAGRAPH}</p>

              <h3 className={styles.subsectionTitle}>Environmental, Health and Safety Audits</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{EHS_AUDIT_PARAGRAPH}</p>
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Are Audit Services Important?</h2>
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
              <h2 className={styles.sectionTitle}>Who Needs Audit Services?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Professional Audit Services</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="key-features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our Audit Services</h2>
              <ul className={styles.bulletList}>
                {KEY_FEATURES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility: Who Can Use Audit Services?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>Who typically qualifies</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>What you need before we start</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_BEFORE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>Important notes</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_NOTES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for Audit Services</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                  { key: "notes", header: "Additional Notes" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step Audit Services Process</h2>
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
              <div className={styles.noteBox}>{PROCESS_NOTE}</div>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Audit Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "stage", header: "Stage", scope: "row" },
                  { key: "duration", header: "What Drives Duration" },
                ]}
                rows={TIMELINE_ROWS}
                getRowKey={(row) => row.stage}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_CLOSING}</p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors for Audit Services</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Audit Validity</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal and Repeat Audits</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <ul className={styles.bulletList}>
                {RENEWAL_WHEN.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PROCESS}</p>
              <h3 className={styles.subsectionTitle}>Important precautions</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_PRECAUTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in Factory and Compliance Audits</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
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
              <h3 className={styles.subsectionTitle}>Common ways clients start with us</h3>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_START.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HOW_WE_HELP_NOTE}</div>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  {CTA_TALK}
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  {CTA_SEND}
                </Link>
              </div>
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry", scope: "row" },
                  { key: "focus", header: "Common Audit Focus" },
                  { key: "types", header: "Typical Audit Types" },
                ]}
                rows={INDUSTRIES_ROWS}
                getRowKey={(row) => row.industry}
              />
            </section>

            <section id="where-we-audit" className={styles.section}>
              <h2 className={styles.sectionTitle}>Where We Audit</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHERE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "region", header: "Region", scope: "row" },
                  { key: "locations", header: "Locations and Typical Requests" },
                ]}
                rows={WHERE_ROWS}
                getRowKey={(row) => row.region}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHERE_CLOSING}</p>
            </section>

            <section id="choose-partner" className={styles.section}>
              <h2 className={styles.sectionTitle}>How to Choose an Audit Partner</h2>
              {CHOOSE_PARTNER_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
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
              <h2 className={styles.sectionTitle}>Expert Tips for a Smoother Audit</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>Comparison: Choosing the Right Audit</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <h3 className={styles.subsectionTitle}>Audit vs inspection</h3>
              <DataTable
                columns={[
                  { key: "point", header: "Point", scope: "row" },
                  { key: "audit", header: "Factory Audit" },
                  { key: "inspection", header: "Product Inspection" },
                ]}
                rows={AUDIT_VS_INSPECTION_ROWS}
                getRowKey={(row) => row.point}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AUDIT_VS_INSPECTION_NOTE}</p>
              <h3 className={styles.subsectionTitle}>First, second and third party audits</h3>
              <DataTable
                columns={[
                  { key: "point", header: "Point", scope: "row" },
                  { key: "first", header: "First Party (Internal)" },
                  { key: "second", header: "Second Party" },
                  { key: "third", header: "Third Party" },
                ]}
                rows={PARTY_COMPARISON_ROWS}
                getRowKey={(row) => row.point}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PARTY_COMPARISON_NOTE}</p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>Ready to Plan Your Audit?</h2>
              {GET_STARTED_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  {CTA_REQUEST}
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  {CTA_TALK}
                </Link>
              </div>
            </section>
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
                          link.href === AUDIT_PAGE_PATH ? styles.servicesLinkActive : ""
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
