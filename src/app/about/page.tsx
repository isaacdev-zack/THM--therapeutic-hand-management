import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { AboutSection } from "@/components/AboutSection";
import { ImpactStrip } from "@/components/ImpactStrip";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Therapeutic Hands Management — vision, mission, core values, and NITA-certified caregiver training in Nairobi and Kisumu.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <PageHero
        tone="cream"
        eyebrow="About THM"
        title="Pacing professional caregiving in Kenya"
        description="Therapeutic Hands Management Co. Limited equips caregivers with high-quality skills to safeguard children and adults at risk — with empathy, love, and respect."
      />
      <ImpactStrip />
      <AboutSection />
    </main>
  );
}
