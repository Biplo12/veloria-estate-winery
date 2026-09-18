import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { ENTRIES, findEntry, type Entry } from "@/data/journal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = findEntry(slug);

  // An unknown slug is handled by the page, which calls notFound(). There is
  // nothing to title here, so the layout's default stands.
  if (!entry) return {};

  return { title: entry.title, description: entry.standfirst };
}

/** One note. The standfirst is the page's lead, so it is not printed twice. */
export default async function JournalEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = findEntry(slug);
  if (!entry) notFound();

  // ENTRIES is newest first, so the one after this is the one before it.
  // Reading past the end gives undefined, and the type says so.
  const earlier: Entry | undefined =
    ENTRIES[ENTRIES.findIndex((e) => e.slug === entry.slug) + 1];

  return (
    <main className="bg-paper">
      <PageIntro eyebrow="Journal" title={entry.title} lead={entry.standfirst} />

      <section className="py-16 sm:py-24">
        {/* Painted on its own sheet of cream, and that cream is not the page's.
            So it bleeds the full width and dissolves at the top and bottom
            rather than sitting on the page as a lighter box. The square sheet
            is given in full on a narrow screen and banded as the page widens. */}
        <div className="band-dissolve relative aspect-square w-full sm:aspect-3/2 lg:aspect-16/9">
          <Image
            src={entry.image}
            alt={entry.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="mt-14 max-w-[62ch] sm:mt-20">
            <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
              <time dateTime={entry.iso}>{entry.date}</time>
            </p>

            <div className="mt-8 space-y-6 text-base leading-[1.6] text-ink sm:text-lg">
              {entry.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal
            as="nav"
            aria-label="More from the journal"
            delay={90}
            className="mt-16 max-w-[62ch] border-t border-ink/10 pt-10 sm:mt-20"
          >
            <Link
              href="/journal"
              className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft transition-colors duration-200 hover:text-vermilion focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
            >
              All notes
            </Link>

            {earlier ? (
              <div className="mt-10">
                <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                  Earlier
                </p>
                <h2 className="mt-4 text-2xl font-light leading-[1.15] text-ink sm:text-[1.75rem]">
                  <Link
                    href={`/journal/${earlier.slug}`}
                    className="underline-offset-[0.35em] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
                  >
                    {earlier.title}
                  </Link>
                </h2>
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
