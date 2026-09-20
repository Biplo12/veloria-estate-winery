import { EYEBROW } from "@/constants";
import { cn } from "@/utils";

type Moment = {
  year: string;
  what: string;
};

type MomentsListProps = {
  moments: readonly Moment[];
};

export function MomentsList({ moments }: MomentsListProps) {
  return (
    <ul>
      {moments.map(({ year, what }) => (
        <li
          key={year}
          className="flex flex-col gap-y-2 border-t border-ink/10 py-5 sm:flex-row sm:items-baseline sm:gap-x-10 sm:py-6"
        >
          <span className={cn(EYEBROW, "sm:w-32 sm:shrink-0")}>{year}</span>
          <span className="max-w-[46ch] text-base leading-[1.6] text-ink sm:text-lg">
            {what}
          </span>
        </li>
      ))}
    </ul>
  );
}
