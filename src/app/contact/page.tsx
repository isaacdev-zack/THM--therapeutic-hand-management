import type { Metadata } from "next";
import { AdmissionsSection } from "@/components/AdmissionsSection";

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description:
    "Apply to THM caregiver training in Nairobi or Kisumu. Contact Westlands campus, phone, and email — ask about CHANCEN financing.",
};

export default function ContactPage() {
  return (
    <main className="bg-white pt-[76px]">
      <AdmissionsSection />
    </main>
  );
}
