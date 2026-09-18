import Image from "next/image";
import { Reveal } from "@/components/reveal";

/**
 * Everything that happens to a bottle of Bellandi Riserva, in the order it
 * happens, measured from the morning the grapes come off the vine.
 *
 * The duration is set larger at every step, so the idea is carried by the words
 * themselves rather than by a diagram: you read it getting longer. The type
 * encodes the order of the cumulative wait, which is true, and the real duration
 * is printed at every step, so nothing is being claimed by the drawing that the
 * text does not say.
 *
 * An earlier version ran a hairline rule across the page for each step. It read
 * as four empty form fields waiting to be filled in.
 */
const STEPS = [
  {
    step: "Picked by hand",
    duration: "one morning",
    size: "text-2xl sm:text-[1.5rem]",
  },
  {
    step: "Fermented in small batches",
    duration: "three weeks",
    size: "text-3xl sm:text-[2rem]",
  },
  {
    step: "Resting in French oak",
    duration: "thirty months",
    size: "text-4xl sm:text-[2.5rem]",
  },
  {
    step: "Waiting in the bottle",
    duration: "a further year",
    size: "text-5xl sm:text-[3rem]",
  },
];

export function TimeScale() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <h2 className="max-w-[18ch] text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]">
            Time is an ingredient.
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            Almost nothing on this estate is work, and almost all of it is
            waiting. The harvest — the part everyone pictures — is the shortest
            thing on the list.
          </p>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, duration, size }, index) => (
            <Reveal
              as="li"
              key={step}
              delay={index === 0 ? 0 : index === 1 ? 90 : 180}
              className="border-t border-ink/15 pb-10 pt-6 sm:pb-0 sm:pt-7"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {step}
              </p>
              <p
                className={`mt-6 font-light leading-[1.05] text-ink ${size}`}
              >
                {duration}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal
          as="p"
          className="mt-16 max-w-[46ch] text-lg leading-[1.6] text-ink sm:mt-20 sm:text-xl"
        >
          And the vines that make Vecchia Vigna have been at it for sixty years.
        </Reveal>
      </div>

      <div className="band-dissolve relative mt-20 aspect-2912/1632 w-full sm:mt-24">
        <Image
          src="/images/barrels-of-wine-2.webp"
          alt="The estate cellar: two ranks of oak barrels under a vaulted ceiling, a winemaker drawing a glass from the cask."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
