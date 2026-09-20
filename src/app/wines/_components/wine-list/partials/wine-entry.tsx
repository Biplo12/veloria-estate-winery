import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { BODY, EYEBROW, FOCUS_RING, HEADING } from "@/constants";
import type { Wine } from "@/types";
import { cn } from "@/utils";

type WineEntryProps = {
  wine: Wine;
};

export function WineEntry({ wine }: WineEntryProps) {
  return (
    <li className="group relative border-t border-ink/15 pt-10 sm:pt-12">
      <Reveal className="grid grid-cols-1 items-end gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex justify-center lg:col-span-5 lg:justify-start">
          <Image
            src={wine.image}
            alt={wine.alt}
            width={wine.imageWidth}
            height={wine.imageHeight}
            sizes="(min-width: 640px) 21rem, 17rem"
            className="lift h-auto w-full max-w-[14rem] sm:max-w-[17rem]"
          />
        </div>

        <div className="lg:col-span-7">
          <h2 className={HEADING}>
            <Link
              href={`/wines/${wine.slug}`}
              className={cn(
                "transition-colors duration-200 after:absolute after:inset-0 after:content-[''] group-hover:text-vermilion",
                FOCUS_RING,
              )}
            >
              {wine.name}
            </Link>
          </h2>
          <p className={cn("mt-4", EYEBROW)}>
            {wine.vintage} · {wine.grapes}
          </p>
          <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink sm:text-lg">
            {wine.summary}
          </p>
          <p className={cn("mt-4 max-w-[62ch]", BODY)}>{wine.note}</p>
        </div>
      </Reveal>
    </li>
  );
}
