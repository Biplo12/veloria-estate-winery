import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Onward } from "@/components/onward";
import { Reveal } from "@/components/reveal";
import { ESTATE, FAMILY, FOUNDER_QUOTE, findPerson } from "@/data/estate";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return FAMILY.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = findPerson(slug);
  if (!person) notFound();

  return {
    title: person.name,
    description: `${person.name}, ${person.role.toLowerCase()} at ${ESTATE.tenuta}. ${person.line}`,
  };
}

export default async function PersonPage({ params }: Props) {
  const { slug } = await params;
  const person = findPerson(slug);
  if (!person) notFound();

  // The four read as a ring, the way the wines do, so neither end of the
  // family is a dead end and there is always somebody either side.
  const index = FAMILY.findIndex((entry) => entry.slug === person.slug);
  const previous = FAMILY[(index - 1 + FAMILY.length) % FAMILY.length];
  const next = FAMILY[(index + 1) % FAMILY.length];

  // Only the founder has a line of his own on record. Nobody else gets one
  // invented for them.
  const quote = person.slug === "matteo-bellandi" ? FOUNDER_QUOTE : null;

  return (
    <main className="bg-paper">
      {/* The same shape as a wine: the painted thing on the left, everything
          that identifies it in one column on the right. The portraits are
          alpha-keyed cut-outs from a single painted row, so this one stands
          on the cream at the scale it was drawn. */}
      <section className="pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-8">
            <Reveal className="flex justify-center lg:col-span-4 lg:justify-start">
              <Image
                src={person.portrait}
                alt={person.portraitAlt}
                width={person.portraitWidth}
                height={person.portraitHeight}
                sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
                preload
                className="h-auto w-full max-w-[14rem] sm:max-w-[18rem]"
              />
            </Reveal>

            <Reveal delay={90} className="lg:col-span-7 lg:col-start-6">
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                {person.dates ? `${person.role} · ${person.dates}` : person.role}
              </p>
              <h1 className="mt-5 text-4xl font-light leading-[1.05] text-ink sm:text-5xl lg:text-[3.25rem]">
                {person.name}
              </h1>
              <p className="mt-7 max-w-[46ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
                {person.line}
              </p>

              <div className="mt-12 max-w-[62ch] space-y-6">
                {person.story.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-[1.6] text-ink-soft sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {quote ? (
        <section className="pb-16 sm:pb-24">
          <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
            <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft lg:col-span-4">
                In his words
              </p>
              <blockquote className="lg:col-span-7 lg:col-start-6">
                <p className="max-w-[24ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                  {`“${quote.text}”`}
                </p>
                <cite className="mt-8 block pl-[0.3em] text-[0.68rem] uppercase not-italic tracking-[0.3em] text-ink-soft">
                  {quote.attribution}
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </section>
      ) : null}

      <Onward
        links={[
          {
            href: `/family/${previous.slug}`,
            title: previous.name,
            line: previous.line,
          },
          { href: `/family/${next.slug}`, title: next.name, line: next.line },
        ]}
      />
    </main>
  );
}
