import React from "react";
import Image from "next/image";
import Link from "next/link";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/hero.module.css";
import heroImg from "../../assests/abtt.png";
import bisLogo from "@/assests/certi-img/BIS.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import eprLogo from "@/assests/certi-img/msmp.jpeg";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import {
  SERVICE_PAGE_ANCHORS,
  SERVICE_ROUTES,
  serviceHref,
  type MegaMenuIcon,
} from "@/components/common/servicesMegaMenu.data";

function IconShieldCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
      />
    </svg>
  );
}

function IconUsers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4ZM8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 2c-3 0-6 1.5-6 4v3h12v-3c0-2.5-3-4-6-4ZM8 13c-2.65 0-5 1.2-5 3.2V20h6v-2.6c0-1.35.65-2.5 1.7-3.35A8.7 8.7 0 0 0 8 13Z"
      />
    </svg>
  );
}

function IconGlobe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Zm0-18c2.6 2.7 2.6 15.3 0 18M3 12h18M5.5 7.5h13M5.5 16.5h13"
      />
    </svg>
  );
}

function IconTarget(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
    </svg>
  );
}

/** WhatsApp mark — white on brand green (parent sets background) */
function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

const WHATSAPP_HREF =
  "https://wa.me/919266877738?text=" +
  encodeURIComponent("Hi, I'd like to speak with an expert at Ornate Quality.");

const HERO_CERTIFICATIONS = [
  { name: "BIS", href: SERVICE_ROUTES.bisCrs, icon: { type: "image", src: bisLogo, alt: "BIS certification" } },
  { name: "WPC", href: SERVICE_ROUTES.wpc, icon: { type: "image", src: wpcLogo, alt: "WPC approval" } },
  { name: "BEE", href: SERVICE_ROUTES.bee, icon: { type: "image", src: beeLogo, alt: "BEE registration" } },
  { name: "EPR", href: "/services/epr-registration", icon: { type: "image", src: eprLogo, alt: "EPR registration" } },
  {
    name: "CE",
    href: SERVICE_ROUTES.ce,
    icon: { type: "glyph", glyph: "CE", tone: "blue" },
  },
] as const satisfies ReadonlyArray<{
  name: string;
  href: string;
  icon: MegaMenuIcon;
}>;

/** Duplicated for visible horizontal marquee motion */
const HERO_CERT_SCROLL = [...HERO_CERTIFICATIONS, ...HERO_CERTIFICATIONS];

function HeroCertIcon({ icon }: { icon: MegaMenuIcon }) {
  if (icon.type === "image") {
    return (
      <span className={styles.certIcon}>
        <Image src={icon.src} alt="" width={26} height={26} quality={80} className={styles.certIconImg} />
      </span>
    );
  }

  return (
    <span className={`${styles.certIcon} ${styles[`certGlyph_${icon.tone}`]}`} aria-hidden="true">
      <span className={styles.certGlyphText}>{icon.glyph}</span>
    </span>
  );
}

function HeroCertificationStrip({
  stripId,
  ariaHidden,
}: {
  stripId: string;
  ariaHidden?: boolean;
}) {
  return (
    <ul
      className={styles.certIconRow}
      aria-hidden={ariaHidden ? true : undefined}
    >
      {HERO_CERT_SCROLL.map(({ name, href, icon }, index) => (
        <li key={`${stripId}-${name}-${index}`} className={styles.certIconItem}>
          <Link
            href={href}
            className={styles.certIconLink}
            aria-label={ariaHidden ? undefined : `${name} certification service`}
            tabIndex={ariaHidden ? -1 : undefined}
          >
            <HeroCertIcon icon={icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Hero = () => {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.heroTop}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className={styles.tagline}>YOUR TRUSTED COMPLIANCE PARTNER —</p>

            <h1 className={`${styles.title} ${playfair.className}`}>
Helping Businesses Achieve Product Compliance & Certification Success            </h1>

            <p className={styles.subtitle}>
              Expert solutions for BIS, WPC, BEE, EPR, CE and more. From consultation to
              certification – we make compliance simple.
            </p>

            <div className={styles.certMarqueeWrap} aria-label="Core certification services">
              <div className={styles.certMarqueeInner} role="presentation">
                <div className={styles.certMarqueeTrack}>
                  <HeroCertificationStrip stripId="h1" />
                  <HeroCertificationStrip stripId="h2" ariaHidden />
                </div>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <a className={styles.primaryBtn} href="/contact">
                Book free consultation
                <span className={styles.btnArrow} aria-hidden="true">
                  →
                </span>
              </a>
              <a
                className={styles.secondaryBtn}
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.waIconWrap} aria-hidden="true">
                  <IconWhatsApp width={22} height={22} />
                </span>
                WhatsApp
                <span className={styles.btnArrowMuted} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className={styles.right} aria-hidden="true">
            <div className={styles.visual}>
              <div className={styles.fadeIntoWhite} />
              <div className={styles.heroImageWrap}>
                <Image
                  src={heroImg}
                  alt=""
                  fill
                  priority
                  quality={82}
                  className={styles.heroImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, min(720px, 52vw)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={styles.statsBarInner} role="list" aria-label="Company highlights">
          <div className={styles.barStat} role="listitem">
            <span className={styles.barStatIcon}>
              <IconUsers />
            </span>
            <div className={styles.barStatText}>
              <span className={styles.barStatValue}>13+</span>
              <span className={styles.barStatLabel}>Years Experience</span>
            </div>
          </div>

          <div className={styles.barStat} role="listitem">
            <span className={styles.barStatIcon}>
              <IconShieldCheck />
            </span>
            <div className={styles.barStatText}>
              <span className={styles.barStatValue}>5000+</span>
              <span className={styles.barStatLabel}>Certifications Delivered</span>
            </div>
          </div>

          <div className={styles.barStat} role="listitem">
            <span className={styles.barStatIcon}>
              <IconGlobe />
            </span>
            <div className={styles.barStatText}>
              <span className={styles.barStatValue}>100+</span>
              <span className={styles.barStatLabel}>Global Clients</span>
            </div>
          </div>

          <div className={styles.barStat} role="listitem">
            <span className={styles.barStatIcon}>
              <IconTarget />
            </span>
            <div className={styles.barStatText}>
              <span className={styles.barStatValue}>98%</span>
              <span className={styles.barStatLabel}>Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
