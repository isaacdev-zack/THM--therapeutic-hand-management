import type { Metadata } from "next";
import { AdmissionsSection } from "@/components/AdmissionsSection";

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description:
    "Apply for THM Caregiver II training in Nairobi or Kisumu. Complete the official admission form online.",
};

export default function ContactPage() {
  return (
    <main className="bg-white pt-[76px]">
      <AdmissionsSection />
    </main>
  );
}
