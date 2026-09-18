import Image from "next/image";
import { EstateBrief } from "@/components/estate-brief";
import { SiteHeader } from "@/components/site-header";
import { TimeScale } from "@/components/time-scale";

export default function Home() {
  return (
    <>
      <section className="relative flex h-[100svh] flex-col overflow-hidden bg-paper">
        <SiteHeader />

        <div className="relative flex w-full flex-1 flex-col">
          {/* The painting fills the screen exactly — never taller, never leaving
              a band of bare paper. `object-[50%_20%]` splits the overflow 20/80:
              four fifths comes off the flowering foreground, a deep repeating
              band that loses a strip without anyone noticing, and the last fifth
              lifts the estate out of its own empty sky. 20 is the ceiling — past
              it the treeline reaches the name at 1366 × 768, the tightest common
              window. On a phone the painting takes the lower half and the name
              sits above it, since a full-height crop there would narrow it to a
              slice. */}
          <div className="relative order-2 h-[56svh] w-full sm:h-full">
            <Image
              src="/images/winery-hero.webp"
              alt="The Veloria estate house on the slope, with guests walking the flowering rows below the vineyard."
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>

          {/* Parked in the open sky the painter left above the house. */}
          <div className="order-1 flex flex-1 flex-col justify-center px-6 text-center sm:absolute sm:inset-x-0 sm:top-[4%] sm:z-20 sm:block sm:flex-none sm:p-0">
            <Image
              src="/images/logo-cut.webp"
              alt=""
              aria-hidden
              width={653}
              height={722}
              priority
              className="rise mx-auto h-24 w-auto sm:h-16 lg:h-20"
            />

            <h1 className="mt-4 flex flex-col items-center gap-1.5 sm:mt-2.5 lg:gap-2">
              <span
                className="rise pl-[0.3em] text-2xl font-medium uppercase leading-none tracking-[0.3em] text-ink sm:text-xl lg:text-[1.75rem]"
                style={{ animationDelay: "110ms" }}
              >
                Veloria
              </span>
              <span
                className="rise pl-[0.42em] text-[0.6rem] uppercase leading-none tracking-[0.42em] text-ink-soft lg:text-[0.68rem]"
                style={{ animationDelay: "220ms" }}
              >
                Estate Winery
              </span>
            </h1>
          </div>
        </div>
      </section>

      <TimeScale />
      <EstateBrief />
    </>
  );
}
