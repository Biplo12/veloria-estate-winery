import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING, SECTION_TIGHT } from "@/constants";
import { ESTATE } from "@/data/estate";
import { cn } from "@/utils";

import { PARCEL_MARKS } from "../../../constants";
import { ParcelMarks } from "./parcel-marks";

export function ParcelScale() {
  return (
    <section className={SECTION_TIGHT}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-6">
              <p className={EYEBROW}>{ESTATE.founded} to today</p>
              <h2 className={cn("mt-6 max-w-[20ch]", HEADING)}>
                It started as {ESTATE.hectaresAtFounding} hectares.
              </h2>
              <p className={cn("mt-7 max-w-[62ch]", BODY)}>
                Matteo Bellandi, the son of a local farmer, bought a slope with
                an old stone cellar standing on it. There was no money for
                modern production, so the first vintages were made in barrels
                under the family house, and the first bottle sold under the
                Veloria name went out in {ESTATE.firstBottle}.
              </p>
              <p className={cn("mt-6 max-w-[62ch]", BODY)}>
                Everything after that was added a parcel at a time, slowly
                enough that nobody had to change how the wine was made.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <ParcelMarks marks={PARCEL_MARKS} />
              <p className="mt-8 max-w-[38ch] text-base leading-[1.6] text-ink sm:text-lg">
                One mark, one hectare. The {ESTATE.hectaresAtFounding} dark ones
                are the plot bought in {ESTATE.founded}; the other marks are the
                rest of the {ESTATE.hectares} the estate works now.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
