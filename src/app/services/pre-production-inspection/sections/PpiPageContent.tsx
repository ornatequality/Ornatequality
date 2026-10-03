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
  PPI_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHAT_YOU_GET,
  INTRO_PARAGRAPHS,
  INTRO_WHEN_INTRO,
  INTRO_WHEN_ITEMS,
  INTRO_CLOSING,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_VERIFY_INTRO,
  WHAT_IS_VERIFY_ITEMS,
  WHAT_IS_CLOSING,
  WHY_IMPORTANT_ITEMS,
  WHO_NEEDS_TYPE_INTRO,
  WHO_NEEDS_TYPES,
  WHO_NEEDS_INDUSTRY,
  WHO_NEEDS_CLOSING,
  BENEFITS_ROWS,
  BENEFITS_CLOSING,
  FEATURES_ITEMS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_FIT_INTRO,
  ELIGIBILITY_FIT_ITEMS,
  ELIGIBILITY_NOTES_INTRO,
  ELIGIBILITY_NOTES,
  DOCUMENTS_ROWS,
  DOCUMENTS_NOTE,
  PROCESS_STEPS,
  TIMELINE_INTRO,
  TIMELINE_ITEMS,
  TIMELINE_CLOSING,
  COST_INTRO,
  COST_ITEMS,
  COST_NOTE,
  VALIDITY_PARAGRAPHS,
  RENEWAL_PARAGRAPHS,
  RENEWAL_PRECAUTIONS_INTRO,
  RENEWAL_PRECAUTIONS,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_NOTE,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_ROWS,
  INDUSTRIES_CLOSING,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  COMPARISON_NOTE,
  COMPARISON_CLOSING,
  FAQ_ITEMS,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  type TableRow,
} from "../data/ppiContent";

const PPI_PAGE_PATH = "/services/pre-production-inspection";

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
      idPrefix="ppi"
      defaultService="Pre-Production Inspection"
      serviceOptions={[
        "Pre-Production Inspection",
        "Third Party Inspection",
        "Container Loading Inspection",
        "BIS CRS Registration",
        "Other",
      ]}
      successText="Our quality inspection expert will contact you within one business day."
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

const PAGE_CTAS = [
  { label: "Book a Pre-Production Inspection", href: "/contact" },
  { label: "Request an Inspection Quote", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Book a Pre-Production Inspection", href: "/contact" },
  { label: "Request an Inspection Quote", href: "/contact" },
  { label: "Talk to Our Quality Assurance Team", href: "/contact" },
];

export function PpiPageContent() {
  const [activeId, setActiveId] = useState(PPI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = PPI_TOC.map((item) => item.id);
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
              {PPI_TOC.map((item, i) => (
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
                <div className={styles.highlightsTitle}>What you get:</div>
                <ul className={styles.bulletList}>
                  {WHAT_YOU_GET.map((item) => (
                    <li key={item} className={styles.textJustify}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CtaRow items={PAGE_CTAS} />
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Pre-production inspection support for factory quality checks in India"
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTRO_CLOSING}</p>
            </section>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is Pre-Production Inspection (PPI)?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_VERIFY_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHAT_IS_VERIFY_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title} —</strong> {item.text}
                  </li>
                ))}
              </ul>
              {WHAT_IS_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is Pre-Production Inspection Important?</h2>
              <ul className={styles.bulletList}>
                {WHY_IMPORTANT_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs Pre-Production Inspection?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_TYPE_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_TYPES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title} —</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INDUSTRY}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits</h2>
              <DataTable
                columns={[
                  { key: "benefit", header: "Benefit", scope: "row" },
                  { key: "meaning", header: "What It Means for You" },
                ]}
                rows={BENEFITS_ROWS}
                getRowKey={(row) => row.benefit}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BENEFITS_CLOSING}</p>
            </section>

            <section id="features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_FIT_INTRO}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_FIT_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_NOTES_INTRO}</p>
              <div className={styles.noteBox}>
                <ul className={styles.bulletList}>
                  {ELIGIBILITY_NOTES.map((item) => (
                    <li key={item.slice(0, 48)}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required</h2>
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
              <div className={styles.noteBox}>{DOCUMENTS_NOTE}</div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step Process</h2>
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
              <h2 className={styles.sectionTitle}>Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <ul className={styles.bulletList}>
                {TIMELINE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title} —</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_CLOSING}</p>
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
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal</h2>
              {RENEWAL_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HOW_WE_HELP_NOTE}</div>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Us</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries Served</h2>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry", scope: "row" },
                  { key: "why", header: "Why Pre-Production Inspection Matters Here" },
                ]}
                rows={INDUSTRIES_ROWS}
                getRowKey={(row) => row.industry}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes</h2>
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
                {EXPERT_TIPS.map((item, index) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>How PPI Compares to Other Inspection Types</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Inspection Type", scope: "row" },
                  { key: "when", header: "When It Happens" },
                  { key: "focus", header: "What It Focuses On" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.type}
              />
              <div className={styles.noteBox}>{COMPARISON_NOTE}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_CLOSING}</p>
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
                          link.href === PPI_PAGE_PATH ? styles.servicesLinkActive : ""
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
