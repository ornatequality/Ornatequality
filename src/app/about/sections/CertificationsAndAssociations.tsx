import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";
import styles from "@/styles/aboutV2.module.css";

import bisLogo from "@/assests/certi-img/BIS.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import nablLogo from "@/assests/certi-img/nabl.webp";
import msmeLogo from "@/assests/certi-img/msme.webp";
import isoLogo from "@/assests/certi-img/iso.webp";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const logos: Array<{ label: string; src?: any }> = [
  { label: "BIS", src: bisLogo },
  { label: "WPC", src: wpcLogo },
  { label: "BEE", src: beeLogo },
  { label: "CPCB" },
  { label: "TEC", src: tecLogo },
  { label: "NABL", src: nablLogo },
  { label: "MSME", src: msmeLogo },
  { label: "ISO", src: isoLogo },
];

function LogoCell({
  l,
  clone,
}: {
  l: (typeof logos)[number];
  clone: boolean;
}) {
  return (
    <div
      className={styles.logoItem}
      role="listitem"
      aria-label={l.label}
      {...(clone ? { "aria-hidden": true as const } : {})}
    >
      <div className={styles.logoImgWrap} aria-hidden="true">
        {l.src ? (
          <Image src={l.src} alt="" fill sizes="180px" className={styles.logoImg} />
        ) : (
          <div className={styles.logoFallback}>{l.label}</div>
        )}
      </div>
      <div className={styles.logoLabel}>{l.label}</div>
    </div>
  );
}

export function CertificationsAndAssociations() {
  return (
    <section className={`${styles.certBand} ${inter.className}`} aria-label="Our certifications and associations">
      <div className={styles.container}>
        <div className={styles.certHead}>
          <div className={styles.certKicker}>Certifications</div>
          <h2 className={`${styles.certHeading} ${playfair.className}`}>
            Our certifications &amp; associations
          </h2>
        </div>

        <div className={styles.certMarqueeWrap}>
          <div className={styles.certMarqueeTrack} role="list" aria-label="Certification logos">
            {logos.map((l, idx) => (
              <LogoCell key={`a-${l.label}-${idx}`} l={l} clone={false} />
            ))}
            {logos.map((l, idx) => (
              <LogoCell key={`b-${l.label}-${idx}`} l={l} clone />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
