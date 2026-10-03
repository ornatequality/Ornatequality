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
  ISO_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHY_WORK_HEADING,
  WHY_WORK_ITEMS,
  HERO_CTA_NOTE,
  HERO_CLOSING,
  INTRO_PARAGRAPHS,
  WHAT_IS_INTRO,
  WHAT_IS_PARTS,
  WHAT_IS_CLOSING,
  WHO_ISSUES_PARAGRAPHS,
  WHO_ISSUES_QUESTIONS,
  WHO_ISSUES_CLOSING,
  WHY_IMPORTANT_ITEMS,
  WHY_IMPORTANT_NOTE,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  BENEFITS_ITEMS,
  FEATURES_ITEMS,
  FEATURES_NOTE,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_WHO_HEADING,
  ELIGIBILITY_WHO,
  ELIGIBILITY_BASIC_HEADING,
  ELIGIBILITY_BASIC,
  ELIGIBILITY_NOTES_HEADING,
  ELIGIBILITY_NOTES,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_EXTRA,
  PROCESS_CLOSING,
  TIMELINE_INTRO,
  TIMELINE_DRIVES_HEADING,
  TIMELINE_DRIVES,
  TIMELINE_SPEED_HEADING,
  TIMELINE_SPEED,
  TIMELINE_NOTE,
  COST_INTRO,
  COST_TOTAL_HEADING,
  COST_TOTAL,
  COST_MOVE_HEADING,
  COST_MOVE,
  COST_QUOTE_HEADING,
  COST_QUOTE,
  COST_QUESTIONS_HEADING,
  COST_QUESTIONS,
  VALIDITY_INTRO,
  VALIDITY_KEEP_HEADING,
  VALIDITY_KEEP,
  VALIDITY_END_HEADING,
  VALIDITY_END,
  VALIDITY_NOTE,
  RENEWAL_INTRO,
  RENEWAL_DURING,
  RENEWAL_PRECAUTIONS_HEADING,
  RENEWAL_PRECAUTIONS,
  RENEWAL_TRANSFER,
  RENEWAL_CLOSING,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_NOTE,
  EVALUATE_INTRO,
  EVALUATE_ITEMS,
  EVALUATE_CLOSING,
  WHY_CHOOSE_ITEMS,
  STANDARDS_INTRO,
  STANDARDS_ROWS,
  STANDARDS_DETAIL_INTRO,
  STANDARDS_DETAILS,
  STANDARDS_RELATED,
  INDUSTRIES_ROWS,
  INDUSTRIES_CLOSING,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  COMPARISON_ROWS,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPHS,
  CTA_REACH_HEADING,
  CTA_REACH,
  CTA_CLOSING,
  CTA_TAGLINE,
  type TableRow,
} from "../data/isoContent";

const ISO_PAGE_PATH = "/services/iso-certification";

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
      idPrefix="iso"
      defaultService="ISO Certification"
      serviceOptions={[
        "ISO Certification",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "Trademark Registration",
        "Other",
      ]}
      successText="Our ISO certification expert will contact you within one business day."
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

