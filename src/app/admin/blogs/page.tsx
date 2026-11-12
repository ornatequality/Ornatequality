"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { playfair } from "@/lib/fonts";
import styles from "../../../styles/admin.module.css";

type Post = {
  _id: string;
  title: string;
  slug: string;
  published: boolean;
  updatedAt?: string;
};

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState("");

  const load = async () => {
    const res = await fetch("/api/admin/blogs");
    if (!res.ok) {
      setError("Could not load posts.");
      return;
    }
    const json = await res.json();
    setPosts(json.posts || []);
  };

  useEffect(() => {
    void load();
  }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (res.ok) setPosts((prev) => prev.filter((p) => p._id !== id));
  };

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={playfair.className}>Blogs</h1>
          <p>Drafts stay hidden. Published posts appear on Home and /blog.</p>
        </div>
        <Link className={styles.btn} href="/admin/blogs/new">
          New blog
        </Link>
      </div>
      {error ? <p className={styles.error}>{error}</p> : null}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4}>No posts yet. Create the first one.</td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post._id}>
                  <td>{post.title}</td>
                  <td>{post.slug}</td>
                  <td>
                    <span className={`${styles.badge} ${post.published ? styles.pub : styles.draft}`}>
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <Link className={styles.btnGhost} href={`/admin/blogs/${post._id}`}>
                        Edit
                      </Link>
                      <button className={styles.btnDanger} type="button" onClick={() => void remove(post._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
