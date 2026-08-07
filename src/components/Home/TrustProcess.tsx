import React from "react";
import Image, { type StaticImageData } from "next/image";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/trustProcess.module.css";
import trustBannerImage from "../../assests/trust-building.webp";
import bisLogo from "@/assests/certi-img/BIS.webp";
import isiLogo from "@/assests/certi-img/isi.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import lmpcLogo from "@/assests/certi-img/lmpc.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import {
  IconClientAssist,
  IconEndToEnd,
  IconFastApproval,
  IconIndustryExpert,
  IconPanGlobal,
  IconShieldBanner,
  IconTrustedShield,
} from "./TrustProcessFeatureIcons";

const FEATURES = [
  {
    title: "Industry Experienced Experts",
    desc: "Skilled professionals with in-depth knowledge of Indian & international compliance standards.",
    Icon: IconIndustryExpert,
  },
  {
    title: "Dedicated Client Assistance",
    desc: "Personalized support at every step to resolve your queries and keep you updated.",
    Icon: IconClientAssist,
  },
  {
    title: "End-to-End Certification Support",
    desc: "From documentation to final approval, we manage everything for a hassle-free experience.",
    Icon: IconEndToEnd,
  },
  {
    title: "Pan India & Global Reach",
    desc: "Serving businesses across India with global compliance and export support.",
    Icon: IconPanGlobal,
  },
  {
    title: "Faster Approvals, Transparent Process",
    desc: "We follow a streamlined process to ensure quick, reliable and transparent approvals.",
    Icon: IconFastApproval,
  },
  {
    title: "Trusted by Businesses Worldwide",
    desc: "Hundreds of satisfied clients trust us for our quality, commitment and result-driven approach.",
    Icon: IconTrustedShield,
  },
] as const;

const PROCESS_STEPS = [
  {
    no: 1,
    tone: "blue" as const,
    titleLines: ["Consultation &", "Requirement Analysis"],
    desc: "We understand your product, compliance requirements and business goals.",
    icon: "consult" as const,
  },
  {
    no: 2,
    tone: "gold" as const,
    titleLines: ["Documentation &", "Application Support"],
    desc: "We prepare, verify and manage all required documents and applications.",
    icon: "docs" as const,
  },
  {
    no: 3,
    tone: "blue" as const,
    titleLines: ["Testing &", "Regulatory Coordination"],
    desc: "We coordinate testing and liaise with regulatory authorities for smooth processing.",
    icon: "test" as const,
  },
  {
    no: 4,
    tone: "gold" as const,
    titleLines: ["Certification &", "Approval"],
    desc: "Receive your certificate with complete support for compliance and market readiness.",
    icon: "approve" as const,
  },
] as const;

type CertLogo = { label: string; src?: StaticImageData };

const CERT_LOGOS: CertLogo[] = [
  { label: "BIS", src: bisLogo },
  { label: "ISI", src: isiLogo },
  { label: "CRS" },
  { label: "WPC", src: wpcLogo },
  { label: "TEC", src: tecLogo },
  { label: "LMPC", src: lmpcLogo },
  { label: "BEE", src: beeLogo },
  { label: "FMCS" },
];

function IconConsult(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true" {...props}>
      <path
        d="M18 25c-4.4 0-8 3-8 6.6V36h16v-4.4C26 28 22.4 25 18 25Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M18 23a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <path
        d="M29 14h9v8c0 1.1-.9 2-2 2h-7l-4 4v-4h-1c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconDocs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true" {...props}>
      <path
        d="M16 10h12l6 6v22H16a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M28 10v8h8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path
        d="M18 24h12M18 30h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTest(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true" {...props}>
      <path
        d="M20 12h8v4l4 14H16l4-14v-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M18 30h12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M24 8v4M20 12h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="32" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M35 21l4 4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function IconApprove(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" aria-hidden="true" {...props}>
      <path
        d="M24 8c7 0 14 2 14 10 0 9-6.5 17-14 22-7.5-5-14-13-14-22 0-8 7-10 14-10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M19 24.5l3.2 3.2L29.8 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  );

}

