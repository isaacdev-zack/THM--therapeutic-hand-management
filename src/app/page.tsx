import { HeroSection } from "@/components/landing/HeroSection";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { PromiseSection } from "@/components/landing/PromiseSection";
import { VitalSignsSection } from "@/components/landing/VitalSignsSection";
import { PathwaySection } from "@/components/landing/PathwaySection";
import { SkillsSection } from "@/components/landing/SkillsSection";
import { FinancingSection } from "@/components/landing/FinancingSection";
import { OutcomesSection } from "@/components/landing/OutcomesSection";
import { MomentsSection } from "@/components/landing/MomentsSection";
import { VoicesSection } from "@/components/landing/VoicesSection";
import { CloseSection } from "@/components/landing/CloseSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip bg-white">
      <ScrollProgress />
      <HeroSection />
      <ImpactSection />
      <PromiseSection />
      <VitalSignsSection />
      <PathwaySection />
      <SkillsSection />
      <FinancingSection />
      <OutcomesSection />
      <MomentsSection />
      <VoicesSection />
      <CloseSection />
    </main>
  );
}
