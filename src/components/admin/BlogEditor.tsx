"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { parseApiResponse } from "@/lib/parseApiResponse";
import { BLOG_TOPICS } from "@/lib/blog-defaults";
import styles from "../../styles/admin.module.css";

export type BlogFormValues = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  category: string;
  topic: string;
  tone: "green" | "blue" | "gold";
  image: string;
  readTime: string;
  published: boolean;
};

const empty: BlogFormValues = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  category: "",
  topic: "BIS",
  tone: "green",
  image: "",
  readTime: "5 min read",
  published: false,
};

export default function BlogEditor({ initial }: { initial?: BlogFormValues }) {
  const router = useRouter();
  const [form, setForm] = useState<BlogFormValues>(initial || empty);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const set = (key: keyof BlogFormValues, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const upload = async (file: File) => {
    setUploading(true);
    setError("");
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await fetch("/api/admin/uploads", { method: "POST", body: data });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || "Upload failed");
      set("image", json.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      const isEdit = Boolean(form._id);
      const res = await fetch(isEdit ? `/api/admin/blogs/${form._id}` : "/api/admin/blogs", {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await parseApiResponse(res);
      if (!res.ok) throw new Error(json.error || "Save failed");
      router.push("/admin/blogs");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form className={`${styles.form} ${styles.panel}`} onSubmit={submit}>
      <label className={styles.label}>
        Title
        <input
          className={styles.input}
          value={form.title}
          onChange={(e) => set("title", e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Slug
        <input
          className={styles.input}
          value={form.slug}
          onChange={(e) => set("slug", e.target.value)}
          placeholder="auto-from-title-if-empty"
        />
      </label>
      <label className={styles.label}>
        Excerpt
        <textarea
          className={styles.textarea}
          style={{ minHeight: 90 }}
          value={form.excerpt}
          onChange={(e) => set("excerpt", e.target.value)}
          required
        />
      </label>
      <label className={styles.label}>
        Body
        <textarea
          className={styles.textarea}
          value={form.body}
          onChange={(e) => set("body", e.target.value)}
        />
      </label>
      <div className={styles.row2}>
        <label className={styles.label}>
          Category
          <input
            className={styles.input}
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          Topic
          <select
            className={styles.select}
            value={form.topic}
            onChange={(e) => set("topic", e.target.value)}
          >
            {BLOG_TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className={styles.row2}>
        <label className={styles.label}>
          Tag colour
          <select
            className={styles.select}
            value={form.tone}
            onChange={(e) => set("tone", e.target.value)}
          >
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="gold">Gold</option>
          </select>
        </label>
        <label className={styles.label}>
          Read time
          <input
            className={styles.input}
            value={form.readTime}
            onChange={(e) => set("readTime", e.target.value)}
          />
        </label>
      </div>
      <label className={styles.label}>
        Image URL
        <input
          className={styles.input}
          value={form.image}
          onChange={(e) => set("image", e.target.value)}
          required
        />
      </label>
      <div className={styles.uploadRow}>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void upload(file);
          }}
        />
        {uploading && <span>Uploading…</span>}
        {form.image ? (
          <img src={form.image} alt="" className={styles.preview} />
        ) : null}
      </div>
      <label className={styles.check}>
        <input
          type="checkbox"
          checked={form.published}
          onChange={(e) => set("published", e.target.checked)}
        />
        Published (visible on the website)
      </label>
      {error ? <p className={styles.error}>{error}</p> : null}
      <div className={styles.actions}>
        <button className={styles.btn} type="submit" disabled={saving}>
          {saving ? "Saving…" : "Save post"}
        </button>
        <button
          className={styles.btnGhost}
          type="button"
          onClick={() => router.push("/admin/blogs")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
