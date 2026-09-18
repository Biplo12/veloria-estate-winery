import Image from "next/image";

/**
 * Everything that happens to a bottle of Bellandi Riserva, in the order it
 * happens, measured from the morning the grapes come off the vine. `reach` is
 * how far across the page that step's rule runs — the rows are a sequence, not
 * a chart, so the rules only have to grow, and the real duration is printed on
 * every one.
 */
const STEPS = [
  { step: "Picked by hand", duration: "one morning", reach: "5%" },
  { step: "Fermented in small batches", duration: "three weeks", reach: "16%" },
  { step: "Resting in French oak", duration: "thirty months", reach: "45%" },
  { step: "Waiting in the bottle", duration: "a further year", reach: "62%" },
];

export function TimeScale() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <h2 className="max-w-[18ch] text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:text-[3.5rem]">
          Time is an ingredient.
        </h2>
        <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
          Almost nothing on this estate is work, and almost all of it is waiting.
          The harvest — the part everyone pictures — is the shortest thing on the
          list.
        </p>

        <ol className="mt-16 space-y-6 sm:mt-20 sm:space-y-7">
          {STEPS.map(({ step, duration, reach }) => (
            <li
              key={step}
              className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4 sm:justify-start sm:border-0 sm:pb-0"
            >
              <span className="text-base text-ink-soft sm:w-64 sm:shrink-0 sm:text-lg">
                {step}
              </span>
              <span
                aria-hidden
                className="hidden h-px shrink-0 grow-0 bg-ink/25 sm:block"
                style={{ flexBasis: reach }}
              />
              <span className="whitespace-nowrap text-base text-ink sm:text-lg">
                {duration}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-[46ch] text-lg leading-[1.6] text-ink sm:mt-16 sm:text-xl">
          And the vines that make Vecchia Vigna have been at it for sixty years.
        </p>
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
