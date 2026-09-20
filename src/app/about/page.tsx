import type { Metadata } from "next";

import { Onward } from "@/components/onward";
import { PageIntro } from "@/components/page-intro";
import { ESTATE } from "@/data/estate";

import { EstateName } from "./_components/estate-name";
import { FamilyGrid } from "./_components/family-grid";
import { FoundingStory } from "./_components/founding-story";
import { ONWARD } from "./constants";

export const metadata: Metadata = {
  title: "About",
  description: `Veloria began in ${ESTATE.founded} with ${ESTATE.hectaresAtFounding} hectares above Siena, an old stone cellar and no hurry.`,
};

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="About"
        title="A slope, a stone cellar, and no hurry."
        lead={`Matteo Bellandi bought ${ESTATE.hectaresAtFounding} hectares on the southern hills of Siena in ${ESTATE.founded}. Everything since has been the same family, adding land slowly enough that nothing about the way the wine is made had to change.`}
      />

      <EstateName />
      <FoundingStory />
      <FamilyGrid />

      <Onward links={ONWARD} />
    </main>
  );
}
