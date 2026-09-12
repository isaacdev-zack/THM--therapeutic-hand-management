import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const COOKIE_NAME = "admin_token";

function getSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }
  return new TextEncoder().encode(secret);
}

export async function createAdminToken(payload: {
  id: number;
  username: string;
}) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(getSecret());
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, getSecret());
  return {
    id: Number(payload.id),
    username: String(payload.username || ""),
  };
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 60 * 60 * 24,
    path: "/",
  };
}

export async function getAdminFromCookies() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    return await verifyAdminToken(token);
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
