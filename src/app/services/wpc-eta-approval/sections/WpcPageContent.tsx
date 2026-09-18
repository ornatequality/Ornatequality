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
  WPC_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_PARAGRAPHS,
  WHAT_YOU_GET_HEADING,
  WHAT_YOU_GET_ITEMS,
  INTRO_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHY_IMPORTANT_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  WHO_NEEDS_CLOSING,
  BENEFITS_ROWS,
  FEATURES_ITEMS,
  ELIGIBILITY_ITEMS,
  ELIGIBILITY_NOTE,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_STEPS,
  TIMELINE_PARAGRAPHS,
  COST_INTRO,
  COST_FACTORS,
  COST_CLOSING,
  VALIDITY_PARAGRAPH,
  RENEWAL_INTRO,
  RENEWAL_ITEMS,
  RENEWAL_CLOSING,
  CHALLENGES_ITEMS,
  CHALLENGES_CLOSING,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_CLOSING,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_PARAGRAPH,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  COMPARISON_ROWS,
  COMPARISON_NOTE,
  PRODUCTS_INTRO,
  PRODUCTS_ROWS,
  PRODUCTS_NOTE,
  FAQ_ITEMS,
  CTA_PARAGRAPH,
  type TableRow,
} from "../data/wpcContent";

const WPC_PAGE_PATH = "/services/wpc-eta-approval";

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
      idPrefix="wpc"
      defaultService="WPC-ETA Approval"
      serviceOptions={[
        "WPC-ETA Approval",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "BEE Certification",
        "Other",
      ]}
      successText="Our WPC ETA approval expert will contact you within one business day."
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

export function WpcPageContent() {
  const [activeId, setActiveId] = useState(WPC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = WPC_TOC.map((item) => item.id);
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
              {WPC_TOC.map((item, i) => (
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
              <h3 className={styles.subsectionTitle}>{WHAT_YOU_GET_HEADING}</h3>
              <ul className={styles.bulletList}>
                {WHAT_YOU_GET_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to a WPC ETA Approval Expert →
                </Link>
                <a href="#documents" className={styles.ctaBtnSecondary}>
                  Check Your Document Checklist →
                </a>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="WPC ETA approval and wireless product compliance support"
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

            <section id="what-is-wpc" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is WPC ETA Approval?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is WPC ETA Approval Important?</h2>
              <ul className={styles.bulletList}>
                {WHY_IMPORTANT_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs WPC ETA Approval?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Getting WPC ETA Approval Through Us</h2>
              <DataTable
                columns={[
                  { key: "benefit", header: "Benefit", scope: "row" },
                  { key: "means", header: "What It Means for You" },
                ]}
                rows={BENEFITS_ROWS}
                getRowKey={(row) => row.benefit}
              />
            </section>

            <section id="key-features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our WPC ETA Approval Services</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for WPC ETA Approval</h2>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_NOTE}</p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for WPC ETA Approval</h2>
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
              <h2 className={styles.sectionTitle}>Step-by-Step WPC ETA Approval Process</h2>
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
              <h2 className={styles.sectionTitle}>WPC ETA Approval Timeline</h2>
              {TIMELINE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>WPC ETA Cost Factors</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of WPC ETA Approval</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_PARAGRAPH}</p>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal of WPC ETA Approval</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <ul className={styles.bulletList}>
                {RENEWAL_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in WPC ETA Approval</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHALLENGES_CLOSING}</p>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_CLOSING}</p>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_PARAGRAPH}</p>
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
              <h2 className={styles.sectionTitle}>WPC ETA Approval vs. Other Indian Compliance Approvals</h2>
              <DataTable
                columns={[
                  { key: "approval", header: "Approval", scope: "row" },
                  { key: "regulator", header: "Regulator" },
                  { key: "covers", header: "What It Actually Covers" },
                  { key: "differs", header: "How It Differs from WPC ETA" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.approval}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_NOTE}</p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>WPC-ETA Approval Coverage — Wireless Product Categories</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "product", header: "Product Name", scope: "row" },
                  { key: "basis", header: "Regulatory Basis" },
                  { key: "mandatory", header: "Mandatory" },
                  { key: "audience", header: "Target Audience" },
                  { key: "page", header: "Dedicated Product Page" },
                ]}
                rows={PRODUCTS_ROWS}
                getRowKey={(row) => row.product}
              />
              <div className={styles.noteBox}>{PRODUCTS_NOTE}</div>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>Get Your WPC ETA Approval Started</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_PARAGRAPH}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to a WPC ETA Approval Expert →
                </Link>
                <a href="#documents" className={styles.ctaBtnSecondary}>
                  Request Your Document Checklist →
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
                          link.href === WPC_PAGE_PATH ? styles.servicesLinkActive : ""
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
