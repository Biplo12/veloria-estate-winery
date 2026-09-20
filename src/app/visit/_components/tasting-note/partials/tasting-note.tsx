import Link from "next/link";

import { Reveal } from "@/components/reveal";
import {
  BODY,
  CONTAINER,
  FOCUS_RING,
  HEADING,
  INLINE_LINK,
  SECTION,
} from "@/constants";
import { ESTATE } from "@/data/estate";
import { cn } from "@/utils";

export function TastingNote() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className={cn("max-w-[20ch]", HEADING)}>
                Tastings are poured at one long table.
              </h2>
              <p className={cn("mt-7 max-w-[62ch]", BODY)}>
                The table in the painting is the table. The shutters stay open
                onto the hills, the bottles come out in the order the cellar
                thinks right, and nobody is moved along.
              </p>
              <p className={cn("mt-6 max-w-[62ch]", BODY)}>
                The {ESTATE.founded} cellar is still in use, and so is the
                cellar of collector wines, older vintages the estate kept.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={90}>
              <p className="max-w-[46ch] text-base leading-[1.6] text-ink sm:text-lg">
                Nothing on this site takes a booking. Write to us with the dates
                you have in mind, and we will answer with what the estate can do
                that week.
              </p>

              <Link
                href="/contacts"
                className={cn(
                  "mt-8 inline-flex items-center bg-ink px-6 py-4 text-paper hover:bg-ink/90 sm:px-8",
                  FOCUS_RING,
                )}
              >
                <span className="pl-[0.3em] text-[0.72rem] uppercase tracking-[0.3em]">
                  Write to us about a tasting
                </span>
              </Link>

              <p className={cn("mt-8", BODY)}>
                <Link href="/contacts" className={cn(INLINE_LINK, FOCUS_RING)}>
                  How to reach the estate
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
