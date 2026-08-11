import { HeroSection } from "@/components/landing/HeroSection";
import { LadderSection } from "@/components/landing/LadderSection";
import { SkillRailSection } from "@/components/landing/SkillRailSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { TopicsSection } from "@/components/landing/TopicsSection";
import { GuideSection } from "@/components/landing/GuideSection";
import { PathPinnedSection } from "@/components/landing/PathPinnedSection";
import { MomentsSection } from "@/components/landing/MomentsSection";
import { VoicesSection } from "@/components/landing/VoicesSection";
import { CloseSection } from "@/components/landing/CloseSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip bg-white">
      <HeroSection />
      <LadderSection />
      <SkillRailSection />
      <ImpactSection />
      <TopicsSection />
      <GuideSection />
      <PathPinnedSection />
      <MomentsSection />
      <VoicesSection />
      <CloseSection />
    </main>
  );
}
