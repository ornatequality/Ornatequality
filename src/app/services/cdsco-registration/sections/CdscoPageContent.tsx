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
  CDSCO_TOC,
  PRODUCTS_COVERED_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/cdscoContent";

const CDSCO_PAGE_PATH = "/services/cdsco-registration";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="cdsco"
      defaultService="CDSCO Registration"
      serviceOptions={[
        "CDSCO Registration",
      ]}
      successText="Our CDSCO registration expert will contact you within one business day."
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

export function CdscoPageContent() {
  const [activeId, setActiveId] = useState(CDSCO_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = CDSCO_TOC.map((item) => item.id);
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
              {CDSCO_TOC.map((item, i) => (
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
                CDSCO Registration in India — Complete Guide for Medical Device &amp; Drug Manufacturers and
                Importers
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you manufacture, import, or distribute medical devices, drugs, cosmetics, or diagnostics in
                    India, CDSCO Registration is the central regulatory requirement that governs your entire market
                    access. It is one of the most complex and consequential compliance processes in the Indian
                    regulatory landscape — and one where the cost of getting it wrong goes well beyond financial
                    penalties.
                  </p>
                  <p className={styles.sectionText}>
                    CDSCO — the Central Drugs Standard Control Organization — is India&apos;s national regulatory
                    authority for pharmaceuticals, medical devices, cosmetics, and diagnostics. Operating under the
                    Ministry of Health and Family Welfare, CDSCO is responsible for approving new drugs and medical
                    devices, issuing import licences, regulating clinical trials, and enforcing standards for product
                    safety and efficacy across India.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help medical device manufacturers, drug importers, cosmetic
                    companies, and diagnostic device businesses navigate the CDSCO registration process — from initial
                    product classification and regulatory pathway identification to complete application management and
                    post-registration compliance. In this guide, we cover everything you need to know about CDSCO
                    Registration in India.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="CDSCO registration and medical device regulatory compliance support"
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
                    Planning to import or manufacture medical devices or drugs in India? Contact our team for a free
                    CDSCO consultation and get a clear regulatory roadmap for your product.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-cdsco" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is CDSCO Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    CDSCO — the Central Drugs Standard Control Organization — is the apex regulatory body for drugs,
                    medical devices, cosmetics, and diagnostics in India. It functions under the Drugs and Cosmetics
                    Act, 1940, and the Medical Devices Rules, 2017. CDSCO Registration is the formal approval or licence
                    issued by CDSCO that permits a manufacturer or importer to legally sell or import regulated products
                    in India.
                  </p>
                  <p className={styles.sectionText}>
                    The regulatory framework under CDSCO covers three main product categories — Drugs (including
                    pharmaceuticals and biologicals), Medical Devices (from simple bandages to complex implantable
                    devices), and Cosmetics. Each category has its own registration pathway, documentation requirements,
                    and regulatory timeline.
                  </p>
                  <p className={styles.sectionText}>
                    For medical devices, India implemented a comprehensive regulatory framework under the Medical
                    Devices Rules, 2017 — which classifies devices into four risk classes (Class A, B, C, D) and mandates
                    registration for all devices. All medical devices sold in India must have a valid CDSCO registration
                    by the dates specified in CDSCO&apos;s phased implementation schedule.
                  </p>
                  <p className={styles.sectionText}>
                    For drugs and pharmaceuticals, CDSCO issues import licences under Form 10 and manufacturing licences
                    through the licensing system coordinated between CDSCO and State Drug Authorities. For cosmetics,
                    import registration under CDSCO&apos;s Sugam portal is mandatory for all imported cosmetic products.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>Rx</span>
                  <span className={styles.whatIsLabel}>DRUGS &amp; DEVICES</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why CDSCO Registration Is Essential for Your Business</h2>
              <p className={styles.sectionText}>
                CDSCO Registration is not a procedural formality — it is the gateway to one of India&apos;s most
                regulated and fastest-growing markets.
              </p>
              <h3 className={styles.subsectionTitle}>Mandatory for All Regulated Products</h3>
              <p className={styles.sectionText}>
                The Drugs and Cosmetics Act and the Medical Devices Rules make CDSCO registration mandatory for all
                covered product categories. Importing or selling drugs, medical devices, or cosmetics in India without
                valid CDSCO approval is a criminal offence — punishable with imprisonment and substantial fines.
              </p>
              <h3 className={styles.subsectionTitle}>India&apos;s Medical Device Market Is Growing Rapidly</h3>
              <p className={styles.sectionText}>
                India is one of the world&apos;s top 20 medical device markets and is growing at over 15% annually. CDSCO
                Registration is the gateway to this market — and businesses that get registered early build distribution
                relationships and brand recognition that are difficult for later entrants to displace.
              </p>
              <h3 className={styles.subsectionTitle}>Customs Clearance Requires It</h3>
              <p className={styles.sectionText}>
                Indian customs authorities check CDSCO registration for all regulated product categories at ports of entry.
                Medical devices, drugs, and cosmetics imported without valid CDSCO approval are refused clearance, held in
                bonded warehouses, or destroyed — often with catastrophic cost for temperature-sensitive products.
              </p>
              <h3 className={styles.subsectionTitle}>Hospital and Institutional Procurement Requires It</h3>
              <p className={styles.sectionText}>
                Hospitals, healthcare institutions, government medical procurement agencies, and pharmacy chains require
                valid CDSCO registration documentation before onboarding suppliers. GMSD and state medical supply
                corporations require CDSCO registration as a basic procurement eligibility criterion.
              </p>
              <h3 className={styles.subsectionTitle}>Patient Safety and Legal Liability</h3>
              <p className={styles.sectionText}>
                CDSCO registration requires manufacturers and importers to demonstrate that products are safe, effective,
                and manufactured to appropriate quality standards. Selling unregistered medical products in India carries
                significant legal liability in the event of adverse events or product failures.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Which Products Require CDSCO Registration in India?</h2>
              <p className={styles.sectionText}>
                CDSCO Registration covers three main product categories — Medical Devices, Drugs &amp; Pharmaceuticals, and
                Cosmetics. Here is a breakdown of what falls under each category.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Products</th>
                    <th scope="col">Regulatory Route</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Product classification under CDSCO is a critical first step — and incorrect classification is one of
                the most common reasons for application delays and rejections. Our team conducts a thorough product
                classification assessment before any application is filed, ensuring your product is correctly classified
                and the right regulatory pathway is selected.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>CDSCO Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The CDSCO registration process varies significantly by product category and risk class. The following
                covers the core steps applicable to most medical device registrations — the most common CDSCO application
                type handled by Ornate Quality Services.
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
              <h2 className={styles.sectionTitle}>CDSCO Registration Requirements for Manufacturers and Importers</h2>
              <p className={styles.sectionText}>
                The requirements for CDSCO registration vary by product category and risk class. The following covers the
                key requirements for medical device registration — the most common CDSCO application type.
              </p>
              <h3 className={styles.subsectionTitle}>For Foreign Manufacturers — Medical Devices</h3>
              <ul className={styles.bulletList}>
                <li>Valid manufacturing authorisation from the regulatory authority of the country of manufacture</li>
                <li>ISO 13485 Quality Management System certification — mandatory for Class B, C, D devices</li>
                <li>CE Marking, FDA approval, or equivalent recognised international certification for Class B and above</li>
                <li>Appointment of an Authorised Indian Representative with a valid address in India</li>
                <li>Complete technical documentation as per CDSCO&apos;s requirements for the applicable device class</li>
                <li>Post-market surveillance system capable of reporting adverse events to CDSCO</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Indian Manufacturers — Medical Devices</h3>
              <ul className={styles.bulletList}>
                <li>Valid manufacturing licence from the State Drug Authority for the manufacturing premises</li>
                <li>ISO 13485 certification (mandatory for Class B, C, D devices)</li>
                <li>Technical documentation demonstrating device safety and performance</li>
                <li>Ability to conduct post-market surveillance and adverse event reporting</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Drug Importers</h3>
              <ul className={styles.bulletList}>
                <li>Valid import licence under Form 10 from CDSCO — required before first shipment</li>
                <li>Certificate of Pharmaceutical Product (CoPP) from the regulatory authority of the country of manufacture</li>
                <li>Good Manufacturing Practice (GMP) compliance certificate from the manufacturer</li>
                <li>Approved product dossier including drug master file data where applicable</li>
              </ul>
              <p className={styles.sectionText}>
                Not sure which CDSCO pathway applies to your product? Our team provides a free regulatory assessment.
                Contact us before you begin documentation preparation.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for CDSCO Registration</h2>
              <p className={styles.sectionText}>
                The following documents form the core of a CDSCO medical device registration application. Requirements
                vary by device class — documents marked in details as Class B, C, D are required for those device classes.
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
                Our team provides a precise, device-specific document checklist after reviewing your product
                classification and existing regulatory certifications. We identify documentation gaps early and advise on
                the most efficient way to address them.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>CDSCO Registration Cost in India</h2>
              <p className={styles.sectionText}>
                CDSCO registration costs vary significantly by product category, device class, and the complexity of the
                technical documentation required.
              </p>
              <h3 className={styles.subsectionTitle}>CDSCO Government Fee</h3>
              <p className={styles.sectionText}>
                CDSCO charges a government fee at the time of application filing. For Class A devices, fees are typically
                INR 5,000 to INR 10,000. For Class B, C, and D devices, fees range from INR 10,000 to INR 50,000 depending
                on the device category and number of models covered.
              </p>
              <h3 className={styles.subsectionTitle}>ISO 13485 Certification Cost</h3>
              <p className={styles.sectionText}>
                For Class B, C, and D devices, ISO 13485 certification from an accredited certification body is a
                prerequisite. If the manufacturer does not hold ISO 13485, this must be obtained before the CDSCO
                application can be filed.
              </p>
              <h3 className={styles.subsectionTitle}>Technical Documentation Preparation</h3>
              <p className={styles.sectionText}>
                Preparing a CDSCO-compliant technical dossier — particularly for Class C and D devices — requires
                regulatory expertise. Ornate Quality Services charges a professional fee for complete technical
                documentation preparation, regulatory strategy, application filing, and query resolution — quoted based on
                device class and complexity.
              </p>
              <h3 className={styles.subsectionTitle}>Authorised Indian Representative Service</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges an annual fee for acting as the Authorised Indian Representative for
                foreign medical device manufacturers. As your AIR, we manage all CDSCO correspondence, adverse event
                reporting, and regulatory compliance obligations in India on your behalf.
              </p>
              <p className={styles.sectionText}>
                For a precise CDSCO registration cost estimate for your specific device and regulatory situation —
                contact our team for a free consultation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>CDSCO Registration Validity and Renewal</h2>
              <p className={styles.sectionText}>
                CDSCO medical device registrations are typically granted for a period of 5 years. Import licences for
                drugs are issued for varying periods depending on the product category. The exact validity is specified on
                the registration certificate at the time of issue.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <p className={styles.sectionText}>
                CDSCO registration renewal must be applied for before the current registration expires. The renewal process
                involves filing a renewal application on the Sugam portal with updated documents and confirmation that the
                device continues to meet all applicable requirements. For devices where specifications or manufacturing
                have changed, updated documentation must be submitted.
              </p>
              <h3 className={styles.subsectionTitle}>Post-Market Surveillance Requirements</h3>
              <p className={styles.sectionText}>
                Throughout the validity period, registered manufacturers and importers must maintain an active post-market
                surveillance system — monitoring device performance, collecting adverse event reports, and filing periodic
                safety update reports with CDSCO where required.
              </p>
              <h3 className={styles.subsectionTitle}>Change Notifications</h3>
              <p className={styles.sectionText}>
                Any significant change to the device — including design modifications, manufacturing changes, or labelling
                updates — must be notified to CDSCO. Depending on the nature of the change, CDSCO may require a supplementary
                application or amendment to the existing registration. Our team advises on when changes trigger a
                notification requirement and manages the process.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of CDSCO Registration for Medical Device Businesses</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Selling Medical Devices Without CDSCO Registration</h2>
              <p className={styles.sectionText}>
                The Drugs and Cosmetics Act and the Medical Devices Rules prescribe serious penalties for manufacturing,
                importing, or selling regulated products without valid CDSCO registration. Enforcement has strengthened
                significantly since the full implementation of the Medical Devices Rules in 2022.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Violation</th>
                    <th scope="col">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  {PENALTIES_ROWS.map((row) => (
                    <tr key={row.violation}>
                      <th scope="row">{row.violation}</th>
                      <td>{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                CDSCO and State Drug Authorities conduct joint enforcement operations — including surprise inspections of
                hospitals, pharmacies, and medical device distributors. Products found without valid registration documents
                are seized immediately.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a South Korean Medical Device Manufacturer Get CDSCO Registered
              </h2>
              <p className={styles.sectionText}>
                A South Korean manufacturer of Class B in-vitro diagnostic devices — specifically point-of-care blood
                glucose monitoring systems — approached Ornate Quality Services after their Indian distributor informed them
                that their devices were being flagged during hospital audits for missing CDSCO registration. Their products
                had been sold in India for two years through informal channels without registration.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer held CE Marking for their devices under the EU IVDR, but their Indian distributor had been
                selling the products without a valid CDSCO registration — under the mistaken belief that CE Marking alone
                was sufficient for the Indian market. When CDSCO&apos;s phased implementation schedule extended mandatory
                registration to their device category, the distributor began receiving compliance notices.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a full regulatory assessment of the manufacturer&apos;s device portfolio — covering three
                blood glucose monitor models and a range of test strips. We confirmed the correct device classification,
                verified that the EU IVDR certificate was accepted by CDSCO, and appointed Ornate as the Authorised Indian
                Representative. We prepared the complete technical dossier, filed CDSCO Sugam applications in parallel, and
                responded to CDSCO&apos;s technical queries within the required timeframe.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                CDSCO registrations were obtained for all three device models within 4 months. The distributor resolved the
                hospital compliance notices, and the manufacturer&apos;s products are now legally registered and available
                through organised hospital procurement channels across India. The manufacturer maintains an ongoing
                compliance programme through our AIR service.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — CDSCO Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for CDSCO Registration</h2>
              <p className={styles.ctaText}>
                Need help with product classification, AIR appointment, technical dossier preparation, Sugam portal
                filing, or post-market surveillance? Connect with Ornate Quality Services for complete support.
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
                          link.href === CDSCO_PAGE_PATH ? styles.servicesLinkActive : ""
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
