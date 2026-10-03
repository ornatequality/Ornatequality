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
  CE_TOC,
  BANNER_TITLE,
  BANNER_SUBTITLE,
  BANNER_DESCRIPTION,
  SERVICES_LEAD,
  WHAT_YOU_GET,
  INTRO_PARAGRAPHS,
  WHAT_IS_PARAGRAPHS,
  WHAT_IS_POINT,
  WHAT_IS_CLOSING,
  TERMINOLOGY_INTRO,
  TERMINOLOGY_ROWS,
  TERMINOLOGY_CLOSING,
  WHY_ITEMS,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  BENEFITS_ITEMS,
  SERVICES_INTRO,
  SERVICES_ITEMS,
  ELIGIBILITY_PARAGRAPHS,
  ELIGIBILITY_NEED_INTRO,
  ELIGIBILITY_NEED,
  ELIGIBILITY_NOTE,
  DOCUMENTS_INTRO,
  DOCUMENTS_ROWS,
  DOCUMENTS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PROCESS_APPLY,
  TIMELINE_INTRO,
  TIMELINE_ITEMS,
  TIMELINE_CLOSING,
  COST_INTRO,
  COST_INCREASE_INTRO,
  COST_INCREASE,
  COST_REDUCE_INTRO,
  COST_REDUCE,
  COST_CLOSING,
  COST_NOTE,
  VALIDITY_PARAGRAPHS,
  RENEWAL_INTRO,
  RENEWAL_WHEN,
  RENEWAL_CLOSING,
  TESTING_INTRO,
  TESTING_MANAGE_INTRO,
  TESTING_ITEMS,
  TESTING_NOTE,
  DIRECTIVES_INTRO,
  DIRECTIVES_COMMON,
  DIRECTIVES_ROWS,
  DIRECTIVES_NOTE,
  DIRECTIVES_CLOSING,
  CHALLENGES_ITEMS,
  MISTAKES_ROWS,
  TIPS_ITEMS,
  COMPARISON_INTRO,
  COMPARISON_ROWS,
  COMPARISON_CLOSING,
  HELP_INTRO,
  HELP_ITEMS,
  HELP_NOTE,
  WHY_CHOOSE_ITEMS,
  LOCATIONS_INTRO,
  LOCATION_ROWS,
  LOCATIONS_CLOSING,
  INDUSTRIES_INTRO,
  INDUSTRY_ROWS,
  FAQ_ITEMS,
  CTA_TITLE,
  CTA_INTRO,
  CTA_WAYS,
  CTA_URGENT,
  CTA_FOOTER,
  type TableRow,
} from "../data/ceContent";

const CE_PAGE_PATH = "/services/ce-certification";

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
      idPrefix="ce"
      defaultService="CE Certification"
      serviceOptions={[
        "CE Certification",
        "WPC-ETA Approval",
        "TEC Certification",
        "BIS CRS Registration",
        "BEE Certification",
        "Other",
      ]}
      successText="Our CE certification expert will contact you within one business day."
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
  { label: "Talk to a CE marking consultant", href: "/contact" },
  { label: "Request a CE certification quote", href: "/contact" },
];

const FINAL_CTAS = [
  { label: "Request a CE certification quote", href: "/contact" },
  { label: "Book a CE marking consultation", href: "/contact" },
  { label: "CE certification enquiry", href: "/contact" },
  { label: "CE marking proposal request", href: "/contact" },
];

