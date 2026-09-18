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
  GEM_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHY_COME_HEADING,
  WHY_COME_ITEMS,
  INTRO_PARAGRAPHS,
  INTRO_NOTE,
  WHAT_IS_PARAGRAPHS,
  WHAT_REGISTRATION_DOES_ROWS,
  WHO_RUNS_PARAGRAPHS,
  WHAT_IT_IS_NOT,
  WHY_REGISTER_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ROWS,
  WHO_NEEDS_CLOSING,
  TERMS_INTRO,
  TERMS_ROWS,
  BENEFITS_ITEMS,
  SERVICES_INCLUDE_ITEMS,
  SERVICES_INCLUDE_CLOSING,
  ELIGIBILITY_WHO_HEADING,
  ELIGIBILITY_WHO,
  ELIGIBILITY_BASIC_HEADING,
  ELIGIBILITY_BASIC,
  ELIGIBILITY_CARE_HEADING,
  ELIGIBILITY_CARE,
  ELIGIBILITY_NOTE,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_NOTE,
  TIMELINE_INTRO,
  TIMELINE_ROWS,
  TIMELINE_CLOSING,
  COST_INTRO,
  COST_DRIVES_HEADING,
  COST_FACTORS,
  COST_CLOSING,
  VALIDITY_PARAGRAPHS,
  VALIDITY_ITEMS,
  VALIDITY_CLOSING,
  RENEWAL_ATTENTION_HEADING,
  RENEWAL_ITEMS,
  RENEWAL_PARAGRAPH,
  RENEWAL_PRECAUTIONS_HEADING,
  RENEWAL_PRECAUTIONS,
  COMPLIANCE_INTRO,
  COMPLIANCE_INSTRUMENTS_HEADING,
  COMPLIANCE_INSTRUMENTS,
  COMPLIANCE_LOCAL_HEADING,
  COMPLIANCE_LOCAL,
  COMPLIANCE_BENEFITS_HEADING,
  COMPLIANCE_BENEFITS,
  COMPLIANCE_CONDUCT_HEADING,
  COMPLIANCE_CONDUCT,
  OEM_INTRO,
  OEM_STATUS_HEADING,
  OEM_STATUS,
  OEM_BRAND_HEADING,
  OEM_BRAND,
  OEM_RESELLER_HEADING,
  OEM_RESELLER,
  OEM_SEGMENTS_HEADING,
  OEM_SEGMENTS,
  VA_WHAT_HEADING,
  VA_WHAT,
  VA_WHO_HEADING,
  VA_WHO,
  VA_DO_HEADING,
  VA_DO,
  VA_PRACTICAL_HEADING,
  VA_PRACTICAL,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_ITEMS,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_ROWS,
  INDUSTRIES_CLOSING,
  PERSONAS_INTRO,
  PERSONAS_ROWS,
  PERSONAS_CLOSING,
  LOCATIONS_ROWS,
  LOCATIONS_CLOSING,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  EXPERT_TIPS_CLOSING,
  TENDERING_ROWS,
  SELLER_VS_OEM_ROWS,
  COMPARISON_NOTE,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPHS,
  CTA_TAGLINE,
  type TableRow,
} from "../data/gemContent";

const GEM_PAGE_PATH = "/services/gem-registration";

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
      idPrefix="gem"
      defaultService="GeM Portal Registration"
      serviceOptions={[
        "GeM Portal Registration",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "EPR Registration",
        "Other",
      ]}
      successText="Our GeM registration expert will contact you within one business day."
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

