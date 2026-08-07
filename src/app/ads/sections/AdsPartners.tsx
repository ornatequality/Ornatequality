import React from "react";
import Image from "next/image";
import styles from "@/styles/ads.module.css";
import AdsSectionHeader from "./AdsSectionHeader";
import bisLogo from "@/assests/certi-img/BIS.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import eprLogo from "@/assests/certi-img/epr-icon.webp";
import lmpcLogo from "@/assests/certi-img/lmpc.webp";

const PARTNERS = [
  { name: "BIS", src: bisLogo },
  { name: "WPC", src: wpcLogo },
  { name: "TEC", src: tecLogo },
  { name: "BEE", src: beeLogo },
  { name: "EPR", src: eprLogo },
  { name: "LMPC", src: lmpcLogo },
] as const;

export default function AdsPartners() {
  return (
    <section className={styles.partners} aria-labelledby="ads-partners-heading">
      <div className={styles.container}>
        <AdsSectionHeader
          id="ads-partners-heading"
          eyebrow="Regulatory Partners"
          title="Authorized Partner & Consultant for Leading Regulatory Authorities"
        />

        <div className={styles.partnersGrid} role="list">
          {PARTNERS.map(({ name, src }) => (
            <div key={name} className={styles.partnerCard} role="listitem">
              <div className={styles.partnerLogo}>
                <Image src={src} alt="" fill sizes="56px" quality={80} />
              </div>
              <span className={styles.partnerLabel}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
