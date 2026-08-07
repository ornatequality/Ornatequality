"use client";

import { ServiceCallbackForm } from "@/components/forms/ServiceCallbackForm";

import React, { useCallback, useEffect, useState } from "react";
import { useActiveTocScroll } from "@/hooks/useActiveTocScroll";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import styles from "@/styles/bisCrsRegistration.module.css";
import buildingImage from "@/assests/services/certificate.webp";
import {
  WHY_ORNATE_ITEMS,
  LATEST_NOTIFICATIONS,
  OUR_SERVICES_LINKS,
} from "../../bis-crs-registration/data/bisCrsContent";
import {
  LMPC_TOC,
  PRODUCTS_COVERED_ROWS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/lmpcContent";

const LMPC_PAGE_PATH = "/services/lmpc-registration";


function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="lmpc"
      defaultService="LMPC Registration"
      serviceOptions={[
        "LMPC Registration",
        "BIS CRS Registration",
        "BEE Certification",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our LMPC registration expert will contact you within one business day."
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

export function LmpcPageContent() {
  const [activeId, setActiveId] = useState(LMPC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = LMPC_TOC.map((item) => item.id);
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
              {LMPC_TOC.map((item, i) => (
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
                LMPC Registration in India — Complete Guide for Importers of Pre-Packaged Products
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you import pre-packaged products into India — whether it is electronics,
                    cosmetics, food items, household goods, or any other category sold in sealed
                    packaging — LMPC Registration is a compliance requirement you cannot afford to
                    overlook. It is one of those regulations that catches importers off guard, often
                    after a shipment has already arrived at port.
                  </p>
                  <p className={styles.sectionText}>
                    LMPC stands for Legal Metrology Packaged Commodities. Under the Legal Metrology
                    (Packaged Commodities) Rules, 2011, every importer of pre-packaged goods must
                    obtain an LMPC Certificate from the Department of Consumer Affairs before their
                    products can be legally sold in India. The registration ensures that imported
                    packaged products carry all mandatory declarations required under Indian law —
                    including MRP, net quantity, country of origin, importer details, and more.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we have been helping importers obtain LMPC
                    Registration quickly and correctly since 2013. In this guide, we explain exactly
                    what LMPC Registration is, who needs it, how the process works, what it costs, and
                    how to avoid the mistakes that commonly delay approvals.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="LMPC registration and legal metrology compliance for importers"
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
                    Already importing packaged products into India? Contact our team for a free LMPC
                    consultation and find out whether your products are compliant.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-lmpc" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is LMPC Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    LMPC Registration — or Legal Metrology Packaged Commodities Registration — is a
                    mandatory compliance certificate issued by the Department of Consumer Affairs
                    (DoCA) under the Ministry of Consumer Affairs, Food and Public Distribution. It is
                    required for all importers who bring pre-packaged commodities into India for sale.
                  </p>
                  <p className={styles.sectionText}>
                    The Legal Metrology (Packaged Commodities) Rules, 2011 — framed under the Legal
                    Metrology Act, 2009 — specify what information must be declared on the packaging
                    of all pre-packaged goods sold in India. For imported products, this includes
                    declarations that may not appear on the original foreign packaging and must be
                    added before the product is sold to Indian consumers.
                  </p>
                  <p className={styles.sectionText}>
                    The LMPC Certificate confirms that the importer is registered with the relevant
                    authority and is compliant with all packaging declaration requirements under Indian
                    law. Without this registration, customs authorities can hold shipments, and market
                    surveillance officers can seize products from retail shelves.
                  </p>
                  <p className={styles.sectionText}>
                    LMPC Registration is separate from BIS certification, WPC approval, and other
                    product certifications. It specifically covers packaging compliance — ensuring that
                    consumers in India have access to all mandatory product information before making a
                    purchase.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>LM</span>
                  <span className={styles.whatIsLabel}>PACKAGED COMMODITIES</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why LMPC Registration Is Essential for Importers
              </h2>
              <p className={styles.sectionText}>
                LMPC Registration is one of the most commonly overlooked compliance requirements among
                Indian importers — and one of the most actively enforced. Here is why it matters.
              </p>
              <h3 className={styles.subsectionTitle}>
                It Is Legally Mandatory for All Importers of Pre-Packaged Goods
              </h3>
              <p className={styles.sectionText}>
                The Legal Metrology Act and the Packaged Commodities Rules make LMPC Registration
                compulsory for every importer who sells pre-packaged products in India. There are no
                exemptions based on company size, product value, or import volume. Whether you import
                100 units or 100,000 units, if the product is sold in pre-packaged form, LMPC
                Registration applies to you.
              </p>
              <h3 className={styles.subsectionTitle}>Customs Authorities Check for LMPC Compliance</h3>
              <p className={styles.sectionText}>
                Indian customs officials are increasingly checking for LMPC compliance at ports of entry.
                Shipments of pre-packaged goods without valid LMPC Registration or without the required
                packaging declarations are being held, penalised, or returned. The cost of a customs hold
                — in storage charges, demurrage, and delayed sales — is always significantly higher than
                the cost of getting registered in advance.
              </p>
              <h3 className={styles.subsectionTitle}>Market Surveillance Is Active Across India</h3>
              <p className={styles.sectionText}>
                Legal Metrology officers conduct regular market surveillance across retail channels — both
                physical and online. Products found without mandatory declarations or sold by unregistered
                importers are seized, and enforcement notices are issued. Amazon India and Flipkart both
                check for LMPC compliance and may delist products that are found non-compliant following a
                complaint or inspection.
              </p>
              <h3 className={styles.subsectionTitle}>It Protects Your Import Business</h3>
              <p className={styles.sectionText}>
                LMPC Registration is not just about avoiding penalties — it is about building a
                sustainable import business in India. An importer with valid LMPC Registration can
                onboard retail chains, list products on e-commerce platforms, supply to organised
                distributors, and operate in government procurement channels without compliance concerns.
              </p>
              <h3 className={styles.subsectionTitle}>Required for E-Commerce Sales</h3>
              <p className={styles.sectionText}>
                India&apos;s e-commerce platforms require importers to provide LMPC Registration details
                when listing imported pre-packaged products. Without valid registration, product listings
                can be refused or removed. For importers who rely on e-commerce as their primary sales
                channel in India, LMPC Registration is a non-negotiable prerequisite.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Which Products Require LMPC Registration in India?
              </h2>
              <p className={styles.sectionText}>
                LMPC Registration is required for all importers of pre-packaged commodities — products
                that are placed in a package of any nature in the absence of the buyer and sealed before
                being offered for sale. The following table covers the most common product categories for
                which importers seek LMPC Registration.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Examples</th>
                    <th scope="col">Mandatory Declarations Required</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.examples}</td>
                      <td>{row.declarations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                In practice, if a product is imported in sealed packaging and sold to consumers or
                retailers in India, LMPC Registration almost certainly applies. Our team will confirm
                whether your specific product requires LMPC Registration and what declarations are
                mandatory for your category during your free consultation.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The LMPC Registration process is managed by the Legal Metrology Department under the
                Department of Consumer Affairs. Applications are filed online through the National Single
                Window System (NSWS) or the Legal Metrology portal. Here is a complete breakdown of every
                step and how Ornate Quality Services manages the process for you.
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
              <h2 className={styles.sectionTitle}>LMPC Registration Requirements for Importers</h2>
              <p className={styles.sectionText}>
                Before applying for LMPC Registration, importers must meet the following eligibility
                requirements under the Legal Metrology Act and Packaged Commodities Rules.
              </p>
              <h3 className={styles.subsectionTitle}>Business Registration Requirements</h3>
              <ul className={styles.bulletList}>
                <li>
                  Valid business registration in India — proprietorship, partnership, LLP, or private
                  limited company
                </li>
                <li>GST registration — mandatory for commercial importers</li>
                <li>Import Export Code (IEC) registered with DGFT — required for all importers</li>
                <li>
                  Permanent business address in India — the importer&apos;s address that will appear on
                  product packaging
                </li>
                <li>
                  Customer care contact details — phone number or email that consumers can use for
                  complaints or queries
                </li>
              </ul>
              <h3 className={styles.subsectionTitle}>Product &amp; Packaging Requirements</h3>
              <ul className={styles.bulletList}>
                <li>Ability to add mandatory declarations to product packaging before sale in India</li>
                <li>
                  Product packaging must carry MRP inclusive of all taxes — clearly visible and legible
                </li>
                <li>
                  Net quantity declaration in standard units of measurement as specified under Legal
                  Metrology rules
                </li>
                <li>Country of origin or manufacture clearly stated on packaging</li>
                <li>Month and year of import or manufacture as applicable for the product category</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Multiple Product Categories</h3>
              <p className={styles.sectionText}>
                Importers who import products across multiple categories may need separate LMPC
                Registrations for each category or a single registration covering all categories,
                depending on the applicable rules and jurisdiction. Our team advises on the most efficient
                registration structure for importers with diverse product portfolios.
              </p>
              <p className={styles.sectionText}>
                Already importing products but unsure whether your packaging is compliant? Our team offers
                a free packaging compliance review. Contact us before your next shipment arrives.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for LMPC Registration</h2>
              <p className={styles.sectionText}>
                The following documents are required for LMPC Registration under the Legal Metrology
                (Packaged Commodities) Rules. Requirements may vary slightly depending on the state and
                product category.
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
                Our team provides a precise, product-specific document checklist after reviewing your import
                details. For importers with complex product portfolios, we manage the documentation
                systematically to cover all categories in the most efficient way.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration Cost in India</h2>
              <p className={styles.sectionText}>
                LMPC Registration involves government fees and professional service fees. The overall cost
                is relatively modest compared to most product certifications — but getting it wrong can
                result in penalties that far exceed the registration cost.
              </p>
              <h3 className={styles.subsectionTitle}>Government Registration Fee</h3>
              <p className={styles.sectionText}>
                The Legal Metrology Department charges a government fee for LMPC Registration. The fee
                varies by state and product category. For central-level importer registration, fees typically
                range from INR 5,000 to INR 15,000 depending on the number of product categories covered.
              </p>
              <h3 className={styles.subsectionTitle}>Label / Sticker Design and Printing</h3>
              <p className={styles.sectionText}>
                For products whose existing packaging does not carry all mandatory Indian declarations,
                importers need to design and print compliant sticker labels or arrange for re-packaging.
                Label design and printing costs vary based on the product, quantity, and complexity of
                required declarations. Our team advises on the most cost-effective labelling solution for your
                product category.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a fixed professional fee for end-to-end LMPC Registration
                management — from packaging compliance review and document preparation to application filing,
                query resolution, and certificate delivery. We also advise on label design requirements to
                ensure your packaging is fully compliant before products enter Indian retail channels.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate for your specific product categories and import volume — contact
                our team for a free consultation. We provide a complete cost breakdown at no obligation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>LMPC Registration Validity and Renewal</h2>
              <p className={styles.sectionText}>
                LMPC Registration certificates are typically issued with a validity period of one to five
                years, depending on the issuing authority and product category. The exact validity is
                specified on the certificate at the time of issue.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <p className={styles.sectionText}>
                LMPC Registration renewal must be initiated before the existing certificate expires. The
                renewal process involves filing a renewal application with updated documents and paying the
                renewal fee. For importers who have expanded their product portfolio since the initial
                registration, the renewal is also an opportunity to add new product categories to the
                certificate.
              </p>
              <h3 className={styles.subsectionTitle}>Changes That Require Re-Registration or Amendment</h3>
              <p className={styles.sectionText}>
                Any change to the importer&apos;s business details — including a change of address, business
                name, or contact details — must be intimated to the Legal Metrology Department and may require
                an amendment to the existing certificate. Changes to the product range covered under the
                registration also require an update. Our team manages all amendments and keeps your LMPC
                Registration current at all times.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of LMPC Registration for Importers</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Penalties for Importing Without LMPC Registration
              </h2>
              <p className={styles.sectionText}>
                The Legal Metrology Act, 2009 prescribes specific penalties for violations of the Packaged
                Commodities Rules. Enforcement is conducted by Legal Metrology officers at both central and
                state levels, and market surveillance has become significantly more active in recent years.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Violation</th>
                    <th scope="col">Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  {PENALTIES_ROWS.map((row) => (
                    <tr key={row.violation}>
                      <th scope="row">{row.violation}</th>
                      <td>{row.penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Legal Metrology enforcement is conducted at state level, central level, and through
                e-commerce platform compliance audits. Importers who are found non-compliant in one state can
                face coordinated enforcement action across multiple states. LMPC Registration is one of the
                most affordable compliance steps an importer can take — and one of the highest-impact in terms
                of risk reduction.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Delhi-Based Importer Get LMPC Registered in 12 Days
              </h2>
              <p className={styles.sectionText}>
                A Delhi-based trading company that imported personal care products and small electronics from
                China and South Korea approached Ornate Quality Services after receiving a notice from Amazon
                India. Several of their product listings had been flagged for missing LMPC Registration details
                and non-compliant packaging declarations. Amazon had given them a 15-day window to resolve the
                compliance issue or face listing suspension.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The importer had been selling on Amazon India for over two years without LMPC Registration —
                unaware that it was required for their product categories. Their existing product packaging
                carried the original Chinese and Korean text without any Indian regulatory declarations. The
                15-day timeline from Amazon made the situation urgent, and the importer had products in stock
                that needed to be sold.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted an immediate packaging compliance review across their entire product range —
                covering 14 SKUs across personal care and electronics categories. We identified all mandatory
                declarations required for each category, designed compliant bilingual sticker labels that could
                be applied to existing packaging stock, and filed the LMPC Registration application on an
                expedited basis. We also prepared documentation for Amazon&apos;s compliance team and coordinated
                with their seller account manager to demonstrate that registration was in progress.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                LMPC Registration was obtained in 12 business days. Compliant sticker labels were designed and
                approved simultaneously. Amazon reinstated all flagged listings before the suspension deadline.
                The importer now runs all new product imports through our compliance screening process before
                listing — ensuring no future compliance issues arise with either Amazon or Legal Metrology
                enforcement.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — LMPC Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for LMPC Registration</h2>
              <p className={styles.ctaText}>
                Need help with LMPC Registration, packaging compliance review, documentation, or NSWS
                filing? Connect with Ornate Quality Services for complete support and professional guidance for
                your import compliance in India.
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
                          link.href === LMPC_PAGE_PATH ? styles.servicesLinkActive : ""
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
