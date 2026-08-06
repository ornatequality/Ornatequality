import mongoose from "mongoose";

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

function getConnectionUri() {
  const envUri = process.env.MONGODB_URI;

  if (!envUri) {
    throw new Error("MONGODB_URI is missing from your environment (.env / .env.local)");
  }

  const directUri = process.env.MONGODB_URI_DIRECT;
  return cleanUri(directUri || envUri);
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(getConnectionUri(), {
      serverSelectionTimeoutMS: 15000,
    });
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
