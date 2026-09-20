import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/constants";
import { ESTATE, GROUNDS } from "@/data/estate";

import { EstateMap } from "./estate-map";
import { GroundsList } from "./grounds-list";

export function EstatePreview() {
  return (
    <section id="vineyards" className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className={CONTAINER}>
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
            {ESTATE.tenuta}
          </p>
          <h2 className="mt-6 max-w-[16ch] text-3xl font-light leading-[1.1] text-ink sm:text-4xl lg:text-[2.5rem]">
            Forty-two hectares, bought in pieces.
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            Seven hectares in {ESTATE.founded}, an old stone cellar, and no
            money for modern production. The other thirty-five arrived one
            parcel at a time, over the decades that followed, and the map still
            shows it: the parcels are where the family could reach them, in the
            order they could be paid for.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-y-12 sm:mt-14 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-5">
            <EstateMap />
          </Reveal>

          <Reveal delay={90} className="lg:col-span-5 lg:col-start-7">
            <h3 className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
              On the grounds
            </h3>
            <GroundsList grounds={GROUNDS} />
          </Reveal>
        </div>
      </div>

      <div className="band-dissolve relative mt-16 aspect-3360/1680 w-full sm:mt-20">
        <Image
          src="/images/vineyard-harvest.webp"
          alt="Two people working down a row of vines, cutting bunches into baskets by hand."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
