export const CONSENT_COOKIE_NAME = "cookie_consent";
export const CONSENT_COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

export type ConsentValue = "accepted" | "rejected";

export function getConsentCookie(): ConsentValue | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`)
  );
  const value = match?.[1];

  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setConsentCookie(value: ConsentValue): void {
  document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${CONSENT_COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function updateGtmConsent(granted: boolean): void {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  const status = granted ? "granted" : "denied";

  gtag("consent", "update", {
    analytics_storage: status,
    ad_storage: status,
    ad_user_data: status,
    ad_personalization: status,
  });
}
