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
  LMPC_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_PARAGRAPHS,
  AT_A_GLANCE_HEADING,
  AT_A_GLANCE,
  WHAT_IS_PARAGRAPHS,
  QUICK_DEFINITION_HEADING,
  QUICK_DEFINITION,
  WHAT_IS_CLOSING,
  WHY_INTRO,
  WHY_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ROWS,
  WHO_NEEDS_NOTE,
  BENEFITS_INTRO,
  BENEFITS_ITEMS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_WHO,
  ELIGIBILITY_PARAGRAPHS,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_NOTE,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_CLOSING,
  LABELS_INTRO,
  LABEL_ROWS,
  LABELS_CLOSING,
  ECOMMERCE_NOTE,
  LABELS_NOTE,
  TIMELINE_INTRO,
  TIMELINE_ITEMS,
  TIMELINE_NOTE,
  TIMELINE_CLOSING,
  COST_INTRO,
  COST_GOVT_HEADING,
  COST_GOVT,
  COST_PROF_HEADING,
  COST_PROF,
  COST_ITEMS,
  COST_CLOSING,
  VALIDITY_PARAGRAPHS,
  VALIDITY_NOTE,
  RENEWAL_HEADING,
  RENEWAL_PARAGRAPHS,
  AMENDMENT_HEADING,
  AMENDMENT_INTRO,
  AMENDMENT_ITEMS,
  AMENDMENT_CLOSING,
  AMENDMENT_NOTE,
  EXEMPTIONS_INTRO,
  EXEMPTIONS_ITEMS,
  EXEMPTIONS_CLOSING,
  EXEMPTIONS_NOTE,
  INDUSTRIES_INTRO,
  INDUSTRY_ROWS,
  INDUSTRIES_CLOSING,
  PENALTIES_INTRO,
  PENALTIES_ITEMS,
  PENALTIES_NOTE,
  CHALLENGES_INTRO,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ROWS,
  WHY_CHOOSE_INTRO,
  WHY_CHOOSE_ITEMS,
  WHY_CHOOSE_NOTE,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  COMPARISON_INTRO,
  CENTRAL_STATE_HEADING,
  CENTRAL_STATE_ROWS,
  VS_BIS_HEADING,
  VS_BIS_INTRO,
  VS_BIS_ROWS,
  VS_FSSAI_HEADING,
  VS_FSSAI,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPHS,
  CTA_READY_HEADING,
  CTA_READY_ITEMS,
  type TableRow,
} from "../data/lmpcContent";

