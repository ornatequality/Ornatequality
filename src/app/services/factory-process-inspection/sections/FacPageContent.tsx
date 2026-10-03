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
  FAC_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHAT_YOU_GET,
  INTRO_TITLE,
  INTRO_PARAGRAPHS,
  INTRO_WHEN_INTRO,
  INTRO_WHEN_ITEMS,
  INTRO_CLOSING,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_ROWS,
  PROCESS_VS_AUDIT_TITLE,
  PROCESS_VS_AUDIT,
  PURPOSE_TITLE,
  PURPOSE_INTRO,
  PURPOSE_ITEMS,
  WHY_INDUSTRY_TITLE,
  WHY_INDUSTRY,
  WHAT_IS_NOTE,
  WHY_INTRO,
  WHY_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ROWS,
  WHO_NEEDS_BLOCKS,
  BENEFITS_ITEMS,
  FEATURES_ITEMS,
  GLANCE_INTRO,
  GLANCE_ROWS,
  AUDIT_TYPES_INTRO,
  AUDIT_TYPE_GROUPS,
  AUDIT_TYPES_NOTE,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_QUALIFIES_INTRO,
  ELIGIBILITY_QUALIFIES,
  ELIGIBILITY_RIGHT_INTRO,
  ELIGIBILITY_RIGHT,
  ELIGIBILITY_OTHER_INTRO,
  ELIGIBILITY_OTHER,
  ELIGIBILITY_BASIC_INTRO,
  ELIGIBILITY_BASIC,
  ELIGIBILITY_NOTE,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_NOTE,
  PROCESS_INTRO,
  PROCESS_STEPS,
  CAPACITY_TITLE,
  CAPACITY_PARAGRAPHS,
  TIMELINE_INTRO,
  TIMELINE_STAGES_INTRO,
  TIMELINE_ITEMS,
  TIMELINE_URGENT_TITLE,
  TIMELINE_URGENT,
  TIMELINE_NOTE,
  COST_INTRO,
  COST_ROWS,
  COST_QUESTIONS_INTRO,
  COST_QUESTIONS,
  COST_CLOSING,
  COST_NOTE,
  VALIDITY_PARAGRAPHS,
  VALIDITY_DECIDED_INTRO,
  VALIDITY_ITEMS,
  VALIDITY_CLOSING,
  RENEWAL_INTRO,
  RENEWAL_WHEN_INTRO,
  RENEWAL_WHEN,
  RENEWAL_PROCESS_TITLE,
  RENEWAL_PROCESS,
  RENEWAL_PRECAUTIONS_INTRO,
  RENEWAL_PRECAUTIONS,
  CHALLENGES_INTRO,
  CHALLENGES_ITEMS,
  HELP_INTRO,
  HELP_BUYERS_TITLE,
  HELP_BUYERS,
  HELP_CHOOSE_TITLE,
  HELP_CHOOSE,
  HELP_MFG_TITLE,
  HELP_MFG,
  HELP_NOTE,
  WHY_INTRO_CHOOSE,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_INTRO,
  INDUSTRY_BLOCKS,
  PRODUCTS_INTRO_TITLE,
  PRODUCTS_INTRO,
  PRODUCTS_ROWS,
  PRODUCTS_NOTE,
  LOCATIONS_INTRO,
  LOCATION_ROWS,
  LOCATIONS_CLOSING,
  MISTAKES_ROWS,
  TIPS_BUYERS_TITLE,
  TIPS_BUYERS,
  TIPS_MFG_TITLE,
  TIPS_MFG,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  FORMATS_TITLE,
  FORMAT_ROWS,
  COMPARISON_CLOSING,
  TERMS_INTRO,
  TERMS_ROWS,
  TERMS_NOTE,
  FAQ_ITEMS,
  STARTING_INTRO,
  STARTING_ROWS,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  type TableRow,
} from "../data/facContent";

const FAC_PAGE_PATH = "/services/factory-process-inspection";

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
      idPrefix="fac"
      defaultService="Factory & Process Inspection"
      serviceOptions={[
        "Factory & Process Inspection",
        "Pre-Production Inspection",
        "Third Party Inspection",
        "Container Loading Inspection",
        "Other",
      ]}
      successText="Our factory audit expert will contact you within one business day."
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
  { label: "Request Factory Audit Quote", href: "/contact" },
  { label: "Schedule Factory Audit", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Request Factory Audit Quote", href: "/contact" },
  { label: "Schedule Factory Audit", href: "/contact" },
  { label: "Factory Audit Enquiry", href: "/contact" },
];

