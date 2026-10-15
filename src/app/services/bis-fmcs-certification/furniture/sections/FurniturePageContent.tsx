"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/bisFurniture.module.css";
import heroImg from "@/assests/services/furniture/furniture-hero.jpg";
import workChair from "@/assests/services/furniture/furniture-work-chair.jpg";
import diningChair from "@/assests/services/furniture/furniture-dining-chair.jpg";
import tableImg from "@/assests/services/furniture/furniture-table.jpg";
import storageImg from "@/assests/services/furniture/furniture-storage.jpg";
import bedImg from "@/assests/services/furniture/furniture-bed.jpg";
import bunkImg from "@/assests/services/furniture/furniture-bunk.jpg";
import whatIsImg from "@/assests/services/furniture/furniture-what-is.jpg";
import benefitsImg from "@/assests/services/furniture/furniture-benefits.jpg";
import {
  AIR_PARAGRAPH,
  AIR_ROLES_INTRO,
  AIR_ROLES_ITEMS,
  AMENDMENT_774_INTRO,
  AMENDMENT_774_ITEMS,
  AMENDMENT_ROWS,
  AMENDMENTS_CLOSING,
  AMENDMENTS_INTRO,
  BENEFITS,
  DOCUMENT_ROWS,
  DOCUMENTS_INTRO,
  DOMESTIC_CLOSING,
  DOMESTIC_INTRO,
  DOMESTIC_STEPS,
  FAQ_ITEMS,
  FINAL_CTA,
  FMCS_CLOSING,
  FMCS_PARAGRAPHS,
  FMCS_STEPS,
  HELP_CLOSING,
  HELP_INTRO,
  HELP_ITEMS,
  HERO,
  HERO_STATS,
  IMPORTER_INTRO,
  IMPORTER_ITEMS,
  IMPORT_RELIEF_PARAGRAPHS,
  IN_HOUSE_LAB,
  KEY_TERMS,
  LEAD_MODEL,
  MANDATORY_PARAGRAPHS,
  MARKING_PARAGRAPHS,
  MISTAKES,
  MSME_PARAGRAPHS,
  NOT_COVERED,
  OVERVIEW_PARAGRAPHS,
  OVERVIEW_TITLE,
  PENALTY,
  PRODUCT_CATEGORIES,
  QCO_SUMMARY_ROWS,
  QUICK_ANSWER,
  QUICK_FACTS,
  RELATED_SERVICES,
  SOURCE_LINKS,
  SOURCES,
  STANDARD_DETAILS,
  STANDARDS_INTRO,
  STANDARDS_ROWS,
  TESTING_CLOSING,
  TESTING_INTRO,
  TESTING_ITEMS,
  TFQCO_PARAGRAPHS,
  TIMELINE,
  VALIDITY,
  VISUAL_STEPS,
  WHAT_IS_IMAGE_NOTE,
  WHAT_IS_PARAGRAPHS,
  WHO_NEEDS_CLOSING,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
} from "../data/furnitureContent";

const CATEGORY_IMAGES = {
  workChair,
  diningChair,
  table: tableImg,
  storage: storageImg,
  bed: bedImg,
  bunk: bunkImg,
};

