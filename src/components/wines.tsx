import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { WINES, findWine, labelNumber, price } from "@/data/wines";

/**
 * Which of the data's two prose lines each column carries. The words live in
 * @/data/wines; this is only the shape of the grid. Rosso speaks for itself and
 * takes no summary line, and Vecchia Vigna runs without a tasting note, so its
 * summary carries the column on its own and takes the note's weight.
 *
 * The list is rendered in the data's own order — left to right in the same
 * order as the bottles in the painting above, so the picture reads as the head
 * of the table and each column sits under its own bottle on a wide screen.
 * Four entries, not four products: no basket, no rating, nothing to add up.
 */
const COLUMN: Record<string, { note: boolean; aside: boolean }> = {
  rosso: { note: true, aside: false },
  riserva: { note: true, aside: true },
  "luna-bianca": { note: true, aside: true },
  "vecchia-vigna": { note: false, aside: true },
};

/** The bottle the closing line points at — the label the estate prints. */
const NUMBERED = findWine("riserva") ?? WINES[0];

export function Wines() {
  return (
    <section id="wines" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <h2 className="max-w-[20ch] text-3xl font-light leading-[1.1] text-ink sm:text-4xl lg:text-[2.5rem]">
            Four wines, and no plans for a fifth.
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            One red for the table, the riserva the house is known for, a white to
            drink young, and — only in the years that deserve it — a wine from
            the oldest vines. All four come out of the same cellar, made by the
            same family at the same pace.
          </p>
        </Reveal>
      </div>

      {/* Painted as one picture, so the four bottles keep their relative size.
          Full width with the edges dissolved: its paper is not the page's. */}
      <Reveal className="mt-16 sm:mt-20">
        <div className="band-dissolve relative aspect-3072/1536 w-full">
          <Image
            src="/images/bottles-of-wine.webp"
            alt="The four Veloria wines painted in a row against red and olive brushstrokes — from the left: Rosso, Bellandi Riserva, Luna Bianca and Vecchia Vigna."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <ol className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
            {WINES.map((wine) => {
              const column = COLUMN[wine.slug] ?? { note: true, aside: true };

              return (
                <li
                  key={wine.slug}
                  className="flex flex-col border-t border-ink/15 pt-6"
                >
                  <h3 className="text-2xl font-light leading-[1.15] text-ink sm:text-[1.75rem]">
                    {wine.name}
                  </h3>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                    {wine.vintage} · {wine.grapes}
                  </p>
                  {column.note ? (
                    <p className="mt-5 text-base leading-[1.6] text-ink sm:text-lg">
                      {wine.note}
                    </p>
                  ) : null}
                  {column.aside ? (
                    <p
                      className={`text-base leading-[1.6] sm:text-lg ${
                        column.note ? "mt-4 text-ink-soft" : "mt-5 text-ink"
                      }`}
                    >
                      {wine.summary}
                    </p>
                  ) : null}
                  <p className="mt-6 text-base text-ink-soft sm:text-lg lg:mt-auto lg:pt-8">
                    {price(wine)}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal>
          <p className="mt-20 max-w-[52ch] text-base leading-[1.6] text-ink-soft sm:mt-24">
            Every bottle is numbered before it leaves the cellar —{" "}
            {/* The negative margin swallows the trailing letterspace, so the
                full stop sits against the last figure instead of drifting. */}
            <span className="-mr-[0.3em] uppercase tracking-[0.3em] text-ink">
              {labelNumber(NUMBERED)}
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