export function GemPageContent() {
  const [activeId, setActiveId] = useState(GEM_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = GEM_TOC.map((item) => item.id);
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
              {GEM_TOC.map((item, i) => (
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
              <h3 className={styles.subsectionTitle}>{WHY_COME_HEADING}</h3>
              <ul className={styles.bulletList}>
                {WHY_COME_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to a GeM registration expert
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Send documents for GeM registration review
                </Link>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="GeM portal registration support for sellers, manufacturers and service providers"
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
            </section>

            <section id="what-is-gem" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is GeM Registration?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>What registration actually does</h3>
              <DataTable
                columns={[
                  { key: "purpose", header: "Purpose", scope: "row" },
                  { key: "means", header: "What it means for your business" },
                ]}
                rows={WHAT_REGISTRATION_DOES_ROWS}
                getRowKey={(row) => row.purpose}
              />
              <h3 className={styles.subsectionTitle}>Who runs the platform</h3>
              {WHO_RUNS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>What it is not</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IT_IS_NOT}</p>
            </section>

            <section id="why-register" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Register on GeM Portal?</h2>
              {WHY_REGISTER_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs GeM Registration?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "who", header: "Who you are", scope: "row" },
                  { key: "why", header: "Why you register" },
                  { key: "extra", header: "What needs extra attention" },
                ]}
                rows={WHO_NEEDS_ROWS}
                getRowKey={(row) => row.who}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="key-terms" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key GeM Terms You Should Know</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TERMS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "term", header: "Term", scope: "row" },
                  { key: "meaning", header: "What it means" },
                ]}
                rows={TERMS_ROWS}
                getRowKey={(row) => row.term}
              />
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Registering Through Us</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="services-include" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Our GeM Registration Services Include</h2>
              <ul className={styles.bulletList}>
                {SERVICES_INCLUDE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SERVICES_INCLUDE_CLOSING}</p>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Registration Eligibility</h2>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_WHO_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
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
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_CARE_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_CARE.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for GeM Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                  { key: "notes", header: "Notes" },
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
              <h2 className={styles.sectionTitle}>Step-by-Step GeM Registration Process</h2>
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
              <h2 className={styles.sectionTitle}>GeM Registration Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "stage", header: "Stage", scope: "row" },
                  { key: "pace", header: "What determines the pace" },
                ]}
                rows={TIMELINE_ROWS}
                getRowKey={(row) => row.stage}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_CLOSING}</p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Registration Fees and Cost Factors</h2>
              {COST_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{COST_DRIVES_HEADING}</h3>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              {COST_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Registration Validity</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
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
              <h2 className={styles.sectionTitle}>GeM Registration Renewal</h2>
              <h3 className={styles.subsectionTitle}>{RENEWAL_ATTENTION_HEADING}</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PARAGRAPH}</p>
              <h3 className={styles.subsectionTitle}>{RENEWAL_PRECAUTIONS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_PRECAUTIONS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="compliance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Compliance, Rules and Policy Every GeM Seller Should Know</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPLIANCE_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{COMPLIANCE_INSTRUMENTS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {COMPLIANCE_INSTRUMENTS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{COMPLIANCE_LOCAL_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPLIANCE_LOCAL}</p>
              <h3 className={styles.subsectionTitle}>{COMPLIANCE_BENEFITS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPLIANCE_BENEFITS}</p>
              <h3 className={styles.subsectionTitle}>{COMPLIANCE_CONDUCT_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPLIANCE_CONDUCT}</p>
            </section>

            <section id="oem" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM OEM Registration and Brand Approval</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OEM_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{OEM_STATUS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OEM_STATUS}</p>
              <h3 className={styles.subsectionTitle}>{OEM_BRAND_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OEM_BRAND}</p>
              <h3 className={styles.subsectionTitle}>{OEM_RESELLER_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OEM_RESELLER}</p>
              <h3 className={styles.subsectionTitle}>{OEM_SEGMENTS_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OEM_SEGMENTS}</p>
            </section>

            <section id="vendor-assessment" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Vendor Assessment</h2>
              <h3 className={styles.subsectionTitle}>{VA_WHAT_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VA_WHAT}</p>
              <h3 className={styles.subsectionTitle}>{VA_WHO_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VA_WHO}</p>
              <h3 className={styles.subsectionTitle}>{VA_DO_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VA_DO}</p>
              <h3 className={styles.subsectionTitle}>{VA_PRACTICAL_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VA_PRACTICAL}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in GeM Registration</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              {HOW_WE_HELP_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Us</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries and Business Types We Serve</h2>
              <DataTable
                columns={[
                  { key: "segment", header: "Segment", scope: "row" },
                  { key: "supply", header: "Typical GeM supply" },
                  { key: "compliance", header: "Compliance usually involved" },
                ]}
                rows={INDUSTRIES_ROWS}
                getRowKey={(row) => row.segment}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="personas" className={styles.section}>
              <h2 className={styles.sectionTitle}>Personas and Locations We Cover</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PERSONAS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "persona", header: "Persona", scope: "row" },
                  { key: "difference", header: "What is different about their registration" },
                  { key: "page", header: "Dedicated Page" },
                ]}
                rows={PERSONAS_ROWS}
                getRowKey={(row) => row.persona}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PERSONAS_CLOSING}</p>
              <DataTable
                columns={[
                  { key: "location", header: "Location", scope: "row" },
                  { key: "coverage", header: "Coverage" },
                  { key: "page", header: "Dedicated Page" },
                ]}
                rows={LOCATIONS_ROWS}
                getRowKey={(row) => row.location}
              />
              {LOCATIONS_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes and How to Avoid Them</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for New GeM Sellers</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{EXPERT_TIPS_CLOSING}</p>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Registration vs Traditional Government Tendering</h2>
              <DataTable
                columns={[
                  { key: "parameter", header: "Parameter", scope: "row" },
                  { key: "gem", header: "GeM registration route" },
                  { key: "traditional", header: "Traditional tendering route" },
                ]}
                rows={TENDERING_ROWS}
                getRowKey={(row) => row.parameter}
              />
              <h3 className={styles.subsectionTitle}>GeM Seller vs GeM OEM Registration</h3>
              <DataTable
                columns={[
                  { key: "parameter", header: "Parameter", scope: "row" },
                  { key: "seller", header: "Seller / reseller" },
                  { key: "oem", header: "OEM" },
                ]}
                rows={SELLER_VS_OEM_ROWS}
                getRowKey={(row) => `oem-${row.parameter}`}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_NOTE}</p>
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_TAGLINE}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to a GeM registration expert
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Send documents for GeM registration review
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Request GeM registration quote
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
                          link.href === GEM_PAGE_PATH ? styles.servicesLinkActive : ""
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
