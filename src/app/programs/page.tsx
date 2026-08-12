import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { CurriculumSection } from "@/components/CurriculumSection";
import { TrainingShowcase } from "@/components/TrainingShowcase";
import { HomeCtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore THM’s NITA caregiver curriculum — clinical basics, patient support, and safety & equipment skills.",
};

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      <PageHero
        tone="purple"
        title="NITA caregiver curriculum, built for real practice"
        description="Master the clinical, support, and safety skills employers expect — organized the way caregivers use them on the ward and in the home."
      />
      <CurriculumSection />
      <TrainingShowcase />
      <HomeCtaBand />
    </main>
  );
}
