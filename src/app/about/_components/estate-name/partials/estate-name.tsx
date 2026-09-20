import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING, SECTION } from "@/constants";
import { ESTATE } from "@/data/estate";
import { cn } from "@/utils";

export function EstateName() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 items-start gap-x-8 gap-y-10 lg:grid-cols-12">
          <Image
            src="/images/grapes-2.webp"
            alt="A painted bunch of grapes, dark and red against a band of ochre."
            width={1024}
            height={1024}
            sizes="(min-width: 1024px) 22rem, 60vw"
            className="h-auto w-full max-w-[22rem] lg:col-span-4"
          />

          <div className="lg:col-span-7 lg:col-start-6">
            <p className={EYEBROW}>The name</p>
            <h2 className={cn("mt-6", HEADING)}>The name is the whole idea.</h2>
            <p className="mt-10 max-w-[30ch] text-2xl font-light leading-[1.25] text-ink sm:text-3xl">
              {ESTATE.nameMeaning}
            </p>
            <p className={cn("mt-8 max-w-[62ch]", BODY)}>
              It is the shortest description of how the place works. Nothing
              leaves here before it is ready, and the estate would rather be
              late than early.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
