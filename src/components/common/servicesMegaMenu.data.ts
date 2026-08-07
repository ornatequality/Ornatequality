import type { StaticImageData } from "next/image";

import bisLogo from "@/assests/certi-img/BIS.webp";
import beeLogo from "@/assests/certi-img/BEElogo.webp";
import eprLogo from "@/assests/certi-img/epr-icon.webp";
import lmpcLogo from "@/assests/certi-img/lmpc.webp";
import isoLogo from "@/assests/certi-img/iso.webp";
import wpcLogo from "@/assests/certi-img/wpc.webp";
import tecLogo from "@/assests/certi-img/tec.webp";
import nablLogo from "@/assests/certi-img/nabl.webp";

export type MegaMenuIcon =
  | { type: "image"; src: StaticImageData; alt: string }
  | { type: "glyph"; glyph: string; tone: "blue" | "green" | "red" | "teal" | "navy" | "orange" };

export type MegaMenuItem = {
  label: string;
  slug: string;
  icon: MegaMenuIcon;
};

export type MegaMenuColumn = {
  id: string;
  title: string;
  accent: "red" | "teal" | "green" | "orange" | "blue";
  headerGlyph: string;
  items: MegaMenuItem[];
};

export const SERVICE_ROUTES = {
  bisCrs: "/services/bis-crs-registration",
  bisIsi: "/services/bis-isi-mark-certification",
  bisFmcs: "/services/bis-fmcs-certification",
  bee: "/services/bee-certification",
  wpc: "/services/wpc-eta-approval",
  tec: "/services/tec-certification",
  ce: "/services/ce-certification",
  lmpc: "/services/lmpc-registration",
  epr: "/services/epr-registration",
  gem: "/services/gem-registration",
  iec: "/services/iec-registration",
  trademark: "/services/trademark-registration",
  iso: "/services/iso-certification",
  fssai: "/services/fssai-registration",
  cdsco: "/services/cdsco-registration",
  pesoCcoe: "/services/peso-ccoe-registration",
  nabl: "/services/nabl-accreditation",
  tpi: "/services/third-party-inspection",
  rohs: "/services/rohs-certification",
  audit: "/services/audit-services",
} as const;

export const SERVICE_PAGE_ANCHORS = {
  bis: "bis-certification",
  bee: "bee-registration",
  epr: "epr-registration",
  lmpc: "lmpc-registration",
  wpc: "wpc-approval",
  tec: "tec-certification",
  ce: "ce-certification",
  testing: "testing-documentation",
  list: "services-list",
} as const;

export function serviceHref(slug: string) {
  if (slug.startsWith("/")) return slug;
  return `/services#${slug}`;
}

const TPI_SERVICES = `${SERVICE_ROUTES.tpi}#services-offered`;

