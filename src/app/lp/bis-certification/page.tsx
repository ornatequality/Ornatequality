import type { Metadata } from "next";
import BisLanding from "@/components/lp/bis/BisLanding";
import { normalizeScheme } from "@/components/lp/bis/scheme";

const TITLE = "BIS Certification: ISI Mark, CRS & FMCS | Ornate Quality";
const DESCRIPTION =
  "BIS CRS registration, ISI Mark licence & FMCS certification support from Ornate Quality Services, Noida: IS standard check, testing, documents & filing.";
const CANONICAL = "https://ornatequality.com/lp/bis-certification";
const OG_DESCRIPTION =
  "Scheme check, lab testing, documents and BIS filing, handled by one team in Noida.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: OG_DESCRIPTION,
    url: CANONICAL,
  },
};

export default async function BisCertificationLpPage({
  searchParams,
}: {
  searchParams: Promise<{ scheme?: string; v?: string }>;
}) {
  const params = await searchParams;
  const scheme = normalizeScheme(params.scheme || params.v);

  return <BisLanding initialScheme={scheme} />;
}
