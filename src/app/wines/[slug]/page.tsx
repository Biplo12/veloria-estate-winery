import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Onward } from "@/components/onward";
import { WINES, findWine } from "@/data/wines";

import { BottleLabel } from "./_components/bottle-label";
import { WineOrigin } from "./_components/wine-origin";
import { WineSummary } from "./_components/wine-summary";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WINES.map((wine) => ({ slug: wine.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const wine = findWine(slug);
  if (!wine) notFound();

  return {
    title: `${wine.name} ${wine.vintage}`,
    description: `${wine.summary} ${wine.note}`,
  };
}

export default async function WinePage({ params }: Props) {
  const { slug } = await params;
  const wine = findWine(slug);
  if (!wine) notFound();

  const index = WINES.findIndex((entry) => entry.slug === wine.slug);
  const previous = WINES[(index - 1 + WINES.length) % WINES.length];
  const next = WINES[(index + 1) % WINES.length];

  return (
    <main className="bg-paper">
      <WineSummary wine={wine} />
      <WineOrigin wine={wine} />
      <BottleLabel wine={wine} />

      <Onward
        links={[
          {
            href: `/wines/${previous.slug}`,
            title: `${previous.name} ${previous.vintage}`,
            line: previous.summary,
          },
          {
            href: `/wines/${next.slug}`,
            title: `${next.name} ${next.vintage}`,
            line: next.summary,
          },
        ]}
      />
    </main>
  );
}
