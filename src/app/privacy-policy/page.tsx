import type { Metadata } from "next";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import {
  SITE_EMAIL,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import styles from "@/styles/privacyPolicy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Policy",
  description: `Privacy and cookie policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal data.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <article className={styles.card}>
          <h1 className={`${styles.title} ${playfair.className}`}>Privacy &amp; Cookie Policy</h1>
          <p className={styles.updated}>Last updated: July 2026</p>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Introduction</h2>
            <p className={styles.text}>
              {SITE_LEGAL_NAME} (&quot;{SITE_NAME}&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;) operates {SITE_URL}. This policy explains how we collect, use, store,
              and protect your personal information when you visit our website, submit enquiry forms,
              or interact with our services — including our ads landing page at {SITE_URL}/ads.
            </p>
            <p className={styles.text}>
              We comply with applicable Indian data protection laws, including the Digital Personal
              Data Protection Act, 2023 (DPDP Act), to the extent applicable to our operations.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Information We Collect</h2>
            <p className={styles.text}>We may collect the following types of information:</p>
            <ul className={styles.list}>
              <li>
                <strong>Contact details</strong> — name, email, phone number, city, and message
                content when you submit our contact or consultation forms.
              </li>
              <li>
                <strong>Technical data</strong> — IP address, browser type, device information, pages
                visited, and referral source collected via cookies and analytics tools.
              </li>
              <li>
                <strong>Cookie preferences</strong> — your consent choice stored in a browser cookie.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. How We Use Your Information</h2>
            <ul className={styles.list}>
              <li>To respond to your enquiries and provide certification consultation.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To measure marketing campaign performance (e.g. Google Ads conversions).</li>
              <li>To comply with legal obligations and prevent fraud or misuse.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. Cookies &amp; Tracking Technologies</h2>
            <p className={styles.text}>
              Our website uses cookies — small text files stored on your device — to operate
              effectively and understand how visitors use our site.
            </p>
            <p className={styles.text}>
              <strong>Essential cookies</strong> are required to remember your cookie consent
              preference. These do not require separate consent.
            </p>
            <p className={styles.text}>
              <strong>Analytics cookies</strong> (e.g. Google Analytics 4 via Google Tag Manager)
              help us understand site traffic and user behaviour. These are only activated after you
              accept cookies.
            </p>
            <p className={styles.text}>
              <strong>Marketing cookies</strong> (e.g. Google Ads conversion tracking) help us
              measure the effectiveness of our advertising campaigns, including on our /ads landing
              page. These are only activated after you accept cookies.
            </p>
            <p className={styles.text}>
              You can manage your preferences at any time using the cookie banner on our website, or
              by clearing cookies in your browser settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Third-Party Services</h2>
            <p className={styles.text}>
              We use Google Tag Manager to manage analytics and advertising tags. Google may process
              data according to its own privacy policy. Third-party services we may use include:
            </p>
            <ul className={styles.list}>
              <li>Google Tag Manager</li>
              <li>Google Analytics 4</li>
              <li>Google Ads</li>
            </ul>
            <p className={styles.text}>
              We do not sell your personal data to third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Data Retention</h2>
            <p className={styles.text}>
              Enquiry form data is retained for as long as necessary to respond to your request and
              maintain business records, typically up to 3 years unless a longer period is required
              by law. Cookie consent preferences are stored for up to 12 months.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Your Rights</h2>
            <p className={styles.text}>Under applicable law, you may have the right to:</p>
            <ul className={styles.list}>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent for non-essential cookies at any time.</li>
              <li>Lodge a complaint with the relevant data protection authority.</li>
            </ul>
            <p className={styles.text}>
              To exercise these rights, contact us at{" "}
              <a className={styles.link} href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
              .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. Contact Us</h2>
            <p className={styles.text}>
              For privacy-related questions or requests, please contact:
            </p>
            <p className={styles.text}>
              {SITE_LEGAL_NAME}
              <br />
              Email:{" "}
              <a className={styles.link} href={`mailto:${SITE_EMAIL}`}>
                {SITE_EMAIL}
              </a>
              <br />
              Website:{" "}
              <Link className={styles.link} href="/contact">
                Contact Us
              </Link>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