export const servicesMegaMenuColumns: MegaMenuColumn[] = [
  {
    id: "certification",
    title: "CERTIFICATION",
    accent: "teal",
    headerGlyph: "cert",
    items: [
      {
        label: "BIS-ISI MARK CERTIFICATION",
        slug: SERVICE_ROUTES.bisIsi,
        icon: { type: "image", src: bisLogo, alt: "BIS ISI" },
      },
      {
        label: "ISO CERTIFICATION(International Organization for Standardization)",
        slug: SERVICE_ROUTES.iso,
        icon: { type: "image", src: isoLogo, alt: "ISO" },
      },
      {
        label: "CE CERTIFICATION",
        slug: SERVICE_ROUTES.ce,
        icon: { type: "glyph", glyph: "CE", tone: "blue" },
      },
      {
        label: "FMCS CERTIFICATION (Foreign Manufacturers Certification Scheme)",
        slug: SERVICE_ROUTES.bisFmcs,
        icon: { type: "glyph", glyph: "FM", tone: "navy" },
      },
      {
        label: "BIS CERTIFICATION FOR TOYS",
        slug: SERVICE_PAGE_ANCHORS.bis,
        icon: { type: "glyph", glyph: "TOY", tone: "teal" },
      },
      {
        label: "CCOE / PESO CERTIFICATION",
        slug: SERVICE_ROUTES.pesoCcoe,
        icon: { type: "glyph", glyph: "CC", tone: "navy" },
      },
      {
        label: "CDSCO CERTIFICATION(Central Drugs Standard Control Organization)",
        slug: SERVICE_ROUTES.cdsco,
        icon: { type: "glyph", glyph: "Rx", tone: "red" },
      },
    ],
  },
  {
    id: "registration",
    title: "REGISTRATION",
    accent: "red",
    headerGlyph: "reg",
    items: [
      {
        label: "BIS(CRS) REGISTRATION",
        slug: SERVICE_ROUTES.bisCrs,
        icon: { type: "image", src: bisLogo, alt: "BIS CRS" },
      },
      {
        label: "BEE REGISTRATION(Bureau of Energy Efficiency)",
        slug: SERVICE_ROUTES.bee,
        icon: { type: "image", src: beeLogo, alt: "BEE" },
      },
      {
        label: "EPR REGISTRATION(Extended Producer Responsibility)",
        slug: SERVICE_ROUTES.epr,
        icon: { type: "image", src: eprLogo, alt: "EPR" },
      },
      {
        label: "GEM REGISTRATION (Government e-Marketplace)",
        slug: SERVICE_ROUTES.gem,
        icon: { type: "glyph", glyph: "GeM", tone: "orange" },
      },
      {
        label: "TRADEMARK REGISTRATION",
        slug: SERVICE_ROUTES.trademark,
        icon: { type: "glyph", glyph: "™", tone: "red" },
      },
      {
        label: "IEC REGISTRATION (Import Export Code)",
        slug: SERVICE_ROUTES.iec,
        icon: { type: "glyph", glyph: "IEC", tone: "blue" },
      },
      {
        label: "LMPC REGISTRATION (Legal Metrology Packaged Commodities)",
        slug: SERVICE_ROUTES.lmpc,
        icon: { type: "image", src: lmpcLogo, alt: "LMPC" },
      },
    ],
  },
  {
    id: "inspection",
    title: "INSPECTION & QUALITY",
    accent: "green",
    headerGlyph: "insp",
    items: [
      {
        label: "PRE-PRODUCTION INSPECTION (PPI)",
        slug: TPI_SERVICES,
        icon: { type: "glyph", glyph: "PPI", tone: "green" },
      },
      {
        label: "DURING PRODUCTION INSPECTION (DPI)",
        slug: TPI_SERVICES,
        icon: { type: "glyph", glyph: "DPI", tone: "green" },
      },
      {
        label: "FINAL RANDOM INSPECTION (FRI)",
        slug: TPI_SERVICES,
        icon: { type: "glyph", glyph: "FRI", tone: "teal" },
      },
      {
        label: "CONTAINER LOADING INSPECTION (CLI)",
        slug: TPI_SERVICES,
        icon: { type: "glyph", glyph: "CLI", tone: "navy" },
      },
      {
        label: "FACTORY & PROCESS INSPECTION",
        slug: TPI_SERVICES,
        icon: { type: "glyph", glyph: "FAC", tone: "green" },
      },
      {
        label: "PRODUCT INSPECTION",
        slug: TPI_SERVICES,
        icon: { type: "glyph", glyph: "PRD", tone: "blue" },
      },
      {
        label: "THIRD-PARTY INSPECTION (TPI)",
        slug: SERVICE_ROUTES.tpi,
        icon: { type: "glyph", glyph: "TPI", tone: "red" },
      },
    ],
  },
  {
    id: "other",
    title: "OTHER SERVICES",
    accent: "orange",
    headerGlyph: "other",
    items: [
      {
        label: "FSSAI REGISTRATION(Food Safety and Standards Authority of India)",
        slug: SERVICE_ROUTES.fssai,
        icon: { type: "glyph", glyph: "FSS", tone: "green" },
      },
      {
        label: "WPC-ETA APPROVAL",
        slug: SERVICE_ROUTES.wpc,
        icon: { type: "image", src: wpcLogo, alt: "WPC ETA" },
      },
      {
        label: "TEC APPROVAL | Department of Telecommunications",
        slug: SERVICE_ROUTES.tec,
        icon: { type: "image", src: tecLogo, alt: "TEC" },
      },
      {
        label: "ROHS COMPLIANCE",
        slug: SERVICE_ROUTES.rohs,
        icon: { type: "glyph", glyph: "RoHS", tone: "green" },
      },
      {
        label: "NABL LAB TESTING SERVICES",
        slug: SERVICE_ROUTES.nabl,
        icon: { type: "image", src: nablLogo, alt: "NABL" },
      },
      {
        label: "AUDIT SERVICES",
        slug: SERVICE_ROUTES.audit,
        icon: { type: "glyph", glyph: "AUD", tone: "navy" },
      },
      {
        label: "TECHNICAL DOCUMENTATION & COMPLIANCE SUPPORT",
        slug: SERVICE_PAGE_ANCHORS.testing,
        icon: { type: "glyph", glyph: "DOC", tone: "orange" },
      },
    ],
  },
];
