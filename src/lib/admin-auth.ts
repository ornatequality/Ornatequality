import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import AdminUser from "@/models/AdminUser";
import {
  readCookieFromHeader,
  verifyAdminSession,
  type AdminSession,
} from "@/lib/admin-session";

export async function ensureSeedAdmin() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) return;

  await connectDB();
  const existing = await AdminUser.findOne({ email }).lean();
  if (existing) return;

  const passwordHash = await bcrypt.hash(password, 12);
  await AdminUser.create({ email, passwordHash, role: "admin" });
}

export async function getAdminSessionFromRequest(request: Request): Promise<AdminSession | null> {
  const token = readCookieFromHeader(request.headers.get("cookie"));
  return verifyAdminSession(token);
}

export async function requireAdmin(request: Request) {
  const session = await getAdminSessionFromRequest(request);
  if (!session) {
    return {
      session: null as AdminSession | null,
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  return { session, error: null };
}
