import { NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/admin-auth";
import { deleteContactMessage, listContactMessages } from "@/lib/dbInit";

function serializeContact(
  msg: Awaited<ReturnType<typeof listContactMessages>>[number],
) {
  return {
    id: msg.id,
    name: msg.name,
    email: msg.email,
    phone: msg.phone || "—",
    subject: msg.subject,
    message: msg.message,
    created_at: new Date(msg.createdAt).toLocaleString(),
    created_at_iso: msg.createdAt,
  };
}

export async function GET() {
  try {
    const admin = await getAdminFromCookies();
    if (!admin) {
      return NextResponse.json(
        { error: "Your session expired. Sign in again." },
        { status: 401 },
      );
    }

    const messages = (await listContactMessages()).map(serializeContact);
    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Admin contacts fetch error:", error);
    return NextResponse.json(
      { error: "We couldn't load messages. Please try again." },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const admin = await getAdminFromCookies();
    if (!admin) {
      return NextResponse.json(
        { error: "Your session expired. Sign in again." },
        { status: 401 },
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id")?.trim();
    if (!id) {
      return NextResponse.json(
        { error: "We couldn't delete that message." },
        { status: 400 },
      );
    }

    const deleted = await deleteContactMessage(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "That message is no longer in the list." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin contact delete error:", error);
    return NextResponse.json(
      { error: "We couldn't delete that message. Please try again." },
      { status: 500 },
    );
  }
}
