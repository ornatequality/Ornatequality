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
  PESO_CCOE_TOC,
  PRODUCTS_COVERED_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/pesoCcoeContent";

const PESO_CCOE_PAGE_PATH = "/services/peso-ccoe-registration";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="peso"
      defaultService="PESO / CCOE Registration"
      serviceOptions={[
        "PESO / CCOE Registration",
      ]}
      successText="Our PESO / CCOE registration expert will contact you within one business day."
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

export function PesoCcoePageContent() {
  const [activeId, setActiveId] = useState(PESO_CCOE_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = PESO_CCOE_TOC.map((item) => item.id);
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
              {PESO_CCOE_TOC.map((item, i) => (
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
                PESO / CCOE Registration in India — Complete Guide for Manufacturers of Explosives,
                Petroleum &amp; Compressed Gas Products
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If your business involves the manufacture, import, storage, transport, or sale of explosives,
                    petroleum products, compressed gases, or pressure vessels in India, PESO Registration — issued by
                    the Chief Controller of Explosives (CCOE) under the Petroleum and Explosives Safety Organisation —
                    is the mandatory regulatory approval that governs your operations.
                  </p>
                  <p className={styles.sectionText}>
                    PESO is India&apos;s apex technical authority for safety in the storage, handling, and use of
                    petroleum, explosives, and compressed gases. Operating under the Ministry of Commerce and Industry,
                    PESO administers the Explosives Act, 1884, the Petroleum Act, 1934, and the Static and Mobile
                    Pressure Vessels (Unfired) Rules to ensure the safe handling of hazardous materials across India&apos;s
                    industrial, commercial, and consumer sectors.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help manufacturers, importers, and businesses obtain PESO / CCOE
                    Registration for a wide range of regulated product categories — from LPG cylinders and compressed
                    gas containers to industrial explosives and petroleum storage facilities. This guide explains
                    everything you need to know about PESO Registration — what it is, who needs it, how the process
                    works, and how to stay compliant.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="PESO / CCOE registration and hazardous materials compliance support"
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
                    Manufacturing or importing products that require PESO approval? Contact our team for a free
                    consultation and get a clear regulatory roadmap for your product.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-peso" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is PESO / CCOE Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    PESO — the Petroleum and Explosives Safety Organisation — is the government body responsible for
                    the safety regulation of petroleum, explosives, and compressed gases in India. The Chief Controller
                    of Explosives (CCOE) heads PESO and is the statutory authority for issuing licences, approvals, and
                    registrations under India&apos;s explosives and petroleum safety legislation.
                  </p>
                  <p className={styles.sectionText}>
                    PESO Registration — also referred to as CCOE Approval or PESO Licence — is the mandatory
                    authorisation issued by PESO for the manufacture, import, storage, transport, and use of regulated
                    hazardous materials and equipment. Products that fall under PESO&apos;s regulatory scope cannot be
                    legally manufactured, imported, sold, or used in India without valid PESO approval.
                  </p>
                  <p className={styles.sectionText}>
                    PESO operates under three primary pieces of legislation: the Explosives Act, 1884 (covering explosives
                    and blasting materials), the Petroleum Act, 1934 (covering petroleum storage and handling), and the
                    Gas Cylinders Rules, 2016 and Static and Mobile Pressure Vessels Rules (covering compressed gas
                    containers and pressure equipment).
                  </p>
                  <p className={styles.sectionText}>
                    For product manufacturers and importers, the most commonly sought PESO approvals are for gas
                    cylinders, LPG equipment, compressed gas containers, aerosol products, pressure vessels, petroleum
                    storage tanks, and certain types of fireworks and pyrotechnic devices.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>CC</span>
                  <span className={styles.whatIsLabel}>EXPLOSIVES &amp; GAS</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why PESO / CCOE Registration Is Essential for Your Business</h2>
              <p className={styles.sectionText}>
                PESO Registration is one of the most strictly enforced regulatory requirements in India&apos;s hazardous
                materials sector.
              </p>
              <h3 className={styles.subsectionTitle}>Mandatory Under Indian Law</h3>
              <p className={styles.sectionText}>
                The Explosives Act and the Petroleum Act make PESO registration or licence mandatory for all businesses
                dealing with regulated hazardous materials and equipment. Manufacturing, importing, storing, or selling
                covered products without PESO approval is a criminal offence — punishable with imprisonment and
                substantial fines. PESO and district authorities conduct regular inspections and enforcement operations.
              </p>
              <h3 className={styles.subsectionTitle}>Required for LPG, Gas, and Pressure Vessel Products</h3>
              <p className={styles.sectionText}>
                India&apos;s LPG, compressed gas, and pressure vessel industries are among the most regulated in the
                country. LPG cylinders, gas regulators, pressure vessels, compressed gas containers, and related equipment
                all require PESO approval before they can be manufactured, imported, or sold.
              </p>
              <h3 className={styles.subsectionTitle}>Customs Clearance for Regulated Imports</h3>
              <p className={styles.sectionText}>
                Indian customs authorities check PESO approval documentation for all regulated product categories at ports
                of entry. Shipments of gas cylinders, pressure vessels, petroleum equipment, or other PESO-regulated
                products without valid PESO approval are held at customs and cannot be cleared.
              </p>
              <h3 className={styles.subsectionTitle}>Industrial and Infrastructure Projects Require It</h3>
              <p className={styles.sectionText}>
                Contractors and suppliers working on oil and gas projects, petrochemical plants, mining operations,
                construction sites, and industrial facilities are required to hold valid PESO licences for all regulated
                equipment and materials used on-site. Project owners and EPC contractors conduct compliance audits of their
                supply chains.
              </p>
              <h3 className={styles.subsectionTitle}>Safety Liability Protection</h3>
              <p className={styles.sectionText}>
                Beyond regulatory compliance, PESO registration provides legal protection in the event of an accident
                involving your product. A business that has obtained proper PESO approval — demonstrating that its
                products meet all safety standards — is in a significantly stronger legal position than one operating
                without approval.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Which Products Require PESO / CCOE Registration in India?</h2>
              <p className={styles.sectionText}>
                PESO Registration covers a wide range of products and activities across the explosives, petroleum, and
                compressed gas sectors. The following table covers the most common categories for which manufacturers and
                importers seek PESO approval.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product / Activity Category</th>
                    <th scope="col">Common Products / Activities</th>
                    <th scope="col">Applicable Legislation</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.legislation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                This list is indicative. Any product or activity involving the storage, handling, transport, or use of
                explosives, petroleum products above prescribed quantities, or pressurised gas falls under PESO&apos;s
                regulatory scope. Our team will confirm the specific PESO requirements for your product during your free
                consultation.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>PESO / CCOE Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The PESO registration process varies by product category and the specific licence or approval sought. The
                following covers the core process applicable to most product registrations and manufacturing licences under
                PESO&apos;s jurisdiction.
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
              <h2 className={styles.sectionTitle}>PESO / CCOE Registration Requirements</h2>
              <p className={styles.sectionText}>
                The requirements for PESO registration vary significantly by product category and the type of licence
                sought.
              </p>
              <h3 className={styles.subsectionTitle}>For Product Manufacturers</h3>
              <ul className={styles.bulletList}>
                <li>Valid business registration and GST certificate</li>
                <li>Manufacturing premises with appropriate safety infrastructure as specified in the applicable rules</li>
                <li>Safety Officer designation — qualified person responsible for safety compliance at the manufacturing facility</li>
                <li>Fire safety systems, storage conditions, and handling equipment meeting PESO specifications</li>
                <li>Quality control systems capable of ensuring consistent product compliance with PESO standards</li>
                <li>Third-party inspection and testing capability — either in-house or through PESO-approved agencies</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Importers</h3>
              <ul className={styles.bulletList}>
                <li>Valid Import Export Code (IEC) registered with DGFT</li>
                <li>Design approval and test certificates from the manufacturer — issued by internationally recognised inspection bodies</li>
                <li>Country-of-origin regulatory approvals where required by PESO for the product category</li>
                <li>Authorised importer status for the product category from the manufacturer</li>
                <li>Storage facilities meeting PESO requirements for the product category if storage is involved</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Storage Licence Holders</h3>
              <ul className={styles.bulletList}>
                <li>Premises meeting the construction, safety, and distance requirements specified in the applicable rules</li>
                <li>Fire safety equipment, earthing systems, and safety signage as required by the applicable rules</li>
                <li>Trained personnel with appropriate safety competencies for handling regulated hazardous materials</li>
              </ul>
              <p className={styles.sectionText}>
                Not sure which PESO requirements apply to your product or facility? Our team provides a free regulatory
                assessment. Contact us before you begin documentation preparation.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for PESO / CCOE Registration</h2>
              <p className={styles.sectionText}>
                The following documents are commonly required for PESO product registration and manufacturing licence
                applications. Requirements vary by product category and applicable rules.
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
                Our team provides a precise, product-specific document checklist after reviewing your application details.
                For complex products or manufacturing licence applications, we manage all documentation systematically to
                ensure completeness before filing.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>PESO / CCOE Registration Cost in India</h2>
              <p className={styles.sectionText}>
                PESO registration costs include government fees, third-party inspection and testing charges, and
                professional service fees. The total cost varies significantly by product category and licence type.
              </p>
              <h3 className={styles.subsectionTitle}>Government Application Fee</h3>
              <p className={styles.sectionText}>
                PESO charges a government fee at the time of application filing. For product approvals, fees typically
                range from INR 1,000 to INR 10,000 per product or model. Manufacturing and storage licence fees are
                generally higher and vary based on the scale of operations.
              </p>
              <h3 className={styles.subsectionTitle}>Third-Party Inspection and Testing Charges</h3>
              <p className={styles.sectionText}>
                Third-party inspection and testing by PESO-approved agencies is a significant cost component for most
                PESO product approvals. For gas cylinders and pressure vessels, inspection costs can range from INR 5,000
                to INR 50,000 per product depending on the product size and category.
              </p>
              <h3 className={styles.subsectionTitle}>Periodic Inspection Costs</h3>
              <p className={styles.sectionText}>
                PESO-registered products and facilities are subject to periodic inspections throughout the licence
                validity period. These ongoing inspection costs must be factored into the total cost of PESO compliance.
                Our team helps you structure a cost-effective periodic inspection programme.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a fixed professional fee for end-to-end PESO registration management —
                from product assessment and documentation preparation to application filing, inspection coordination, and
                periodic compliance management. All fees are quoted transparently before we begin.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate for your specific product and PESO registration type — contact our team for a
                free consultation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>PESO Registration Validity and Renewal</h2>
              <p className={styles.sectionText}>
                PESO licences and approvals have varying validity periods depending on the product category and licence
                type. Manufacturing licences are typically issued for 3 to 5 years. Storage licences are typically issued
                for 1 to 3 years. Product approvals for gas cylinders and pressure vessels are linked to the product design
                and are valid until the design is changed.
              </p>
              <h3 className={styles.subsectionTitle}>Periodic Testing Requirements</h3>
              <p className={styles.sectionText}>
                Gas cylinders and pressure vessels registered under PESO are subject to periodic testing requirements —
                typically every 5 years for most cylinder categories. Cylinders that are not periodically tested and
                certified must be withdrawn from service. Our team manages periodic testing schedules and coordinates with
                PESO-approved testing agencies.
              </p>
              <h3 className={styles.subsectionTitle}>Licence Renewal</h3>
              <p className={styles.sectionText}>
                Manufacturing and storage licences must be renewed before expiry through the filing of a renewal application
                with updated documents and payment of the renewal fee. Licences that lapse without renewal require a fresh
                application. Our team manages renewal timelines proactively and files renewal applications well before expiry.
              </p>
              <h3 className={styles.subsectionTitle}>Change Notifications</h3>
              <p className={styles.sectionText}>
                Any significant change to a PESO-registered product — including design modifications, material changes, or
                changes to safety device specifications — must be notified to PESO and may require a new or amended approval.
                Our team advises on when changes trigger a notification requirement and manages the process efficiently.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of PESO / CCOE Registration</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Operating Without PESO Registration</h2>
              <p className={styles.sectionText}>
                The Explosives Act, 1884 and the Petroleum Act, 1934 prescribe serious penalties for operating without PESO
                registration or licence. Given the safety implications of the regulated products, enforcement is strict and
                consequences are severe.
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
                PESO and district authorities conduct surprise inspections of manufacturing facilities, storage sites, and
                retail establishments dealing in regulated products. In industries where non-compliance can include potential
                explosions, fires, and loss of life, proactive PESO compliance is the only responsible approach.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Gujarat Gas Cylinder Manufacturer Get PESO Approval
              </h2>
              <p className={styles.sectionText}>
                A Gujarat-based manufacturer of industrial compressed gas cylinders approached Ornate Quality Services after
                their existing PESO product approval was found to cover only a subset of their cylinder range. Several of
                their newer cylinder models had been manufactured and sold without individual PESO approvals, creating a
                compliance gap that a routine PESO inspection had identified.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer had assumed that their existing PESO approval covered all cylinder models within the same
                product family — a common misunderstanding. PESO&apos;s product approval framework requires separate approvals
                for each distinct cylinder model, as design variations can affect pressure ratings and safety performance.
                The inspection had flagged four cylinder models as unapproved.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a complete product portfolio review and identified all cylinder models that required
                individual PESO approvals. We prepared the technical documentation — including design drawings, material
                certificates, and third-party inspection reports from a PESO-approved agency — for all four unapproved models
                and filed the PESO applications simultaneously. We also helped establish a compliance review process for new
                product introductions.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                PESO approvals were obtained for all four cylinder models within 10 weeks. The compliance gap identified
                during the inspection was fully resolved. The manufacturer now runs all new cylinder designs through our
                pre-production compliance check before committing to tooling and production — preventing future approval gaps.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — PESO / CCOE Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for PESO / CCOE Registration</h2>
              <p className={styles.ctaText}>
                Need help with product assessment, technical documentation, third-party inspection coordination, PESO
                application filing, or periodic compliance management? Connect with Ornate Quality Services for complete
                support.
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
                          link.href === PESO_CCOE_PAGE_PATH ? styles.servicesLinkActive : ""
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
