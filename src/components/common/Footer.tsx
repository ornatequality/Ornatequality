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
  { label: "LinkedIn", href: SITE_SOCIAL[1], Icon: IconLinkedIn, socialClass: styles.socialLinkedIn },
  { label: "Facebook", href: SITE_SOCIAL[0], Icon: IconFacebook, socialClass: styles.socialFacebook },
  { label: "Instagram", href: SITE_SOCIAL[2], Icon: IconInstagram, socialClass: styles.socialInstagram },
  { label: "WhatsApp", href: WHATSAPP_HREF, Icon: IconWhatsApp, socialClass: styles.socialWhatsApp },
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
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="footerIgGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285aeb" />
        </radialGradient>
      </defs>
      <path
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.8 6.6a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"
        fill="url(#footerIgGrad)"
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

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
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
