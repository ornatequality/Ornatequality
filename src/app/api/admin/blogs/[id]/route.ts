import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";
import { requireAdmin } from "@/lib/admin-auth";
import { slugify } from "@/lib/blogs";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string }> };

function serialize(doc: Record<string, unknown>) {
  return { ...doc, _id: String(doc._id) };
}

export async function GET(request: Request, ctx: Ctx) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  const { id } = await ctx.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await connectDB();
  const post = await BlogPost.findById(id).lean();
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ post: serialize(post as never) });
}

export async function PATCH(request: Request, ctx: Ctx) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  const { id } = await ctx.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const body = await request.json();
    await connectDB();
    const existing = await BlogPost.findById(id);
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    if (body.title != null) existing.title = String(body.title).trim();
    if (body.excerpt != null) existing.excerpt = String(body.excerpt).trim();
    if (body.body != null) existing.body = String(body.body).trim();
    if (body.category != null) existing.category = String(body.category).trim();
    if (body.topic != null) existing.topic = String(body.topic).trim();
    if (body.image != null) existing.image = String(body.image).trim();
    if (body.readTime != null) existing.readTime = String(body.readTime).trim();
    if (body.slug != null) existing.slug = slugify(String(body.slug));
    if (["green", "blue", "gold"].includes(body.tone)) existing.tone = body.tone;

    if (typeof body.published === "boolean") {
      existing.published = body.published;
      if (body.published && !existing.publishedAt) existing.publishedAt = new Date();
      if (!body.published) existing.publishedAt = null;
    }

    await existing.save();
    return NextResponse.json({ post: serialize(existing.toObject()) });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unable to update post.";
    if (message.includes("duplicate") || message.includes("E11000")) {
      return NextResponse.json({ error: "A post with this slug already exists." }, { status: 409 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: Request, ctx: Ctx) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  const { id } = await ctx.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await connectDB();
  await BlogPost.findByIdAndDelete(id);
  return NextResponse.json({ ok: true });
}
