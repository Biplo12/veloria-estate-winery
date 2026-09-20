import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING } from "@/constants";
import type { Wine } from "@/types";
import { labelNumber } from "@/data/wines";
import { cn } from "@/utils";

type BottleLabelProps = {
  wine: Wine;
};

export function BottleLabel({ wine }: BottleLabelProps) {
  return (
    <section className="pb-16 sm:pb-24">
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className={HEADING}>Every bottle is numbered</h2>
            <p className={cn("mt-6 max-w-[34ch]", BODY)}>
              Written on the front label before the bottle leaves the cellar.
              This is how one of them reads.
            </p>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className={EYEBROW}>{labelNumber(wine)}</p>
            <p className="mt-5 pl-[0.3em] text-xl font-light uppercase tracking-[0.3em] text-ink sm:text-2xl">
              {wine.name}
            </p>
            <p className={cn("mt-3", EYEBROW)}>Vintage {wine.vintage}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
