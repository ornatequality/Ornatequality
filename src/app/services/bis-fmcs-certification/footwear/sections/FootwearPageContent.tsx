"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/bisFurniture.module.css";
import heroImg from "@/assests/services/footwear/footwear-hero.jpg";
import leatherBoots from "@/assests/services/footwear/footwear-leather-boots.jpg";
import canvasShoes from "@/assests/services/footwear/footwear-canvas.jpg";
import sportsShoes from "@/assests/services/footwear/footwear-sports.jpg";
import tacticalBoots from "@/assests/services/footwear/footwear-tactical.jpg";
import sandals from "@/assests/services/footwear/footwear-sandals.jpg";
import hawai from "@/assests/services/footwear/footwear-hawai.jpg";
import whatIsImg from "@/assests/services/footwear/footwear-what-is.jpg";
import benefitsImg from "@/assests/services/footwear/footwear-benefits.jpg";
import isiLogo from "@/assests/certi-img/isi.webp";
import {
  AMENDMENT_INTRO,
  AMENDMENT_MEANING,
  AMENDMENT_SECTIONS,
  BENEFITS,
  CHALLENGES,
  COST_CLOSING,
  COST_FACTORS,
  COST_PARAGRAPHS,
  DOCUMENT_ROWS,
  DOCUMENTS_INTRO,
  DOCUMENTS_NOTE,
  ELIGIBILITY_NOTES,
  ELIGIBILITY_PARAGRAPHS,
  ELIGIBILITY_REQUIREMENTS,
  FAQ_ITEMS,
  FINAL_CTA,
  FMCS_PARAGRAPHS,
  HELP_INTRO,
  HELP_ITEMS,
  HERO,
  HERO_STATS,
  IMPORTER_CHECKLIST,
  IMPORTANCE_CLOSING,
  IMPORTANCE_INTRO,
  IMPORTANCE_ITEMS,
  INDUSTRIES,
  KEY_IDEAS,
  KEY_TERMS,
  LEATHER_PRODUCTS,
  LICENCE_BENEFITS,
  LOCATION_STATES,
  LOCATIONS,
  LOCATIONS_INTRO,
  MARKING_PARAGRAPHS,
  MISTAKES,
  MSE_CLOSING,
  MSE_PARAGRAPHS,
  MSE_STEPS,
  NOT_NAMED_CLOSING,
  NOT_NAMED_INTRO,
  NOT_NAMED_ITEMS,
  OVERVIEW_BULLETS,
  OVERVIEW_LEAD,
  OVERVIEW_TITLE,
  PENALTY,
  PPE_PRODUCTS,
  PROCEDURE_NOTE,
  PROCEDURE_ROWS,
  PROCESS_CLOSING,
  PROCESS_INTRO,
  PROCESS_STEPS,
  PRODUCT_CATEGORIES,
  PRODUCT_TABLE_INTRO,
  PRODUCT_TABLE_NOTE,
  QCO_COMPARE_ROWS,
  QCO_COVERED_CLOSING,
  QCO_COVERED_INTRO,
  QCO_ORDERS,
  QCO_PARAGRAPHS,
  QUICK_FACTS,
  RD_CONDITIONS,
  RELATED_SERVICES,
  RUBBER_PRODUCTS,
  SERVICE_FEATURES,
  SERVICE_FEATURES_INTRO,
  TESTING_PARAGRAPHS,
  TIMELINE,
  TIPS,
  VALIDITY_PARAGRAPHS,
  VALIDITY_PRECAUTIONS,
  VISUAL_STEPS,
  WHAT_IS_IMAGE_NOTE,
  WHAT_IS_LEAD,
  WHAT_IS_PARAGRAPHS,
  WHO_NEEDS_CLOSING,
  WHO_NEEDS_INTRO,
  WHO_NEEDS_ITEMS,
  WHY_CHOOSE,
} from "../data/footwearContent";

const CATEGORY_IMAGES = {
  boots: leatherBoots,
  canvas: canvasShoes,
  sports: sportsShoes,
  tactical: tacticalBoots,
  sandals,
  hawai,
};

