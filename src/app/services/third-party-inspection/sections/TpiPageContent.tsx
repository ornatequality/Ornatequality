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
  TPI_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHAT_YOU_GET_INTRO,
  WHAT_YOU_GET,
  QUICK_ANSWER,
  INTRO_TITLE,
  INTRO_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_PARTIES,
  WHAT_IS_CLOSING,
  VERIFIES_TITLE,
  VERIFIES_INTRO,
  VERIFIES_ITEMS,
  VERIFIES_CLOSING,
  WHY_INTRO,
  WHY_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ROWS,
  WHO_NEEDS_CLOSING,
  BENEFITS_ITEMS,
  TYPES_INTRO,
  TYPES_ROWS,
  TYPES_CLOSING,
  SERVICES_ITEMS,
  SERVICES_CLOSING,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_VARY_INTRO,
  ELIGIBILITY_NEED,
  ELIGIBILITY_PARAGRAPHS,
  ELIGIBILITY_CLOSING,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  PROCESS_STEPS,
  PROCESS_CLOSING,
  TIMELINE_INTRO,
  TIMELINE_ITEMS,
  TIMELINE_PARAGRAPHS,
  COST_INTRO,
  COST_BASIS,
  COST_INCREASE_INTRO,
  COST_INCREASE,
  COST_CHECK_INTRO,
  COST_CHECK,
  COST_CLOSING,
  VALIDITY_INTRO,
  VALIDITY_PARAGRAPHS,
  VALIDITY_ITEMS,
  VALIDITY_CLOSING,
  RENEWAL_INTRO,
  RENEWAL_ITEMS,
  RENEWAL_CLOSING,
  INDUSTRIES_INTRO,
  INDUSTRY_ROWS,
  INDUSTRIES_ENGINEERING,
  INDUSTRIES_NOTE,
  STANDARDS_INTRO,
  STANDARDS_ROWS,
  STANDARDS_ASK_INTRO,
  STANDARDS_ASK,
  STANDARDS_NOTE,
  CHALLENGES_ITEMS,
  HELP_INTRO,
  HELP_ROWS,
  HELP_NOTE,
  WHY_CHOOSE_ITEMS,
  WHY_CHOOSE_NOTE,
  MISTAKES_ITEMS,
  TIPS_ITEMS,
  COMPARISON_QC_TITLE,
  COMPARISON_ROWS,
  COMPARISON_BLOCKS,
  FAQ_ITEMS,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  CTA_FOOTER,
  INTERNAL_LINKS_NOTE,
  INTERNAL_LINK_GROUPS,
  type TableRow,
} from "../data/tpiContent";

const TPI_PAGE_PATH = "/services/third-party-inspection";

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
      idPrefix="tpi"
      defaultService="Third Party Inspection"
      serviceOptions={["Third Party Inspection"]}
      successText="Our third party inspection expert will contact you within one business day."
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
  { label: "Request an inspection quote →", href: "/contact" },
  { label: "Talk to our inspection team →", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Request an inspection quote", href: "/contact" },
  { label: "Talk to our inspection team", href: "/contact" },
  { label: "Send your inspection requirement", href: "/contact" },
];

