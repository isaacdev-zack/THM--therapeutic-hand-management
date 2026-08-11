import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { CareerSection } from "@/components/CareerSection";
import { HomeCtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Where THM graduates work — hospitals, elder care homes, childcare centres, and private home-based care.",
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      <PageHero
        tone="cream"
        eyebrow="Career pathways"
        title="From classroom to caregiving career"
        description="A clear path from NITA training to employment across Kenya’s care economy — hospitals, homes, and community care."
      />
      <CareerSection />
      <HomeCtaBand />
    </main>
  );
}
