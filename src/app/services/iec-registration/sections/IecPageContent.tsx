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
  IEC_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  KEY_HIGHLIGHTS_HEADING,
  KEY_HIGHLIGHTS,
  HERO_CTAS,
  INTRO_LEAD,
  INTRO_PARAGRAPHS,
  INTRO_PARTS,
  WHAT_IS_INTRO,
  WHAT_IS_PARTS,
  WHAT_IS_EXPERT_NOTE,
  WHAT_IS_DIGITAL,
  WHAT_IS_INDUSTRY,
  WHY_IMPORTANT_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  WHO_NEEDS_SERVICE_NOTE,
  WHO_NEEDS_GOVERNMENT,
  ENTITY_TABLE_HEADING,
  ENTITY_ROWS,
  ENTITY_TABLE_NOTE,
  BENEFITS_ITEMS,
  FEATURES_ITEMS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_WHO_HEADING,
  ELIGIBILITY_WHO,
  ELIGIBILITY_BASIC_HEADING,
  ELIGIBILITY_BASIC,
  ELIGIBILITY_EXEMPT_HEADING,
  ELIGIBILITY_EXEMPT,
  ELIGIBILITY_NOTE,
  ACTIVITY_TABLE_HEADING,
  ACTIVITY_ROWS,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CHECKLIST_HEADING,
  DOCUMENTS_CHECKLIST,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_LEAD,
  PROCESS_STEPS,
  TIMELINE_INTRO,
  TIMELINE_FACTORS_HEADING,
  TIMELINE_FACTORS,
  DELAYS_HEADING,
  DELAYS_ROWS,
  TIMELINE_NOTE,
  COST_INTRO,
  COST_ITEMS,
  COST_NOTE,
  VALIDITY_INTRO,
  VALIDITY_STATES,
  VALIDITY_CLOSING,
  RENEWAL_INTRO,
  RENEWAL_PARTS,
  RENEWAL_NOTE,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_NOTE,
  WHY_CHOOSE_ITEMS,
  WHY_CHOOSE_CTAS,
  INDUSTRIES_ITEMS,
  WHERE_WE_WORK_HEADING,
  WHERE_WE_WORK,
  LOCATION_ROWS,
  LOCATION_CLOSING,
  MISTAKES_ROWS,
  EXPERT_TIPS,
  COMPARISON_ROWS,
  COMPARISON_NOTE,
  TERMS_ROWS,
  FAQ_ITEMS,
  CTA_HEADING,
  CTA_PARAGRAPHS,
  CTA_BUTTONS,
  type TableRow,
} from "../data/iecContent";

const IEC_PAGE_PATH = "/services/iec-registration";

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
      idPrefix="iec"
      defaultService="IEC Registration"
      serviceOptions={[
        "IEC Registration",
        "LMPC Registration",
        "BIS CRS Registration",
        "EPR Registration",
        "Other",
      ]}
      successText="Our IEC registration expert will contact you within one business day."
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
              <span>{item.q}</span>
              <span className={styles.faqIcon} aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? <div className={styles.faqAnswer}>{item.a}</div> : null}
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

