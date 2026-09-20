import type { Metadata } from "next";

import { Onward } from "@/components/onward";
import { PageIntro } from "@/components/page-intro";
import { ESTATE } from "@/data/estate";

import { TastingNote } from "./_components/tasting-note";
import { TastingRoomFilm } from "./_components/tasting-room-film";
import { VisitablePlaces } from "./_components/visitable-places";
import { ONWARD, TASTING_LEAD } from "./constants";

export const metadata: Metadata = {
  title: "Visit",
  description: `${ESTATE.tenuta} is open to visitors from spring through harvest: the tasting room, the restaurant, a small guest hotel and the ${ESTATE.founded} cellar.`,
};

export default function VisitPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="Visiting"
        title="Open from spring through harvest."
        lead={TASTING_LEAD}
      />

      <TastingRoomFilm />
      <VisitablePlaces />
      <TastingNote />

      <Onward links={ONWARD} />
    </main>
  );
}
