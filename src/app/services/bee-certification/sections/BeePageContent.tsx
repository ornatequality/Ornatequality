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
  BEE_TOC,
  PRODUCTS_COVERED_ROWS,
  REGISTRATION_REQUIREMENTS_ROWS,
  PROCESS_STEPS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/beeContent";

const BEE_PAGE_PATH = "/services/bee-certification";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="bee"
      defaultService="BEE Certification"
      serviceOptions={[
        "BEE Certification",
        "BIS CRS Registration",
        "BIS ISI Mark Certification",
        "FMCS Certification",
        "Other",
      ]}
      successText="Our BEE certification expert will contact you within one business day."
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

export function BeePageContent() {
  const [activeId, setActiveId] = useState(BEE_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = BEE_TOC.map((item) => item.id);
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
              {BEE_TOC.map((item, i) => (
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
              <h2 className={styles.sectionTitle}>Introduction</h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    BEE Certification is an important compliance requirement for manufacturers and
                    importers dealing with electrical appliances and energy-consuming products in
                    India. Managed by the Bureau of Energy Efficiency (BEE), this certification
                    program helps consumers identify energy-efficient products through standardized
                    star labeling systems. Products with higher star ratings consume less
                    electricity, helping consumers reduce energy costs and support environmental
                    sustainability.
                  </p>
                  <p className={styles.sectionText}>
                    The BEE Star Rating Label is commonly applicable to products such as air
                    conditioners, refrigerators, ceiling fans, LED lamps, televisions, and other
                    electronic appliances notified under BEE regulations. Manufacturers must ensure
                    that their products meet the prescribed energy performance standards before
                    obtaining approval for BEE labeling.
                  </p>
                  <p className={styles.sectionText}>
                    BEE Certification not only helps businesses comply with Indian energy efficiency
                    regulations but also improves product credibility and market acceptance.
                    Certified products gain better consumer trust because energy-efficient appliances
                    are increasingly preferred in both residential and commercial markets. The
                    certification process generally includes product testing, technical
                    documentation, application submission, and approval from BEE authorities.
                  </p>
                </div>
                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="BEE certification and energy efficiency compliance"
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
                    Need help with BEE Registration, product testing, or star label approval?
                    Ornate Quality Services provides complete support for your BEE Certification
                    process in India.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-bee" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is BEE Certification?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    BEE Certification is an energy efficiency certification program managed by the
                    Bureau of Energy Efficiency under the Government of India. The certification
                    helps consumers identify energy-efficient electrical appliances through the BEE
                    Star Rating Label system. Products with higher star ratings consume less
                    electricity and offer better energy savings.
                  </p>
                  <p className={styles.sectionText}>
                    BEE Certification is applicable to various products such as air conditioners,
                    refrigerators, ceiling fans, televisions, LED lamps, and other electrical
                    appliances covered under BEE regulations. Manufacturers must test their products
                    in approved laboratories and meet prescribed energy performance standards before
                    obtaining certification.
                  </p>
                  <p className={styles.sectionText}>
                    The BEE Star Label not only ensures regulatory compliance but also helps
                    businesses improve product credibility, customer trust, and market competitiveness
                    in India.
                  </p>
                </div>
                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>★</span>
                  <span className={styles.whatIsLabel}>BEE STAR LABEL</span>
                </div>
              </div>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>BEE Certification Process (Step-by-Step)</h2>
              <p className={styles.sectionText}>
                The BEE Certification process is managed by the Bureau of Energy Efficiency to
                ensure that electrical and electronic products meet prescribed energy efficiency
                standards in India. Manufacturers and importers must complete several important steps
                before obtaining approval to use the BEE Star Rating Label on their products.
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

            <section id="products-covered" className={styles.section}>
              <h2 className={styles.sectionTitle}>Products Covered Under BEE Certification</h2>
              <p className={styles.sectionText}>
                The Bureau of Energy Efficiency (BEE) has introduced energy efficiency labeling
                programs for various electrical and electronic products sold in India. Products
                covered under BEE Certification must meet prescribed energy performance standards
                before they can receive the BEE Star Rating Label. The purpose of this certification
                is to promote energy conservation, reduce electricity consumption, and help consumers
                identify energy-efficient appliances.
              </p>
              <p className={styles.sectionText}>
                Several household and commercial electrical appliances are covered under mandatory and
                voluntary BEE labeling schemes. Common products include air conditioners,
                refrigerators, LED lamps, ceiling fans, televisions, washing machines, geysers, and
                distribution transformers. These products are tested for energy consumption and
                performance before approval is granted.
              </p>
              <p className={styles.sectionText}>
                BEE Star Ratings range from 1 Star to 5 Star, where higher star ratings indicate
                better energy efficiency and lower power consumption. Products with better energy
                performance are preferred by consumers because they help reduce electricity bills and
                support environmentally responsible usage.
              </p>
              <p className={styles.sectionText}>
                The list of products covered under BEE Certification may be updated from time to time
                by BEE authorities based on government energy conservation policies and market
                requirements. Manufacturers and importers must verify whether their products fall
                under mandatory BEE registration categories before launching products in the Indian
                market.
              </p>
              <h3 className={styles.subsectionTitle}>Products Covered Under BEE Certification</h3>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Product Category</th>
                    <th scope="col">Examples of Products</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS_COVERED_ROWS.map((row) => (
                    <tr key={row.category}>
                      <th scope="row">{row.category}</th>
                      <td>{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="registration-requirements" className={styles.section}>
              <h2 className={styles.sectionTitle}>BEE Registration Requirements</h2>
              <p className={styles.sectionText}>
                To obtain BEE Certification, manufacturers and importers must fulfill specific
                registration requirements prescribed by the Bureau of Energy Efficiency. These
                requirements help ensure that electrical and electronic products comply with energy
                efficiency standards and are eligible for the BEE Star Rating Label in India.
              </p>
              <p className={styles.sectionText}>
                One of the primary requirements is that the applicant must be a manufacturer or an
                authorized representative of the manufacturing company. The applicant must also have
                valid business registration documents, trademark details, and proper authorization for
                product registration under the BEE program.
              </p>
              <p className={styles.sectionText}>
                Product testing is another major requirement for BEE Registration. The product must
                be tested in a NABL-accredited or BEE-recognized laboratory to verify energy
                consumption and performance standards. Valid laboratory test reports are mandatory
                during the application process.
              </p>
              <p className={styles.sectionText}>
                Manufacturers are also required to provide technical product specifications, model
                details, energy performance data, user manuals, and labeling information. In addition,
                applicants must submit company-related documents such as GST registration,
                incorporation certificates, factory details, and authorized signatory documents.
              </p>
              <p className={styles.sectionText}>
                The applicant must register on the official BEE online portal and submit the
                application along with supporting documents and applicable government fees. BEE
                authorities review the application, technical reports, and compliance details before
                granting approval.
              </p>
              <p className={styles.sectionText}>
                For products covered under mandatory labeling schemes, compliance with BEE standards
                is legally required before the products can be sold in the Indian market. Manufacturers
                must also ensure that products continue to meet prescribed energy efficiency standards
                after registration approval.
              </p>
              <h3 className={styles.subsectionTitle}>BEE Registration Requirements</h3>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Requirement Type</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {REGISTRATION_REQUIREMENTS_ROWS.map((row) => (
                    <tr key={row.type}>
                      <th scope="row">{row.type}</th>
                      <td>{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for BEE Certification</h2>
              <p className={styles.sectionText}>
                Manufacturers applying for BEE Certification must submit various documents to the
                Bureau of Energy Efficiency during the registration process. These documents help
                verify the applicant&apos;s business details, product specifications, and compliance
                with prescribed energy efficiency standards.
              </p>
              <ul className={styles.bulletList}>
                <li>Company incorporation certificates, GST registration, and trademark authorization</li>
                <li>Identity proof of the authorized signatory</li>
                <li>Complete product details — model numbers, technical specifications, catalogues, user manuals</li>
                <li>
                  Valid product test reports from NABL-accredited or BEE-recognized laboratories
                </li>
                <li>Factory address proof, authorization letters, and brand ownership documents</li>
                <li>Product labeling details as per BEE requirements</li>
              </ul>
              <p className={styles.sectionText}>
                Additional documents may include factory address proof, authorization letters, brand
                ownership documents, and product labeling details. In some cases, BEE authorities may
                request further technical information depending on the product category and applicable
                certification requirements. Proper documentation helps ensure smooth processing of the
                application and reduces delays during approval.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>BEE Certification Cost</h2>
              <p className={styles.sectionText}>
                The cost of BEE Certification depends on several factors such as the product
                category, applicable star rating program, laboratory testing requirements, number of
                product models, and government registration fees. The Bureau of Energy Efficiency (BEE)
                charges official fees for product registration, label approval, and certification
                processing.
              </p>
              <p className={styles.sectionText}>
                One of the major expenses involved in BEE Registration is product testing. Manufacturers
                must get their products tested in NABL-accredited or BEE-recognized laboratories to
                verify energy efficiency and performance standards. Testing charges vary depending on
                the type of product and the complexity of testing procedures.
              </p>
              <p className={styles.sectionText}>
                Apart from testing costs, businesses may also incur expenses related to documentation
                preparation, online registration, product labeling, and consultancy support if
                professional assistance is required. Renewal fees and additional charges may also apply
                for multiple product models or updated star labeling requirements.
              </p>
              <p className={styles.sectionText}>
                The total BEE Certification cost can differ from one product category to another.
                Therefore, manufacturers should first identify applicable BEE requirements and testing
                standards to estimate the overall certification expenses accurately.
              </p>
            </section>

            <section id="timeline" className={styles.section}>
              <h2 className={styles.sectionTitle}>Timeline to Obtain BEE License</h2>
              <p className={styles.sectionText}>
                The timeline for obtaining a BEE Certification license depends on factors such as
                product category, laboratory testing, document preparation, and application review by
                the Bureau of Energy Efficiency. In most cases, the complete BEE Registration process
                may take approximately 4 to 8 weeks, depending on the accuracy of documentation and
                testing requirements.
              </p>
              <p className={styles.sectionText}>
                One of the major factors affecting the timeline is product testing in NABL-accredited
                or BEE-recognized laboratories. Delays may also occur if additional technical
                clarifications or corrections are required during the application review process.
              </p>
              <p className={styles.sectionText}>
                Manufacturers can reduce approval delays by preparing proper documentation, submitting
                accurate product details, and ensuring compliance with applicable energy efficiency
                standards. Professional guidance and timely coordination with laboratories and BEE
                authorities can also help speed up the certification process.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Validity &amp; Renewal of BEE Certification</h2>
              <p className={styles.sectionText}>
                BEE Certification issued by the Bureau of Energy Efficiency is generally valid for a
                specific period based on the applicable product category and star labeling scheme.
                Manufacturers are required to maintain compliance with prescribed energy efficiency
                standards throughout the validity period.
              </p>
              <p className={styles.sectionText}>
                Before the certification expires, businesses must apply for renewal by submitting
                updated documents, product details, and applicable renewal fees through the official
                BEE portal. In some cases, updated laboratory test reports may also be required to
                verify continued compliance with revised energy efficiency standards.
              </p>
              <p className={styles.sectionText}>
                Manufacturers must ensure that certified products continue to meet BEE performance
                requirements even after approval. Timely renewal helps businesses avoid interruptions
                in product sales, labeling permissions, and regulatory compliance in the Indian market.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Benefits of BEE Certification</h2>
              <p className={styles.sectionText}>
                BEE Certification offers several advantages for manufacturers, businesses, and
                consumers by promoting energy-efficient products in the Indian market. Issued by the
                Bureau of Energy Efficiency, the certification helps consumers identify appliances
                that consume less electricity and provide better energy savings.
              </p>
              <p className={styles.sectionText}>
                One of the major benefits of BEE Certification is improved consumer trust. Products
                carrying higher BEE Star Ratings are often preferred because they help reduce
                electricity bills and offer better long-term performance. This increases product
                credibility and strengthens brand reputation in the market.
              </p>
              <p className={styles.sectionText}>
                BEE Certification also helps businesses comply with Indian energy efficiency
                regulations. Many electrical appliances require mandatory BEE labeling before they can
                be sold in India. Compliance helps manufacturers avoid legal issues and market
                restrictions.
              </p>
              <p className={styles.sectionText}>
                Another important advantage is competitive market positioning. Energy-efficient products
                gain better acceptance among consumers, distributors, and commercial buyers. In addition,
                reduced energy consumption supports environmental sustainability by lowering carbon
                emissions and promoting responsible energy usage.
              </p>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.sectionText}>
                Overall, BEE Certification helps businesses improve market opportunities, customer
                confidence, and regulatory compliance while supporting national energy conservation
                goals.
              </p>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Non-Compliance</h2>
              <p className={styles.sectionText}>
                Non-compliance with BEE Certification requirements can lead to legal and regulatory
                actions by the Bureau of Energy Efficiency and other government authorities.
                Manufacturers or importers selling products covered under mandatory BEE labeling
                schemes without proper registration may face penalties, fines, or restrictions on product
                sales in the Indian market.
              </p>
              <p className={styles.sectionText}>
                Using incorrect, fake, or unauthorized BEE Star Labels is considered a violation of
                applicable regulations and may result in legal action or product seizure. Authorities
                may also conduct market inspections and product verification checks to identify
                non-compliant products.
              </p>
              <p className={styles.sectionText}>
                In addition to financial penalties, businesses may suffer reputational damage, loss of
                consumer trust, and disruptions in market operations. Therefore, obtaining and
                maintaining valid BEE Certification is essential for ensuring smooth business activities
                and regulatory compliance in India.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>Case Study (Real Example)</h2>
              <p className={styles.sectionText}>
                A home appliance manufacturer in India planned to launch a new range of
                energy-efficient air conditioners in the market. Since air conditioners fall under the
                mandatory BEE Star Labeling scheme, the company needed approval from the Bureau of
                Energy Efficiency before selling the products.
              </p>
              <p className={styles.sectionText}>
                Initially, the manufacturer faced challenges related to energy performance testing,
                technical documentation, and understanding the applicable BEE standards. The company
                submitted product samples to a NABL-accredited laboratory for testing and worked on
                improving product efficiency to achieve a higher star rating.
              </p>
              <p className={styles.sectionText}>
                After completing testing and documentation, the manufacturer registered on the BEE
                portal and submitted the application along with required reports and government fees.
                Following technical verification and approval, the company received permission to use
                the BEE Star Rating Label on its products.
              </p>
              <p className={styles.sectionText}>
                As a result, the certified products gained better customer trust, increased market
                demand, and improved competitiveness among other brands. The higher energy efficiency
                rating also helped consumers reduce electricity consumption and operating costs.
              </p>
            </section>

            <section id="conclusion" className={styles.section}>
              <h2 className={styles.sectionTitle}>Conclusion</h2>
              <p className={styles.sectionText}>
                BEE Certification is an important compliance requirement for manufacturers and importers
                dealing with energy-consuming products in India. Issued by the Bureau of Energy
                Efficiency, the certification helps ensure energy efficiency, regulatory compliance, and
                better consumer trust through the BEE Star Rating Label system.
              </p>
              <p className={styles.sectionText}>
                From product testing and technical documentation to application approval and labeling,
                the BEE Registration process requires proper planning and compliance management.
                Certified products not only help consumers save electricity costs but also improve
                market credibility and business competitiveness.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions (FAQs)</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for BEE Certification</h2>
              <p className={styles.ctaText}>
                Need help with BEE Registration, product testing, documentation, or star label
                approval? Connect with Ornate Quality Services for complete support and professional
                guidance for your BEE Certification process in India.
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
                          link.href === BEE_PAGE_PATH ? styles.servicesLinkActive : ""
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
