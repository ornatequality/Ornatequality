"use client";

import React, { useState } from "react";
import { parseApiResponse } from "@/lib/parseApiResponse";
import { pushGenerateLeadEvent } from "@/lib/analytics";
import defaultStyles from "@/styles/contact.module.css";
import adsStyles from "@/styles/adsContactForm.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormProps = {
  variant?: "default" | "ads";
};

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const styles = variant === "ads" ? adsStyles : defaultStyles;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          city: formData.get("city"),
          message: formData.get("message"),
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
      pushGenerateLeadEvent({
        page_type: variant === "ads" ? "ads_landing" : "contact",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row2}>
          <input className={styles.input} type="text" name="name" placeholder="Your Name *" required />
          <input className={styles.input} type="email" name="email" placeholder="Your Email *" required />
        </div>

        <div className={styles.row2}>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            inputMode="numeric"
            placeholder="Phone Number *"
            required
          />
          <input className={styles.input} type="text" name="city" placeholder="Your City *" required />
        </div>

        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Enter Your Message *"
          rows={5}
          required
        />

        <button className={styles.submit} type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>
      </form>

      {status === "success" && (
        <p className={`${styles.formStatus} ${styles.formStatusSuccess}`} role="status">
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status === "error" && (
        <p className={`${styles.formStatus} ${styles.formStatusError}`} role="alert">
          {errorMessage}
        </p>
      )}
    </>
  );
}