const LMPC_PAGE_PATH = "/services/lmpc-registration";

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
      idPrefix="lmpc"
      defaultService="LMPC Registration"
      serviceOptions={[
        "LMPC Registration",
        "BIS CRS Registration",
        "BEE Certification",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our LMPC registration expert will contact you within one business day."
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

const HERO_CTAS = [
  { label: "Request a Compliance Callback", href: "/contact" },
  { label: "Talk to Our LMPC Expert", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Request a Compliance Callback", href: "/contact" },
  { label: "Talk to Our LMPC Expert", href: "/contact" },
  { label: "Get a Quotation", href: "/contact" },
];

export function LmpcPageContent() {
  const [activeId, setActiveId] = useState(LMPC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = LMPC_TOC.map((item) => item.id);
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
              {LMPC_TOC.map((item, i) => (
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
              {BANNER_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{AT_A_GLANCE_HEADING}</h3>
              <ul className={styles.bulletList}>
                {AT_A_GLANCE.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <CtaRow items={HERO_CTAS} />
                </div>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is LMPC Registration?</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="LMPC registration support for importers, manufacturers and packers in India"
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
              <div className={styles.noteBox}>
                <strong>{QUICK_DEFINITION_HEADING}:</strong> {QUICK_DEFINITION}
              </div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_CLOSING}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is LMPC Registration Important?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO}</p>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs LMPC Registration?</h2>
              {WHO_NEEDS_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <DataTable
                columns={[
                  { key: "type", header: "Business Type", scope: "row" },
                  { key: "why", header: "Why LMPC Registration Is Required" },
                  { key: "route", header: "Registration Route" },
                ]}
                rows={WHO_NEEDS_ROWS}
                getRowKey={(row) => row.type}
              />
              <div className={styles.noteBox}>{WHO_NEEDS_NOTE}</div>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of LMPC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BENEFITS_INTRO}</p>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for LMPC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              {ELIGIBILITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for LMPC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "notes", header: "Mandatory / Additional Notes" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <div className={styles.noteBox}>{DOCUMENTS_NOTE}</div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration Process: Step by Step</h2>
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_CLOSING}</p>
            </section>

            <section id="label-declarations" className={styles.section}>
              <h2 className={styles.sectionTitle}>Mandatory Label Declarations Under LMPC</h2>
              {LABELS_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <DataTable
                columns={[
                  { key: "declaration", header: "Declaration", scope: "row" },
                  { key: "where", header: "Where It Must Appear" },
                  { key: "rules", header: "Key Rules to Note" },
                ]}
                rows={LABEL_ROWS}
                getRowKey={(row) => row.declaration}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LABELS_CLOSING}</p>
              <div className={styles.noteBox}>
                <strong>E-commerce Note:</strong> {ECOMMERCE_NOTE}
              </div>
              <div className={styles.noteBox}>{LABELS_NOTE}</div>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <ul className={styles.bulletList}>
                {TIMELINE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                </li>
                ))}
              </ul>
              <div className={styles.noteBox}>
                <strong>Important:</strong> {TIMELINE_NOTE}
              </div>
              {TIMELINE_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration Cost & Government Fees</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{COST_GOVT_HEADING}</h3>
              {COST_GOVT.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{COST_PROF_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_PROF}</p>
              <ul className={styles.bulletList}>
                {COST_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Certificate Validity</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>
                <strong>Practical Advice:</strong> {VALIDITY_NOTE}
              </div>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Certificate Renewal & Amendment</h2>
              <h3 className={styles.subsectionTitle}>{RENEWAL_HEADING}</h3>
              {RENEWAL_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{AMENDMENT_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AMENDMENT_INTRO}</p>
              <ul className={styles.bulletList}>
                {AMENDMENT_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AMENDMENT_CLOSING}</p>
              <div className={styles.noteBox}>
                <strong>Important:</strong> {AMENDMENT_NOTE}
              </div>
            </section>

            <section id="exemptions" className={styles.section}>
              <h2 className={styles.sectionTitle}>Exemptions Under the Packaged Commodities Rules</h2>
              {EXEMPTIONS_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {EXEMPTIONS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{EXEMPTIONS_CLOSING}</p>
              <div className={styles.noteBox}>{EXEMPTIONS_NOTE}</div>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industry Categories Covered Under LMPC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "category", header: "Industry Category", scope: "row" },
                  { key: "products", header: "Example Products" },
                  { key: "page", header: "Dedicated Page" },
                ]}
                rows={INDUSTRY_ROWS}
                getRowKey={(row) => row.category}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Non-Compliance</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PENALTIES_INTRO}</p>
              <ul className={styles.bulletList}>
                {PENALTIES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{PENALTIES_NOTE}</div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in LMPC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHALLENGES_INTRO}</p>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                How Ornate Quality Service Pvt. Ltd. Helps With LMPC Registration
              </h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <DataTable
                columns={[
                  { key: "what", header: "What We Do", scope: "row" },
                  { key: "why", header: "Why It Matters for You" },
                ]}
                rows={HOW_WE_HELP_ROWS}
                getRowKey={(row) => row.what}
              />
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why Choose Ornate Quality Service Pvt. Ltd. for LMPC Registration?
              </h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_CHOOSE_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>
                <strong>Important:</strong> {WHY_CHOOSE_NOTE}
              </div>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common LMPC Registration Mistakes to Avoid</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for LMPC Compliance</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item, index) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration vs Other Indian Approvals</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{CENTRAL_STATE_HEADING}</h3>
              <DataTable
                columns={[
                  { key: "central", header: "Central LMPC Registration" },
                  { key: "state", header: "State LMPC Registration" },
                ]}
                rows={CENTRAL_STATE_ROWS}
                getRowKey={(row, index) => `${row.central}-${index}`}
              />
              <h3 className={styles.subsectionTitle}>{VS_BIS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VS_BIS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "basis", header: "Basis", scope: "row" },
                  { key: "lmpc", header: "LMPC Registration" },
                  { key: "bis", header: "BIS Certification" },
                ]}
                rows={VS_BIS_ROWS}
                getRowKey={(row) => row.basis}
              />
              <h3 className={styles.subsectionTitle}>{VS_FSSAI_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VS_FSSAI}</p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — LMPC Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{CTA_HEADING}</h2>
              {CTA_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{CTA_READY_HEADING}</h3>
              <ul className={styles.bulletList}>
                {CTA_READY_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
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
                          link.href === LMPC_PAGE_PATH ? styles.servicesLinkActive : ""
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
