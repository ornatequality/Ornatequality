"use client";

import React from "react";
import Link from "next/link";
import styles from "@/styles/common/knowledgeHubMenu.module.css";
import { knowledgeHubMenuItems } from "./knowledgeHubMenu.data";

type KnowledgeHubMenuProps = {
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
};

export function KnowledgeHubMenu({ variant = "desktop", onNavigate }: KnowledgeHubMenuProps) {
  return (
    <nav
      className={variant === "mobile" ? styles.mobilePanel : styles.panel}
      aria-label="Knowledge Hub menu"
    >
      <ul className={styles.list}>
        {knowledgeHubMenuItems.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className={styles.itemLink} onClick={onNavigate}>
              <span className={styles.itemText}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemDesc}>{item.description}</span>
              </span>
              <span
               className={styles.itemArrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="m9 6 6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

