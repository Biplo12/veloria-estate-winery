import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Onward, type OnwardLink } from "@/components/onward";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ESTATE, VISITABLE } from "@/data/estate";

export const metadata: Metadata = {
  title: "Visit",
  description: `${ESTATE.tenuta} is open to visitors from spring through harvest, the tasting room, the restaurant, a small guest hotel, the olive garden and the ${ESTATE.founded} cellar, ${ESTATE.altitudeMetres} metres above sea level.`,
};

const ONWARD: readonly OnwardLink[] = [
  {
    href: "/wines",
    title: "The wines",
    line: "What is poured at that table, and what went into it.",
  },
  {
    href: "/vineyards",
    title: "The vineyards",
    line: "The slope the whole of it comes off.",
  },
];

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
          anyone who asked for less motion, a loop nobody can pause has no
          business playing then. The painting has no audio track at all, so
          there is nothing here to mute. */}
      {/* Held inside the container rather than bled to the edge. The painting
          was filmed at 832px; across a 1920px screen that is well under 1:1 and
          the brushwork breaks up. At the container's 1376px the 1664px file
          oversamples it instead. Nothing here invents detail that was never
          filmed, it only stops the browser stretching what there is. */}
      {/* The same treatment the landing section gives it: full width, so the
          room is never a rectangle pasted on the paper. */}
      <section>
        {/* No dissolve. The painting is edge to edge in colour, 66 from the
            page cream at the top and 102 at the bottom, and fading paint that
            dark leaves a smear with a line at the end of it rather than an
            edge. */}
        <div>
          <div className="relative aspect-4/3 w-full sm:aspect-832/464 sm:max-h-[62svh]">
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
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          {/* What a visitor can walk into, which is not the same list as the
              one on /vineyards: the family house is lived in and the vineyards
              are worked, so neither is a stop on a visit. Both lists come from
              GROUNDS, so they cannot contradict each other. */}
          <Reveal>
            <h2 className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
              What you can walk into.
            </h2>
            <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
              {ESTATE.openTo} The rest of the year the estate is working, and
              most of that work happens somewhere dark where there is nothing
              to watch. The house is lived in and the vineyards are being
              worked, so what is left is this.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:mt-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <Reveal delay={90}>
                <ul>
                  {VISITABLE.map(({ thing, detail }) => (
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
                  src="/images/winery-map-tight-cut.webp"
                  alt="A painted aerial of the estate: the house and its bell tower on the ridge, a pale track dropping past the vineyard blocks, with cypresses and woodland on either side."
                  width={1756}
                  height={1633}
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
                  cellar of collector wines, older vintages the estate kept.
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

                {/* The address was standing here as a dead line of caps. The
                    page has nothing to do with where the estate is, it has to
                    do with getting in touch, so it points at the one route
                    that carries the address, the email and the phone. */}
                <p className="mt-8 text-base leading-[1.6] text-ink-soft sm:text-lg">
                  <Link
                    href="/contacts"
                    className="text-ink underline decoration-ink/30 underline-offset-[0.35em] transition-colors duration-200 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
                  >
                    How to reach the estate
                  </Link>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <Onward links={ONWARD} />
    </main>
  );
}
