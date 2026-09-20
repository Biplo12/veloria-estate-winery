import type { Ground } from "@/types";

type GroundsListProps = {
  grounds: readonly Ground[];
};

export function GroundsList({ grounds }: GroundsListProps) {
  return (
    <ul className="mt-8">
      {grounds.map(({ thing, detail }) => (
        <li
          key={thing}
          className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4"
        >
          <span className="text-base leading-[1.6] text-ink sm:text-lg">
            {thing}
          </span>
          {detail ? (
            <span className="shrink-0 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
              {detail}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
