"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/common/header.module.css";
import logo from "../../assests/logo.png";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { KnowledgeHubMenu } from "./KnowledgeHubMenu";
import { KNOWLEDGE_HUB_HREF } from "./knowledgeHubMenu.data";

function navItemIsActive(pathname: string, href: string): boolean {
  if (href.startsWith("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const HOVER_CLOSE_DELAY_MS = 140;

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [knowledgeHubOpen, setKnowledgeHubOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileKnowledgeHubOpen, setMobileKnowledgeHubOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const knowledgeHubRef = useRef<HTMLDivElement>(null);
  const servicesCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const knowledgeCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearServicesCloseTimer = () => {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current);
      servicesCloseTimerRef.current = null;
    }
  };

  const clearKnowledgeCloseTimer = () => {
    if (knowledgeCloseTimerRef.current) {
      clearTimeout(knowledgeCloseTimerRef.current);
      knowledgeCloseTimerRef.current = null;
    }
  };

  const openServicesMenu = () => {
    clearServicesCloseTimer();
    setKnowledgeHubOpen(false);
    setServicesOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    clearServicesCloseTimer();
    servicesCloseTimerRef.current = setTimeout(() => {
      setServicesOpen(false);
      servicesCloseTimerRef.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  };

  const openKnowledgeHubMenu = () => {
    clearKnowledgeCloseTimer();
    setServicesOpen(false);
    setKnowledgeHubOpen(true);
  };

  const scheduleCloseKnowledgeHubMenu = () => {
    clearKnowledgeCloseTimer();
    knowledgeCloseTimerRef.current = setTimeout(() => {
      setKnowledgeHubOpen(false);
      knowledgeCloseTimerRef.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  };

  useEffect(() => {
    setServicesOpen(false);
    setKnowledgeHubOpen(false);
    setMobileServicesOpen(false);
    setMobileKnowledgeHubOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      clearServicesCloseTimer();
      clearKnowledgeCloseTimer();
    };
  }, []);

  useEffect(() => {
    if (!servicesOpen && !knowledgeHubOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setKnowledgeHubOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [servicesOpen, knowledgeHubOpen]);

  const servicesActive = navItemIsActive(pathname, "/services");
  const knowledgeHubActive =
    pathname === "/blog" ||
    pathname.startsWith("/blog/") ||
    pathname === "/news" ||
    pathname.startsWith("/news/") ||
    pathname === KNOWLEDGE_HUB_HREF;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="Ornate home">
          <Image src={logo} alt="Ornate" priority className={styles.logo} />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <Link
            href="/"
            className={`${styles.navLink} ${navItemIsActive(pathname, "/") ? styles.navLinkActive : ""}`}
            aria-current={navItemIsActive(pathname, "/") ? "page" : undefined}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${navItemIsActive(pathname, "/about") ? styles.navLinkActive : ""}`}
            aria-current={navItemIsActive(pathname, "/about") ? "page" : undefined}
          >
            About
          </Link>

          <div
            className={styles.navDropdown}
            ref={servicesRef}
            onMouseEnter={openServicesMenu}
            onMouseLeave={scheduleCloseServicesMenu}
            onFocus={openServicesMenu}
            onBlur={(e) => {
              if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
                scheduleCloseServicesMenu();
              }
            }}
          >
            <Link
              href="/services"
              className={`${styles.navLink} ${servicesActive ? styles.navLinkActive : ""}`}
              aria-current={servicesActive ? "page" : undefined}
            >
              Services
            </Link>

            {servicesOpen ? (
              <div className={styles.megaMenuWrap}>
                <ServicesMegaMenu onNavigate={() => setServicesOpen(false)} />
              </div>
            ) : null}
          </div>

          <div
            className={styles.navDropdown}
            ref={knowledgeHubRef}
            onMouseEnter={openKnowledgeHubMenu}
            onMouseLeave={scheduleCloseKnowledgeHubMenu}
            onFocus={openKnowledgeHubMenu}
            onBlur={(e) => {
              if (!knowledgeHubRef.current?.contains(e.relatedTarget as Node)) {
                scheduleCloseKnowledgeHubMenu();
              }
            }}
          >
            <Link
              href={KNOWLEDGE_HUB_HREF}
              className={`${styles.navLink} ${knowledgeHubActive ? styles.navLinkActive : ""}`}
              aria-current={knowledgeHubActive ? "page" : undefined}
            >
              Knowledge Hub
            </Link>

            {knowledgeHubOpen ? (
              <div className={styles.hubMenuWrap}>
                <KnowledgeHubMenu onNavigate={() => setKnowledgeHubOpen(false)} />
              </div>
            ) : null}
          </div>

          <Link
            href="/contact"
            className={`${styles.navLink} ${navItemIsActive(pathname, "/contact") ? styles.navLinkActive : ""}`}
            aria-current={navItemIsActive(pathname, "/contact") ? "page" : undefined}
          >
            Contact Us
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link
            href="https://crm1.ornatequality.com/login"
            className={styles.loginBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LOGIN
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <div className={styles.mobileMenu} role="dialog" aria-label="Menu">
          <div className={styles.mobileNav}>
            <Link
              href="/"
              className={`${styles.mobileLink} ${navItemIsActive(pathname, "/") ? styles.mobileLinkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${styles.mobileLink} ${navItemIsActive(pathname, "/about") ? styles.mobileLinkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <div className={styles.mobileServicesBlock}>
              <div className={styles.mobileServicesRow}>
                <Link
                  href="/services"
                  className={`${styles.mobileLink} ${styles.mobileServicesMain} ${servicesActive ? styles.mobileLinkActive : ""}`}
                  onClick={() => setOpen(false)}
                >
                  Services
                </Link>
                <button
                  type="button"
                  className={styles.mobileServicesExpand}
                  aria-expanded={mobileServicesOpen}
                  aria-label={mobileServicesOpen ? "Hide services list" : "Show services list"}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span className={`${styles.chevron} ${mobileServicesOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path
                        d="m6 9 6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              {mobileServicesOpen ? (
                <ServicesMegaMenu
                  variant="mobile"
                  onNavigate={() => {
                    setMobileServicesOpen(false);
                    setOpen(false);
                  }}
                />
              ) : null}
            </div>

            <div className={styles.mobileServicesBlock}>
              <div className={styles.mobileServicesRow}>
                <Link
                  href={KNOWLEDGE_HUB_HREF}
                  className={`${styles.mobileLink} ${styles.mobileServicesMain} ${knowledgeHubActive ? styles.mobileLinkActive : ""}`}
                  onClick={() => setOpen(false)}
                >
                  Knowledge Hub
                </Link>
                <button
                  type="button"
                  className={styles.mobileServicesExpand}
                  aria-expanded={mobileKnowledgeHubOpen}
                  aria-label={mobileKnowledgeHubOpen ? "Hide knowledge hub menu" : "Show knowledge hub menu"}
                  onClick={() => setMobileKnowledgeHubOpen((v) => !v)}
                >
                  <span className={`${styles.chevron} ${mobileKnowledgeHubOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path
                        d="m6 9 6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              {mobileKnowledgeHubOpen ? (
                <KnowledgeHubMenu
                  variant="mobile"
                  onNavigate={() => {
                    setMobileKnowledgeHubOpen(false);
                    setOpen(false);
                  }}
                />
              ) : null}
            </div>

            <Link
              href="/contact"
              className={`${styles.mobileLink} ${navItemIsActive(pathname, "/contact") ? styles.mobileLinkActive : ""}`}
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="https://crm1.ornatequality.com/login"
              className={styles.mobileLoginBtn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              LOGIN
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
