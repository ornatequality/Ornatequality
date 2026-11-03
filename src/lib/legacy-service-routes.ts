import { SERVICE_ROUTES } from "@/components/common/servicesMegaMenu.data";

/**
 * Old site used location landing pages like
 * /services/other-services/vasant-vihar-delhi
 * Map legacy service slugs to the current service routes.
 */
const LEGACY_SERVICE_SLUG_MAP: Record<string, string> = {
  "other-services": "/services",
  "rohs-compliance-services": SERVICE_ROUTES.rohs,
  "rohs-compliance": SERVICE_ROUTES.rohs,
  "rohs-certification": SERVICE_ROUTES.rohs,
  "epr-certification": SERVICE_ROUTES.epr,
  "epr-registration": SERVICE_ROUTES.epr,
  "biscrs-registration": SERVICE_ROUTES.bisCrs,
  "bis-crs-registration": SERVICE_ROUTES.bisCrs,
  "bis-crs": SERVICE_ROUTES.bisCrs,
  "bis-certification": SERVICE_ROUTES.bisCertification,
  "bis-isi-mark": SERVICE_ROUTES.bisIsi,
  "bis-isi-mark-certification": SERVICE_ROUTES.bisIsi,
  "isi-mark-certification": SERVICE_ROUTES.bisIsi,
  "bis-fmcs": SERVICE_ROUTES.bisFmcs,
  "bis-fmcs-certification": SERVICE_ROUTES.bisFmcs,
  "fmcs-certification": SERVICE_ROUTES.bisFmcs,
  "wpc-approval": SERVICE_ROUTES.wpc,
  "wpc-eta-approval": SERVICE_ROUTES.wpc,
  "wpc-certification": SERVICE_ROUTES.wpc,
  "tec-certification": SERVICE_ROUTES.tec,
  "tec-approval": SERVICE_ROUTES.tec,
  "bee-certification": SERVICE_ROUTES.bee,
  "bee-registration": SERVICE_ROUTES.bee,
  "iso-certification": SERVICE_ROUTES.iso,
  "lmpc-registration": SERVICE_ROUTES.lmpc,
  "lmpc-certification": SERVICE_ROUTES.lmpc,
  "ce-certification": SERVICE_ROUTES.ce,
  "fssai-registration": SERVICE_ROUTES.fssai,
  "fssai-certification": SERVICE_ROUTES.fssai,
  "cdsco-registration": SERVICE_ROUTES.cdsco,
  "cdsco-certification": SERVICE_ROUTES.cdsco,
  "peso-certification": SERVICE_ROUTES.pesoCcoe,
  "peso-ccoe-registration": SERVICE_ROUTES.pesoCcoe,
  "ccoe-peso-certification": SERVICE_ROUTES.pesoCcoe,
  "ccoe-certification": SERVICE_ROUTES.pesoCcoe,
  "nabl-accreditation": SERVICE_ROUTES.nabl,
  "nabl-lab-testing-services": SERVICE_ROUTES.nabl,
  "third-party-inspection": SERVICE_ROUTES.tpi,
  "product-inspection": SERVICE_ROUTES.prd,
  "product-inspection-quality-monitoring": SERVICE_ROUTES.prd,
  "pre-production-inspection": SERVICE_ROUTES.ppi,
  "during-production-inspection": SERVICE_ROUTES.dpi,
  "factory-process-inspection": SERVICE_ROUTES.fac,
  "final-random-inspection": SERVICE_ROUTES.fri,
  "trademark-registration": SERVICE_ROUTES.trademark,
  "gem-registration": SERVICE_ROUTES.gem,
  "iec-registration": SERVICE_ROUTES.iec,
  "audit-services": SERVICE_ROUTES.audit,
  "audit-certification": SERVICE_ROUTES.audit,
  "technical-documentation": SERVICE_ROUTES.technical,
  "technical-documentation-compliance-support": SERVICE_ROUTES.technical,
};

const CURRENT_SERVICE_SLUGS = new Set(
  Object.values(SERVICE_ROUTES).map((path) => path.replace("/services/", "")),
);

/** Nested product pages that must not be treated as old location URLs. */
const SERVICE_PRODUCT_PAGES = new Set([
  "bis-fmcs-certification/furniture",
  "bis-isi-mark-certification/furniture",
  "bis-fmcs-certification/footwear",
  "bis-isi-mark-certification/footwear",
  "bis-certification/isi-mark-certification",
  "bis-certification/bis-crs-registration",
  "bis-certification/fmcs-certification",
]);

export function getLegacyServiceRedirect(pathname: string): string | null {
  const match = pathname.match(/^\/services\/([^/]+)\/(.+)$/);
  if (!match) return null;

  const [, serviceSlug, rest] = match;
  const nestedKey = `${serviceSlug}/${rest.split("/")[0]}`.toLowerCase();
  if (SERVICE_PRODUCT_PAGES.has(nestedKey)) {
    return null;
  }

  const normalizedSlug = serviceSlug.toLowerCase();

  if (LEGACY_SERVICE_SLUG_MAP[normalizedSlug]) {
    return LEGACY_SERVICE_SLUG_MAP[normalizedSlug];
  }

  if (CURRENT_SERVICE_SLUGS.has(normalizedSlug)) {
    return `/services/${normalizedSlug}`;
  }

  return "/services";
}
