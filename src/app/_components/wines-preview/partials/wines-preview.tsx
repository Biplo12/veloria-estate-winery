import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/constants";
import { WINES } from "@/data/wines";
import { cn } from "@/utils";

import { COLUMN_LAYOUT } from "./column-layout";
import { WineColumn } from "./wine-column";

export function WinesPreview() {
  return (
    <section id="wines" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className={CONTAINER}>
        <Reveal>
          <h2 className="max-w-[20ch] text-3xl font-light leading-[1.1] text-ink sm:text-4xl lg:text-[2.5rem]">
            Four wines, and no plans for a fifth.
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            One red for the table, the riserva the house is known for, a white
            to drink young, and, only in the years that deserve it, a wine from
            the oldest vines. All four come out of the same cellar, made by the
            same family at the same pace.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-8 sm:mt-10">
        <div className="relative aspect-3072/1134 w-full">
          <Image
            src="/images/bottles-of-wine.webp"
            alt="The four Veloria wines painted in a row against red and olive brushstrokes, from the left: Rosso, Bellandi Riserva, Luna Bianca and Vecchia Vigna."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className={CONTAINER}>
        <Reveal>
          <ol
            className={cn(
              "grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8",
            )}
          >
            {WINES.map((wine) => (
              <WineColumn
                key={wine.slug}
                wine={wine}
                showNote={COLUMN_LAYOUT[wine.slug].note}
                showSummary={COLUMN_LAYOUT[wine.slug].summary}
              />
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
