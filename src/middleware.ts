import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { COOKIE_NAME, verifyAdminSession } from "@/lib/admin-session";
import { getLegacyServiceRedirect } from "@/lib/legacy-service-routes";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const redirectPath = getLegacyServiceRedirect(pathname);

  if (redirectPath) {
    const url = request.nextUrl.clone();
    url.pathname = redirectPath;
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  if (pathname.startsWith("/admin")) {
    const isLogin = pathname === "/admin/login";
    const token = request.cookies.get(COOKIE_NAME)?.value;
    let session = null;
    try {
      session = await verifyAdminSession(token);
    } catch {
      session = null;
    }

    if (!session && !isLogin) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }

    if (session && isLogin) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:service/:location/:path*", "/admin", "/admin/:path*"],
};