export function IecPageContent() {
  const [activeId, setActiveId] = useState(IEC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = IEC_TOC.map((item) => item.id);
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
              {IEC_TOC.map((item, i) => (
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
              <h3 className={styles.subsectionTitle}>{KEY_HIGHLIGHTS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {KEY_HIGHLIGHTS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <CtaRow items={HERO_CTAS} />
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="IEC registration support for importers and exporters in India"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INTRO_LEAD}</p>
                {INTRO_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {INTRO_PARTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="what-is-iec" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is IEC Registration?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_INTRO}</p>
              {WHAT_IS_PARTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
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
              <div className={styles.noteBox}>{WHAT_IS_EXPERT_NOTE}</div>
              <h3 className={styles.subsectionTitle}>{WHAT_IS_DIGITAL.title}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_DIGITAL.text}</p>
              <h3 className={styles.subsectionTitle}>{WHAT_IS_INDUSTRY.title}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHAT_IS_INDUSTRY.text}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is IEC Registration Important?</h2>
              {WHY_IMPORTANT_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs IEC Registration?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              {WHO_NEEDS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{WHO_NEEDS_SERVICE_NOTE}</div>
              <h3 className={styles.subsectionTitle}>{WHO_NEEDS_GOVERNMENT.title}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_GOVERNMENT.text}</p>
              <h3 className={styles.subsectionTitle}>{ENTITY_TABLE_HEADING}</h3>
              <DataTable
                columns={[
                  { key: "entity", header: "Entity Type", scope: "row" },
                  { key: "applies", header: "Applies Using" },
                  { key: "signing", header: "Typical Signing Route" },
                ]}
                rows={ENTITY_ROWS}
                getRowKey={(row) => row.entity}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ENTITY_TABLE_NOTE}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of IEC Registration</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="key-features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of IEC Registration</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for IEC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
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
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_EXEMPT_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_EXEMPT}</p>
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
              <h3 className={styles.subsectionTitle}>{ACTIVITY_TABLE_HEADING}</h3>
              <DataTable
                columns={[
                  { key: "activity", header: "Activity", scope: "row" },
                  { key: "position", header: "IEC Position" },
                ]}
                rows={ACTIVITY_ROWS}
                getRowKey={(row) => row.activity}
              />
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for IEC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
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
              <h3 className={styles.subsectionTitle}>{DOCUMENTS_CHECKLIST_HEADING}</h3>
              <ul className={styles.bulletList}>
                {DOCUMENTS_CHECKLIST.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step IEC Registration Process</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_LEAD}</p>
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
                  {step.note ? <div className={styles.noteBox}>{step.note}</div> : null}
                  {step.deliverable ? (
                    <p className={`${styles.sectionText} ${styles.textJustify}`}>
                      <strong>{step.deliverable}</strong>
                    </p>
                  ) : null}
                </div>
              ))}
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline for IEC Registration</h2>
              {TIMELINE_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{TIMELINE_FACTORS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {TIMELINE_FACTORS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{DELAYS_HEADING}</h3>
              <DataTable
                columns={[
                  { key: "delay", header: "Delay", scope: "row" },
                  { key: "cause", header: "Cause" },
                  { key: "prevent", header: "How we prevent it" },
                ]}
                rows={DELAYS_ROWS}
                getRowKey={(row) => row.delay}
              />
              <div className={styles.noteBox}>{TIMELINE_NOTE}</div>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors for IEC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              {COST_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of the Import Export Code</h2>
              {VALIDITY_INTRO.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {VALIDITY_STATES.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              {VALIDITY_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal, Annual Update, Modification and Surrender</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              {RENEWAL_PARTS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                  {item.bullets ? (
                    <ul className={styles.bulletList}>
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className={styles.textJustify}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              <div className={styles.noteBox}>{RENEWAL_NOTE}</div>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in IEC Registration</h2>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help With IEC Registration</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              {HOW_WE_HELP_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{HOW_WE_HELP_NOTE}</div>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <CtaRow items={WHY_CHOOSE_CTAS} />
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <ul className={styles.bulletList}>
                {INDUSTRIES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{WHERE_WE_WORK_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHERE_WE_WORK}</p>
              <DataTable
                columns={[
                  { key: "location", header: "Location", scope: "row" },
                  { key: "coverage", header: "Coverage" },
                ]}
                rows={LOCATION_ROWS}
                getRowKey={(row) => row.location}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATION_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes in IEC Registration</h2>
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
              <h2 className={styles.sectionTitle}>Expert Tips</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Doing It Yourself, an Individual Consultant, or a Professional Firm
              </h2>
              <DataTable
                columns={[
                  { key: "factor", header: "Factor", scope: "row" },
                  { key: "diy", header: "Doing it yourself" },
                  { key: "consultant", header: "Individual consultant" },
                  { key: "firm", header: "Professional firm" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.factor}
              />
              <div className={styles.noteBox}>{COMPARISON_NOTE}</div>
            </section>

            <section id="key-terms" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Terms You Will Encounter</h2>
              <DataTable
                columns={[
                  { key: "term", header: "Term", scope: "row" },
                  { key: "meaning", header: "What It Means" },
                ]}
                rows={TERMS_ROWS}
                getRowKey={(row) => row.term}
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
              <CtaRow items={CTA_BUTTONS} />
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
                          link.href === IEC_PAGE_PATH ? styles.servicesLinkActive : ""
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
