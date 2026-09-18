import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ESTATE, GROUNDS } from "@/data/estate";

export const metadata: Metadata = {
  title: "Visit",
  description: `${ESTATE.tenuta} is open to visitors from spring through harvest — the tasting room, the restaurant, a small guest hotel, the olive garden and the ${ESTATE.founded} cellar, ${ESTATE.altitudeMetres} metres above sea level.`,
};

export default function VisitPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="Visiting"
        title="Open from spring through harvest."
        lead={`${ESTATE.tenuta} stands at ${ESTATE.altitudeMetres} metres on the southern hills above Siena. Between spring and harvest the shutters are open and the long table is back under the window.`}
      />

      {/* The one moving picture on the site. The still is a real layer beneath
          the video, not only a poster attribute: it carries the band before the
          first frame decodes, wherever autoplay is refused, and on its own for
          anyone who asked for less motion — a loop nobody can pause has no
          business playing then. The painting has no audio track at all, so
          there is nothing here to mute. */}
      <section>
        <figure>
          <div className="band-dissolve relative aspect-4/3 w-full sm:aspect-832/464 sm:max-h-[78svh]">
            <Image
              src="/images/tasting-room-poster.webp"
              alt="The tasting room: two people at the long wooden table, a bottle and glasses between them, the shutters thrown open on the hills beyond."
              fill
              sizes="100vw"
              preload
              className="object-cover"
            />
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/tasting-room-poster.webp"
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            >
              <source src="/video/tasting-room.mp4" type="video/mp4" />
            </video>
          </div>

          <figcaption className="mx-auto mt-6 max-w-[86rem] px-6 sm:mt-8 sm:px-10">
            <span className="block pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
              The tasting room, shutters open
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
              What stands on the grounds.
            </h2>
            <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
              {ESTATE.openTo} The rest of the year the estate is working, and
              most of that work happens somewhere dark where there is nothing to
              watch. This is the whole list — the buildings, the land, and
              nothing that is not here.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:mt-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <Reveal delay={90}>
                <ul>
                  {GROUNDS.map(({ thing, detail }) => (
                    <li
                      key={thing}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4 text-base leading-[1.6] sm:text-lg"
                    >
                      <span className="text-ink">{thing}</span>
                      {detail ? (
                        <span className="whitespace-nowrap text-ink-soft">
                          {detail}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  Everything on that list stands on the same hill, within a
                  short walk of the rest.
                </p>
              </Reveal>
            </div>

            {/* Alpha-keyed, so the painting sits straight on the page cream
                without a band or a visible edge. */}
            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={180}>
                <Image
                  src="/images/winery-map-cut.webp"
                  alt="A painted aerial of the estate: the house and its bell tower on the ridge, a pale track dropping past the vineyard blocks, with cypresses and woodland on either side."
                  width={2018}
                  height={2048}
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="h-auto w-full"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                  Tastings are poured at one long table.
                </h2>
                <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  The table in the painting is the table. The shutters stay open
                  onto the hills, the bottles come out in the order the cellar
                  thinks right, and nobody is moved along.
                </p>
                <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  The {ESTATE.founded} cellar is still in use, and so is the
                  cellar of collector wines — older vintages the estate kept.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <Reveal delay={90}>
                <p className="max-w-[46ch] text-base leading-[1.6] text-ink sm:text-lg">
                  Nothing on this site takes a booking. Write to us with the
                  dates you have in mind, and we will answer with what the estate
                  can do that week.
                </p>

                <Link
                  href="/contacts"
                  className="mt-8 inline-flex items-center bg-ink px-6 py-4 text-paper hover:bg-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion sm:px-8"
                >
                  <span className="pl-[0.3em] text-[0.72rem] uppercase tracking-[0.3em]">
                    Write to us about a tasting
                  </span>
                </Link>

                <p className="mt-10 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                  {ESTATE.tenuta} · {ESTATE.place}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
