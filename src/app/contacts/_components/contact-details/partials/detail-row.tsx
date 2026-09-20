import type { ReactNode } from "react";

import { EYEBROW } from "@/constants";
import { cn } from "@/utils";

type DetailRowProps = {
  term: string;
  children: ReactNode;
  last?: boolean;
};

export function DetailRow({ term, children, last = false }: DetailRowProps) {
  return (
    <div
      className={cn(
        "grid gap-2 py-6 sm:grid-cols-12 sm:gap-8",
        !last && "border-b border-ink/10",
      )}
    >
      <dt className={cn(EYEBROW, "sm:col-span-4")}>{term}</dt>
      <dd className="text-base leading-[1.6] text-ink sm:col-span-8 sm:text-lg">
        {children}
      </dd>
    </div>
  );
}
