import Image from "next/image";
import { Reveal } from "@/components/reveal";

/**
 * Everything that happens to a bottle of Bellandi Riserva, in the order it
 * happens, measured from the morning the grapes come off the vine.
 *
 * Two earlier versions tried to draw the growth: first a hairline rule per step
 * that read as four empty form fields, then a type size that grew with the wait
 * and only made the row look badly aligned. Neither said "longer" to anyone who
 * was not told. The steps are now set plainly and identically, in order, and the
 * cellar carries the idea instead — it is a picture of waiting, and it was doing
 * nothing at the bottom edge of the section.
 */
const STEPS = [
  { step: "Picked by hand", duration: "One morning" },
  { step: "Fermented in small batches", duration: "Three weeks" },
  { step: "Resting in French oak", duration: "Thirty months" },
  { step: "Waiting in the bottle", duration: "A further year" },
];

export function TimeScale() {
  return (
    <section className="bg-paper pb-24 pt-24 sm:pb-32 sm:pt-32">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
          <h2 className="text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:col-span-5 lg:text-[3.5rem]">
            Time is an ingredient.
          </h2>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-[1.6] text-ink-soft sm:text-xl">
              Almost nothing on this estate is work, and almost all of it is
              waiting. The harvest, the part everyone pictures, is the shortest
              thing on the list.
            </p>
            <p className="mt-6 text-lg leading-[1.6] text-ink sm:text-xl">
              And the vines that make Vecchia Vigna have been at it for sixty
              years.
            </p>
          </div>
        </Reveal>
      </div>

      {/* One grid for the whole section. The picture had been centred on its
          own while the heading started at the container edge and the steps ran
          the full width, so three different measures sat in one section and the
          painting read as a rectangle dropped in the middle. It now shares the
          heading's left edge and the steps stand beside it. */}
      <div className="mx-auto mt-16 max-w-[86rem] px-6 sm:mt-20 sm:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <Image
              src="/images/barrels-of-wine-2.webp"
              alt="The estate cellar: two ranks of oak barrels under a vaulted ceiling, a winemaker drawing a glass from the cask."
              width={2912}
              height={1632}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full"
            />
          </Reveal>

          <ol className="lg:col-span-3 lg:col-start-10">
            {STEPS.map(({ step, duration }, index) => (
              <Reveal
                as="li"
                key={step}
                delay={index === 0 ? 0 : index === 1 ? 90 : 180}
                className="border-t border-ink/15 py-5 first:border-t-0 first:pt-0 sm:py-6 sm:first:pt-0"
              >
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                  {step}
                </p>
                <p className="mt-3 text-xl font-light leading-[1.15] text-ink sm:text-2xl">
                  {duration}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
