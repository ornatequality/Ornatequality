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
  ROHS_TOC,
  PRODUCTS_COVERED_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/rohsContent";

const ROHS_PAGE_PATH = "/services/rohs-certification";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="rohs"
      defaultService="RoHS Certification"
      serviceOptions={[
        "RoHS Certification",
      ]}
      successText="Our RoHS certification expert will contact you within one business day."
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

export function RohsPageContent() {
  const [activeId, setActiveId] = useState(ROHS_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = ROHS_TOC.map((item) => item.id);
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
              {ROHS_TOC.map((item, i) => (
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
                RoHS Certification in India — Complete Guide for Electronics Manufacturers Exporting
                to Europe and Global Markets
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you manufacture electronic or electrical equipment and want to sell it in Europe — or supply
                    components to manufacturers who do — RoHS Certification is a compliance requirement you cannot
                    overlook. The Restriction of Hazardous Substances Directive restricts the use of specific hazardous
                    materials in electrical and electronic equipment sold in the European Union and several other markets
                    worldwide.
                  </p>
                  <p className={styles.sectionText}>
                    RoHS compliance is not just a European requirement anymore. Countries across Asia, the Americas, and
                    the Middle East have adopted RoHS-equivalent regulations — making RoHS Certification a globally relevant
                    compliance standard for any Indian manufacturer of electronic products targeting international markets.
                    It is also increasingly required by global supply chains, multinational buyers, and corporate
                    procurement teams.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help Indian electronics manufacturers, component suppliers, and
                    importers achieve RoHS compliance and certification — from initial substance testing and documentation
                    to full compliance declaration management. In this guide, we cover everything you need to know about
                    RoHS Certification — what it is, which products it covers, how compliance is achieved, and what it
                    costs.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="RoHS certification and electronics compliance support"
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
                    Exporting electronics to Europe or supplying multinational buyers? Contact our team for a free RoHS
                    compliance consultation and find out where your products stand.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-rohs" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is RoHS Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    RoHS stands for Restriction of Hazardous Substances. The RoHS Directive — formally EU Directive
                    2011/65/EU (RoHS 2), amended by EU Directive 2015/863/EU (RoHS 3) — is a European Union regulation
                    that restricts the use of specific hazardous substances in electrical and electronic equipment (EEE)
                    sold in the EU market. It is closely linked to CE Marking requirements.
                  </p>
                  <p className={styles.sectionText}>
                    RoHS restricts ten hazardous substances — Lead (Pb), Mercury (Hg), Cadmium (Cd), Hexavalent Chromium
                    (Cr VI), Polybrominated Biphenyls (PBB), Polybrominated Diphenyl Ethers (PBDE), DEHP, BBP, DBP, and
                    DIBP — to maximum concentration values in homogeneous materials within products.
                  </p>
                  <p className={styles.sectionText}>
                    RoHS Certification — or RoHS compliance declaration — is the process by which a manufacturer tests
                    their products and materials, documents compliance, and issues a Declaration of Conformity confirming
                    that the product meets all RoHS requirements. Products that are RoHS compliant and CE marked can display
                    the CE mark on their packaging.
                  </p>
                  <p className={styles.sectionText}>
                    RoHS compliance is self-declared — there is no single RoHS certificate issued by a government body.
                    Manufacturers are responsible for testing their products, documenting compliance, and maintaining
                    technical files that demonstrate conformity with the RoHS Directive.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>EU</span>
                  <span className={styles.whatIsLabel}>HAZARDOUS SUBSTANCES</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why RoHS Certification Matters for Indian Electronics Manufacturers</h2>
              <p className={styles.sectionText}>
                RoHS compliance has evolved from a purely European regulatory requirement into a global baseline standard
                for responsible electronics manufacturing.
              </p>
              <h3 className={styles.subsectionTitle}>Mandatory for EU Market Entry</h3>
              <p className={styles.sectionText}>
                RoHS compliance is mandatory for all electrical and electronic equipment sold in the European Union.
                Products found non-compliant during EU market surveillance are subject to recall, market withdrawal, and
                significant financial penalties. RoHS compliance documentation is a non-negotiable prerequisite for Indian
                manufacturers targeting European distributors, retailers, or e-commerce platforms.
              </p>
              <h3 className={styles.subsectionTitle}>Required by Global Supply Chains</h3>
              <p className={styles.sectionText}>
                Multinational electronics companies require RoHS compliance from all component and sub-assembly suppliers.
                If you manufacture PCBs, electronic components, cables, connectors, or any other part that goes into finished
                electronics products, buyers&apos; procurement teams will ask for RoHS compliance certificates and test
                reports as a standard supplier qualification requirement.
              </p>
              <h3 className={styles.subsectionTitle}>Adopted by Multiple Countries Beyond the EU</h3>
              <p className={styles.sectionText}>
                RoHS-equivalent regulations have been adopted by China, the United Kingdom, South Korea, Japan, Turkey,
                India (E-Waste Rules reference RoHS-equivalent standards), and several other countries. EU RoHS compliance
                creates a baseline that supports market access in multiple countries simultaneously.
              </p>
              <h3 className={styles.subsectionTitle}>Environmental and ESG Commitment</h3>
              <p className={styles.sectionText}>
                RoHS compliance demonstrates a manufacturer&apos;s commitment to responsible environmental practices. As
                ESG reporting becomes standard for corporate buyers and investors, RoHS certification is increasingly cited
                as evidence of environmental responsibility in supply chain due diligence.
              </p>
              <h3 className={styles.subsectionTitle}>Competitive Advantage with International Buyers</h3>
              <p className={styles.sectionText}>
                Indian electronics manufacturers who hold RoHS compliance documentation stand out from competitors who
                cannot demonstrate substance compliance. In competitive tender situations, RoHS certification often makes
                the difference between winning and losing a supply contract with a multinational customer.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Which Products Require RoHS Certification?</h2>
              <p className={styles.sectionText}>
                RoHS applies to all electrical and electronic equipment (EEE) sold in covered markets. Under RoHS 3, the
                scope has been extended to cover virtually all categories of EEE.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Products</th>
                    <th scope="col">Key Restricted Substances Concern</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.concern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                RoHS 3 has significantly expanded the product scope — covering almost all categories of EEE with limited
                exemptions. If your product contains electrical components or circuits and is intended for sale in covered
                markets, RoHS compliance almost certainly applies. Our team will confirm RoHS applicability for your
                specific product during your free consultation.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>RoHS Compliance &amp; Certification Process — Step by Step</h2>
              <p className={styles.sectionText}>
                RoHS compliance is achieved through a structured process of substance identification, testing,
                documentation, and declaration. Unlike certifications involving a third-party certificate, RoHS compliance
                is self-declared — making the quality of the manufacturer&apos;s own compliance process the critical factor.
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
              <h2 className={styles.sectionTitle}>RoHS Compliance Requirements for Manufacturers</h2>
              <p className={styles.sectionText}>
                RoHS compliance requires manufacturers to meet the following requirements for all covered electrical and
                electronic equipment.
              </p>
              <h3 className={styles.subsectionTitle}>Restricted Substance Limits</h3>
              <p className={styles.sectionText}>
                The RoHS Directive specifies maximum concentration values for each restricted substance in homogeneous
                materials within the product:
              </p>
              <ul className={styles.bulletList}>
                <li>Lead (Pb) — maximum 0.1% by weight (1000 ppm)</li>
                <li>Mercury (Hg) — maximum 0.1% by weight (1000 ppm)</li>
                <li>Cadmium (Cd) — maximum 0.01% by weight (100 ppm)</li>
                <li>Hexavalent Chromium (Cr VI) — maximum 0.1% by weight (1000 ppm)</li>
                <li>Polybrominated Biphenyls (PBB) — maximum 0.1% by weight (1000 ppm)</li>
                <li>Polybrominated Diphenyl Ethers (PBDE) — maximum 0.1% by weight (1000 ppm)</li>
                <li>DEHP, BBP, DBP, DIBP (Phthalates) — each maximum 0.1% by weight (1000 ppm)</li>
              </ul>
              <h3 className={styles.subsectionTitle}>Documentation Requirements</h3>
              <ul className={styles.bulletList}>
                <li>Complete Bill of Materials with substance compliance data for all components</li>
                <li>Supplier Declarations of Conformity in standard format (IPC-1752A or IEC 62474)</li>
                <li>Laboratory test reports for components tested by physical analysis</li>
                <li>Technical file documenting the complete RoHS compliance assessment</li>
                <li>Declaration of Conformity signed by the manufacturer or authorised representative</li>
              </ul>
              <p className={styles.sectionText}>
                Not sure which components in your product require RoHS testing? Our team conducts a free preliminary BOM
                review and identifies testing priorities. Contact us to get started.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for RoHS Certification</h2>
              <p className={styles.sectionText}>
                The following documents form the core of the RoHS technical file. These must be maintained by the
                manufacturer and made available to market surveillance authorities upon request.
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
                Our team prepares and manages the complete RoHS technical documentation package — ensuring all documents
                meet the requirements of EU market surveillance authorities and are ready for inspection at any time.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>RoHS Certification Cost for Indian Manufacturers</h2>
              <p className={styles.sectionText}>
                RoHS compliance costs depend on the complexity of the product, the number of components requiring physical
                testing, and the state of the manufacturer&apos;s existing supply chain compliance data.
              </p>
              <h3 className={styles.subsectionTitle}>Laboratory Testing Charges</h3>
              <p className={styles.sectionText}>
                XRF screening is relatively affordable, typically costing INR 500 to INR 2,000 per sample. Confirmatory
                chemical analysis (ICP-OES or equivalent) is typically INR 3,000 to INR 10,000 per sample per substance
                group. For a product with 20 to 50 components requiring physical testing, total testing costs can range from
                INR 50,000 to INR 3,00,000.
              </p>
              <h3 className={styles.subsectionTitle}>Supplier Compliance Management</h3>
              <p className={styles.sectionText}>
                For manufacturers with complex supply chains, supplier compliance management — including supplier
                questionnaires, declaration review, and follow-up — is primarily a time and resource cost. Our team manages
                this process efficiently, reducing the internal resource burden.
              </p>
              <h3 className={styles.subsectionTitle}>Technical Documentation Preparation</h3>
              <p className={styles.sectionText}>
                Preparing a complete RoHS technical file requires regulatory expertise and significant time. Ornate Quality
                Services charges a professional fee for the complete RoHS compliance service, quoted based on product
                complexity and the number of components requiring assessment.
              </p>
              <h3 className={styles.subsectionTitle}>Ongoing Compliance Monitoring</h3>
              <p className={styles.sectionText}>
                Our team offers an annual RoHS compliance monitoring service — covering component change assessments,
                supplier declaration updates, and documentation maintenance — at a fixed annual retainer fee.
              </p>
              <p className={styles.sectionText}>
                For a precise RoHS certification cost estimate for your specific product and supply chain — contact our
                team for a free consultation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>RoHS Compliance Validity and Ongoing Maintenance</h2>
              <p className={styles.sectionText}>
                RoHS compliance does not have a fixed validity period like a product certification. The Declaration of
                Conformity remains valid as long as the product&apos;s composition — and all components and materials
                within it — remains unchanged and compliant with the current version of the RoHS Directive.
              </p>
              <h3 className={styles.subsectionTitle}>When RoHS Compliance Must Be Re-evaluated</h3>
              <p className={styles.sectionText}>
                RoHS compliance must be re-evaluated whenever a significant change is made to the product — including
                component substitution, new material sources, updated supplier formulations, or manufacturing process changes
                affecting material composition. Re-evaluation is also required when the RoHS Directive is amended.
              </p>
              <h3 className={styles.subsectionTitle}>RoHS Directive Updates</h3>
              <p className={styles.sectionText}>
                The European Commission periodically reviews the RoHS Directive — adding new restricted substances,
                updating exemptions, and expanding product scope. Our team monitors EU RoHS regulatory developments and
                proactively advises clients when changes may affect their existing compliance declarations.
              </p>
              <h3 className={styles.subsectionTitle}>Substance Exemption Renewals</h3>
              <p className={styles.sectionText}>
                Some RoHS exemptions have time-limited validity and must be renewed by the European Commission. When an
                exemption expires without renewal, manufacturers relying on that exemption must find alternative compliant
                solutions. Our team tracks exemption expiry dates relevant to our clients&apos; products.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of RoHS Certification for Indian Manufacturers</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Consequences of RoHS Non-Compliance in European Markets</h2>
              <p className={styles.sectionText}>
                RoHS enforcement in EU member states varies by country but has become significantly more active in recent
                years. The consequences of placing non-compliant products on the European market are serious.
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
                EU market surveillance authorities share compliance information across member states through the RAPEX rapid
                alert system. A RoHS non-compliance finding in one EU country is immediately communicated to all other member
                states — triggering enforcement action across all 27 EU markets and associated EEA countries simultaneously.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Pune Electronics Manufacturer Achieve RoHS Compliance for European Export
              </h2>
              <p className={styles.sectionText}>
                A Pune-based manufacturer of industrial power supplies and control panels approached Ornate Quality Services
                after losing a significant European OEM contract. The OEM&apos;s procurement team had requested RoHS compliance
                documentation as part of a routine supplier qualification audit, and the manufacturer had been unable to
                provide anything beyond a self-declaration without supporting test data or a complete technical file.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer had been producing power supplies for eight years without formal RoHS compliance
                documentation — using components from multiple Indian and Chinese suppliers who had provided basic compliance
                statements but no standardised material declarations or test data. The European OEM&apos;s compliance team
                found the supplier declarations insufficient to support a valid RoHS compliance assessment.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a complete BOM review of three main product lines — covering 340 unique components. We
                categorised components by RoHS risk level and identified 45 requiring physical XRF screening and 12 requiring
                confirmatory chemical analysis. We coordinated testing at a NABL-accredited laboratory, managed supplier
                declaration collection for all 340 components, and prepared the complete RoHS technical file. We also
                identified two non-compliant components and worked with the manufacturer to find compliant replacements.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                Full RoHS compliance was achieved for all three product lines within 14 weeks. The OEM contract was
                reinstated, and the manufacturer now has a documented RoHS compliance programme covering their complete
                product range. They have since expanded their European customer base — with RoHS documentation as a standard
                part of their supplier qualification package.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — RoHS Certification</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for RoHS Certification</h2>
              <p className={styles.ctaText}>
                Need help with BOM review, substance testing, supplier compliance management, technical documentation, or
                Declaration of Conformity? Connect with Ornate Quality Services for complete RoHS compliance support.
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
                          link.href === ROHS_PAGE_PATH ? styles.servicesLinkActive : ""
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
