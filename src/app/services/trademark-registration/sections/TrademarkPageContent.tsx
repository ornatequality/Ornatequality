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
  TRADEMARK_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_PARAGRAPHS,
  WHAT_YOU_GET_HEADING,
  WHAT_YOU_GET,
  PAGE_COVERS_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_POINTS,
  WORD_DEVICE_HEADING,
  WORD_DEVICE_ITEMS,
  WHY_MATTERS_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  INDUSTRIES_INTRO,
  INDUSTRY_ROWS,
  INDUSTRIES_CLOSING,
  BENEFITS_ITEMS,
  SERVICE_INCLUDES_INTRO,
  SERVICE_INCLUDES,
  SERVICE_INCLUDES_CLOSING,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_ROWS,
  ELIGIBILITY_POINTS_HEADING,
  ELIGIBILITY_POINTS,
  GUIDELINES_NOTE,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_CLOSING,
  ONLINE_INTRO,
  ONLINE_ROWS,
  ONLINE_CLOSING,
  TIMELINE_INTRO,
  TIMELINE_ROWS,
  TIMELINE_CLOSING,
  TIMELINE_NOTE,
  COST_INTRO,
  COST_ITEMS,
  COST_GOVT,
  COST_QUOTE_HEADING,
  COST_QUOTE_PARAGRAPHS,
  VALIDITY_INTRO,
  VALIDITY_POINTS,
  VALIDITY_CLOSING,
  VALIDITY_NOTE,
  RENEWAL_INTRO,
  RENEWAL_PARTS,
  CHALLENGES_INTRO,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_NOTE,
  CHOOSING_INTRO,
  CHOOSING_ITEMS,
  CHOOSING_CLOSING,
  WHY_CHOOSE_ITEMS,
  CLASSES_INTRO,
  CLASS_ROWS,
  CLASS_NOTES_HEADING,
  CLASS_NOTES,
  CLASS_CLOSING,
  WHERE_INTRO,
  WHERE_ROWS,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  COMPARISON_CLOSING,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPHS,
  type TableRow,
} from "../data/trademarkContent";

const TRADEMARK_PAGE_PATH = "/services/trademark-registration";

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
      idPrefix="tm"
      defaultService="Trademark Registration"
      serviceOptions={[
        "Trademark Registration",
        "BIS CRS Registration",
        "BEE Certification",
        "EPR Registration",
        "GeM Portal Registration",
        "LMPC Registration",
        "IEC Registration",
        "Other",
      ]}
      successText="Our trademark expert will contact you within one business day."
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
  { label: "Talk to our trademark team", href: "/contact" },
  { label: "Request a callback", href: "/contact" },
];

