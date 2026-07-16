import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#0A2540]/70">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold text-[#0A2540] sm:text-4xl">
        This page could not be found
      </h1>
      <p className="mt-4 max-w-xl text-base text-gray-600">
        The page you are looking for may have been moved or removed. Browse our
        services or contact us for help.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/services"
          className="rounded-md bg-[#0A2540] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#0A2540]/90"
        >
          View Services
        </Link>
        <Link
          href="/"
          className="rounded-md border border-[#0A2540]/20 px-5 py-2.5 text-sm font-medium text-[#0A2540] transition hover:bg-[#0A2540]/5"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
