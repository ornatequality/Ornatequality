import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { requireAdmin } from "@/lib/admin-auth";
import { slugify } from "@/lib/blogs";

export const runtime = "nodejs";

function serialize(doc: Record<string, unknown>) {
  return {
    ...doc,
    _id: String(doc._id),
  };
}

export async function GET(request: Request) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  await connectDB();
  const posts = await BlogPost.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ posts: posts.map((p) => serialize(p as never)) });
}

export async function POST(request: Request) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  try {
    const body = await request.json();
    const title = String(body?.title || "").trim();
    const excerpt = String(body?.excerpt || "").trim();
    const category = String(body?.category || "").trim();
    const image = String(body?.image || "").trim();

    if (!title || !excerpt || !category || !image) {
      return NextResponse.json(
        { error: "Title, excerpt, category and image are required." },
        { status: 400 }
      );
    }

    const slug = slugify(String(body?.slug || title));
    if (!slug) {
      return NextResponse.json({ error: "A valid slug is required." }, { status: 400 });
    }

    const published = Boolean(body?.published);
    await connectDB();

    const post = await BlogPost.create({
      slug,
      title,
      excerpt,
      body: String(body?.body || "").trim(),
      category,
      topic: String(body?.topic || "").trim(),
      tone: ["green", "blue", "gold"].includes(body?.tone) ? body.tone : "green",
      image,
      readTime: String(body?.readTime || "5 min read").trim(),
      published,
      publishedAt: published ? new Date() : null,
    });

    return NextResponse.json({ post: serialize(post.toObject()) }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to create post.";
    if (message.includes("duplicate") || message.includes("E11000")) {
      return NextResponse.json({ error: "A post with this slug already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
