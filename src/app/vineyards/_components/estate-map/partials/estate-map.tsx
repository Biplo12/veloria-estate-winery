import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING, SECTION_TIGHT } from "@/constants";
import { ESTATE } from "@/data/estate";
import { cn } from "@/utils";

export function EstateMap() {
  return (
    <section className={SECTION_TIGHT}>
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <h2 className={cn("max-w-[20ch]", HEADING)}>
              A hill in the province of Siena, drawn from above.
            </h2>
            <p className={cn("mt-7 max-w-[46ch]", BODY)}>
              The estate was never laid out to a plan. The parcels are where the
              family could reach them, in the order they could be paid for, and
              the map still shows it, the rows run whichever way the slope
              allows, and the roads between them were paths first.
            </p>
          </div>

          <figure className="lg:col-span-5 lg:col-start-8">
            <Image
              src="/images/winery-map-tight-cut.webp"
              alt="A painted map of the estate seen from above: vineyard parcels in bands of green and olive, pale roads winding between them, and the family house near the centre."
              width={1756}
              height={1633}
              sizes="(min-width: 1024px) 48rem, 100vw"
              className="h-auto w-full"
            />
            <figcaption className={cn("mt-4", EYEBROW)}>
              {ESTATE.tenuta} · {ESTATE.place} · {ESTATE.altitudeMetres} m
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
