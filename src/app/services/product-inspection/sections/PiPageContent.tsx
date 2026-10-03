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
  PI_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  TRUST_HEADING,
  TRUST_ITEMS,
  QUICK_BENEFITS_HEADING,
  QUICK_BENEFITS,
  INTRO_LEAD,
  INTRO_PARAGRAPH,
  INTRO_IMPACT_HEADING,
  INTRO_IMPACT,
  BUYERS_CALL_HEADING,
  BUYERS_CALL,
  WHO_PAGE_FOR_HEADING,
  WHO_PAGE_FOR,
  WHAT_IS_PARAGRAPHS,
  THREE_THINGS_HEADING,
  THREE_THINGS,
  THREE_THINGS_CLOSING,
  AQL_HEADING,
  AQL_INTRO,
  AQL_ITEMS,
  AQL_CLOSING_BEFORE,
  AQL_CLOSING_AFTER,
  DEFECTS_HEADING,
  DEFECTS_INTRO,
  DEFECT_ROWS,
  DEFECTS_CLOSING,
  VS_HEADING,
  VS_INTRO,
  VS_ROWS,
  VS_CLOSING,
  EXPERT_NOTE,
  WHY_MATTERS_GROUPS,
  FUTURE_HEADING,
  FUTURE_TEXT,
  WHO_NEEDS_ITEMS,
  WHO_NEEDS_NOTE,
  FEATURES_INTRO,
  INSPECTION_TYPE_HEADING,
  INSPECTION_TYPE_ROWS,
  FEATURES_STANDALONE,
  FEATURE_PARTS,
  BENEFITS_EXPLAINED,
  PROCESS_STEPS,
  DOCUMENTS_NOTE,
  DOCUMENTS_ROWS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_HEADING,
  ELIGIBILITY_WHO,
  ELIGIBILITY_PRACTICAL_HEADING,
  ELIGIBILITY_PRACTICAL,
  ELIGIBILITY_CLOSING,
  TIMELINE_HEADING,
  TIMELINE_SEQUENCE,
  TIMELINE_NOTE,
  TIMELINE_FACTORS_HEADING,
  TIMELINE_FACTORS,
  DELAYS_HEADING,
  DELAYS,
  TIMELINE_TIP,
  COST_INTRO,
  COST_QUESTIONS_HEADING,
  COST_QUESTIONS,
  COST_PRICED_HEADING,
  COST_PRICED,
  COST_TABLE_HEADING,
  COST_ROWS,
  COST_INCLUDED_HEADING,
  COST_INCLUDED,
  COST_CONTROL_HEADING,
  COST_CONTROL,
  COST_WARNING,
  CHALLENGES,
  WHY_CHOOSE_ITEMS,
  WHY_CHOOSE_CLOSING,
  INDUSTRIES_ITEMS,
  VERTICALS_HEADING,
  VERTICAL_ROWS,
  REGULATORY_INTRO,
  REGULATORY_HEADING,
  REGULATORY_LINKS,
  REGULATORY_SECTOR,
  REGULATORY_WARNING,
  MISTAKES_ROWS,
  EXPERT_TIPS,
  COMPARISON_ROWS,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPHS,
  CTA_ITEMS,
  type TableRow,
} from "../data/piContent";

const PI_PAGE_PATH = "/services/product-inspection";

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
      idPrefix="pi"
      defaultService="Product Inspection"
      serviceOptions={[
        "Product Inspection",
        "Third Party Inspection",
        "Pre-Production Inspection",
        "Final Random Inspection",
        "Other",
      ]}
      successText="Our product inspection expert will contact you within one business day."
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

