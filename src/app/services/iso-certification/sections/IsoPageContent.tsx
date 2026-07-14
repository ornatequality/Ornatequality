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
  ISO_TOC,
  ISO_STANDARDS_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  COMPARISON_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/isoContent";

const ISO_PAGE_PATH = "/services/iso-certification";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="iso"
      defaultService="ISO Certification"
      serviceOptions={[
        "ISO Certification",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "Trademark Registration",
        "Other",
      ]}
      successText="Our ISO certification expert will contact you within one business day."
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

export function IsoPageContent() {
  const [activeId, setActiveId] = useState(ISO_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ISO_TOC.map((item) => item.id);
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
              {ISO_TOC.map((item, i) => (
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
                ISO Certification in India — Complete Guide for Businesses Seeking Quality, Environmental &amp; Safety Certification
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    Whether you are a manufacturer trying to win a government contract, an exporter building credibility with
                    international buyers, or a service business looking to demonstrate operational excellence — ISO Certification is
                    one of the most recognised and respected quality credentials your business can hold.
                  </p>
                  <p className={styles.sectionText}>
                    ISO — the International Organization for Standardization — publishes internationally agreed standards covering
                    quality management, environmental management, occupational health and safety, information security, food safety,
                    and dozens of other management disciplines. When a business achieves ISO Certification, it means an independent,
                    accredited certification body has verified that its management system meets the requirements of the relevant ISO
                    standard.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help businesses across India achieve ISO Certification — from ISO 9001 for quality
                    management to ISO 14001 for environmental management and ISO 45001 for occupational health and safety. In this guide,
                    we cover everything you need to know — what ISO Certification is, which standard is right for your business, how the
                    process works, and what it costs.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="ISO certification consulting and implementation support"
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
                    Ready to get ISO certified? Contact our team for a free consultation and we will identify the right ISO standard
                    for your business and build a clear implementation roadmap.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-iso" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is ISO Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    ISO Certification — also known as ISO Registration — is the formal confirmation by an independent, accredited
                    third-party certification body that an organisation&apos;s management system, processes, or products conform to the
                    requirements of a specific ISO standard.
                  </p>
                  <p className={styles.sectionText}>
                    ISO itself does not certify organisations. Certification is carried out by accredited certification bodies that are
                    authorised to audit and certify organisations against ISO standards.
                  </p>
                  <p className={styles.sectionText}>
                    For businesses in India, ISO Certification is typically issued by NABCB-accredited or internationally recognised
                    certification bodies. ISO Certification is not a one-time achievement — it requires internal audits, management review,
                    and periodic surveillance audits to maintain the certificate.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>ISO</span>
                  <span className={styles.whatIsLabel}>MANAGEMENT SYSTEM CERTIFICATION</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why ISO Certification Matters for Your Business</h2>
              <h3 className={styles.subsectionTitle}>Mandatory for Many Tenders and Contracts</h3>
              <p className={styles.sectionText}>
                Government tenders, PSU procurement, and large corporate supply chain requirements often list ISO 9001 as mandatory. Without it,
                businesses can be disqualified even with strong pricing and capability.
              </p>
              <h3 className={styles.subsectionTitle}>Builds Buyer Confidence in Export Markets</h3>
              <p className={styles.sectionText}>
                International procurement teams frequently treat ISO certification as a baseline quality credential. ISO removes a key barrier for
                exporters and positions you as a credible supplier.
              </p>
              <h3 className={styles.subsectionTitle}>Improves Internal Operations and Reduces Costs</h3>
              <p className={styles.sectionText}>
                ISO implementation strengthens process discipline, documentation, controls, and continuous improvement — commonly reducing errors,
                rework, complaints, and operational costs.
              </p>
              <h3 className={styles.subsectionTitle}>Demonstrates Environmental and Safety Commitment</h3>
              <p className={styles.sectionText}>
                ISO 14001 and ISO 45001 demonstrate commitment to environmental responsibility and worker safety. These are increasingly required by
                multinational clients and relevant for ESG requirements.
              </p>
              <h3 className={styles.subsectionTitle}>Strengthens Business Valuation and Investor Confidence</h3>
              <p className={styles.sectionText}>
                ISO certification signals management maturity and lower operational risk — improving financing and credibility in due diligence.
              </p>
            </section>

            <section id="iso-we-offer" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certifications Available Through Ornate Quality Services</h2>
              <p className={styles.sectionText}>
                Ornate Quality Services provides consulting and implementation support for a wide range of ISO management system certifications.
                The following table covers the most commonly sought ISO certifications in India.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">ISO Standard</th>
                    <th scope="col">Focus Area</th>
                    <th scope="col">Who Needs It</th>
                  </tr>
                </thead>
                <tbody>
                  {ISO_STANDARDS_ROWS.map((row) => (
                    <tr key={row.standard}>
                      <th scope="row">{row.standard}</th>
                      <td>{row.focus}</td>
                      <td>{row.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certification Process — Step by Step</h2>
              <p className={styles.sectionText}>
                Many businesses benefit from implementing multiple standards together as an Integrated Management System (IMS). Implementing
                ISO 9001, ISO 14001, and ISO 45001 together is often more efficient than separate projects.
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

            <section id="requirements" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certification Requirements for Businesses in India</h2>
              <p className={styles.sectionText}>
                Any organisation can pursue ISO certification. Across most ISO management system standards, you will need leadership commitment,
                a defined scope, documented processes and records, trained internal auditors, and management review.
              </p>
              <h3 className={styles.subsectionTitle}>Accredited Certification Body</h3>
              <p className={styles.sectionText}>
                ISO certificates should be issued by NABCB-accredited or internationally recognised accreditation bodies (IAF member). Certificates
                from non-accredited bodies are often not accepted by tenders and procurement teams.
              </p>
              <p className={styles.sectionText}>
                Not sure which ISO standard fits your business or whether you are ready for certification? Contact us for a free readiness assessment.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for ISO Certification</h2>
              <p className={styles.sectionText}>
                Documentation requirements vary by standard, but the following represents the core framework required across most ISO management systems.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Document</th>
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
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certification Cost in India</h2>
              <h3 className={styles.subsectionTitle}>Certification Body Audit Fees</h3>
              <p className={styles.sectionText}>
                Audit fees depend on audit days required (based on headcount, scope, sites, and complexity). For many SMEs, initial certification audits
                typically range from INR 30,000 to INR 1,50,000, with annual surveillance fees commonly INR 20,000 to INR 80,000.
              </p>
              <h3 className={styles.subsectionTitle}>Implementation and Consulting Fees</h3>
              <p className={styles.sectionText}>
                Implementation includes gap analysis, documentation, training, internal audit support, management review facilitation, and certification support.
                Ornate provides fixed professional fees based on standard and organisational scope.
              </p>
              <h3 className={styles.subsectionTitle}>Integrated Management Systems — Cost Savings</h3>
              <p className={styles.sectionText}>
                If you implement ISO 9001 + ISO 14001 + ISO 45001 together, shared documentation and audits can reduce overall cost and effort versus three separate projects.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>ISO Certificate Validity and Surveillance Cycle</h2>
              <p className={styles.sectionText}>
                ISO certificates typically follow a 3-year cycle: initial certification audit, annual surveillance audits in years 1 and 2, and recertification in year 3.
              </p>
              <h3 className={styles.subsectionTitle}>Standard Revisions</h3>
              <p className={styles.sectionText}>
                ISO standards are periodically revised with transition periods. We track revisions and help you transition proactively so your certificate remains valid.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of ISO Certification for Indian Businesses</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="comparison" className={styles.section}>
              <h2 className={styles.sectionTitle}>Choosing the Right ISO Standard for Your Business</h2>
              <p className={styles.sectionText}>
                ISO 9001, ISO 14001, and ISO 45001 are the most common certifications. The table below compares them at a practical level.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">ISO 9001</th>
                    <th scope="col">ISO 14001</th>
                    <th scope="col">ISO 45001</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.factor}>
                      <th scope="row">{row.factor}</th>
                      <td>{row.iso9001}</td>
                      <td>{row.iso14001}</td>
                      <td>{row.iso45001}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                For most manufacturers, ISO 9001 is the best starting point. If your operations have environmental footprint or safety-critical risk,
                adding ISO 14001 and ISO 45001 as an IMS is often the most efficient approach.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Pune Manufacturer Get ISO 9001 Certified and Win a Government Contract
              </h2>
              <p className={styles.sectionText}>
                A Pune-based manufacturer of industrial fasteners approached Ornate Quality Services after losing a government tender where ISO 9001
                was mandatory. They had a target of 6 months to achieve certification before the next tender cycle.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                They had limited formal documentation and processes. While operations ran effectively, informal practices created significant gaps for ISO audit expectations.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                We performed a gap analysis, created QMS documentation, trained internal auditors, conducted internal audit, facilitated management review, and coordinated
                Stage 1 and Stage 2 audits with an accredited certification body. We supported the team throughout audit closure.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                ISO 9001:2015 certification was achieved within 5 months and 3 weeks. The business qualified for the next tender cycle and won a supply contract worth
                INR 1.8 crore. They have maintained certification through surveillance audits and are implementing ISO 14001 next.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — ISO Certification</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for ISO Certification</h2>
              <p className={styles.ctaText}>
                Need help selecting the right ISO standard, gap analysis, documentation, implementation, and audit readiness? Connect with Ornate Quality Services for complete support.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.ctaBtnPrimary}>
                  Apply Now →
                </Link>
                <a href="tel:+919266877738" className={styles.ctaBtnSecondary}>
                  📞 Free Consultation
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
                          link.href === ISO_PAGE_PATH ? styles.servicesLinkActive : ""
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

