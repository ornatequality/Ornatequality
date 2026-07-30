type LeadEventPayload = {
  page_type: "ads_landing" | "contact";
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushGenerateLeadEvent(payload: LeadEventPayload): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "generate_lead",
    ...payload,
  });
}
