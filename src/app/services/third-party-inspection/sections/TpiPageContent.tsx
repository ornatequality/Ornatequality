"use client";

import { ServiceCallbackForm } from "@/components/forms/ServiceCallbackForm";

import React, { useCallback, useEffect, useState } from "react";
import { useActiveTocScroll } from "@/hooks/useActiveTocScroll";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/bisCrsRegistration.module.css";
import buildingImage from "@/assests/services/certificate.png";
import {
  WHY_ORNATE_ITEMS,
  LATEST_NOTIFICATIONS,
  OUR_SERVICES_LINKS,
} from "../../bis-crs-registration/data/bisCrsContent";
import {
  TPI_TOC,
  INSPECTION_SERVICES_ROWS,
  PROCESS_STEPS,
  COMMISSION_INFO_ROWS,
  WHY_ORNATE_COMPARISON_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/tpiContent";

const TPI_PAGE_PATH = "/services/third-party-inspection";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="tpi"
      defaultService="Third Party Inspection"
      serviceOptions={[
        "Third Party Inspection",
      ]}
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
                    className={`${styles.tocLink} ${
                      activeId === item.id ? styles.tocLinkActive : ""
                    }`}
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
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Third Party Inspection Services in India — Independent Quality Verification for
                Manufacturers, Importers &amp; Buyers
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    When two parties in a business transaction — a buyer and a seller — need independent
                    verification of product quality, compliance, or process performance, they turn to a Third
                    Party Inspection (TPI) agency. Third Party Inspection provides objective, credible assurance
                    that a product, process, or facility meets the agreed specifications, standards, or regulatory
                    requirements — without the conflict of interest that comes with self-assessment.
                  </p>
                  <p className={styles.sectionText}>
                    Third Party Inspection services are used across industries — from electronics and consumer
                    goods to industrial equipment, construction materials, and food products. Whether you are an
                    importer verifying product quality before a shipment leaves a factory, a manufacturer preparing
                    for a BIS or PESO factory inspection, a buyer qualifying a new supplier, or an exporter
                    demonstrating compliance to an overseas customer — independent third party inspection is the
                    most credible form of quality assurance available.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we provide professional third party inspection services across
                    India — covering pre-shipment inspection, factory audits, product testing coordination,
                    regulatory compliance inspection, and supplier qualification. In this guide, we explain exactly
                    what third party inspection is, what types of inspection we offer, how the process works, and
                    how it protects your business.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Third party inspection and quality verification services"
                    fill
                    sizes="(min-width: 960px) 320px, 100vw"
                    className={styles.introImage}
                  />
                </div>

                <blockquote className={styles.blockquote}>
                  <span className={styles.blockquoteIcon} aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className={styles.blockquoteText}>
                    Need independent product or factory inspection in India? Contact our team for a free
                    consultation and get a customised inspection plan for your specific requirement.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-tpi" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is Third Party Inspection?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    Third Party Inspection (TPI) is the assessment of a product, process, facility, or management
                    system by an independent organisation that has no commercial relationship with either the
                    supplier or the buyer. The third party — the inspection agency — provides objective, impartial
                    findings based on agreed standards, specifications, or regulatory requirements.
                  </p>
                  <p className={styles.sectionText}>
                    The term third party distinguishes independent inspection from first party inspection — conducted
                    by the manufacturer or supplier on their own products — and second party inspection — conducted
                    by the buyer or customer directly. Third party inspection adds credibility to quality assurance
                    because the inspector has no financial interest in the outcome of the assessment.
                  </p>
                  <p className={styles.sectionText}>
                    Third party inspection services cover a wide range of activities — from visual and dimensional
                    checks of finished goods before shipment to comprehensive factory audits, process capability
                    assessments, regulatory compliance verifications, and product testing coordination.
                  </p>
                  <p className={styles.sectionText}>
                    In India, third party inspection is used extensively in product certification — BIS factory
                    inspections, PESO product approvals, and ISO certification audits are all forms of regulatory
                    third party inspection. Commercial third party inspection follows similar principles but is
                    driven by business requirements rather than regulatory mandates.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>TPI</span>
                  <span className={styles.whatIsLabel}>INDEPENDENT INSPECTION</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Third Party Inspection Is Essential for Your Business</h2>
              <p className={styles.sectionText}>
                Third party inspection is not just a due diligence formality — it is a practical business tool that
                reduces risk, builds trust, and prevents costly problems.
              </p>
              <h3 className={styles.subsectionTitle}>Prevents Costly Quality Failures</h3>
              <p className={styles.sectionText}>
                A pre-shipment inspection that identifies defective products at the factory costs a fraction of what
                it costs to deal with the same defects after the goods have been shipped, imported, customs-cleared,
                and delivered to customers. For importers sourcing from overseas manufacturers, pre-shipment inspection
                is one of the highest-return quality investments available.
              </p>
              <h3 className={styles.subsectionTitle}>Provides Independent Verification Buyers Can Trust</h3>
              <p className={styles.sectionText}>
                Third party inspection by an independent agency provides verification that neither party can credibly
                challenge — making it the foundation of trust in long-distance commercial relationships, particularly
                in cross-border trade.
              </p>
              <h3 className={styles.subsectionTitle}>Required for Regulatory Certifications</h3>
              <p className={styles.sectionText}>
                Many of India&apos;s most important product certifications require third party inspection as part of
                the approval process. BIS factory inspections under the ISI Mark and CRS schemes are conducted by
                BIS-authorised inspectors. PESO product approvals require inspection by PESO-approved inspection
                agencies. CE Marking for high-risk product categories requires Notified Body inspection.
              </p>
              <h3 className={styles.subsectionTitle}>Supports Supplier Qualification and Audit Programmes</h3>
              <p className={styles.sectionText}>
                Corporate buyers and multinational companies conduct regular supplier audits to verify that their
                suppliers meet quality, ethical, and compliance standards. For Indian manufacturers supplying to global
                brands, passing a third party supplier audit is often a prerequisite for being added to an approved
                supplier list.
              </p>
              <h3 className={styles.subsectionTitle}>Reduces Returns, Disputes, and Legal Risk</h3>
              <p className={styles.sectionText}>
                Pre-shipment inspection reports provide documentary evidence of product condition at the time of
                dispatch. In the event of a quality dispute, an independent inspection report is the most credible
                evidence available. For exporters, TPI reports reduce the risk of unjustified rejection claims.
              </p>
            </section>

            <section id="services-offered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Third Party Inspection Services Offered by Ornate Quality Services</h2>
              <p className={styles.sectionText}>
                Ornate Quality Services provides a comprehensive range of third party inspection services across
                India. The following table covers our main service offerings and their typical applications.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Inspection Service</th>
                    <th scope="col">Typical Application</th>
                    <th scope="col">Key Deliverable</th>
                  </tr>
                </thead>
                <tbody>
                  {INSPECTION_SERVICES_ROWS.map((row) => (
                    <tr key={row.service}>
                      <th scope="row">{row.service}</th>
                      <td>{row.application}</td>
                      <td>{row.deliverable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Our inspection services cover a wide range of product categories — including electronics, electrical
                products, textiles, garments, footwear, furniture, industrial equipment, construction materials, and
                consumer goods. Our inspectors are located across major industrial and manufacturing centres in India,
                enabling rapid deployment for urgent inspection requirements.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Third Party Inspection Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The third party inspection process is structured to ensure that inspections are conducted objectively,
                consistently, and to the agreed standard.
              </p>
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
                  <p className={styles.sectionText}>{step.text}</p>
                </div>
              ))}
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve — Third Party Inspection Services</h2>
              <p className={styles.sectionText}>
                Ornate Quality Services provides third party inspection across a wide range of industries. Our
                inspectors combine product knowledge with regulatory expertise.
              </p>
              <h3 className={styles.subsectionTitle}>Electronics &amp; Electrical Products</h3>
              <ul className={styles.bulletList}>
                <li>Consumer electronics — mobile phones, laptops, tablets, audio devices</li>
                <li>Electrical equipment — LED lights, fans, cables, switches, power supplies</li>
                <li>Industrial electronics — control panels, sensors, instrumentation</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Consumer Goods &amp; Retail Products</h3>
              <ul className={styles.bulletList}>
                <li>Garments, textiles, and footwear</li>
                <li>Toys, baby products, and children&apos;s goods</li>
                <li>Furniture, homeware, and household goods</li>
                <li>Sports equipment and outdoor products</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Industrial &amp; Engineering Products</h3>
              <ul className={styles.bulletList}>
                <li>Mechanical components — fasteners, castings, forgings</li>
                <li>Pressure vessels, gas cylinders, and industrial equipment</li>
                <li>Construction materials — TMT bars, pipes, cement products</li>
                <li>Automotive components and assemblies</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Food &amp; Pharmaceutical Products</h3>
              <ul className={styles.bulletList}>
                <li>Packaged food products and ingredients</li>
                <li>Pharmaceutical raw materials and finished products</li>
                <li>Medical devices and health products</li>
              </ul>
              <p className={styles.sectionText}>
                Need inspection in a specific industry or for a specific standard not listed above? Contact our team —
                we cover a much wider range of products and standards than any list can fully capture.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Information Required to Commission a Third Party Inspection</h2>
              <p className={styles.sectionText}>
                The following information is required to commission a third party inspection from Ornate Quality
                Services. The more detail provided, the more precisely we can tailor the inspection to your
                requirements.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Information Required</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {COMMISSION_INFO_ROWS.map((row) => (
                    <tr key={row.no}>
                      <td>{row.no}</td>
                      <th scope="row">{row.information}</th>
                      <td>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Our team works with you to define the inspection scope, select the appropriate sampling plan, and
                confirm the inspection checklist before deployment — ensuring the inspection delivers exactly the
                information you need to make confident business decisions.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Third Party Inspection Cost — What to Expect</h2>
              <p className={styles.sectionText}>
                Third party inspection costs depend on the type of inspection, the complexity of the product, the
                location, and the time required.
              </p>
              <h3 className={styles.subsectionTitle}>Per-Inspection Fee Structure</h3>
              <p className={styles.sectionText}>
                Standard pre-shipment inspections and during-production inspections are typically priced on a
                per-man-day basis — covering the inspector&apos;s time at the factory plus report preparation. For most
                standard consumer goods inspections, per-man-day rates typically range from INR 5,000 to INR 15,000
                depending on the product and location.
              </p>
              <h3 className={styles.subsectionTitle}>Factory Audit Fees</h3>
              <p className={styles.sectionText}>
                Factory audits are more comprehensive than product inspections and typically require one to two full
                man-days on-site. Factory audit fees reflect the additional time, expertise, and report depth required.
              </p>
              <h3 className={styles.subsectionTitle}>Regulatory Inspection Support</h3>
              <p className={styles.sectionText}>
                For BIS inspection support, PESO inspection coordination, and other regulatory inspection services,
                fees are structured based on the complexity of the regulatory requirement and the level of preparation
                and support provided. Our team provides a detailed fee proposal before any work begins.
              </p>
              <h3 className={styles.subsectionTitle}>Travel and Out-of-Pocket Expenses</h3>
              <p className={styles.sectionText}>
                For inspection locations outside our inspectors&apos; base cities, travel and accommodation expenses are
                charged at cost. Our team provides a complete cost estimate including all expenses before confirming
                the inspection booking.
              </p>
              <p className={styles.sectionText}>
                For a precise inspection cost estimate for your specific product, location, and inspection type —
                contact our team. We provide transparent quotes with no hidden charges.
              </p>
            </section>

            <section id="standards" className={styles.section}>
              <h2 className={styles.sectionTitle}>Inspection Standards and Methodologies We Follow</h2>
              <p className={styles.sectionText}>
                All Ornate Quality Services inspections are conducted in accordance with recognised inspection
                standards and methodologies — ensuring consistency, reliability, and international credibility of our
                inspection reports.
              </p>
              <h3 className={styles.subsectionTitle}>Sampling Standards</h3>
              <ul className={styles.bulletList}>
                <li>ANSI/ASQ Z1.4 — Sampling procedures for inspection by attributes (AQL-based sampling)</li>
                <li>ANSI/ASQ Z1.9 — Sampling procedures for inspection by variables</li>
                <li>ISO 2859 series — International equivalent of Z1.4 for attribute sampling</li>
                <li>Client-specified sampling plans where required</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Product and Process Standards</h3>
              <ul className={styles.bulletList}>
                <li>BIS Indian Standards (IS codes) for Indian regulatory compliance inspections</li>
                <li>IEC, ISO, and EN standards for international product standards</li>
                <li>Client product specifications and approved samples</li>
                <li>Industry-specific standards — ASTM, DIN, JIS where applicable</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Audit Standards</h3>
              <ul className={styles.bulletList}>
                <li>ISO 9001:2015 for quality management system audits</li>
                <li>ISO 19011:2018 — Guidelines for auditing management systems</li>
                <li>BIS factory inspection criteria for ISI and CRS certification</li>
                <li>Client-specific supplier qualification criteria</li>
              </ul>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Third Party Inspection Services</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services for Third Party Inspection</h2>
              <p className={styles.sectionText}>
                There are many third party inspection agencies operating in India. Here is what sets Ornate Quality
                Services apart — and why our clients consistently choose us for their inspection requirements.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">What Others Offer</th>
                    <th scope="col">What Ornate Delivers</th>
                  </tr>
                </thead>
                <tbody>
                  {WHY_ORNATE_COMPARISON_ROWS.map((row) => (
                    <tr key={row.others}>
                      <th scope="row">{row.others}</th>
                      <td>{row.ornate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How Our Pre-Shipment Inspection Saved a Mumbai Importer from a Costly Defect
              </h2>
              <p className={styles.sectionText}>
                A Mumbai-based importer of LED lighting products sourced from a manufacturer in Gujarat approached
                Ornate Quality Services for pre-shipment inspection of a 10,000-unit order of LED panel lights — their
                largest single order to date. The order was destined for a retail chain client who had specified BIS
                ISI compliance and packaging label requirements.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The importer had previously placed several smaller orders with the same manufacturer without independent
                inspection — relying on the manufacturer&apos;s self-declaration of quality. For this larger order, their
                retail chain client had required a third party inspection report as a condition of accepting the
                shipment. The importer had never commissioned a TPI inspection before and was unsure what to request.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team prepared a customised inspection checklist covering BIS ISI mark verification, dimensional and
                visual inspection of the LED panels, carton labelling checks against the retail chain&apos;s specifications,
                and AQL 2.5 sampling-based defect classification. Our inspector conducted the inspection at the Gujarat
                manufacturing facility over one day — covering a statistically valid sample of 315 units from the
                10,000-unit production batch.
              </p>
              <p className={styles.sectionText}>
                The inspection identified a labelling non-conformance — the importer&apos;s address on the packaging was
                incorrect, and the BIS licence number was printed in a font size below the minimum required. These issues,
                if not corrected, would have resulted in rejection by the retail chain&apos;s compliance team upon delivery.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                The labelling non-conformance was corrected by the manufacturer before shipment — at zero additional cost
                to the importer. The retail chain&apos;s compliance team accepted the shipment without issue. The importer now
                commissions pre-shipment inspection for every order above INR 5 lakh — and has since found and resolved
                labelling, packaging, and minor product quality issues in three subsequent shipments before they reached
                the customer.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — Third Party Inspection Services</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for Third Party Inspection</h2>
              <p className={styles.ctaText}>
                Need pre-shipment inspection, factory audits, BIS inspection support, supplier qualification, or
                regulatory compliance verification? Connect with Ornate Quality Services for independent, credible
                inspection services across India.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Apply Now →
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