function ProcessStepIcon({ type }: { type: (typeof PROCESS_STEPS)[number]["icon"] }) {
  if (type === "consult") return <IconConsult />;
  if (type === "docs") return <IconDocs />;
  if (type === "test") return <IconTest />;
  return <IconApprove />;
}

const TrustProcess = () => {
  return (
    <section className={styles.section} aria-label="Why businesses trust us and our process">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.kicker}>
              <span className={styles.kickerLine} aria-hidden="true" />
              <span>Why Businesses Trust</span>
            </div>

            <h2 className={`${styles.mainTitle} ${playfair.className}`}>Ornate Quality Services</h2>
            <h3 className={styles.subTitle}>
              Your Reliable Compliance Partner
            </h3>

            <p className={styles.intro}>
              Ornate Quality Services is a leading regulatory compliance and certification consultancy
              in India. We help manufacturers, importers, startups, and global brands obtain BIS
              Certification, CRS Registration, ISI Mark Certification, WPC Approval, TEC, LMPC, BEE,
              FMCS and other mandatory approvals with complete end-to-end support.
            </p>
            <p className={styles.intro}>
              With deep expertise, transparency, and a client-first approach, we simplify complex
              compliance processes, ensure faster approvals, reduce risks, and help businesses achieve
              seamless market access in India and worldwide. 
            </p>

            <div className={styles.featuresGrid} role="list">
              {FEATURES.map(({ title, desc, Icon }) => (
                <div key={title} className={styles.featureItem} role="listitem">
                  <div className={styles.featureIcon} aria-hidden="true">
                    <Icon />
                  </div>
                  <div className={styles.featureBody}>
                    <h3 className={styles.featureTitle}>{title}</h3>
                    <p className={styles.featureDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.processBlock}>
              <h2 className={`${styles.processTitle} ${playfair.className}`}>
                Our Simple 4-Step process 
              </h2>
              <span className={styles.processUnderline} aria-hidden="true" />

              <div className={styles.processCardsWrap}>
                <div className={styles.processCards} role="list" aria-label="Process steps">
                  {PROCESS_STEPS.map((step) => (
                    <article key={step.no} className={styles.processCard} role="listitem">
                      <div className={styles.processCardHead}>
                        <div className={styles.processCardTop}>
                          <div
                            className={
                              step.tone === "blue" ? styles.stepBadgeBlue : styles.stepBadgeGold
                            }
                            aria-hidden="true"
                          >
                            {step.no}
                          </div>
                        </div>
                        <div className={styles.stepIconWrap} aria-hidden="true">
                          <ProcessStepIcon type={step.icon} />
                        </div>
                      </div>
                      <div className={styles.stepTitleBox}>
                        <h3 className={styles.stepTitle}>
                          {step.titleLines.map((line) => (
                            <span key={line} className={styles.stepTitleLine}>
                              {line}
                            </span>
                          ))}
                        </h3>
                      </div>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.commitBanner}>
              <div className={styles.commitText}>
                <span className={styles.commitShield} aria-hidden="true">
                  <IconShieldBanner />
                </span>
                <div className={styles.commitCopy}>
                  <p className={styles.commitQuote}>
                    <span className={styles.commitQuoteLine}>Committed to Quality.</span>
                    <span className={styles.commitQuoteLine}>Focused on Compliance.</span>
                    <span className={styles.commitQuoteLine}>Driven by Trust.</span>
                  </p>
                </div>
              </div>
              <div className={styles.commitImageWrap} aria-hidden="true">
                <Image
                  src={trustBannerImage}
                  alt=""
                  fill
                  quality={80}
                  sizes="(max-width: 700px) 100vw, 280px"
                  className={styles.commitImage}
                />
              </div>
            </div>

            <div className={styles.certLogos} role="list" aria-label="Certification bodies">
              {CERT_LOGOS.map((logo) => (
                <div key={logo.label} className={styles.certLogoItem} role="listitem">
                  <div className={styles.certLogoImgWrap} aria-hidden="true">
                    {logo.src ? (
                      <Image
                        src={logo.src}
                        alt=""
                        width={44}
                        height={44}
                        className={styles.certLogoImg}
                      />
                    ) : (
                      <span className={styles.certLogoFallback}>{logo.label}</span>
                    )}
                  </div>
                  <span className={styles.certLogoLabel}>{logo.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustProcess;
 