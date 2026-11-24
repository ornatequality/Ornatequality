import type { Metadata } from "next";
import KnowledgeHubGuides from "@/components/blog/KnowledgeHubGuides";
import KnowledgeHubHero from "@/components/blog/KnowledgeHubHero";
import { JsonLdList } from "@/components/seo/JsonLdScripts";
import {
  BLOG_DESCRIPTION,
  BLOG_KEYWORDS,
  BLOG_TITLE,
  blogWebPageSchema,
} from "@/lib/seo/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getPublishedBlogs } from "@/lib/blogs";

export const revalidate = 60;

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  keywords: BLOG_KEYWORDS,
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; topic?: string }>;
}) {
  const { q = "", topic = "all" } = await searchParams;
  const posts = await getPublishedBlogs(40);
  const query = q.trim().toLowerCase();
  const filtered = query
    ? posts.filter((post) =>
        [post.title, post.excerpt, post.category, post.topic]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
    : posts;
  const visible = filtered.length ? filtered : posts;
  const featured = visible[0];

  return (
    <>
      <JsonLdList schemas={[blogWebPageSchema]} />
      {featured ? <KnowledgeHubHero featured={featured} query={q} /> : null}
      <KnowledgeHubGuides posts={visible} query={q} topic={topic} />
    </>
  );
}
