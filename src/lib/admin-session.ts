const encoder = new TextEncoder();
const COOKIE_NAME = "oq_admin";
const MAX_AGE_SEC = 60 * 60 * 24 * 7;

export type AdminSession = {
  sub: string;
  email: string;
  exp: number;
};

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 24) {
    throw new Error("ADMIN_SESSION_SECRET is missing or too short (min 24 chars).");
  }
  return secret;
}

function toBase64Url(bytes: Uint8Array) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function getKey(usage: KeyUsage[]) {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    usage
  );
}

export async function signAdminSession(input: { sub: string; email: string }) {
  const payload: AdminSession = {
    sub: input.sub,
    email: input.email,
    exp: Math.floor(Date.now() / 1000) + MAX_AGE_SEC,
  };
  const payloadPart = toBase64Url(encoder.encode(JSON.stringify(payload)));
  const key = await getKey(["sign"]);
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payloadPart));
  return `${payloadPart}.${toBase64Url(new Uint8Array(signature))}`;
}

export async function verifyAdminSession(token: string | undefined | null): Promise<AdminSession | null> {
  if (!token) return null;
  const [payloadPart, signaturePart] = token.split(".");
  if (!payloadPart || !signaturePart) return null;

  try {
    const key = await getKey(["verify"]);
    const valid = await crypto.subtle.verify(
      "HMAC",
      key,
      fromBase64Url(signaturePart),
      encoder.encode(payloadPart)
    );
    if (!valid) return null;

    const json = new TextDecoder().decode(fromBase64Url(payloadPart));
    const session = JSON.parse(json) as AdminSession;
    if (!session?.sub || !session?.email || !session?.exp) return null;
    if (session.exp < Math.floor(Date.now() / 1000)) return null;
    return session;
  } catch {
    return null;
  }
}

export function readCookieFromHeader(cookieHeader: string | null, name = COOKIE_NAME) {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";");
  for (const part of parts) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return rest.join("=");
  }
  return null;
}

export function adminCookieHeader(token: string) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE_SEC}${secure}`;
}

export function clearAdminCookieHeader() {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
}

export { COOKIE_NAME, MAX_AGE_SEC };
