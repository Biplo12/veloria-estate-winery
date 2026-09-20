import Link from "next/link";

import { FOCUS_RING } from "@/constants";
import type { Wine } from "@/types";
import { cn } from "@/utils";

type WineColumnProps = {
  wine: Wine;
  showNote: boolean;
  showSummary: boolean;
};

export function WineColumn({ wine, showNote, showSummary }: WineColumnProps) {
  return (
    <li className="group relative flex flex-col border-t border-ink/15 pt-6">
      <h3 className="text-2xl font-light leading-[1.15] text-ink sm:text-[1.75rem]">
        <Link
          href={`/wines/${wine.slug}`}
          className={cn(
            "transition-colors duration-200 after:absolute after:inset-0 group-hover:text-vermilion",
            FOCUS_RING,
          )}
        >
          {wine.name}
        </Link>
      </h3>
      <p className="mt-3 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
        {wine.vintage} · {wine.grapes}
      </p>
      {showNote ? (
        <p className="mt-5 text-base leading-[1.6] text-ink sm:text-lg">
          {wine.note}
        </p>
      ) : null}
      {showSummary ? (
        <p
          className={cn(
            "text-base leading-[1.6] sm:text-lg",
            showNote ? "mt-4 text-ink-soft" : "mt-5 text-ink",
          )}
        >
          {wine.summary}
        </p>
      ) : null}
    </li>
  );
}
