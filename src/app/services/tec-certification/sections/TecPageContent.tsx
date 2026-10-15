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
  TEC_TOC,
  BANNER_TITLE,
  BANNER_DESCRIPTION,
  BANNER_FOLLOW_UP,
  INTRO_PARAGRAPHS,
  WHAT_IS_INTRO,
  WHAT_IS_FRAMEWORK_LEAD,
  WHAT_IS_BULLETS,
  WHAT_IS_CLOSING,
  REGULATORY_INTRO,
  REGULATORY_ENTITIES,
  REGULATORY_COMPARISON_NOTE,
  REGULATORY_CLOSING,
  GLOSSARY_HEADING,
  GLOSSARY_PROCESS,
  GLOSSARY_EQUIPMENT,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_HOLDERS,
  WHO_NEEDS_SUPPLY_INTRO,
  WHO_NEEDS_SUPPLY,
  WHO_NEEDS_CLOSING,
  OUR_SERVICES_INTRO,
  OUR_SERVICES_ITEMS,
  OUR_SERVICES_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_EXTRA,
  DOCUMENTS_INTRO,
  DOCUMENTS_ITEMS,
  DOCUMENTS_EXTRA,
  ELIGIBILITY_PARAGRAPHS,
  ELIGIBILITY_FACTORS,
  ELIGIBILITY_CLOSING,
  TIMELINE_PARAGRAPHS,
  COST_PARAGRAPHS,
  VALIDITY_PARAGRAPHS,
  COMPLIANCE_PARAGRAPHS,
  INDUSTRIES_INTRO,
  INDUSTRIES,
  INDUSTRIES_CLOSING,
  WHY_CHOOSE_INTRO,
  WHY_CHOOSE_PRACTICE_HEADING,
  WHY_CHOOSE_ITEMS,
  ADVANTAGE_INTRO,
  ADVANTAGE_ITEMS,
  ADVANTAGE_CLOSING,
  LOCAL_PARAGRAPHS,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  COMPARISON_CLOSING,
  RELATED_INTRO,
  RELATED_CERTIFICATION,
  RELATED_QUALITY_INTRO,
  RELATED_CLOSING,
  SCENARIOS_INTRO,
  SCENARIOS,
  SCENARIOS_EXTRA,
  FAQ_ITEMS,
  CTA_INTRO,
  CTA_TALK_HEADING,
  CTA_ITEMS,
  CTA_CLOSING,
  type TableRow,
} from "../data/tecContent";

const TEC_PAGE_PATH = "/services/tec-certification";

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
      idPrefix="tec"
      defaultService="TEC Certification"
      serviceOptions={[
        "TEC Certification",
        "WPC-ETA Approval",
        "BIS CRS Registration",
        "BEE Certification",
        "Other",
      ]}
      successText="Our TEC certification expert will contact you within one business day."
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

export function TecPageContent() {
  const [activeId, setActiveId] = useState(TEC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = TEC_TOC.map((item) => item.id);
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
              {TEC_TOC.map((item, i) => (
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_DESCRIPTION}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_FOLLOW_UP}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Apply for TEC approval online →
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Get quote for TEC approval services →
                </Link>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction / Overview</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="TEC approval and MTCTE certification for telecom equipment in India"
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

            <section id="what-is-tec" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is TEC Approval? (Definition & Core Concepts)</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_FRAMEWORK_LEAD}</p>
              <ul className={styles.bulletList}>
                {WHAT_IS_BULLETS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_CLOSING}</p>
            </section>

            <section id="regulatory-framework" className={styles.section}>
              <h2 className={styles.sectionTitle}>Regulatory Framework & Legal Basis</h2>
              {REGULATORY_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {REGULATORY_ENTITIES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{REGULATORY_COMPARISON_NOTE}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{REGULATORY_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{GLOSSARY_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GLOSSARY_PROCESS}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GLOSSARY_EQUIPMENT}</p>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs TEC Approval? (Applicability & Target Audience)</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_HOLDERS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong>, {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_SUPPLY_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_SUPPLY.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="our-services" className={styles.section}>
              <h2 className={styles.sectionTitle}>Our TEC Approval Services</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OUR_SERVICES_INTRO}</p>
              <ul className={styles.bulletList}>
                {OUR_SERVICES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{OUR_SERVICES_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>TEC Approval Process (Step by Step)</h2>
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
              {PROCESS_EXTRA.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents & Requirements</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <ul className={styles.bulletList}>
                {DOCUMENTS_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                </li>
                ))}
              </ul>
              {DOCUMENTS_EXTRA.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility Criteria</h2>
              {ELIGIBILITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {ELIGIBILITY_FACTORS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_CLOSING}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline</h2>
              {TIMELINE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost & Fees</h2>
              {COST_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity & Renewal</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="compliance-updates" className={styles.section}>
              <h2 className={styles.sectionTitle}>Compliance & Regulatory Updates</h2>
              {COMPLIANCE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries & Businesses We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <ul className={styles.bulletList}>
                {INDUSTRIES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              {WHY_CHOOSE_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{WHY_CHOOSE_PRACTICE_HEADING}</h3>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="consultant-advantage" className={styles.section}>
              <h2 className={styles.sectionTitle}>The Ornate Quality Service Consultant Advantage</h2>
              {ADVANTAGE_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {ADVANTAGE_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ADVANTAGE_CLOSING}</p>
            </section>

            <section id="local-presence" className={styles.section}>
              <h2 className={styles.sectionTitle}>Local Presence Across India</h2>
              {LOCAL_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>TEC Approval vs. Other Certification Frameworks</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "answer", header: "Quick Answer" },
                  { key: "takeaway", header: "Practical Takeaway" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.comparison}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_CLOSING}</p>
            </section>

            <section id="related-services" className={styles.section}>
              <h2 className={styles.sectionTitle}>Related Regulatory & Compliance Services</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RELATED_INTRO}</p>
              <ul className={styles.bulletList}>
                {RELATED_CERTIFICATION.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RELATED_QUALITY_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RELATED_CLOSING}</p>
            </section>

            <section id="additional-scenarios" className={styles.section}>
              <h2 className={styles.sectionTitle}>Additional Scenarios We Support</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SCENARIOS_INTRO}</p>
              <ul className={styles.bulletList}>
                {SCENARIOS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              {SCENARIOS_EXTRA.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>Final Call to Action</h2>
              {CTA_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{CTA_TALK_HEADING}</h3>
              <ul className={styles.bulletList}>
                {CTA_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_CLOSING}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Apply for TEC approval online →
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Get quote for TEC approval services →
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
                          link.href === TEC_PAGE_PATH ? styles.servicesLinkActive : ""
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
