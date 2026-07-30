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
  NABL_TOC,
  ACCREDITATION_TYPES_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  CONSEQUENCES_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/nablContent";

const NABL_PAGE_PATH = "/services/nabl-accreditation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="nabl"
      defaultService="NABL Accreditation"
      serviceOptions={[
        "NABL Accreditation",
      ]}
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
                NABL Accreditation in India — Complete Guide for Testing and Calibration Laboratories
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you operate a testing or calibration laboratory in India — whether you test products for BIS
                    certification, conduct environmental testing, perform food safety analysis, calibrate industrial
                    instruments, or provide any other laboratory testing service — NABL Accreditation is the credential
                    that separates recognised, trusted laboratories from the rest.
                  </p>
                  <p className={styles.sectionText}>
                    NABL — the National Accreditation Board for Testing and Calibration Laboratories — is India&apos;s apex
                    accreditation body for testing and calibration laboratories. Operating under the Quality Council of
                    India (QCI), NABL grants accreditation to laboratories that demonstrate technical competence and
                    management system compliance with ISO/IEC 17025 — the international standard for laboratory competence.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help laboratories across India achieve and maintain NABL
                    Accreditation — from initial gap assessment and ISO 17025 implementation to application management
                    and assessment preparation. In this guide, we cover everything you need to know about NABL
                    Accreditation — what it is, who needs it, how the process works, and what it costs.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="NABL accreditation and laboratory compliance support"
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
                    Running a testing or calibration laboratory? Contact our team for a free NABL readiness assessment
                    and find out what it takes to get accredited.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-nabl" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is NABL Accreditation?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    NABL — the National Accreditation Board for Testing and Calibration Laboratories — is the national
                    accreditation body for testing and calibration laboratories in India. It is a constituent board of
                    the Quality Council of India (QCI), operating under the Department for Promotion of Industry and
                    Internal Trade (DPIIT), Ministry of Commerce and Industry.
                  </p>
                  <p className={styles.sectionText}>
                    NABL Accreditation is the formal recognition by NABL that a laboratory has demonstrated technical
                    competence to perform specific tests or calibrations — as defined in its scope of accreditation — in
                    accordance with the requirements of ISO/IEC 17025:2017, the internationally recognised standard for
                    the competence of testing and calibration laboratories.
                  </p>
                  <p className={styles.sectionText}>
                    NABL is a signatory to the Mutual Recognition Arrangement (MRA) of the Asia Pacific Accreditation
                    Cooperation (APAC) and the International Laboratory Accreditation Cooperation (ILAC). This means that
                    NABL-accredited laboratory test reports are internationally recognised — accepted by regulatory
                    authorities, government agencies, and international buyers in countries that are part of the ILAC MRA
                    network.
                  </p>
                  <p className={styles.sectionText}>
                    NABL accreditation covers testing laboratories across all disciplines — mechanical, chemical,
                    biological, electrical, electronics, fluid flow, photometry, and more — as well as calibration
                    laboratories across all measurement parameters. Each laboratory&apos;s accreditation is specific to its
                    defined scope.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>LAB</span>
                  <span className={styles.whatIsLabel}>ISO 17025 ACCREDITATION</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why NABL Accreditation Is Essential for Your Laboratory</h2>
              <p className={styles.sectionText}>
                NABL Accreditation transforms a laboratory from a testing facility into a recognised, trusted source of
                technically reliable data.
              </p>
              <h3 className={styles.subsectionTitle}>Required for BIS, FSSAI, CDSCO, and Other Regulatory Testing</h3>
              <p className={styles.sectionText}>
                Many of India&apos;s most important product certification schemes require testing at NABL-accredited
                laboratories. BIS CRS Registration requires testing at NABL-accredited labs. FSSAI food safety testing must
                be conducted at NABL-accredited food laboratories. CDSCO requires testing at NABL-accredited or
                internationally recognised labs. WPC requires RF testing at designated labs — typically NABL-accredited.
                Without NABL accreditation, a laboratory cannot participate in these high-value testing markets.
              </p>
              <h3 className={styles.subsectionTitle}>Government and Regulatory Acceptance</h3>
              <p className={styles.sectionText}>
                Government agencies, regulatory authorities, and public sector organisations increasingly require test
                reports from NABL-accredited laboratories for procurement qualification, environmental compliance, product
                approval, and enforcement purposes. BEE, CPCB, ARAI, and dozens of other agencies specify NABL
                accreditation as a requirement for accepted test reports.
              </p>
              <h3 className={styles.subsectionTitle}>International Acceptance of Test Reports</h3>
              <p className={styles.sectionText}>
                Through NABL&apos;s membership of the ILAC Mutual Recognition Arrangement, test reports issued by
                NABL-accredited laboratories carry international credibility. Indian exporters who need test reports
                accepted by overseas regulatory authorities can use NABL-accredited laboratory reports in many markets.
              </p>
              <h3 className={styles.subsectionTitle}>Competitive Advantage in Commercial Testing Market</h3>
              <p className={styles.sectionText}>
                In India&apos;s competitive commercial testing market, NABL accreditation is a significant
                differentiator. Manufacturers, importers, and exporters who need reliable test data prefer NABL-accredited
                laboratories because the accreditation provides independent assurance of technical competence.
              </p>
              <h3 className={styles.subsectionTitle}>Builds Internal Quality Culture</h3>
              <p className={styles.sectionText}>
                The process of achieving and maintaining NABL accreditation — implementing ISO 17025, establishing
                measurement uncertainty practices, maintaining equipment calibration, and running a systematic internal
                audit programme — creates a genuine quality culture within the laboratory that improves data reliability
                and reduces errors.
              </p>
            </section>

            <section id="accreditation-types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Types of NABL Accreditation — Which One Does Your Laboratory Need?</h2>
              <p className={styles.sectionText}>
                NABL offers accreditation across multiple laboratory disciplines. The following table covers the main
                types of NABL accreditation and the typical laboratory categories within each.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Accreditation Type</th>
                    <th scope="col">Typical Laboratory Types</th>
                    <th scope="col">Common Test Parameters</th>
                  </tr>
                </thead>
                <tbody>
                  {ACCREDITATION_TYPES_ROWS.map((row) => (
                    <tr key={row.type}>
                      <th scope="row">{row.type}</th>
                      <td>{row.laboratories}</td>
                      <td>{row.parameters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                A laboratory can apply for NABL accreditation in multiple disciplines simultaneously — or build its scope
                progressively over time. Our team advises on the most strategic scope of accreditation based on the
                laboratory&apos;s current capabilities and target markets.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Accreditation Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The NABL accreditation process is structured around the requirements of ISO/IEC 17025:2017. It involves
                implementing the standard, applying to NABL, undergoing an assessment, and maintaining the accreditation
                through ongoing surveillance.
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
              <h2 className={styles.sectionTitle}>NABL Accreditation Requirements for Laboratories</h2>
              <p className={styles.sectionText}>
                Laboratories seeking NABL accreditation must meet the following requirements under ISO/IEC 17025:2017 and
                NABL&apos;s specific accreditation criteria.
              </p>
              <h3 className={styles.subsectionTitle}>Management System Requirements</h3>
              <ul className={styles.bulletList}>
                <li>Documented management system covering all requirements of ISO/IEC 17025:2017</li>
                <li>Laboratory Quality Manual defining policies, objectives, and overall management framework</li>
                <li>Document control system for all laboratory procedures and records</li>
                <li>Internal audit programme — at least one complete internal audit before application</li>
                <li>Management review process with documented outcomes and improvement actions</li>
                <li>Corrective action system for addressing non-conformities and customer complaints</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Technical Requirements</h3>
              <ul className={styles.bulletList}>
                <li>Defined scope of accreditation — specific tests or calibrations with applicable methods and ranges</li>
                <li>Technically competent staff — qualifications, training records, and authorisation for all test activities</li>
                <li>Calibrated equipment with full traceability to national / international standards</li>
                <li>Validated test methods — including method validation records and measurement uncertainty estimates</li>
                <li>Appropriate laboratory facilities and environmental conditions for the scope of testing</li>
                <li>Proficiency testing participation — with satisfactory performance records</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Infrastructure Requirements</h3>
              <p className={styles.sectionText}>
                The laboratory must have appropriate physical facilities — including controlled environmental conditions,
                adequate space for testing activities, and proper storage for samples and reference materials. For
                accreditation in specific disciplines, additional infrastructure requirements apply — for example, shielded
                rooms for EMC testing or cleanroom facilities for microbiology.
              </p>
              <p className={styles.sectionText}>
                Not sure whether your laboratory meets NABL requirements? Our team provides a free readiness assessment
                covering all ISO 17025 requirements. Contact us to get started.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for NABL Accreditation Application</h2>
              <p className={styles.sectionText}>
                The following documents are required for the NABL accreditation application. These form the core of the
                laboratory&apos;s quality management system documentation.
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
              <p className={styles.sectionText}>
                Our team develops all required documentation during the implementation phase — ensuring your
                laboratory&apos;s quality management system is complete, technically sound, and assessment-ready before
                the NABL application is filed.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Accreditation Cost in India</h2>
              <p className={styles.sectionText}>
                NABL accreditation costs include NABL application and assessment fees, proficiency testing charges,
                equipment calibration costs, and professional consulting fees.
              </p>
              <h3 className={styles.subsectionTitle}>NABL Application and Assessment Fees</h3>
              <p className={styles.sectionText}>
                NABL charges an application fee and assessment fees based on the laboratory&apos;s scope and size. Total
                NABL fees for the initial accreditation cycle typically range from INR 50,000 to INR 3,00,000 depending on
                the scope complexity and number of assessment days required.
              </p>
              <h3 className={styles.subsectionTitle}>Equipment Calibration Costs</h3>
              <p className={styles.sectionText}>
                Establishing a complete equipment calibration programme is a significant cost component. For a mid-sized
                testing laboratory, initial calibration costs can range from INR 1,00,000 to INR 5,00,000 depending on
                the number and type of instruments.
              </p>
              <h3 className={styles.subsectionTitle}>Proficiency Testing Fees</h3>
              <p className={styles.sectionText}>
                Participation in proficiency testing programmes involves fees paid to the PT provider — typically ranging
                from INR 5,000 to INR 30,000 per PT round per parameter. NABL requires participation in at least one PT
                round before accreditation for most test parameters.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Consulting Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a professional fee for the complete NABL accreditation consulting service
                — from Gap Analysis and ISO 17025 implementation to application filing, assessment preparation, and
                post-assessment non-conformity closure support. All fees are quoted transparently based on the
                laboratory&apos;s scope and size.
              </p>
              <p className={styles.sectionText}>
                For a precise NABL accreditation cost estimate for your specific laboratory and scope — contact our team
                for a free consultation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>NABL Accreditation Validity and Surveillance Cycle</h2>
              <p className={styles.sectionText}>
                NABL accreditation is granted for a period of two years. The accreditation cycle consists of an initial
                accreditation assessment followed by annual surveillance assessments, and a full reassessment at the end
                of the two-year cycle.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Surveillance Assessments</h3>
              <p className={styles.sectionText}>
                NABL conducts annual surveillance assessments during the accreditation cycle to verify that the laboratory
                continues to meet ISO/IEC 17025 requirements and maintains technical competence across its accredited
                scope. Surveillance assessments are typically shorter than initial assessments but cover all critical
                elements of the management system and selected technical activities.
              </p>
              <h3 className={styles.subsectionTitle}>Reassessment</h3>
              <p className={styles.sectionText}>
                At the end of the two-year accreditation cycle, a full reassessment is conducted. Successful reassessment
                results in renewal of accreditation for another two-year cycle. Our team manages the complete surveillance
                and reassessment cycle — ensuring your laboratory remains in a state of continuous assessment readiness.
              </p>
              <h3 className={styles.subsectionTitle}>Scope Extensions</h3>
              <p className={styles.sectionText}>
                Laboratories can extend their scope of accreditation at any time by applying for additional test parameters
                or calibration ranges. Scope extensions require a separate application and may involve an additional
                on-site assessment for the new parameters. Our team manages scope extension applications alongside ongoing
                accreditation maintenance.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of NABL Accreditation for Your Laboratory</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="consequences" className={styles.section}>
              <h2 className={styles.sectionTitle}>Consequences of Operating Without NABL Accreditation</h2>
              <p className={styles.sectionText}>
                While operating a testing laboratory without NABL accreditation is not illegal in itself, the commercial
                and regulatory consequences of not being accredited are significant and increasingly limiting.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Situation</th>
                    <th scope="col">Consequence Without NABL Accreditation</th>
                  </tr>
                </thead>
                <tbody>
                  {CONSEQUENCES_ROWS.map((row) => (
                    <tr key={row.situation}>
                      <th scope="row">{row.situation}</th>
                      <td>{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                As India&apos;s regulatory framework continues to strengthen — with BIS, FSSAI, CDSCO, and other agencies
                increasingly mandating NABL-accredited testing — the proportion of the testing market accessible to
                non-accredited laboratories will continue to shrink. NABL accreditation is a prerequisite for operating in
                the most significant segments of India&apos;s testing market.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Hyderabad Electronics Testing Lab Achieve NABL Accreditation
              </h2>
              <p className={styles.sectionText}>
                A Hyderabad-based electronics testing laboratory approached Ornate Quality Services after failing its first
                NABL assessment attempt. The laboratory had been operational for four years and had submitted its NABL
                application based on a self-prepared quality management system — but the assessment had identified 14
                non-conformities, including major non-conformities in method validation, measurement traceability, and
                proficiency testing.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The laboratory&apos;s self-prepared quality system documentation was technically incomplete — the SOPs
                lacked method validation data, the equipment calibration programme had gaps in traceability documentation,
                and the laboratory had not participated in proficiency testing before the assessment. NABL had placed the
                accreditation on hold pending closure of all non-conformities within 6 months.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a detailed review of all 14 non-conformity reports and developed a structured
                corrective action plan. We rewrote the method validation documentation for all 12 test methods, established
                a complete equipment calibration programme, enrolled the laboratory in appropriate proficiency testing
                programmes, and revised the quality manual and SOPs. We also prepared the laboratory for a follow-up NABL
                assessment with a pre-assessment mock audit.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                All 14 non-conformities were closed within the 6-month window. The follow-up NABL assessment found the
                laboratory fully compliant, and NABL accreditation was granted within 8 months of our engagement. The
                laboratory now holds accreditation for all 12 test parameters in its original scope and has since added 4
                new parameters through scope extensions managed by our team.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — NABL Accreditation</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for NABL Accreditation</h2>
              <p className={styles.ctaText}>
                Need help with gap analysis, ISO 17025 implementation, NABL application filing, assessment preparation, or
                ongoing surveillance support? Connect with Ornate Quality Services for complete laboratory accreditation
                support.
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
