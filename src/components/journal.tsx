import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { ENTRIES } from "@/data/journal";

export function Journal() {
  return (
    <section id="journal" className="bg-paper py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
            Journal
          </p>
          <h2 className="mt-6 max-w-[20ch] text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Three notes from the estate.
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
            We write down what the year does, mostly so we remember it later. A
            season is long, and the weather is easy to forget once the wine is
            in the barrel.
          </p>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {ENTRIES.map((entry, index) => (
            <Reveal as="li" key={entry.slug} delay={index * 90}>
              <article className="group relative">
                {/* Square, like the sheets these were painted on. A taller
                    card would crop a tenth off each side, and two of the three
                    are motifs whose paint runs almost to the edge of the
                    paper — the foliage and the far bush would be cut. */}
                <div className="relative aspect-square overflow-hidden border border-ink/10">
                  <Image
                    src={entry.image}
                    alt={entry.alt}
                    fill
                    sizes="(min-width: 1024px) 28rem, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <p className="mt-6 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                  <time dateTime={entry.iso}>{entry.date}</time>
                </p>

                <h3 className="mt-4 text-2xl font-light leading-[1.15] text-ink sm:text-[1.75rem]">
                  <Link
                    href={`/journal/${entry.slug}`}
                    className="underline-offset-[0.35em] after:absolute after:inset-0 group-hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
                  >
                    {entry.title}
                  </Link>
                </h3>

                <p className="mt-3 max-w-[38ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  {entry.standfirst}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
