import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ESTATE, FAMILY } from "@/data/estate";

export const metadata: Metadata = {
  title: "About",
  description: `Veloria began in ${ESTATE.founded} with ${ESTATE.hectaresAtFounding} hectares above Siena, an old stone cellar and no hurry. The estate, the name, and the family still running it.`,
};

/**
 * The founding, written out once. Every figure in it is interpolated from
 * ESTATE rather than typed, so a number can only ever be wrong in one place.
 */
const STORY = [
  `Matteo Bellandi was the son of a local farmer. In ${ESTATE.founded} he bought ${ESTATE.hectaresAtFounding} hectares on the southern hills of Siena, a slope, an old stone cellar, and no money for modern production. The first vintages were made in barrels under the family house.`,
  `In ${ESTATE.firstBottle} Matteo and his wife Elisa released the first bottle sold under the Veloria name. Elisa did the selling, and the name reached past the province because she carried it there.`,
  `The vineyard was enlarged over the decades that followed, one parcel at a time. It is ${ESTATE.hectares} hectares now, with its own ageing cellar and a small winery still run by the Bellandi family. The size changed. The way the wine is made did not.`,
];

/**
 * Four fixed points, in order. The house is older than the label by most of a
 * century — that gap is the honest version of the family's time here, and the
 * list is where it gets stated rather than implied.
 */
const MOMENTS = [
  { year: String(ESTATE.houseBuilt), what: "The family house" },
  {
    year: String(ESTATE.founded),
    what: `${ESTATE.hectaresAtFounding} hectares and an old stone cellar`,
  },
  {
    year: String(ESTATE.firstBottle),
    what: "The first bottle sold under the Veloria name",
  },
  {
    year: "Today",
    what: `${ESTATE.hectares} hectares, the ageing cellar, the same family`,
  },
];

const EYEBROW =
  "pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft";

const HEADING =
  "text-3xl font-light leading-[1.15] text-ink sm:text-4xl";

const LINK =
  "text-ink underline decoration-ink/30 underline-offset-[0.35em] transition-colors duration-200 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion";

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="About"
        title="A slope, a stone cellar, and no hurry."
        lead={`Matteo Bellandi bought ${ESTATE.hectaresAtFounding} hectares on the southern hills of Siena in ${ESTATE.founded}. Everything since has been the same family, adding land slowly enough that nothing about the way the wine is made had to change.`}
      />

      {/* The name, given the room it is owed. It is the one idea the rest of
          the estate is arranged around, so it arrives before the history. */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className={EYEBROW}>The name</p>
              <h2 className={`mt-6 ${HEADING}`}>
                The name is the whole idea.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="mt-12 max-w-[26ch] text-2xl font-light leading-[1.25] text-ink sm:mt-16 sm:text-3xl">
                {ESTATE.nameMeaning}
              </p>
              <p className="mt-10 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                It is the shortest description of how the place works. Nothing
                leaves here before it is ready, and the estate would rather be
                late than early.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        {/* Two columns. The story's div carried lg:col-span-7 lg:col-start-6
            with no grid above it to act on, so it fell into a narrow left
            column and left half the page empty. */}
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className={EYEBROW}>{ESTATE.tenuta}</p>
              <h2 className={`mt-6 ${HEADING}`}>
                It started in barrels under the house.
              </h2>
            </div>

            <div className="max-w-[62ch] space-y-6 lg:col-span-7 lg:col-start-6">
              {STORY.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-[1.6] text-ink-soft sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* The cellar the paragraph above describes, and the first picture on
            the page: everything before it was type. Unlike the panorama it
            does get the dissolve, because its edges are its own paper rather
            than its subject, a flat green wash at the top and a pale pink
            floor at the bottom sitting 132 and 46 units off the page cream.
            Both are even enough to fade without smearing. */}
        <div className="band-dissolve relative mt-20 aspect-2912/1632 w-full sm:mt-24">
          <Image
            src="/images/barrels-of-wine-2.webp"
            alt="The ageing cellar: barrels stacked two high in rows under a vaulted ceiling, and a man in an apron drawing a glass from one of them."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="mt-20 sm:mt-24">
            <ul>
              {MOMENTS.map(({ year, what }) => (
                <li
                  key={year}
                  className="flex flex-col gap-y-2 border-t border-ink/10 py-5 sm:flex-row sm:items-baseline sm:gap-x-10 sm:py-6"
                >
                  <span className={`${EYEBROW} sm:w-32 sm:shrink-0`}>
                    {year}
                  </span>
                  <span className="max-w-[46ch] text-base leading-[1.6] text-ink sm:text-lg">
                    {what}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Full width at its own 2.33:1, never cropped, and never masked. The
            dissolve is for illustrations whose own cream paper does not match
            the page's; this one has no paper showing at all, it is painted to
            the edge in colour, and its foreground is dark foliage 277 units
            from the cream. Fading that out did not make an edge, it made a
            grey smear across the bottom of the picture. A picture is allowed
            to have an edge. */}
        <div className="relative mt-20 aspect-1680/720 w-full sm:mt-24">
          <Image
            src="/images/winery-panorama.webp"
            alt="A painted panorama: a hill village of pale houses with terracotta roofs and a church tower, cypresses down the slope, terraced vineyard rows in the foreground and a lake below the wooded hills."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal>
            <div>
              <p className={EYEBROW}>The family</p>
              <h2 className={`mt-6 ${HEADING}`}>
                Four people, in the order they arrived.
              </h2>
              {/* Sofia's line is about the land, not the label. Said under the
                  heading so the arithmetic is settled before the names. */}
              <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                The label dates from {ESTATE.founded}. The family worked this
                slope long before there was a label to put on anything, and the
                house was standing in {ESTATE.houseBuilt}.
              </p>
            </div>

            <div>

              {/* Four across, so the faces read as a family rather than as a
                  list of staff, and so the right half of the page stops being
                  empty. The portraits are alpha-keyed, so they sit straight on
                  the cream with no plate around them. */}
              <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
                {FAMILY.map(
                  ({
                    name,
                    role,
                    dates,
                    line,
                    portrait,
                    portraitWidth,
                    portraitHeight,
                    portraitAlt,
                  }) => (
                    <li key={name}>
                      {/* Each portrait was trimmed to its own silhouette, so at
                          equal width the narrowest one drew tallest. A fixed
                          height with the figures sitting on the bottom edge puts
                          them back on one baseline and lines the names up. */}
                      <div className="flex h-56 items-end sm:h-64 lg:h-72">
                        <Image
                          src={portrait}
                          alt={portraitAlt}
                          width={portraitWidth}
                          height={portraitHeight}
                          sizes="(min-width: 1024px) 18rem, (min-width: 640px) 40vw, 70vw"
                          className="h-full w-auto object-contain object-bottom"
                        />
                      </div>
                      <p className="mt-7 text-base text-ink sm:text-lg">{name}</p>
                      <p className={`mt-2 ${EYEBROW}`}>
                        {dates ? `${role} · ${dates}` : role}
                      </p>
                      <p className="mt-4 text-base leading-[1.6] text-ink-soft">
                        {line}
                      </p>
                    </li>
                  ),
                )}
              </ul>

            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal>
            <p className={EYEBROW}>Next</p>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink sm:text-lg">
              Each of the wines says more about the estate than this page can.{" "}
              {ESTATE.openTo}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-base sm:text-lg">
              <Link href="/wines" className={LINK}>
                The wines
              </Link>
              <Link href="/visit" className={LINK}>
                Visiting the estate
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
