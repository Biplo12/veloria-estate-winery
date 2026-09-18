import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { WINES, price } from "@/data/wines";

export const metadata: Metadata = {
  title: "Wines",
  description:
    "The four wines made at Tenuta Veloria, Veloria Rosso, Bellandi Riserva, Luna Bianca and Veloria Vecchia Vigna, with what is in each glass and how long it waited.",
};

/**
 * Every bottle was painted on its own sheet, and the sheets do not agree about
 * how much paint belongs around a bottle: the Rosso stands in the middle of its
 * own with room on all four sides, the Riserva very nearly fills its own. Given
 * one frame each, the Rosso bottle would draw at half the height of the Riserva
 * and the column would read as broken rather than painted. So each frame is
 * sized to the painting inside it, and the four bottles come out level.
 *
 * These are measurements of the artwork, not facts about the wine — anything
 * about the wine itself is in @/data/wines.
 */
const FRAME: Record<string, string> = {
  rosso: "max-h-[18rem] sm:max-h-[21.5rem] lg:max-h-[22rem]",
  riserva: "max-h-[12rem] sm:max-h-[14rem] lg:max-h-[14.5rem]",
  "luna-bianca": "max-h-[11.5rem] sm:max-h-[13.5rem] lg:max-h-[14rem]",
  "vecchia-vigna": "max-h-[13rem] sm:max-h-[15.5rem] lg:max-h-[16rem]",
};

export default function WinesPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="What the estate makes"
        title="Four wines, made slowly."
        lead="One red for the table, the riserva the house is judged on, a white drunk young, and, only in the years that earn it, a wine from the oldest vines on the property."
      />

      {/* The row was painted as a single picture, so the four bottles keep their
          real sizes relative to one another. Full width with the edges
          dissolved: the painting's cream is not the page's cream. */}
      <section className="pb-16 sm:pb-24">
        <Reveal as="figure">
          <div className="band-dissolve relative aspect-3072/1536 w-full">
            <Image
              src="/images/bottles-of-wine.webp"
              alt="Four painted bottles standing in a row against red and olive brushstrokes, each carrying a label of its own."
              fill
              sizes="100vw"
              preload
              className="object-cover"
            />
          </div>
          <figcaption className="mx-auto mt-6 max-w-[86rem] px-6 text-base leading-[1.6] text-ink-soft sm:mt-8 sm:px-10 sm:text-lg">
            Left to right: {WINES.map((wine) => wine.name).join(", ")}.
          </figcaption>
        </Reveal>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <ol className="space-y-16 sm:space-y-20 lg:space-y-24">
            {WINES.map((wine) => (
              <li
                key={wine.slug}
                className="group relative border-t border-ink/15 pt-10 sm:pt-12"
              >
                {/* Bottom-aligned, and beside the words only where there is room
                    for a whole painting next to them. */}
                <Reveal className="grid grid-cols-1 items-end gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
                  <div className="flex justify-center lg:col-span-5 lg:justify-start">
                    <Image
                      src={wine.image}
                      alt={wine.alt}
                      width={wine.imageWidth}
                      height={wine.imageHeight}
                      sizes="(min-width: 640px) 21rem, 17rem"
                      className={`h-auto w-auto max-w-full ${
                        FRAME[wine.slug] ?? "max-h-[14rem] sm:max-h-[17rem]"
                      }`}
                    />
                  </div>

                  <div className="lg:col-span-7">
                    <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                      {/* One link per entry. The name carries the accessible
                          name; the overlay makes the whole row clickable. */}
                      <Link
                        href={`/wines/${wine.slug}`}
                        className="underline-offset-[0.35em] decoration-ink/30 after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion group-hover:underline"
                      >
                        {wine.name}
                      </Link>
                    </h2>
                    <p className="mt-4 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                      {wine.vintage} · {wine.grapes}
                    </p>
                    <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink sm:text-lg">
                      {wine.summary}
                    </p>
                    <p className="mt-4 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                      {wine.note}
                    </p>
                    <p className="mt-8 text-base text-ink sm:text-lg">
                      {price(wine)}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <p className="mt-20 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:mt-24 sm:text-lg">
              Every bottle is numbered before it leaves the cellar. Nothing on
              this site sells wine, to ask about a case, or about tasting them
              here,{" "}
              <Link
                href="/contacts"
                className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
              >
                write to us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
