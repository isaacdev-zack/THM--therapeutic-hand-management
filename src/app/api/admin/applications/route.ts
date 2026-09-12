import { NextResponse } from "next/server";
import { getAdminFromCookies } from "@/lib/admin-auth";
import { deleteApplication, listApplications } from "@/lib/dbInit";

function serializeApplication(
  app: Awaited<ReturnType<typeof listApplications>>[number],
) {
  return {
    id: app.id,
    full_name: app.fullName,
    email: app.email,
    phone: app.phone || "—",
    campus: app.campus || "—",
    data: app.data,
    created_at: new Date(app.createdAt).toLocaleString(),
    created_at_iso: app.createdAt,
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

    const applications = (await listApplications()).map(serializeApplication);
    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Admin applications fetch error:", error);
    return NextResponse.json(
      { error: "We couldn't load applications. Please try again." },
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
        { error: "We couldn't delete that application." },
        { status: 400 },
      );
    }

    const deleted = await deleteApplication(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "That application is no longer in the list." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin application delete error:", error);
    return NextResponse.json(
      { error: "We couldn't delete that application. Please try again." },
      { status: 500 },
    );
  }
}
