import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { WINES, findWine, labelNumber, price } from "@/data/wines";

type Props = { params: Promise<{ slug: string }> };

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
      {/* Everything that identifies the wine, in one place. It used to be
          three: the vintage and grapes in a page intro, the summary across
          the top right, then the glass, the ageing and the price a screen
          further down beside the foot of the bottle, with a void between
          them. The bottle is alpha-keyed, so it stands on the cream with no
          edge of its own. */}
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-8">
            <Reveal className="flex justify-center lg:col-span-5 lg:justify-start">
              <Image
                src={wine.image}
                alt={wine.alt}
                width={wine.imageWidth}
                height={wine.imageHeight}
                sizes="(min-width: 1024px) 25rem, (min-width: 640px) 23rem, 18rem"
                preload
                className="h-auto w-full max-w-[18rem] sm:max-w-[22rem]"
              />
            </Reveal>

            <Reveal delay={90} className="lg:col-span-6 lg:col-start-7">
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {wine.vintage} · {wine.grapes}
              </p>
              <h1 className="mt-5 text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:text-[3.25rem]">
                {wine.name}
              </h1>
              <p className="mt-7 max-w-[46ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
                {wine.summary}
              </p>

              <dl className="mt-12">
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
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
            <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:col-span-4">
              Where it comes from
            </h2>
            <div className="lg:col-span-7 lg:col-start-6">
              {wine.story.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-[1.6] text-ink-soft first:mt-0 [&:not(:first-child)]:mt-6 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                Every bottle is numbered
              </h2>
              <p className="mt-6 max-w-[34ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                Written on the front label before the bottle leaves the
                cellar. This is how one of them reads.
              </p>
            </div>

            {/* The front label set as a label, not as a card. It was a grey
                plate with a border, which is the one surface this site does
                not have: nothing here sits on anything but the cream.

                The back label came off with the plate. It was printed here
                and again in the footer, word for word, about six hundred
                pixels apart, and the footer says it on every page. */}
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {labelNumber(wine)}
              </p>
              <p className="mt-5 pl-[0.3em] text-xl font-light uppercase tracking-[0.3em] text-ink sm:text-2xl">
                {wine.name}
              </p>
              <p className="mt-3 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                Vintage {wine.vintage}
              </p>
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
