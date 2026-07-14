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
  IEC_TOC,
  WHO_NEEDS_ROWS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/iecContent";

const IEC_PAGE_PATH = "/services/iec-registration";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="iec"
      defaultService="IEC Registration"
      serviceOptions={[
        "IEC Registration",
        "LMPC Registration",
        "BIS CRS Registration",
        "EPR Registration",
        "Other",
      ]}
      successText="Our IEC registration expert will contact you within one business day."
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

export function IecPageContent() {
  const [activeId, setActiveId] = useState(IEC_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = IEC_TOC.map((item) => item.id);
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
              {IEC_TOC.map((item, i) => (
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
                IEC Registration in India — Complete Guide to Getting Your Import Export Code
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you want to import or export goods from India — whether you are a manufacturer
                    looking to sell overseas, a trader sourcing products internationally, or a startup
                    entering the global market — the Import Export Code, commonly known as IEC, is the
                    first compliance step you need to take.
                  </p>
                  <p className={styles.sectionText}>
                    IEC is a 10-digit unique identification code issued by the Directorate General of
                    Foreign Trade (DGFT) under the Ministry of Commerce and Industry. It is mandatory for
                    any individual or business entity engaged in the import or export of goods and services
                    from India. Without a valid IEC, customs will not clear your shipment — either incoming
                    or outgoing.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we have been helping importers, exporters, manufacturers,
                    and traders obtain their IEC registration quickly and correctly since 2013. In this
                    guide, we cover everything you need to know — what IEC is, who needs it, how to get it,
                    what it costs, and how to keep it updated.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="IEC registration and DGFT import export code support"
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
                    Ready to start importing or exporting? Contact our team for a free IEC consultation and
                    get your code within days.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-iec" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is Import Export Code (IEC) Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    Import Export Code (IEC) is a mandatory 10-digit business identification number issued by
                    DGFT — the Directorate General of Foreign Trade — to any individual or business entity that
                    wants to import goods into India or export goods from India. The code is linked to your PAN
                    and serves as your identity in all international trade transactions.
                  </p>
                  <p className={styles.sectionText}>
                    IEC is issued under the Foreign Trade (Development and Regulation) Act, 1992, and is
                    governed by the Foreign Trade Policy of India. Every importer and exporter must quote
                    their IEC in all customs documentation, bank remittances for international payments, and
                    DGFT filings related to foreign trade.
                  </p>
                  <p className={styles.sectionText}>
                    The IEC is a lifetime registration — once issued, it does not expire as long as it is kept
                    updated annually on the DGFT portal. It is required for customs clearance, opening a foreign
                    currency account, receiving foreign remittances for export proceeds, and accessing various
                    government export incentive schemes.
                  </p>
                  <p className={styles.sectionText}>
                    Importantly, IEC is required for the import of goods even if the importer does not intend to
                    sell those goods commercially — including products imported for personal use in commercial
                    quantities or for product certification purposes such as BIS testing.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>IE</span>
                  <span className={styles.whatIsLabel}>DGFT IMPORT EXPORT CODE</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why IEC Registration Is Essential for Your Business</h2>
              <p className={styles.sectionText}>
                IEC is not just a compliance formality — it is the foundational legal identity for any business
                engaged in international trade in India. Here is why getting your IEC right matters.
              </p>
              <h3 className={styles.subsectionTitle}>Mandatory for All Import and Export Activity</h3>
              <p className={styles.sectionText}>
                The Foreign Trade Policy of India makes IEC mandatory for every entity engaged in the import or
                export of goods. Customs authorities require a valid IEC for clearance of all commercial
                shipments. Without IEC, your goods will be held at customs and cannot be cleared for entry into
                or exit from India.
              </p>
              <h3 className={styles.subsectionTitle}>Required for All Downstream Compliance</h3>
              <p className={styles.sectionText}>
                IEC is a prerequisite for virtually every other import-related compliance registration in India.
                LMPC Registration requires IEC. EPR Registration for importers requires IEC. GeM seller
                registration for importers requires IEC. WPC ETA applications for importers require IEC. Getting
                your IEC sorted first saves time and avoids delays down the line.
              </p>
              <h3 className={styles.subsectionTitle}>Access to Export Incentive Schemes</h3>
              <p className={styles.sectionText}>
                The Government of India offers export incentive schemes — including RoDTEP, MEIS successor
                schemes, and duty drawback benefits. All of these require a valid IEC as the foundational
                registration. Exporters without IEC cannot access any government export incentives.
              </p>
              <h3 className={styles.subsectionTitle}>Foreign Currency Transactions and Bank Remittances</h3>
              <p className={styles.sectionText}>
                Banks in India require a valid IEC for processing foreign currency transactions related to
                international trade — including advance payments for imports, export proceeds, and trade finance
                facilities. Without IEC, your bank cannot process international trade remittances.
              </p>
              <h3 className={styles.subsectionTitle}>Business Credibility with International Partners</h3>
              <p className={styles.sectionText}>
                For international buyers, suppliers, and business partners, IEC registration is a basic signal
                that your business is legally authorised to engage in international trade in India. Providing your
                IEC number in trade correspondence and contracts demonstrates regulatory compliance and builds
                confidence with foreign counterparts.
              </p>
            </section>

            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs IEC Registration in India?</h2>
              <p className={styles.sectionText}>
                IEC is required for a wide range of business activities involving cross-border trade. The
                following table provides a clear breakdown of who needs IEC registration and for what purpose.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Business Type</th>
                    <th scope="col">Activity</th>
                    <th scope="col">IEC Required?</th>
                  </tr>
                </thead>
                <tbody>
                  {WHO_NEEDS_ROWS.map((row) => (
                    <tr key={row.businessType}>
                      <th scope="row">{row.businessType}</th>
                      <td>{row.activity}</td>
                      <td>{row.required}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                There are limited exemptions from IEC — including imports and exports by the Central Government,
                certain categories of personal baggage, and imports for personal use not exceeding prescribed
                limits. For any commercial import or export activity, IEC is mandatory without exception.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>IEC Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                IEC registration is processed entirely online through the DGFT portal. Here is a complete
                breakdown of every step and how Ornate Quality Services manages the process for you.
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
              <h2 className={styles.sectionTitle}>IEC Registration Eligibility and Requirements</h2>
              <p className={styles.sectionText}>
                IEC can be obtained by any Indian individual or business entity engaged in import or export
                activity. The following eligibility requirements apply.
              </p>
              <h3 className={styles.subsectionTitle}>For Sole Proprietors and Individuals</h3>
              <ul className={styles.bulletList}>
                <li>Valid individual PAN card</li>
                <li>Aadhaar card linked to the applicant&apos;s mobile number — for OTP-based authentication</li>
                <li>Active bank account in the applicant&apos;s name — savings or current account</li>
                <li>Address proof — Aadhaar, passport, voter ID, or utility bill</li>
                <li>Passport-size photograph of the applicant</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Private Limited Companies, LLPs, and Partnerships</h3>
              <ul className={styles.bulletList}>
                <li>Company PAN card</li>
                <li>Certificate of Incorporation or LLP Agreement or Partnership Deed</li>
                <li>Registered office address proof — rental agreement or utility bill</li>
                <li>Active current account in the company name</li>
                <li>Digital Signature Certificate (DSC) of the authorised signatory</li>
                <li>Board Resolution or authorisation letter for the applicant signatory</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Trusts, Societies, and Other Entities</h3>
              <p className={styles.sectionText}>
                Trusts, registered societies, government undertakings, and other entities can also obtain IEC
                with appropriate registration documents and governing body resolutions. Our team advises on the
                specific requirements for non-standard entity types.
              </p>
              <p className={styles.sectionText}>
                Not sure which documents apply to your business type? Our team provides a precise document
                checklist after a quick initial review. Contact us before you begin gathering documents.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for IEC Registration</h2>
              <p className={styles.sectionText}>
                The following documents are required for IEC registration on the DGFT portal. Requirements vary
                by entity type.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Document</th>
                    <th scope="col">Proprietor / Individual</th>
                    <th scope="col">Company / LLP</th>
                  </tr>
                </thead>
                <tbody>
                  {DOCUMENTS_ROWS.map((row) => (
                    <tr key={row.no}>
                      <td>{row.no}</td>
                      <th scope="row">{row.document}</th>
                      <td>{row.proprietor}</td>
                      <td>{row.company}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                All documents must be in the same name and address as the PAN and bank account. Discrepancies
                between documents are the most common cause of IEC application rejection. Our team verifies all
                documents for consistency before filing.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>IEC Registration Cost in India</h2>
              <p className={styles.sectionText}>
                IEC registration is one of the most affordable regulatory registrations in India. Here is a
                complete breakdown of the costs involved.
              </p>
              <h3 className={styles.subsectionTitle}>DGFT Government Fee</h3>
              <p className={styles.sectionText}>
                The government fee for IEC registration is INR 500 — paid online at the time of application
                filing on the DGFT portal. This is a one-time fee. There is no annual renewal fee for IEC — only
                the free annual update on the DGFT portal is required each year.
              </p>
              <h3 className={styles.subsectionTitle}>Digital Signature Certificate (DSC) — If Required</h3>
              <p className={styles.sectionText}>
                Companies and LLPs applying for IEC need a valid Digital Signature Certificate for the
                authorised signatory. DSC costs typically range from INR 1,000 to INR 2,500 depending on the class
                and validity period required.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a professional fee for end-to-end IEC registration management —
                from document review and DGFT portal filing to certificate delivery and annual update management.
                Our fees are transparent, fixed, and significantly lower than the cost of dealing with portal
                rejections.
              </p>
              <p className={styles.sectionText}>
                IEC registration is one of the most affordable compliance steps your business will ever take —
                and one of the most impactful. Contact us for a free consultation and we will get it done for you
                quickly.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>IEC Validity and Annual Update Requirements</h2>
              <p className={styles.sectionText}>
                IEC is a lifetime registration — it does not expire as long as it is updated annually on the DGFT
                portal. This makes IEC fundamentally different from most other business registrations, which
                require periodic renewal with fees.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Update — April to June Every Year</h3>
              <p className={styles.sectionText}>
                DGFT requires all IEC holders to log in to the DGFT portal and confirm or update their IEC profile
                details every financial year between April 1 and June 30. IECs that are not updated within this
                window are marked as inactive by DGFT. An inactive IEC cannot be used for customs clearance, bank
                remittances, or any other trade purpose until it is reactivated.
              </p>
              <h3 className={styles.subsectionTitle}>Updating IEC Details After Changes</h3>
              <p className={styles.sectionText}>
                Any change to the IEC holder&apos;s business details — including address, bank account, mobile
                number, or entity name — must be updated on the DGFT portal. Changes must be made promptly to
                avoid discrepancies with customs documentation and bank records.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of IEC Registration</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Consequences of Importing or Exporting Without IEC
              </h2>
              <p className={styles.sectionText}>
                Attempting to import or export goods without a valid IEC is a violation of the Foreign Trade
                (Development and Regulation) Act. The consequences are immediate and operational — not just
                financial.
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
                The most common consequence of IEC non-compliance is operational — a shipment held at customs at
                the worst possible time. The cost of customs storage, demurrage, and delayed delivery almost
                always exceeds the cost of getting IEC registered in advance. Our team ensures your IEC is in
                place before your first shipment, and stays active and updated throughout your business lifecycle.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a First-Time Importer Get IEC and Start Operations in 3 Days
              </h2>
              <p className={styles.sectionText}>
                A young entrepreneur from Bengaluru was setting up an import business for consumer electronics
                accessories — primarily wireless earbuds and phone cases sourced from suppliers in China and
                Vietnam. She had placed her first order and confirmed a shipment date with her supplier before
                realising that she did not have an IEC and that her shipment could not be cleared at customs
                without one.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                With the shipment already in transit and an estimated arrival date at the Nhava Sheva port in 12
                days, she needed her IEC urgently. She had attempted self-registration on the DGFT portal but the
                application was rejected because the address on her PAN did not match the address on her GST
                certificate.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team immediately identified the PAN-GST address discrepancy and guided her through the GST
                address correction process — processed within 2 working days. Once the addresses were consistent,
                we prepared her complete IEC application documentation, filed it on the DGFT portal, and managed
                Aadhaar OTP authentication.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                The IEC was issued within 48 hours of application filing — 9 days before her shipment arrived at the
                port. She was also advised to begin LMPC Registration for her product range in parallel, which
                Ornate completed before her second shipment arrived. She now runs a fully compliant import operation.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — IEC Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for IEC Registration</h2>
              <p className={styles.ctaText}>
                Need help with IEC registration, DGFT portal filing, or annual IEC updates? Connect with Ornate
                Quality Services for complete support and professional guidance for your import-export business.
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
                          link.href === IEC_PAGE_PATH ? styles.servicesLinkActive : ""
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
