import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { CONTAINER, EYEBROW, LEAD, PAGE_TITLE } from "@/constants";
import type { Wine } from "@/types";
import { cn } from "@/utils";

import { WineFacts } from "./wine-facts";

type WineSummaryProps = {
  wine: Wine;
};

export function WineSummary({ wine }: WineSummaryProps) {
  return (
    <section className="pb-16 pt-16 sm:pb-24 sm:pt-20">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="flex justify-center lg:col-span-5 lg:justify-start">
            <Image
              src={wine.image}
              alt={wine.alt}
              width={wine.imageWidth}
              height={wine.imageHeight}
              sizes="(min-width: 1024px) 25rem, (min-width: 640px) 23rem, 18rem"
              preload
              className="h-auto w-full max-w-[18rem] sm:max-w-[22rem]"
            />
          </Reveal>

          <Reveal delay={90} className="lg:col-span-6 lg:col-start-7">
            <p className={EYEBROW}>
              {wine.vintage} · {wine.grapes}
            </p>
            <h1 className={cn("mt-5", PAGE_TITLE)}>{wine.name}</h1>
            <p className={cn("mt-7 max-w-[46ch]", LEAD)}>{wine.summary}</p>

            <WineFacts wine={wine} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
