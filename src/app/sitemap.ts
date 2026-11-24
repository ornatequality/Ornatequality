import { MetadataRoute } from "next";
import { SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";
import { SITE_URL } from "@/lib/site";

const CANONICAL_ORIGIN = "https://ornatequality.com";
const FURNITURE_CANONICAL =
  "https://ornatequality.com/services/bis-isi-mark-certification/furniture";
const FOOTWEAR_CANONICAL =
  "https://ornatequality.com/services/bis-isi-mark-certification/footwear";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const serviceEntries = Object.values(SERVICE_ROUTES)
    .filter((path, index, all) => all.indexOf(path) === index)
    .filter((path) => path !== SERVICE_ROUTES.bisFurniture && path !== SERVICE_ROUTES.bisFootwear)
    .map((path) => ({
      url: `${CANONICAL_ORIGIN}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
    {
      url: FURNITURE_CANONICAL,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: FOOTWEAR_CANONICAL,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
