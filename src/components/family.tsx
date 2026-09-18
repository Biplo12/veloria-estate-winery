import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { ESTATE, FAMILY, FOUNDER_QUOTE } from "@/data/estate";

/**
 * The founder's line as it is set on this page. The sentence itself is canon
 * and lives in FOUNDER_QUOTE; only the quotation marks around it are
 * typography, so they stay here. It is built as one string rather than written
 * inline in the JSX so the marks and the sentence stay a single text node.
 */
const MATTEO = `“${FOUNDER_QUOTE.text}”`;

const LEAD = `Matteo’s father farmed this ground when there was no label on the bottle and no bottle to put one on. The house dates from ${ESTATE.houseBuilt}, the cellar from ${ESTATE.founded}. Everything since has been the same family, waiting in turn.`;

export function Family() {
  return (
    <section id="family" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
            The family
          </p>
          <h2 className="mt-6 max-w-[16ch] text-3xl font-light leading-[1.1] text-ink sm:text-4xl lg:text-[2.5rem]">
            Four names on the same slope.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            {LEAD}
          </p>
        </Reveal>

        {/* The quote holds the left, the four faces fill the right. Two rows
            of two rather than a single column: four stacked portraits would run
            far past the quote and leave the same hole lower down. */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-28 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Image
              src="/images/grapes-cut.webp"
              alt=""
              aria-hidden
              width={681}
              height={810}
              className="h-auto w-20 sm:w-24"
            />
            <blockquote className="mt-10">
              <p className="max-w-[18ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
                {MATTEO}
              </p>
              <cite className="mt-8 block text-[0.68rem] uppercase not-italic tracking-[0.3em] text-ink-soft sm:mt-10">
                {FOUNDER_QUOTE.attribution}
              </cite>
            </blockquote>
          </Reveal>

          <ul className="grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-5 lg:col-start-8">
            {FAMILY.map(
              (
                {
                  name,
                  role,
                  dates,
                  portrait,
                  portraitWidth,
                  portraitHeight,
                  portraitAlt,
                },
                index,
              ) => (
                <Reveal
                  as="li"
                  key={name}
                  delay={index === 0 ? 0 : index === 1 ? 90 : 180}
                  className="border-t border-ink/15 pt-6"
                >
                  <div className="flex h-36 items-end sm:h-44">
                    <Image
                      src={portrait}
                      alt={portraitAlt}
                      width={portraitWidth}
                      height={portraitHeight}
                      sizes="(min-width: 1024px) 11rem, 40vw"
                      className="h-full w-auto object-contain object-bottom"
                    />
                  </div>
                  <p className="mt-5 text-base text-ink">{name}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                    {dates ? `${role}, ${dates}` : role}
                  </p>
                </Reveal>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
