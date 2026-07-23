"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/common/servicesMegaMenu.module.css";
import {
  servicesMegaMenuColumns,
  serviceHref,
  type MegaMenuIcon,
  type MegaMenuColumn,
} from "./servicesMegaMenu.data";

const COLUMN_META: Record<string, { tagline: string; className: string }> = {
  certification: {
    tagline: "Standards, marks & approvals",
    className: styles.column_cert,
  },
  registration: {
    tagline: "Licences & regulatory filings",
    className: styles.column_reg,
  },
  inspection: {
    tagline: "Independent inspection & quality assurance",
    className: styles.column_insp,
  },
  other: {
    tagline: "Specialised compliance & technical support",
    className: styles.column_other,
  },
};

function ColumnHeaderIcon({ column }: { column: MegaMenuColumn }) {
  if (column.headerGlyph === "reg") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="9" y="3" width="6" height="4" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m9 13 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (column.headerGlyph === "cert") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="m9.5 9 1.8 1.8L14.5 7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9.5 14.5 8 21l4-2 4 2-1.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (column.headerGlyph === "insp") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <rect x="4" y="3" width="12" height="16" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 8h6M7 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m18.8 18.8 2.2 2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M4 14v-2a8 8 0 0 1 16 0v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="2" y="14" width="4" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="18" y="14" width="4" height="6" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 17h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MenuItemIcon({ icon }: { icon: MegaMenuIcon }) {
  if (icon.type === "image") {
    return (
      <span className={styles.itemIcon}>
        <Image src={icon.src} alt={icon.alt} width={28} height={28} className={styles.itemIconImg} />
      </span>
    );
  }

  return (
    <span className={`${styles.itemIcon} ${styles[`glyph_${icon.tone}`]}`} aria-hidden="true">
      <span className={styles.glyphText}>{icon.glyph}</span>
    </span>
  );
}

function parseItemLabel(label: string): { primary: string; secondary?: string } {
  const parenMatch = label.match(/^(.+?)\s*\((.+)\)$/);
  if (parenMatch) {
    return { primary: parenMatch[1].trim(), secondary: parenMatch[2].trim() };
  }

  const pipeParts = label.split("|").map((part) => part.trim());
  if (pipeParts.length === 2) {
    return { primary: pipeParts[0], secondary: pipeParts[1] };
  }

  return { primary: label };
}

function MenuItemLabel({ label }: { label: string }) {
  const { primary, secondary } = parseItemLabel(label);

  return (
    <span className={styles.itemText}>
      <span className={styles.itemPrimary}>{primary}</span>
      {secondary ? <span className={styles.itemSecondary}>{secondary}</span> : null}
    </span>
  );
}

type ServicesMegaMenuProps = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function ServicesMegaMenu({ variant = "desktop", onNavigate }: ServicesMegaMenuProps) {
  const isMobile = variant === "mobile";

  return (
    <div
      className={isMobile ? styles.mobilePanel : styles.panel}
      role="navigation"
      aria-label="Services menu"
    >
      <div className={styles.columns}>
        {servicesMegaMenuColumns.map((column) => {
          const meta = COLUMN_META[column.id] ?? COLUMN_META.other;

          return (
            <div key={column.id} className={`${styles.column} ${meta.className}`}>
              <div className={styles.columnHead}>
                <div className={styles.columnHeadMain}>
                  <span className={styles.columnHeadIcon} aria-hidden="true">
                    <ColumnHeaderIcon column={column} />
                  </span>
                  <div className={styles.columnHeadText}>
                    <h3 className={styles.columnTitle}>{column.title}</h3>
                    <p className={styles.columnTagline}>{meta.tagline}</p>
                  </div>
                </div>
                <span className={styles.columnCount}>{column.items.length}</span>
              </div>
              <div className={styles.columnRule} aria-hidden="true" />

              <ul className={styles.itemList}>
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={serviceHref(item.slug)} className={styles.itemLink} onClick={onNavigate}>
                      <MenuItemIcon icon={item.icon} />
                      <MenuItemLabel label={item.label} />
                      <span className={styles.itemArrow} aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className={styles.panelFooter}>
        <Link href="/services#services-list" className={styles.viewAllLink} onClick={onNavigate}>
          View all services <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
