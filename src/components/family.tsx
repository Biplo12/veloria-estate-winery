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

        <div className="mt-20 grid grid-cols-1 gap-y-10 sm:mt-28 lg:grid-cols-12 lg:items-start lg:gap-x-8">
          <Reveal className="lg:col-span-2">
            <Image
              src="/images/grapes-cut.webp"
              alt=""
              aria-hidden
              width={681}
              height={810}
              className="h-auto w-20 sm:w-24 lg:w-full lg:max-w-[8rem]"
            />
          </Reveal>

          <Reveal delay={90} className="lg:col-span-10">
            <blockquote>
              <p className="max-w-[20ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[3rem]">
                {MATTEO}
              </p>
              <cite className="mt-8 block text-[0.68rem] uppercase not-italic tracking-[0.3em] text-ink-soft sm:mt-10">
                {FOUNDER_QUOTE.attribution}
              </cite>
            </blockquote>
          </Reveal>
        </div>

        {/* Four across: the faces read as a family, and the row fills the
            width the old list left empty on the right. */}
        <ul className="mt-24 grid grid-cols-2 gap-x-8 gap-y-12 sm:mt-32 lg:grid-cols-4">
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
                className="border-t border-ink/15 pt-8"
              >
                <div className="flex h-48 items-end sm:h-60 lg:h-64">
                  <Image
                    src={portrait}
                    alt={portraitAlt}
                    width={portraitWidth}
                    height={portraitHeight}
                    sizes="(min-width: 1024px) 15rem, 45vw"
                    className="h-full w-auto object-contain object-bottom"
                  />
                </div>
                <p className="mt-7 text-base text-ink sm:text-lg">{name}</p>
                <p className="mt-2 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                  {dates ? `${role}, ${dates}` : role}
                </p>
              </Reveal>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
