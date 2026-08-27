"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { playfair } from "@/lib/fonts";
import { parseApiResponse } from "@/lib/parseApiResponse";
import { pushGenerateLeadEvent } from "@/lib/analytics";
import styles from "@/styles/consultationPopup.module.css";
import logo from "@/assests/logo.webp";
import buildingImg from "@/assests/popup-building.webp";
import trustSealImg from "@/assests/popup-trust-seal.webp";
import bisIcon from "@/assests/certi-img/BIS.webp";
import isiIcon from "@/assests/certi-img/isi.webp";
import wpcIcon from "@/assests/certi-img/wpc.webp";
import tecIcon from "@/assests/certi-img/tec.webp";
import lmpcIcon from "@/assests/certi-img/lmpc.webp";
import beeIcon from "@/assests/certi-img/BEElogo.webp";

const SERVICES = [
  "BIS Certification",
  "ISI Mark Certification",
  "BIS CRS Registration",
  "WPC Approval",
  "TEC Certification",
  "LMPC Registration",
  "BEE Registration",
  "FMCS Certification",
  "Other / Not Sure",
] as const;

const CERT_BADGES = [
  { label: "BIS", src: bisIcon },
  { label: "ISI", src: isiIcon },
  { label: "CRS", src: bisIcon },
  { label: "WPC", src: wpcIcon },
  { label: "TEC", src: tecIcon },
  { label: "LMPC", src: lmpcIcon },
  { label: "BEE", src: beeIcon },
  { label: "FMCS", src: bisIcon },
] as const;

const FEATURES = [
  {
    title: "Expert Guidance",
    description: "Get advice from industry experts",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <circle cx="10.2" cy="7.6" r="3.1" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4.2 19.8c.9-3.6 3.3-5.5 6-5.5 1.2 0 2.3.4 3.3 1.1"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          fill="currentColor"
          d="M17.9 3.2 18.7 5l1.9.28-1.38 1.34.33 1.9-1.65-.88-1.65.88.33-1.9L15.2 5.28 17.1 5z"
        />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    description: "From documentation to final approval",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <path
          d="M6.5 3.4h8.2L19 7.8v12.8H6.5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M14.7 3.4v4.4H19" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M9.4 11.4h5.4M9.4 14.4h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="17.2" cy="17.6" r="3.3" fill="#fff9f2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="16.6" r="1.05" fill="currentColor" />
        <path
          d="M15.15 20.2c.35-1.05 1.05-1.55 2.05-1.55s1.7.5 2.05 1.55"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Faster Approvals",
    description: "Quick & hassle-free certification process",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M11 7.2v4.1l2.8 1.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17.1" cy="17.1" r="3.7" fill="#fff9f2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M15.5 17.2 16.7 18.4 19 15.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Trusted Partner",
    description: "5000+ businesses trust Ornate",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <path
          d="M12 3.2 5.2 6.1v6.1c0 4.5 3.1 8.4 6.8 9.3 3.7-.9 6.8-4.8 6.8-9.3V6.1L12 3.2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.6 12.2 11 14.6l4.6-4.8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const POPUP_SEEN_KEY = "consultation_popup_seen";

function hasSeenPopup() {
  try {
    return sessionStorage.getItem(POPUP_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markPopupSeen() {
  try {
    sessionStorage.setItem(POPUP_SEEN_KEY, "1");
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
}

function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
  );
}

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
      />
    </svg>
  );
}

function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4 21V3h10v18H4Zm12 0V9h4v12h-4ZM6 7h2v2H6V7Zm0 4h2v2H6v-2Zm0 4h2v2H6v-2Zm4-8h2v2h-2V7Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z"
      />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Z"
      />
    </svg>
  );
}

function IconSend(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path fill="currentColor" d="m2 21 21-9L2 3v7l15 2-15 2v7Z" />
    </svg>
  );
}

function IconLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-3 0H10V6a2 2 0 0 1 4 0v2Z"
      />
    </svg>
  );
}

