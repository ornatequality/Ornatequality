import { notFound } from "next/navigation";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { playfair } from "@/lib/fonts";
import BlogEditor, { type BlogFormValues } from "@/components/admin/BlogEditor";
import styles from "../../../../styles/admin.module.css";

export const dynamic = "force-dynamic";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await connectDB();
  const post = await BlogPost.findById(id).lean();
  if (!post) notFound();

  const initial: BlogFormValues = {
    _id: String(post._id),
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    body: post.body || "",
    category: post.category,
    topic: post.topic || "BIS",
    tone: (post.tone as BlogFormValues["tone"]) || "green",
    image: post.image,
    readTime: post.readTime || "5 min read",
    published: Boolean(post.published),
  };

  return (
    <>
      <div className={styles.pageHead}>
        <div>
          <h1 className={playfair.className}>Edit blog</h1>
          <p>/{post.slug}</p>
        </div>
      </div>
      <BlogEditor initial={initial} />
    </>
  );
}
