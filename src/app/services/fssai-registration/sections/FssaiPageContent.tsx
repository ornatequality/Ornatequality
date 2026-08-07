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
  FSSAI_TOC,
  LICENCE_TYPES_ROWS,
  PROCESS_STEPS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/fssaiContent";

const FSSAI_PAGE_PATH = "/services/fssai-registration";


function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="fssai"
      defaultService="FSSAI Registration"
      serviceOptions={[
        "FSSAI Registration",
        "BIS CRS Registration",
        "LMPC Registration",
        "IEC Registration",
        "Other",
      ]}
      successText="Our FSSAI registration expert will contact you within one business day."
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

export function FssaiPageContent() {
  const [activeId, setActiveId] = useState(FSSAI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = FSSAI_TOC.map((item) => item.id);
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
              {FSSAI_TOC.map((item, i) => (
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
                FSSAI Registration in India — Complete Guide for Food Businesses, Manufacturers &amp; Importers
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If your business involves food — manufacturing it, processing it, storing it, distributing it,
                    importing it, or selling it — FSSAI Registration is not optional. It is the foundational compliance
                    requirement for every food business in India, and operating without it exposes you to serious legal
                    and financial consequences.
                  </p>
                  <p className={styles.sectionText}>
                    FSSAI stands for Food Safety and Standards Authority of India — the regulatory body established
                    under the Food Safety and Standards Act, 2006, to set standards for food products and regulate their
                    manufacture, storage, distribution, sale, and import. Every food business operator (FBO) in India must
                    obtain a valid FSSAI licence or registration before commencing operations.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help food manufacturers, importers, exporters, traders, and food service
                    businesses obtain their FSSAI Registration or Licence quickly and correctly. In this guide, we cover
                    everything you need to know — what FSSAI registration is, which type applies to you, how the process
                    works, what it costs, and what happens if you operate without it.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="FSSAI registration and food business compliance support"
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
                    Running a food business or planning to start one? Contact our team for a free FSSAI consultation
                    and we will identify the right licence type for your business.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-fssai" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is FSSAI Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    FSSAI Registration — or FSSAI Licence — is the mandatory authorisation issued by the Food Safety and
                    Standards Authority of India to food business operators. It confirms that the FBO has been registered
                    with or licensed by FSSAI and is authorised to carry out food-related business activities in India.
                  </p>
                  <p className={styles.sectionText}>
                    The FSSAI licence number — a 14-digit unique identification number — must be printed on all food product
                    labels, packaging, menus, and other business documents. The first two digits identify the licence type:
                    1 for Basic Registration, 2 for State Licence, and 3 for Central Licence.
                  </p>
                  <p className={styles.sectionText}>
                    FSSAI operates three levels — Basic Registration for small businesses, State Licence for medium-sized
                    businesses, and Central Licence for large manufacturers, importers, and businesses operating across
                    multiple states. The appropriate level depends on annual turnover, food activity type, and scale of operations.
                  </p>
                  <p className={styles.sectionText}>
                    FSSAI Registration is issued under the Food Safety and Standards (Licensing and Registration of Food
                    Businesses) Regulations, 2011, and is renewable annually or every 1 to 5 years depending on licence type
                    and state jurisdiction.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>FS</span>
                  <span className={styles.whatIsLabel}>FOOD SAFETY LICENCE</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why FSSAI Registration Is Essential for Your Food Business</h2>
              <p className={styles.sectionText}>
                FSSAI Registration is not just a compliance formality — it is the legal foundation of every food business in India.
              </p>
              <h3 className={styles.subsectionTitle}>It Is Legally Mandatory for All Food Business Operators</h3>
              <p className={styles.sectionText}>
                The Food Safety and Standards Act, 2006 makes FSSAI registration or licensing compulsory for every food business
                operator in India — regardless of scale, food type, or business structure. Operating without FSSAI registration is
                a criminal offence under the FSS Act.
              </p>
              <h3 className={styles.subsectionTitle}>E-Commerce Food Sales Require It</h3>
              <p className={styles.sectionText}>
                Swiggy, Zomato, Amazon Fresh, BigBasket, and every other food delivery and e-commerce platform require a valid
                FSSAI licence number before a food business can list products or services. Without FSSAI registration, your
                business cannot operate through organised online food channels in India.
              </p>
              <h3 className={styles.subsectionTitle}>Retail and Distribution Require It</h3>
              <p className={styles.sectionText}>
                Organised retail chains, supermarkets, wholesalers, and institutional buyers require FSSAI registration
                documents before onboarding food suppliers. Your FSSAI number must appear on product labels — and buyers check it.
              </p>
              <h3 className={styles.subsectionTitle}>Protects Consumers and Builds Brand Trust</h3>
              <p className={styles.sectionText}>
                The FSSAI logo on food packaging tells consumers that the product has been produced by a registered food business
                subject to FSSAI quality and safety standards — building confidence in packaged food markets.
              </p>
              <h3 className={styles.subsectionTitle}>Required for Food Export</h3>
              <p className={styles.sectionText}>
                Indian food exporters must hold a valid FSSAI Central Licence. Export consignments are checked by customs and the
                Export Inspection Council (EIC) for FSSAI compliance. Without a valid Central Licence, food export shipments cannot be cleared.
              </p>
            </section>

            <section id="licence-types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Types of FSSAI Registration — Which One Do You Need?</h2>
              <p className={styles.sectionText}>
                FSSAI operates three levels of registration and licensing. Identifying the correct type for your business is the
                most important first step in the FSSAI registration process.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Basic Registration</th>
                    <th scope="col">State Licence</th>
                    <th scope="col">Central Licence</th>
                  </tr>
                </thead>
                <tbody>
                  {LICENCE_TYPES_ROWS.map((row) => (
                    <tr key={row.factor}>
                      <th scope="row">{row.factor}</th>
                      <td>{row.basic}</td>
                      <td>{row.state}</td>
                      <td>{row.central}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Importers of food products into India always require a Central Licence — regardless of turnover. This is one of
                the most common misunderstandings among food importers who apply for a State Licence and then find import shipments
                blocked at customs. Our team confirms the correct licence type during your free consultation.
              </p>
              <p className={styles.sectionText}>
                Not sure which FSSAI licence type applies to you? Our team assesses your business and confirms the correct
                registration category before we file anything.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>FSSAI Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The FSSAI registration and licensing process is managed through FSSAI&apos;s online portal — FoSCoS (Food Safety
                Compliance System). The process varies slightly depending on whether you are applying for Basic Registration,
                State Licence, or Central Licence.
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
              <h2 className={styles.sectionTitle}>FSSAI Registration Requirements for Food Businesses</h2>
              <p className={styles.sectionText}>
                The eligibility and infrastructure requirements for FSSAI registration vary by licence type.
              </p>
              <h3 className={styles.subsectionTitle}>For Basic Registration</h3>
              <ul className={styles.bulletList}>
                <li>Valid identity and address proof of the food business operator</li>
                <li>Address proof of the food business premises</li>
                <li>Annual turnover below INR 12 lakh</li>
                <li>Business registration — GST, Shop Act, or equivalent</li>
                <li>List of food products to be manufactured, stored, or sold</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For State Licence</h3>
              <ul className={styles.bulletList}>
                <li>All Basic Registration requirements plus annual turnover between INR 12 lakh and INR 20 crore</li>
                <li>Layout plan of the food processing or storage premises</li>
                <li>List of equipment and machinery used in food processing</li>
                <li>Food safety management system documentation</li>
                <li>Source of water supply confirmation for food processing units</li>
                <li>NOC from municipality or local body (for new premises)</li>
              </ul>
              <h3 className={styles.subsectionTitle}>For Central Licence</h3>
              <ul className={styles.bulletList}>
                <li>All State Licence requirements plus annual turnover above INR 20 crore, or importer / exporter status</li>
                <li>Import Export Code (IEC) for importers and exporters</li>
                <li>Detailed product list with applicable FSSAI food safety standards</li>
                <li>Certificate of incorporation for companies</li>
                <li>Food safety management plan covering HACCP or equivalent</li>
              </ul>
              <p className={styles.sectionText}>
                For food importers specifically, a Central Licence is mandatory regardless of turnover. The Central Licence
                for importers must be linked to the IEC and covers all food products imported through Indian ports.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for FSSAI Registration</h2>
              <p className={styles.sectionText}>
                The following documents are required for FSSAI registration and licensing. Requirements vary by licence type —
                documents marked in details as State &amp; Central Licence are required for those licence types only.
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
                Our team provides a precise, licence-type-specific document checklist after reviewing your business details.
                For food manufacturers and importers with complex product portfolios, we manage all documentation systematically.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>FSSAI Registration Cost in India</h2>
              <p className={styles.sectionText}>
                FSSAI registration fees are set by FSSAI and vary by licence type, validity period, and state.
              </p>
              <h3 className={styles.subsectionTitle}>Government Fee — Basic Registration</h3>
              <p className={styles.sectionText}>
                The government fee for FSSAI Basic Registration is INR 100 per year. For a 5-year registration, the fee is INR 500.
                Basic Registration is the most affordable food business compliance step in India.
              </p>
              <h3 className={styles.subsectionTitle}>Government Fee — State Licence</h3>
              <p className={styles.sectionText}>
                State Licence fees vary by state and by the type and scale of food business activity. Fees typically range from
                INR 2,000 to INR 5,000 per year depending on the state and category. A 5-year licence reduces the per-year cost significantly.
              </p>
              <h3 className={styles.subsectionTitle}>Government Fee — Central Licence</h3>
              <p className={styles.sectionText}>
                Central Licence fees are INR 7,500 per year for most food business categories, including food importers. Fees for
                food manufacturers with high production capacity may be higher based on FSSAI&apos;s fee schedule.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a professional fee for end-to-end FSSAI registration management — from licence type
                determination and document preparation to portal filing, inspection support, label compliance review, and annual
                return management. All fees are quoted transparently before we begin.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate including government fees and professional service fees for your specific food business —
                contact our team for a free consultation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>FSSAI Registration Validity and Renewal</h2>
              <p className={styles.sectionText}>
                FSSAI licences and registrations are issued for a period of 1 to 5 years, at the applicant&apos;s choice. A 5-year
                licence or registration is generally more cost-effective and reduces the administrative burden of frequent renewals.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <p className={styles.sectionText}>
                FSSAI licence renewal must be applied for at least 30 days before the expiry date on the FoSCoS portal. Renewal
                applications filed late are subject to a penalty. Licences that lapse without renewal require a fresh application.
                Our team sends renewal reminders 60 days before expiry and manages the complete renewal process.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Return Filing</h3>
              <p className={styles.sectionText}>
                All FSSAI-licensed businesses (State and Central Licence holders) must file an Annual Return on the FoSCoS portal
                before 31st May each year. Failure to file the annual return attracts penalties under the FSS Act.
              </p>
              <h3 className={styles.subsectionTitle}>Change of Details</h3>
              <p className={styles.sectionText}>
                Any change in the food business — including change of address, addition of new food products, change of business name,
                or addition of new premises — must be intimated to FSSAI through a modification application on the FoSCoS portal.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of FSSAI Registration for Your Food Business</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Operating Without FSSAI Registration</h2>
              <p className={styles.sectionText}>
                The Food Safety and Standards Act, 2006 prescribes stringent penalties for food businesses operating without FSSAI
                registration or licence. Enforcement is conducted by Food Safety Officers at both state and central level.
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
                FSSAI enforcement has strengthened significantly in recent years. Food Safety Officers conduct surprise inspections,
                and e-commerce platforms are increasingly required to verify FSSAI compliance of their food seller partners.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Mumbai Food Importer Get FSSAI Central Licence in 3 Weeks
              </h2>
              <p className={styles.sectionText}>
                A Mumbai-based company that imported packaged food products — including health supplements, snack foods, and packaged
                beverages from the USA and Europe — approached Ornate Quality Services after their shipment of imported health supplements
                was held at Mumbai port by customs for missing FSSAI compliance documentation.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The company had been operating with a State Licence obtained when they were a smaller operation and had expanded into
                importing without realising that food importers require a Central Licence regardless of turnover. Their State Licence was
                not accepted at customs, the shipment was held, and storage charges were accumulating daily.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team immediately confirmed that a FSSAI Central Licence was required. We prepared the complete Central Licence
                application — including IEC, full product list with applicable FSSAI standards, food safety management plan, and all required
                business documents — and filed it on an expedited basis on the FoSCoS portal. We also prepared a letter of explanation for
                customs demonstrating that a Central Licence application was actively in progress.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                The FSSAI Central Licence was granted in 3 weeks. The customs hold was resolved, and the shipment was cleared. The company
                now operates with a valid Central Licence covering all import categories and verifies every new product category before
                the first shipment departs from the origin country.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — FSSAI Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for FSSAI Registration</h2>
              <p className={styles.ctaText}>
                Need help with FSSAI licence type selection, FoSCoS filing, inspection preparation, label compliance, or annual returns?
                Connect with Ornate Quality Services for complete support.
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
                          link.href === FSSAI_PAGE_PATH ? styles.servicesLinkActive : ""
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
