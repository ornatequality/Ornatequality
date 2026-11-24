"use client";

import React, { useState } from "react";
import { manrope } from "@/lib/fonts";
import { parseApiResponse } from "@/lib/parseApiResponse";
import {
  DEFAULT_PHONE,
  DEFAULT_PHONE_2,
  SITE_EMAIL,
  SITE_EMAIL_MARKETING,
} from "@/lib/site";
import styles from "../../styles/query.module.css";

const MAPS_URL =
  "https://www.google.com/maps/place/Supertech+Astralis/@28.5510933,77.3245904,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5ce975fb079:0xe10ea4df9cc7fa68!8m2!3d28.5510933!4d77.3245904!16s%2Fg%2F11gk7j2v35";

const SERVICES = [
  "BIS certification (ISI / CRS / FMCS)",
  "WPC-ETA",
  "BEE",
  "EPR",
  "FSSAI / LMPC",
  "CDSCO",
  "Other / Not sure",
];

type FormStatus = "idle" | "loading" | "success" | "error";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M6.6 2.8h.02c.7-.1 1.4.3 1.7 1l1.1 2.7c.2.6.1 1.2-.3 1.6l-1 1c-.1.1-.2.3-.1.5 1 2.1 2.7 3.8 4.8 4.8.2.1.4 0 .5-.1l1-1c.5-.4 1.1-.5 1.6-.3l2.7 1.1c.7.3 1.1 1 1 1.7v.02c-.2 1.6-1.6 2.8-3.2 2.8C10 22.4 1.6 14 1.6 3.9c0-1.6 1.2-3 2.9-3.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        d="M4 6.5h16v11H4v-11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 7.2 12 12.4 19.5 7.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

const Query = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const product = String(formData.get("message") || "").trim();
    const service = String(formData.get("service") || "").trim();

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service,
          message: product || `Callback request for ${service || "certification"}`,
          source: "home-query",
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

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="home-query"
      className={`${styles.section} ${manrope.className}`}
      aria-label="Request a call back"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Contact</p>
            <h2 className={styles.title}>
              Request a Quote
              <br />
              for Your Product
              <br />
              <span className={styles.underline}>Certification</span>
            </h2>
            <p className={styles.subtitle}>
              Tell us about your product. Our team replies with the approvals
              that apply, the documents needed and a quote.
            </p>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                <PhoneIcon />
              </span>
              <div className={styles.infoText}>
                <a href="tel:+919266877738">{DEFAULT_PHONE.replace("-", " ")}</a>
                <span>
                  {DEFAULT_PHONE_2.replace("-", " ")} · Call or WhatsApp
                </span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.infoIcon} aria-hidden="true">
                <MailIcon />
              </span>
              <div className={styles.infoText}>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
                <span>{SITE_EMAIL_MARKETING}</span>
              </div>
            </div>

            <div className={styles.mapCard}>
              <iframe
                className={styles.mapIframe}
                title="Ornate Quality office at Supertech Astralis, Sector 94, Noida"
                src="https://www.google.com/maps?q=Supertech+Astralis,+Sector+94,+Noida,+Uttar+Pradesh+201304&hl=en&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className={styles.mapBtn}
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <form className={styles.card} onSubmit={handleSubmit} noValidate>
            <h3 className={styles.cardTitle}>Request a call back</h3>
            <p className={styles.cardLead}>
              Share a few details and our team will get back to you.
            </p>

            <div className={styles.row}>
              <label className={styles.field}>
                Full name
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className={styles.field}>
                Mobile number
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  required
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.field}>
                Email
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label className={styles.field}>
                Service
                <select name="service" defaultValue={SERVICES[0]}>
                  {SERVICES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className={styles.field}>
              About your product
              <textarea
                name="message"
                rows={3}
                placeholder="Product, model, where it is made and your target launch date"
              />
            </label>

            <button type="submit" className={styles.submit} disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Request a Call Back"}
              <span aria-hidden="true">→</span>
            </button>

            {status === "success" && (
              <p className={styles.ok} role="status">
                Thank you! We will call you back shortly.
              </p>
            )}
            {status === "error" && (
              <p className={styles.err} role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Query;
