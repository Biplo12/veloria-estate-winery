import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, HEADING, SECTION } from "@/constants";
import { ESTATE, VISITABLE } from "@/data/estate";
import { cn } from "@/utils";

import { VisitableList } from "./visitable-list";

export function VisitablePlaces() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <Reveal>
          <h2 className={cn("max-w-[20ch]", HEADING)}>
            What you can walk into.
          </h2>
          <p className={cn("mt-7 max-w-[62ch]", BODY)}>
            {ESTATE.openTo} The rest of the year the estate is working, and most
            of that work happens somewhere dark where there is nothing to watch.
            The house is lived in and the vineyards are being worked, so what is
            left is this.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:mt-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <Reveal delay={90}>
              <VisitableList places={VISITABLE} />
              <p className={cn("mt-8 max-w-[62ch]", BODY)}>
                Everything on that list stands on the same hill, within a short
                walk of the rest.
              </p>
            </Reveal>
          </div>

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
  );
}
