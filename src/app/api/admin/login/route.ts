import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { ensureDatabase } from "@/lib/dbInit";
import {
  COOKIE_NAME,
  adminCookieOptions,
  createAdminToken,
} from "@/lib/admin-auth";

export async function POST(req: Request) {
  try {
    await ensureDatabase();
    const body = await req.json();
    const username = String(body.username || "").trim();
    const password = String(body.password || "");

    if (!username || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    const { rows } = await db.query(
      "SELECT * FROM admin_users WHERE username = $1",
      [username],
    );
    if (rows.length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await createAdminToken({
      id: user.id,
      username: user.username,
    });
    const response = NextResponse.json({ success: true });
    response.cookies.set(COOKIE_NAME, token, adminCookieOptions());
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        error:
          "We couldn't complete sign-in. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