function ProductTable({
  title,
  rows,
}: {
  title: string;
  rows: { product: string; is: string; audience: string }[];
}) {
  return (
    <>
      <h3 className={styles.factsTitle}>{title}</h3>
      <div className={styles.tableScroll}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Applicable Indian Standard</th>
              <th>Certification Mandatory</th>
              <th>Target Audience</th>
              <th>Dedicated Product Page</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.product}>
                <th scope="row">{row.product}</th>
                <td data-label="Indian Standard">{row.is}</td>
                <td data-label="Certification">{`Yes – under the QCO`}</td>
                <td data-label="Target audience">{row.audience}</td>
                <td data-label="Dedicated page">Coming Soon</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function FootwearPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className={`${styles.page} ${styles.pageFootwear} ${manrope.className}`}>
      <section className={styles.hero} aria-label="BIS certification for footwear">
        <div className={styles.heroInner}>
          <div>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <Link href="/services/bis-certification/isi-mark-certification">BIS ISI Mark Certification</Link>
              <span>/</span>
              <span>BIS Certification for Footwear</span>
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
              <Link href="/contact" className={styles.pdfBtn}>
                {HERO.secondaryCta}
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src={heroImg}
              alt="BIS certified footwear for the Indian market"
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              className={styles.heroImg}
              priority
            />
            <p className={styles.heroCaption}>{HERO.badgeCaption}</p>
            {/* <div className={styles.isiBadge}>
              <Image src={isiLogo} alt="ISI mark" className={styles.isiLogo} />
              <p className={styles.isiStd}>{HERO.badgeStandard}</p>
              <p className={styles.isiCml}>{HERO.badgeLicence}</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className={styles.overviewSection} aria-labelledby="footwear-overview">
        <div className={styles.wrap}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <p className={styles.sectionKicker}>Overview</p>
              <h2 id="footwear-overview" className={`${styles.overviewTitle} ${playfair.className}`}>
                {OVERVIEW_TITLE}
              </h2>
              <p className={styles.overviewLead}>{OVERVIEW_LEAD}</p>
              <ul className={styles.bulletList}>
                {OVERVIEW_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className={styles.readMore} href="#qco-order">
                Read More About Footwear QCO →
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
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Footwear Products Covered Under QCO</h2>
          <p className={styles.lead}>The following types of footwear are commonly covered. Confirm the exact standard for your product.</p>
          <div className={styles.catGrid}>
            {PRODUCT_CATEGORIES.map((cat) => (
              <a key={cat.standard} className={styles.catCard} href="#products">
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
          <p className={styles.sectionKicker}>Key ideas</p>
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>What Is BIS Certification for Footwear?</h2>
          <p className={styles.lead}>{WHAT_IS_LEAD}</p>
          <div className={styles.whatIdeas}>
            {KEY_IDEAS.map((item) => (
              <div key={item.title} className={styles.ideaCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="how-to">
        <div className={styles.wrap}>
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>How to Get BIS Certification for Footwear?</h2>
          <p className={styles.lead}>The certification process involves both product testing and factory inspection.</p>
          <div className={`${styles.steps} ${styles.stepsSix}`}>
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
              <Image src={benefitsImg} alt="Footwear certified for the Indian market" fill sizes="560px" className={styles.benefitPhotoImg} />
              <div className={styles.benefitCopy}>
                <h3 className={playfair.className}>Benefits of BIS Certification for Footwear</h3>
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
        <article className={styles.panel} id="what-is-meaning">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>What the licence, ISI mark and CM/L number mean</h2>
          {WHAT_IS_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <div className={`${styles.photoCard} ${styles.photoEmbed}`}>
            <Image src={whatIsImg} alt="ISI marked footwear" fill sizes="1100px" className={styles.photoCardImg} />
            <p className={styles.photoNote}>{WHAT_IS_IMAGE_NOTE}</p>
          </div>
        </article>

        <article className={styles.panel} id="qco-order">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>What Is Footwear QCO?</h2>
          {QCO_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="importance">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Why BIS Certification for Footwear Is Important</h2>
          <p className={styles.lead}>{IMPORTANCE_INTRO}</p>
          <ul className={styles.list}>
            {IMPORTANCE_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.lead}>{IMPORTANCE_CLOSING}</p>
        </article>

        <article className={styles.panel} id="qco-list">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Footwear QCOs and Products Covered</h2>
          {QCO_COVERED_INTRO.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          {QCO_ORDERS.map((order) => (
            <div key={order.title}>
              <h3 className={styles.factsTitle}>{order.title}</h3>
              <p className={styles.lead}>{order.text}</p>
            </div>
          ))}
          {QCO_COVERED_CLOSING.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Comparing the Three Footwear QCOs</h3>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Point</th>
                  <th>Leather & Other Materials QCO 2024</th>
                  <th>All Rubber & Polymeric QCO 2024</th>
                  <th>PPE Footwear QCO</th>
                </tr>
              </thead>
              <tbody>
                {QCO_COMPARE_ROWS.map((row) => (
                  <tr key={row.point}>
                    <th scope="row">{row.point}</th>
                    <td data-label="Leather & other materials QCO">{row.leather}</td>
                    <td data-label="Rubber & polymeric QCO">{row.rubber}</td>
                    <td data-label="PPE footwear QCO">{row.ppe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className={styles.panel} id="products">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Products Covered Under the Footwear QCOs</h2>
          <p className={styles.lead}>{PRODUCT_TABLE_INTRO}</p>
          <ProductTable title="Footwear made from Leather and other Materials (Quality Control) Order, 2024" rows={LEATHER_PRODUCTS} />
          <ProductTable title="Footwear made from All Rubber and All Polymeric Material and its Components (Quality Control) Order, 2024" rows={RUBBER_PRODUCTS} />
          <ProductTable title="Personal Protective Equipment – Footwear (Quality Control) Amendment Order, 2021" rows={PPE_PRODUCTS} />
          <p className={styles.lead}>{PRODUCT_TABLE_NOTE}</p>
          <h3 className={styles.factsTitle}>What About Footwear Not Named in the Tables?</h3>
          <p className={styles.lead}>{NOT_NAMED_INTRO}</p>
          <ul className={styles.list}>
            {NOT_NAMED_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.lead}>{NOT_NAMED_CLOSING}</p>
        </article>

        <article className={styles.panel} id="amendments">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Latest Footwear QCO Updates – June 2026 Amendments</h2>
          <p className={styles.lead}>{AMENDMENT_INTRO}</p>
          {AMENDMENT_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className={styles.factsTitle}>{section.title}</h3>
              <p className={styles.lead}>{section.text}</p>
            </div>
          ))}
          <ul className={styles.list}>
            {RD_CONDITIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className={styles.factsTitle}>What this means for you</h3>
          {AMENDMENT_MEANING.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Footwear QCO for Micro and Small Enterprises</h3>
          {MSE_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <ol className={styles.list}>
            {MSE_STEPS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className={styles.lead}>{MSE_CLOSING}</p>
        </article>

        <article className={styles.panel} id="who-needs">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Who Needs BIS Certification for Footwear?</h2>
          <p className={styles.lead}>{WHO_NEEDS_INTRO}</p>
          <ul className={styles.list}>
            {WHO_NEEDS_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
          <p className={styles.lead}>{WHO_NEEDS_CLOSING}</p>
        </article>

        <article className={styles.panel} id="licence-benefits">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Key Benefits of Getting Your Footwear BIS Licence</h2>
          <ul className={styles.list}>
            {LICENCE_BENEFITS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="services">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Key Features of Our Footwear BIS Certification Services</h2>
          <p className={styles.lead}>{SERVICE_FEATURES_INTRO}</p>
          <ul className={styles.list}>
            {SERVICE_FEATURES.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="eligibility">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Eligibility for BIS Certification for Footwear</h2>
          {ELIGIBILITY_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Basic footwear BIS certification requirements</h3>
          <ul className={styles.list}>
            {ELIGIBILITY_REQUIREMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className={styles.lead}>{ELIGIBILITY_NOTES}</p>
        </article>

        <article className={styles.panel} id="documents">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Documents Required for BIS Certification for Footwear</h2>
          <p className={styles.lead}>{DOCUMENTS_INTRO}</p>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Document</th>
                  <th>Purpose</th>
                  <th>Mandatory / Optional</th>
                  <th>Additional Notes</th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENT_ROWS.map((row) => (
                  <tr key={row.document}>
                    <th scope="row">{row.document}</th>
                    <td data-label="Purpose">{row.purpose}</td>
                    <td data-label="Mandatory / optional">{row.status}</td>
                    <td data-label="Notes">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.lead}>{DOCUMENTS_NOTE}</p>
        </article>

        <article className={styles.panel} id="process">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Step-by-Step BIS Certification Process for Footwear</h2>
          <p className={styles.lead}>{PROCESS_INTRO}</p>
          {PROCESS_STEPS.map((step) => (
            <div key={step.title}>
              <h3 className={styles.factsTitle}>{step.title}</h3>
              <p className={styles.lead}>{step.text}</p>
            </div>
          ))}
          {PROCESS_CLOSING.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="testing">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Testing and In-house Lab Requirements</h2>
          {TESTING_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="cost">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>BIS Certification Cost for Footwear</h2>
          {COST_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <ul className={styles.list}>
            {COST_FACTORS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {COST_CLOSING.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="timeline">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Timeline for BIS Certification for Footwear</h2>
          <p className={styles.lead}>{TIMELINE}</p>
          <h3 className={styles.factsTitle}>Licence Validity and Renewal</h3>
          {VALIDITY_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <ul className={styles.list}>
            {VALIDITY_PRECAUTIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="marking">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>ISI Marking on Footwear and How to Verify a Licence</h2>
          {MARKING_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
        </article>

        <article className={styles.panel} id="fmcs">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>BIS Certification for Imported Footwear (FMCS)</h2>
          {FMCS_PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className={styles.lead}>
              {p}
            </p>
          ))}
          <h3 className={styles.factsTitle}>Footwear QCO compliance checklist for importers</h3>
          <ul className={styles.list}>
            {IMPORTER_CHECKLIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="penalties">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Penalties for Non-Compliance</h2>
          <p className={styles.lead}>{PENALTY}</p>
        </article>

        <article className={styles.panel} id="challenges">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Common Challenges in Footwear BIS Certification</h2>
          <ul className={styles.list}>
            {CHALLENGES.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.panel} id="help">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>How Ornate Quality Services Pvt. Ltd. Helps</h2>
          <p className={styles.lead}>{HELP_INTRO}</p>
          <ul className={styles.list}>
            {HELP_ITEMS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
          <h3 className={styles.factsTitle}>Why Choose Ornate Quality Services Pvt. Ltd.</h3>
          <ul className={styles.list}>
            {WHY_CHOOSE.map((item) => (
              <li key={item.slice(0, 24)}>{item}</li>
            ))}
          </ul>
          <h3 className={styles.factsTitle}>Industries We Serve</h3>
          <ul className={styles.list}>
            {INDUSTRIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className={styles.factsTitle}>Related Services</h3>
          <div className={styles.related}>
            {RELATED_SERVICES.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </article>

        <article className={styles.panel} id="terms">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Key Terms Explained</h2>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Term</th>
                  <th>What It Means</th>
                </tr>
              </thead>
              <tbody>
                {KEY_TERMS.map((row) => (
                  <tr key={row.term}>
                    <th scope="row">{row.term}</th>
                    <td data-label="What it means">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className={styles.panel} id="locations">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>BIS Certification for Footwear Across India</h2>
          <p className={styles.lead}>{LOCATIONS_INTRO}</p>
          <div className={styles.related}>
            {LOCATIONS.map((city) => (
              <span key={city} className={styles.locationChip}>
                BIS certification for footwear in {city}
              </span>
            ))}
          </div>
          <p className={`${styles.lead} ${styles.sectionNote}`}>
            {LOCATION_STATES}
          </p>
        </article>

        <article className={styles.panel} id="mistakes">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Common Mistakes and How to Avoid Them</h2>
          <ul className={styles.list}>
            {MISTAKES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className={styles.factsTitle}>Expert Tips for a Smooth Footwear BIS Licence</h3>
          <ol className={styles.list}>
            {TIPS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className={styles.panel} id="procedures">
          <h2 className={`${styles.sectionTitle} ${playfair.className}`}>Comparison: Normal Procedure vs Simplified Procedure</h2>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Point</th>
                  <th>Normal Procedure</th>
                  <th>Simplified Procedure</th>
                </tr>
              </thead>
              <tbody>
                {PROCEDURE_ROWS.map((row) => (
                  <tr key={row.point}>
                    <th scope="row">{row.point}</th>
                    <td data-label="Normal procedure">{row.normal}</td>
                    <td data-label="Simplified procedure">{row.simplified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.lead}>{PROCEDURE_NOTE}</p>
          <p className={styles.lead}>{FINAL_CTA}</p>
          <Link href="/contact" className={styles.cta}>
            Talk to Footwear BIS Expert
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
    </main>
  );
}
