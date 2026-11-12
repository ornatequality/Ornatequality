"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { manrope, playfair } from "@/lib/fonts";
import { parseApiResponse } from "@/lib/parseApiResponse";
import styles from "../../../styles/admin.module.css";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || "Sign in failed");
      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.loginPage} ${manrope.className}`}>
      <form className={styles.loginCard} onSubmit={submit}>
        <p className={styles.loginEyebrow}>Ornate Quality</p>
        <h1 className={`${styles.loginTitle} ${playfair.className}`}>Admin login</h1>
        <p className={styles.loginHint}>
          Content CMS only. This is not CRM login.
        </p>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className={styles.label} style={{ marginTop: 12 }}>
          Password
          <input
            className={styles.input}
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {error ? (
          <p className={styles.error} style={{ marginTop: 12 }}>
            {error}
          </p>
        ) : null}
        <button className={styles.btn} type="submit" disabled={loading} style={{ marginTop: 18, width: "100%" }}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
