import { Reveal } from "@/components/reveal";

/**
 * The opening of every page that is not the landing page. The header is sticky
 * and sits in the flow, so this no longer has to reserve room for it.
 *
 * Two columns. Stacked, the title ran at 16ch and the lead at 52ch down the
 * left edge, which left more than half the page empty beside them and made
 * the tallest block on the page the one with the least in it. The lead now
 * sits to the right of the title and level with its last line.
 */
export function PageIntro({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="bg-paper pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div className="mx-auto grid max-w-[86rem] grid-cols-1 gap-x-8 gap-y-7 px-6 sm:px-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          {eyebrow ? (
            <Reveal
              as="p"
              className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft"
            >
              {eyebrow}
            </Reveal>
          ) : null}
          <Reveal
            as="h1"
            delay={eyebrow ? 90 : 0}
            className="mt-5 max-w-[16ch] text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {title}
          </Reveal>
        </div>

        {lead ? (
          <Reveal
            as="p"
            delay={eyebrow ? 180 : 90}
            className="text-lg leading-[1.6] text-ink-soft sm:text-xl lg:col-span-5 lg:col-start-8"
          >
            {lead}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
