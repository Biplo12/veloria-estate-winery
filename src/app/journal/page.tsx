import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ENTRIES } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes kept at Tenuta Veloria: what came out of oak, how the old rows were picked, and the week the long table went back under the window.",
};

/**
 * The index. ENTRIES is already newest first and the dates are fixed strings —
 * nothing here is sorted against a live clock, so a build on any day puts the
 * same note at the top.
 */
export default function JournalPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="Journal"
        title="What the year did, written down."
        lead="The estate keeps these notes mostly for itself. A season is long and the weather is easy to forget once the wine is in the barrel, so somebody writes it down while it is still true."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <ol className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {ENTRIES.map((entry, index) => (
              /* Three steps of stagger and no more, however long the list gets. */
              <Reveal as="li" key={entry.slug} delay={Math.min(index, 2) * 90}>
                <article className="group relative">
                  {/* Square, like the sheets these were painted on: the source
                      files are 1024 × 1024 and a taller card would crop the
                      paint at the sides. The border is what keeps the sheet's
                      own cream from reading as a lighter box on the page. */}
                  <div className="relative aspect-square overflow-hidden border border-ink/10">
                    <Image
                      src={entry.image}
                      alt={entry.alt}
                      fill
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-6 pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                    <time dateTime={entry.iso}>{entry.date}</time>
                  </p>

                  <h2 className="mt-4 text-2xl font-light leading-[1.15] text-ink sm:text-[1.75rem]">
                    {/* The title carries the whole card: one link, one name,
                        nothing else inside the card is clickable. */}
                    <Link
                      href={`/journal/${entry.slug}`}
                      className="underline-offset-[0.35em] after:absolute after:inset-0 group-hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
                    >
                      {entry.title}
                    </Link>
                  </h2>

                  <p className="mt-3 max-w-[38ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                    {entry.standfirst}
                  </p>
                </article>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-20 border-t border-ink/10 pt-10 sm:mt-24">
            <p className="max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
              Nothing here is written to a schedule. It is written when
              something happens that the estate would rather not forget. If you
              would like to see any of it from the inside,{" "}
              <Link
                href="/contacts"
                className="text-ink underline decoration-ink/30 underline-offset-[0.35em] transition-colors duration-200 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
              >
                write to us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
