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
    <section id="vineyards" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
            {ESTATE.tenuta}
          </p>
          <h2 className="mt-6 max-w-[16ch] text-3xl font-light leading-[1.1] text-ink sm:text-4xl lg:text-[2.5rem]">
            Forty-two hectares, bought in pieces.
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            The land sits on the southern hills of Siena, three hundred and
            forty metres up. It was never laid out to a plan. The parcels are
            where the family could reach them, in the order they could be paid
            for, and the map still shows it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-16 sm:mt-20 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="lg:col-span-7">
            <figure>
              <Image
                src="/images/winery-map-cut.webp"
                alt="A painted aerial map of the estate: vineyard parcels in bands of green, the pale roads between them, and the family house with its tower near the centre."
                width={2018}
                height={2048}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="mt-6 text-base leading-[1.6] text-ink-soft sm:text-lg">
                {ESTATE.tenuta}, {ESTATE.place}.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-4 lg:col-start-9">
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
            <p className="mt-8 text-base leading-[1.6] text-ink-soft sm:text-lg">
              Matteo Bellandi, the son of a local farmer, started with the
              cellar and the house above it. The rest was added slowly enough
              that nobody had to change the way the wine was made.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20 sm:mt-28">
          <p className="max-w-[46ch] text-lg leading-[1.6] text-ink sm:text-xl">
            Seven hectares in {ESTATE.founded}, an old stone cellar, and no
            money for modern production. The other thirty-five arrived one
            parcel at a time, over the decades that followed.
          </p>
        </Reveal>
      </div>

      <div className="band-dissolve relative mt-24 aspect-3360/1680 w-full sm:mt-32">
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
