import type { Metadata } from "next";
import { ApplySection } from "@/components/admissions/ApplySection";

export const metadata: Metadata = {
  title: "Apply — Caregiver II Admission",
  description:
    "Complete the official THM Caregiver II student admission application form online.",
};

export default function ApplyPage() {
  return (
    <main className="bg-white pt-[76px]">
      <ApplySection />
    </main>
  );
}
