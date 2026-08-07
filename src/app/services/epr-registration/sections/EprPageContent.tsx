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
  EPR_TOC,
  EPR_CATEGORY_ROWS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/eprContent";

const EPR_PAGE_PATH = "/services/epr-registration";


function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="epr"
      defaultService="EPR Registration"
      serviceOptions={[
        "EPR Registration",
        "BIS CRS Registration",
        "LMPC Registration",
        "BEE Certification",
        "Other",
      ]}
      successText="Our EPR compliance expert will contact you within one business day."
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

export function EprPageContent() {
  const [activeId, setActiveId] = useState(EPR_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = EPR_TOC.map((item) => item.id);
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
              {EPR_TOC.map((item, i) => (
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
                EPR Registration in India — Complete Guide for Producers, Importers &amp; Brand Owners
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you manufacture, import, or sell products in categories that generate
                    post-consumer waste — electronics, batteries, plastic packaging, tyres, or used oil
                    — EPR Registration is a mandatory compliance requirement that has become one of
                    India&apos;s most actively enforced environmental regulations.
                  </p>
                  <p className={styles.sectionText}>
                    EPR stands for Extended Producer Responsibility — a policy framework under which
                    producers, importers, and brand owners are held legally responsible for the
                    end-of-life management of the products and packaging they place in the market. In
                    India, EPR is implemented through the Central Pollution Control Board (CPCB) under
                    various environmental rules, and registration on the CPCB EPR portal is mandatory
                    for all entities covered under these rules.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we have been helping manufacturers, importers, and brand
                    owners obtain EPR Registration and manage their ongoing EPR compliance since the CPCB
                    portal was first introduced. In this guide, we explain exactly what EPR Registration
                    is, who needs it, how the process works, what it costs, and how to stay compliant year
                    after year.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="EPR registration and CPCB environmental compliance support"
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
                    Already placing products in the Indian market? Contact our team for a free EPR
                    compliance assessment and find out your registration obligations immediately.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-epr" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is EPR Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    Extended Producer Responsibility (EPR) is an environmental policy that makes
                    producers, importers, and brand owners responsible for the collection, recycling, and
                    safe disposal of the waste generated by their products at the end of their useful life.
                    The principle is straightforward — if you put a product or packaging into the market,
                    you are responsible for ensuring it does not end up in a landfill or cause environmental
                    harm.
                  </p>
                  <p className={styles.sectionText}>
                    In India, EPR is implemented through a set of rules framed under the Environment
                    (Protection) Act, 1986. The Central Pollution Control Board (CPCB) is the nodal
                    authority for EPR implementation at the national level, and registration on the CPCB EPR
                    portal is the first mandatory step for all covered entities.
                  </p>
                  <p className={styles.sectionText}>
                    EPR Registration in India currently covers four main categories — E-Waste (electronics
                    and electrical equipment), Batteries, Plastic Packaging, and Tyres — along with Used
                    Oil obligations under applicable rules. The CPCB portal allows registered entities to set
                    annual EPR targets, onboard certified recyclers and Producer Responsibility
                    Organisations (PROs), and submit annual compliance reports.
                  </p>
                  <p className={styles.sectionText}>
                    Non-registration and non-compliance with EPR obligations are treated as violations of
                    India&apos;s environmental laws — and penalties have been significantly strengthened in
                    recent years.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>EP</span>
                  <span className={styles.whatIsLabel}>CPCB EPR PORTAL</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why EPR Registration Is Essential for Your Business</h2>
              <p className={styles.sectionText}>
                EPR compliance has moved from a niche environmental concern to a mainstream business
                requirement in India. Here is why EPR Registration matters — not just for the environment,
                but for your business.
              </p>
              <h3 className={styles.subsectionTitle}>It Is Legally Mandatory Under Indian Environmental Law</h3>
              <p className={styles.sectionText}>
                EPR Registration is not voluntary. The E-Waste (Management) Rules, the Battery Waste
                Management Rules, the Plastic Waste Management Rules, and the Hazardous and Other Wastes
                Rules all require covered entities to register on the CPCB EPR portal and fulfil annual EPR
                targets. Failure to register or comply is a violation of the Environment (Protection) Act —
                with penalties that have become significantly more serious since 2022.
              </p>
              <h3 className={styles.subsectionTitle}>CPCB Enforcement Has Increased Significantly</h3>
              <p className={styles.sectionText}>
                The CPCB has substantially strengthened EPR enforcement since 2022. Entities found operating
                without EPR Registration or failing to meet annual targets are subject to Environmental
                Compensation — a financial penalty calculated on the basis of unmet EPR obligations. CPCB
                has issued notices to thousands of companies and has published lists of non-compliant
                entities.
              </p>
              <h3 className={styles.subsectionTitle}>E-Commerce Platforms Are Checking EPR Compliance</h3>
              <p className={styles.sectionText}>
                Amazon India and Flipkart have made EPR Registration a requirement for sellers in covered
                product categories. Sellers who cannot provide valid EPR Registration certificates face
                listing restrictions. For businesses that rely on e-commerce as a primary sales channel, EPR
                Registration has become as important as BIS or LMPC compliance.
              </p>
              <h3 className={styles.subsectionTitle}>Brand and ESG Credibility</h3>
              <p className={styles.sectionText}>
                Indian consumers, institutional buyers, and global business partners are increasingly
                scrutinising the environmental credentials of the companies they work with. EPR compliance
                demonstrates a commitment to responsible business practices — and in the context of growing
                ESG reporting requirements, EPR Registration is fast becoming a standard due diligence
                requirement in supply chains.
              </p>
              <h3 className={styles.subsectionTitle}>Avoid Environmental Compensation Liability</h3>
              <p className={styles.sectionText}>
                The CPCB&apos;s Environmental Compensation framework means that non-compliance creates a
                quantified financial liability based on the volume of products placed in the market and the
                shortfall against EPR targets. For businesses with significant sales volumes, this liability
                can be substantial. Proactive EPR Registration and compliance management is always more
                cost-effective than dealing with Environmental Compensation notices.
              </p>
            </section>

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs EPR Registration in India?</h2>
              <p className={styles.sectionText}>
                EPR Registration in India is required for producers, importers, and brand owners across four
                main waste categories — plus Used Oil obligations where applicable. Here is a breakdown of
                who needs to register under each category.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">EPR Category</th>
                    <th scope="col">Who Must Register</th>
                    <th scope="col">Common Products Covered</th>
                  </tr>
                </thead>
                <tbody>
                  {EPR_CATEGORY_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.whoMustRegister}</td>
                      <td>{row.products}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                A single business may be required to register under multiple EPR categories. For example, a
                consumer electronics importer who uses plastic packaging for their products needs EPR
                Registration for both E-Waste and Plastic Packaging. Our team assesses your complete product
                portfolio and identifies all applicable EPR obligations in one comprehensive review.
              </p>
              <p className={styles.sectionText}>
                Not sure which EPR categories apply to your business? Our team provides a free EPR
                obligation assessment. Contact us before your next product launch or import shipment.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The EPR Registration process is managed through the CPCB EPR portal. The process involves
                registration, target setting, recycler or PRO onboarding, and annual compliance reporting.
                Here is a complete breakdown of every step and how Ornate Quality Services manages the
                process for you.
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
              <h2 className={styles.sectionTitle}>EPR Registration Requirements in India</h2>
              <p className={styles.sectionText}>
                Before applying for EPR Registration, businesses must meet the following requirements under
                the applicable EPR rules.
              </p>
              <h3 className={styles.subsectionTitle}>For All EPR Categories</h3>
              <ul className={styles.bulletList}>
                <li>
                  Valid business registration in India — GST registration and company incorporation
                  certificate
                </li>
                <li>Import Export Code (IEC) for importers — registered with DGFT</li>
                <li>
                  Accurate records of products placed in the Indian market — unit volumes and packaging
                  weights by category
                </li>
                <li>
                  Willingness to set annual EPR targets and fulfil them through CPCB-registered PROs or
                  recyclers
                </li>
                <li>
                  Commitment to file annual compliance reports on the CPCB portal within prescribed
                  deadlines
                </li>
              </ul>
              <h3 className={styles.subsectionTitle}>Category-Specific Requirements</h3>
              <p className={styles.sectionText}>
                Each EPR category has specific product classification requirements under its applicable
                rules. For E-Waste, products must be classified under the correct equipment category as
                defined in Schedule I of the E-Waste Rules. For Battery Waste, battery chemistry and type must
                be declared. For Plastic Packaging, the type and weight of all plastic packaging used must be
                declared by category.
              </p>
              <p className={styles.sectionText}>
                Incorrect product classification is one of the most common issues in EPR applications — and it
                can create compliance problems that are difficult to correct after registration. Our team
                reviews your product portfolio in detail and ensures all classifications are correct before
                filing.
              </p>
              <p className={styles.sectionText}>
                Multiple products across multiple EPR categories? Our team handles everything in a single,
                coordinated compliance project. Contact us to get started.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for EPR Registration</h2>
              <p className={styles.sectionText}>
                The following documents are required for EPR Registration on the CPCB portal. Requirements may
                vary slightly by EPR category.
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
                Our team provides a category-specific document checklist after reviewing your business and
                product details. For multi-category EPR registrations, we manage all documentation
                systematically to ensure consistency across all portal submissions.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Cost in India</h2>
              <p className={styles.sectionText}>
                EPR Registration itself does not involve a government registration fee — the CPCB portal
                registration is free. However, EPR compliance involves ongoing costs that must be factored
                into your business planning.
              </p>
              <h3 className={styles.subsectionTitle}>PRO or Recycler Service Fees</h3>
              <p className={styles.sectionText}>
                The most significant ongoing cost of EPR compliance is the fee paid to a Producer
                Responsibility Organisation (PRO) or registered recycler for fulfilling your annual EPR
                targets. PRO fees are typically calculated on a per-kilogram basis and vary based on material
                type, target volume, and the PRO&apos;s collection network. For modest sales volumes, annual
                PRO fees can range from INR 10,000 to INR 1,00,000 depending on category and target volume.
              </p>
              <h3 className={styles.subsectionTitle}>Environmental Compensation (Non-Compliance Cost)</h3>
              <p className={styles.sectionText}>
                Entities that fail to meet their annual EPR targets are subject to Environmental Compensation
                — a penalty levied by CPCB on the basis of the target shortfall. Environmental Compensation
                rates vary by category and make non-compliance significantly more expensive than compliance.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a professional fee for EPR Registration, target setting, PRO
                onboarding, and annual compliance reporting. Our fees are structured as an annual compliance
                retainer — giving you complete EPR compliance management for a fixed, transparent cost.
              </p>
              <p className={styles.sectionText}>
                For a precise cost estimate based on your product categories and sales volumes — contact our
                team. We provide a complete EPR compliance cost projection at no obligation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>EPR Registration Validity and Annual Compliance Cycle</h2>
              <p className={styles.sectionText}>
                EPR Registration certificates do not have a fixed expiry date in the way that many product
                certifications do. Once registered, the entity remains registered on the CPCB portal as long
                as it continues to fulfil its annual EPR obligations and files compliance reports on time.
              </p>
              <h3 className={styles.subsectionTitle}>Annual EPR Target Setting</h3>
              <p className={styles.sectionText}>
                At the start of each financial year, registered entities must set their annual EPR targets on
                the CPCB portal. Targets are based on the volume of products placed in the market in the
                previous year and must meet minimum prescribed targets under the applicable rules. Failure to
                set targets before the prescribed deadline is treated as non-compliance.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Compliance Report Filing</h3>
              <p className={styles.sectionText}>
                By the end of each financial year, registered entities must file a compliance report on the
                CPCB portal confirming the waste collected and recycled against their declared targets. The
                report must be supported by recycling certificates from CPCB-registered PROs or recyclers.
              </p>
              <h3 className={styles.subsectionTitle}>Consequences of Non-Filing</h3>
              <p className={styles.sectionText}>
                Entities that fail to file annual compliance reports face Environmental Compensation notices
                from CPCB. Repeated non-filing can result in enhanced penalties, listing on CPCB&apos;s
                non-compliant entities register, and potential legal action under the Environment Protection
                Act. Our annual compliance retainer service ensures no deadline is missed.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of EPR Registration for Your Business</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Non-Compliance with EPR Registration</h2>
              <p className={styles.sectionText}>
                Since 2022, CPCB has significantly strengthened EPR enforcement. Environmental Compensation
                has replaced the older penalty structure, creating quantified financial liability for
                non-compliance that scales directly with the volume of products placed in the market.
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
                CPCB publishes lists of non-compliant entities on its website — which is visible to
                e-commerce platforms, retail chains, government procurement bodies, and the general public.
                For businesses where brand reputation matters, appearing on this list has consequences well
                beyond the financial penalty itself.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Consumer Electronics Brand Get EPR Registered Across Three
                Categories
              </h2>
              <p className={styles.sectionText}>
                A Mumbai-based consumer electronics brand that imported mobile phones, tablets, and Bluetooth
                audio products approached Ornate Quality Services after receiving an Environmental
                Compensation notice from CPCB. The brand had been operating for three years without EPR
                Registration — unaware that their product range triggered obligations under both the E-Waste
                Rules and the Battery Waste Management Rules. Their plastic packaging also created obligations
                under the Plastic Waste Management Rules.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The CPCB notice was for the E-Waste category only — but our initial assessment revealed that
                the brand was also non-compliant under Battery Waste and Plastic Packaging EPR Rules. Three
                years of unregistered operations meant significant accumulated EPR targets. At the same
                time, their Amazon India account had been flagged for missing EPR compliance documentation.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a full EPR obligation assessment covering all three categories — E-Waste,
                Battery Waste, and Plastic Packaging. We calculated historical EPR targets based on the
                brand&apos;s sales data for the previous three financial years, prepared all registration
                documents for simultaneous filing across all three categories, and managed the CPCB portal
                registration process in parallel. We also onboarded a CPCB-registered PRO with national coverage
                for all three waste categories.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                All three EPR Registrations were obtained within 25 working days. The CPCB Environmental
                Compensation notice was addressed through a formal response demonstrating active registration
                and compliance activity. Amazon India reinstated the brand&apos;s compliance status, and the
                brand is now fully current on annual target setting and compliance reporting across all three
                EPR categories.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — EPR Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for EPR Registration</h2>
              <p className={styles.ctaText}>
                Need help with EPR Registration, CPCB portal filing, PRO onboarding, or annual compliance
                reporting? Connect with Ornate Quality Services for complete support and professional guidance
                for your environmental compliance in India.
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
                          link.href === EPR_PAGE_PATH ? styles.servicesLinkActive : ""
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
