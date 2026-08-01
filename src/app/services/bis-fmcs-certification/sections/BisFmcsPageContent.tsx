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
  BIS_FMCS_TOC,
  WHY_FMCS_MATTERS,
  PRODUCT_CATEGORIES,
  PROCESS_STEPS,
  FACILITY_REQUIREMENTS,
  BUSINESS_REQUIREMENTS,
  DOCUMENTS_REQUIRED,
  BENEFITS_ITEMS,
  PENALTY_ROWS,
  FAQ_ITEMS,
} from "../data/bisFmcsContent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="fmcs"
      defaultService="BIS FMCS Certification"
      serviceOptions={[
        "BIS FMCS Certification",
        "BIS ISI Mark Certification",
        "BIS CRS Registration",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our FMCS certification expert will contact you within one business day."
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

export function BisFmcsPageContent() {
  const [activeId, setActiveId] = useState(BIS_FMCS_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BIS_FMCS_TOC.map((item) => item.id);
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
              {BIS_FMCS_TOC.map((item, i) => (
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
                BIS FMCS Certification for Foreign Manufacturers — Complete Guide to Selling
                Your Products in India
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    If you are a manufacturer based outside India and you want to sell your
                    products in the Indian market, BIS FMCS Certification is the route you need.
                    India is one of the fastest-growing consumer markets in the world — but it
                    also has some of the most structured product compliance requirements. Without
                    the right BIS licence, your products simply cannot enter legally.
                  </p>
                  <p className={styles.sectionText}>
                    The Bureau of Indian Standards Foreign Manufacturers Certification Scheme —
                    commonly known as BIS FMCS — was designed specifically for international
                    manufacturers who want to certify their products against Indian Standards and
                    gain access to Indian buyers, distributors, and e-commerce platforms.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we have been helping foreign manufacturers navigate
                    the BIS FMCS process since 2013. We understand exactly what BIS expects, what
                    the common delays are, and how to get your licence approved without unnecessary
                    back-and-forth.
                  </p>
                </div>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="BIS FMCS certification for foreign manufacturers"
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
                    Already know what you need? Contact our team for a free consultation and get a
                    clear roadmap for your BIS FMCS Certification.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-fmcs" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is BIS FMCS Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    BIS FMCS — or the Foreign Manufacturers Certification Scheme — is a product
                    certification programme run by the Bureau of Indian Standards (BIS) that
                    allows manufacturers outside India to obtain a BIS licence for their products.
                  </p>
                  <p className={styles.sectionText}>
                    Under this scheme, foreign manufacturers can apply for certification against
                    the relevant Indian Standard (IS) for their product category. Once the
                    application is approved and the BIS licence is granted, the manufacturer can
                    affix the BIS Standard Mark on their products and legally import and sell
                    them in India.
                  </p>
                  <p className={styles.sectionText}>
                    The scheme operates under the BIS Act, 2016 and follows a structured process
                    that includes document review, product testing at BIS-recognised laboratories,
                    factory inspection at the manufacturing facility, and ongoing surveillance after
                    the licence is granted. FMCS is currently the only official route through which
                    foreign manufacturers can obtain a BIS product certification licence directly —
                    without going through an Indian importer or third-party licence holder.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>FM</span>
                  <span className={styles.whatIsLabel}>BIS FMCS</span>
                </div>
              </div>
            </section>

            <section id="why-matters" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why BIS FMCS Certification Matters for Your Business
              </h2>
              <p className={styles.sectionText}>
                India&apos;s product compliance landscape has changed significantly over the last
                decade. What was once a market where imported goods could enter with minimal checks
                is now one of the most actively regulated consumer markets in the world. Here is
                why BIS FMCS Certification is no longer optional for serious international
                manufacturers.
              </p>
              {WHY_FMCS_MATTERS.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={styles.sectionText}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="products" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Which Products Require BIS FMCS Certification for Foreign Manufacturers?
              </h2>
              <p className={styles.sectionText}>
                BIS FMCS Certification applies to all product categories that are notified under
                mandatory BIS certification in India. The following are some of the most common
                product categories for which foreign manufacturers seek FMCS certification.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Common Products</th>
                    <th scope="col">Applicable IS Standard</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCT_CATEGORIES.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.products}</td>
                      <td>{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                This list is indicative and not exhaustive. New product categories are regularly
                brought under mandatory BIS certification. Our team will confirm the exact IS
                standard and FMCS applicability for your specific product during your free
                consultation.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                BIS FMCS Certification Process — Step by Step
              </h2>
              <p className={styles.sectionText}>
                The BIS FMCS process is more involved than domestic BIS certification because it
                includes international coordination, factory inspection at the overseas
                manufacturing facility, and additional documentation requirements. Here is a clear
                breakdown of every step — and how Ornate Quality Services manages each one for you.
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

            <section id="requirements" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                BIS FMCS Certification Registration Requirements
              </h2>
              <p className={styles.sectionText}>
                Foreign manufacturers applying under the BIS FMCS scheme must meet the following
                eligibility requirements before applying.
              </p>
              <h3 className={styles.subsectionTitle}>Manufacturing Facility Requirements</h3>
              <ul className={styles.bulletList}>
                {FACILITY_REQUIREMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.subsectionTitle}>Business &amp; Legal Requirements</h3>
              <ul className={styles.bulletList}>
                {BUSINESS_REQUIREMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.sectionText}>
                Not sure whether your facility meets BIS FMCS requirements? We offer a
                pre-application assessment to identify gaps and help you prepare before filing.
                Contact us for details.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for BIS FMCS Certification</h2>
              <p className={styles.sectionText}>
                The following documents are required for a BIS FMCS application. All documents
                must be in English or accompanied by a certified English translation.
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
                  {DOCUMENTS_REQUIRED.map((row) => (
                    <tr key={row.no}>
                      <td>{row.no}</td>
                      <th scope="row">{row.document}</th>
                      <td>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Document requirements can vary based on the product category and applicable Indian
                Standard. Our team provides a precise, product-specific document checklist after an
                initial review of your application.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS FMCS Certification Cost — What to Expect</h2>
              <p className={styles.sectionText}>
                BIS FMCS Certification involves several cost components. Understanding these
                upfront helps you plan your certification budget without surprises.
              </p>
              <h3 className={styles.subsectionTitle}>BIS Application &amp; Licence Fees</h3>
              <p className={styles.sectionText}>
                BIS charges a non-refundable application fee at the time of filing, along with an
                annual licence fee upon grant of the certificate. These fees are set by BIS and
                vary by product category. Application fees for FMCS typically range from INR 10,000
                to INR 50,000 depending on the scheme and product.
              </p>
              <h3 className={styles.subsectionTitle}>Factory Inspection Travel Costs</h3>
              <p className={styles.sectionText}>
                For overseas factory inspections, the foreign manufacturer is required to bear the
                travel, accommodation, and daily allowance costs of the BIS inspection team. This
                is a significant cost component that varies depending on the country of manufacture
                and the duration of the inspection. We help you plan and manage these costs
                efficiently, including coordination with BIS for inspection scheduling to minimise
                travel expenses.
              </p>
              <h3 className={styles.subsectionTitle}>Product Testing Charges</h3>
              <p className={styles.sectionText}>
                Testing charges are paid to the laboratory and vary by product category and the
                number of parameters to be tested. For internationally accredited labs, charges
                can range from USD 500 to USD 5,000+ per sample set.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a fixed professional fee covering end-to-end FMCS
                application management, document preparation, AIR services, inspection support,
                and post-licence compliance. All fees are quoted transparently upfront. For a
                complete cost estimate specific to your product, country, and manufacturing setup
                — contact our team. We will provide a full breakdown at no obligation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>BIS FMCS Licence Validity and Renewal</h2>
              <p className={styles.sectionText}>
                A BIS FMCS licence is typically granted for a period of one to two years, subject
                to satisfactory surveillance inspections and continued conformity to the applicable
                Indian Standard. The exact validity period is determined by BIS based on the
                product category and the outcome of the initial factory inspection.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Process</h3>
              <p className={styles.sectionText}>
                FMCS licence renewal must be initiated before the current licence expires. The
                renewal process involves submission of updated documents, payment of the renewal
                fee, and confirmation of continued conformity. BIS may also conduct a factory
                inspection as part of the renewal process for certain product categories.
              </p>
              <h3 className={styles.subsectionTitle}>Surveillance During Licence Period</h3>
              <p className={styles.sectionText}>
                BIS conducts market surveillance by purchasing products from retail channels and
                testing them against the applicable Indian Standard. If a product fails surveillance
                testing, the manufacturer is required to explain and rectify the non-conformance.
                Our team monitors your compliance status and ensures you are always prepared for
                surveillance activity.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Key Benefits of BIS FMCS Certification for Foreign Manufacturers
              </h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Penalties for Importing Products Without BIS FMCS Certification
              </h2>
              <p className={styles.sectionText}>
                Importing or selling notified products in India without a valid BIS licence is a
                serious violation under the BIS Act, 2016. Enforcement has increased significantly
                in recent years, with customs authorities, BIS field officers, and market
                surveillance teams actively checking compliance.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Violation</th>
                    <th scope="col">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  {PENALTY_ROWS.map((row) => (
                    <tr key={row.violation}>
                      <th scope="row">{row.violation}</th>
                      <td>{row.consequence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                The cost of getting BIS FMCS certified is always lower than the cost of dealing
                with customs holds, product destruction, and legal proceedings. Acting proactively
                is the only sensible approach for any serious international manufacturer targeting
                the Indian market.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Chinese Electronics Manufacturer Get BIS FMCS
                Certified
              </h2>
              <p className={styles.sectionText}>
                A consumer electronics manufacturer based in Shenzhen, China approached Ornate
                Quality Services after their products were held at a Mumbai customs port for the
                second time in six months. They were importing LED smart bulbs and Wi-Fi routers —
                both of which fall under mandatory BIS certification — without a valid BIS
                licence.
              </p>
              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The manufacturer had previously engaged a local Indian importer who had assured
                them that certification was not required. When BIS enforcement caught up with two
                shipments, the financial and reputational cost was significant. They needed to get
                FMCS certified quickly — and correctly — before their next shipment.
              </p>
              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                Our team conducted an emergency assessment of their product range and identified
                the applicable IS standards for both product categories. We managed the complete
                FMCS application process — from document preparation and testing coordination to
                coordinating the BIS factory inspection in Shenzhen and acting as their Authorised
                Indian Representative throughout.
              </p>
              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                Both BIS FMCS licences were granted within five months of engaging Ornate. The
                manufacturer now imports without disruption, is listed on two major Indian
                e-commerce platforms, and has since expanded their India-certified product range to
                include power banks and smart home devices.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Frequently Asked Questions — BIS FMCS Certification
              </h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Your BIS FMCS Certification Now</h2>
              <p className={styles.ctaText}>
                Ready to enter the Indian market with full BIS compliance? Contact Ornate Quality
                Services for a free consultation and a clear roadmap for your FMCS certification.
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
                          link.href === "/services/bis-fmcs-certification"
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
