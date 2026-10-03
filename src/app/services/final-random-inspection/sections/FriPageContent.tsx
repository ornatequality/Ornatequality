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
  FRI_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  WHAT_YOU_GET,
  INTRO_TITLE,
  INTRO_PARAGRAPHS,
  INTRO_NOTE,
  INTRO_CLOSING,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_QUESTIONS,
  NAMES_TITLE,
  NAMES_INTRO,
  NAMES_ROWS,
  NAMES_CLOSING,
  QC_LIFECYCLE_TITLE,
  QC_LIFECYCLE,
  RANDOM_TITLE,
  RANDOM_TEXT,
  WHY_INTRO,
  WHY_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_BLOCKS,
  WHO_NEEDS_SITUATIONS_TITLE,
  WHO_NEEDS_SITUATIONS,
  BENEFITS_ITEMS,
  FEATURES_INTRO,
  FEATURES_ITEMS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_READY_INTRO,
  ELIGIBILITY_READY,
  ELIGIBILITY_NOT_READY_INTRO,
  ELIGIBILITY_NOT_READY,
  ELIGIBILITY_NOTE,
  ELIGIBILITY_WHO,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  AQL_INTRO,
  AQL_SAMPLE_TITLE,
  AQL_SAMPLE_PARAGRAPHS,
  AQL_DEFECT_TITLE,
  AQL_DEFECT_ROWS,
  AQL_DEFECT_CLOSING,
  AQL_EXAMPLE_TITLE,
  AQL_EXAMPLE_INTRO,
  AQL_EXAMPLE_ROWS,
  AQL_EXAMPLE_CLOSING,
  AQL_NOTE,
  CHECKS_INTRO,
  CHECKS_BLOCKS,
  PACKING_TITLE,
  PACKING_INTRO,
  PACKING_ITEMS,
  ONSITE_TITLE,
  ONSITE_INTRO,
  ONSITE_ITEMS,
  CHECKS_NOTE,
  REPORT_INTRO,
  REPORT_ITEMS,
  VERDICT_TITLE,
  VERDICT_ITEMS,
  REPORT_CLOSING,
  TIMELINE_INTRO,
  TIMELINE_ITEMS,
  TIMELINE_NOTE,
  COST_INTRO,
  COST_ITEMS,
  COST_CLOSING,
  COST_COMPARE_TITLE,
  COST_COMPARE_INTRO,
  COST_COMPARE_ASK,
  COST_COMPARE_ITEMS,
  COST_COMPARE_CLOSING,
  COST_NOTE,
  VALIDITY_INTRO,
  VALIDITY_ITEMS,
  VALIDITY_CLOSING,
  RENEWAL_INTRO,
  RENEWAL_WHEN_TITLE,
  RENEWAL_WHEN,
  RENEWAL_HOW_TITLE,
  RENEWAL_HOW,
  RENEWAL_PRECAUTIONS_INTRO,
  RENEWAL_PRECAUTIONS,
  RENEWAL_CLOSING,
  CHALLENGES_ITEMS,
  HELP_INTRO,
  HELP_ITEMS,
  RELATED_TITLE,
  RELATED_INTRO,
  RELATED_ITEMS,
  HELP_NOTE,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_INTRO,
  INDUSTRY_BLOCKS,
  PRODUCTS_INTRO,
  PRODUCTS_ROWS,
  PRODUCTS_NOTE,
  LOCATIONS_INTRO,
  LOCATION_ROWS,
  LOCATIONS_CLOSING,
  MISTAKES_ROWS,
  TIPS_ITEMS,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  COMPARISON_BLOCKS,
  FAQ_ITEMS,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  CTA_WAYS_INTRO,
  CTA_WAYS,
  type TableRow,
} from "../data/friContent";

const FRI_PAGE_PATH = "/services/final-random-inspection";

type DataTableColumn = {
  key: string;
  header: string;
  scope?: "col" | "row";
};

