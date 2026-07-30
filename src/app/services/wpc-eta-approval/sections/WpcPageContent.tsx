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
  WPC_TOC,
  PRODUCTS_COVERED_ROWS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/wpcContent";

const WPC_PAGE_PATH = "/services/wpc-eta-approval";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="wpc"
      defaultService="WPC-ETA Approval"
      serviceOptions={[
        "WPC-ETA Approval",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "BEE Certification",
        "Other",
      ]}
      successText="Our WPC ETA approval expert will contact you within one business day."
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

export function WpcPageContent() {
  const [activeId, setActiveId] = useState(WPC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = WPC_TOC.map((item) => item.id);
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
              {WPC_TOC.map((item, i) => (
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
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                WPC ETA Approval in India — Complete Guide for Wireless &amp; Telecom Product
                Manufacturers
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If your product uses any form of wireless technology — Wi-Fi, Bluetooth,
                    cellular, Zigbee, or any other radio frequency — you need WPC ETA Approval before
                    it can be legally imported, manufactured, or sold in India. This is not
                    optional, and it applies to a wider range of products than most people realise.
                  </p>
                  <p className={styles.sectionText}>
                    The Wireless Planning and Coordination (WPC) Wing under India&apos;s Ministry of
                    Communications is the authority responsible for granting Equipment Type
                    Approval — commonly known as WPC ETA or WPC Approval. Without this approval,
                    your product cannot legally operate in India&apos;s radio frequency spectrum.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we have been helping manufacturers and importers
                    obtain WPC ETA Approval since 2013. In this guide, we explain exactly what WPC
                    approval is, which products need it, how the process works, what it costs, and
                    how to avoid the most common mistakes that delay approvals.
                    
                  </p>
                </div>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="WPC ETA approval and wireless product compliance"
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
                    Already know you need WPC approval? Contact our team for a free consultation
                    and get your application started today.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-wpc" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is WPC ETA Approval?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    WPC stands for Wireless Planning and Coordination — the division within
                    India&apos;s Department of Telecommunications (DoT) responsible for managing
                    the country&apos;s radio frequency spectrum. ETA stands for Equipment Type
                    Approval, which is the certification WPC issues to confirm that a wireless
                    product meets India&apos;s technical and safety standards for radio frequency
                    use.
                  </p>
                  <p className={styles.sectionText}>
                    In simple terms, WPC ETA Approval is the government&apos;s confirmation that
                    your wireless product is safe to use, operates within permitted frequency
                    bands, and will not cause interference with other wireless devices or critical
                    infrastructure in India.
                  </p>
                  <p className={styles.sectionText}>
                    WPC approval is required under the Indian Wireless Telegraphy Act, 1933, and
                    the rules issued under it. Any product that uses radio frequency — whether for
                    communication, data transfer, or any other purpose — must be type-approved by
                    WPC before it can be used or sold in India.
                  </p>
                  <p className={styles.sectionText}>
                    WPC ETA is distinct from BIS CRS Registration and TEC Certification — though
                    many products require all three. Our team will confirm exactly which approvals
                    your product needs during your free consultation.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>📡</span>
                  <span className={styles.whatIsLabel}>WPC ETA</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why WPC ETA Approval Is Essential for Your Business</h2>
              <p className={styles.sectionText}>
                A significant number of manufacturers and importers enter the Indian market without
                WPC approval — often unaware it is required for their product. Here is why that is a
                serious risk, and why getting approved matters.
              </p>
              <h3 className={styles.subsectionTitle}>It Is a Legal Requirement Under Indian Law</h3>
              <p className={styles.sectionText}>
                The Indian Wireless Telegraphy Act makes it illegal to possess, use, or sell any
                wireless device without the required licence or type approval. WPC ETA is the
                mandatory type approval for most wireless products. Importers who bring products into
                India without WPC approval are violating this law — and enforcement has been
                significantly strengthened in recent years through customs checks and market
                surveillance.
              </p>
              <h3 className={styles.subsectionTitle}>Customs Will Stop Your Shipment</h3>
              <p className={styles.sectionText}>
                Indian customs authorities actively check for WPC ETA compliance at ports of entry.
                Products found without valid WPC approval can be detained, held in customs, or
                refused entry entirely. Shipments that are held at customs mean delayed deliveries,
                unhappy buyers, increased storage costs, and in some cases, complete product
                destruction. Getting WPC approval before your shipment arrives is always the right
                call.
              </p>
              <h3 className={styles.subsectionTitle}>
                E-Commerce Platforms and Retailers Require It
              </h3>
              <p className={styles.sectionText}>
                Major e-commerce platforms including Amazon India and Flipkart require valid WPC ETA
                certificates for wireless product listings. Retail chains and distributors also ask
                for WPC approval documents before onboarding new products. Without it, your product
                simply cannot be sold through organised channels in India.
              </p>
              <h3 className={styles.subsectionTitle}>
                It Protects Your Product and Brand Reputation
              </h3>
              <p className={styles.sectionText}>
                A product operating on unapproved frequencies can cause interference with other
                devices and critical systems. If a complaint is raised about your product causing
                interference, the legal and reputational consequences can be severe. WPC approval
                confirms your product has been tested and meets all frequency compliance
                requirements — protecting you from these risks.
              </p>
              <h3 className={styles.subsectionTitle}>Government Procurement Requires It</h3>
              <p className={styles.sectionText}>
                If you intend to supply wireless products to government institutions, defence
                establishments, or public sector undertakings in India, WPC ETA Approval is a
                mandatory prerequisite. Without it, your product is disqualified from government
                tenders and procurement processes regardless of how competitive your pricing is.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Which Products Require WPC ETA Approval in India?
              </h2>
              <p className={styles.sectionText}>
                WPC ETA Approval is required for any product that uses radio frequency technology.
                The following categories represent the most common product types for which our
                clients seek WPC approval.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Examples</th>
                    <th scope="col">Frequency Technology</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.examples}</td>
                      <td>{row.technology}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                This list is not exhaustive. Any product using radio frequency technology requires
                WPC ETA Approval in India. If you are unsure whether your specific product requires
                WPC approval, our team will confirm during a free consultation.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>WPC ETA Approval Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The WPC ETA Approval process is managed through WPC&apos;s online portal and involves
                technical documentation, laboratory testing, and application review by WPC officials.
                Here is a complete breakdown of every step — and how Ornate Quality Services manages
                the process for you.
              </p>
              <div className={styles.processFlow} role="list">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.step} className={styles.processStep} role="listitem">
                    <div
                      className={styles.processCircle}
                      style={{ background: step.color }}
                    >
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

            <section id="registration-requirements" className={styles.section}>
              <h2 className={styles.sectionTitle}>WPC ETA Approval Registration Requirements</h2>
              <p className={styles.sectionText}>
                Before applying for WPC ETA Approval, manufacturers and importers must ensure they
                meet the following requirements.
              </p>
              <h3 className={styles.subsectionTitle}>For Indian Manufacturers</h3>
              <ul className={styles.bulletList}>
                <li>
                  Valid business registration in India — proprietorship, LLP, or private limited
                  company
                </li>
                <li>
                  Product must operate within frequency bands permitted by WPC for the intended use
                </li>
                <li>Ability to submit product samples for testing at a WPC-designated laboratory</li>
                <li>
                  Technical documentation confirming the product&apos;s wireless architecture and
                  specifications
                </li>
                <li>
                  Commitment to use only approved frequency bands in products sold in India
                </li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Importers</h3>
              <ul className={styles.bulletList}>
                <li>Valid Import Export Code (IEC) registered with DGFT</li>
                <li>
                  Authorisation letter from the foreign manufacturer confirming the importer&apos;s
                  right to sell the product in India
                </li>
                <li>
                  Product samples available for testing at a WPC-designated laboratory in India
                </li>
                <li>
                  Technical documentation from the manufacturer including block diagrams and frequency
                  specifications
                </li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Foreign Manufacturers (Direct Application)</h3>
              <p className={styles.sectionText}>
                Foreign manufacturers can apply for WPC ETA directly or through an authorised
                Indian representative. Our team acts as the authorised representative for
                international manufacturers and manages the complete WPC application process in
                India.
              </p>
              <p className={styles.sectionText}>
                Not sure whether your product meets WPC requirements? We offer a pre-application
                technical review at no cost. Contact our team to get started.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for WPC ETA Approval</h2>
              <p className={styles.sectionText}>
                The following documents are required for a WPC ETA Approval application. Exact
                requirements vary by product category and frequency band.
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
                Our team provides a precise, product-specific document checklist after reviewing
                your application details — so nothing is missed and nothing unnecessary is prepared.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>WPC ETA Approval Cost — What to Expect</h2>
              <p className={styles.sectionText}>
                The cost of WPC ETA Approval in India includes government fees, laboratory testing
                charges, and professional service fees. Here is a breakdown of each component.
              </p>
              <h3 className={styles.subsectionTitle}>WPC Government Application Fee</h3>
              <p className={styles.sectionText}>
                WPC charges a government fee at the time of application filing. The fee varies
                depending on the type of equipment and the number of frequency bands being approved.
                For most consumer wireless products, the WPC application fee ranges from INR 1,000 to
                INR 10,000 per application.
              </p>
              <h3 className={styles.subsectionTitle}>Laboratory Testing Charges</h3>
              <p className={styles.sectionText}>
                Product testing at a WPC-designated lab is required before filing the application.
                Testing charges vary by product category and the number of frequency bands and test
                parameters involved. For consumer wireless products, testing typically costs between
                INR 15,000 and INR 60,000 depending on complexity.
              </p>
              <p className={styles.sectionText}>
                Multi-band products — such as a device using both Wi-Fi and Bluetooth — may require
                testing across multiple frequency bands, which increases the testing cost and time.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a fixed professional fee for end-to-end WPC ETA
                Approval management — from product assessment and lab coordination to application
                filing, query response, and certificate delivery. All fees are quoted transparently
                before we begin.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate for your specific product and frequency bands — contact
                our team for a free consultation. We provide a full cost breakdown at no obligation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>WPC ETA Approval Validity and Renewal</h2>
              <p className={styles.sectionText}>
                WPC ETA certificates are typically valid for a period of five years from the date of
                issue. This is one of the longer validity periods among India&apos;s product
                certifications — but renewal must be filed before expiry to ensure continuous
                compliance.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <p className={styles.sectionText}>
                WPC ETA renewal involves filing a fresh application on the WPC portal before the
                existing certificate expires. The renewal process is generally faster than the initial
                application — provided the product specifications have not changed and the original
                test reports are still valid.
              </p>
              <p className={styles.sectionText}>
                If the product has undergone any hardware or firmware changes that affect its radio
                frequency behaviour since the original approval, a fresh round of testing may be
                required as part of the renewal.
              </p>
              <h3 className={styles.subsectionTitle}>Product Changes During Validity Period</h3>
              <p className={styles.sectionText}>
                Any change to the product&apos;s wireless components, antenna design, or frequency
                operation during the validity period must be reported to WPC and may require a new or
                amended approval. Our team advises clients on when product changes trigger a fresh WPC
                application — helping you stay compliant without unnecessary reapplication costs.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Getting WPC ETA Approved</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Penalties for Selling Wireless Products Without WPC ETA Approval
              </h2>
              <p className={styles.sectionText}>
                Operating, possessing, or selling wireless equipment without WPC ETA Approval is a
                violation of the Indian Wireless Telegraphy Act, 1933. Penalties have been
                significantly enhanced in recent years as India has strengthened its radio frequency
                compliance framework.
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
                Customs enforcement at Indian ports has become increasingly rigorous, and WPC market
                surveillance is active across both online and offline channels. The cost of compliance
                is always lower than the cost of enforcement.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Wi-Fi Router Brand Get WPC ETA Approved in 45 Days
              </h2>
              <p className={styles.sectionText}>
                A consumer electronics brand based in Taiwan was preparing to launch a new range of
                dual-band Wi-Fi routers in India through a major e-commerce platform. Their India
                launch was scheduled for a specific date — and WPC ETA Approval had not been factored
                into the product launch timeline.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                With only 60 days to their launch date, the brand contacted Ornate Quality Services
                after their Amazon India listing was flagged for missing WPC approval documentation.
                Their routers operated on both 2.4GHz and 5GHz frequency bands, and the product
                required testing across both bands at a WPC-designated laboratory — a process that
                can take 4 to 8 weeks when not managed efficiently.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team immediately conducted a product assessment to confirm the exact frequency
                bands and test parameters. We identified the fastest available WPC-designated lab with
                capacity to test their product category, coordinated urgent sample dispatch from
                Taiwan, and fast-tracked the test scheduling. While testing was underway, we prepared
                the complete WPC application documentation in parallel — so the application was ready
                to file the moment test reports came in.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                WPC ETA Approval was obtained in 45 days — ahead of the brand&apos;s launch date. Both
                frequency bands were approved in a single application. The brand launched on schedule,
                their Amazon India listing went live with full compliance documentation, and they have
                since added five more SKUs to their India-approved product portfolio through Ornate.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions — WPC ETA Approval
              </h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for WPC ETA Approval</h2>
              <p className={styles.ctaText}>
                Need help with WPC ETA Approval, frequency assessment, lab testing, or SACFA portal
                filing? Connect with Ornate Quality Services for complete support and professional
                guidance for your WPC approval process in India.
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
                          link.href === WPC_PAGE_PATH ? styles.servicesLinkActive : ""
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
