import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { BACK_LABEL } from "@/data/estate";
import { WINES, findWine, labelNumber, price } from "@/data/wines";

type Props = { params: Promise<{ slug: string }> };

/**
 * Each bottle was painted on its own sheet with its own amount of paint around
 * it — the Rosso stands in the middle of a wide one, the Riserva very nearly
 * fills its own. One frame for all four would draw four bottles at four
 * different sizes, so the frame is sized to the painting it holds and the
 * bottle lands at the same height on every wine's page.
 *
 * These are measurements of the artwork, not facts about the wine — anything
 * about the wine itself is in @/data/wines.
 */
const FRAME: Record<string, string> = {
  rosso: "max-h-[19.5rem] sm:max-h-[24.5rem] lg:max-h-[26rem]",
  riserva: "max-h-[13rem] sm:max-h-[16.5rem] lg:max-h-[17.5rem]",
  "luna-bianca": "max-h-[12.5rem] sm:max-h-[15.5rem] lg:max-h-[16.5rem]",
  "vecchia-vigna": "max-h-[14.5rem] sm:max-h-[18rem] lg:max-h-[19rem]",
};

export async function generateStaticParams() {
  return WINES.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = findWine(slug);
  if (!wine) notFound();

  return {
    title: `${wine.name} ${wine.vintage}`,
    description: `${wine.summary} ${wine.note}`,
  };
}

export default async function WinePage({ params }: Props) {
  const { slug } = await params;
  const wine = findWine(slug);
  if (!wine) notFound();

  // Four wines read as a ring, so there is always one on either side of this
  // one and neither end of the list is a dead end.
  const index = WINES.findIndex((entry) => entry.slug === wine.slug);
  const previous = WINES[(index - 1 + WINES.length) % WINES.length];
  const next = WINES[(index + 1) % WINES.length];

  const facts = [
    { term: "In the glass", detail: wine.note },
    { term: "Ageing", detail: wine.ageing },
    { term: "Price", detail: price(wine) },
  ];

  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow={`${wine.vintage} · ${wine.grapes}`}
        title={wine.name}
        lead={wine.summary}
      />

      {/* The bottle is alpha-keyed, so it stands on the cream with no edge of
          its own. Bottom-aligned with the facts beside it. */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex justify-center lg:col-span-6 lg:justify-start">
              <Image
                src={wine.image}
                alt={wine.alt}
                width={wine.imageWidth}
                height={wine.imageHeight}
                sizes="(min-width: 1024px) 25rem, (min-width: 640px) 23rem, 18rem"
                preload
                className={`h-auto w-auto max-w-full ${
                  FRAME[wine.slug] ?? "max-h-[16rem] sm:max-h-[20rem]"
                }`}
              />
            </div>

            <dl className="lg:col-span-6 lg:col-start-7">
              {facts.map(({ term, detail }) => (
                <div
                  key={term}
                  className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-ink/10 py-5 first:border-t first:border-ink/10"
                >
                  <dt className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                    {term}
                  </dt>
                  <dd className="max-w-[42ch] text-base leading-[1.6] text-ink sm:text-lg">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="max-w-[62ch]">
            <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
              Where it comes from
            </h2>
            {wine.story.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-[1.6] text-ink-soft sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="max-w-[62ch]">
            <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
              Every bottle is numbered
            </h2>
            <p className="mt-6 text-base leading-[1.6] text-ink-soft sm:text-lg">
              The number is written on the front label before the bottle leaves
              the cellar, beside how many were made of this vintage. This is how
              one of them reads.
            </p>

            <div className="mt-10 border border-ink/15 bg-ink/5 px-6 py-8 sm:px-10 sm:py-10">
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {labelNumber(wine)}
              </p>
              <p className="mt-4 pl-[0.3em] text-sm uppercase tracking-[0.3em] text-ink sm:text-base">
                {wine.name}
              </p>
              <p className="mt-2 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                Vintage {wine.vintage}
              </p>

              <div className="mt-8 border-t border-ink/15 pt-6">
                {BACK_LABEL.map((line) => (
                  <p
                    key={line}
                    className="text-base leading-[1.6] text-ink-soft"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal>
            <nav
              aria-label="The other wines"
              className="border-t border-ink/15 pt-10 sm:pt-12"
            >
              <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
                {[
                  { label: "Before this one", neighbour: previous },
                  { label: "After it", neighbour: next },
                ].map(({ label, neighbour }) => (
                  <li key={label}>
                    <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                      {label}
                    </p>
                    <p className="mt-4">
                      <Link
                        href={`/wines/${neighbour.slug}`}
                        className="text-2xl font-light leading-[1.15] text-ink decoration-ink/30 underline-offset-[0.35em] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion sm:text-[1.75rem]"
                      >
                        {neighbour.name} {neighbour.vintage}
                      </Link>
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-12 text-base leading-[1.6] text-ink-soft sm:mt-14 sm:text-lg">
                <Link
                  href="/wines"
                  className="underline decoration-ink/30 underline-offset-4 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
                >
                  All four wines
                </Link>
              </p>
            </nav>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
