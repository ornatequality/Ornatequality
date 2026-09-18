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
  BIS_CRS_TOC,
  WHY_ORNATE_ITEMS,
  LATEST_NOTIFICATIONS,
  OUR_SERVICES_LINKS,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  HERO_ITEMS,
  INTRO_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_ITEMS,
  WHY_IMPORTANT_INTRO,
  WHY_IMPORTANT_ITEMS,
  GUIDELINES_NOTE,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  BENEFITS_ITEMS,
  FEATURES_ITEMS,
  PRODUCTS_INTRO,
  PRODUCTS_NOTE,
  PRODUCTS_ROWS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_ITEMS,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_NOTE,
  PROCESS_STEPS,
  PROCESS_CLOSING,
  TIMELINE_PARAGRAPH,
  TIMELINE_NOTE,
  COST_INTRO,
  COST_FACTORS,
  COST_CLOSING,
  COST_NOTE,
  VALIDITY_PARAGRAPH,
  RENEWAL_PARAGRAPH,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  WHY_CHOOSE_ITEMS,
  WHY_CHOOSE_NOTE,
  INDUSTRIES_ITEMS,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPH,
  type TableRow,
} from "../data/bisCrsContent";

const BIS_CRS_PAGE_PATH = "/services/bis-crs-registration";

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
      idPrefix="bis"
      defaultService="BIS CRS Registration"
      serviceOptions={[
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "FMCS Certification",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our BIS expert will contact you within one business day."
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

export function BisCrsPageContent() {
  const [activeId, setActiveId] = useState(BIS_CRS_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BIS_CRS_TOC.map((item) => item.id);
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
              {BIS_CRS_TOC.map((item, i) => (
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
              <ul className={styles.bulletList}>
                {HERO_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Start Your BIS CRS Registration
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Talk to a BIS CRS Registration Expert
                </Link>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="BIS CRS registration support for electronics, IT and solar products"
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

            <section id="what-is-bis" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is BIS CRS Registration</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {WHAT_IS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why BIS CRS Registration Is Important</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_IMPORTANT_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHY_IMPORTANT_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs BIS CRS Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Working With Us</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="key-features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our BIS CRS Registration Service</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products Covered Under BIS CRS Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_INTRO}</p>
              <div className={styles.noteBox}>{PRODUCTS_NOTE}</div>
              <DataTable
                columns={[
                  { key: "num", header: "#" },
                  { key: "product", header: "Product Name", scope: "row" },
                  { key: "isCode", header: "Applicable IS Number" },
                  { key: "mandatory", header: "Mandatory (CRS)" },
                  { key: "audience", header: "Target Audience" },
                  { key: "page", header: "Dedicated Product Page" },
                ]}
                rows={PRODUCTS_ROWS}
                getRowKey={(row) => row.product}
              />
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility Criteria</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "category", header: "Document Category", scope: "row" },
                  { key: "covers", header: "What It Covers" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.category}
              />
              <div className={styles.noteBox}>{DOCUMENTS_NOTE}</div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step BIS CRS Registration Process</h2>
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

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS CRS Registration Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_PARAGRAPH}</p>
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of BIS CRS Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_PARAGRAPH}</p>
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal of BIS CRS Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PARAGRAPH}</p>
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in BIS CRS Registration</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help You</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{WHY_CHOOSE_NOTE}</div>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <ul className={styles.bulletList}>
                {INDUSTRIES_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for a Smooth BIS CRS Registration</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS CRS vs Other Certifications</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "differs", header: "How They Generally Differ" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.comparison}
              />
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{CTA_HEADING}</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_PARAGRAPH}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Start Your BIS CRS Registration
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Request a BIS CRS Registration Callback
                </Link>
                <a href="#documents" className={styles.ctaBtnSecondary}>
                  Download the BIS CRS Registration Checklist
                </a>
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
                          link.href === BIS_CRS_PAGE_PATH ? styles.servicesLinkActive : ""
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
