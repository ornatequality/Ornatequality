"use client";

import React, { useState } from "react";
import { parseApiResponse } from "@/lib/parseApiResponse";
import styles from "@/styles/bisCrsRegistration.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

type ServiceCallbackFormProps = {
  idPrefix: string;
  defaultService: string;
  serviceOptions: string[];
  successText: string;
  mobilePlaceholder?: string;
  serviceSelectClassName?: "formSelect" | "formInput";
};

export function ServiceCallbackForm({
  idPrefix,
  defaultService,
  serviceOptions,
  successText,
  mobilePlaceholder = "10-digit mobile number",
  serviceSelectClassName = "formSelect",
}: ServiceCallbackFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const service = String(formData.get("service") || defaultService).trim();

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("mobile"),
          message: `Callback request for: ${service}`,
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

  if (status === "success") {
    return (
      <div className={styles.formSuccess}>
        <span className={styles.formSuccessIcon} aria-hidden="true">
          ✓
        </span>
        <p className={styles.formSuccessTitle}>Request Submitted!</p>
        <p className={styles.formSuccessText}>{successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor={`${idPrefix}-callback-name`}>
          Name
        </label>
        <input
          id={`${idPrefix}-callback-name`}
          className={styles.formInput}
          type="text"
          name="name"
          required
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor={`${idPrefix}-callback-email`}>
          Email
        </label>
        <input
          id={`${idPrefix}-callback-email`}
          className={styles.formInput}
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor={`${idPrefix}-callback-mobile`}>
          Mobile Number
        </label>
        <input
          id={`${idPrefix}-callback-mobile`}
          className={styles.formInput}
          type="tel"
          name="mobile"
          required
          inputMode="tel"
          placeholder={mobilePlaceholder}
          autoComplete="tel"
        />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor={`${idPrefix}-callback-service`}>
          Service
        </label>
        <select
          id={`${idPrefix}-callback-service`}
          className={styles[serviceSelectClassName]}
          name="service"
          defaultValue={defaultService}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={styles.formSubmit} disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </button>
      {status === "error" && (
        <p className={styles.formStatusError} role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
