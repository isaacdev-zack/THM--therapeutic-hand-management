import dns from "node:dns";
import net from "node:net";
import { Pool } from "pg";

dns.setDefaultResultOrder("ipv4first");
if (typeof net.setDefaultAutoSelectFamily === "function") {
  net.setDefaultAutoSelectFamily(false);
}

declare global {
  // eslint-disable-next-line no-var
  var pgPool: Pool | undefined;
}

function neonConnectionString() {
  const raw = process.env.DATABASE_URL;
  if (!raw) return undefined;

  try {
    const url = new URL(raw);
    url.searchParams.delete("channel_binding");
    if (!url.searchParams.get("sslmode")) {
      url.searchParams.set("sslmode", "require");
    }
    return url.toString();
  } catch {
    return raw;
  }
}

function createPool() {
  const connectionString = neonConnectionString();
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  return new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 20_000,
  });
}

let pool: Pool | undefined;

if (process.env.DATABASE_URL) {
  if (process.env.NODE_ENV === "production") {
    pool = createPool();
  } else {
    if (!global.pgPool) {
      global.pgPool = createPool();
    }
    pool = global.pgPool;
  }
} else {
  console.warn("DATABASE_URL is missing. Application and admin DB features will fail.");
}

export const db = pool as Pool;
