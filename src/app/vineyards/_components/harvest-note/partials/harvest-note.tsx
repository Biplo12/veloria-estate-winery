import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, HEADING, SECTION_TIGHT } from "@/constants";
import { cn } from "@/utils";

export function HarvestNote() {
  return (
    <section className={SECTION_TIGHT}>
      <div className="band-dissolve relative aspect-3360/1680 w-full">
        <Image
          src="/images/vineyard-harvest.webp"
          alt="Pickers working down a row of vines in the late summer, cutting bunches into shallow baskets by hand."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className={CONTAINER}>
        <Reveal className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:mt-20 lg:grid-cols-12">
          <h2 className={cn("max-w-[20ch] lg:col-span-4", HEADING)}>
            Picked by hand, fermented in small batches.
          </h2>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className={cn("max-w-[62ch]", BODY)}>
              The fruit comes off the vine into shallow baskets. The oldest
              parcels and the newest are worked the same way, because nothing
              about the work has been changed to make it quicker. Each parcel
              ferments on its own, in small batches, and what happens next is
              decided afterwards rather than before.
            </p>
            <p className={cn("mt-6 max-w-[62ch]", BODY)}>
              Some of it then goes into French oak and stays there for years.
              Time is the part of this that cannot be hurried, and it is the
              part the estate is built around.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
