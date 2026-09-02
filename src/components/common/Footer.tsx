"use client";

import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import {
  DEFAULT_PHONE,
  DEFAULT_PHONE_2,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_EMAIL_MARKETING,
  SITE_SOCIAL,
} from "@/lib/site";
import styles from "../../styles/common/footer.module.css";
import logo from "../../assests/logo-footer-white.webp";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

const SERVICE_LINKS = [
  { label: "BIS Certification", href: "/services/bis-crs-registration" },
  { label: "WPC Approval", href: "/services/wpc-eta-approval" },
  { label: "TEC Certification", href: "/services/tec-certification" },
  { label: "LMPC Registration", href: "/services/lmpc-registration" },
] as const;

const GOVERNMENT_LINKS = [
  { label: "BIS", href: "https://www.bis.gov.in/" },
  { label: "WPC", href: "https://www.wpc.gov.in/" },
  { label: "BEE", href: "https://beeindia.gov.in/" },
  { label: "CPCB", href: "https://cpcb.nic.in/" },
] as const;

const WHATSAPP_HREF = "https://wa.me/919266877738";

const SOCIAL_LINKS = [
  { label: "Facebook", href: SITE_SOCIAL[0], Icon: IconFacebook, socialClass: styles.socialFacebook },
  { label: "Instagram", href: SITE_SOCIAL[2], Icon: IconInstagram, socialClass: styles.socialInstagram },
  { label: "WhatsApp", href: WHATSAPP_HREF, Icon: IconWhatsApp, socialClass: styles.socialWhatsApp },
  { label: "LinkedIn", href: SITE_SOCIAL[1], Icon: IconLinkedIn, socialClass: styles.socialLinkedIn },
] as const;

const PHONE_PRIMARY = DEFAULT_PHONE.replace("-", " ");
const PHONE_SECONDARY = DEFAULT_PHONE_2.replace("-", " ");
const TEL_PRIMARY = `tel:${DEFAULT_PHONE.replace(/-/g, "")}`;
const TEL_SECONDARY = `tel:${DEFAULT_PHONE_2.replace(/-/g, "")}`;

function IconPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconChevron(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8 12.2 2.5 2.5 5.4-5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        d="M4 21V9l8-4 8 4v12M8 21v-4h8v4M10 13h1M13 13h1M10 9h1M13 9h1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHeadset(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        d="M4.5 13V11.5a7.5 7.5 0 0 1 15 0V13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <rect x="3.1" y="12.2" width="3.6" height="5.4" rx="1.4" fill="currentColor" />
      <rect x="17.3" y="12.2" width="3.6" height="5.4" rx="1.4" fill="currentColor" />
      <circle cx="12" cy="13.4" r="2.15" fill="currentColor" />
      <path
        d="M7.6 20.6c.7-2.3 2.4-3.5 4.4-3.5s3.7 1.2 4.4 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.6 22v-8.1h2.72l.41-3.17H14.6V8.72c0-.87.24-1.46 1.49-1.46h1.58V4.42A21.2 21.2 0 0 0 15.1 4.2c-2.62 0-4.41 1.6-4.41 4.54v1.99H8.1v3.17h2.59V22h3.91Z"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M8.2 9.15H5.15V21H8.2V9.15ZM6.67 4.2a1.78 1.78 0 1 0 0 3.56 1.78 1.78 0 0 0 0-3.56ZM18.85 21h-3.04v-6.9c0-1.64-.59-2.76-2.06-2.76-1.12 0-1.79.76-2.08 1.49-.11.26-.14.62-.14.98V21H8.5s.04-10.6 0-11.7h3.04v1.65c.4-.63 1.13-1.53 2.75-1.53 2.01 0 3.52 1.31 3.52 4.13V21Z"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" {...props}>
      <rect x="3.4" y="3.4" width="17.2" height="17.2" rx="5" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4.15" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.15" cy="6.85" r="1.15" fill="currentColor" />
    </svg>
  );
}

function IconArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        d="M12 19V5M6 11l6-6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12.02 3.55a8.35 8.35 0 0 0-7.15 12.58l-.82 3.02 3.1-.81A8.35 8.35 0 1 0 12.02 3.55Z"
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinejoin="round"
      />
      <path
        fill="currentColor"
        d="M16.62 14.42c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.61.77-.75.93-.14.16-.27.18-.51.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.47-.37-.4-.53-.41h-.45c-.16 0-.41.06-.63.3-.22.24-.83.8-.83 1.96s.85 2.28.97 2.44c.12.16 1.67 2.55 4.04 3.58.57.25 1.01.39 1.36.5.57.18 1.09.15 1.5.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${styles.footer} ${inter.className}`} aria-label="Footer">
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLink} aria-label="Ornate Quality Services home">
              <Image
                src={logo}
                alt="Ornate Quality Services"
                className={styles.brandLogo}
                width={824}
                height={206}
                loading="lazy"
              />
            </Link>
            <p className={styles.brandText}>
              Your trusted partner for certification, compliance and regulatory approvals.
            </p>
            <p className={styles.brandTagline}>
              <span>We help you achieve</span> compliance with confidence.
            </p>

            <div className={styles.socialRow} aria-label="Social links">
              {SOCIAL_LINKS.map(({ label, href, Icon, socialClass }) => (
                <a
                  key={label}
                  className={`${styles.socialBtn} ${socialClass}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.linksCol} aria-label="Quick links">
            <div className={styles.colTitle}>Quick Links</div>
            <ul className={styles.linkList}>
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link className={styles.link} href={href}>
                    <span className={styles.linkIcon} aria-hidden="true">
                      <IconChevron />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksCol} aria-label="Our services">
            <div className={styles.colTitle}>Our Services</div>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link className={styles.link} href={href}>
                    <span className={styles.linkIcon} aria-hidden="true">
                      <IconCheckCircle />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linksCol} aria-label="Government links">
            <div className={styles.colTitle}>Government Links</div>
            <ul className={styles.linkList}>
              {GOVERNMENT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    className={styles.link}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.linkIcon} aria-hidden="true">
                      <IconBuilding />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactCol}>
            <div className={styles.colTitle}>Contact Us</div>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconPin />
                </span>
                <div className={styles.contactValue}>
                  {SITE_ADDRESS.streetAddress}, {SITE_ADDRESS.addressLocality},{" "}
                  {SITE_ADDRESS.addressRegion}, {SITE_ADDRESS.postalCode}
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconPhone />
                </span>
                <div className={styles.contactValue}>
                  <a className={styles.contactLink} href={TEL_PRIMARY}>
                    {PHONE_PRIMARY}
                  </a>
                  <span className={styles.contactSep}>, </span>
                  <a className={styles.contactLink} href={TEL_SECONDARY}>
                    {PHONE_SECONDARY}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconMail />
                </span>
                <div className={`${styles.contactValue} ${styles.contactEmails}`}>
                  <a className={styles.contactLink} href={`mailto:${SITE_EMAIL}`}>
                    {SITE_EMAIL}
                  </a>
                  <a className={styles.contactLink} href={`mailto:${SITE_EMAIL_MARKETING}`}>
                    {SITE_EMAIL_MARKETING}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaBanner}>
          <div className={styles.ctaCopy}>
            <span className={styles.ctaIconWrap} aria-hidden="true">
              <IconHeadset />
            </span>
            <p className={styles.ctaText}>
              <strong>Need Expert Guidance?</strong> Our experts are ready to help you.
            </p>
          </div>
          <Link href="/contact" className={styles.ctaBtn}>
            Get Expert Consultation
            <span className={styles.ctaBtnArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>
            © {year} Ornate Certification. All Rights Reserved.
          </div>
          <div className={styles.bottomCenter}>
            <Link className={styles.bottomLink} href="/privacy-policy">
              Privacy Policy
            </Link>
            <span className={styles.bottomSep} aria-hidden="true">
              |
            </span>
            <a className={styles.bottomLink} href="#">
              Terms &amp; Conditions
            </a>
          </div>
          <button type="button" className={styles.backToTop} onClick={scrollToTop}>
            Back to Top
            <span className={styles.backToTopIcon} aria-hidden="true">
              <IconArrowUp />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
