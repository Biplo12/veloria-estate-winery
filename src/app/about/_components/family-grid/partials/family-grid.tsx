import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING, SECTION } from "@/constants";
import { ESTATE, FAMILY } from "@/data/estate";
import { cn } from "@/utils";

import { FamilyPortrait } from "./family-portrait";

export function FamilyGrid() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <p className={EYEBROW}>The family</p>
          <h2 className={cn("mt-6", HEADING)}>
            Four people, in the order they arrived.
          </h2>
          <p className={cn("mt-7 max-w-[62ch]", BODY)}>
            The label dates from {ESTATE.founded}. The family worked this slope
            long before there was a label to put on anything, and the house was
            standing in {ESTATE.houseBuilt}.
          </p>

          <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {FAMILY.map((person) => (
              <FamilyPortrait key={person.slug} person={person} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
