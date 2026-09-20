import { EYEBROW } from "@/constants";
import type { Wine } from "@/types";

type WineFactsProps = {
  wine: Wine;
};

export function WineFacts({ wine }: WineFactsProps) {
  const facts = [
    { term: "In the glass", detail: wine.note },
    { term: "Ageing", detail: wine.ageing },
  ];

  return (
    <dl className="mt-12">
      {facts.map(({ term, detail }) => (
        <div
          key={term}
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-ink/10 py-5 first:border-t first:border-ink/10"
        >
          <dt className={EYEBROW}>{term}</dt>
          <dd className="max-w-[42ch] text-base leading-[1.6] text-ink sm:text-lg">
            {detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}