const COST_CTAS = [
  { label: "Get a filing quote", href: "/contact" },
  { label: "Speak to a trademark consultant", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Talk to our trademark team", href: "/contact" },
  { label: "Request a callback", href: "/contact" },
  { label: "Get a filing quote", href: "/contact" },
];

export function TrademarkPageContent() {
  const [activeId, setActiveId] = useState(TRADEMARK_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = TRADEMARK_TOC.map((item) => item.id);
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
              {TRADEMARK_TOC.map((item, i) => (
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
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <CtaRow items={HERO_CTAS} />
                </div>

            <section id="what-this-page-covers" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Registration: What This Page Covers</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Trademark registration support for brand name, logo and tagline in India"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>
                {PAGE_COVERS_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is Trademark Registration?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              {WHAT_IS_POINTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <h3 className={styles.subsectionTitle}>{WORD_DEVICE_HEADING}</h3>
              <ul className={styles.bulletList}>
                {WORD_DEVICE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Trademark Registration Matters for Your Business</h2>
              {WHY_MATTERS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs Trademark Registration?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              {WHO_NEEDS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
              </div>
              ))}
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We File For</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry", scope: "row" },
                  { key: "filing", header: "Typical Filing" },
                  { key: "watch", header: "What We Watch For" },
                ]}
                rows={INDUSTRY_ROWS}
                getRowKey={(row) => row.industry}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Registering Your Trademark</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="service-includes" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Our Trademark Registration Service Includes</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SERVICE_INCLUDES_INTRO}</p>
              <ul className={styles.bulletList}>
                {SERVICE_INCLUDES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SERVICE_INCLUDES_CLOSING}</p>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility: Who Can Apply</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <DataTable
                columns={[
                  { key: "type", header: "Applicant Type", scope: "row" },
                  { key: "applies", header: "Applies As" },
                  { key: "point", header: "Key Point" },
                ]}
                rows={ELIGIBILITY_ROWS}
                getRowKey={(row) => row.type}
              />
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_POINTS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_POINTS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{GUIDELINES_NOTE}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for Trademark Registration</h2>
              {DOCUMENTS_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step Trademark Registration Process</h2>
              {PROCESS_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
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

            <section id="online" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Happens Online, and Who Does It</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ONLINE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "action", header: "Action", scope: "row" },
                  { key: "involves", header: "What It Involves" },
                  { key: "handled", header: "Handled By" },
                ]}
                rows={ONLINE_ROWS}
                getRowKey={(row) => row.action}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ONLINE_CLOSING}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Registration Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "stage", header: "Stage", scope: "row" },
                  { key: "duration", header: "What Drives the Duration" },
                ]}
                rows={TIMELINE_ROWS}
                getRowKey={(row) => row.stage}
              />
              {TIMELINE_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Registration Cost: What Actually Drives It</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              {COST_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_GOVT}</p>
              <h3 className={styles.subsectionTitle}>{COST_QUOTE_HEADING}</h3>
              {COST_QUOTE_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <CtaRow items={COST_CTAS} />
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of a Registered Trademark</h2>
              {VALIDITY_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {VALIDITY_POINTS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_CLOSING}</p>
              <div className={styles.noteBox}>{VALIDITY_NOTE}</div>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Renewal, Assignment and Ownership Changes</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              {RENEWAL_PARTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges — and How They Are Avoided</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHALLENGES_INTRO}</p>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{HOW_WE_HELP_NOTE}</div>
            </section>

            <section id="choosing" className={styles.section}>
              <h2 className={styles.sectionTitle}>Choosing a Trademark Consultant</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CHOOSING_INTRO}</p>
              {CHOOSING_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              {CHOOSING_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Businesses Choose Ornate Quality Service Pvt Ltd</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="classes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Classes We Cover</h2>
              {CLASSES_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <DataTable
                columns={[
                  { key: "cls", header: "Class", scope: "row" },
                  { key: "covers", header: "What It Covers" },
                  { key: "who", header: "Who Usually Files Here" },
                  { key: "page", header: "Dedicated Class Page" },
                ]}
                rows={CLASS_ROWS}
                getRowKey={(row) => row.cls}
              />
              <h3 className={styles.subsectionTitle}>{CLASS_NOTES_HEADING}</h3>
              <ul className={styles.bulletList}>
                {CLASS_NOTES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CLASS_CLOSING}</p>
            </section>

            <section id="where-we-work" className={styles.section}>
              <h2 className={styles.sectionTitle}>Where We Work</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHERE_INTRO}</p>
              <DataTable
                columns={[
                  { key: "region", header: "Region", scope: "row" },
                  { key: "handle", header: "What We Handle" },
                ]}
                rows={WHERE_ROWS}
                getRowKey={(row) => row.region}
              />
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips Before You File</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Trademark Registration Compared With Related Registrations
              </h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "protects", header: "What It Actually Protects or Does" },
                  { key: "brand", header: "Does It Protect Your Brand Name?" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.comparison}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_CLOSING}</p>
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
                          link.href === TRADEMARK_PAGE_PATH ? styles.servicesLinkActive : ""
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
