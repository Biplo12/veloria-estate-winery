import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ESTATE, GROUNDS } from "@/data/estate";

/** Everything a visitor can actually walk into, and nothing that is not there:
    GROUNDS also carries the family house and the vineyards, which stand on the
    estate but are not stops on a visit. The order is this section's reading
    order, not the data's. Typing the picks as GROUNDS' own literal union means
    a rename in @/data/estate fails the build here rather than silently
    dropping a line. */
const VISITABLE: readonly (typeof GROUNDS)[number]["thing"][] = [
  "The tasting room",
  "The restaurant",
  "A small guest hotel",
  "The olive garden",
  "The cellar",
  "A cellar of collector wines",
];

/** A detail reads after the thing — "The cellar, 1978". A null detail is the
    thing on its own. The year stands bare on purpose: GROUNDS records a year,
    not a construction date, and the cellar was already old when Matteo bought
    the plot in 1978. The hardcoded line here used to read "built in 1978",
    which claimed more than the canon does. */
const PLACES = VISITABLE.map((thing) => {
  const entry = GROUNDS.find((place) => place.thing === thing);
  return entry?.detail ? `${entry.thing}, ${entry.detail}` : thing;
});

export function Visit() {
  return (
    <section id="visit" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
          <h2 className="text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:col-span-5 lg:text-[3.5rem]">
            Come up the hill and stay for the afternoon.
          </h2>
          <p className="text-lg leading-[1.6] text-ink-soft sm:text-xl lg:col-span-6 lg:col-start-7">
            {ESTATE.openTo} Tastings are poured at one long table with the
            shutters open, and nobody is hurried back down the hill.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-16 lg:grid-cols-12">
          {/* The still sits under the video rather than only in the poster
              attribute: it carries the frame before the first frame decodes,
              wherever autoplay is refused, and on its own for anyone who asked
              for less motion. The painting has no audio track, so there is
              nothing here to mute. */}
          <Reveal className="lg:col-span-8">
            <div className="relative aspect-832/464 w-full overflow-hidden">
              <Image
                src="/images/tasting-room-poster.webp"
                alt="The tasting room: two people at the long wooden table, a bottle and glasses between them, the shutters thrown open on the hills beyond."
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
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
          </Reveal>

          <div className="lg:col-span-3 lg:col-start-10">
            <ul>
              {PLACES.map((thing, index) => (
                <Reveal
                  as="li"
                  key={thing}
                  delay={index === 0 ? 0 : index === 1 ? 90 : 180}
                  className="border-t border-ink/15 py-4 text-base leading-[1.6] text-ink first:border-t-0 first:pt-0 sm:text-lg"
                >
                  {thing}
                </Reveal>
              ))}
            </ul>

            <Reveal>
              <Link
                href="/contacts"
                className="mt-10 inline-flex items-center border border-ink/25 px-7 py-4 transition-colors duration-200 hover:border-vermilion hover:text-vermilion focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
              >
                <span className="pl-[0.3em] text-[0.72rem] uppercase tracking-[0.3em]">
                  Write about a tasting
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
