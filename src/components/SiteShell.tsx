"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";

const Navbar = dynamic(
  () => import("@/components/Navbar").then((mod) => mod.Navbar),
  { ssr: true },
);

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <div className="min-h-dvh">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
