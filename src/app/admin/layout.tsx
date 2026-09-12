import type { Metadata } from "next";
import { AdminUiProvider } from "@/components/admin/AdminUi";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminUiProvider>{children}</AdminUiProvider>;
}
