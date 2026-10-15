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
  BIS_FMCS_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  INTRO_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_DIFFERENCES,
  WHAT_IS_CLOSING,
  WHY_MATTERS_PARAGRAPHS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  WHO_NEEDS_CLOSING,
  BENEFITS_ITEMS,
  SERVICE_INCLUDES,
  ELIGIBILITY_INTRO,
  ELIGIBILITY_CRITERIA,
  ELIGIBILITY_CLOSING,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_CLOSING,
  TIMELINE_PARAGRAPH,
  COST_INTRO,
  COST_FACTORS,
  COST_CLOSING_PARAGRAPHS,
  VALIDITY_PARAGRAPH,
  RENEWAL_PARAGRAPH,
  CHALLENGES_ITEMS,
  HOW_WE_HELP_INTRO,
  HOW_WE_HELP_ITEMS,
  HOW_WE_HELP_CLOSING,
  WHY_CHOOSE_INTRO,
  WHY_CHOOSE_ITEMS,
  INDUSTRIES_INTRO,
  INDUSTRIES_TABLE_NOTE,
  INDUSTRIES_CONSTRUCTION_INTRO,
  INDUSTRIES_ELECTRICAL_INTRO,
  INDUSTRIES_AUTOMOTIVE_INTRO,
  INDUSTRIES_METALS_INTRO,
  INDUSTRIES_CHEMICALS_INTRO,
  INDUSTRIES_CHEMICALS_NOTE,
  INDUSTRIES_TOYS_INTRO,
  INDUSTRIES_FURNITURE_INTRO,
  INDUSTRIES_FURNITURE_NOTE,
  INDUSTRIES_FOOTWEAR_INTRO,
  INDUSTRIES_FOOTWEAR_NOTE,
  INDUSTRIES_MEDICAL_NOTE,
  INDUSTRIES_CLOSING,
  MISTAKES_ITEMS,
  EXPERT_TIPS,
  SCHEME_COMPARISON_INTRO,
  SCHEME_COMPARISON_ROWS,
  SCHEME_COMPARISON_NOTE,
  FAQ_ITEMS,
  GET_STARTED_INTRO,
  GET_STARTED_CTA_LINE,
  GET_STARTED_CLOSING,
  type TableRow,
} from "../data/bisFmcsContent";
import {
  CONSTRUCTION_PRODUCTS,
  ELECTRICAL_PRODUCTS,
  AUTOMOTIVE_PRODUCTS,
  METALS_STEEL_PRODUCTS,
  CHEMICAL_PRODUCTS,
  TOY_PRODUCTS,
  FURNITURE_PRODUCTS,
  FOOTWEAR_PRODUCTS,
} from "../data/bisFmcsProductTables";

