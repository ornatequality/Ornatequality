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
  AUDIT_TOC,
  AUDIT_SERVICES_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  INDUSTRIES_ROWS,
  WHY_ORNATE_COMPARISON_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/auditContent";

const AUDIT_PAGE_PATH = "/services/audit-services";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="audit"
      defaultService="Audit Services"
      serviceOptions={[
        "Audit Services",
      ]}
      successText="Our audit services expert will contact you within one business day."
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

export function AuditPageContent() {
  const [activeId, setActiveId] = useState(AUDIT_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = AUDIT_TOC.map((item) => item.id);
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
              {AUDIT_TOC.map((item, i) => (
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
                Audit &amp; Certification Services in India — Comprehensive Compliance Verification
                for Manufacturers, Importers &amp; Businesses
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    In India&apos;s increasingly regulated business environment, audit and certification
                    services have become a critical component of operating with confidence — whether you are
                    a manufacturer preparing for a BIS factory inspection, an importer verifying supplier
                    compliance, a business pursuing ISO certification, or a global brand auditing its Indian
                    supply chain.
                  </p>
                  <p className={styles.sectionText}>
                    Audit and certification services provide independent, systematic verification that a
                    business, process, product, or management system meets the requirements of applicable
                    standards, regulations, or buyer specifications. They are the foundation of trust in
                    commercial relationships, the gateway to regulatory approvals, and the mechanism by which
                    businesses demonstrate credibility to customers, regulators, and investors.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we provide end-to-end audit and certification consulting
                    services across India — combining regulatory expertise, technical knowledge, and practical
                    business understanding to deliver audits and certifications that are meaningful,
                    actionable, and recognised. In this guide, we explain the full range of our audit and
                    certification services, how each type works, and how they benefit your business.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Audit and certification compliance support"
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
                    Need audit or certification support for your business? Contact our team for a free
                    consultation and let us build a compliance plan that fits your specific situation.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-audit" className={styles.section}>
              <h2 className={styles.sectionTitle}>What are Audit &amp; Certification Services?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    Audit services involve systematic, independent examination of a business, facility,
                    process, or management system — assessing whether it conforms to specified requirements,
                    standards, or regulations. Audits produce documented findings that identify conformances,
                    non-conformances, and opportunities for improvement.
                  </p>
                  <p className={styles.sectionText}>
                    Certification services involve obtaining formal recognition from a competent authority — a
                    government body, accreditation organisation, or certification body — that a product,
                    process, management system, or person meets the requirements of a specific standard or
                    regulation. Certification is typically based on an audit or assessment process, and the
                    resulting certificate provides third-party assurance that the certified entity meets the
                    stated requirements.
                  </p>
                  <p className={styles.sectionText}>
                    Together, audit and certification services form the backbone of quality assurance and
                    regulatory compliance in India. They support BIS product certification, ISO management
                    system certification, NABL laboratory accreditation, FSSAI food safety compliance, EPR
                    registration, and virtually every other regulated activity that requires independent
                    verification.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, our audit and certification services cover the complete
                    spectrum — from pre-certification gap assessments and regulatory inspection support to
                    ongoing compliance audits, supplier qualification programmes, and management system
                    certifications across multiple standards simultaneously.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>AUD</span>
                  <span className={styles.whatIsLabel}>COMPLIANCE AUDIT</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why Audit &amp; Certification Services Are Essential for Your Business
              </h2>
              <p className={styles.sectionText}>
                Audit and certification services deliver value across every stage of a business&apos;s compliance
                and quality management journey. Here is why they matter.
              </p>
              <h3 className={styles.subsectionTitle}>Required for Regulatory Market Access</h3>
              <p className={styles.sectionText}>
                India&apos;s regulatory landscape — BIS, FSSAI, CDSCO, PESO, WPC, TEC, and dozens of other
                regulatory bodies — requires manufacturers and importers to submit to factory inspections, product
                assessments, and management system audits as part of product certification and approval processes.
                Without these audits, regulatory approvals cannot be obtained and products cannot be legally sold.
                For businesses entering regulated markets, audit and certification services are not optional —
                they are the price of admission.
              </p>
              <h3 className={styles.subsectionTitle}>Builds Buyer and Market Confidence</h3>
              <p className={styles.sectionText}>
                Independent audit and certification results carry far more weight than self-assessment. When a
                manufacturer tells a buyer that their products are compliant, the buyer has no independent basis
                for evaluating that claim. When an independent audit and certification confirms compliance —
                whether through ISO certification, BIS approval, or a third party supplier audit — the buyer can
                rely on that finding with confidence. In competitive markets, audit-backed certification is a
                powerful differentiator.
              </p>
              <h3 className={styles.subsectionTitle}>Identifies Risks Before They Become Problems</h3>
              <p className={styles.sectionText}>
                One of the most valuable functions of a compliance audit is identifying non-conformances and
                risks before they trigger regulatory action, customer complaints, or product failures. A
                pre-certification audit that finds and helps fix a manufacturing process gap is immeasurably more
                valuable than discovering the same gap during a regulatory inspection. Proactive audit programmes
                are the most cost-effective form of risk management available to Indian manufacturers and
                importers.
              </p>
              <h3 className={styles.subsectionTitle}>Supports Continuous Improvement</h3>
              <p className={styles.sectionText}>
                Regular audit programmes create a systematic mechanism for identifying improvement opportunities
                — in process efficiency, quality control, regulatory compliance, and management system
                effectiveness. Businesses that audit regularly consistently outperform those that audit only when
                required — because they build a culture of continuous improvement rather than periodic compliance
                scrambling.
              </p>
              <h3 className={styles.subsectionTitle}>
                Essential for Export and Global Supply Chain Participation
              </h3>
              <p className={styles.sectionText}>
                Indian manufacturers supplying to global brands, European importers, or US retailers are subject
                to a wide range of audit requirements — social compliance audits, quality management audits,
                product safety audits, and environmental compliance audits. Meeting these requirements is a
                prerequisite for participation in global supply chains. Our audit services prepare Indian
                manufacturers for these assessments and help them achieve and maintain the certifications that
                global buyers require.
              </p>
            </section>

            <section id="services-offered" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Comprehensive Audit &amp; Certification Services by Ornate Quality Services
              </h2>
              <p className={styles.sectionText}>
                Ornate Quality Services provides a comprehensive range of audit and certification services across
                India. The following table covers our main service categories and their typical applications.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Service Category</th>
                    <th scope="col">Typical Application</th>
                    <th scope="col">Key Output</th>
                  </tr>
                </thead>
                <tbody>
                  {AUDIT_SERVICES_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.application}</td>
                      <td>{row.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Our audit and certification services are available as standalone engagements or as part of
                integrated compliance programmes that combine multiple services — for example, ISO 9001
                certification consulting combined with BIS factory inspection support, or supplier audit
                programmes combined with ongoing compliance monitoring.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Our Audit &amp; Certification Process — Step by Step</h2>
              <p className={styles.sectionText}>
                Whether we are supporting a BIS factory inspection, conducting a supplier audit, or preparing
                a business for ISO certification, our process follows a consistent, structured approach that
                maximises the value of every engagement. Here is how we work.
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

            <section id="audit-types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Types of Audits We Conduct at Ornate Quality Services</h2>
              <p className={styles.sectionText}>
                Our team conducts multiple types of audits — each designed to deliver specific compliance and
                quality assurance outcomes. Here is a detailed breakdown.
              </p>
              <h3 className={styles.subsectionTitle}>First Party Audits (Internal Audits)</h3>
              <p className={styles.sectionText}>
                We conduct internal audits on behalf of organisations that do not have trained internal auditors
                or that want an independent perspective on their own management system performance. Internal audits
                conducted by our team are as rigorous as third-party assessments — providing genuine insight into
                system effectiveness rather than routine paperwork compliance.
              </p>
              <h3 className={styles.subsectionTitle}>Second Party Audits (Supplier Audits)</h3>
              <p className={styles.sectionText}>
                We conduct supplier and vendor audits on behalf of buying organisations — assessing the quality
                management systems, production capabilities, compliance status, and ethical practices of their
                suppliers. Our supplier audit reports provide buyers with actionable data for supplier
                qualification, development, and risk management decisions.
              </p>
              <h3 className={styles.subsectionTitle}>Third Party Audits (Regulatory &amp; Certification Audits)</h3>
              <p className={styles.sectionText}>
                We support organisations through third party regulatory and certification audits — including BIS
                factory inspections, ISO certification audits, NABL assessments, FSSAI inspections, and PESO
                site inspections. Our support includes preparation, on-site presence, and post-audit corrective
                action management.
              </p>
              <h3 className={styles.subsectionTitle}>Compliance Audits</h3>
              <p className={styles.sectionText}>
                We conduct regulatory compliance audits against specific legal requirements — including EPR
                compliance, LMPC labelling compliance, RoHS substance compliance, and environmental legal
                compliance. Compliance audits identify gaps between current practices and legal requirements
                before enforcement action makes those gaps consequential.
              </p>
              <p className={styles.sectionText}>
                Looking for a specific type of audit not listed above? Our team covers a wider range of audit
                types than any list can fully capture. Contact us to discuss your specific requirement.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for Audit &amp; Certification Engagements</h2>
              <p className={styles.sectionText}>
                The documents required vary significantly by audit type and certification standard. The following
                represents the information typically required at the start of an audit or certification
                engagement.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Document / Information</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {DOCUMENTS_ROWS.map((row) => (
                    <tr key={row.no}>
                      <td>{row.no}</td>
                      <th scope="row">{row.document}</th>
                      <td>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Our team reviews all available documentation before the audit engagement begins — ensuring the
                audit is focused on the areas that matter most and that no time is wasted on requirements that
                are already clearly met.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Audit &amp; Certification Services Cost</h2>
              <p className={styles.sectionText}>
                The cost of audit and certification services varies significantly by service type, scope, and
                complexity. Here is a practical overview of how our services are priced.
              </p>
              <h3 className={styles.subsectionTitle}>Gap Assessment and Consulting Fees</h3>
              <p className={styles.sectionText}>
                Gap assessments and certification consulting engagements are priced based on the standard or
                regulation, the size of the organisation, the complexity of the scope, and the level of
                implementation support required. All fees are quoted as fixed-price engagements before work
                begins — so you know exactly what the engagement will cost with no open-ended billing.
              </p>
              <h3 className={styles.subsectionTitle}>Audit Fees</h3>
              <p className={styles.sectionText}>
                Audit fees are priced on a per-man-day basis for most audit types — reflecting the time required
                for preparation, on-site assessment, and report preparation. Man-day rates vary based on the
                audit type, required technical expertise, and location. For standard supplier audits and
                compliance audits, man-day rates are clearly quoted in advance.
              </p>
              <h3 className={styles.subsectionTitle}>Certification Support Fees</h3>
              <p className={styles.sectionText}>
                For certification support engagements — ISO, NABL, BIS, and others — we offer two models: a
                fixed-fee project engagement covering the complete certification journey from gap assessment to
                certificate, and a modular engagement where individual services are selected and priced
                separately. Most clients prefer the fixed-fee project model for budget certainty.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Compliance Retainer</h3>
              <p className={styles.sectionText}>
                For ongoing compliance monitoring, surveillance audit preparation, and annual return management,
                we offer an annual compliance retainer service. The retainer covers all routine compliance
                activities for a fixed annual fee — giving clients predictable compliance costs and ensuring no
                deadline or renewal is ever missed.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate for your specific audit or certification requirement — contact our
                team for a free consultation and we will provide a detailed proposal.
              </p>
            </section>

            <section id="industries" className={styles.section}>
              <h2 className={styles.sectionTitle}>Industries We Serve — Audit &amp; Certification Services</h2>
              <p className={styles.sectionText}>
                Our audit and certification services cover businesses across virtually every regulated industry
                in India. Here are the main sectors we serve and the typical audit and certification
                requirements within each.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Industry</th>
                    <th scope="col">Typical Audit / Certification</th>
                    <th scope="col">Key Standard / Regulation</th>
                  </tr>
                </thead>
                <tbody>
                  {INDUSTRIES_ROWS.map((row) => (
                    <tr key={row.industry}>
                      <th scope="row">{row.industry}</th>
                      <td>{row.audit}</td>
                      <td>{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Professional Audit &amp; Certification Services</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why Choose Ornate Quality Services for Audit &amp; Certification
              </h2>
              <p className={styles.sectionText}>
                There are many audit and consulting firms in India. Here is what genuinely sets Ornate Quality
                Services apart — and why our clients consistently choose us for their most important compliance
                engagements.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">What Most Consultants Offer</th>
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
                Real Example — How We Helped a Haryana Manufacturer Achieve ISO 9001 and BIS Certification Together
              </h2>
              <p className={styles.sectionText}>
                A Haryana-based manufacturer of electrical switches and sockets approached Ornate Quality Services
                with a dual requirement — they needed ISO 9001 certification for a corporate tender, and they
                needed BIS ISI Mark certification for their product range. Both were needed within 6 months.
                Previous attempts to pursue both independently had resulted in confusion, duplicated effort, and
                neither certification being achieved.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer had engaged two separate consultants previously — one for ISO 9001 and one for
                BIS — and found that the work was disconnected, the documentation overlapped confusingly, and the
                combined cost was significantly higher than anticipated. Neither consultant had experience with
                the other&apos;s regulatory domain, which meant the client was bridging the gap themselves.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a combined gap assessment covering both ISO 9001 requirements and BIS ISI Mark
                factory inspection requirements simultaneously. We developed an Integrated Quality Management System
                that met both sets of requirements through a single set of documentation — eliminating the
                duplication and confusion of the previous approach.
              </p>
              <p className={styles.sectionText}>
                We prepared the manufacturer for the BIS factory inspection — addressing all facility, equipment,
                and documentation requirements — while simultaneously developing the ISO 9001 QMS documentation and
                training the internal audit team. The BIS factory inspection and the ISO 9001 Stage 2 audit were
                scheduled sequentially over a two-week period.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                Both the BIS ISI Mark licence and the ISO 9001 certification were achieved within 5 months and 3
                weeks — just within the tender deadline. The integrated approach reduced the overall cost by
                approximately 35% compared to the manufacturer&apos;s previous dual-consultant approach, and
                produced a management system that genuinely supports both regulatory compliance and operational
                quality — rather than two separate systems that existed in parallel.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions — Audit &amp; Certification Services
              </h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for Audit &amp; Certification Services</h2>
              <p className={styles.ctaText}>
                Need help with BIS factory inspection preparation, ISO audit readiness, supplier audits, mock
                audits, or non-conformance closure? Connect with Ornate Quality Services for complete audit support.
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
                          link.href === AUDIT_PAGE_PATH ? styles.servicesLinkActive : ""
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
