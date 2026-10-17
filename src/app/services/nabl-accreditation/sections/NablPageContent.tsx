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
  NABL_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHAT_YOU_GET_INTRO,
  WHAT_YOU_GET,
  INTRO_TITLE,
  INTRO_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHY_INTRO,
  WHY_ITEMS,
  APPLICATIONS_INTRO,
  APPLICATION_ROWS,
  WHO_NEEDS_INTRO,
  BENEFITS_ITEMS,
  FEATURES_ITEMS,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_YOU_MAY,
  ELIGIBILITY_ITEMS,
  ELIGIBILITY_PARAGRAPHS,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_NOTE,
  PROCESS_INTRO,
  PROCESS_LEAD,
  PROCESS_STEPS,
  DOMAINS_INTRO,
  DOMAIN_ROWS,
  DOMAINS_NOTE,
  TIMELINE_INTRO,
  TIMELINE_FACTORS_INTRO,
  TIMELINE_FACTORS,
  TIMELINE_CLOSING,
  COST_INTRO,
  COST_ITEMS,
  COST_CLOSING,
  VALIDITY_INTRO,
  VALIDITY_LEAD,
  VALIDITY_ITEMS,
  VALIDITY_NOTE,
  VALIDITY_CLOSING,
  RETESTING_INTRO,
  RETESTING_ITEMS,
  STANDARDS_ITEMS,
  CHALLENGES_ITEMS,
  HELP_PARAGRAPHS,
  HELP_DO_INTRO,
  HELP_DO_ITEMS,
  WHY_CHOOSE_ROWS,
  WHY_CHOOSE_CLOSING,
  DIRECTORY_INTRO,
  DIRECTORY_ROWS,
  INDUSTRIES_INTRO,
  INDUSTRY_ROWS,
  LOCATIONS_INTRO,
  LOCATION_ROWS,
  LOCATIONS_NOTE,
  MISTAKES_ITEMS,
  TIPS_ITEMS,
  COMPARISON_ROWS,
  FAQ_ITEMS,
  CTA_TITLE,
  CTA_PARAGRAPHS,
  CTA_FOOTER,
  REPORTS_INTRO,
  REPORT_ROWS,
  type TableRow,
} from "../data/nablContent";

const NABL_PAGE_PATH = "/services/nabl-lab-testing-services";

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
      idPrefix="nabl"
      defaultService="NABL Accreditation"
      serviceOptions={["NABL Accreditation"]}
      successText="Our NABL accreditation expert will contact you within one business day."
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
  { label: "Request a NABL Testing Proposal", href: "/contact" },
  { label: "Speak to a Testing Expert", href: "/contact" },
  { label: "Book Product Testing in a NABL Lab", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Book NABL Lab Testing", href: "/contact" },
  { label: "Request a Testing Proposal", href: "/contact" },
  { label: "Speak to a Testing Expert", href: "/contact" },
];

