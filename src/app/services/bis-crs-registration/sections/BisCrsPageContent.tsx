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
  BIS_CRS_TOC,
  WHY_ORNATE_ITEMS,
  LATEST_NOTIFICATIONS,
  OUR_SERVICES_LINKS,
  IMPORTANCE_ITEMS,
  CERT_TYPES,
  PRODUCTS_COVERED,
  PROCESS_STEPS,
  FAQ_ITEMS,
} from "../data/bisCrsContent";


function ImportanceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    shield: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Z"
        />
      </svg>
    ),
    legal: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a3 3 0 0 1 3 3v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V5a3 3 0 0 1 3-3Zm0 2a1 1 0 0 0-1 1v1h2V5a1 1 0 0 0-1-1Z"
        />
      </svg>
    ),
    trust: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"
        />
      </svg>
    ),
    market: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 3h18v2H3V3Zm0 4h18v14H3V7Zm4 2v2h2V9H7Zm0 4v2h2v-2H7Zm4-4v2h6V9h-6Zm0 4v2h6v-2h-6Z"
        />
      </svg>
    ),
    customs: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4ZM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm13.5-9 1.96 2.5H17V9.5h2.5Zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"
        />
      </svg>
    ),
    consumer: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4ZM8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-3 0-6 1.5-6 4v3h12v-3c0-2.5-3-4-6-4ZM8 13c-2.65 0-5 1.2-5 3.2V20h6v-2.6c0-1.35.65-2.5 1.7-3.35A8.7 8.7 0 0 0 8 13Z"
        />
      </svg>
    ),
  };
  return <>{icons[type] ?? icons.shield}</>;
}

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="bis"
      defaultService="BIS CRS Registration"
      serviceOptions={[
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "FMCS Certification",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our BIS expert will contact you within one business day."
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

export function BisCrsPageContent() {
  const [activeId, setActiveId] = useState(BIS_CRS_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BIS_CRS_TOC.map((item) => item.id);
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
          {/* Left — Table of Contents */}
          <nav className={styles.toc} aria-label="Table of contents">
            <div className={styles.tocHead}>Table of Contents</div>
            <ol ref={tocListRef} className={styles.tocList}>
              {BIS_CRS_TOC.map((item, i) => (
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

          {/* Center — Main Content */}
          <article className={styles.main}>
            {/* Introduction */}
            <section id="introduction" className={styles.section}>
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    BIS (Bureau of Indian Standards) certification is a mandatory compliance
                    requirement for manufacturers and importers looking to sell regulated products in
                    the Indian market. It ensures that products meet the safety, quality, and
                    performance standards set by the Government of India.
                  </p>
                  <p className={styles.sectionText}>
                    Ornate Quality Services Pvt. Ltd. provides complete end-to-end support for BIS
                    CRS, ISI Mark, and FMCS certification — from product identification and lab
                    testing to documentation, factory inspection, and certificate issuance.
                  </p>
                </div>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="BIS certification office building"
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
                    Our objective is to simplify BIS compliance for manufacturers and importers,
                    enabling faster market access with complete regulatory confidence and
                    transparent guidance at every step.
                  </p>
                </blockquote>
              </div>
            </section>

            {/* What is BIS */}
            <section id="what-is-bis" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is BIS Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    BIS Certification is issued by the Bureau of Indian Standards — India&apos;s
                    national standards body operating under the Ministry of Consumer Affairs, Food
                    &amp; Public Distribution. It confirms that a product conforms to relevant Indian
                    Standards (IS) and Quality Control Orders.
                  </p>
                  <p className={styles.sectionText}>
                    For electronic and IT products, the Compulsory Registration Scheme (CRS)
                    requires manufacturers and importers to register their products with BIS before
                    placing them in the Indian market. The ISI Mark applies to a broader range of
                    industrial and consumer goods.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>🔍</span>
                  <span className={styles.whatIsLabel}>BIS CERTIFICATION</span>
                </div>
              </div>
            </section>

            {/* Importance */}
            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Importance of BIS Certification</h2>
              <p className={styles.sectionText}>
                Obtaining BIS certification is not just a legal formality — it is a strategic
                business requirement that protects your brand and opens doors to the Indian market.
              </p>
              <div className={styles.importanceGrid}>
                {IMPORTANCE_ITEMS.map((item) => (
                  <div key={item.label} className={styles.importanceItem}>
                    <div className={styles.importanceCircle}>
                      <ImportanceIcon type={item.icon} />
                    </div>
                    <span className={styles.importanceLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Types */}
            <section id="types" className={styles.section}>
              <h2 className={styles.sectionTitle}>Types of BIS Certification</h2>
              <div className={styles.typesGrid}>
                {CERT_TYPES.map((type) => (
                  <div key={type.title} className={styles.typeCard}>
                    <div
                      className={`${styles.typeCardIcon} ${
                        type.tone === "isi"
                          ? styles.typeCardIconIsi
                          : type.tone === "crs"
                            ? styles.typeCardIconCrs
                            : styles.typeCardIconFmcs
                      }`}
                    >
                      {type.tone === "isi" ? "ISI" : type.tone === "crs" ? "CRS" : "FMCS"}
                    </div>
                    <h3 className={styles.typeCardTitle}>{type.title}</h3>
                    <p className={styles.typeCardSubtitle}>{type.subtitle}</p>
                    <p className={styles.typeCardText}>{type.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Products Covered */}
            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products Covered Under BIS</h2>
              <p className={styles.sectionText}>
                BIS CRS covers a wide range of electronic and IT products. Below are some of the
                most commonly registered product categories:
              </p>
              <div className={styles.productsGrid}>
                {PRODUCTS_COVERED.map((product) => (
                  <div key={product.label} className={styles.productCard}>
                    <span className={styles.productEmoji} aria-hidden="true">
                      {product.emoji}
                    </span>
                    <span className={styles.productLabel}>{product.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS Certification Process</h2>
              <p className={styles.sectionText}>
                Our streamlined 7-step process ensures your BIS certification is handled efficiently
                from start to finish:
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
            </section>

            {/* Documents */}
            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for BIS</h2>
              <ul className={styles.bulletList}>
                <li>Manufacturing unit registration documents (Factory License, GST, PAN)</li>
                <li>Product technical specifications and user manual</li>
                <li>Test report from BIS-recognized NABL accredited laboratory</li>
                <li>Authorization letter (for brand owners and importers)</li>
                <li>Undertaking and affidavit as per BIS format</li>
                <li>Trademark registration certificate (if applicable)</li>
                <li>Factory layout plan and manufacturing process flow</li>
              </ul>
            </section>

            {/* Fees */}
            <section id="fees" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS Certification Fees</h2>
              <p className={styles.sectionText}>
                BIS certification fees vary based on product category, number of models, testing
                requirements, and whether factory inspection is required. Government fees include
                application fee, processing fee, and annual mark fee.
              </p>
              <p className={styles.sectionText}>
                Ornate provides transparent, all-inclusive pricing with no hidden costs. Contact us
                for a detailed quote tailored to your product and certification type.
              </p>
            </section>

            {/* Validity */}
            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity and Renewal</h2>
              <p className={styles.sectionText}>
                BIS CRS certificates are typically valid for two years from the date of grant.
                Renewal must be initiated before expiry to avoid disruption in legal market access.
              </p>
              <p className={styles.sectionText}>
                Ornate provides proactive renewal reminders and handles the complete renewal process
                including updated testing, documentation, and BIS portal submissions.
              </p>
            </section>

            {/* Difference */}
            <section id="difference" className={styles.section}>
              <h2 className={styles.sectionTitle}>Difference Between ISI, CRS &amp; FMCS</h2>
              <p className={styles.sectionText}>
                <strong>ISI Mark</strong> applies to industrial and consumer products under Quality
                Control Orders and requires factory inspection for domestic manufacturers.
              </p>
              <p className={styles.sectionText}>
                <strong>CRS Registration</strong> is specific to electronic and IT products and
                focuses on product testing without mandatory factory inspection for most categories.
              </p>
              <p className={styles.sectionText}>
                <strong>FMCS</strong> enables foreign manufacturers to obtain BIS certification
                through an authorized Indian representative, with BIS conducting factory audits
                overseas.
              </p>
            </section>

            {/* Who Needs */}
            <section id="who-needs" className={styles.section}>
              <h2 className={styles.sectionTitle}>Who Needs BIS Certification?</h2>
              <ul className={styles.bulletList}>
                <li>Domestic manufacturers of regulated electronic and IT products</li>
                <li>Importers bringing covered products into India</li>
                <li>Brand owners selling under their trademark in India</li>
                <li>E-commerce sellers listing BIS-regulated products online</li>
                <li>Foreign manufacturers exporting to India via FMCS scheme</li>
              </ul>
            </section>

            {/* Penalties */}
            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Non-Compliance</h2>
              <p className={styles.sectionText}>
                Selling products without valid BIS certification can result in product seizure,
                penalties under the BIS Act 2016, cancellation of import licenses, and legal action.
                Non-compliant products may be barred from e-commerce platforms and retail channels.
              </p>
            </section>

            {/* Why Ornate (main) */}
            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services?</h2>
              <ul className={styles.bulletList}>
                {WHY_ORNATE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
            </section>

            {/* Get Started */}
            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Started Today</h2>
              <p className={styles.ctaText}>
                Ready to obtain your BIS CRS certification? Our experts are here to guide you
                through every step — from product testing to certificate issuance.
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

          {/* Right — Sidebar */}
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
                          link.href === "/services/bis-crs-registration"
                            ? styles.servicesLinkActive
                            : ""
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
