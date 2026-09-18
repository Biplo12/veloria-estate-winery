import type { Metadata } from "next";
import Image from "next/image";

import { Onward, type OnwardLink } from "@/components/onward";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ESTATE, GROUNDS } from "@/data/estate";

export const metadata: Metadata = {
  title: "Vineyards",
  description: `${ESTATE.tenuta}: ${ESTATE.hectares} hectares on the southern hills of Siena, ${ESTATE.altitudeMetres} metres above sea level, worked by one family since ${ESTATE.founded}.`,
};

/**
 * The land, at the scale it is actually measured in. The only figure on this
 * page that is set structurally is the one that carries the whole history —
 * seven hectares in 1978 against forty-two today — and it is drawn as forty-two
 * marks, one to a hectare, seven to a row, so the first plot is the top row and
 * nothing else has to be claimed about when the rest of it arrived.
 */
const PARCEL_MARKS = Array.from({ length: ESTATE.hectares }, (_, index) => ({
  key: index,
  original: index < ESTATE.hectaresAtFounding,
}));

const ONWARD: readonly OnwardLink[] = [
  {
    href: "/wines",
    title: "The wines",
    line: "What this slope tastes like once it has been left alone for long enough.",
  },
  {
    href: "/visit",
    title: "Visiting",
    line: ESTATE.openTo,
  },
];

export default function VineyardsPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow={ESTATE.tenuta}
        title="The land the wine comes from."
        lead={`${ESTATE.hectares} hectares on the southern hills of Siena, at ${ESTATE.altitudeMetres} metres above sea level. It began as ${ESTATE.hectaresAtFounding} of them, and the way it is worked has not changed since.`}
      />

      {/* Where it is. The map is alpha-keyed, so it sits straight on the cream
          at whatever size the page can give it. */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          {/* The words hold the left four columns and the map takes the other
              seven beside them. Stacked in one column the whole right half of
              the page was empty and the map floated in the middle of it. */}
          <Reveal className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <h2 className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                A hill in the province of Siena, drawn from above.
              </h2>
              <p className="mt-7 max-w-[46ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                The estate was never laid out to a plan. The parcels are where
                the family could reach them, in the order they could be paid
                for, and the map still shows it, the rows run whichever way the
                slope allows, and the roads between them were paths first.
              </p>
            </div>

            <figure className="lg:col-span-5 lg:col-start-8">
              <Image
                src="/images/winery-map-tight-cut.webp"
                alt="A painted map of the estate seen from above: vineyard parcels in bands of green and olive, pale roads winding between them, and the family house near the centre."
                width={1756}
                height={1633}
                sizes="(min-width: 1024px) 48rem, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-4 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {ESTATE.tenuta} · {ESTATE.place} · {ESTATE.altitudeMetres} m
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* The one figure worth setting structurally. */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal>
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
              <div className="lg:col-span-6">
                <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                  {ESTATE.founded} to today
                </p>
                <h2 className="mt-6 max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                  It started as {ESTATE.hectaresAtFounding} hectares.
                </h2>
                <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  Matteo Bellandi, the son of a local farmer, bought a slope
                  with an old stone cellar standing on it. There was no money
                  for modern production, so the first vintages were made in
                  barrels under the family house, and the first bottle sold
                  under the Veloria name went out in {ESTATE.firstBottle}.
                </p>
                <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  Everything after that was added a parcel at a time, slowly
                  enough that nobody had to change how the wine was made.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8">
                <div
                  aria-hidden
                  className="grid max-w-[26rem] grid-cols-7 gap-1.5 sm:gap-2"
                >
                  {PARCEL_MARKS.map(({ key, original }) => (
                    <span
                      key={key}
                      className={`aspect-square ${original ? "bg-ink" : "bg-ink/10"}`}
                    />
                  ))}
                </div>
                <p className="mt-8 max-w-[38ch] text-base leading-[1.6] text-ink sm:text-lg">
                  One mark, one hectare. The {ESTATE.hectaresAtFounding} dark
                  ones are the plot bought in {ESTATE.founded}; the other marks
                  are the rest of the {ESTATE.hectares} the estate works now.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The harvest, full width, its edges dissolved into the page. */}
      <section className="py-10 sm:py-14">
        <div className="band-dissolve relative aspect-3360/1680 w-full">
          <Image
            src="/images/vineyard-harvest.webp"
            alt="Pickers working down a row of vines in the late summer, cutting bunches into shallow baskets by hand."
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:mt-20 lg:grid-cols-12">
            <h2 className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:col-span-4">
              Picked by hand, fermented in small batches.
            </h2>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                The fruit comes off the vine into shallow baskets. The oldest
                parcels and the newest are worked the same way, because nothing
                about the work has been changed to make it quicker. Each parcel
                ferments on its own, in small batches, and what happens next is
                decided afterwards rather than before.
              </p>
              <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                Some of it then goes into French oak and stays there for years.
                Time is the part of this that cannot be hurried, and it is the
                part the estate is built around.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What stands on the land. */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal>
            <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
              <div className="lg:col-span-7">
                <h2 className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                  What stands on it.
                </h2>
                <ul className="mt-12">
                  {GROUNDS.map(({ thing, detail }) => (
                    <li
                      key={thing}
                      className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
                    >
                      <span className="text-base leading-[1.6] text-ink sm:text-lg">
                        {thing}
                      </span>
                      {detail ? (
                        <span className="shrink-0 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                          {detail}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  The house was here a long time before the wine was. The cellar
                  came with the land in {ESTATE.founded}, and everything else
                  grew up around the two of them.
                </p>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <div className="relative aspect-3/4 w-full overflow-hidden lg:aspect-2/3">
                  <Image
                    src="/images/hill.webp"
                    alt="A painted view across the valley: planted rows and olive trees on the far slope, cypresses along a track, white farm buildings and a pond below."
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-6 text-base leading-[1.6] text-ink-soft sm:text-lg">
                  Looking across the valley from the high corner of the
                  property, where the ground stays coolest and the white is
                  planted.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Onward links={ONWARD} />
    </main>
  );
}
