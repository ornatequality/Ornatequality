import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { manrope, playfair } from "@/lib/fonts";
import { getPublishedBlogBySlug, getPublishedBlogs } from "@/lib/blogs";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import styles from "../../../styles/blog.module.css";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPublishedBlogBySlug(slug);
  if (!post) notFound();

  const remote = typeof post.image === "string" && post.image.startsWith("http");
  const paragraphs = (post.body || post.excerpt)
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className={`${styles.article} ${manrope.className}`}>
      <div className={styles.articleInner}>
        <Link className={styles.articleBack} href="/blog">
          ← All blogs
        </Link>
        <p className={styles.articleMeta}>
          {post.category}
          {post.readTime ? ` · ${post.readTime}` : ""}
        </p>
        <h1 className={`${styles.articleTitle} ${playfair.className}`}>{post.title}</h1>
        <p className={styles.articleExcerpt}>{post.excerpt}</p>
        <div className={styles.articleMedia}>
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 860px"
            className={styles.image}
            unoptimized={remote}
          />
        </div>
        <div className={styles.articleBody}>
          {paragraphs.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPublishedBlogs(50);
  return posts.map((post) => ({ slug: post.slug }));
}
