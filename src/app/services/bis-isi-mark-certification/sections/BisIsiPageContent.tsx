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
  BIS_ISI_TOC,
  MANUFACTURER_IMPORTANCE,
  PROCEDURE_STEPS,
  PROCESS_STEPS,
  HOW_TO_GET_STEPS,
  MANDATORY_PRODUCTS,
  PRODUCTS_LIST,
  BENEFITS_ITEMS,
  COMPARISON_ROWS,
  DOCUMENTS_INDIA_SECTIONS,
  WHY_ORNATE_ISI,
  FAQ_ITEMS,
} from "../data/bisIsiContent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
  };
  return <>{icons[type] ?? icons.shield}</>;
}

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="isi"
      defaultService="BIS ISI Mark Certification"
      serviceOptions={[
        "BIS ISI Mark Certification",
        "BIS CRS Registration",
        "FMCS Certification",
        "WPC-ETA Approval",
        "Other",
      ]}
      successText="Our ISI certification expert will contact you within one business day."
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

export function BisIsiPageContent() {
  const [activeId, setActiveId] = useState(BIS_ISI_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BIS_ISI_TOC.map((item) => item.id);
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
              {BIS_ISI_TOC.map((item, i) => (
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
                ISI Certification – Complete Guide to Process, Requirements &amp; Benefits
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    The ISI Certification is the standard quality assurance mark from the Bureau of
                    Indian Standards (BIS). Safety standards and quality standardisations as per the
                    specifications of the Indian government must be met for any product to be
                    accepted in the Indian market.
                  </p>
                  <p className={styles.sectionText}>
                    Ornate Quality Services Pvt. Ltd. provides complete end-to-end support for ISI
                    Mark certification — from identifying the correct Indian Standard (IS code) and
                    lab testing to documentation, factory inspection, and certificate issuance.
                  </p>
                </div>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="BIS ISI certification office building"
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
                    ISI Certification is a long-term investment in brand name and regulatory
                    compliance. Our objective is to help manufacturers obtain the ISI Mark with
                    complete regulatory confidence and transparent guidance at every step.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-isi" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is ISI Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    This certification guarantees that a product is safe for consumer use after
                    examination through rigorous testing. It is an essential benchmark among various
                    industries, including electrical, mechanical, and household goods, for maintaining
                    quality and reliability.
                  </p>
                  <p className={styles.sectionText}>
                    For manufacturers, ISI Certification is not just compliance but an assurance of
                    trust. An ISI-marked product guarantees customers a reliable and safe product.
                    Specific industries require ISI Certification per regulations; hence, it
                    becomes a critical determinant of successful legal and commercial operations.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>✓</span>
                  <span className={styles.whatIsLabel}>ISI MARK</span>
                </div>
              </div>
            </section>

            <section id="isi-registration" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is the ISI Registration?</h2>
              <p className={styles.sectionText}>
                The Bureau of Indian Standards (BIS) ISI registration certification process
                guarantees a product&apos;s compliance with Indian safety, quality, and performance
                criteria. Any manufacturer wishing to sell their products in India while earning
                customers&apos; confidence and meeting legal standards must apply for ISI
                registration.
              </p>
              <p className={styles.sectionText}>
                Manufacturers that enroll with ISI are liable to factory inspections, compliance
                assessments, and product evaluations in BIS-approved laboratories. A product that
                fulfills all BIS criteria receives an ISI Mark, signifying its reliability, safety,
                and adherence to national standards.
              </p>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why is ISI Certification Important?</h2>
              <p className={styles.sectionText}>
                The ISI certification serves many purposes. First, it gives consumers a safety net
                that ensures all their products are of standard quality and safety. Second, it
                persuades manufacturers to improve their production facilities to meet national
                standards. Lastly, it reduces market risks by eliminating poor-quality and
                substandard products, eventually augmenting consumer trust.
              </p>
              <p className={styles.sectionText}>
                Many products, such as cement, steel, electrical appliances, automotive parts, etc.,
                must be certified with an ISI mark. Failing this, a legal penalty, fine, or product
                recall would result if sold within India. Consequently, this enhances a brand&apos;s
                worth and adds competitiveness to the market.
              </p>
            </section>

            <section id="isi-mark" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is the ISI Mark?</h2>
              <p className={styles.sectionText}>
                The ISI Mark symbolises the quality and safety that the BIS grants. It denotes that
                the product conforms to the necessary Indian Standard (IS) specifications. The IS
                mark is adhered to on various consumer and industrial products to ensure compliance
                with government regulations.
              </p>
              <p className={styles.sectionText}>
                These products carrying the ISI Mark undergo stringent tests and inspections. This
                mark thus ensures the customers that the product they buy complies with the
                laid-down standards. These products cannot be sold in India if they do not carry the
                ISI mark.
              </p>
            </section>

            <section id="indian-manufacturers" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                ISI Mark Certification for Indian Manufacturers
              </h2>
              <p className={styles.sectionText}>
                The ISI mark stands for Indian Standards Institute. It is a quality mark
                certification that shows that all products made in India fall within the prescribed
                Indian Standards regarding quality and safety of the products. By passing strict
                quality and safety performance tests, which are followed by final approval, the ISI
                mark may become a mark of safety and reliability for consumers.
              </p>
              <p className={styles.sectionText}>
                The ISI mark to Indian manufacturers is more than regulatory compliance; it
                establishes and builds consumer trust and market credibility and broadens business
                opportunities. A list of products in India — from electricals and steel to cement,
                piped drinking water, LPG cylinders, toys, and automobile parts — require ISI
                certification when marketed.
              </p>
            </section>

            <section id="why-important-manufacturers" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Why is the ISI Mark Important for Indian Manufacturers?
              </h2>
              {MANUFACTURER_IMPORTANCE.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.subsectionTitle}>{item.title}</h3>
                  <p className={styles.sectionText}>{item.text}</p>
                </div>
              ))}
            </section>

            <section id="procedure" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Procedure for Indian Manufacturers on Obtaining the ISI Mark
              </h2>
              {PROCEDURE_STEPS.map((step, i) => (
                <div key={step.title}>
                  <h3 className={styles.subsectionTitle}>
                    {i + 1}. {step.title}
                  </h3>
                  <p className={styles.sectionText}>{step.text}</p>
                </div>
              ))}
            </section>

            <section id="challenges" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Challenges Faced by Indian Manufacturers in ISI Certification
              </h2>
              <ul className={styles.bulletList}>
                <li>
                  <strong>Complex Documentation Requirements</strong> — The time-consuming nature of
                  the application process is due to the fact that manufacturers are required to
                  provide a range of technical documents.
                </li>
                <li>
                  <strong>Stringent Testing Standards</strong> — Failure to comply with all safety
                  requirements and performance criteria will lead to rejection.
                </li>
                <li>
                  <strong>Regular Surveillance and Compliance Checks</strong> — The BIS also
                  conducts random inspections to determine whether manufacturers adhere to quality
                  standards after certification.
                </li>
              </ul>
            </section>

            <section id="difference" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Difference Between ISI Mark and BIS Certification
              </h2>
              <p className={styles.sectionText}>
                Although there is often confusion between the ISI Mark and BIS Certification, they
                have different connotations. ISI Mark is for products that have to meet a specific
                Indian Standard, while the term BIS Certification is broader and encompasses various
                certification schemes.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">ISI Mark</th>
                    <th scope="col">BIS Certification</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.isi}</td>
                      <td>{row.bis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="requirements" className={styles.section}>
              <h2 className={styles.sectionTitle}>Basic Requirements for ISI Certification</h2>
              <p className={styles.sectionText}>
                The manufacturer shall test their product to see whether it qualifies for ISI
                Certification. Every product must comply with the relevant Indian Standard (IS)
                prescribed by the Bureau of Indian Standards (BIS). The product must meet all
                safety, quality, and performance specifications as laid down under the respective
                Indian Standards before it can be certified.
              </p>
              <p className={styles.sectionText}>
                It must also be a facility equipped with an appropriate quality control system. BIS
                officials will inspect the factory to check whether the manufacturer follows a
                proper standard process, ensures the quality of raw materials, and has a self-testing
                mechanism to ensure product consistency. Any deviations from norms can lead to
                rejection or suspension of certification.
              </p>
              <p className={styles.sectionText}>
                Another essential requirement is testing the product in a BIS-recognized
                laboratory. The test must show that the product meets all prescribed regulations.
                Only after the testing and inspection are complete can the manufacturer be granted
                ISI Certification. Technical and random audits will also be conducted in flux.
              </p>
            </section>

            <section id="mandatory-products" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Mandatory Products Requiring ISI Certification in India
              </h2>
              <p className={styles.sectionText}>
                Certain products are designated under law for ISI Certification, which must be
                executed before sale in the Indian market. Manufacturers must navigate these
                requirements to obtain marketing approval, avoid litigation threats, and protect
                their brand name.
              </p>
              <div className={styles.productsGrid}>
                {MANDATORY_PRODUCTS.map((product) => (
                  <div key={product.label} className={styles.productCard}>
                    <span className={styles.productEmoji} aria-hidden="true">
                      {product.emoji}
                    </span>
                    <span className={styles.productLabel}>{product.label}</span>
                  </div>
                ))}
              </div>
              <ul className={styles.bulletList}>
                <li>
                  Electrical/Electronic appliances such as wires, cables, switches, and motors
                </li>
                <li>Construction materials, such as cement, steel, and roofing sheets</li>
                <li>Packaged drinking and mineral water</li>
                <li>Gas stoves and LPG cylinders</li>
                <li>Automobiles and accessories such as helmets and tyres</li>
                <li>Household articles such as pressure cookers and water heaters</li>
                <li>Toys and products for children</li>
              </ul>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                ISI Certification Process – Step-by-Step Guide
              </h2>
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
              <h3 className={styles.subsectionTitle}>1. Identify Product Category</h3>
              <p className={styles.sectionText}>
                Step one is to check whether the product is included in the mandatory ISI
                Certification list. If so, certification is a compulsion.
              </p>
              <h3 className={styles.subsectionTitle}>2. Submit Application</h3>
              <p className={styles.sectionText}>
                Manufacturers must apply via the BIS portal and provide details about their product,
                company, and manufacturing process.
              </p>
              <h3 className={styles.subsectionTitle}>3. Product Testing</h3>
              <p className={styles.sectionText}>
                The product gets tested in a BIS-accredited laboratory, ensuring quality and safety
                standards are fulfilled. Based on the results, the next step is determined.
              </p>
              <h3 className={styles.subsectionTitle}>4. Factory Inspection</h3>
              <p className={styles.sectionText}>
                BIS officials visit the factory to assess production processes, types of raw
                materials, and quality control mechanisms.
              </p>
              <h3 className={styles.subsectionTitle}>5. Certification Approval</h3>
              <p className={styles.sectionText}>
                The ISI Certification will be issued once factory inspection and test reports are
                satisfactory to BIS standards. The manufacturer can then apply the ISI Mark on the
                product.
              </p>
            </section>

            <section id="how-to-get" className={styles.section}>
              <h2 className={styles.sectionTitle}>How to Get ISI Certification in India?</h2>
              <p className={styles.sectionText}>
                The ISI certification in India is obtained from a structured process involving
                application submissions, tests, and factory inspections. The following is a complete
                procedure for obtaining the certification:
              </p>
              <ul className={styles.bulletList}>
                {HOW_TO_GET_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Benefits of ISI Certification</h2>
              <p className={styles.sectionText}>
                Certification from ISI denotes product quality, safety, and conformity to Indian
                standards. Therefore, consumer confidence emerges, thereby making the product more
                marketable. It gives the manufacturers a competitive edge, improves credibility,
                and allows them to bid for government tenders and bulk orders.
              </p>
              <p className={styles.sectionText}>
                ISI certifications improve manufacturing processes through strict quality control
                implementation. They minimise defects, increase productivity, and sustain consistent
                performance. They strengthen the promise of reliability and improve brand image and
                long-term viability.
              </p>
              <div className={styles.importanceGrid}>
                {BENEFITS_ITEMS.map((item) => (
                  <div key={item.label} className={styles.importanceItem}>
                    <div className={styles.importanceCircle}>
                      <ImportanceIcon type={item.icon} />
                    </div>
                    <span className={styles.importanceLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for ISI Certification</h2>
              <p className={styles.sectionText}>
                To minimize the hassle in applying for licenses, the manufacturers must necessarily
                provide the following documents:
              </p>
              <ul className={styles.bulletList}>
                <li>Application form — filling and signing in all respects</li>
                <li>Business registration documents — for example, company incorporation certificate</li>
                <li>Layout and details of the manufacturing unit</li>
                <li>Technical specifications and drawings of products</li>
                <li>Test reports from laboratories recognised by BIS</li>
                <li>Quality control plan and procedures</li>
                <li>List of machinery and equipment</li>
                <li>Proof of the premises — ownership or lease documents</li>
                <li>Details of the authorised signatory</li>
                <li>Flow chart of the manufacturing process</li>
              </ul>
            </section>

            <section id="products-list" className={styles.section}>
              <h2 className={styles.sectionTitle}>List of Products Under ISI Certification</h2>
              <p className={styles.sectionText}>
                The ISI Certification is one of the requirements for many products since they are
                required to conform to the government&apos;s safety standards. The following are
                among the essential products:
              </p>
              <ul className={styles.bulletList}>
                {PRODUCTS_LIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity and Renewal of ISI Certification</h2>
              <p className={styles.sectionText}>
                While the ISI certification can be valid anywhere from 1 to 2 years, usually
                depending on the product category and compliance status, manufacturers must renew
                their certifications to use the ISI Mark before the expiry date on the certificate.
                Renewal of accreditation generally means retesting the product in a laboratory
                recognised by BIS and undergoing a factory inspection to ensure compliance with
                quality standards.
              </p>
              <p className={styles.sectionText}>
                A delay in certification renewal may result in the suspension of the ISI Mark, making
                it illegal to sell the product under this particular certification. BIS conducts
                regular audits to ensure that manufacturers maintain compliance. Any deviation from
                the prescribed standards may lead to the cancellation of the certificate.
              </p>
            </section>

            <section id="documents-india" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Documents Required for ISI Certification in India
              </h2>
              <p className={styles.sectionText}>
                Applicants for ISI certification must include essential documents as part of their
                application. These documents help the Bureau of Indian Standards verify the
                applicant&apos;s authority and ensure compliance with Indian Standards. The
                application may be rejected or delayed in the absence of these documents.
              </p>
              {DOCUMENTS_INDIA_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h3 className={styles.subsectionTitle}>{section.title}</h3>
                  <ul className={styles.bulletList}>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section id="why-ornate" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Choose Ornate Quality Services?</h2>
              <p className={styles.sectionText}>
                At Ornate Quality Services, we have taken a step forward in making ISI
                Certification and its renewals elementary processes solely to help your company
                comply with Indian standards. Our specialist team handles everything from document
                preparation to lab test coordination to support during factory inspections, so
                there is minimal delay and maximum chances of approval.
              </p>
              <ul className={styles.bulletList}>
                {WHY_ORNATE_ISI.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="final-thoughts" className={styles.section}>
              <h2 className={styles.sectionTitle}>Final Thoughts</h2>
              <p className={styles.sectionText}>
                Packaged products in India must meet various safety, quality, and performance
                requirements. The ISI Certification scheme is an assurance for the consumers that
                they will not be victimized by inferior goods, and it also helps manufacturers build
                goodwill that facilitates further marketing of their products.
              </p>
              <p className={styles.sectionText}>
                ISI Certification is a long-term investment in brand name and regulatory compliance
                for makers. To get your product ISI certified, you must complete the process
                correctly and satisfy all the requirements.
              </p>
              <p className={styles.sectionText}>
                <strong>Related ISI Certifications:</strong> For specific product certifications,
                check out our detailed guides on ISI Certification for Bags, ISI Certification for
                Toys, and ISI Mark for Foreign Manufacturers.
              </p>
            </section>

            <section id="get-certified" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Your ISI Certification Now!</h2>
              <p className={styles.ctaText}>
                Avoid compliance risks and legal penalties. Contact Ornate Quality Services for a
                hassle-free ISI certification process!
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

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <FaqAccordion />
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
                          link.href === "/services/bis-isi-mark-certification"
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
