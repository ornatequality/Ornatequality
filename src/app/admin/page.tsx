import Link from "next/link";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import AdminUser from "@/models/AdminUser";
import { playfair } from "@/lib/fonts";
import styles from "../../styles/admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let total = 0;
  let published = 0;
  let admins = 0;

  try {
    await connectDB();
    [total, published, admins] = await Promise.all([
      BlogPost.countDocuments(),
      BlogPost.countDocuments({ published: true }),
      AdminUser.countDocuments(),
    ]);
  } catch {
    /* empty dashboard if DB is unreachable */
  }

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={playfair.className}>Dashboard</h1>
          <p>Manage website blogs. Headings and other pages can be added next.</p>
        </div>
        <Link className={styles.btn} href="/admin/blogs/new">
          New blog
        </Link>
      </div>
      <div className={styles.cards}>
        <div className={styles.stat}>
          <b>{total}</b>
          <span>Total posts</span>
        </div>
        <div className={styles.stat}>
          <b>{published}</b>
          <span>Published</span>
        </div>
        <div className={styles.stat}>
          <b>{admins}</b>
          <span>Admin users</span>
        </div>
      </div>
    </>
  );
}
