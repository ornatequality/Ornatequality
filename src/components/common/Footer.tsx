"use client";

import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/fonts";
import {
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

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: SITE_SOCIAL[1], Icon: IconLinkedIn, socialClass: styles.socialLinkedIn },
  { label: "Facebook", href: SITE_SOCIAL[0], Icon: IconFacebook, socialClass: styles.socialFacebook },
  { label: "Instagram", href: SITE_SOCIAL[2], Icon: IconInstagram, socialClass: styles.socialInstagram },
  { label: "X", href: SITE_SOCIAL[4], Icon: IconX, socialClass: styles.socialX },
] as const;

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

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" {...props}>
      <path
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
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
        d="M4 14v-2a8 8 0 0 1 16 0v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 14a2 2 0 0 0 2 2h1v-4H5a1 1 0 0 0-1 1Zm16 0a2 2 0 0 1-2 2h-1v-4h1a1 1 0 0 1 1 1Z"
        fill="currentColor"
      />
      <path
        d="M8 21h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.6-1.5h1.6V5c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H7v3h2.6v8h3.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.5 6.8a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM4.6 21.5h3.8V9H4.6v12.5ZM9.9 9h3.6v1.7h.1c.5-1 1.9-2 4-2 4.3 0 5.1 2.8 5.1 6.5v6.3h-3.8v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.9V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.8 6.6a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M4 4l16 16M20 4 4 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
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

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`${styles.footer} ${inter.className}`} aria-label="Footer">
      <div className={styles.skyline} aria-hidden="true" />

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
            <p className={styles.brandTagline}>We help you achieve compliance with confidence.</p>

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

          <div className={styles.linksCol}>
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
          </div>

          <div className={styles.linksCol}>
            <div className={styles.colTitle}>Our Services</div>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link className={styles.link} href={href}>
                    <span className={styles.linkIcon} aria-hidden="true">
                      <IconShield />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
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
          </div>

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
                  <a className={styles.contactLink} href="tel:+919266877738">
                    +91 9266877738
                  </a>
                  ,{" "}
                  <a className={styles.contactLink} href="tel:+918880013897">
                    +91 8800013897
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconMail />
                </span>
                <div className={styles.contactValue}>
                  <a className={styles.contactLink} href={`mailto:${SITE_EMAIL}`}>
                    {SITE_EMAIL}
                  </a>
                  <br />
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
