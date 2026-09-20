import Link from "next/link";

import { BODY, FOCUS_RING } from "@/constants";
import type { OnwardLink } from "@/types";
import { cn } from "@/utils";

export function OnwardCard({ href, title, line }: OnwardLink) {
  return (
    <li className="border-t border-ink/15">
      <Link href={href} className={cn("group block py-8", FOCUS_RING)}>
        <span className="block text-2xl font-light leading-[1.15] text-ink transition-colors duration-200 group-hover:text-vermilion sm:text-3xl">
          {title}
        </span>
        <span className={cn("mt-4 block max-w-[34ch]", BODY)}>{line}</span>
      </Link>
    </li>
  );
}
