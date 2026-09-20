import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/constants";
import { ESTATE, FAMILY } from "@/data/estate";

import { FamilyCard } from "./family-card";
import { FounderQuote } from "./founder-quote";

const STAGGER = [0, 90, 180, 180];

export function FamilyPreview() {
  return (
    <section id="family" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className={CONTAINER}>
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
            The family
          </p>
          <h2 className="mt-6 max-w-[16ch] text-3xl font-light leading-[1.1] text-ink sm:text-4xl lg:text-[2.5rem]">
            Four names on the same slope.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            Matteo’s father farmed this ground when there was no label on the
            bottle and no bottle to put one on. The house dates from{" "}
            {ESTATE.houseBuilt}, the cellar from {ESTATE.founded}. Everything
            since has been the same family, waiting in turn.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <FounderQuote />
          </Reveal>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-5 lg:col-start-8">
            {FAMILY.map((person, index) => (
              <Reveal as="li" key={person.slug} delay={STAGGER[index]}>
                <FamilyCard person={person} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
