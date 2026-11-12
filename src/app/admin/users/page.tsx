"use client";

import { useEffect, useState } from "react";
import { playfair } from "@/lib/fonts";
import { parseApiResponse } from "@/lib/parseApiResponse";
import styles from "../../../styles/admin.module.css";

type User = { _id: string; email: string; role: string };

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const load = async () => {
    const res = await fetch("/api/admin/users");
    if (!res.ok) return;
    const json = await res.json();
    setUsers(json.users || []);
  };

  useEffect(() => {
    void load();
  }, []);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || "Could not add user");
      setEmail("");
      setPassword("");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not add user");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={playfair.className}>Admins</h1>
          <p>Invite-only. There is no public signup.</p>
        </div>
      </div>
      <div className={styles.panel} style={{ marginBottom: 24 }}>
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.row2}>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className={styles.label}>
              Temporary password
              <input
                className={styles.input}
                type="password"
                minLength={10}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          {error ? <p className={styles.error}>{error}</p> : null}
          <button className={styles.btn} type="submit" disabled={saving}>
            {saving ? "Adding…" : "Add admin"}
          </button>
        </form>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
