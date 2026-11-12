import Image from "next/image";
import Link from "next/link";
import { manrope } from "@/lib/fonts";
import { SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";
import featureImg from "@/assests/services/furniture/furniture-hero.jpg";
import styles from "../../styles/homeIndustries.module.css";
import {
  IconAppliance,
  IconBeam,
  IconBlocks,
  IconBoot,
  IconBox,
  IconChair,
  IconMonitor,
  IconPlus,
  IconWifi,
} from "./IndustriesIcons";

const CATEGORIES = [
  {
    title: "Electronics & IT",
    meta: "BIS CRS · WPC-ETA · EPR",
    href: SERVICE_ROUTES.bisCrs,
    Icon: IconMonitor,
  },
  {
    title: "Electrical Appliances",
    meta: "BEE · BIS",
    href: SERVICE_ROUTES.bee,
    Icon: IconAppliance,
  },
  {
    title: "Toys",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisIsi,
    Icon: IconBlocks,
  },
  {
    title: "Furniture",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisFurniture,
    Icon: IconChair,
  },
  {
    title: "Footwear",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisFootwear,
    Icon: IconBoot,
  },
  {
    title: "Wireless & Telecom",
    meta: "WPC-ETA · TEC",
    href: SERVICE_ROUTES.wpc,
    Icon: IconWifi,
  },
  {
    title: "Steel & Metals",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisFmcs,
    Icon: IconBeam,
  },
  {
    title: "Medical Devices",
    meta: "CDSCO",
    href: SERVICE_ROUTES.cdsco,
    Icon: IconPlus,
  },
  {
    title: "Food & Packaged Goods",
    meta: "FSSAI · LMPC",
    href: SERVICE_ROUTES.fssai,
    Icon: IconBox,
  },
];

export default function Industries() {
  return (
    <section
      className={`${styles.section} ${manrope.className}`}
      aria-labelledby="home-industries-heading"
    >
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.feature}>
            <Image
              src={featureImg}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className={styles.featureImg}
            />
            <div className={styles.featureShade} aria-hidden="true" />
            <div className={styles.featureCopy}>
              <p className={styles.eyebrow}>Industries we serve</p>
              <h2 id="home-industries-heading" className={styles.featureTitle}>
                Certification Support for Every Product Category
              </h2>
              <p className={styles.featureText}>
                Each industry has its own mix of approvals. Pick yours to see
                the service that usually applies.
              </p>
              <Link className={styles.cta} href={SERVICE_ROUTES.bisFurniture}>
                BIS for Furniture <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.grid}>
            {CATEGORIES.map(({ title, meta, href, Icon }) => (
              <Link key={title} href={href} className={styles.card}>
                <span className={styles.icon}>
                  <Icon />
                </span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardMeta}>{meta}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
