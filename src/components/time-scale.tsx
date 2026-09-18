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

      {/* The cellar is the subject, not a footnote: thirty months of the list
          below happens in this room. Capped in height so it states the case
          without taking a whole screen to do it. */}
      <div className="band-dissolve relative mt-16 aspect-2912/1632 max-h-[46svh] w-full sm:mt-20">
        <Image
          src="/images/barrels-of-wine-2.webp"
          alt="The estate cellar: two ranks of oak barrels under a vaulted ceiling, a winemaker drawing a glass from the cask."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <ol className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, duration }, index) => (
            <Reveal
              as="li"
              key={step}
              delay={index === 0 ? 0 : index === 1 ? 90 : 180}
              className="border-t border-ink/15 pb-8 pt-6 sm:pb-0 sm:pt-7"
            >
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {step}
              </p>
              <p className="mt-5 text-2xl font-light leading-[1.1] text-ink sm:text-[1.75rem]">
                {duration}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
