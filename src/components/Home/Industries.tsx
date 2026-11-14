import type { ReactElement, SVGProps } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import { SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";
import featureImg from "@/assests/services/furniture/furniture-hero.jpg";
import electronicsImg from "@/assests/home/industries/electronics.jpg";
import appliancesImg from "@/assests/home/industries/appliances.jpg";
import toysImg from "@/assests/home/industries/toys.jpg";
import furnitureImg from "@/assests/home/industries/furniture.jpg";
import footwearImg from "@/assests/home/industries/footwear.jpg";
import routerImg from "@/assests/home/industries/router.jpg";
import steelImg from "@/assests/home/industries/steel.jpg";
import medicalImg from "@/assests/home/industries/medical.jpg";
import foodImg from "@/assests/home/industries/food.jpg";
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

const CATEGORIES: {
  title: string;
  meta: string;
  href: string;
  image: StaticImageData;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
}[] = [
  {
    title: "Electronics & IT",
    meta: "BIS CRS · WPC-ETA · EPR",
    href: SERVICE_ROUTES.bisCrs,
    image: electronicsImg,
    Icon: IconMonitor,
  },
  {
    title: "Electrical Appliances",
    meta: "BEE · BIS",
    href: SERVICE_ROUTES.bee,
    image: appliancesImg,
    Icon: IconAppliance,
  },
  {
    title: "Toys",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisIsi,
    image: toysImg,
    Icon: IconBlocks,
  },
  {
    title: "Furniture",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisFurniture,
    image: furnitureImg,
    Icon: IconChair,
  },
  {
    title: "Footwear",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisFootwear,
    image: footwearImg,
    Icon: IconBoot,
  },
  {
    title: "Wireless & Telecom",
    meta: "WPC-ETA · TEC",
    href: SERVICE_ROUTES.wpc,
    image: routerImg,
    Icon: IconWifi,
  },
  {
    title: "Steel & Metals",
    meta: "ISI Mark · FMCS",
    href: SERVICE_ROUTES.bisFmcs,
    image: steelImg,
    Icon: IconBeam,
  },
  {
    title: "Medical Devices",
    meta: "CDSCO",
    href: SERVICE_ROUTES.cdsco,
    image: medicalImg,
    Icon: IconPlus,
  },
  {
    title: "Food & Packaged Goods",
    meta: "FSSAI · LMPC",
    href: SERVICE_ROUTES.fssai,
    image: foodImg,
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
              sizes="(max-width: 1100px) 100vw, 420px"
              className={styles.featureImg}
            />
            <div className={styles.featureShade} aria-hidden="true" />
            <div className={styles.featureGold} aria-hidden="true" />
            <div className={styles.featureCopy}>
              <p className={styles.eyebrow}>Industries we serve</p>
              <h2 id="home-industries-heading" className={styles.featureTitle}>
                Certification Support for Every{" "}
                <span className={`${styles.accent} ${playfair.className}`}>
                  Product Category
                </span>
              </h2>
              <p className={styles.featureText}>
                Each industry has its own mix of approvals. Pick yours to see
                the service that usually applies.
              </p>
              <Link className={styles.cta} href="#home-industry-cards">
                Explore Industries <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.grid} id="home-industry-cards">
            {CATEGORIES.map(({ title, meta, href, image, Icon }) => (
              <Link key={title} href={href} className={styles.card}>
                <div className={styles.body}>
                  <div className={styles.cardHead}>
                    <span className={styles.icon}>
                      <Icon />
                    </span>
                    <h3 className={styles.cardTitle}>{title}</h3>
                  </div>
                  <p className={styles.cardMeta}>{meta}</p>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </div>
                <div className={styles.media}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="220px"
                    className={styles.mediaImg}
                  />
                  <span className={styles.merge} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
