import type { Metadata } from "next";

import { Onward } from "@/components/onward";
import { PageIntro } from "@/components/page-intro";

import { BottleRow } from "./_components/bottle-row";
import { WineList } from "./_components/wine-list";
import { ONWARD } from "./constants";

export const metadata: Metadata = {
  title: "Wines",
  description:
    "The four wines made at Tenuta Veloria: Veloria Rosso, Bellandi Riserva, Luna Bianca and Veloria Vecchia Vigna.",
};

export default function WinesPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="What the estate makes"
        title="Four wines, made slowly."
        lead="One red for the table, the riserva the house is judged on, a white drunk young, and, only in the years that earn it, a wine from the oldest vines on the property."
      />

      <BottleRow />
      <WineList />

      <Onward links={ONWARD} />
    </main>
  );
}
