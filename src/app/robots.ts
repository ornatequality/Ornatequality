import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/services/other-services/",
          "/api/",
          "/admin",
          "/admin/",
          "/lp/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}