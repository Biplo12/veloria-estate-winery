import { CONTAINER, SECTION } from "@/constants";
import { WINES } from "@/data/wines";

import { WineEntry } from "./wine-entry";

export function WineList() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <ol className="space-y-16 sm:space-y-20 lg:space-y-24">
          {WINES.map((wine) => (
            <WineEntry key={wine.slug} wine={wine} />
          ))}
        </ol>
      </div>
    </section>
  );
}
