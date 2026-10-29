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

type IconProps = React.SVGProps<SVGSVGElement>;

function OutlineIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const UserIcon = () => (
  <OutlineIcon>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20.5c1.3-3.6 4.4-5.5 8-5.5s6.7 1.9 8 5.5" />
  </OutlineIcon>
);

const MailIcon = () => (
  <OutlineIcon>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </OutlineIcon>
);

const PhoneIcon = () => (
  <OutlineIcon>
    <path d="M5.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2 2A17 17 0 0 1 3.5 5.5a2 2 0 0 1 2-2Z" />
  </OutlineIcon>
);

const PinIcon = () => (
  <OutlineIcon>
    <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </OutlineIcon>
);

const MessageIcon = () => (
  <OutlineIcon>
    <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12Z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="2.4" />
  </OutlineIcon>
);

const SendIcon = () => (
  <OutlineIcon width="22" height="22" strokeWidth="1.9">
    <path d="M21 3 10 14" />
    <path d="M21 3 14.5 21l-4.5-7-7-4.5L21 3Z" />
  </OutlineIcon>
);

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const styles = variant === "ads" ? adsStyles : defaultStyles;
  const showIcons = variant === "default";
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
          source: variant === "ads" ? "ads-landing" : "contact-page",
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

  // Wraps a control with a leading icon on the default variant; the ads variant keeps its plain markup.
  function withIcon(icon: React.ReactNode, control: React.ReactNode, isTextarea = false) {
    if (!showIcons) return control;
    return (
      <div className={`${styles.field} ${isTextarea ? styles.fieldTextarea : ""}`}>
        <span className={styles.fieldIcon}>{icon}</span>
        {control}
      </div>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row2}>
          {withIcon(
            <UserIcon />,
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your Name *"
              aria-label="Your name"
              required
            />
          )}
          {withIcon(
            <MailIcon />,
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your Email *"
              aria-label="Your email"
              required
            />
          )}
        </div>

        <div className={styles.row2}>
          {withIcon(
            <PhoneIcon />,
            <input
              className={styles.input}
              type="tel"
              name="phone"
              inputMode="numeric"
              placeholder="Phone Number *"
              aria-label="Phone number"
              required
            />
          )}
          {withIcon(
            <PinIcon />,
            <input
              className={styles.input}
              type="text"
              name="city"
              placeholder="Your City *"
              aria-label="Your city"
              required
            />
          )}
        </div>

        {withIcon(
          <MessageIcon />,
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Enter Your Message *"
            aria-label="Your message"
            rows={5}
            required
          />,
          true
        )}

        <button className={styles.submit} type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : showIcons ? "Submit Message" : "Submit"}
          {showIcons && status !== "loading" && (
            <span className={styles.submitIcon}>
              <SendIcon />
            </span>
          )}
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



