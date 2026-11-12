import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import { requireAdmin } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  await connectDB();
  const users = await AdminUser.find().select("email role createdAt").sort({ createdAt: 1 }).lean();
  return NextResponse.json({
    users: users.map((u) => ({
      _id: String(u._id),
      email: u.email,
      role: u.role,
      createdAt: u.createdAt,
    })),
  });
}

export async function POST(request: Request) {
  const { error } = await requireAdmin(request);
  if (error) return error;

  try {
    const body = await request.json();
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!email || !password || password.length < 10) {
      return NextResponse.json(
        { error: "Email and a password of at least 10 characters are required." },
        { status: 400 }
      );
    }

    await connectDB();
    const exists = await AdminUser.findOne({ email }).lean();
    if (exists) {
      return NextResponse.json({ error: "That email already has access." }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await AdminUser.create({ email, passwordHash, role: "admin" });

    return NextResponse.json(
      { user: { _id: String(user._id), email: user.email, role: user.role } },
      { status: 201 }
    );
  } catch (err) {
    console.error("Create admin user error:", err);
    return NextResponse.json({ error: "Unable to add user." }, { status: 500 });
  }
}
