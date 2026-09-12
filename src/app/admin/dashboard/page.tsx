import { redirect } from "next/navigation";
import { getAdminFromCookies } from "@/lib/admin-auth";
import { listApplications, listContactMessages } from "@/lib/dbInit";
import DashboardClient, {
  type DashboardApplication,
  type DashboardContact,
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

function toDashboardContact(
  msg: Awaited<ReturnType<typeof listContactMessages>>[number],
): DashboardContact {
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

export default async function AdminDashboardPage() {
  const admin = await getAdminFromCookies();
  if (!admin) {
    redirect("/admin");
  }

  let applications: DashboardApplication[] = [];
  let messages: DashboardContact[] = [];
  let loadError = false;
  try {
    const [apps, msgs] = await Promise.all([
      listApplications(),
      listContactMessages(),
    ]);
    applications = apps.map(toDashboardApplication);
    messages = msgs.map(toDashboardContact);
  } catch (error) {
    console.error("Failed to load admin dashboard data", error);
    loadError = true;
  }

  return (
    <DashboardClient
      initialApplications={applications}
      initialMessages={messages}
      adminUsername={admin.username}
      loadError={loadError}
    />
  );
}
