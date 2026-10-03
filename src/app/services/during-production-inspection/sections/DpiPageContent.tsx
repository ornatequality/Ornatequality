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
  DPI_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  BANNER_AGENCY,
  WHAT_IS_PARAGRAPHS,
  STAGE_ROWS,
  WHAT_IS_DEFINING,
  QUESTIONS_TITLE,
  QUESTIONS_ITEMS,
  EXAMPLE_TITLE,
  EXAMPLE_PARAGRAPHS,
  WHY_INTRO,
  WHY_CLOSING,
  WHY_ITEMS,
  WHY_COMPLIANCE_NOTE,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  WHO_NEEDS_CLOSING,
  FEATURES_INTRO,
  FEATURES_ITEMS,
  ENGAGEMENT_TITLE,
  ENGAGEMENT_PARAGRAPHS,
  BENEFITS_INTRO,
  BENEFITS_ITEMS,
  SCOPE_INTRO,
  SCOPE_ITEMS,
  SCOPE_NOTE,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_WINDOW,
  PROCESS_CLOSING,
  AQL_PARAGRAPHS,
  AQL_NOTE,
  DEFECTS_INTRO,
  DEFECTS_ITEMS,
  DEFECTS_PARAGRAPHS,
  DEFECTS_NOTE,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  FACTORY_READY_TITLE,
  FACTORY_READY_ITEMS,
  FACTORY_READY_NOTE,
  ELIGIBILITY_PARAGRAPHS,
  ELIGIBILITY_NOTE,
  ELIGIBILITY_SCENARIOS_TITLE,
  ELIGIBILITY_SCENARIOS,
  TIMELINE_INTRO,
  TIMELINE_SHAPE,
  TIMELINE_FACTORS_TITLE,
  TIMELINE_FACTORS,
  TIMELINE_DELAY_TITLE,
  TIMELINE_DELAY,
  COST_INTRO,
  COST_ITEMS,
  COST_STRUCTURE_TITLE,
  COST_STRUCTURE_PARAGRAPHS,
  COST_NOTE,
  REPORT_PARAGRAPHS,
  INDUSTRIES_INTRO,
  INDUSTRY_ROWS,
  INDUSTRIES_CLOSING,
  LOCATIONS_PARAGRAPHS,
  HELP_PARAGRAPHS,
  EVALUATE_TITLE,
  EVALUATE_INTRO,
  EVALUATE_QUESTIONS,
  EVALUATE_PARAGRAPHS,
  EVALUATE_NOTE,
  CHALLENGES_INTRO,
  CHALLENGES_ITEMS,
  MISTAKES_ROWS,
  TIPS_ITEMS,
  COMPARISON_TYPES_TITLE,
  COMPARISON_TYPES_ROWS,
  COMPARISON_WHO_TITLE,
  COMPARISON_WHO_ROWS,
  COMPARISON_NOTE,
  FAQ_INTRO,
  FAQ_ITEMS,
  BOOK_TITLE,
  BOOK_INTRO,
  BOOK_ITEMS,
  BOOK_CLOSING,
  BOOK_TALK,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  type TableRow,
} from "../data/dpiContent";

const DPI_PAGE_PATH = "/services/during-production-inspection";

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
      idPrefix="dpi"
      defaultService="During Production Inspection"
      serviceOptions={["During Production Inspection"]}
      successText="Our during production inspection expert will contact you within one business day."
      mobilePlaceholder="+91 XXXXX XXXXX"
      serviceSelectClassName="formInput"
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
  { label: "Book an Inspection", href: "/contact" },
  { label: "Request a Quotation", href: "/contact" },
  { label: "Speak to a Quality Inspector", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Book a During Production Inspection", href: "/contact" },
  { label: "Request a Quotation", href: "/contact" },
  { label: "Speak to a Quality Inspector", href: "/contact" },
];

