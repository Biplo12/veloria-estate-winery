import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { ESTATE, VISITABLE } from "@/data/estate";
import { formatGround } from "@/utils";

import { PlacesCaption } from "./places-caption";
import { TastingRoomBackdrop } from "./tasting-room-backdrop";

const PLACES = VISITABLE.map(formatGround);

export function VisitPreview() {
  return (
    <section
      id="visit"
      className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-ink"
    >
      <TastingRoomBackdrop />

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

        <PlacesCaption places={PLACES} />
      </div>
    </section>
  );
}
