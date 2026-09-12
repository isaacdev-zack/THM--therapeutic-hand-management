import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { ensureDatabase } from "@/lib/dbInit";
import { getAdminFromCookies } from "@/lib/admin-auth";

export async function POST(req: Request) {
  try {
    const admin = await getAdminFromCookies();
    if (!admin) {
      return NextResponse.json(
        { error: "Your session expired. Sign in again." },
        { status: 401 },
      );
    }

    await ensureDatabase();
    const body = await req.json();
    const currentPassword = String(body.currentPassword || "");
    const newUsername = String(body.newUsername || "").trim();
    const newPassword = String(body.newPassword || "");
    const confirmPassword = String(body.confirmPassword || "");

    if (!currentPassword) {
      return NextResponse.json(
        { error: "Current password is required" },
        { status: 400 },
      );
    }

    if (!newUsername && !newPassword) {
      return NextResponse.json(
        { error: "Enter a new email and/or new password" },
        { status: 400 },
      );
    }

    if (newPassword && newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "New passwords do not match" },
        { status: 400 },
      );
    }

    if (newPassword && newPassword.length < 8) {
      return NextResponse.json(
        { error: "New password must be at least 8 characters" },
        { status: 400 },
      );
    }

    const { rows } = await db.query("SELECT * FROM admin_users WHERE id = $1", [
      admin.id,
    ]);
    if (rows.length === 0) {
      return NextResponse.json(
        { error: "We couldn't update your account. Please try again." },
        { status: 404 },
      );
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      user.password_hash,
    );
    if (!passwordMatch) {
      return NextResponse.json(
        { error: "Current password is incorrect" },
        { status: 401 },
      );
    }

    if (newUsername) {
      const existing = await db.query(
        "SELECT id FROM admin_users WHERE username = $1 AND id <> $2",
        [newUsername, admin.id],
      );
      if (existing.rows.length > 0) {
        return NextResponse.json(
          { error: "That email is already in use" },
          { status: 409 },
        );
      }

      await db.query("UPDATE admin_users SET username = $1 WHERE id = $2", [
        newUsername,
        admin.id,
      ]);
    }

    if (newPassword) {
      const passwordHash = await bcrypt.hash(newPassword, 10);
      await db.query("UPDATE admin_users SET password_hash = $1 WHERE id = $2", [
        passwordHash,
        admin.id,
      ]);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin update error:", error);
    return NextResponse.json(
      { error: "We couldn't save those changes. Please try again." },
      { status: 500 },
    );
  }
}
