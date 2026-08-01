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
  TEC_TOC,
  PRODUCTS_COVERED_ROWS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/tecContent";

const TEC_PAGE_PATH = "/services/tec-certification";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="tec"
      defaultService="TEC Certification"
      serviceOptions={[
        "TEC Certification",
        "WPC-ETA Approval",
        "BIS CRS Registration",
        "BEE Certification",
        "Other",
      ]}
      successText="Our TEC certification expert will contact you within one business day."
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

export function TecPageContent() {
  const [activeId, setActiveId] = useState(TEC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = TEC_TOC.map((item) => item.id);
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
              {TEC_TOC.map((item, i) => (
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
                TEC Certification in India — Complete Guide for Telecom Equipment Manufacturers
                &amp; Importers
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you manufacture or import telecom equipment for the Indian market, TEC
                    Certification is one of the most critical regulatory requirements you need to
                    address. Whether it is a telephone, a router, a VSAT system, a base station
                    component, or any other product that connects to India&apos;s public telecom
                    network — TEC approval is mandatory before your product can be legally sold or
                    deployed.
                  </p>
                  <p className={styles.sectionText}>
                    TEC stands for Telecommunications Engineering Centre — the technical arm of
                    India&apos;s Department of Telecommunications (DoT). TEC issues Interface
                    Approvals and Equipment Type Approvals that confirm telecom products meet
                    India&apos;s technical interface standards and performance specifications before
                    they are permitted to connect to the public network.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we have helped telecom equipment manufacturers and
                    importers navigate the TEC certification process since 2013. This guide covers
                    everything you need to know — what TEC certification is, which products require
                    it, how the process works, what it costs, and how to avoid the delays that
                    commonly hold up TEC applications.
                  </p>
                </div>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="TEC certification and telecom equipment compliance"
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
                    Already know you need TEC Certification? Contact our team for a free consultation
                    and let us assess your product&apos;s requirements immediately.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-tec" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is TEC Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    TEC — the Telecommunications Engineering Centre — is the technical standards
                    and certification body under India&apos;s Department of Telecommunications. TEC
                    develops Interface Approval Standards (IAS) and Equipment Type Approval (ETA)
                    specifications for telecom equipment and is responsible for approving products
                    before they are connected to or used within India&apos;s public telecom
                    infrastructure.
                  </p>
                  <p className={styles.sectionText}>
                    TEC Certification, also referred to as TEC Approval or TEC Interface Approval, is
                    the mandatory certification issued by TEC confirming that a telecom product
                    complies with the applicable Indian telecom standards. The certification ensures
                    that the product will function correctly, safely, and without causing harm or
                    interference to India&apos;s telecom network or to other connected equipment.
                  </p>
                  <p className={styles.sectionText}>
                    TEC operates under the Indian Telegraph Act, 1885, and its associated rules.
                    Products that connect to the Public Switched Telephone Network (PSTN), cellular
                    networks, broadband infrastructure, or any other public telecom network in India
                    require TEC approval before commercial deployment.
                  </p>
                  <p className={styles.sectionText}>
                    It is important to note that TEC Certification is separate from WPC ETA
                    Approval. Many telecom products require both — TEC for network interface
                    compliance and WPC for radio frequency compliance. Our team will confirm exactly
                    which approvals apply to your product.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>📞</span>
                  <span className={styles.whatIsLabel}>TEC</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why TEC Certification Is Essential for Your Business
              </h2>
              <p className={styles.sectionText}>
                TEC Certification is not just a regulatory checkbox — it is a gateway to the Indian
                telecom market. Here is why getting TEC certified matters for your business.
              </p>
              <h3 className={styles.subsectionTitle}>Mandatory Under Indian Telecom Law</h3>
              <p className={styles.sectionText}>
                The Indian Telegraph Act and DoT&apos;s Mandatory Testing and Certification of
                Telecom Equipment (MTCTE) policy make TEC approval compulsory for all telecom
                equipment connected to Indian networks. Since 2021, DoT has significantly expanded
                the list of products under mandatory TEC certification and has strengthened
                enforcement at ports of entry and in the market. Non-compliant products are being
                actively recalled and penalised.
              </p>
              <h3 className={styles.subsectionTitle}>
                Required for Network Operators and Service Providers
              </h3>
              <p className={styles.sectionText}>
                Telecom operators in India — including Jio, Airtel, Vi, and BSNL — are required by
                DoT to use only TEC-certified equipment in their networks. If you supply equipment
                to telecom operators or infrastructure providers, TEC certification is a
                non-negotiable prerequisite. Without it, your product will not be considered for
                procurement regardless of its technical capabilities or pricing.
              </p>
              <h3 className={styles.subsectionTitle}>Customs Clearance for Imported Equipment</h3>
              <p className={styles.sectionText}>
                Since the expansion of the MTCTE policy, Indian customs authorities check for TEC
                certification for notified telecom product categories. Products imported without
                valid TEC approval are being held at ports, returned to origin, or destroyed. The
                financial and reputational cost of a customs hold on telecom equipment — which is
                often high-value — is significant.
              </p>
              <h3 className={styles.subsectionTitle}>
                Essential for Government and Institutional Buyers
              </h3>
              <p className={styles.sectionText}>
                Government departments, defence establishments, railways, and public sector
                undertakings that procure telecom equipment require TEC certification as a mandatory
                qualification criterion. If your business targets these buyers — or intends to in
                the future — TEC approval is essential from the outset.
              </p>
              <h3 className={styles.subsectionTitle}>
                Competitive Advantage in the Indian Telecom Market
              </h3>
              <p className={styles.sectionText}>
                India is one of the world&apos;s largest telecom markets. A TEC-certified product
                signals technical credibility, regulatory compliance, and a serious commitment to
                the Indian market. It differentiates your product from uncertified competitors and
                builds confidence with buyers, integrators, and network operators.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Which Products Require TEC Certification in India?
              </h2>
              <p className={styles.sectionText}>
                TEC certification under the MTCTE policy applies to a wide range of telecom and
                network equipment. The following table covers the most common product categories for
                which manufacturers and importers seek TEC approval.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Products</th>
                    <th scope="col">TEC Standard Reference</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                The MTCTE policy list is updated periodically as DoT brings new product categories
                under mandatory certification. Our team monitors all DoT notifications and will
                confirm the current TEC certification requirements for your specific product during
                your free consultation.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>TEC Certification Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The TEC certification process under the MTCTE policy is structured but involves
                multiple agencies — TEC, designated test labs, and DoT&apos;s online portal. Here
                is a complete breakdown of every stage and how Ornate Quality Services manages the
                process for you.
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
              <h2 className={styles.sectionTitle}>TEC Certification Registration Requirements</h2>
              <p className={styles.sectionText}>
                Before applying for TEC Certification, manufacturers and importers must meet the
                following eligibility requirements.
              </p>
              <h3 className={styles.subsectionTitle}>For Indian Manufacturers</h3>
              <ul className={styles.bulletList}>
                <li>
                  Valid business registration in India — GST registration and company incorporation
                  certificate
                </li>
                <li>
                  Product must comply with the applicable TEC Interface Approval Standard or
                  Equipment Type Approval specification
                </li>
                <li>Product samples available for testing at a TEC-empanelled laboratory</li>
                <li>
                  Technical documentation demonstrating compliance with the applicable TEC standard
                </li>
                <li>
                  Qualified technical personnel capable of supporting the testing process and
                  responding to TEC queries
                </li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Importers</h3>
              <ul className={styles.bulletList}>
                <li>Valid Import Export Code (IEC) registered with DGFT</li>
                <li>
                  Authorisation letter from the foreign manufacturer confirming the importer&apos;s
                  right to certify and sell the product in India
                </li>
                <li>Product samples available for testing at a TEC-empanelled laboratory in India</li>
                <li>
                  Complete technical documentation from the foreign manufacturer including interface
                  specifications and block diagrams
                </li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Foreign Manufacturers (Direct Application)</h3>
              <p className={styles.sectionText}>
                Foreign manufacturers can apply for TEC certification directly through the MTCTE
                portal or through an authorised Indian representative. Ornate Quality Services acts as
                the authorised representative for international manufacturers — managing the complete
                TEC application process in India on their behalf.
              </p>
              <p className={styles.sectionText}>
                Unsure whether your product requires TEC Certification or which standard applies?
                Our team provides a free product compliance assessment. Contact us to get started.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for TEC Certification</h2>
              <p className={styles.sectionText}>
                The following documents are required for a TEC certification application under the
                MTCTE policy. Requirements may vary based on the product category and applicable TEC
                standard.
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
                Our team provides a precise, product-specific document checklist after reviewing your
                product details — ensuring nothing is missed and no unnecessary documents are
                prepared.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>TEC Certification Cost — What to Expect</h2>
              <p className={styles.sectionText}>
                TEC certification involves several cost components. Understanding these upfront helps
                you plan your certification budget accurately.
              </p>
              <h3 className={styles.subsectionTitle}>TEC Application Fee</h3>
              <p className={styles.sectionText}>
                TEC charges a government application fee at the time of filing. The fee varies by
                product category and type of certification — Interface Approval or Equipment Type
                Approval. Application fees typically range from INR 5,000 to INR 25,000 depending on
                the product and the number of interfaces being certified.
              </p>
              <h3 className={styles.subsectionTitle}>Laboratory Testing Charges</h3>
              <p className={styles.sectionText}>
                Testing charges are paid directly to the TEC-empanelled laboratory. Costs vary
                significantly by product category and the number of parameters to be tested. For
                terminal equipment and networking devices, testing typically costs between INR 20,000
                and INR 80,000 per product. Complex products with multiple interfaces or advanced
                features may cost more.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Surveillance Fee</h3>
              <p className={styles.sectionText}>
                TEC charges an annual fee for maintaining the certification during its validity
                period. This covers TEC&apos;s ongoing surveillance activities and is typically a
                fraction of the initial application fee.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a fixed professional fee for end-to-end TEC
                certification management — from product classification and standard identification to
                lab coordination, application filing, query resolution, and certificate delivery. All
                fees are quoted transparently before we begin work.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate specific to your product and TEC standard — contact our
                team for a free consultation. We provide a complete cost breakdown at no obligation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>TEC Certification Validity and Renewal</h2>
              <p className={styles.sectionText}>
                TEC certifications are typically issued with a validity period of three to five years,
                depending on the product category and the type of certification issued. The exact
                validity is specified on the certificate at the time of issue.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <p className={styles.sectionText}>
                TEC certification renewal must be initiated before the existing certificate expires.
                The renewal process involves filing a renewal application on the MTCTE portal,
                submitting updated documents, paying the renewal fee, and confirming that the product
                continues to conform to the applicable TEC standard.
              </p>
              <p className={styles.sectionText}>
                If the product has undergone hardware or software changes since the original
                certification, fresh testing may be required as part of the renewal process. Our team
                assesses any product changes and advises on whether renewed testing is necessary before
                initiating the renewal application.
              </p>
              <h3 className={styles.subsectionTitle}>Standard Updates</h3>
              <p className={styles.sectionText}>
                TEC periodically updates its Interface Approval Standards to reflect changes in
                technology and network requirements. When a standard applicable to your certified
                product is updated, your certification may need to be re-evaluated against the new
                standard. Our team monitors TEC standard updates and proactively advises clients when
                their certification may be affected.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Key Benefits of TEC Certification for Telecom Equipment
              </h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Penalties for Selling Telecom Equipment Without TEC Certification
              </h2>
              <p className={styles.sectionText}>
                Since the enforcement of the MTCTE policy, DoT and TEC have significantly
                strengthened compliance monitoring. The consequences of selling or importing
                non-certified telecom equipment in India are serious and have become increasingly
                difficult to avoid.
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
                India&apos;s MTCTE enforcement has been particularly active since 2022. TEC and DoT
                have issued recall notices for multiple non-certified product categories and have
                directed customs to increase port-level checks. Acting proactively is the only safe
                approach for any serious telecom equipment business targeting the Indian market.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a European Networking Equipment Manufacturer Get TEC
                Certified
              </h2>
              <p className={styles.sectionText}>
                A European manufacturer of enterprise-grade IP phones and VoIP adapters approached
                Ornate Quality Services after their distributor in India received a show-cause notice
                from DoT. Several models of their IP phones had been identified as non-compliant under
                the MTCTE policy and were being sold in India without valid TEC Interface Approval.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer had been selling their products in India through a local distributor
                for several years without TEC certification — largely because the MTCTE policy had
                been expanded to include their product category only recently. With a DoT notice
                already issued, they needed to get TEC certified quickly while also managing the
                existing compliance situation with their distributor.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted an immediate compliance assessment of their product portfolio —
                covering seven IP phone models and two VoIP adapter models. We identified the
                applicable TEC Interface Approval Standard for each product category, coordinated
                urgent testing at a TEC-empanelled lab in Delhi, and prepared the complete MTCTE
                portal applications in parallel with the testing process.
              </p>
              <p className={styles.sectionText}>
                We also assisted the distributor in responding to the DoT show-cause notice by
                demonstrating that a TEC certification application was actively in progress — which
                helped defer enforcement action while the certification process was completed.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                TEC Interface Approvals were obtained for all nine product models within four months.
                The DoT notice was satisfactorily resolved, and the distributor resumed normal sales
                operations. The manufacturer has since expanded their India-certified product range and
                now runs all new product launches through Ornate&apos;s compliance screening process
                before entering the Indian market.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — TEC Certification</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for TEC Certification</h2>
              <p className={styles.ctaText}>
                Need help with TEC Certification, MTCTE portal filing, empanelled lab testing, or
                Interface Approval? Connect with Ornate Quality Services for complete support and
                professional guidance for your TEC certification process in India.
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
                          link.href === TEC_PAGE_PATH ? styles.servicesLinkActive : ""
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
