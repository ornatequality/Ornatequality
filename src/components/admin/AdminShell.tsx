"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { manrope, playfair } from "@/lib/fonts";
import styles from "../../styles/admin.module.css";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (pathname === "/admin/login") return;
    fetch("/api/admin/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setEmail(data?.email || ""))
      .catch(() => setEmail(""));
  }, [pathname]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className={`${styles.shell} ${manrope.className}`}>
      <aside className={styles.sidebar}>
        <div className={`${styles.brand} ${playfair.className}`}>
          Ornate Quality
          <span>Content admin</span>
        </div>
        <nav className={styles.nav}>
          <Link
            href="/admin"
            className={pathname === "/admin" ? styles.navActive : undefined}
          >
            Dashboard
          </Link>
          <Link
            href="/admin/blogs"
            className={pathname?.startsWith("/admin/blogs") ? styles.navActive : undefined}
          >
            Blogs
          </Link>
          <Link
            href="/admin/users"
            className={pathname?.startsWith("/admin/users") ? styles.navActive : undefined}
          >
            Admins
          </Link>
          <Link href="/" target="_blank" rel="noreferrer">
            View site
          </Link>
        </nav>
        <div className={styles.sidebarFoot}>
          <div className={styles.email}>{email}</div>
          <button type="button" className={styles.logout} onClick={logout}>
            Log out
          </button>
        </div>
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
