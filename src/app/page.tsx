import { HeroSection } from "@/components/HeroSection";
import { ImpactStrip } from "@/components/ImpactStrip";
import { TrainingShowcase } from "@/components/TrainingShowcase";
import { MomentsSection } from "@/components/MomentsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import {
  HomeAboutTeaser,
  HomeCtaBand,
  HomeFinancingTeaser,
} from "@/components/PageChrome";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <HeroSection />
      <ImpactStrip />
      <HomeAboutTeaser />
      <TrainingShowcase />
      <HomeFinancingTeaser />
      <MomentsSection />
      <TestimonialsSection />
      <HomeCtaBand />
    </main>
  );
}
