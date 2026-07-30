import React from "react";
import styles from "@/styles/ads.module.css";
import AdsSectionHeader from "./AdsSectionHeader";
import {
  IconAutomotive,
  IconConsumerElectronics,
  IconHomeAppliances,
  IconItTelecom,
  IconLedLighting,
  IconMedicalDevices,
  IconPackaging,
  IconToysGames,
} from "./AdsIndustryIcons";

const INDUSTRIES = [
  {
    label: "Consumer Electronics",
    desc: "Smartphones, wearables & gadgets",
    Icon: IconConsumerElectronics,
    tone: "blue" as const,
  },
  {
    label: "LED & Lighting",
    desc: "Luminaires & lighting products",
    Icon: IconLedLighting,
    tone: "gold" as const,
  },
  {
    label: "Home Appliances",
    desc: "Kitchen & household devices",
    Icon: IconHomeAppliances,
    tone: "teal" as const,
  },
  {
    label: "IT & Telecom",
    desc: "Network & communication gear",
    Icon: IconItTelecom,
    tone: "blue" as const,
  },
  {
    label: "Automotive",
    desc: "Auto parts & components",
    Icon: IconAutomotive,
    tone: "navy" as const,
  },
  {
    label: "Toys & Games",
    desc: "Children's products & toys",
    Icon: IconToysGames,
    tone: "gold" as const,
  },
  {
    label: "Medical Devices",
    desc: "Health & diagnostic equipment",
    Icon: IconMedicalDevices,
    tone: "teal" as const,
  },
  {
    label: "Packaging",
    desc: "Plastic, e-waste & materials",
    Icon: IconPackaging,
    tone: "blue" as const,
  },
] as const;

export default function AdsIndustries() {
  return (
    <section className={styles.industries} aria-labelledby="ads-industries-heading">
      <div className={styles.container}>
        <AdsSectionHeader
          id="ads-industries-heading"
          eyebrow="Sectors We Cover"
          title="Industries We Serve"
          subtitle="Trusted certification support across diverse sectors — helping brands meet Indian regulatory requirements with confidence."
        />

        <div className={styles.industriesGrid} role="list">
          {INDUSTRIES.map(({ label, desc, Icon, tone }) => (
            <article key={label} className={styles.industryCard} role="listitem">
              <span className={styles.industryAccent} aria-hidden="true" />
              <div className={`${styles.industryIconWrap} ${styles[`industryIcon_${tone}`]}`}>
                <Icon />
              </div>
              <h3 className={styles.industryLabel}>{label}</h3>
              <p className={styles.industryDesc}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
