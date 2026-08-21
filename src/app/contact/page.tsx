import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact THM caregiver training in Nairobi or Kisumu — campus, phone, email, and directions.",
};

export default function ContactPage() {
  return (
    <main className="bg-white pt-[76px]">
      <ContactSection />
    </main>
  );
}
