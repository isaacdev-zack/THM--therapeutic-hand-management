import type { Metadata } from "next";
import { CareersHero } from "@/components/careers/CareersHero";
import { CareerImpactStats } from "@/components/careers/CareerImpactStats";
import { CareerIntro } from "@/components/careers/CareerIntro";
import { PlacementProof } from "@/components/careers/PlacementProof";
import { GraduateStories } from "@/components/careers/GraduateStories";
import { CareersCta } from "@/components/careers/CareersCta";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "From THM training to real caregiving careers — hospital placements, elder care, childcare, and home care across Kenya.",
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      <CareersHero />
      <CareerImpactStats />
      <CareerIntro />
      <PlacementProof />
      <GraduateStories />
      <CareersCta />
    </main>
  );
}
