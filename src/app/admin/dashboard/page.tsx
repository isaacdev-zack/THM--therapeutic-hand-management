import { redirect } from "next/navigation";
import { getAdminFromCookies } from "@/lib/admin-auth";
import { listApplications } from "@/lib/dbInit";
import DashboardClient, {
  type DashboardApplication,
} from "./DashboardClient";

function toDashboardApplication(
  app: Awaited<ReturnType<typeof listApplications>>[number],
): DashboardApplication {
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

export default async function AdminDashboardPage() {
  const admin = await getAdminFromCookies();
  if (!admin) {
    redirect("/admin");
  }

  let applications: DashboardApplication[] = [];
  let loadError = false;
  try {
    applications = (await listApplications()).map(toDashboardApplication);
  } catch (error) {
    console.error("Failed to load admin dashboard data", error);
    loadError = true;
  }

  return (
    <DashboardClient
      initialApplications={applications}
      adminUsername={admin.username}
      loadError={loadError}
    />
  );
}