export function TpiPageContent() {
  const [activeId, setActiveId] = useState(TPI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = TPI_TOC.map((item) => item.id);
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
              {TPI_TOC.map((item, i) => (
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_YOU_GET_INTRO}</p>
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
              <div className={styles.noteBox}>{QUICK_ANSWER}</div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>{INTRO_TITLE}</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Third party inspection and quality verification at the factory"
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

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is Third Party Inspection (TPI)?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {WHAT_IS_PARTIES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_CLOSING}</p>
              <h3 className={styles.subsectionTitle}>{VERIFIES_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VERIFIES_INTRO}</p>
              <ul className={styles.bulletList}>
                {VERIFIES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VERIFIES_CLOSING}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Third Party Inspection Is Important</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO}</p>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  {item.text ? (
                    <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                  ) : null}
                  {item.bullets ? (
                    <ul className={styles.bulletList}>
                      {item.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 48)} className={styles.textJustify}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs Third Party Inspection Services?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "who", header: "Who", scope: "row" },
                  { key: "why", header: "Why they use third party inspection" },
                ]}
                rows={WHO_NEEDS_ROWS}
                getRowKey={(row) => row.who}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Independent Third Party Inspection</h2>
              {BENEFITS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Types of Third Party Inspection We Provide</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TYPES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Inspection type", scope: "row" },
                  { key: "when", header: "When it happens" },
                  { key: "purpose", header: "What it is mainly for" },
                ]}
                rows={TYPES_ROWS}
                getRowKey={(row) => row.type}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TYPES_CLOSING}</p>
            </section>

            <section id="services-include" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Our Third Party Inspection Service Includes</h2>
              <ul className={styles.bulletList}>
                {SERVICES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SERVICES_CLOSING}</p>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Can Use This Service — and When It Applies</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_VARY_INTRO}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_NEED.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              {ELIGIBILITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{ELIGIBILITY_CLOSING}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>What You Need to Share Before the Inspection</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document or input", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                  { key: "notes", header: "Notes" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Third Party Inspection Process — Step by Step</h2>
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
              <div className={styles.noteBox}>{PROCESS_CLOSING}</div>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>How Long Does a Third Party Inspection Take?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              {TIMELINE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              {TIMELINE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Third Party Inspection Cost in India — What Drives the Price</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_BASIS}</p>
              <h3 className={styles.subsectionTitle}>{COST_INCREASE_INTRO}</h3>
              <ul className={styles.bulletList}>
                {COST_INCREASE.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{COST_CHECK_INTRO}</h3>
              <ul className={styles.bulletList}>
                {COST_CHECK.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of a Third Party Inspection Report</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_INTRO}</p>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
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
              <h2 className={styles.sectionTitle}>Repeat and Ongoing Inspection Arrangements</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <ul className={styles.bulletList}>
                {RENEWAL_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_CLOSING}</p>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Cover Under Third Party Inspection</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry vertical", scope: "row" },
                  { key: "focus", header: "Typical inspection focus" },
                  { key: "page", header: "Dedicated page" },
                ]}
                rows={INDUSTRY_ROWS}
                getRowKey={(row) => row.industry}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_ENGINEERING}</p>
              <div className={styles.noteBox}>{INDUSTRIES_NOTE}</div>
            </section>

            <section id="standards" className={styles.section}>
              <h2 className={styles.sectionTitle}>Standards and Accreditation — What to Look For</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{STANDARDS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "term", header: "Term", scope: "row" },
                  { key: "meaning", header: "What it actually means" },
                ]}
                rows={STANDARDS_ROWS}
                getRowKey={(row) => row.term}
              />
              <h3 className={styles.subsectionTitle}>{STANDARDS_ASK_INTRO}</h3>
              <ul className={styles.bulletList}>
                {STANDARDS_ASK.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{STANDARDS_NOTE}</div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in Third Party Inspection</h2>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How Ornate Quality Service Supports Your Inspection</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HELP_INTRO}</p>
              <DataTable
                columns={[
                  { key: "what", header: "What we do", scope: "row" },
                  { key: "how", header: "How it helps you" },
                ]}
                rows={HELP_ROWS}
                getRowKey={(row) => row.what}
              />
              <div className={styles.noteBox}>{HELP_NOTE}</div>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service</h2>
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{WHY_CHOOSE_NOTE}</div>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes Buyers Make — and How to Avoid Them</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Practical Tips From Our Inspection Team</h2>
              <ul className={styles.bulletList}>
                {TIPS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>How Third Party Inspection Compares</h2>
              <h3 className={styles.subsectionTitle}>{COMPARISON_QC_TITLE}</h3>
              <DataTable
                columns={[
                  { key: "point", header: "Point", scope: "row" },
                  { key: "inhouse", header: "In-house QC" },
                  { key: "tpi", header: "Third party inspection" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.point}
              />
              {COMPARISON_BLOCKS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
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
              <CtaRow items={FINAL_CTAS} />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_FOOTER}</p>
              <h3 className={styles.subsectionTitle}>Internal Link Suggestions</h3>
              <div className={styles.noteBox}>{INTERNAL_LINKS_NOTE}</div>
              {INTERNAL_LINK_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className={styles.subsectionTitle}>{group.title}</h3>
                  <ul className={styles.bulletList}>
                    {group.items.map((item) => (
                      <li key={item.label} className={styles.textJustify}>
                        {item.href ? (
                          <Link href={item.href}>{item.label}</Link>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
              </div>
              ))}
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
                          link.href === TPI_PAGE_PATH ? styles.servicesLinkActive : ""
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