export function NablPageContent() {
  const [activeId, setActiveId] = useState(NABL_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = NABL_TOC.map((item) => item.id);
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
              {NABL_TOC.map((item, i) => (
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
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>{INTRO_TITLE}</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="NABL accredited lab testing coordination for certification in India"
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
              <h2 className={styles.sectionTitle}>What is NABL Accredited Lab Testing?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why NABL Accredited Lab Testing is Important for Your Business</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_INTRO}</p>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="applications" className={styles.section}>
              <h2 className={styles.sectionTitle}>Certification and Regulatory Applications We Support</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{APPLICATIONS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "application", header: "Regulatory Application", scope: "row" },
                  { key: "service", header: "Our Service" },
                  { key: "testing", header: "Testing We Coordinate" },
                ]}
                rows={APPLICATION_ROWS}
                getRowKey={(row) => row.application}
              />
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs NABL Accredited Lab Testing Services?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Our NABL Lab Testing Coordination</h2>
              {BENEFITS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="features" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our Lab Testing Coordination Service</h2>
              <ul className={styles.bulletList}>
                {FEATURES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Can Use Our NABL Lab Testing Services?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_YOU_MAY}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              {ELIGIBILITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Information and Documents Required for NABL Lab Testing</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document / Information", scope: "row" },
                  { key: "purpose", header: "Purpose" },
                  { key: "mandatory", header: "Mandatory / Optional" },
                  { key: "notes", header: "Notes" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <div className={styles.noteBox}>{DOCUMENTS_NOTE}</div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step NABL Lab Testing Process</h2>
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
                </div>
              ))}
            </section>

            <section id="domains" className={styles.section}>
              <h2 className={styles.sectionTitle}>Testing Domains Covered Under Our NABL Lab Testing Services</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOMAINS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "domain", header: "Testing Domain", scope: "row" },
                  { key: "covers", header: "What It Covers" },
                  { key: "who", header: "Who Typically Needs It" },
                  { key: "page", header: "Our Hub Page" },
                ]}
                rows={DOMAIN_ROWS}
                getRowKey={(row) => row.domain}
              />
              <div className={styles.noteBox}>{DOMAINS_NOTE}</div>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>How Long Does NABL Lab Testing Take?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_FACTORS_INTRO}</p>
              <ul className={styles.bulletList}>
                {TIMELINE_FACTORS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_CLOSING}</p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Lab Testing Cost in India — What Affects It?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Test Report Validity — What You Should Know</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_LEAD}</p>
              <ul className={styles.bulletList}>
                {VALIDITY_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{VALIDITY_NOTE}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_CLOSING}</p>
            </section>

            <section id="retesting" className={styles.section}>
              <h2 className={styles.sectionTitle}>Retesting: When and How It Works</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RETESTING_INTRO}</p>
              {RETESTING_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="standards" className={styles.section}>
              <h2 className={styles.sectionTitle}>Applicable Rules, Standards and Regulatory Framework</h2>
              {STANDARDS_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in NABL Lab Testing — And How to Avoid Them</h2>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How Ornate Quality Services Helps with NABL Lab Testing</h2>
              {HELP_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HELP_DO_INTRO}</p>
              <ul className={styles.bulletList}>
                {HELP_DO_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services for NABL Lab Testing?</h2>
              <DataTable
                columns={[
                  { key: "what", header: "What You Get", scope: "row" },
                  { key: "means", header: "What It Means for You" },
                ]}
                rows={WHY_CHOOSE_ROWS}
                getRowKey={(row) => row.what}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_CHOOSE_CLOSING}</p>
            </section>

            <section id="services-directory" className={styles.section}>
              <h2 className={styles.sectionTitle}>Testing Services We Coordinate Across All Disciplines</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DIRECTORY_INTRO}</p>
              <DataTable
                columns={[
                  { key: "service", header: "Testing Service", scope: "row" },
                  { key: "covers", header: "What It Covers" },
                  { key: "who", header: "Who Needs It" },
                ]}
                rows={DIRECTORY_ROWS}
                getRowKey={(row) => row.service}
              />
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry", scope: "row" },
                  { key: "needs", header: "Typical Testing Needs" },
                  { key: "certification", header: "Relevant Certification" },
                ]}
                rows={INDUSTRY_ROWS}
                getRowKey={(row) => row.industry}
              />
            </section>

            <section id="locations" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Lab Testing Services Across India</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "city", header: "City / Region", scope: "row" },
                  { key: "serve", header: "How We Serve You" },
                ]}
                rows={LOCATION_ROWS}
                getRowKey={(row) => row.city}
              />
              <div className={styles.noteBox}>{LOCATIONS_NOTE}</div>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid in NABL Lab Testing</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for Efficient NABL Lab Testing</h2>
              <ul className={styles.bulletList}>
                {TIPS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Accredited Lab Testing vs the Alternatives</h2>
              <DataTable
                columns={[
                  { key: "aspect", header: "Aspect", scope: "row" },
                  { key: "nabl", header: "NABL Accredited Lab Testing" },
                  { key: "non", header: "Non-Accredited Lab Testing" },
                  { key: "inhouse", header: "In-House / Supplier Testing" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.aspect}
              />
            </section>

            <section id="test-reports" className={styles.section}>
              <h2 className={styles.sectionTitle}>Test Reports and Certificates We Help You Obtain</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{REPORTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "need", header: "What You Need", scope: "row" },
                  { key: "do", header: "What We Do" },
                  { key: "scheme", header: "Relevant Scheme" },
                ]}
                rows={REPORT_ROWS}
                getRowKey={(row) => row.need}
              />
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — NABL Lab Testing Services</h2>
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
                          link.href === NABL_PAGE_PATH ? styles.servicesLinkActive : ""
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
