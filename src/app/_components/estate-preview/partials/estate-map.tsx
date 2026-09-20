import Image from "next/image";

import { ESTATE } from "@/data/estate";

export function EstateMap() {
  return (
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
  );
}
