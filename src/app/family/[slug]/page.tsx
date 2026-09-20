import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Onward } from "@/components/onward";
import { ESTATE, FAMILY, findPerson } from "@/data/estate";

import { FounderQuote } from "./_components/founder-quote";
import { PersonSummary } from "./_components/person-summary";

const FOUNDER_SLUG = "matteo-bellandi";

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

  const index = FAMILY.findIndex((entry) => entry.slug === person.slug);
  const previous = FAMILY[(index - 1 + FAMILY.length) % FAMILY.length];
  const next = FAMILY[(index + 1) % FAMILY.length];

  return (
    <main className="bg-paper">
      <PersonSummary person={person} />
      {person.slug === FOUNDER_SLUG ? <FounderQuote /> : null}

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
