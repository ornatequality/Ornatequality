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
  GEM_TOC,
  GEM_CATEGORY_ROWS,
  DOCUMENTS_ROWS,
  CHALLENGES_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/gemContent";

const GEM_PAGE_PATH = "/services/gem-registration";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="gem"
      defaultService="GeM Portal Registration"
      serviceOptions={[
        "GeM Portal Registration",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "EPR Registration",
        "Other",
      ]}
      successText="Our GeM registration expert will contact you within one business day."
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

export function GemPageContent() {
  const [activeId, setActiveId] = useState(GEM_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = GEM_TOC.map((item) => item.id);
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
              {GEM_TOC.map((item, i) => (
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
                GeM Portal Registration in India — Complete Guide for Manufacturers, Suppliers &amp;
                Service Providers
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    India&apos;s central government, state governments, and public sector undertakings
                    collectively spend lakhs of crores every year on procurement — and since 2016, a
                    growing share of that spending happens through a single platform: the Government
                    e-Marketplace, or GeM.
                  </p>
                  <p className={styles.sectionText}>
                    GeM is India&apos;s official online procurement portal for government buyers. Any
                    business that wants to supply products or services to government departments, ministries,
                    defence establishments, railways, PSUs, or autonomous bodies must be registered as a seller
                    on the GeM portal. Without GeM registration, you simply cannot participate in government
                    procurement — regardless of how good your product or how competitive your pricing.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help manufacturers, traders, and service providers complete
                    their GeM registration correctly and efficiently — and we help them understand the
                    compliance requirements, including BIS certification, ISI Mark, and other product
                    certifications that are often mandatory for GeM listings.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="GeM portal registration and government procurement compliance support"
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
                    Ready to sell to the Indian government? Contact our team for a free GeM registration
                    consultation and we will walk you through the entire process.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-gem" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is GeM Portal Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    GeM — Government e-Marketplace — is a digital procurement platform launched by the
                    Government of India in 2016 under the Ministry of Commerce and Industry. It serves as a
                    one-stop platform for government buyers to procure goods and services directly from
                    registered sellers — replacing the traditional, paper-heavy tendering process with a
                    transparent, efficient digital marketplace.
                  </p>
                  <p className={styles.sectionText}>
                    GeM Registration is the process by which a business registers as a seller on the GeM
                    portal. Once registered, the seller can list their products or services, participate in
                    government bids and reverse auctions, receive orders from government buyers, and get paid
                    directly through the platform.
                  </p>
                  <p className={styles.sectionText}>
                    GeM registration is open to manufacturers, traders, startups, MSMEs, self-help groups, and
                    service providers. The platform gives businesses of all sizes direct access to one of the
                    world&apos;s largest government procurement markets — without the need for agents,
                    intermediaries, or complex tendering processes.
                  </p>
                  <p className={styles.sectionText}>
                    As of 2024, GeM has over 60 lakh registered sellers and has facilitated procurement worth
                    over INR 4 lakh crore. For any business that manufactures or supplies products that
                    government departments buy, GeM registration is not just an option — it is a significant
                    business opportunity that most cannot afford to ignore.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>Ge</span>
                  <span className={styles.whatIsLabel}>GOVERNMENT e-MARKETPLACE</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why GeM Registration Is a Smart Business Decision</h2>
              <p className={styles.sectionText}>
                GeM is not just another sales channel — for many manufacturers and suppliers, it represents
                the single largest addressable market opportunity in India. Here is why GeM registration
                matters.
              </p>
              <h3 className={styles.subsectionTitle}>Direct Access to Government Buyers Across India</h3>
              <p className={styles.sectionText}>
                GeM gives registered sellers direct access to over 50,000 government buyer organisations —
                including central government ministries, state government departments, defence establishments,
                railways, PSUs, educational institutions, and hospitals. A single GeM listing can generate
                orders from buyers across the entire country.
              </p>
              <h3 className={styles.subsectionTitle}>No Middlemen — Direct Orders and Payments</h3>
              <p className={styles.sectionText}>
                Orders come directly from government buyers to registered sellers, and payments are processed
                through the platform — typically within a defined period after delivery. For businesses
                accustomed to the delays of traditional government procurement, GeM&apos;s structured payment
                process is a significant improvement.
              </p>
              <h3 className={styles.subsectionTitle}>Mandatory for Government Supply</h3>
              <p className={styles.sectionText}>
                The Government of India has made it mandatory for central government departments to procure goods
                and services through GeM above specified thresholds. For product categories listed on GeM,
                government departments cannot place orders outside the platform. GeM registration is the only
                official channel.
              </p>
              <h3 className={styles.subsectionTitle}>Level Playing Field for MSMEs and Startups</h3>
              <p className={styles.sectionText}>
                GeM has specific provisions that benefit MSMEs and startups — including purchase preferences,
                exemptions from earnest money deposits, and dedicated MSME buyer categories. For small and
                medium manufacturers who previously found government procurement inaccessible, GeM has
                democratised the opportunity.
              </p>
              <h3 className={styles.subsectionTitle}>Product Certification Requirements Create an Advantage</h3>
              <p className={styles.sectionText}>
                Many product categories listed on GeM require BIS certification, ISI Mark, or other regulatory
                certifications as mandatory qualifications. Manufacturers who already have the relevant
                certifications have a direct competitive advantage — because competitors without certification
                cannot list in those categories. Ornate Quality Services helps clients get both their product
                certifications and their GeM registration done together.
              </p>

              <h3 className={styles.subsectionTitle}>What Can You Sell on GeM Portal?</h3>
              <p className={styles.sectionText}>
                GeM lists a wide range of product and service categories across virtually every sector of
                government procurement. The following table covers the major categories available on the GeM
                portal.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Common Products / Services</th>
                    <th scope="col">Key Certification Required</th>
                  </tr>
                </thead>
                <tbody>
                  {GEM_CATEGORY_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.certification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                The GeM catalogue is continuously expanding as new product and service categories are added. If
                your product is not currently listed on GeM, it may be possible to add it as a new category.
                Our team will assess whether your product can be listed and what certifications are required
                for your specific category.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Portal Registration Process — Step by Step</h2>
              <p className={styles.sectionText}>
                The GeM seller registration process is entirely online through the GeM portal. Here is a
                complete breakdown of every step and how Ornate Quality Services supports you through the
                process.
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
              <h2 className={styles.sectionTitle}>GeM Seller Registration Requirements</h2>
              <p className={styles.sectionText}>
                To register as a seller on the GeM portal, businesses must meet the following basic eligibility
                requirements.
              </p>
              <h3 className={styles.subsectionTitle}>Business Registration Requirements</h3>
              <ul className={styles.bulletList}>
                <li>
                  Valid business registration in India — proprietorship, partnership, LLP, private limited
                  company, or public limited company
                </li>
                <li>GST registration — mandatory for all GeM sellers</li>
                <li>PAN card — individual PAN for proprietors, company PAN for registered companies</li>
                <li>Active bank account in the name of the registered business — for receiving GeM payments</li>
                <li>Aadhaar-linked mobile number for the primary contact / authorised signatory</li>
              </ul>
              <h3 className={styles.subsectionTitle}>MSME / Udyam Registration (Recommended)</h3>
              <p className={styles.sectionText}>
                While not mandatory for all sellers, MSME/Udyam registration is strongly recommended. GeM has
                specific purchase preference provisions for MSMEs — meaning government buyers are required to
                give preference to MSME sellers for orders up to certain values. Sellers with Udyam registration
                also get exemption from earnest money deposits in many bid categories.
              </p>
              <h3 className={styles.subsectionTitle}>Product Certification Requirements</h3>
              <p className={styles.sectionText}>
                For many product categories on GeM, sellers must hold valid product certifications before their
                listings are approved. Common requirements include BIS CRS Registration for electronics, BIS ISI
                Mark for electrical products and construction materials, FSSAI for food products, and BIS
                certification for various other mandatory categories.
              </p>
              <p className={styles.sectionText}>
                Ornate Quality Services handles both GeM registration and the underlying product certifications —
                making us a single point of contact for everything your business needs to sell on GeM.
              </p>
              <p className={styles.sectionText}>
                Not sure what certifications your products need for GeM listing? Our team assesses your complete
                product portfolio and tells you exactly what is required. Contact us for a free assessment.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for GeM Portal Registration</h2>
              <p className={styles.sectionText}>
                The following documents are required for GeM seller registration. Exact requirements may vary
                based on the business type and product categories.
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
                Our team prepares a precise document checklist based on your business type and product
                categories. We review all documents for accuracy and consistency before submission to avoid
                profile rejection or delays.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Portal Registration Cost</h2>
              <p className={styles.sectionText}>
                GeM seller registration itself is free — there is no government registration fee for becoming a
                seller on the GeM portal. However, there are other costs associated with GeM participation that
                businesses should plan for.
              </p>
              <h3 className={styles.subsectionTitle}>GeM Registration — No Government Fee</h3>
              <p className={styles.sectionText}>
                The GeM portal does not charge a registration fee for sellers. Any service provider claiming to
                charge a government fee for GeM registration is not legitimate. The registration process is
                entirely free on the official GeM portal at gem.gov.in.
              </p>
              <h3 className={styles.subsectionTitle}>Product Certification Costs</h3>
              <p className={styles.sectionText}>
                For product categories that require mandatory certifications — BIS CRS, ISI Mark, WPC approval,
                and others — the cost of obtaining those certifications must be factored into your GeM
                preparation budget. Ornate Quality Services provides transparent cost estimates for all required
                certifications as part of your GeM readiness assessment.
              </p>
              <h3 className={styles.subsectionTitle}>GeM Convenience Fee</h3>
              <p className={styles.sectionText}>
                GeM charges a convenience fee on transactions processed through the platform. This is a small
                percentage of the order value deducted from seller payments. The fee varies by product category
                and order value and applies to all GeM transactions.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a professional fee for end-to-end GeM registration management —
                from document preparation and profile creation to product listing, OEM registration, and ongoing
                profile maintenance. All fees are quoted transparently before we begin.
              </p>
              <p className={styles.sectionText}>
                For a complete GeM readiness cost estimate including any required product certifications —
                contact our team for a free consultation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>GeM Registration Validity and Ongoing Profile Management</h2>
              <p className={styles.sectionText}>
                GeM seller registration does not have a fixed expiry date. Once registered, your seller profile
                remains active as long as it is maintained correctly and your supporting documents — particularly
                GST registration, product certifications, and turnover declarations — remain valid and up to date.
              </p>
              <h3 className={styles.subsectionTitle}>Annual Renewal Activities</h3>
              <p className={styles.sectionText}>
                While the GeM registration itself does not expire, several elements of the seller profile require
                annual updates — including turnover declarations, financial year performance data, and renewal of
                product certifications with fixed validity periods. Failure to update these details can result in
                profile suspension or listing deactivation.
              </p>
              <h3 className={styles.subsectionTitle}>Product Certification Renewals</h3>
              <p className={styles.sectionText}>
                Product certifications listed on GeM — such as BIS CRS Registration or ISI Mark Certification —
                have their own validity periods. When a certification expires, the associated product listings on
                GeM are automatically flagged as non-compliant. Our team manages certification renewal calendars
                and ensures your GeM listings are never affected by a lapsed certification.
              </p>
              <h3 className={styles.subsectionTitle}>Catalogue Updates</h3>
              <p className={styles.sectionText}>
                Government buyers frequently update their procurement requirements, and new product models replace
                older ones. Keeping your GeM catalogue current — with updated specifications, new models, and
                competitive pricing — is important for maintaining buyer interest and order flow.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of GeM Portal Registration</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Common GeM Registration Challenges — And How Ornate Solves Them
              </h2>
              <p className={styles.sectionText}>
                GeM registration appears straightforward, but first-time applicants regularly encounter challenges
                that delay their onboarding. Here are the most common issues and how our team addresses them.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Common Challenge</th>
                    <th scope="col">How Ornate Solves It</th>
                  </tr>
                </thead>
                <tbody>
                  {CHALLENGES_ROWS.map((row) => (
                    <tr key={row.challenge}>
                      <th scope="row">{row.challenge}</th>
                      <td>{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Noida Electronics Manufacturer Start Selling on GeM
              </h2>
              <p className={styles.sectionText}>
                A Noida-based manufacturer of LED lighting products approached Ornate Quality Services after
                struggling with GeM registration for over three months. They had attempted self-registration twice
                — both attempts resulted in profile rejection — and had missed several government procurement
                opportunities during the delay.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer&apos;s GST registration and company incorporation certificate had a slight address
                discrepancy that triggered automatic profile rejection on the GeM portal. Additionally, their LED
                products required BIS ISI Mark Certification for GeM listing in the electrical equipment category
                — a requirement they were unaware of when they first attempted registration.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted a complete GeM readiness assessment for their product range. We identified the
                address discrepancy, guided the manufacturer through the GST address correction process, and
                initiated the BIS ISI Mark Certification application for their LED luminaire range in parallel. Once
                the GST correction was processed and the BIS certification was obtained, we managed the complete GeM
                registration — including seller profile creation, OEM registration for their brand, and product
                listing creation with full technical specifications and certification documents.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                GeM registration was completed successfully within 35 days of engaging Ornate. The manufacturer&apos;s
                first government order — for LED street lights from a municipal corporation in Uttar Pradesh — came
                through within 10 days of their products going live on the platform. They have since received orders
                from multiple government departments and have listed four additional product models on the GeM
                catalogue.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — GeM Portal Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for GeM Portal Registration</h2>
              <p className={styles.ctaText}>
                Need help with GeM seller registration, product listing, OEM verification, or BIS certification for
                GeM categories? Connect with Ornate Quality Services for complete support and professional guidance.
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
                          link.href === GEM_PAGE_PATH ? styles.servicesLinkActive : ""
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