const FMCS_PAGE_PATH = "/services/bis-fmcs-certification";

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
                if (col.key === "dedicatedPage" && value.startsWith("/")) {
                  return (
                    <td key={col.key}>
                      <Link href={value}>View dedicated page</Link>
                    </td>
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

const PRODUCT_TABLE_COLUMNS: DataTableColumn[] = [
  { key: "product", header: "Product Name", scope: "row" },
  { key: "isNumber", header: "Applicable IS Number" },
  { key: "mandatory", header: "Mandatory (Y/N)" },
  { key: "dedicatedPage", header: "Dedicated Product Page" },
];

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="fmcs"
      defaultService="BIS FMCS Certification"
      serviceOptions={[
        "BIS FMCS Certification",
        "BIS ISI Mark Certification",
        "BIS CRS Registration",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our FMCS certification expert will contact you within one business day."
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

export function BisFmcsPageContent() {
  const [activeId, setActiveId] = useState(BIS_FMCS_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BIS_FMCS_TOC.map((item) => item.id);
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
              {BIS_FMCS_TOC.map((item, i) => (
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
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Talk to our FMCS Certification team →
                </Link>
                <a href="tel:+919266877738" className={styles.ctaBtnSecondary}>
                  📞 Expert Consultation
                </a>
              </div>
            </div>

            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>FMCS Certification: An Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="FMCS certification for foreign manufacturers exporting to India"
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

            <section id="what-is-fmcs" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Is FMCS Certification?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <ul className={styles.bulletList}>
                {WHAT_IS_DIFFERENCES.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              {WHAT_IS_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why FMCS Certification Matters</h2>
              {WHY_MATTERS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs FMCS Certification?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong>
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_CLOSING}</p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of FMCS Certification</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="service-includes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features of Our FMCS Certification Service</h2>
              <ul className={styles.bulletList}>
                {SERVICE_INCLUDES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility for FMCS Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_INTRO}</p>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_CRITERIA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{ELIGIBILITY_CLOSING}</p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for FMCS Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "document", header: "Document / Requirement", scope: "row" },
                  { key: "purpose", header: "Why It's Needed" },
                ]}
                rows={DOCUMENTS_ROWS}
                getRowKey={(row) => row.document}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_CLOSING}</p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Step-by-Step FMCS Certification Process</h2>
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_CLOSING}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>FMCS Certification Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_PARAGRAPH}</p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Factors That Affect FMCS Certification Cost</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <ul className={styles.bulletList}>
                {COST_FACTORS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {COST_CLOSING_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>FMCS Certificate Validity</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{VALIDITY_PARAGRAPH}</p>
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>FMCS Certification Renewal</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_PARAGRAPH}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges in FMCS Certification</h2>
              <ul className={styles.bulletList}>
                {CHALLENGES_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How ornate quality service pvt ltd Helps You</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_INTRO}</p>
              <ul className={styles.bulletList}>
                {HOW_WE_HELP_ITEMS.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HOW_WE_HELP_CLOSING}</p>
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Us for FMCS Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHY_CHOOSE_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve Under FMCS Certification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_TABLE_NOTE}</p>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Construction Materials</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CONSTRUCTION_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={CONSTRUCTION_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Electrical Appliances</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_ELECTRICAL_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={ELECTRICAL_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Automotive Components</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_AUTOMOTIVE_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={AUTOMOTIVE_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Metals and Steel</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_METALS_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={METALS_STEEL_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Chemicals</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CHEMICALS_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={CHEMICAL_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CHEMICALS_NOTE}</p>
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Toys</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_TOYS_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={TOY_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Furniture</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_FURNITURE_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={FURNITURE_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_FURNITURE_NOTE}</p>
              </div>

              <div className={styles.productTableBlock}>
                <h3 className={styles.subsectionTitle}>Footwear</h3>
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_FOOTWEAR_INTRO}</p>
                <DataTable
                  columns={PRODUCT_TABLE_COLUMNS}
                  rows={FOOTWEAR_PRODUCTS}
                  getRowKey={(row) => row.product}
                />
                <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_FOOTWEAR_NOTE}</p>
              </div>

              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_MEDICAL_NOTE}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_CLOSING}</p>
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes to Avoid in FMCS Certification</h2>
              <ul className={styles.bulletList}>
                {MISTAKES_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong>
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips for a Smooth FMCS Certification Journey</h2>
              <ul className={styles.bulletList}>
                {EXPERT_TIPS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="scheme-comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>FMCS Certification vs Other BIS Certification Schemes</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SCHEME_COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "scheme", header: "Scheme", scope: "row" },
                  { key: "who", header: "Who It's For" },
                  { key: "feature", header: "Key Distinguishing Feature" },
                ]}
                rows={SCHEME_COMPARISON_ROWS}
                getRowKey={(row) => row.scheme}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SCHEME_COMPARISON_NOTE}</p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>Start Your FMCS Certification Journey Today</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GET_STARTED_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>
                <strong>{GET_STARTED_CTA_LINE}</strong>
              </p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{GET_STARTED_CLOSING}</p>
              <div className={`${styles.ctaButtons} ${styles.ctaButtonsCenter} ${styles.ctaButtonsOnLight}`}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Apply for FMCS certification →
                </Link>
                <a href="tel:+919266877738" className={styles.ctaBtnSecondary}>
                  📞 Expert Consultation
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
                          link.href === FMCS_PAGE_PATH ? styles.servicesLinkActive : ""
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
