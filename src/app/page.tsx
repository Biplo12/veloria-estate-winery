import Image from "next/image";
import { Estate } from "@/components/estate";
import { Family } from "@/components/family";
import { Visit } from "@/components/visit";
import { Wines } from "@/components/wines";

export default function Home() {
  return (
    <main className="bg-paper">
      <section className="relative flex h-[100svh] flex-col overflow-hidden bg-paper">
        <div className="relative flex w-full flex-1 flex-col">
          {/* The painting fills the screen exactly, never taller, never leaving
              a band of bare paper. `object-[50%_20%]` splits the overflow 20/80:
              four fifths comes off the flowering foreground, a deep repeating
              band that loses a strip without anyone noticing, and the last fifth
              lifts the estate out of its own empty sky. 20 is the ceiling, past
              it the treeline reaches the name at 1366 × 768, the tightest common
              window. On a phone the painting takes the lower half and the name
              sits above it, since a full-height crop there would narrow it to a
              slice. */}
          <div className="relative order-2 h-[56svh] w-full sm:h-full">
            <Image
              src="/images/winery-hero.webp"
              alt="The Veloria estate house on the slope, with guests walking the flowering rows below the vineyard."
              fill
              preload
              sizes="100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>

          {/* Parked in the open sky the painter left above the house. That sky
              is a fixed share of the painting, so on screen it is always about
              24% of the window height, 188px at 1366x768, 264px at 1920x1080.
              A fixed lockup overflows it on a short window, so the whole lockup
              is measured in svh: it is sized by the room it actually has. */}
          <div className="order-1 flex flex-1 flex-col justify-center px-6 text-center sm:absolute sm:inset-x-0 sm:top-[4%] sm:z-20 sm:block sm:flex-none sm:p-0">
            <Image
              src="/images/logo-cut.webp"
              alt=""
              aria-hidden
              width={653}
              height={722}
              preload
              className="rise mx-auto h-24 w-auto sm:h-[clamp(3.5rem,9svh,6rem)]"
            />

            <h1 className="mt-4 flex flex-col items-center gap-1.5 sm:mt-2.5 lg:gap-2">
              <span
                className="rise pl-[0.3em] text-[2rem] font-medium uppercase leading-none tracking-[0.3em] text-ink sm:text-[clamp(1.5rem,4.6svh,2.75rem)]"
                style={{ animationDelay: "110ms" }}
              >
                Veloria
              </span>
              <span
                className="rise pl-[0.42em] text-[0.68rem] uppercase leading-none tracking-[0.42em] text-ink-soft sm:text-[clamp(0.6rem,1.2svh,0.8rem)]"
                style={{ animationDelay: "220ms" }}
              >
                Estate Winery
              </span>
            </h1>
          </div>
        </div>
      </section>

      <Wines />
      <Estate />
      <Family />
      <Visit />

    </main>
  );
}
