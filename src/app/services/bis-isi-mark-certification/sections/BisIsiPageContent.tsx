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
  BIS_ISI_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  WHAT_YOU_GET_HEADING,
  WHAT_YOU_GET_ITEMS,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_RELEVANT,
  WHAT_IS_CLOSING,
  WHY_MATTERS_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  BENEFITS_ITEMS,
  SERVICE_INCLUDES,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_WHO_HEADING,
  ELIGIBILITY_WHO,
  ELIGIBILITY_CLOSER_HEADING,
  ELIGIBILITY_CLOSER,
  ELIGIBILITY_CLOSING,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  TIMELINE_PARAGRAPH,
  COST_INTRO,
  COST_FACTORS,
  COST_CLOSING,
  VALIDITY_PARAGRAPH,
  RENEWAL_INTRO,
  RENEWAL_WHEN_TITLE,
  RENEWAL_WHEN_TEXT,
  RENEWAL_PROCESS_TITLE,
  RENEWAL_PROCESS_TEXT,
  RENEWAL_PRECAUTIONS_HEADING,
  RENEWAL_PRECAUTIONS,
  RENEWAL_CLOSING,
  COMPLIANCE_INTRO,
  COMPLIANCE_ITEMS,
  COMPLIANCE_CLOSING,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_CLOSING,
  WHY_CHOOSE_ITEMS,
  WHY_CHOOSE_CLOSING,
  WHERE_WE_SERVE_INTRO,
  WHERE_WE_SERVE_CITIES,
  WHERE_WE_SERVE_CLOSING,
  INDUSTRIES_INTRO,
  INDUSTRIES_ITEMS,
  INDUSTRIES_CLOSING,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  SCHEME_COMPARISON_ROWS,
  SCHEME_COMPARISON_NOTE,
  PRODUCTS_INTRO,
  FOOTWEAR_EXPANDED_HEADING,
  FOOTWEAR_EXPANDED,
  QCO_INTRO,
  FAQ_ITEMS,
  GET_STARTED_PARAGRAPH,
  type TableRow,
} from "../data/bisIsiContent";
import { PRODUCTS_COVERED, QCO_ROWS } from "../data/bisIsiProductTables";

const ISI_PAGE_PATH = "/services/bis-isi-mark-certification";

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
      idPrefix="isi"
      defaultService="BIS ISI Mark Certification"
      serviceOptions={[
        "BIS ISI Mark Certification",
        "BIS CRS Registration",
        "FMCS Certification",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our ISI certification expert will contact you within one business day."
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

export function BisIsiPageContent() {
  const [activeId, setActiveId] = useState(BIS_ISI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BIS_ISI_TOC.map((item) => item.id);
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
              {BIS_ISI_TOC.map((item, i) => (
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
              <h3 className={styles.subsectionTitle}>{WHAT_YOU_GET_HEADING}</h3>
              <ul className={styles.bulletList}>
                {WHAT_YOU_GET_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Apply for ISI Mark Certification →
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Get Quote for ISI Mark Certification →
                </Link>
              </div>
                </div>

            <section id="what-is-isi" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is BIS-ISI Mark Certification?</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="BIS-ISI Mark Certification for domestic manufacturers in India"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>
                {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                    {paragraph}
                  </p>
                ))}
                <ul className={styles.bulletList}>
                  {WHAT_IS_RELEVANT.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {WHAT_IS_CLOSING.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Is BIS-ISI Mark Certification Important?</h2>
              <ul className={styles.bulletList}>
                {WHY_MATTERS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs BIS-ISI Mark Certification?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of BIS-ISI Mark Certification</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                </li>
                ))}
              </ul>
            </section>

            <section id="service-includes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our BIS Certification Service</h2>
              <ul className={styles.bulletList}>
                {SERVICE_INCLUDES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for BIS-ISI Mark Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_WHO_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_WHO.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_CLOSER_HEADING}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_CLOSER.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_CLOSING}</p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for BIS-ISI Mark Certification</h2>
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step BIS-ISI Mark Certification Process</h2>
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
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline for BIS-ISI Mark Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_PARAGRAPH}</p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors in BIS-ISI Mark Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity of BIS-ISI Mark Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_PARAGRAPH}</p>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal of BIS-ISI Mark Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>
                <strong>{RENEWAL_WHEN_TITLE}.</strong> {RENEWAL_WHEN_TEXT}
              </p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>
                <strong>{RENEWAL_PROCESS_TITLE}.</strong> {RENEWAL_PROCESS_TEXT}
              </p>
              <h3 className={styles.subsectionTitle}>{RENEWAL_PRECAUTIONS_HEADING}</h3>
              <ul className={styles.bulletList}>
                {RENEWAL_PRECAUTIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_CLOSING}</p>
            </section>

            <section id="compliance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Staying Compliant After Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPLIANCE_INTRO}</p>
              <ul className={styles.bulletList}>
                {COMPLIANCE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPLIANCE_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in BIS-ISI Mark Certification</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_CLOSING}</p>
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt. Ltd.</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_CHOOSE_CLOSING}</p>
            </section>

            <section id="where-we-serve" className={styles.section}>
              <h2 className={styles.sectionTitle}>Where We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHERE_WE_SERVE_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHERE_WE_SERVE_CITIES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHERE_WE_SERVE_CLOSING}</p>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
                  <ul className={styles.bulletList}>
                {INDUSTRIES_ITEMS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}.</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="scheme-comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS Scheme-I in Context: How It Compares</h2>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "whatToKnow", header: "What to Know" },
                ]}
                rows={SCHEME_COMPARISON_ROWS}
                getRowKey={(row) => row.comparison}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SCHEME_COMPARISON_NOTE}</p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products Covered Under BIS-ISI Mark Certification (Scheme-I)</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PRODUCTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "product", header: "Product Name", scope: "row" },
                  { key: "isNumber", header: "Applicable Indian Standard (IS Number)" },
                  { key: "mandatory", header: "Certification Mandatory" },
                  { key: "audience", header: "Target Audience" },
                  { key: "dedicatedPage", header: "Dedicated Product Page" },
                ]}
                rows={PRODUCTS_COVERED}
                getRowKey={(row) => row.product}
              />
              <h3 className={styles.subsectionTitle}>{FOOTWEAR_EXPANDED_HEADING}</h3>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{FOOTWEAR_EXPANDED}</p>
            </section>

            <section id="qco-reference" className={styles.section}>
              <h2 className={styles.sectionTitle}>QCO / Gazette Notification Reference</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{QCO_INTRO}</p>
              <DataTable
                columns={[
                  { key: "category", header: "Product / Category", scope: "row" },
                  { key: "qco", header: "Quality Control Order" },
                  { key: "gazette", header: "Gazette / S.O. Reference" },
                  { key: "keyDates", header: "Key Dates" },
                  { key: "status", header: "Verification Status" },
                ]}
                rows={QCO_ROWS}
                getRowKey={(row) => row.category}
              />
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>Talk to a BIS-ISI Mark Certification Expert</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GET_STARTED_PARAGRAPH}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Start Your ISI Mark Certification Application →
                </Link>
                <Link href="/contact" className={styles.ctaBtnSecondary}>
                  Request a Cost Estimate →
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
                          link.href === ISI_PAGE_PATH ? styles.servicesLinkActive : ""
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
