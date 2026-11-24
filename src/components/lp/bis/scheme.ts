export type SchemeKey = "default" | "crs" | "isi" | "fmcs";

export function normalizeScheme(value?: string): SchemeKey {
  const key = (value || "").toLowerCase();
  if (key === "crs") return "crs";
  if (key === "isi" || key === "isi-mark" || key === "isimark") return "isi";
  if (key === "fmcs") return "fmcs";
  return "default";
}
