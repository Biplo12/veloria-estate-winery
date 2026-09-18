import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { ESTATE, GROUNDS } from "@/data/estate";

/**
 * The one measurement in the section: the first plot against the estate today.
 * The dark part of the rule is that share of it, so the picture and the figures
 * say the same thing. The rule measures land and nothing else — the years are
 * not a scale along it, and are left to the prose.
 */

export function Estate() {
  return (
    <section id="vineyards" className="bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
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
            <figure>
              <Image
                src="/images/winery-map-tight-cut.webp"
                alt="A painted aerial map of the estate: vineyard parcels in bands of green, the pale roads between them, and the family house with its tower near the centre."
                width={1756}
                height={1633}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-base leading-[1.6] text-ink-soft sm:text-lg">
                {ESTATE.tenuta}, {ESTATE.place}.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-5 lg:col-start-7">
            <h3 className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
              On the grounds
            </h3>
            <ul className="mt-8">
              {GROUNDS.map(({ thing, detail }) => (
                <li
                  key={thing}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
                >
                  <span className="text-base leading-[1.6] text-ink sm:text-lg">
                    {thing}
                  </span>
                  {detail ? (
                    <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                      {detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
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
