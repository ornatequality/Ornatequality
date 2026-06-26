import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "../../styles/common/footer.module.css";
import logo from "../../assests/logo-footer-white.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  
});

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

function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8ZM10 15.3V8.7L15.8 12 10 15.3Z"
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

const Footer = () => {
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
                width={220}
                height={72}
                loading="lazy"
              />
            </Link>
            <p className={styles.brandText}>
              Your trusted partner for certification, compliance and regulatory approvals. We
              help you achieve compliance with confidence.
            </p>

            <div className={styles.socialRow} aria-label="Social links">
              <a className={`${styles.socialBtn} ${styles.socialLinkedIn}`} href="#" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a className={`${styles.socialBtn} ${styles.socialFacebook}`} href="#" aria-label="Facebook">
                <IconFacebook />
              </a>
              <a className={`${styles.socialBtn} ${styles.socialYouTube}`} href="#" aria-label="YouTube">
                <IconYouTube />
              </a>
              <a className={`${styles.socialBtn} ${styles.socialInstagram}`} href="#" aria-label="Instagram">
                <IconInstagram />
              </a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.colTitle}>QUICK LINKS</div>
            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <a className={styles.link} href="#industries">
                  Industries
                </a>
              </li>
              <li>
                <a className={styles.link} href="#resources">
                  Resources
                </a>
              </li>
              <li>
                <Link className={styles.link} href="/contact">
                  Contact Us 
                </Link>
              </li>
            </ul>
          </div>

          <div className={`${styles.linksCol} ${styles.servicesCol}`}>
            <div className={styles.colTitle}>OUR SERVICES</div>
            <ul className={styles.linkList}>
              <li>
                <a className={styles.link} href="/services">
                  BIS Certification
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services/wpc-eta-approval">
                  WPC Approval
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services/tec-certification">
                  TEC Certification
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services/lmpc-registration">
                  LMPC Registration
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services/bee-certification">
                  BEE Registration
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services/epr-registration">
                  EPR Registration
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services/ce-certification">
                  CE Certification
                </a>
              </li>
              <li>
                <a className={styles.link} href="/services">
                  Testing &amp; Documentation
                </a>
              </li>
            </ul>
            <div className={styles.footerCtaRow} aria-label="Footer call to actions">
              <Link href="/contact" className={styles.footerPrimaryBtn}>
                Get Free Consultation
                <span className={styles.btnArrow} aria-hidden="true">
                  →
                </span>
              </Link>
             
            </div>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.colTitle}>GOVERNMENT LINKS</div>
            <ul className={styles.linkList}>
              <li>
                <a className={styles.link} href="#" target="_blank" rel="noreferrer">
                  BIS
                </a>
              </li>
              <li>
                <a className={styles.link} href="#" target="_blank" rel="noreferrer">
                  WPC
                </a>
              </li>
              <li>
                <a className={styles.link} href="#" target="_blank" rel="noreferrer">
                  BEE
                </a>
              </li>
              <li>
                <a className={styles.link} href="#" target="_blank" rel="noreferrer">
                  CPCB
                </a>
              </li>
              <li>
                <a className={styles.link} href="#" target="_blank" rel="noreferrer">
                  TEC
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <div className={styles.colTitle}>CONTACT US</div>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconPin />
                </span>
                <div className={styles.contactText}>
                  <strong className={styles.contactLabel}>ADDRESS (CORPORATE OFFICE)</strong>
                  <div className={styles.contactValue}>
                    Office No. 1726, Astralis Tower,
                    <br />
                    Sector 94, Noida, Uttar Pradesh,
                    <br />
                    201301
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconPhone />
                </span>
                <div className={styles.contactText}>
                  <strong className={styles.contactLabel}>PHONE</strong>
                  <div className={styles.contactValue}>
                    <a className={styles.link} href="tel:+919266877738">
                      +91 9266877738
                    </a>
                    <br />
                    <a className={styles.link} href="tel:+918880013897">
                      +91 8880013897
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <IconMail />
                </span>
                <div className={styles.contactText}>
                  <strong className={styles.contactLabel}>EMAIL</strong>
                  <div className={styles.contactValue}>
                    <a className={styles.link} href="mailto:chetan@ornatequality.com">
                      chetan@ornatequality.com
                    </a>
                    <br />
                    <a className={styles.link} href="mailto:marketing@ornatequality.com">
                      marketing@ornatequality.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomLeft}>© 2024 Ornate Certification. All Rights Reserved.</div>
          <div className={styles.bottomRight}>
            <a className={styles.bottomLink} href="#">
              Privacy Policy
            </a>
            <span className={styles.bottomSep} aria-hidden="true">
              |
            </span>
            <a className={styles.bottomLink} href="#">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;