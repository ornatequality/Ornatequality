"use client";

import React, { useEffect, useState } from "react";
import { parseApiResponse } from "@/lib/parseApiResponse";
import { pushGenerateLeadEvent } from "@/lib/analytics";
import styles from "@/styles/lpBis.module.css";

export const LP_SOURCE = "lp-bis-certification";

export const SCHEME_OPTIONS = [
  "Not sure",
  "BIS CRS",
  "ISI Mark",
  "FMCS",
] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

type BisLpFormProps = {
  scheme: string;
  product?: string;
};

function RequiredMark() {
  return (
    <span className={styles.req} aria-hidden="true">
      *
    </span>
  );
}

export default function BisLpForm({ scheme, product = "" }: BisLpFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const [schemeValue, setSchemeValue] = useState(scheme);
  const [productValue, setProductValue] = useState(product);

  useEffect(() => {
    setSchemeValue(scheme);
  }, [scheme]);

  useEffect(() => {
    if (product) setProductValue(product);
  }, [product]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const city = String(formData.get("city") || "").trim();
    const productName = String(formData.get("product") || "").trim();
    const selectedScheme = String(formData.get("service") || "Not sure").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          message: `Product: ${productName}. Scheme: ${selectedScheme}.`,
          source: LP_SOURCE,
          service: selectedScheme,
        }),
      });

      const result = await parseApiResponse(response);

      if (!response.ok || !result.success) {
        const firstError =
          result.errors && typeof result.errors === "object"
            ? Object.values(result.errors)[0]
            : result.message;
        throw new Error(
          typeof firstError === "string" ? firstError : "Submission failed. Please try again.",
        );
      }

      form.reset();
      setProductValue("");
      setSchemeValue("Not sure");
      setStatus("success");
      pushGenerateLeadEvent({ page_type: "lp_bis" });
    } catch (error) {
      setStatus("error");
      setSubmitError(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.formSuccess} role="status">
        <p className={styles.formSuccessTitle}>Request received</p>
        <p className={styles.formSuccessText}>
          Thank you. We will confirm the right BIS scheme for your product and
          share a roadmap shortly.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            Full name
            <RequiredMark />
          </span>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your name"
            required
            minLength={2}
            autoComplete="name"
          />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            Mobile
            <RequiredMark />
          </span>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            inputMode="numeric"
            placeholder="10-digit number"
            required
            pattern="[6-9][0-9]{9}"
            title="Enter a 10-digit mobile number"
            autoComplete="tel"
          />
        </label>
      </div>
      <div className={styles.fieldRow}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            Email
            <RequiredMark />
          </span>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            autoComplete="email"
          />
        </label>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>
            City
            <RequiredMark />
          </span>
          <input
            className={styles.input}
            type="text"
            name="city"
            placeholder="City / factory location"
            required
            autoComplete="address-level2"
          />
        </label>
      </div>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          Product name
          <RequiredMark />
        </span>
        <input
          className={styles.input}
          type="text"
          name="product"
          placeholder="e.g. power bank, toys, steel"
          required
          value={productValue}
          onChange={(event) => setProductValue(event.target.value)}
        />
      </label>
      <label className={styles.field}>
        <span className={styles.fieldLabel}>
          BIS scheme
          <RequiredMark />
        </span>
        <select
          className={`${styles.input} ${styles.select}`}
          name="service"
          required
          value={schemeValue}
          onChange={(event) => setSchemeValue(event.target.value)}
        >
          {SCHEME_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button className={styles.submit} type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Submit"}
      </button>
      {status === "error" && submitError ? (
        <p className={styles.formError} role="alert">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