export function IsoPageContent() {
  const [activeId, setActiveId] = useState(ISO_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ISO_TOC.map((item) => item.id);
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
              {ISO_TOC.map((item, i) => (
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
              <p className={`${styles.heroLead} ${styles.textJustify}`}>
                <strong>{BANNER_SUBTITLE}</strong>
              </p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_DESCRIPTION}</p>
              <h3 className={styles.subsectionTitle}>{WHY_WORK_HEADING}</h3>
              <ul className={styles.bulletList}>
                {WHY_WORK_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HERO_CTA_NOTE}</p>
              {HERO_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Request a scope-based proposal
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Talk to iso certification expert
                </Link>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="ISO certification support for manufacturers, exporters and service companies"
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

            <section id="what-is-iso" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is ISO Certification?</h2>
              {WHAT_IS_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              {WHAT_IS_PARTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              {WHAT_IS_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="who-issues" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Who Issues the Certificate, and Why Accreditation Decides Its Value
              </h2>
              {WHO_ISSUES_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {WHO_ISSUES_QUESTIONS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_ISSUES_CLOSING}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is ISO Certification Important?</h2>
              <ul className={styles.bulletList}>
                {WHY_IMPORTANT_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{WHY_IMPORTANT_NOTE}</div>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs ISO Certification?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              {WHO_NEEDS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="key-features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our ISO Certification Service</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{FEATURES_NOTE}</div>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for ISO Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_WHO_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_BASIC_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_BASIC.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_NOTES_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_NOTES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for ISO Certification</h2>
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
              {DOCUMENTS_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step ISO Certification Process</h2>
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
              {PROCESS_EXTRA.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_CLOSING}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certification Timeline</h2>
              {TIMELINE_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{TIMELINE_DRIVES_HEADING}</h3>
              <ul className={styles.bulletList}>
                {TIMELINE_DRIVES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{TIMELINE_SPEED_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_SPEED}</p>
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certification Cost Factors</h2>
              {COST_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{COST_TOTAL_HEADING}</h3>
              <ul className={styles.bulletList}>
                {COST_TOTAL.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{COST_MOVE_HEADING}</h3>
              <ul className={styles.bulletList}>
                {COST_MOVE.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{COST_QUOTE_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_QUOTE}</p>
              <h3 className={styles.subsectionTitle}>{COST_QUESTIONS_HEADING}</h3>
              {COST_QUESTIONS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of ISO Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{VALIDITY_KEEP_HEADING}</h3>
              <ul className={styles.bulletList}>
                {VALIDITY_KEEP.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{VALIDITY_END_HEADING}</h3>
              <ul className={styles.bulletList}>
                {VALIDITY_END.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{VALIDITY_NOTE}</div>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certification Renewal and Recertification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              {RENEWAL_DURING.map((item) => (
                <p key={item.title} className={`${styles.sectionText} ${styles.textJustify}`}>
                  <strong>{item.title}</strong> {item.text}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{RENEWAL_PRECAUTIONS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_PRECAUTIONS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              {RENEWAL_TRANSFER.map((item) => (
                <p key={item.title} className={`${styles.sectionText} ${styles.textJustify}`}>
                  <strong>{item.title}</strong> {item.text}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HOW_WE_HELP_NOTE}</div>
            </section>

            <section id="evaluate-provider" className={styles.section}>
              <h2 className={styles.sectionTitle}>How to Evaluate an ISO Certification Provider</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{EVALUATE_INTRO}</p>
              <ul className={styles.bulletList}>
                {EVALUATE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              {EVALUATE_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="standards" className={styles.section}>
              <h2 className={styles.sectionTitle}>Standards Covered Under ISO Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STANDARDS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "standard", header: "Standard", scope: "row" },
                  { key: "covers", header: "What It Covers" },
                  { key: "required", header: "Typically Required By" },
                  { key: "page", header: "Dedicated Page" },
                ]}
                rows={STANDARDS_ROWS}
                getRowKey={(row) => row.standard}
              />
              <h3 className={styles.subsectionTitle}>What Each Standard Is Actually For</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STANDARDS_DETAIL_INTRO}</p>
              {STANDARDS_DETAILS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STANDARDS_RELATED}</p>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <DataTable
                columns={[
                  { key: "sector", header: "Sector", scope: "row" },
                  { key: "standards", header: "Typical Standards" },
                  { key: "why", header: "Why It Comes Up" },
                ]}
                rows={INDUSTRIES_ROWS}
                getRowKey={(row) => row.sector}
              />
              {INDUSTRIES_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Comparison: Choosing the Right Standard and the Right Certificate
              </h2>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "different", header: "What Is Actually Different" },
                  { key: "takeaway", header: "Practical Takeaway" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.comparison}
              />
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{CTA_HEADING}</h2>
              {CTA_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{CTA_REACH_HEADING}</h3>
              <ul className={styles.bulletList}>
                {CTA_REACH.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              {CTA_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_TAGLINE}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Request iso certification proposal
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Iso certification enquiry
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Iso certification consultation booking
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
                          link.href === ISO_PAGE_PATH ? styles.servicesLinkActive : ""
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
