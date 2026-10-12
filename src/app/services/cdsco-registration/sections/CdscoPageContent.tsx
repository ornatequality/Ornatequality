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
  CDSCO_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  BANNER_LEAD,
  HIGHLIGHTS_TITLE,
  KEY_HIGHLIGHTS,
  INTRO_TITLE,
  INTRO_PARAGRAPHS,
  INTRO_ITEMS,
  WHAT_IS_QUICK_ANSWER,
  WHAT_IS_PARAGRAPHS,
  RISK_CLASSES_TITLE,
  RISK_CLASSES_INTRO,
  RISK_CLASS_ROWS,
  RISK_CLASS_NOTE,
  LICENCE_ROUTES_TITLE,
  LICENCE_ROUTE_ITEMS,
  RULES_NOTE,
  AGENT_TITLE,
  AGENT_PARAGRAPHS,
  NOT_WHOLE_ANSWER_TITLE,
  NOT_WHOLE_ANSWER,
  WHY_ITEMS,
  WHO_NEEDS_ITEMS,
  SERVICE_INCLUDE_ITEMS,
  CONSULTANT_BENEFITS,
  PROCESS_QUICK_ANSWER,
  PROCESS_STEPS,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CHECKLIST_INTRO,
  DOCUMENTS_CHECKLIST,
  ELIGIBILITY_ITEMS,
  ELIGIBILITY_NOTE,
  TIMELINE_QUICK_ANSWER,
  TIMELINE_INTRO,
  TIMELINE_FACTORS_INTRO,
  TIMELINE_FACTORS,
  TIMELINE_DELAYS_INTRO,
  TIMELINE_DELAYS,
  COST_INTRO,
  COST_FACTORS_INTRO,
  COST_FACTORS,
  COST_WARNING,
  VALIDITY_INTRO,
  VALIDITY_LEAD,
  VALIDITY_ITEMS,
  VALIDITY_CLOSING,
  CHALLENGES_ITEMS,
  WHY_CHOOSE_ITEMS,
  CLAIMS_NOTE,
  INDUSTRY_ITEMS,
  PRODUCTS_INTRO,
  PRODUCT_ROWS,
  UPDATES_INTRO,
  UPDATES_NOTE,
  UPDATE_LINKS,
  UPDATES_CLOSING,
  MISTAKES_ROWS,
  TIPS_ITEMS,
  COMPARISON_ROWS,
  COMPARISON_CLOSING,
  FAQ_ITEMS,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  CTA_PRIMARY_NOTE,
  type TableRow,
} from "../data/cdscoContent";

