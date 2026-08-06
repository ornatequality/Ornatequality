"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { playfair } from "@/lib/fonts";
import { parseApiResponse } from "@/lib/parseApiResponse";
import { pushGenerateLeadEvent } from "@/lib/analytics";
import styles from "@/styles/consultationPopup.module.css";
import logo from "@/assests/logo.png";
import buildingImg from "@/assests/popup-building.png";
import bisIcon from "@/assests/certi-img/BIS.webp";
import isiIcon from "@/assests/certi-img/isi.png";
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
    title: "13+ Years Expertise",
    description: "Deep knowledge of Indian & international standards.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 15 8l7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Zm0 4.2L10.5 9H8.3l1.8 1.3-.7 2.2L12 11.2l2.6 1.3-.7-2.2L16.7 9h-2.2L12 6.2Z"
        />
      </svg>
    ),
  },
  {
    title: "End-to-End Support",
    description: "From documents to approvals, we handle everything.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h10a2 2 0 0 1 2 2v14l-7-3-7 3V5a2 2 0 0 1 2-2Zm1 6h8v2H8V9Zm0 4h5v2H8v-2Z"
        />
      </svg>
    ),
  },
  {
    title: "Faster Approvals",
    description: "Streamlined process for quick and hassle-free certifications.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5v5.2l4.2 2.5-.9 1.5L11 13V7h2Z"
        />
      </svg>
    ),
  },
  {
    title: "Trusted by Businesses",
    description: "Committed to quality, driven by trust and transparency.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
        />
      </svg>
    ),
  },
] as const;

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
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const isServiceDetailPage = /^\/services\/[^/]+/.test(pathname);
    if (isServiceDetailPage) {
      setOpen(false);
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 0);
    return () => window.clearTimeout(timer);
  }, [mounted, pathname]);

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
        setOpen(false);
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
    <div className={styles.overlay} role="presentation" onClick={() => setOpen(false)}>
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
          onClick={() => setOpen(false)}
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

                <span className={styles.badge}>
                  <span className={styles.badgeIcon} aria-hidden="true">
                    🎁
                  </span>
                  EXPERT CONSULTATION
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
              </div>
            </div>

            <div className={styles.leftBottom}>
              <div className={styles.curveDivider} aria-hidden="true" />
              <div className={styles.featuresBar}>
                {FEATURES.map(({ title, description, icon }) => (
                  <div key={title} className={styles.featureItem}>
                    <span className={styles.featureIcon}>{icon}</span>
                    <span className={styles.featureTitle}>{title}</span>
                    <span className={styles.featureDesc}>{description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <span className={styles.formHeaderIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="currentColor"
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.5L18.5 9H14V4.5ZM8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm8 6H8v-.5a3.5 3.5 0 0 1 7 0V19Z"
                    />
                  </svg>
                </span>
                <h3 id="consultation-popup-title" className={`${styles.formTitle} ${playfair.className}`}>
                  <span className={styles.formTitleLine}>Book an</span>
                  <span className={`${styles.formTitleLine} ${styles.formTitleGold}`}>
                    Expert Consultation
                  </span>
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
          <div className={styles.partnerStrip}>
            <span className={styles.partnerShieldTop} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path
                  fill="currentColor"
                  d="M12 2 4 5.5V11c0 5.25 3.45 10.2 8 11 4.55-.8 8-5.75 8-11V5.5L12 2Zm-1 13.1-3.2-3.2 1.4-1.4L11 12.3l4.8-4.8 1.4 1.4L11 15.1Z"
                />
              </svg>
            </span>
            <div className={styles.partnerRow}>
              <span className={styles.laurel} aria-hidden="true">
                ☙
              </span>
              <div className={styles.partnerCopy}>
                <span className={`${styles.partnerText} ${playfair.className}`}>
                  Your Reliable Compliance Partner
                </span>
                <span className={styles.partnerTagline}>
                  Committed to Quality. Focused on Compliance. Driven by Trust.
                </span>
              </div>
              <span className={`${styles.laurel} ${styles.laurelRight}`} aria-hidden="true">
                ☙
              </span>
            </div>
          </div>

          <div className={styles.certRow} aria-label="Certifications we support">
            {CERT_BADGES.map(({ label, src }) => (
              <div key={label} className={styles.certBadge}>
                <div className={styles.certIcon}>
                  <Image src={src} alt="" fill sizes="28px" />
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
