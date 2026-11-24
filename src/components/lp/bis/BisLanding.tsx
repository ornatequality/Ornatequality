"use client";

import { useState } from "react";
import { manrope } from "@/lib/fonts";
import BisLpForm from "./BisLpForm";
import { type SchemeKey } from "./scheme";
import styles from "@/styles/lpBis.module.css";

const HERO: Record<
  SchemeKey,
  { h1: string; lead: string; formScheme: string }
> = {
  default: {
    h1: "BIS Certification Made Clear: ISI Mark, CRS and FMCS",
    lead: "Tell us your product. We confirm the right BIS scheme and Indian Standard, plan your testing, prepare your documents and stay with you until the licence or registration is granted.",
    formScheme: "Not sure",
  },
  crs: {
    h1: "BIS CRS Registration for Electronics and IT Products",
    lead: "Lab testing, BIS portal filing and a registration number on your label — a factory inspection is generally not part of CRS.",
    formScheme: "BIS CRS",
  },
  isi: {
    h1: "ISI Mark Certification for Indian Manufacturers",
    lead: "Application, factory inspection, sample testing and a licence to use the ISI mark, with surveillance after grant.",
    formScheme: "ISI Mark",
  },
  fmcs: {
    h1: "FMCS Licence for Factories Outside India",
    lead: "AIR nomination, overseas factory inspection and sample testing in India before BIS grants the ISI-mark licence.",
    formScheme: "FMCS",
  },
};

const PRODUCTS: Record<Exclude<SchemeKey, "default">, string[]> = {
  crs: [
    "Mobile phones",
    "Laptops and tablets",
    "Power banks",
    "Lithium-ion cells and batteries",
    "Adaptors and chargers",
    "LED lamps and luminaires",
    "Smart watches",
    "CCTV cameras",
    "Set-top boxes",
    "UPS and inverters",
    "Speakers and audio systems",
    "Solar PV modules",
  ],
  isi: [
    "Toys",
    "Footwear",
    "Furniture",
    "Helmets",
    "Pressure cookers",
    "Packaged drinking water",
    "Cement",
    "TMT bars and steel products",
    "Electrical appliances",
    "Cables and switches",
    "PVC pipes",
    "Kitchen appliances",
  ],
  fmcs: [
    "Steel products",
    "Toys",
    "Footwear",
    "Furniture",
    "Chemicals and polymers",
    "Cement and building materials",
    "Electrical appliances",
    "Kitchenware and stainless steel",
  ],
};

const COVERAGE = [
  {
    title: "Scheme and standard check",
    text: "We confirm which Indian Standard and BIS scheme apply to your exact product before anything else.",
  },
  {
    title: "Testing plan and lab coordination",
    text: "We plan which models to test, book a BIS-recognised lab and track your samples, so you don't pay for tests you don't need.",
  },
  {
    title: "Documentation",
    text: "Application forms, technical files, test reports, trademark and authorisation documents, prepared and checked before submission.",
  },
  {
    title: "Application filing",
    text: "We file with BIS and handle every query raised during scrutiny.",
  },
  {
    title: "Factory inspection readiness (ISI and FMCS)",
    text: "Records, testing set-up and processes reviewed before the BIS officer visits.",
  },
  {
    title: "AIR support for foreign manufacturers",
    text: "Guidance on nominating your Authorised Indian Representative.",
  },
  {
    title: "After the grant",
    text: "Marking and labelling guidance, adding new models, surveillance and renewal reminders.",
  },
];

const PROCESS = [
  {
    key: "crs" as const,
    title: "CRS",
    steps: [
      "Product and Indian Standard check",
      "Sample testing at a BIS-recognised lab",
      "Documents and application on the BIS portal",
      "BIS review and query handling",
      "Registration granted, followed by marking and labelling",
    ],
  },
  {
    key: "isi" as const,
    title: "ISI Mark",
    steps: [
      "Product and Indian Standard check",
      "Factory and in-house testing readiness",
      "Application with documents",
      "BIS factory inspection and sample drawing",
      "Sample testing",
      "Licence granted, followed by surveillance and renewal",
    ],
  },
  {
    key: "fmcs" as const,
    title: "FMCS",
    steps: [
      "Product and Indian Standard check",
      "AIR nomination",
      "Application in Form V with the technical file",
      "BIS inspection of your overseas factory and sample drawing",
      "Sample testing in India",
      "Licence granted, followed by marking and ongoing compliance",
    ],
  },
];

type BisLandingProps = {
  initialScheme: SchemeKey;
};

