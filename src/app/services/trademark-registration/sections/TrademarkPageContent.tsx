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
  TRADEMARK_TOC,
  TRADEMARK_TYPES_ROWS,
  PROCESS_STEPS,
  REQUIREMENTS_BULLETS,
  DOCUMENTS_ROWS,
  PENALTIES_ROWS,
  BENEFITS_ITEMS,
  FAQ_ITEMS,
} from "../data/trademarkContent";

const TRADEMARK_PAGE_PATH = "/services/trademark-registration";


function CallbackForm() {
  return (
    <ServiceCallbackForm
      idPrefix="tm"
      defaultService="Trademark Registration"
      serviceOptions={[
        "Trademark Registration",
        "BIS CRS Registration",
        "BEE Certification",
        "EPR Registration",
        "GeM Portal Registration",
        "LMPC Registration",
        "IEC Registration",
        "Other",
      ]}
      successText="Our trademark expert will contact you within one business day."
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

export function TrademarkPageContent() {
  const [activeId, setActiveId] = useState(TRADEMARK_TOC[0].id);
  const tocListRef = useActiveTocScroll(activeId);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  }, []);

  useEffect(() => {
    const sectionIds = TRADEMARK_TOC.map((item) => item.id);
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
              {TRADEMARK_TOC.map((item, i) => (
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
                Trademark Registration in India — Complete Guide to Protecting Your Brand Name and Logo
              </h2>
              <div className={styles.introGrid}>
                <div className={styles.introTextCol}>
                  <p className={styles.sectionText}>
                    Your brand name is one of your most valuable business assets. It is what
                    customers recognise, trust, and return to. It is what distinguishes your products
                    from every competitor in the market. And without a registered trademark, it is
                    also one of the easiest things for someone else to copy.
                  </p>
                  <p className={styles.sectionText}>
                    Trademark Registration in India gives you the exclusive legal right to use your
                    brand name, logo, sl
                    
                    ogan, or any other distinctive mark in connection with your
                    goods or services. A registered trademark — marked with the ® symbol — tells
                    the world that your brand is protected, that you own it, and that anyone who uses
                    it without your permission is breaking the law.
                  </p>
                  <p className={styles.sectionText}>
                    At Ornate Quality Services, we help manufacturers, importers, startups, and
                    established businesses register their trademarks in India quickly and correctly.
                    In this guide, we explain exactly what trademark registration is, who needs it, how
                    the process works, how much it costs, and what happens if you delay.
                  </p>
                </div>

                <div className={styles.introImageWrap}>
                  <Image
                    src={buildingImage}
                    alt="Trademark registration and brand protection support"
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
                    Building a brand in India? Contact our team for a free trademark consultation
                    and find out how to protect it before someone else does.
                  </p>
                </blockquote>
              </div>
            </section>

            <section id="what-is-trademark" className={styles.section}>
              <h2 className={styles.sectionTitle}>What is Trademark Registration?</h2>
              <div className={styles.splitGrid}>
                <div>
                  <p className={styles.sectionText}>
                    A trademark is any word, name, logo, symbol, device, label, signature, or combination
                    thereof that is used to identify goods or services of one business and distinguish them
                    from those of others. In India, trademarks are governed by the Trade Marks Act, 1999,
                    and administered by the Office of the Controller General of Patents, Designs and Trade
                    Marks (CGPDTM).
                  </p>
                  <p className={styles.sectionText}>
                    Trademark Registration is the process of officially recording your trademark with the
                    Trade Marks Registry — securing your exclusive right to use that mark in connection with
                    the specific goods or services for which it is registered. Once registered, your trademark
                    is valid for 10 years and can be renewed indefinitely every 10 years.
                  </p>
                  <p className={styles.sectionText}>
                    In India, trademark protection is available for a wide range of marks — including brand
                    names, product names, logos, slogans, sounds, colours, and even the shape of packaging.
                    A registered trademark gives you the right to use the ® symbol, to take legal action against
                    infringers, and to license your brand.
                  </p>
                  <p className={styles.sectionText}>
                    Using a trademark without registration gives you some common law rights in India, but only
                    a registered trademark gives you the full force of the Trade Marks Act — including the right
                    to sue for infringement, claim damages, and have infringing goods seized.
                  </p>
                </div>

                <div className={styles.whatIsVisual} aria-hidden="true">
                  <span className={styles.whatIsIcon}>TM</span>
                  <span className={styles.whatIsLabel}>TRADEMARK PROTECTION</span>
                </div>
              </div>
            </section>

            <section id="importance" className={styles.section}>
              <h2 className={styles.sectionTitle}>Why Trademark Registration Is Essential for Your Business</h2>
              <h3 className={styles.subsectionTitle}>Exclusive Legal Right to Your Brand</h3>
              <p className={styles.sectionText}>
                Trademark registration gives you the exclusive right to use your brand name or logo for the specific
                goods and services you register it under — across all of India. Without registration, anyone can use a
                similar name or logo, and your ability to stop them is limited and legally uncertain.
              </p>

              <h3 className={styles.subsectionTitle}>Protection Against Copycats and Infringers</h3>
              <p className={styles.sectionText}>
                India's marketplace — both online and offline — is full of businesses that copy successful brand names and
                logos. A registered trademark gives you legal tools to stop infringers, including cease and desist notices,
                court orders, and criminal complaints under the Trade Marks Act.
              </p>

              <h3 className={styles.subsectionTitle}>Essential for E-Commerce Brand Protection</h3>
              <p className={styles.sectionText}>
                Amazon India, Flipkart, and other e-commerce platforms require trademark registration to act against counterfeiters
                and unauthorised sellers. Without a registered trademark, platforms cannot take action effectively on your behalf.
              </p>

              <h3 className={styles.subsectionTitle}>Builds Business Value and Credibility</h3>
              <p className={styles.sectionText}>
                A registered trademark is an intellectual property asset. It increases business valuation, strengthens investor
                due diligence, and makes your brand more attractive for partners, distributors, and licensees.
              </p>

              <h3 className={styles.subsectionTitle}>Foundation for International Expansion</h3>
              <p className={styles.sectionText}>
                If you plan to expand globally, Indian trademark registration is the first step. It establishes your priority date and
                supports international trademark applications under the Madrid Protocol.
              </p>
            </section>

            <section id="what-can-be" className={styles.section}>
              <h2 className={styles.sectionTitle}>What Can Be Registered as a Trademark in India?</h2>
              <p className={styles.sectionText}>
                The Trade Marks Act, 1999, allows registration of a wide range of marks. The following table covers the most common types
                of trademarks registered in India and examples of each.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Type of Trademark</th>
                    <th scope="col">Description</th>
                    <th scope="col">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  {TRADEMARK_TYPES_ROWS.map((row) => (
                    <tr key={row.type}>
                      <th scope="row">{row.type}</th>
                      <td>{row.description}</td>
                      <td>{row.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.sectionText}>
                Not every mark can be registered. Generic words, descriptive terms, geographical names, and marks that are identical or
                confusingly similar to existing registered trademarks generally cannot be registered. We run a thorough trademark search
                before filing to assess registrability.
              </p>
            </section>

            <section id="process" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Registration Process in India — Step by Step</h2>
              <p className={styles.sectionText}>
                The trademark registration process is managed by the Trade Marks Registry under CGPDTM. Applications are filed online through
                the IP India portal.
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
              <h2 className={styles.sectionTitle}>Trademark Registration Requirements in India</h2>
              <ul className={styles.bulletList}>
                {REQUIREMENTS_BULLETS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.sectionText}>
                Prior use vs proposed use: a trademark application can be filed based on prior use (used in trade) or on a proposed to be used basis.
                Our team advises on the best basis for your specific situation.
              </p>
            </section>

            <section id="documents" className={styles.section}>
              <h2 className={styles.sectionTitle}>Documents Required for Trademark Registration</h2>
              <p className={styles.sectionText}>
                The following documents are required for trademark registration in India. Requirements vary slightly based on entity type
                and whether the application is based on prior use or proposed use.
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
                We provide a precise document checklist based on your applicant type and filing basis, and review documents for accuracy
                before submission.
              </p>
            </section>

            <section id="cost" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Registration Cost in India</h2>
              <p className={styles.sectionText}>
                Trademark registration is among the most affordable registrations for MSMEs and startups in India.
              </p>
              <h3 className={styles.subsectionTitle}>Government Filing Fee</h3>
              <p className={styles.sectionText}>
                The government fee is INR 4,500 per class for individuals, sole proprietors, MSMEs, startups, and small enterprises with Udyam
                Registration. For companies and large entities, the fee is INR 9,000 per class. These fees are payable at filing time and are non-refundable.
              </p>
              <h3 className={styles.subsectionTitle}>Multi-Class Strategy</h3>
              <p className={styles.sectionText}>
                Many businesses register only one class and later discover their brand is unprotected in adjacent categories. We advise on a multi-class
                strategy to give comprehensive protection from the outset.
              </p>
              <h3 className={styles.subsectionTitle}>Professional Service Fees</h3>
              <p className={styles.sectionText}>
                Ornate Quality Services charges a transparent, fixed professional fee for search, class identification, application preparation, online filing,
                and response drafting if required.
              </p>
              <h3 className={styles.subsectionTitle}>Expedited Examination</h3>
              <p className={styles.sectionText}>
                The Trade Marks Registry offers expedited examination for an additional government fee, allowing faster examination than the standard queue.
                We advise whether expedited examination is suitable for your situation.
              </p>
            </section>

            <section id="validity" className={styles.section}>
              <h2 className={styles.sectionTitle}>Trademark Registration Validity and Renewal</h2>
              <p className={styles.sectionText}>
                A registered trademark in India is valid for 10 years from the date of filing of the application (not from the registration date). This
                backdates protection to the filing date.
              </p>
              <h3 className={styles.subsectionTitle}>Renewal Every 10 Years</h3>
              <p className={styles.sectionText}>
                Trademarks must be renewed every 10 years. Renewal applications should be filed within 6 months before expiry (or within 6 months after
                expiry with a surcharge). Non-renewed trademarks are removed from the register.
              </p>
              <h3 className={styles.subsectionTitle}>Non-Use and Cancellation</h3>
              <p className={styles.sectionText}>
                A registered trademark can be removed if it has not been used continuously for 5 years. Maintaining evidence of use (invoices, packaging,
                advertising, and commercial records) helps defend against cancellation challenges.
              </p>
            </section>

            <section id="benefits" className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Benefits of Trademark Registration for Your Business</h2>
              <ul className={styles.bulletList}>
                {BENEFITS_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="penalties" className={styles.section}>
              <h2 className={styles.sectionTitle}>Penalties for Trademark Infringement in India</h2>
              <p className={styles.sectionText}>
                The Trade Marks Act, 1999, provides civil and criminal remedies. Trademark owners have powerful legal tools for enforcement.
              </p>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th scope="col">Using / Violation</th>
                    <th scope="col">Remedy / Penalty</th>
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
                Trademark owners can approach appellate forums and High Courts for interim injunctions. When pursued properly,
                enforcement options like Anton Piller orders can help stop infringement effectively.
              </p>
            </section>

            <section id="case-study" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Real Example — How We Helped a Delhi FMCG Brand Protect Its Name Before a Copycat Did
              </h2>
              <p className={styles.sectionText}>
                A Delhi-based FMCG startup that manufactured and sold natural personal care products under a distinctive brand name approached
                Ornate Quality Services after discovering that a similar brand name had recently appeared on Amazon India — selling similar products
                at lower prices and designed to capitalise on the recognition built over three years of marketing investment.
              </p>

              <h3 className={styles.subsectionTitle}>The Challenge</h3>
              <p className={styles.sectionText}>
                The startup had been using their brand name for three years but had never registered it as a trademark. The copycat brand also
                had not registered the similar name either — creating a race at the Trade Marks Registry.
              </p>

              <h3 className={styles.subsectionTitle}>What We Did</h3>
              <p className={styles.sectionText}>
                We conducted an immediate trademark search confirming that neither the exact name nor the similar name was registered in relevant classes.
                We prepared the application on an urgent basis, filed within 48 hours, and secured the priority filing date. We also filed a complaint with Amazon
                India's brand protection team with evidence of copying.
              </p>

              <h3 className={styles.subsectionTitle}>The Result</h3>
              <p className={styles.sectionText}>
                The startup secured a filing date ahead of any application by the copycat. Amazon removed the infringing listing within 10 days. The trademark is
                now registered in all three classes and the business displays the ® symbol on packaging and marketing materials. They are also enrolled in Amazon's
                Brand Registry for additional automated protection.
              </p>
            </section>

            <section id="faq" className={styles.section}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions — Trademark Registration</h2>
              <FaqAccordion />
            </section>

            <section id="get-started" className={`${styles.section} ${styles.ctaSection}`}>
              <h2 className={styles.sectionTitle}>Get Expert Assistance for Trademark Registration</h2>
              <p className={styles.ctaText}>
                Need help with trademark search, class identification, IP India filing, examination responses, or opposition defence? Connect with Ornate
                Quality Services for complete support.
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
                          link.href === TRADEMARK_PAGE_PATH ? styles.servicesLinkActive : ""
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

