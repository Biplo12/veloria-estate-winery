import Link from "next/link";

import { FOCUS_RING } from "@/constants";
import type { NavLink as NavLinkType } from "@/types";
import { cn } from "@/utils";

export function NavLink({ label, href }: NavLinkType) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-[0.72rem] uppercase tracking-[0.2em] text-ink-soft transition-colors duration-200 hover:text-vermilion sm:text-[0.78rem]",
          "focus-visible:rounded-xs",
          FOCUS_RING,
        )}
      >
        {label}
      </Link>
    </li>
  );
}