export function FacPageContent() {
  const [activeId, setActiveId] = useState(FAC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = FAC_TOC.map((item) => item.id);
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
              {FAC_TOC.map((item, i) => (
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
                    alt="Factory and process inspection support for supplier audits in India"
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTRO_WHEN_INTRO}</p>
              <ul className={styles.bulletList}>
                {INTRO_WHEN_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              {INTRO_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is Factory & Process Inspection?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <DataTable
                columns={[
                  { key: "component", header: "Audit component", scope: "row" },
                  { key: "checks", header: "What the auditor checks" },
                  { key: "learn", header: "What you learn" },
                ]}
                rows={WHAT_IS_ROWS}
                getRowKey={(row) => row.component}
              />
              <h3 className={styles.subsectionTitle}>{PROCESS_VS_AUDIT_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_VS_AUDIT}</p>
              <h3 className={styles.subsectionTitle}>{PURPOSE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PURPOSE_INTRO}</p>
              <ul className={styles.bulletList}>
                {PURPOSE_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{WHY_INDUSTRY_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INDUSTRY}</p>
              <div className={styles.noteBox}>{WHAT_IS_NOTE}</div>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is Factory & Process Inspection Important?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO}</p>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs a Factory & Process Inspection?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "who", header: "Who you are", scope: "row" },
                  { key: "situation", header: "Typical situation" },
                  { key: "gives", header: "What the audit gives you" },
                ]}
                rows={WHO_NEEDS_ROWS}
                getRowKey={(row) => row.who}
              />
              {WHO_NEEDS_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className={styles.subsectionTitle}>{block.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{block.text}</p>
                </div>
              ))}
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Factory & Process Inspection</h2>
              {BENEFITS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our Factory Audit Services</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="services-glance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Factory Audit Services at a Glance</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GLANCE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "service", header: "Service", scope: "row" },
                  { key: "covers", header: "What it covers" },
                  { key: "bestFor", header: "Best for" },
                ]}
                rows={GLANCE_ROWS}
                getRowKey={(row) => row.service}
              />
            </section>

            <section id="audit-types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Audit Types and Standards We Cover</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{AUDIT_TYPES_INTRO}</p>
              {AUDIT_TYPE_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className={styles.subsectionTitle}>{group.title}</h3>
                  <ul className={styles.bulletList}>
                    {group.items.map((item) => (
                      <li key={item.slice(0, 48)} className={styles.textJustify}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className={styles.noteBox}>{AUDIT_TYPES_NOTE}</div>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility: Who Can Book a Factory Audit?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_QUALIFIES_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_QUALIFIES.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_RIGHT_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_RIGHT.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_OTHER_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_OTHER.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_BASIC_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_BASIC.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for a Factory Audit</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                  { key: "notes", header: "Additional notes" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <div className={styles.noteBox}>{DOCUMENTS_NOTE}</div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step Factory Audit Process</h2>
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
              <h3 className={styles.subsectionTitle}>{CAPACITY_TITLE}</h3>
              {CAPACITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Factory Audit Timeline: What to Expect</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_STAGES_INTRO}</p>
              <ul className={styles.bulletList}>
                {TIMELINE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{TIMELINE_URGENT_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_URGENT}</p>
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Factory Audit Cost in India: What Affects the Price</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <DataTable
                columns={[
                  { key: "factor", header: "Cost factor", scope: "row" },
                  { key: "why", header: "Why it changes the cost" },
                  { key: "keep", header: "How to keep cost in check" },
                ]}
                rows={COST_ROWS}
                getRowKey={(row) => row.factor}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_QUESTIONS_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_QUESTIONS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of a Factory Audit</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_DECIDED_INTRO}</p>
              <ul className={styles.bulletList}>
                {VALIDITY_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_CLOSING}</p>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Re-Audits and Renewal</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{RENEWAL_WHEN_INTRO}</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_WHEN.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{RENEWAL_PROCESS_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PROCESS}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PRECAUTIONS_INTRO}</p>
              <div className={styles.noteBox}>
                <ul className={styles.bulletList}>
                  {RENEWAL_PRECAUTIONS.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in Factory Audits</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHALLENGES_INTRO}</p>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How Ornate Quality Service Pvt Ltd Helps</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HELP_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{HELP_BUYERS_TITLE}</h3>
              <ul className={styles.bulletList}>
                {HELP_BUYERS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{HELP_CHOOSE_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HELP_CHOOSE}</p>
              <h3 className={styles.subsectionTitle}>{HELP_MFG_TITLE}</h3>
              <ul className={styles.bulletList}>
                {HELP_MFG.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HELP_NOTE}</div>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Us for Factory & Process Inspection</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO_CHOOSE}</p>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries Served</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              {INDUSTRY_BLOCKS.map((block) => (
                <div key={block.title}>
                  <h3 className={styles.subsectionTitle}>{block.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{block.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{PRODUCTS_INTRO_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "vertical", header: "Industry vertical" },
                  { key: "group", header: "Product group", scope: "row" },
                  { key: "focus", header: "Audit focus" },
                  { key: "emphasis", header: "Typical audit emphasis" },
                  { key: "audience", header: "Target audience" },
                  { key: "page", header: "Dedicated product page" },
                ]}
                rows={PRODUCTS_ROWS}
                getRowKey={(row, index) => `${row.focus}-${index}`}
              />
              <div className={styles.noteBox}>{PRODUCTS_NOTE}</div>
            </section>

            <section id="locations" className={styles.section}>
              <h2 className={styles.sectionTitle}>Where We Conduct Factory Audits</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "location", header: "Location", scope: "row" },
                  { key: "industries", header: "Common industries (examples)" },
                ]}
                rows={LOCATION_ROWS}
                getRowKey={(row) => row.location}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes and How to Avoid Them</h2>
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
              <h2 className={styles.sectionTitle}>Expert Tips from Our Audit Team</h2>
              <h3 className={styles.subsectionTitle}>{TIPS_BUYERS_TITLE}</h3>
              <ul className={styles.bulletList}>
                {TIPS_BUYERS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{TIPS_MFG_TITLE}</h3>
              <ul className={styles.bulletList}>
                {TIPS_MFG.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>Factory Audit vs Other Checks: A Quick Comparison</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "point", header: "Point of comparison", scope: "row" },
                  { key: "factory", header: "Factory & process inspection" },
                  { key: "product", header: "Product inspection (pre-production, during production, final random)" },
                  { key: "cert", header: "Certification audit (for example, ISO 9001)" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.point}
              />
              <h3 className={styles.subsectionTitle}>{FORMATS_TITLE}</h3>
              <DataTable
                columns={[
                  { key: "format", header: "Format", scope: "row" },
                  { key: "works", header: "How it works" },
                  { key: "strengths", header: "Strengths" },
                  { key: "limits", header: "Limits" },
                ]}
                rows={FORMAT_ROWS}
                getRowKey={(row) => row.format}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_CLOSING}</p>
            </section>

            <section id="terms" className={styles.section}>
              <h2 className={styles.sectionTitle}>Factory Audit Terms Explained</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TERMS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "term", header: "Term", scope: "row" },
                  { key: "meaning", header: "What it means" },
                  { key: "why", header: "Why auditors check it" },
                ]}
                rows={TERMS_ROWS}
                getRowKey={(row) => row.term}
              />
              <div className={styles.noteBox}>{TERMS_NOTE}</div>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="starting-point" className={styles.section}>
              <h2 className={styles.sectionTitle}>Choose Your Starting Point</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STARTING_INTRO}</p>
              <div className={styles.tableScroll}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th scope="col">Your goal</th>
                      <th scope="col">Recommended service</th>
                      <th scope="col">Next step</th>
                    </tr>
                  </thead>
                  <tbody>
                    {STARTING_ROWS.map((row) => (
                      <tr key={row.goal}>
                        <th scope="row">{row.goal}</th>
                        <td>{row.service}</td>
                        <td>
                          <Link href="/contact">{row.next}</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="get-started" className={styles.section}>
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
                          link.href === FAC_PAGE_PATH ? styles.servicesLinkActive : ""
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
