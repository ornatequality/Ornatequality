import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getLegacyServiceRedirect } from "@/lib/legacy-service-routes";

export function middleware(request: NextRequest) {
  const redirectPath = getLegacyServiceRedirect(request.nextUrl.pathname);

  if (redirectPath) {
    const url = request.nextUrl.clone();
    url.pathname = redirectPath;
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:service/:location/:path*"],
};