function CtaRow({
  items,
}: {
  items: { label: string; href: string }[];
}) {
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

export function PiPageContent() {
  const [activeId, setActiveId] = useState(PI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = PI_TOC.map((item) => item.id);
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
              {PI_TOC.map((item, i) => (
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
              <CtaRow
                items={[
                  { label: "Request a Quotation", href: "/contact" },
                  { label: "Book an Inspection", href: "/contact" },
                  { label: "Talk to Our Inspection Team", href: "/contact" },
                ]}
              />
              <h3 className={styles.subsectionTitle}>{TRUST_HEADING}</h3>
              <ul className={styles.bulletList}>
                {TRUST_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{QUICK_BENEFITS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {QUICK_BENEFITS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Product inspection and quality monitoring at the factory"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTRO_LEAD}</p>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTRO_PARAGRAPH}</p>
              </div>
              <h3 className={styles.subsectionTitle}>{INTRO_IMPACT_HEADING}</h3>
              {INTRO_IMPACT.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{BUYERS_CALL_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BUYERS_CALL}</p>
              <h3 className={styles.subsectionTitle}>{WHO_PAGE_FOR_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_PAGE_FOR}</p>
            </section>

            <section id="what-is-tpi" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is Product Inspection & Quality Monitoring?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{THREE_THINGS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {THREE_THINGS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{THREE_THINGS_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{AQL_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AQL_INTRO}</p>
              <ul className={styles.bulletList}>
                {AQL_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>
                {AQL_CLOSING_BEFORE}{" "}
                <a href="https://www.iso.org/standard/30307.html" target="_blank" rel="noopener noreferrer">
                  ISO 2859-1 sampling standard
                </a>{" "}
                and its American equivalent{" "}
                <a href="https://asq.org/quality-resources/z14-z19" target="_blank" rel="noopener noreferrer">
                  ANSI/ASQ Z1.4
                </a>{" "}
                {AQL_CLOSING_AFTER}
              </p>
              <h3 className={styles.subsectionTitle}>{DEFECTS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DEFECTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "cls", header: "Defect class", scope: "row" },
                  { key: "meaning", header: "What it means" },
                  { key: "consequence", header: "Typical consequence" },
                ]}
                rows={DEFECT_ROWS}
                getRowKey={(row) => row.cls}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DEFECTS_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{VS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Type", scope: "row" },
                  { key: "answers", header: "What it answers" },
                  { key: "where", header: "Where it happens" },
                ]}
                rows={VS_ROWS}
                getRowKey={(row) => row.type}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VS_CLOSING}</p>
              <div className={styles.noteBox}>{EXPERT_NOTE}</div>
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Product Inspection & Quality Monitoring Matters</h2>
              {WHY_MATTERS_GROUPS.map((group) => (
                <div key={group.heading}>
                  <h3 className={styles.subsectionTitle}>{group.heading}</h3>
                  <ul className={styles.bulletList}>
                    {group.items.map((item) => (
                      <li key={item.title} className={styles.textJustify}>
                        <strong>{item.title}</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{FUTURE_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FUTURE_TEXT}</p>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs Product Inspection & Quality Monitoring?</h2>
              {WHO_NEEDS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{WHO_NEEDS_NOTE}</div>
            </section>

            <section id="services-offered" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Features of Our Product Inspection & Quality Monitoring Services
              </h2>
              <h3 className={styles.subsectionTitle}>{INSPECTION_TYPE_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FEATURES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Inspection type", scope: "row" },
                  { key: "when", header: "When it happens" },
                  { key: "answers", header: "What it answers" },
                ]}
                rows={INSPECTION_TYPE_ROWS}
                getRowKey={(row) => row.type}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FEATURES_STANDALONE}</p>
              {FEATURE_PARTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Benefits — Explained One by One</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_EXPLAINED.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>The Complete Product Inspection Process — Step by Step</h2>
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
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Objective:</strong> {step.objective}
                  </p>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Activities:</strong> {step.activities}
                  </p>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Timeline:</strong> {step.timeline}
                  </p>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Deliverables:</strong> {step.deliverables}
                  </p>
                  <div className={styles.noteBox}>
                    <strong>Expert tip:</strong> {step.tip}
                  </div>
                </div>
              ))}
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents & Information Required</h2>
              <div className={styles.noteBox}>{DOCUMENTS_NOTE}</div>
              <DataTable
                columns={[
                  { key: "document", header: "Document / Information", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility — Who Can Use This Service</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_PRACTICAL_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_PRACTICAL.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_CLOSING}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline — What to Expect and When</h2>
              <h3 className={styles.subsectionTitle}>{TIMELINE_HEADING}</h3>
              <ol className={styles.bulletList}>
                {TIMELINE_SEQUENCE.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ol>
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
              <h3 className={styles.subsectionTitle}>{TIMELINE_FACTORS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {TIMELINE_FACTORS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{DELAYS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {DELAYS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{TIMELINE_TIP}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors — What Actually Drives the Price</h2>
              {COST_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{COST_QUESTIONS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_QUESTIONS}</p>
              <h3 className={styles.subsectionTitle}>{COST_PRICED_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_PRICED}</p>
              <h3 className={styles.subsectionTitle}>{COST_TABLE_HEADING}</h3>
              <DataTable
                columns={[
                  { key: "factor", header: "Factor", scope: "row" },
                  { key: "effect", header: "Effect on cost" },
                  { key: "why", header: "Why" },
                ]}
                rows={COST_ROWS}
                getRowKey={(row) => row.factor}
              />
              <h3 className={styles.subsectionTitle}>{COST_INCLUDED_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INCLUDED}</p>
              <h3 className={styles.subsectionTitle}>{COST_CONTROL_HEADING}</h3>
              <ul className={styles.bulletList}>
                {COST_CONTROL.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{COST_WARNING}</div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges — and How to Solve Them</h2>
              {CHALLENGES.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Why it happens:</strong> {item.why}
                  </p>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Solution:</strong> {item.solution}
                  </p>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Best practice:</strong> {item.best}
                  </p>
                </div>
              ))}
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services Pvt Ltd</h2>
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_CHOOSE_CLOSING}</p>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries Served</h2>
              {INDUSTRIES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{VERTICALS_HEADING}</h3>
              <DataTable
                columns={[
                  { key: "vertical", header: "Industry Vertical", scope: "row" },
                  { key: "keyword", header: "Target Keyword" },
                ]}
                rows={VERTICAL_ROWS}
                getRowKey={(row) => row.vertical}
              />
            </section>

            <section id="regulatory" className={styles.section}>
              <h2 className={styles.sectionTitle}>Latest Updates & Regulatory Context</h2>
              {REGULATORY_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{REGULATORY_HEADING}</h3>
              <ul className={styles.bulletList}>
                {REGULATORY_LINKS.map((item) => (
                  <li key={item.href} className={styles.textJustify}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>{" "}
                    — {item.note}
                  </li>
                ))}
                <li className={styles.textJustify}>{REGULATORY_SECTOR}</li>
              </ul>
              <div className={styles.noteBox}>{REGULATORY_WARNING}</div>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes Importers Make</h2>
              <DataTable
                columns={[
                  { key: "mistake", header: "Mistake", scope: "row" },
                  { key: "impact", header: "Impact" },
                  { key: "avoid", header: "How to avoid it" },
                ]}
                rows={MISTAKES_ROWS}
                getRowKey={(row) => row.mistake}
              />
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips from Our Inspection Team</h2>
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
                Doing It Yourself vs a Consultant vs a Professional Agency
              </h2>
              <DataTable
                columns={[
                  { key: "factor", header: "Factor", scope: "row" },
                  { key: "diy", header: "Doing It Yourself" },
                  { key: "consultant", header: "Individual Consultant" },
                  { key: "agency", header: "Professional Inspection Agency" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.factor}
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
              <ul className={styles.bulletList}>
                {CTA_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <CtaRow
                items={[
                  { label: "Request a Quotation", href: "/contact" },
                  { label: "Book an Inspection", href: "/contact" },
                  { label: "Talk to Our Inspection Team", href: "/contact" },
                ]}
              />
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
                          link.href === PI_PAGE_PATH ? styles.servicesLinkActive : ""
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
