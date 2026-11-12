import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { DEFAULT_POSTS, type BlogCardData, type TagTone } from "@/lib/blog-defaults";

function mapDoc(doc: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  topic?: string;
  tone?: string;
  image: string;
  readTime?: string;
  body?: string;
}): BlogCardData {
  const tone = (["green", "blue", "gold"].includes(doc.tone || "")
    ? doc.tone
    : "green") as TagTone;

  return {
    slug: doc.slug,
    href: `/blog/${doc.slug}`,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    topic: doc.topic || doc.category,
    tone,
    image: doc.image,
    readTime: doc.readTime,
    body: doc.body,
  };
}

export async function getPublishedBlogs(limit = 12): Promise<BlogCardData[]> {
  try {
    await connectDB();
    const docs = await BlogPost.find({ published: true })
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(limit)
      .lean();

    if (!docs.length) return DEFAULT_POSTS.slice(0, limit);
    return docs.map((doc) => mapDoc(doc as never));
  } catch {
    return DEFAULT_POSTS.slice(0, limit);
  }
}

export async function getPublishedBlogBySlug(slug: string): Promise<BlogCardData | null> {
  try {
    await connectDB();
    const doc = await BlogPost.findOne({ slug, published: true }).lean();
    if (doc) return mapDoc(doc as never);
  } catch {
    /* fallback below */
  }

  return DEFAULT_POSTS.find((post) => post.slug === slug) ?? null;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