export default function BisLanding({ initialScheme }: BisLandingProps) {
  const [scheme, setScheme] = useState<SchemeKey>(initialScheme);
  const copy = HERO[scheme];
  const [productTab, setProductTab] = useState<Exclude<SchemeKey, "default">>(
    initialScheme === "default" ? "crs" : initialScheme,
  );
  const [productPrefill, setProductPrefill] = useState("");

  function goToForm(next: SchemeKey, product?: string) {
    setScheme(next);
    if (product) setProductPrefill(product);
    const query = next === "default" ? "" : `?scheme=${next}`;
    window.history.replaceState(null, "", `/lp/bis-certification${query}`);
    document.getElementById("roadmap-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className={`${styles.page} ${manrope.className}`}>
      <section className={styles.hero} aria-labelledby="lp-bis-heading">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>BIS · CRS · ISI Mark · FMCS</p>
            <h1 id="lp-bis-heading" className={styles.h1}>
              {copy.h1}
            </h1>
            <p className={styles.lead}>{copy.lead}</p>
            <ul className={styles.pills}>
              <li>Since 2013</li>
              <li>5000+ certifications</li>
              <li>Office No. 1726, Astralis Tower, Sector 94</li>
            </ul>
          </div>
          <div className={styles.formCard} id="roadmap-form">
            <h2 className={styles.formTitle}>Enquire now</h2>
            <p className={styles.formLead}>
              Share your details. Our team will confirm the right BIS scheme for your product.
            </p>
            <BisLpForm scheme={copy.formScheme} product={productPrefill} />
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="scheme-heading">
        <div className={styles.wrap}>
          <h2 id="scheme-heading" className={styles.h2}>
            Which BIS scheme applies to you?
          </h2>
          <p className={styles.sectionLead}>
            BIS runs different certification schemes depending on what you make
            and where you make it. Here is a quick way to tell them apart.
          </p>
          <div className={styles.schemeGrid}>
            <article className={styles.schemeCard}>
              <h3>BIS CRS Registration (Scheme-II)</h3>
              <p>
                For manufacturers, importers and brand owners of notified
                electronics and IT products. Your product is tested at a
                BIS-recognised lab, the application is filed on the BIS portal
                with the test report, and BIS grants a registration number that
                goes on your product label with the Standard Mark. A factory
                inspection is generally not part of CRS. Foreign manufacturers
                need an Authorised Indian Representative (AIR).
              </p>
              <button type="button" className={styles.schemeBtn} onClick={() => goToForm("crs")}>
                Check my product for CRS
              </button>
            </article>
            <article className={styles.schemeCard}>
              <h3>ISI Mark Certification (Scheme-I)</h3>
              <p>
                For Indian manufacturers of products covered by an Indian
                Standard, and mandatory for products under a Quality Control
                Order (QCO). It involves an application, a BIS factory
                inspection, sample testing and the grant of a licence to use
                the ISI mark. After the grant, surveillance and renewal keep
                your licence active.
              </p>
              <button type="button" className={styles.schemeBtn} onClick={() => goToForm("isi")}>
                Check my product for ISI Mark
              </button>
            </article>
            <article className={styles.schemeCard}>
              <h3>FMCS Licence</h3>
              <p>
                For factories outside India making ISI-mark products for the
                Indian market. Electronics and IT products follow CRS instead.
                The foreign manufacturer applies to BIS, nominates an
                Indian-resident AIR, and BIS inspects the overseas factory and
                draws samples for testing in India before granting the licence.
              </p>
              <button type="button" className={styles.schemeBtn} onClick={() => goToForm("fmcs")}>
                Check my product for FMCS
              </button>
            </article>
          </div>
          <p className={styles.note}>
            Not sure? Choose &quot;Not sure&quot; in the form. We confirm the
            scheme and Indian Standard before you spend anything on testing.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt} aria-labelledby="products-heading">
        <div className={styles.wrap}>
          <h2 id="products-heading" className={styles.h2}>
            Common products we handle
          </h2>
          <div className={styles.tabs} role="tablist" aria-label="Product schemes">
            {(
              [
                ["crs", "CRS"],
                ["isi", "ISI Mark"],
                ["fmcs", "FMCS"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={productTab === key}
                className={`${styles.tab} ${productTab === key ? styles.tabActive : ""}`}
                onClick={() => setProductTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className={styles.tiles} role="tabpanel">
            {PRODUCTS[productTab].map((item) => (
              <button
                key={item}
                type="button"
                className={styles.tile}
                onClick={() => goToForm(productTab, item)}
              >
                <span>{item}</span>
                <span className={styles.tileCta}>Ask about this product</span>
              </button>
            ))}
          </div>
          <p className={styles.small}>
            Whether BIS applies depends on the latest notification for your exact
            product and model. We confirm it for you before you start.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="covers-heading">
        <div className={styles.wrap}>
          <h2 id="covers-heading" className={styles.h2}>
            What our BIS service covers
          </h2>
          <div className={styles.coverGrid}>
            {COVERAGE.map((item) => (
              <article key={item.title} className={styles.coverCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt} aria-labelledby="process-heading">
        <div className={styles.wrap}>
          <h2 id="process-heading" className={styles.h2}>
            How the process works
          </h2>
          <div className={styles.processGrid}>
            {PROCESS.map((item) => (
              <article key={item.key} className={styles.processCard}>
                <h3>{item.title}</h3>
                <ol>
                  {item.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <button
                  type="button"
                  className={styles.schemeBtn}
                  onClick={() => goToForm(item.key)}
                >
                  Start with {item.title}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.stickyCta}>
        <a href="#roadmap-form">Submit</a>
      </div>
    </div>
  );
}
