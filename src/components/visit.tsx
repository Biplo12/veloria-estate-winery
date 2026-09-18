import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ESTATE, VISITABLE } from "@/data/estate";

/** A detail reads after the thing, "The cellar, 1978". A null detail is the
    thing on its own. The year stands bare on purpose: GROUNDS records a year,
    not a construction date, and the cellar was already old when Matteo bought
    the plot in 1978. The list itself lives in @/data/estate, because /visit
    prints it too and the two must not drift. */
const PLACES = VISITABLE.map(({ thing, detail }) =>
  detail ? `${thing}, ${detail}` : thing,
);

export function Visit() {
  return (
    <section
      id="visit"
      className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink"
    >
      {/* The still sits under the video and carries the section on its own
          wherever the video does not run: reduced motion, a refused autoplay,
          the second before the first frame decodes. */}
      <Image
        src="/images/tasting-room-poster.webp"
        alt="The tasting room: two people at the long wooden table, shutters thrown open on the hills beyond."
        fill
        sizes="100vw"
        className="-z-30 object-cover"
      />

      {/* Silent, seamless, and gone entirely for anyone who asked for less
          motion, a loop nobody can pause has no business playing then. The
          still underneath keeps the room. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/tasting-room-poster.webp"
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/video/tasting-room.mp4" type="video/mp4" />
      </video>

      {/* velare, to veil. The painting is pale from edge to edge, its
          lightest paint is about rgb(245 234 216), top band to bottom, so
          white type needs the ink at 62% before it clears 4.5:1. The veil
          opens at 55%, which still leaves the window and the hills, passes
          66% within a tenth of the frame and holds at 88% from a third down,
          where the copy begins. Narrow screens carry the copy the whole
          height, so there the veil is even from the start. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-ink/85 via-ink/90 to-ink/90 sm:from-ink/55 sm:via-ink/88 sm:via-30%"
      />

      <div className="mx-auto w-full max-w-[86rem] px-6 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32">
        <div className="max-w-[46rem]">
          <Reveal>
            <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-white">
              Visiting
            </p>
            <h2 className="mt-6 max-w-[17ch] text-4xl font-light leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">
              Come up the hill and stay for the afternoon.
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-white/85 sm:text-xl">
              {ESTATE.openTo} Tastings are poured at one long table with the
              shutters open, and nobody is hurried back down the hill.
            </p>

            <Link
              href="/contacts"
              className="mt-10 inline-flex items-center bg-vine px-8 py-4 text-ink transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vine"
            >
              <span className="pl-[0.3em] text-[0.72rem] uppercase tracking-[0.3em]">
                Book a tasting
              </span>
            </Link>
          </Reveal>
        </div>

        {/* The places run as one line along the foot of the painting, the way
            a caption does. They were a column of six ruled rows standing on
            the picture, which is a table, and a table is the one thing this
            is not: it is a list of rooms you can walk into, with no second
            column to line anything up against. */}
        <Reveal delay={180} className="mt-20 border-t border-white/25 pt-8 sm:mt-28">
          <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-3">
            {PLACES.map((place) => (
              <li
                key={place}
                className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-white/85"
              >
                {place}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
