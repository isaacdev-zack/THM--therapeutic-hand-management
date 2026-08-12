import type { Metadata } from "next";
import { PageHero } from "@/components/PageChrome";
import { ChancenSection } from "@/components/ChancenSection";
import { HomeCtaBand } from "@/components/PageChrome";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Study Now, Pay Later with CHANCEN International — no upfront fees for eligible Kenyan youth aged 19–35 at THM.",
};

export default function FinancingPage() {
  return (
    <main className="bg-white">
      <PageHero
        tone="deep"
        title="Remove the fee barrier. Start training."
        description="THM partners with CHANCEN International so less-privileged youth can train as caregivers without paying tuition upfront."
      />
      <ChancenSection />
      <HomeCtaBand />
    </main>
  );
}
