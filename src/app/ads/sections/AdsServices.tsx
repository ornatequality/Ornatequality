import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ads.module.css";
import AdsSectionHeader from "./AdsSectionHeader";
import bisIcon from "@/assests/certi-img/BIS.webp";
import isiIcon from "@/assests/certi-img/isi.png";
import wpcIcon from "@/assests/certi-img/wpc.webp";
import tecIcon from "@/assests/certi-img/tec.webp";
import beeIcon from "@/assests/certi-img/BEElogo.webp";
import eprIcon from "@/assests/certi-img/epr-icon.png";

const SERVICES = [
  {
    title: "BIS (ISI Mark) Certification",
    desc: "Mandatory quality certification for products under Indian Standards.",
    href: "/services/bis-isi-mark-certification",
    icon: isiIcon,
  },
  {
    title: "BIS CRS Registration",
    desc: "Compulsory registration for electronic and IT products in India.",
    href: "/services/bis-crs-registration",
    icon: bisIcon,
  },
  {
    title: "WPC Approval",
    desc: "Equipment Type Approval for wireless and telecom devices.",
    href: "/services/wpc-eta-approval",
    icon: wpcIcon,
  },
  {
    title: "TEC Certification",
    desc: "Telecom equipment compliance for network and communication products.",
    href: "/services/tec-certification",
    icon: tecIcon,
  },
  {
    title: "BEE Registration",
    desc: "Energy efficiency labeling and star rating compliance.",
    href: "/services/bee-certification",
    icon: beeIcon,
  },
  {
    title: "EPR Registration",
    desc: "Extended Producer Responsibility for plastic and e-waste compliance.",
    href: "/services/epr-registration",
    icon: eprIcon,
  },
] as const;

const EXTRA = [
  { label: "Testing & Inspection" },
  { label: "LMPC Registration" },
  { label: "Technical Documentation" },
  { label: "Product Approval Support" },
] as const;

function IconDoc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 2 5 5h-5V4ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z"
      />
    </svg>
  );
}

export default function AdsServices() {
  return (
    <section className={styles.services} aria-labelledby="ads-services-heading">
      <div className={styles.container}>
        <AdsSectionHeader
          id="ads-services-heading"
          eyebrow="Our Expertise"
          title="Certification & Compliance Services"
          subtitle="End-to-end support for BIS, WPC, BEE, EPR, TEC and more — from documentation to final approval."
        />

        <div className={styles.servicesGrid} role="list">
          {SERVICES.map(({ title, desc, href, icon }) => (
            <article key={title} className={styles.serviceCard} role="listitem">
              <div className={styles.serviceIcon}>
                <Image src={icon} alt="" fill sizes="44px" quality={80} />
              </div>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.serviceDesc}>{desc}</p>
              <Link href={href} className={styles.serviceLink}>
                Know More →
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.extraServices} role="list" aria-label="Additional services">
          {EXTRA.map(({ label }) => (
            <div key={label} className={styles.extraService} role="listitem">
              <span className={styles.extraServiceIcon} aria-hidden="true">
                <IconDoc />
              </span>
              <span className={styles.extraServiceLabel}>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.servicesCta}>
          <Link href="/services" className={styles.servicesCtaBtn}>
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
