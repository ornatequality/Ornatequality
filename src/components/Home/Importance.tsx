import React from "react";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/importance.module.css";
import {
  IconAvoidPenalties,
  IconBusinessGrowth,
  IconLegalCompliance,
  IconMarketTrust,
  IconProductApproval,
} from "./ImportanceIcons";

type Item = {
  title: string;
  desc: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const ITEMS: Item[] = [
  { title: "Legal Compliance", desc: "Meet government regulations", Icon: IconLegalCompliance },
  { title: "Avoid Penalties", desc: "Stay safe from fines & legal actions", Icon: IconAvoidPenalties },
  { title: "Market Trust", desc: "Build customer confidence", Icon: IconMarketTrust },
  { title: "Product Approval", desc: "Easy market entry & expansion", Icon: IconProductApproval },
  { title: "Business Growth", desc: "Increase sales & brand value", Icon: IconBusinessGrowth },
];

const Importance = () => {
  return (
    <section className={styles.section} aria-label="Why certification matters">
      <div className={styles.container}>
        <div className={styles.headingWrap}>
          <h2 className={`${styles.heading} ${playfair.className}`}>Why certification Matters</h2>
          <div className={styles.underline} aria-hidden="true" />
        </div>

        <div className={styles.shell}>
          <div className={styles.row} role="list">
            {ITEMS.map((it) => (
              <div key={it.title} className={styles.item} role="listitem" data-imp-card="true">
                <div className={styles.icon} aria-hidden="true">
                  <it.Icon />
                </div>
                <div className={styles.text}>
                  <div className={styles.itemTitle}>{it.title}</div>
                  <div className={styles.itemDesc}>{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;