export function FurniturePageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className={`${styles.page} ${manrope.className}`}>
      <section className={styles.hero} aria-label="BIS certification for furniture">
        <div className={styles.heroInner}>
          <div>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <Link href="/services/bis-fmcs-certification">FMCS Certification</Link>
              <span>/</span>
              <span>BIS Certification for Furniture</span>
            </nav>
            <p className={styles.kicker}>{HERO.kicker}</p>
            <h1 className={`${styles.heroTitle} ${playfair.className}`}>{HERO.title}</h1>
            <p className={styles.heroText}>{HERO.subtitle}</p>
            <div className={styles.heroStats}>
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className={styles.heroStatValue}>{stat.value}</div>
                  <div className={styles.heroStatLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.heroCtas}>
              <Link href="/contact" className={styles.cta}>
                {HERO.cta}
              </Link>
              <a
                href={HERO.pdfHref}
                className={styles.pdfBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.pdfCta}
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image src={heroImg} alt="Certified furniture in a home setting" fill sizes="(max-width: 900px) 100vw, 520px" className={styles.heroImg} priority />
          </div>
        </div>
      </section>

      <section className={styles.overviewSection} aria-labelledby="furniture-overview">
        <div className={styles.wrap}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <p className={styles.sectionKicker}>Overview</p>
              <h2 id="furniture-overview" className={`${styles.overviewTitle} ${playfair.className}`}>
                {OVERVIEW_TITLE}
              </h2>
              <p className={styles.overviewLead}>{OVERVIEW_PARAGRAPHS[0]}</p>
              <a className={styles.readMore} href="#qco-order">
                Read More About QCO →
              </a>
            </div>
            <aside className={styles.facts} aria-label="Quick facts">
              <h3 className={styles.factsHeading}>Quick Facts</h3>
              <dl className={styles.factsList}>
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className={styles.factRow}>
                    <dt className={styles.factLabel}>{fact.label}</dt>
                    <dd className={styles.factValue}>{fact.short}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.section} id="categories">
        <div className={styles.wrap}>
          <p className={styles.sectionKicker}>Product categories</p>
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Furniture Products Covered Under QCO</h2>
          <p className={styles.lead}>The order applies to the following six categories.</p>
          <div className={styles.catGrid}>
            {PRODUCT_CATEGORIES.map((cat) => (
              <a key={cat.standard} className={styles.catCard} href="#standards">
                <div className={styles.catThumb}>
                  <Image src={CATEGORY_IMAGES[cat.image]} alt={cat.title} fill sizes="180px" className={styles.catThumbImg} />
                </div>
                <h3 className={styles.catTitle}>{cat.title}</h3>
                <p className={styles.catStd}>{cat.standard}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whatSection} id="what-is">
        <div className={styles.wrap}>
          <div className={styles.whatGrid}>
            <div className={styles.whatCard}>
              <p className={styles.sectionKicker}>Key ideas</p>
              <h2 className={`${styles.whatTitle} ${playfair.className}`}>What Is BIS Certification for Furniture?</h2>
              <p className={styles.whatLead}>{WHAT_IS_PARAGRAPHS[0]}</p>
              <div className={styles.terms}>
                {KEY_TERMS.map((item) => (
                  <div key={item.term} className={styles.termChip}>
                    <strong>{item.term}</strong>
                    <span>{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.photoCard}>
              <Image src={whatIsImg} alt="Certified furniture for the Indian market" fill sizes="480px" className={styles.photoCardImg} />
              <p className={styles.photoNote}>{WHAT_IS_IMAGE_NOTE}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-to">
        <div className={styles.wrap}>
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>How to Get BIS Certification for Furniture?</h2>
          <p className={styles.lead}>The certification process involves both product testing and factory inspection.</p>
          <div className={styles.steps}>
            {VISUAL_STEPS.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="benefits">
        <div className={styles.wrap}>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitPhoto}>
              <Image src={benefitsImg} alt="Furniture certified for the Indian market" fill sizes="560px" className={styles.benefitPhotoImg} />
              <div className={styles.benefitCopy}>
                <h3 className={playfair.className}>Benefits of BIS Certification for Furniture</h3>
                <Link href="/contact" className={styles.cta}>
                  Get Expert Consultation
                </Link>
              </div>
            </div>
            <div className={styles.benefitCards}>
              {BENEFITS.map((item) => (
                <div key={item.title} className={styles.benefitCard}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.wrap} ${styles.guide}`}>
        <article className={styles.panel} id="qco-order">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Furniture QCO summary</h2>
          <p className={styles.lead}>{OVERVIEW_PARAGRAPHS[1]}</p>
          <p className={styles.quickAnswer}>{QUICK_ANSWER}</p>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Key Fact</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {QCO_SUMMARY_ROWS.map((row) => (
                  <tr key={row.key}>
                    <th scope="row">{row.key}</th>
                    <td>{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className={styles.panel} id="what-is-meaning">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>What the licence, ISI mark and CM/L number mean</h2>
          {WHAT_IS_PARAGRAPHS.slice(1).map((p) => (
            <p key={p.slice(0, 28)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="mandatory">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Is BIS Mandatory for Furniture? The Furniture Quality Control Order 2025</h2>
          {MANDATORY_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 28)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="amendments">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Furniture QCO Latest Update: 2026 Amendments</h2>
          <p className={styles.lead}>{AMENDMENTS_INTRO}</p>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Notification</th>
                  <th>What it does</th>
                </tr>
              </thead>
              <tbody>
                {AMENDMENT_ROWS.map((row) => (
                  <tr key={row.notification}>
                    <td>{row.date}</td>
                    <td>{row.notification}</td>
                    <td>{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.lead}>{AMENDMENTS_CLOSING}</p>
          <h3 className={styles.factsTitle}>What the Furniture Quality Control Amendment Order 2026 Changed</h3>
          <p className={styles.lead}>{AMENDMENT_774_INTRO}</p>
          <ul className={styles.list}>
            {AMENDMENT_774_ITEMS.map((item) => (
              <li key={item.slice(0, 24)}>{item}</li>
            ))}
          </ul>
          <h3 className={styles.factsTitle}>Furniture QCO MSME Exemption (S.O. 777(E))</h3>
          {MSME_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Furniture QCO Second Amendment 2026: The Import Relief Has Ended</h3>
          {IMPORT_RELIEF_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Transition Facilitation Quality Control Order 2026: Does Furniture Move to Scheme-II?</h3>
          {TFQCO_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="who-needs">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Who Needs BIS Certification for Furniture?</h2>
          <p className={styles.lead}>{WHO_NEEDS_INTRO}</p>
          <ul className={styles.list}>
            {WHO_NEEDS_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.lead}>{WHO_NEEDS_CLOSING}</p>
        </article>

        <article className={styles.panel} id="standards">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Indian Standards for Furniture: Six Categories Under BIS Certification</h2>
          <p className={styles.lead}>{STANDARDS_INTRO}</p>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Indian Standard</th>
                  <th>Typical products</th>
                  <th>Examples of what is assessed</th>
                </tr>
              </thead>
              <tbody>
                {STANDARDS_ROWS.map((row) => (
                  <tr key={row.standard}>
                    <th scope="row">{row.category}</th>
                    <td>{row.standard}</td>
                    <td>{row.typical}</td>
                    <td>{row.assessed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {STANDARD_DETAILS.map((block) => (
            <div key={block.title}>
              <h3 className={styles.factsTitle}>{block.title}</h3>
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className={styles.lead}>
                  {p}
                </p>
              ))}
            </div>
          ))}
          <h3 className={styles.factsTitle}>What Is Not Covered by the Furniture QCO?</h3>
          <p className={styles.lead}>{NOT_COVERED}</p>
        </article>

        <article className={styles.panel} id="testing">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>BIS Furniture Testing: What Is Tested?</h2>
          <p className={styles.lead}>{TESTING_INTRO}</p>
          <ul className={styles.list}>
            {TESTING_ITEMS.map((item) => (
              <li key={item.slice(0, 20)}>{item}</li>
            ))}
          </ul>
          <p className={styles.lead}>{TESTING_CLOSING}</p>
          <h3 className={styles.factsTitle}>Lead Model Grouping: Certify More Models With Fewer Tests</h3>
          <p className={styles.lead}>{LEAD_MODEL}</p>
          <h3 className={styles.factsTitle}>In-House Lab and Factory Control</h3>
          <p className={styles.lead}>{IN_HOUSE_LAB}</p>
        </article>

        <article className={styles.panel} id="domestic-process">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>BIS Certification Process for Furniture: Domestic Manufacturers</h2>
          <p className={styles.lead}>{DOMESTIC_INTRO}</p>
          <ol className={styles.list}>
            {DOMESTIC_STEPS.map((step) => (
              <li key={step.slice(0, 24)}>{step}</li>
            ))}
          </ol>
          <p className={styles.lead}>{DOMESTIC_CLOSING}</p>
        </article>

        <article className={styles.panel} id="fmcs">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>FMCS for Furniture: BIS Certification for Foreign Furniture Manufacturers</h2>
          {FMCS_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 28)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Role of the Authorized Indian Representative (AIR)</h3>
          <p className={styles.lead}>{AIR_PARAGRAPH}</p>
          <p className={styles.lead}>{AIR_ROLES_INTRO}</p>
          <ol className={styles.list}>
            {AIR_ROLES_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ol>
          <h3 className={styles.factsTitle}>FMCS Process for Furniture, Step by Step</h3>
          <ol className={styles.list}>
            {FMCS_STEPS.map((step) => (
              <li key={step.slice(0, 24)}>{step}</li>
            ))}
          </ol>
          <p className={styles.lead}>{FMCS_CLOSING}</p>
          <h3 className={styles.factsTitle}>Furniture QCO Checklist for Importers</h3>
          <p className={styles.lead}>{IMPORTER_INTRO}</p>
          <ul className={styles.list}>
            {IMPORTER_ITEMS.map((item) => (
              <li key={item.slice(0, 24)}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="documents">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Documents Required for BIS Furniture Certification</h2>
          <p className={styles.lead}>{DOCUMENTS_INTRO}</p>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Document group</th>
                  <th>Domestic (Scheme-I)</th>
                  <th>Foreign (FMCS)</th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENT_ROWS.map((row) => (
                  <tr key={row.group}>
                    <th scope="row">{row.group}</th>
                    <td>{row.domestic}</td>
                    <td>{row.fmcs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className={styles.panel} id="timeline">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>How Long Does BIS Certification for Furniture Take?</h2>
          <p className={styles.lead}>{TIMELINE}</p>
          <h3 className={styles.factsTitle}>Validity, Renewal and Post-Licence Compliance</h3>
          <p className={styles.lead}>{VALIDITY}</p>
        </article>

        <article className={styles.panel} id="marking">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>ISI Mark on Furniture: CM/L Number and Marking Requirements</h2>
          {MARKING_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 28)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Penalty for Selling Furniture Without ISI Mark</h3>
          <p className={styles.lead}>{PENALTY}</p>
        </article>

        <article className={styles.panel} id="mistakes">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Common Mistakes That Delay BIS Approval for Furniture</h2>
          <ul className={styles.list}>
            {MISTAKES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="help">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>How Ornate Quality Services Helps: BIS Consultant for Furniture</h2>
          <p className={styles.lead}>{HELP_INTRO}</p>
          <ul className={styles.list}>
            {HELP_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.lead}>{HELP_CLOSING}</p>
          <h3 className={styles.factsTitle}>Related Services</h3>
          <div className={styles.related}>
            {RELATED_SERVICES.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </article>

        <article className={`${styles.panel} ${styles.sources}`} id="sources">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Sources and Last Updated</h2>
          <p className={styles.lead}>{SOURCES}</p>
          <p className={styles.lead}>
            Official pages:{" "}
            {SOURCE_LINKS.map((link, i) => (
              <span key={link.href}>
                {i > 0 ? " · " : null}
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </span>
            ))}
          </p>
          <p className={styles.lead}>{FINAL_CTA}</p>
          <Link href="/contact" className={styles.cta}>
            Contact Ornate Quality Services
          </Link>
        </article>
      </div>

      <section className={styles.section} id="faq">
        <div className={styles.wrap}>
          <div className={styles.faqHead}>
            <p className={styles.sectionKicker}>FAQ</p>
            <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.faqGrid}>
            {FAQ_ITEMS.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.q} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqBtn}
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                  >
                    {item.q}
                    <span aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                  {open ? <p className={styles.faqAnswer}>{item.a}</p> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.bottomCta} aria-label="Get expert guidance">
        <div className={styles.bottomInner}>
          <div>
            <h2 className={playfair.className}>Get Expert Guidance for BIS Certification</h2>
            <p>Our experts will help you with documentation, testing, inspection and complete scheme-I or FMCS support for your furniture product.</p>
          </div>
          <Link href="/contact" className={styles.bottomCtaBtn}>
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
}
