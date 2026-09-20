import { Reveal } from "@/components/reveal";
import { CONTAINER, EYEBROW } from "@/constants";
import { FOUNDER_QUOTE } from "@/data/estate";
import { cn } from "@/utils";

export function FounderQuote() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
          <p className={cn(EYEBROW, "lg:col-span-4")}>In his words</p>
          <blockquote className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-[24ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
              {`\u201C${FOUNDER_QUOTE.text}\u201D`}
            </p>
            <cite className={cn("mt-8 block not-italic", EYEBROW)}>
              {FOUNDER_QUOTE.attribution}
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