function DataTable({
  columns,
  rows,
  getRowKey,
}: {
  columns: DataTableColumn[];
  rows: TableRow[];
  getRowKey: (row: TableRow, index: number) => string;
}) {
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
      idPrefix="fri"
      defaultService="Final Random Inspection"
      serviceOptions={[
        "Final Random Inspection",
        "Pre-Production Inspection",
        "Factory & Process Inspection",
        "Third Party Inspection",
        "Container Loading Inspection",
        "Other",
      ]}
      successText="Our final random inspection expert will contact you within one business day."
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

function CtaRow({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
      {items.map((item, index) => (
        <Link
          key={item.label}
          href={item.href}
          className={index === 0 ? styles.ctaBtnPrimary : styles.ctaBtnSecondary}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

const PAGE_CTAS = [
  { label: "Book Final Random Inspection", href: "/contact" },
  { label: "Request Final Random Inspection Quote", href: "/contact" },
];

export function FriPageContent() {
  const [activeId, setActiveId] = useState(FRI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = FRI_TOC.map((item) => item.id);
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
              {FRI_TOC.map((item, i) => (
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
              <div className={styles.highlightsBox}>
                <ul className={styles.bulletList}>
                  {WHAT_YOU_GET.map((item) => (
                    <li key={item.slice(0, 48)} className={styles.textJustify}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CtaRow items={PAGE_CTAS} />
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>{INTRO_TITLE}</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Final random inspection support for finished goods quality checks in India"
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
              <div className={styles.noteBox}>{INTRO_NOTE}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTRO_CLOSING}</p>
            </section>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is Final Random Inspection (FRI)?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {WHAT_IS_QUESTIONS.map((item, index) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>
                      {index + 1}. {item.title}
                    </strong>{" "}
                    {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{NAMES_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{NAMES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "term", header: "Term", scope: "row" },
                  { key: "meaning", header: "What It Usually Means" },
                ]}
                rows={NAMES_ROWS}
                getRowKey={(row) => row.term}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{NAMES_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{QC_LIFECYCLE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{QC_LIFECYCLE}</p>
              <h3 className={styles.subsectionTitle}>{RANDOM_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RANDOM_TEXT}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is Final Random Inspection Important?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO}</p>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs Final Random Inspection Services?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              {WHO_NEEDS_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className={styles.subsectionTitle}>{block.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{block.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{WHO_NEEDS_SITUATIONS_TITLE}</h3>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_SITUATIONS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Final Random Inspection</h2>
              {BENEFITS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our FRI Service</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FEATURES_INTRO}</p>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility: When Can You Book an FRI?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_READY_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_READY.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_NOT_READY_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_NOT_READY.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_WHO}</p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents and Information Required</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document / Information", scope: "row" },
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
              <h2 className={styles.sectionTitle}>Step-by-Step Final Random Inspection Procedure</h2>
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

            <section id="aql" className={styles.section}>
              <h2 className={styles.sectionTitle}>AQL Sampling Explained: How Pass or Fail Is Decided</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AQL_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{AQL_SAMPLE_TITLE}</h3>
              {AQL_SAMPLE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{AQL_DEFECT_TITLE}</h3>
              <DataTable
                columns={[
                  { key: "defect", header: "Defect Class", scope: "row" },
                  { key: "meaning", header: "What It Means" },
                  { key: "aql", header: "Common AQL Choice" },
                  { key: "example", header: "Example" },
                ]}
                rows={AQL_DEFECT_ROWS}
                getRowKey={(row) => row.defect}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AQL_DEFECT_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{AQL_EXAMPLE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AQL_EXAMPLE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "lot", header: "Lot Size", scope: "row" },
                  { key: "sample", header: "Sample Size" },
                  { key: "major", header: "Major (AQL 2.5): Accept / Reject" },
                  { key: "minor", header: "Minor (AQL 4.0): Accept / Reject" },
                ]}
                rows={AQL_EXAMPLE_ROWS}
                getRowKey={(row) => row.lot}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AQL_EXAMPLE_CLOSING}</p>
              <div className={styles.noteBox}>{AQL_NOTE}</div>
            </section>

            <section id="inspector-checks" className={styles.section}>
              <h2 className={styles.sectionTitle}>What the Inspector Checks</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHECKS_INTRO}</p>
              {CHECKS_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className={styles.subsectionTitle}>{block.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{block.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{PACKING_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PACKING_INTRO}</p>
              <ul className={styles.bulletList}>
                {PACKING_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ONSITE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ONSITE_INTRO}</p>
              <ul className={styles.bulletList}>
                {ONSITE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{CHECKS_NOTE}</div>
            </section>

            <section id="report" className={styles.section}>
              <h2 className={styles.sectionTitle}>Your FRI Report and Verdict</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{REPORT_INTRO}</p>
              {REPORT_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{VERDICT_TITLE}</h3>
              <ul className={styles.bulletList}>
                {VERDICT_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{REPORT_CLOSING}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline: How Long Does an FRI Take?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              {TIMELINE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors: What Affects Final Random Inspection Cost?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{COST_COMPARE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_COMPARE_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_COMPARE_ASK}</p>
              <ul className={styles.bulletList}>
                {COST_COMPARE_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_COMPARE_CLOSING}</p>
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity: What Does an FRI Report Cover?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_INTRO}</p>
              <ul className={styles.bulletList}>
                {VALIDITY_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_CLOSING}</p>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Re-inspection and Repeat Orders</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{RENEWAL_WHEN_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_WHEN}</p>
              <h3 className={styles.subsectionTitle}>{RENEWAL_HOW_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_HOW}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PRECAUTIONS_INTRO}</p>
              <div className={styles.noteBox}>
                <ul className={styles.bulletList}>
                  {RENEWAL_PRECAUTIONS.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in Final Inspection</h2>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HELP_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{RELATED_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RELATED_INTRO}</p>
              <ul className={styles.bulletList}>
                {RELATED_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HELP_NOTE}</div>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              {INDUSTRY_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className={styles.subsectionTitle}>{block.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{block.text}</p>
                </div>
              ))}
            </section>

            <section id="products" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products and Categories Covered</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry" },
                  { key: "page", header: "Product / Category Page", scope: "row" },
                  { key: "focus", header: "Typical FRI Focus Areas" },
                  { key: "dedicated", header: "Dedicated Page" },
                ]}
                rows={PRODUCTS_ROWS}
                getRowKey={(row, index) => `${row.page}-${index}`}
              />
              <div className={styles.noteBox}>{PRODUCTS_NOTE}</div>
            </section>

            <section id="locations" className={styles.section}>
              <h2 className={styles.sectionTitle}>Locations We Cover</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "hub", header: "Manufacturing Hub", scope: "row" },
                  { key: "products", header: "Products Commonly Inspected" },
                  { key: "service", header: "Local Service" },
                ]}
                rows={LOCATION_ROWS}
                getRowKey={(row) => row.hub}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes Buyers Make (and How to Avoid Them)</h2>
              <DataTable
                columns={[
                  { key: "mistake", header: "Common mistake", scope: "row" },
                  { key: "hurts", header: "Why it hurts" },
                  { key: "avoid", header: "How to avoid it" },
                ]}
                rows={MISTAKES_ROWS}
                getRowKey={(row) => row.mistake}
              />
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for a Smooth FRI</h2>
              <ul className={styles.bulletList}>
                {TIPS_ITEMS.map((item, index) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    <strong>{index + 1}.</strong> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>FRI Compared with Other Inspection Types</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Inspection Type", scope: "row" },
                  { key: "when", header: "When It Happens" },
                  { key: "purpose", header: "Main Purpose" },
                  { key: "bestFor", header: "Best For" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.type}
              />
              {COMPARISON_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className={styles.subsectionTitle}>{block.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{block.text}</p>
                </div>
              ))}
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{CTA_TITLE}</h2>
              {CTA_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_WAYS_INTRO}</p>
              <ul className={styles.bulletList}>
                {CTA_WAYS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <CtaRow items={PAGE_CTAS} />
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
                          link.href === FRI_PAGE_PATH ? styles.servicesLinkActive : ""
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
