import type { Ground } from "@/types";

type VisitableListProps = {
  places: readonly Ground[];
};

export function VisitableList({ places }: VisitableListProps) {
  return (
    <ul>
      {places.map(({ thing, detail }) => (
        <li
          key={thing}
          className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-4 text-base leading-[1.6] sm:text-lg"
        >
          <span className="text-ink">{thing}</span>
          {detail ? (
            <span className="whitespace-nowrap text-ink-soft">{detail}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