export default function ConsultationPopup() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const dismissPopup = useCallback(() => {
    markPopupSeen();
    setOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || hasSeenPopup()) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      markPopupSeen();
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();

    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    if (!/^\d{10,15}$/.test(phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid phone number (10–15 digits only).");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city: company || "Not provided",
          message: `Consultation popup request for: ${service}`,
          source: "consultation-popup",
          service,
        }),
      });

      const result = await parseApiResponse(response);

      if (!response.ok || !result.success) {
        const firstError =
          result.errors && typeof result.errors === "object"
            ? Object.values(result.errors)[0]
            : result.message;
        throw new Error(
          typeof firstError === "string" ? firstError : "Submission failed. Please try again."
        );
      }

      setStatus("success");
      pushGenerateLeadEvent({ page_type: "contact" });

      setTimeout(() => {
        dismissPopup();
        setStatus("idle");
        setServiceOpen(false);
        form.reset();
      }, 1800);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (!mounted || !open) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={dismissPopup}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeBtn}
          aria-label="Close consultation popup"
          onClick={dismissPopup}
        >
          ×
        </button>

        <div className={styles.modalBody}>
          <div className={styles.left}>
            <div className={styles.leftMain}>
              <div className={styles.leftContent}>
                <div className={styles.logoWrap}>
                  <Image src={logo} alt="Ornate Quality Services" priority className={styles.logo} />
                </div>

                <span className={styles.consultLabel}>
                  — EXPERT
                  <span className={styles.consultShield} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                      <path
                        fill="currentColor"
                        d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Z"
                      />
                    </svg>
                  </span>
                  CONSULTATION —
                </span>

                <h2 className={`${styles.headline} ${playfair.className}`}>
                  <span className={styles.headlineLineInline}>Get Expert</span>
                  <span className={`${styles.headlineLine} ${styles.headlineGold}`}>Compliance</span>
                  <span className={styles.headlineLine}>Guidance</span>
                </h2>
                <span className={styles.headlineDivider} aria-hidden="true" />

                <p className={styles.lead}>
                  <span className={styles.leadLine}>End-to-end certification support for</span>
                  <span className={styles.leadLine}>
                    BIS, ISI, CRS, WPC, TEC, LMPC, BEE, FMCS and other
                  </span>
                  <span className={styles.leadLine}>mandatory approvals with faster turnaround</span>
                  <span className={styles.leadLine}>and expert assistance.</span>
                </p>
              </div>

              <div className={styles.buildingCol}>
                <Image
                  src={buildingImg}
                  alt="Supernova Astralis — Ornate Quality Services office building"
                  fill
                  sizes="320px"
                  className={styles.buildingImg}
                  priority
                />
                <div className={styles.trustSeal} aria-hidden="true">
                  <Image
                    src={trustSealImg}
                    alt=""
                    width={96}
                    height={96}
                    className={styles.trustSealImg}
                  />
                </div>
              </div>
            </div>

            <div className={styles.featuresRow}>
              {FEATURES.map(({ title, description, icon }) => (
                <div key={title} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{icon}</span>
                  <span className={styles.featureTitle}>{title}</span>
                  <span className={styles.featureDesc}>{description}</span>
                </div>
              ))}
            </div>

            <div className={styles.partnerBand}>
              <span className={styles.partnerEmblem} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path
                    fill="currentColor"
                    d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
                  />
                </svg>
              </span>
              <div className={styles.partnerBandCopy}>
                <span className={`${styles.partnerBandTitle} ${playfair.className}`}>
                  Your Reliable Compliance Partner
                </span>
                <span className={styles.partnerBandLines}>
                  Committed to Quality. Focused on Compliance. Driven by Trust.
                </span>
              </div>
              <span className={styles.partnerBandSep} aria-hidden="true" />
              <div className={styles.partnerBandStat}>
                <span className={`${styles.partnerBandTitle} ${playfair.className}`}>
                  Trusted by 5000+
                </span>
                <span className={styles.partnerBandLines}>Businesses Across India</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <span className={styles.formHeaderIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path
                      fill="currentColor"
                      d="M8 11a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 8 11Zm8 0a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 16 11ZM8 13c-3.2 0-6 1.5-6 3.4V18h8.2A6.4 6.4 0 0 1 9 13.2 8.7 8.7 0 0 1 8 13Zm8 0a8.7 8.7 0 0 1-1 .2 6.4 6.4 0 0 1-1.2 4.8H22v-1.6C22 14.5 19.2 13 16 13Z"
                    />
                  </svg>
                </span>
                <h3 id="consultation-popup-title" className={`${styles.formTitle} ${playfair.className}`}>
                  Book an Expert Consultation
                </h3>
                <span className={styles.titleDivider} aria-hidden="true" />
                <p className={styles.formSubtitle}>
                  Fill in your details and our compliance expert will get in touch with you shortly.
                </p>
              </div>

              {status === "success" ? (
                <div className={styles.successBox} role="status">
                  <span className={styles.successIcon} aria-hidden="true">
                    ✓
                  </span>
                  <p className={styles.successTitle}>Request Submitted!</p>
                  <p className={styles.successText}>Our expert will contact you shortly.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <label className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <IconUser />
                    </span>
                    <input name="name" type="text" placeholder="Full Name" required autoComplete="name" />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <IconMail />
                    </span>
                    <input
                      name="email"
                      type="email"
                      placeholder="Business Email"
                      required
                      autoComplete="email"
                      pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                      title="Please enter a valid email address"
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <IconPhone />
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                      inputMode="numeric"
                      autoComplete="tel"
                      pattern="[0-9]{10,15}"
                      minLength={10}
                      maxLength={15}
                      title="Enter 10–15 digits only"
                      onInput={(event) => {
                        event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 15);
                      }}
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <IconBuilding />
                    </span>
                    <input
                      name="company"
                      type="text"
                      placeholder="Company Name (Optional)"
                      autoComplete="organization"
                    />
                  </label>

                  <label className={`${styles.field} ${serviceOpen ? styles.fieldSelectOpen : ""}`}>
                    <span className={styles.fieldIcon}>
                      <IconShield />
                    </span>
                    <select
                      name="service"
                      defaultValue=""
                      required
                      aria-label="Select Service"
                      size={serviceOpen ? 4 : 1}
                      className={serviceOpen ? styles.selectOpen : undefined}
                      onFocus={() => setServiceOpen(true)}
                      onBlur={() => setServiceOpen(false)}
                      onChange={() => setServiceOpen(false)}
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      {SERVICES.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button className={styles.submitBtn} type="submit" disabled={status === "loading"}>
                    <IconSend />
                    {status === "loading" ? "SUBMITTING..." : "REQUEST EXPERT CONSULTATION"}
                  </button>

                  {status === "error" ? (
                    <p className={styles.errorText} role="alert">
                      {errorMessage}
                    </p>
                  ) : null}

                  <p className={styles.secureLine}>
                    <IconLock />
                    Your information is safe with us. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <div className={styles.certRow} aria-label="Certifications we support">
            {CERT_BADGES.map(({ label, src }) => (
              <div key={label} className={styles.certBadge}>
                <div className={styles.certIcon}>
                  <Image src={src} alt="" fill sizes="32px" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