export function DpiPageContent() {
  const [activeId, setActiveId] = useState(DPI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = DPI_TOC.map((item) => item.id);
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
              {DPI_TOC.map((item, i) => (
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_AGENCY}</p>
              <CtaRow items={PAGE_CTAS} />
            </div>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is During Production Inspection (DPI)?</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="During production inspection at a supplier factory in India"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>
                {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <DataTable
                columns={[
                  { key: "stage", header: "Inspection Stage", scope: "row" },
                  { key: "when", header: "When It Happens" },
                  { key: "answers", header: "What It Answers" },
                ]}
                rows={STAGE_ROWS}
                getRowKey={(row) => row.stage}
              />
              <div className={styles.noteBox}>{WHAT_IS_DEFINING}</div>
              <h3 className={styles.subsectionTitle}>{QUESTIONS_TITLE}</h3>
              {QUESTIONS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{EXAMPLE_TITLE}</h3>
              {EXAMPLE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why DUPRO Inspection Is Important</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_CLOSING}</p>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                  {item.title === "Compliance impact" ? (
                    <div className={styles.noteBox}>{WHY_COMPLIANCE_NOTE}</div>
                  ) : null}
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs This Service</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our DPI Inspection Service</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FEATURES_INTRO}</p>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ENGAGEMENT_TITLE}</h3>
              {ENGAGEMENT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BENEFITS_INTRO}</p>
              {BENEFITS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="scope" className={styles.section}>
              <h2 className={styles.sectionTitle}>Scope of Inspection — What We Check</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SCOPE_INTRO}</p>
              <ul className={styles.bulletList}>
                {SCOPE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{SCOPE_NOTE}</div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step During Production Inspection Process</h2>
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
              <div className={styles.noteBox}>{PROCESS_WINDOW}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_CLOSING}</p>
            </section>

            <section id="aql" className={styles.section}>
              <h2 className={styles.sectionTitle}>AQL Sampling and Inspection Standards</h2>
              {AQL_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{AQL_NOTE}</div>
            </section>

            <section id="defects" className={styles.section}>
              <h2 className={styles.sectionTitle}>Defect Classification and Corrective Action</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DEFECTS_INTRO}</p>
              <ul className={styles.bulletList}>
                {DEFECTS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              {DEFECTS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{DEFECTS_NOTE}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents and Information Required</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document / Information", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory or Optional" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <h3 className={styles.subsectionTitle}>{FACTORY_READY_TITLE}</h3>
              <ul className={styles.bulletList}>
                {FACTORY_READY_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{FACTORY_READY_NOTE}</div>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility — When a DPI Makes Sense</h2>
              {ELIGIBILITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_SCENARIOS_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_SCENARIOS}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline and Scheduling</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_SHAPE}</p>
              <h3 className={styles.subsectionTitle}>{TIMELINE_FACTORS_TITLE}</h3>
              <ul className={styles.bulletList}>
                {TIMELINE_FACTORS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{TIMELINE_DELAY_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_DELAY}</p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{COST_STRUCTURE_TITLE}</h3>
              {COST_STRUCTURE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="report" className={styles.section}>
              <h2 className={styles.sectionTitle}>Inspection Report and Deliverables</h2>
              {REPORT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Cover</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry Vertical", scope: "row" },
                  { key: "products", header: "Typical Products" },
                  { key: "checkpoints", header: "Key Inspection Checkpoints" },
                ]}
                rows={INDUSTRY_ROWS}
                getRowKey={(row) => row.industry}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="locations" className={styles.section}>
              <h2 className={styles.sectionTitle}>Service Coverage Across India</h2>
              {LOCATIONS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help and Why Choose Us</h2>
              {HELP_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{EVALUATE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{EVALUATE_INTRO}</p>
              <ol className={styles.bulletList}>
                {EVALUATE_QUESTIONS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ol>
              {EVALUATE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{EVALUATE_NOTE}</div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges and How We Handle Them</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHALLENGES_INTRO}</p>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes Buyers Make</h2>
              <DataTable
                columns={[
                  { key: "mistake", header: "Mistake", scope: "row" },
                  { key: "impact", header: "Impact" },
                  { key: "avoid", header: "How to Avoid It" },
                ]}
                rows={MISTAKES_ROWS}
                getRowKey={(row) => row.mistake}
              />
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips</h2>
              <ol className={styles.bulletList}>
                {TIPS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ol>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>Comparison</h2>
              <h3 className={styles.subsectionTitle}>{COMPARISON_TYPES_TITLE}</h3>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "difference", header: "Key Difference" },
                  { key: "when", header: "When to Choose Which" },
                ]}
                rows={COMPARISON_TYPES_ROWS}
                getRowKey={(row) => row.comparison}
              />
              <h3 className={styles.subsectionTitle}>{COMPARISON_WHO_TITLE}</h3>
              <DataTable
                columns={[
                  { key: "factor", header: "Factor", scope: "row" },
                  { key: "diy", header: "Doing It Yourself" },
                  { key: "consultant", header: "Independent Consultant" },
                  { key: "agency", header: "Professional Inspection Agency" },
                ]}
                rows={COMPARISON_WHO_ROWS}
                getRowKey={(row) => row.factor}
              />
              <div className={styles.noteBox}>{COMPARISON_NOTE}</div>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FAQ_INTRO}</p>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{BOOK_TITLE}</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BOOK_INTRO}</p>
              <ol className={styles.bulletList}>
                {BOOK_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ol>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BOOK_CLOSING}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BOOK_TALK}</p>
              <h2 className={styles.sectionTitle}>{CTA_TITLE}</h2>
              {CTA_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <CtaRow items={FINAL_CTAS} />
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
                          link.href === DPI_PAGE_PATH ? styles.servicesLinkActive : ""
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
