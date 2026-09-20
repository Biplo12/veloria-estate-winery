import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING, SECTION_TIGHT } from "@/constants";
import { ESTATE, GROUNDS } from "@/data/estate";
import { cn } from "@/utils";

export function GroundsTable() {
  return (
    <section className={SECTION_TIGHT}>
      <div className={CONTAINER}>
        <Reveal>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-7">
              <h2 className={cn("max-w-[20ch]", HEADING)}>
                What stands on it.
              </h2>
              <ul className="mt-12">
                {GROUNDS.map(({ thing, detail }) => (
                  <li
                    key={thing}
                    className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
                  >
                    <span className="text-base leading-[1.6] text-ink sm:text-lg">
                      {thing}
                    </span>
                    {detail ? (
                      <span className={cn("shrink-0", EYEBROW)}>{detail}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className={cn("mt-8 max-w-[62ch]", BODY)}>
                The house was here a long time before the wine was. The cellar
                came with the land in {ESTATE.founded}, and everything else grew
                up around the two of them.
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="relative aspect-3/4 w-full overflow-hidden lg:aspect-2/3">
                <Image
                  src="/images/hill.webp"
                  alt="A painted view across the valley: planted rows and olive trees on the far slope, cypresses along a track, white farm buildings and a pond below."
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={cn("mt-6", BODY)}>
                Looking across the valley from the high corner of the property,
                where the ground stays coolest and the white is planted.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
