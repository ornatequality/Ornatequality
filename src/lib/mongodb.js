import dns from "node:dns";
import { Resolver } from "node:dns/promises";
import mongoose from "mongoose";

const PUBLIC_DNS = ["8.8.8.8", "8.8.4.4", "1.1.1.1"];

dns.setServers(PUBLIC_DNS);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

function cleanUri(uri) {
  return uri.replace(/^["']|["']$/g, "").trim();
}

function getResolver() {
  const resolver = new Resolver();
  resolver.setServers(PUBLIC_DNS);
  return resolver;
}

async function resolveSrvUri(srvUri) {
  const clean = cleanUri(srvUri);

  if (!clean.startsWith("mongodb+srv://")) {
    return clean;
  }

  const parsed = new URL(clean.replace(/^mongodb\+srv:/, "https:"));
  const resolver = getResolver();
  const srvName = `_mongodb._tcp.${parsed.hostname}`;

  const [records, txtRecords] = await Promise.all([
    resolver.resolveSrv(srvName),
    resolver.resolveTxt(srvName).catch(() => []),
  ]);

  const hosts = records.map((record) => `${record.name}:${record.port}`).join(",");
  const user = encodeURIComponent(parsed.username);
  const pass = encodeURIComponent(parsed.password);
  const database = parsed.pathname.replace(/^\//, "");
  const params = new URLSearchParams(parsed.search);

  params.set("ssl", "true");

  if (!params.has("authSource")) {
    params.set("authSource", "admin");
  }

  for (const entry of txtRecords.flat()) {
    const txtParams = new URLSearchParams(entry);
    for (const [key, value] of txtParams.entries()) {
      if (!params.has(key)) {
        params.set(key, value);
      }
    }
  }

  return `mongodb://${user}:${pass}@${hosts}/${database}?${params.toString()}`;
}

async function getConnectionUri() {
  const envUri = process.env.MONGODB_URI;

  if (!envUri) {
    throw new Error("MONGODB_URI is missing from your environment (.env / .env.local)");
  }

  const directUri = process.env.MONGODB_URI_DIRECT;
  if (directUri) {
    return cleanUri(directUri);
  }

  return resolveSrvUri(envUri);
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = (async () => {
      const uri = await getConnectionUri();
      return mongoose.connect(uri, {
        serverSelectionTimeoutMS: 15000,
      });
    })();
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    cached.conn = null;

    console.error("MongoDB connection error:", error);

    if (error instanceof Error) {
      if (
        error.message.includes("ECONNREFUSED") ||
        error.message.includes("querySrv") ||
        error.message.includes("ENOTFOUND")
      ) {
        throw new Error(
          "MongoDB connection failed. Check internet, DNS, and Atlas Network Access (allow your IP or 0.0.0.0/0)."
        );
      }

      if (error.message.includes("bad auth") || error.message.includes("Authentication failed")) {
        throw new Error("MongoDB login failed. Check username and password in MONGODB_URI.");
      }
    }

    throw error;
  }

  return cached.conn;
}

export default connectDB;



