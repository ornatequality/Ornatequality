import React from "react";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import styles from "@/styles/valuedClients.module.css";

import flipkart from "@/assests/clientslogo/Flipkart.webp";
import croma from "@/assests/clientslogo/Croma.webp";
import hitachi from "@/assests/clientslogo/Hitachi.webp";
import asianet from "@/assests/clientslogo/Aisanet.webp";
import hyundai from "@/assests/clientslogo/Hyundai.webp";
import reliance from "@/assests/clientslogo/Reliance-digital.webp";
import tseries from "@/assests/clientslogo/tseries.webp";
import nokia from "@/assests/clientslogo/Nokia.webp";

import age from "@/assests/clientlogo/age.webp";
import alfaa from "@/assests/clientlogo/alfaa.webp";
import cambium from "@/assests/clientlogo/cambium.webp";
import digismart from "@/assests/clientlogo/digismart.webp";
import dishtv from "@/assests/clientlogo/dishtv.webp";
import ekkaa from "@/assests/clientlogo/ekkaa.webp";
import eson from "@/assests/clientlogo/eson.webp";
import orion from "@/assests/clientlogo/orion.webp";
import veira from "@/assests/clientlogo/veira.webp";
import videotex from "@/assests/clientlogo/videotex.webp";
import westway from "@/assests/clientlogo/westway.webp";
import brandworks from "@/assests/clientlogo/brandworks.webp";
import datamini from "@/assests/clientlogo/datamini.webp";
import mage from "@/assests/clientlogo/image.webp";

const CLIENTS = [
  { id: "flipkart", name: "Flipkart", src: flipkart },
  { id: "croma", name: "Croma", src: croma },
  { id: "hitachi", name: "Hitachi", src: hitachi },
  { id: "asianet", name: "Asianet", src: asianet },
  { id: "hyundai", name: "Hyundai", src: hyundai },
  { id: "reliance", name: "Reliance Digital", src: reliance },
  { id: "tseries", name: "T-Series", src: tseries },
  { id: "nokia", name: "Nokia", src: nokia },
  { id: "age", name: "AGE", src: age },
  { id: "alfaa", name: "Alfaa", src: alfaa },
  { id: "cambium", name: "Cambium", src: cambium },
  { id: "digismart", name: "Digismart", src: digismart },
  { id: "dishtv", name: "Dish TV", src: dishtv },
  { id: "ekkaa", name: "Ekkaa", src: ekkaa },
  { id: "eson", name: "Eson", src: eson },
  { id: "orion", name: "Orion", src: orion },
  { id: "veira", name: "Veira", src: veira },
  { id: "videotex", name: "Videotex", src: videotex },
  { id: "westway", name: "Westway", src: westway },
  { id: "brandworks", name: "Brandworks", src: brandworks },
  { id: "datamini", name: "Datamini", src: datamini },
  { id: "mage", name: "Mage", src: mage },
] as const;

function LogoStrip({
  ariaHidden,
  stripId,    
}: {
  ariaHidden?: boolean;
  stripId: string;
}) {
  return (
    <ul
      className={styles.logoRow}
      aria-hidden={ariaHidden ? true : undefined}
    >
      {CLIENTS.map(({ id, name, src }) => (
        <li key={`${stripId}-${id}`} className={styles.logoItem}>
          <div className={styles.logoSlot}>
            <Image
              src={src}
              alt={ariaHidden ? "" : `${name} logo`}
              fill
              sizes="104px"
              quality={75}
              loading="lazy"
              className={styles.logoImg}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ValuedClients() {
  return (
    <section className={styles.section} aria-labelledby="valued-clients-heading">
      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <h2 id="valued-clients-heading" className={`${styles.heading} ${playfair.className}`}>
            Our Valued Clients
          </h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
          <p className={styles.subheading}>
            Trusted by leading brands and organizations across multiple industries for reliable
            certification, compliance, and end-to-end regulatory support.
          </p>
        </div>
      </div>

      <div className={styles.marqueeBleed}>
        <div className={styles.marquee} role="presentation">
          <div className={styles.marqueeInner}>
            <div className={styles.track}>
              <LogoStrip stripId="m1" />
              <LogoStrip stripId="m2" ariaHidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

