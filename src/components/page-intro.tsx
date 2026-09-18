import { Reveal } from "@/components/reveal";

/**
 * The opening of every page that is not the landing page. The site header sits
 * absolutely over the top of the document, so the padding here is what keeps a
 * page title clear of it.
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
    <header className="bg-paper pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
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
          className="mt-5 max-w-[16ch] text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
        >
          {title}
        </Reveal>
        {lead ? (
          <Reveal
            as="p"
            delay={eyebrow ? 180 : 90}
            className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl"
          >
            {lead}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
