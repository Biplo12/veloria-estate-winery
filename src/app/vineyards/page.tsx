import type { Metadata } from "next";

import { Onward } from "@/components/onward";
import { PageIntro } from "@/components/page-intro";
import { ESTATE } from "@/data/estate";

import { EstateMap } from "./_components/estate-map";
import { GroundsTable } from "./_components/grounds-table";
import { HarvestNote } from "./_components/harvest-note";
import { ParcelScale } from "./_components/parcel-scale";
import { ONWARD } from "./constants";

export const metadata: Metadata = {
  title: "Vineyards",
  description: `${ESTATE.tenuta}: ${ESTATE.hectares} hectares on the southern hills of Siena, ${ESTATE.altitudeMetres} metres above sea level.`,
};

export default function VineyardsPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow={ESTATE.tenuta}
        title="The land the wine comes from."
        lead={`${ESTATE.hectares} hectares on the southern hills of Siena, at ${ESTATE.altitudeMetres} metres above sea level. It began as ${ESTATE.hectaresAtFounding} of them, and the way it is worked has not changed since.`}
      />

      <EstateMap />
      <ParcelScale />
      <HarvestNote />
      <GroundsTable />

      <Onward links={ONWARD} />
    </main>
  );
}
