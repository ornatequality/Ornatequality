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
  CE_TOC,
  PRODUCTS_COVERED_ROWS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/ceContent";

const CE_PAGE_PATH = "/services/ce-certification";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="ce"
      defaultService="CE Certification"
      serviceOptions={[
        "CE Certification",
        "WPC-ETA Approval",
        "TEC Certification",
        "BIS CRS Registration",
        "BEE Certification",
        "Other",
      ]}
      successText="Our CE certification expert will contact you within one business day."
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

export function CePageContent() {
  const [activeId, setActiveId] = useState(CE_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = CE_TOC.map((item) => item.id);
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
              {CE_TOC.map((item, i) => (
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
                CE Certification for Indian Manufacturers — Complete Guide to Exporting Products to Europe
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you are an Indian manufacturer looking to sell your products in Europe, CE Marking
                    is not optional — it is the law. The CE Mark is a mandatory conformity marking for
                    products sold in the European Economic Area (EEA), and it tells regulators, buyers,
                    and consumers that your product meets all applicable European health, safety, and
                    environmental requirements.
                  </p>
                  <p className={styles.sectionText}>
                    CE stands for Conformité Européenne — French for European Conformity. The marking is
                    not a quality endorsement or a product standard in itself. It is a manufacturer's
                    declaration that the product complies with all relevant EU Directives and
                    Regulations for its category. Without the CE Mark, your product cannot legally
                    enter or be sold in any of the 30 EEA member countries.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help Indian manufacturers obtain CE Certification for
                    a wide range of product categories — from electronics and electrical equipment to
                    machinery, medical devices, toys, and personal protective equipment. This guide
                    explains everything you need to know about CE Marking — what it is, which products
                    need it, how the process works, and what it costs.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="CE certification support for European exports"
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
                    Planning to export to Europe? Contact our team for a free CE Marking consultation
                    and get a clear roadmap for your product&apos;s European market entry.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-ce" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is CE Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    CE Marking is a mandatory conformity assessment marking required for products sold
                    within the European Economic Area (EEA) — which includes all 27 EU member states plus
                    Iceland, Liechtenstein, and Norway. The CE Mark signifies that a product has been
                    assessed against all applicable EU Directives or Regulations and found to comply with
                    their essential health, safety, and environmental protection requirements.
                  </p>
                  <p className={styles.sectionText}>
                    For Indian manufacturers, CE Certification is the process of demonstrating that a
                    product meets all applicable European requirements — through technical documentation,
                    testing, conformity assessment, and in some cases, independent third-party
                    verification by a Notified Body.
                  </p>
                  <p className={styles.sectionText}>
                    The CE Mark is not a single certificate from a single body — it is a self-declaration
                    of conformity backed by technical evidence. The manufacturer (or their Authorised
                    Representative in the EU) is responsible for preparing a Technical File, issuing a
                    Declaration of Conformity, and affixing the CE Mark.
                  </p>
                  <p className={styles.sectionText}>
                    Some high-risk categories require third-party assessment by a Notified Body. Others
                    allow self-certification provided all requirements are met. Our team will confirm the
                    correct conformity assessment route for your product.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>CE</span>
                  <span className={styles.whatIsLabel}>EU CONFORMITY</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why CE Certification Matters for Indian Exporters</h2>
              <h3 className={styles.subsectionTitle}>Mandatory for European Market Entry</h3>
              <p className={styles.sectionText}>
                CE Marking is a legal requirement for products in notified categories sold in the EEA.
                Products without the CE Mark are illegal to sell, distribute, or even display for sale.
                Enforcement by customs and market surveillance is active, and non-compliance can lead to
                import refusals, recalls, and liability.
              </p>
              <h3 className={styles.subsectionTitle}>Access to 30 European Countries with One Marking</h3>
              <p className={styles.sectionText}>
                One CE-marked product can be legally sold across all 30 EEA member countries — giving
                Indian manufacturers access to a combined market of 450+ million consumers.
              </p>
              <h3 className={styles.subsectionTitle}>Required by European Importers and Distributors</h3>
              <p className={styles.sectionText}>
                European importers and distributors will not onboard products without CE compliance
                documentation. Importers are also legally co-responsible for CE compliance.
              </p>
              <h3 className={styles.subsectionTitle}>E-Commerce Export Compliance</h3>
              <p className={styles.sectionText}>
                Platforms like Amazon EU and other marketplaces require CE compliance documentation where
                applicable. Non-compliance leads to delisting and potential account actions.
              </p>
              <h3 className={styles.subsectionTitle}>Builds Long-Term Brand Credibility in Europe</h3>
              <p className={styles.sectionText}>
                European buyers associate CE marking with safety and regulatory compliance. Proper CE
                conformity assessment strengthens long-term trust and partnerships.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Which Products Require CE Marking?</h2>
              <p className={styles.sectionText}>
                CE Marking applies to products covered under one or more EU Directives or Regulations.
                Many products fall under multiple Directives simultaneously; our team maps all applicable
                requirements for your product.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Products</th>
                    <th scope="col">Applicable EU Directive / Regulation</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.directive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>CE Marking Certification Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The CE Marking process is a structured conformity assessment covering directives, standards,
                testing, documentation, and (where required) Notified Body involvement.
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
              <h2 className={styles.sectionTitle}>CE Marking Requirements for Indian Manufacturers</h2>
              <h3 className={styles.subsectionTitle}>Product Compliance Requirements</h3>
              <ul className={styles.bulletList}>
                <li>Product must meet essential health, safety, and environmental requirements</li>
                <li>Product must be tested against relevant harmonised EN standards</li>
                <li>Technical File must be prepared and retained for at least 10 years</li>
                <li>Signed Declaration of Conformity must be issued and retained</li>
                <li>CE Mark must be affixed correctly to product and packaging</li>
              </ul>

              <h3 className={styles.subsectionTitle}>EU Authorised Representative Requirements</h3>
              <p className={styles.sectionText}>
                For many categories, manufacturers outside the EU may need to appoint an EU Authorised
                Representative (AR) established in the EEA. The AR is a point of contact for market
                surveillance authorities and can be co-responsible for compliance depending on the product
                category. We advise on AR requirements and selection.
              </p>

              <h3 className={styles.subsectionTitle}>Notified Body Requirements (High-Risk Products)</h3>
              <p className={styles.sectionText}>
                Certain high-risk categories require third-party assessment by a Notified Body. We confirm
                if NB involvement is mandatory and support the engagement and submission workflow.
              </p>
              <p className={styles.sectionText}>
                Not sure which Directives apply or whether you need a Notified Body? Contact us for a free
                feasibility assessment.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for CE Certification</h2>
              <p className={styles.sectionText}>
                The following documents form the core of the Technical File. Requirements vary by product
                category and applicable Directive.
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
              <h2 className={styles.sectionTitle}>CE Certification Cost for Indian Manufacturers</h2>
              <h3 className={styles.subsectionTitle}>Laboratory Testing Charges</h3>
              <p className={styles.sectionText}>
                Testing is often the biggest cost. For many consumer electronics products, accredited testing
                typically costs around EUR 1,500 to EUR 5,000 depending on standards and scope. Testing can
                be done at accredited labs in India if they hold relevant ISO 17025 scope.
              </p>
              <h3 className={styles.subsectionTitle}>Notified Body Fees</h3>
              <p className={styles.sectionText}>
                When Notified Body involvement is required, fees may range from EUR 2,000 to EUR 15,000 for
                initial certification, with annual surveillance costs thereafter.
              </p>
              <h3 className={styles.subsectionTitle}>Technical File Preparation</h3>
              <p className={styles.sectionText}>
                Technical File preparation requires expertise in Directives, EN standards, and risk assessment.
                Ornate provides fixed, transparent professional fees for end-to-end support.
              </p>
              <h3 className={styles.subsectionTitle}>EU Authorised Representative Fee</h3>
              <p className={styles.sectionText}>
                AR appointment typically involves annual fees (commonly EUR 500 to EUR 2,000 per year) depending
                on category and services required.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>CE Marking Validity and Ongoing Compliance</h2>
              <p className={styles.sectionText}>
                CE Marking does not have a fixed expiry date. It remains valid as long as the product continues
                to comply with applicable EU requirements and no significant changes are made.
              </p>
              <h3 className={styles.subsectionTitle}>When CE Compliance Must Be Re-evaluated</h3>
              <p className={styles.sectionText}>
                Re-evaluation is required when there are significant product changes or when Directives/standards
                are updated and transition periods expire. We monitor updates and advise on impact proactively.
              </p>
              <h3 className={styles.subsectionTitle}>Post-Brexit Considerations for UK Market</h3>
              <p className={styles.sectionText}>
                The UK generally requires UKCA marking. CE may still be accepted for some categories under transitional
                rules. We advise if you target EU + UK together.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of CE Certification for Indian Manufacturers</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Consequences of Selling Non-CE Marked Products in Europe</h2>
              <p className={styles.sectionText}>
                European market surveillance authorities enforce CE compliance actively. A compliance failure in one
                EU country can trigger action across multiple EEA markets.
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
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped an Indian LED Lighting Manufacturer Achieve CE Marking
              </h2>
              <p className={styles.sectionText}>
                A Gujarat-based LED lighting manufacturer lost a European distribution contract after failing to
                provide Technical File and accredited test reports. They had assumed that printing a CE mark on
                packaging was enough.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer had been affixing CE marking based on a supplier declaration, without a proper
                conformity assessment. The distributor suspended the contract due to missing compliance evidence.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                We performed a CE gap assessment, identified the applicable Directives (LVD, EMC, RoHS), coordinated
                accredited testing, prepared the Technical File and risk assessment, and drafted the Declaration of
                Conformity.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                CE compliance was achieved within 11 weeks. The distributor reinstated the contract, and the
                manufacturer now runs new product development through compliance screening before finalising specs.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — CE Certification</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for CE Certification</h2>
              <p className={styles.ctaText}>
                Need help with Directive identification, testing coordination, Technical File preparation, or CE
                marking? Connect with Ornate Quality Services for complete support.
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
                          link.href === CE_PAGE_PATH ? styles.servicesLinkActive : ""
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

