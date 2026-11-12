import { playfair } from "@/lib/fonts";
import BlogEditor from "@/components/admin/BlogEditor";
import styles from "../../../../styles/admin.module.css";

export default function NewBlogPage() {
  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={playfair.className}>New blog</h1>
          <p>Save as draft or publish immediately.</p>
        </div>
      </div>
      <BlogEditor />
    </>
  );
}