const CDSCO_PAGE_PATH = "/services/cdsco-registration";

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
      idPrefix="cdsco"
      defaultService="CDSCO Registration"
      serviceOptions={["CDSCO Registration"]}
      successText="Our CDSCO registration expert will contact you within one business day."
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
      {items.map((item, index) => {
        const className = index === 0 ? styles.ctaBtnPrimary : styles.ctaBtnSecondary;
        const isInternal = item.href.startsWith("/");
        if (isInternal) {
          return (
            <Link key={item.label} href={item.href} className={className}>
              {item.label}
            </Link>
          );
        }
        return (
          <a key={item.label} href={item.href} className={className}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

function OfficialLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

const PAGE_CTAS = [
  { label: "Request a Scope & Quote", href: "/contact" },
  { label: "Speak to our CDSCO team", href: "/contact" },
  { label: "Call +91 926-687-7738", href: "tel:+919266877738" },
];

const FINAL_CTAS = [
  { label: "Request a Scope & Quote", href: "/contact" },
  { label: "Speak to our CDSCO team", href: "/contact" },
  { label: "Call +91 926-687-7738", href: "tel:+919266877738" },
];

export function CdscoPageContent() {
  const [activeId, setActiveId] = useState(CDSCO_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = CDSCO_TOC.map((item) => item.id);
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
              {CDSCO_TOC.map((item, i) => (
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
              <p className={`${styles.heroLead} ${styles.textJustify}`}>{BANNER_SUBTITLE}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_DESCRIPTION}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{BANNER_LEAD}</p>
              <div className={styles.highlightsBox}>
                <div className={styles.highlightsTitle}>{HIGHLIGHTS_TITLE}</div>
                <ul className={styles.bulletList}>
                  {KEY_HIGHLIGHTS.map((item) => (
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
                    alt="CDSCO certification and medical device regulatory compliance support"
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
              {INTRO_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    {item.text}
                    {item.linkHref && item.linkLabel ? (
                      <>
                        {" "}
                        <OfficialLink href={item.linkHref} label={item.linkLabel} />
                      </>
                    ) : null}
                  </p>
                </div>
              ))}
            </section>

            <section id="what-is" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is CDSCO certification?</h2>
              <div className={styles.noteBox}>{WHAT_IS_QUICK_ANSWER}</div>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{RISK_CLASSES_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RISK_CLASSES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "class", header: "Class", scope: "row" },
                  { key: "risk", header: "Risk level" },
                  { key: "who", header: "Who licenses it" },
                  { key: "meaning", header: "What this usually means for you" },
                ]}
                rows={RISK_CLASS_ROWS}
                getRowKey={(row) => row.class}
              />
              <div className={styles.noteBox}>
                {RISK_CLASS_NOTE}{" "}
                <OfficialLink href="https://cdsco.gov.in" label="cdsco.gov.in" />
              </div>
              <h3 className={styles.subsectionTitle}>{LICENCE_ROUTES_TITLE}</h3>
              {LICENCE_ROUTE_ITEMS.map((item) => (
                <div key={`${item.title}-${item.text.slice(0, 32)}`}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>
                {RULES_NOTE}{" "}
                <OfficialLink href="https://cdsco.gov.in" label="cdsco.gov.in" />
              </div>
              <h3 className={styles.subsectionTitle}>{AGENT_TITLE}</h3>
              {AGENT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{NOT_WHOLE_ANSWER_TITLE}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{NOT_WHOLE_ANSWER}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why CDSCO certification is important</h2>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who needs CDSCO certification?</h2>
              {WHO_NEEDS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="service-includes" className={styles.section}>
              <h2 className={styles.sectionTitle}>What our CDSCO certification service includes</h2>
              {SERVICE_INCLUDE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="consultant-benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Benefits of working with a specialist consultant</h2>
              {CONSULTANT_BENEFITS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>The complete CDSCO certification process, step by step</h2>
              <div className={styles.noteBox}>{PROCESS_QUICK_ANSWER}</div>
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
                  {step.objective ? (
                    <p className={`${styles.sectionText} ${styles.textJustify}`}>
                      <strong>Objective:</strong> {step.objective}
                    </p>
                  ) : null}
                  {step.activities ? (
                    <p className={`${styles.sectionText} ${styles.textJustify}`}>
                      <strong>Activities:</strong> {step.activities}
                    </p>
                  ) : null}
                  {step.timeline ? (
                    <p className={`${styles.sectionText} ${styles.textJustify}`}>
                      <strong>Timeline:</strong> {step.timeline}
                    </p>
                  ) : null}
                  {step.deliverables ? (
                    <p className={`${styles.sectionText} ${styles.textJustify}`}>
                      <strong>Deliverables:</strong> {step.deliverables}
                    </p>
                  ) : null}
                  {step.note ? <div className={styles.noteBox}>{step.note}</div> : null}
                </div>
              ))}
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents required for CDSCO certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <h3 className={styles.subsectionTitle}>{DOCUMENTS_CHECKLIST_INTRO}</h3>
              <ul className={styles.bulletList}>
                {DOCUMENTS_CHECKLIST.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility: who can apply and under what conditions</h2>
              {ELIGIBILITY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline: how long CDSCO certification takes</h2>
              <div className={styles.noteBox}>{TIMELINE_QUICK_ANSWER}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{TIMELINE_FACTORS_INTRO}</h3>
              <ul className={styles.bulletList}>
                {TIMELINE_FACTORS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{TIMELINE_DELAYS_INTRO}</h3>
              <ul className={styles.bulletList}>
                {TIMELINE_DELAYS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost factors for CDSCO certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{COST_FACTORS_INTRO}</h3>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                    {item.linkHref && item.linkLabel ? (
                      <>
                        {" "}
                        <OfficialLink href={item.linkHref} label={item.linkLabel} />
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{COST_WARNING}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity and renewal</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>
                {VALIDITY_INTRO}{" "}
                <OfficialLink href="https://cdsco.gov.in" label="cdsco.gov.in" />
              </p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_LEAD}</p>
              <ul className={styles.bulletList}>
                {VALIDITY_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common challenges — and how we handle them</h2>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Why it happens:</strong> {item.why}
                  </p>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why choose Ornate Quality Services Pvt Ltd</h2>
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{CLAIMS_NOTE}</div>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries we serve</h2>
              {INDUSTRY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products covered</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "product", header: "Product name", scope: "row" },
                  { key: "keyword", header: "Target keyword" },
                  { key: "page", header: "Internal link" },
                ]}
                rows={PRODUCT_ROWS}
                getRowKey={(row) => row.product}
              />
            </section>

            <section id="updates" className={styles.section}>
              <h2 className={styles.sectionTitle}>Latest updates and regulatory changes</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{UPDATES_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{UPDATES_NOTE}</p>
              <ul className={styles.bulletList}>
                {UPDATE_LINKS.map((item) => (
                  <li key={item.label} className={styles.textJustify}>
                    {item.label} — <OfficialLink href={item.href} label={item.href.replace("https://", "")} />
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{UPDATES_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common mistakes in CDSCO certification</h2>
              <DataTable
                columns={[
                  { key: "mistake", header: "Mistake", scope: "row" },
                  { key: "impact", header: "Impact" },
                  { key: "avoid", header: "How to avoid" },
                ]}
                rows={MISTAKES_ROWS}
                getRowKey={(row) => row.mistake}
              />
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert tips from our regulatory team</h2>
              <ul className={styles.bulletList}>
                {TIPS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>Doing it yourself vs a consultant vs a full-service agency</h2>
              <DataTable
                columns={[
                  { key: "factor", header: "Factor", scope: "row" },
                  { key: "inhouse", header: "In-house, on your own" },
                  { key: "consultant", header: "Individual consultant" },
                  { key: "agency", header: "Full-service agency" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.factor}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_CLOSING}</p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{CTA_TITLE}</h2>
              {CTA_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_PRIMARY_NOTE}</p>
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
                          link.href === CDSCO_PAGE_PATH ? styles.servicesLinkActive : ""
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