export function CePageContent() {
  const [activeId, setActiveId] = useState(CE_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = CE_TOC.map((item) => item.id);
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
              {CE_TOC.map((item, i) => (
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SERVICES_LEAD}</p>
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
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introFlow}>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="CE certification support for Indian manufacturers exporting to Europe"
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
              <h2 className={styles.sectionTitle}>What Is CE Certification?</h2>
              {WHAT_IS_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <div className={styles.noteBox}>{WHAT_IS_POINT}</div>
              {WHAT_IS_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="terminology" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why the Terminology Matters</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TERMINOLOGY_INTRO}</p>
              <DataTable
                columns={[
                  { key: "term", header: "Term You May Hear", scope: "row" },
                  { key: "meaning", header: "What It Actually Means" },
                ]}
                rows={TERMINOLOGY_ROWS}
                getRowKey={(row) => row.term}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TERMINOLOGY_CLOSING}</p>
            </section>

            <section id="why-important" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why CE Certification Matters for Your Business</h2>
              {WHY_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs CE Certification?</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{WHO_NEEDS_INTRO}</p>
              <ul className={styles.bulletList}>
                {WHO_NEEDS_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="services-include" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Our CE Certification Services Include</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{SERVICES_INTRO}</p>
              <ul className={styles.bulletList}>
                {SERVICES_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="eligibility" className={styles.section}>
              <h2 className={styles.sectionTitle}>Eligibility: Who Can Apply and What You Need First</h2>
              {ELIGIBILITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
              <h3 className={styles.subsectionTitle}>{ELIGIBILITY_NEED_INTRO}</h3>
              <ul className={styles.bulletList}>
                {ELIGIBILITY_NEED.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{ELIGIBILITY_NOTE}</div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for CE Marking</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DOCUMENTS_INTRO}</p>
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
              <h2 className={styles.sectionTitle}>Step-by-Step CE Certification Process</h2>
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
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{PROCESS_APPLY}</p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TIMELINE_INTRO}</p>
              <ul className={styles.bulletList}>
                {TIMELINE_ITEMS.map((item) => (
                  <li key={item.title} className={styles.textJustify}>
                    <strong>{item.title}</strong> — {item.text}
                  </li>
                ))}
              </ul>
              {TIMELINE_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Cost Factors</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_INTRO}</p>
              <h3 className={styles.subsectionTitle}>{COST_INCREASE_INTRO}</h3>
              <ul className={styles.bulletList}>
                {COST_INCREASE.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>{COST_REDUCE_INTRO}</h3>
              <ul className={styles.bulletList}>
                {COST_REDUCE.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COST_CLOSING}</p>
              <div className={styles.noteBox}>{COST_NOTE}</div>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity</h2>
              {VALIDITY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="renewal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Renewal and Maintenance</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{RENEWAL_INTRO}</p>
              <ul className={styles.bulletList}>
                {RENEWAL_WHEN.map((item) => (
                  <li key={item} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              {RENEWAL_CLOSING.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`${styles.sectionText} ${styles.textJustify}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section id="testing" className={styles.section}>
              <h2 className={styles.sectionTitle}>Testing and Verification</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TESTING_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{TESTING_MANAGE_INTRO}</p>
              <ul className={styles.bulletList}>
                {TESTING_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.noteBox}>{TESTING_NOTE}</div>
            </section>

            <section id="directives" className={styles.section}>
              <h2 className={styles.sectionTitle}>Directives and Product Coverage</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DIRECTIVES_INTRO}</p>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DIRECTIVES_COMMON}</p>
              <DataTable
                columns={[
                  { key: "category", header: "Product Category", scope: "row" },
                  { key: "products", header: "Products Covered" },
                  { key: "directive", header: "EU Directive / Regulation Typically in Scope" },
                  { key: "audience", header: "Target Audience" },
                  { key: "page", header: "Dedicated Product Page" },
                ]}
                rows={DIRECTIVES_ROWS}
                getRowKey={(row) => row.category}
              />
              <div className={styles.noteBox}>{DIRECTIVES_NOTE}</div>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{DIRECTIVES_CLOSING}</p>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Challenges</h2>
              {CHALLENGES_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="mistakes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Common Mistakes and How to Avoid Them</h2>
              <DataTable
                columns={[
                  { key: "mistake", header: "Mistake", scope: "row" },
                  { key: "causes", header: "What It Causes" },
                  { key: "avoid", header: "How to Avoid It" },
                ]}
                rows={MISTAKES_ROWS}
                getRowKey={(row) => row.mistake}
              />
            </section>

            <section id="expert-tips" className={styles.section}>
              <h2 className={styles.sectionTitle}>Expert Tips</h2>
              <ul className={styles.bulletList}>
                {TIPS_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>How CE Marking Compares With Other Certifications</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_INTRO}</p>
              <DataTable
                columns={[
                  { key: "comparison", header: "Comparison", scope: "row" },
                  { key: "difference", header: "Key Difference" },
                ]}
                rows={COMPARISON_ROWS}
                getRowKey={(row) => row.comparison}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{COMPARISON_CLOSING}</p>
            </section>

            <section id="how-we-help" className={styles.section}>
              <h2 className={styles.sectionTitle}>How We Help</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{HELP_INTRO}</p>
              {HELP_ITEMS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={`${styles.sectionText} ${styles.textJustify}`}>{item.text}</p>
                </div>
              ))}
              <div className={styles.noteBox}>{HELP_NOTE}</div>
            </section>

            <section id="why-choose" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Service Pvt Ltd</h2>
              <ul className={styles.bulletList}>
                {WHY_CHOOSE_ITEMS.map((item) => (
                  <li key={item.slice(0, 48)} className={styles.textJustify}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="locations" className={styles.section}>
              <h2 className={styles.sectionTitle}>Where We Work</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_INTRO}</p>
              <DataTable
                columns={[
                  { key: "location", header: "Location", scope: "row" },
                  { key: "support", header: "How We Support Manufacturers Here" },
                ]}
                rows={LOCATION_ROWS}
                getRowKey={(row) => row.location}
              />
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{LOCATIONS_CLOSING}</p>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries Served</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{INDUSTRIES_INTRO}</p>
              <DataTable
                columns={[
                  { key: "industry", header: "Industry", scope: "row" },
                  { key: "why", header: "Why CE Marking Applies" },
                ]}
                rows={INDUSTRY_ROWS}
                getRowKey={(row) => row.industry}
              />
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={styles.section}>
              <h2 className={styles.sectionTitle}>{CTA_TITLE}</h2>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_INTRO}</p>
              <ul className={styles.bulletList}>
                {CTA_WAYS.map((item) => (
                  <li key={item}>
                    <Link href="/contact" className={styles.textJustify}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className={`${styles.sectionText} ${styles.textJustify}`}>{CTA_URGENT}</p>
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
                          link.href === CE_PAGE_PATH ? styles.servicesLinkActive : ""
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
