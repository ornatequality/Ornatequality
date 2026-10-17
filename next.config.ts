import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    qualities: [75, 80, 82, 90, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  async redirects() {
    return [
      {
        source: "/services/bis-fmcs-certification/furniture",
        destination: "/services/bis-isi-mark-certification/furniture",
        permanent: true,
      },
      {
        source: "/services/bis-isi-mark-certification",
        destination: "/services/bis-certification/isi-mark-certification",
        permanent: true,
      },
      {
        source: "/services/bis-crs-registration",
        destination: "/services/bis-certification/bis-crs-registration",
        permanent: true,
      },
      {
        source: "/services/bis-fmcs-certification",
        destination: "/services/bis-certification/fmcs-certification",
        permanent: true,
      },
      {
        source: "/services/peso-ccoe-registration",
        destination: "/services/ccoe-peso-certification",
        permanent: true,
      },
      {
        source: "/services/product-inspection",
        destination: "/services/product-inspection-quality-monitoring",
        permanent: true,
      },
      {
        source: "/services/nabl-accreditation",
        destination: "/services/nabl-lab-testing-services",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
