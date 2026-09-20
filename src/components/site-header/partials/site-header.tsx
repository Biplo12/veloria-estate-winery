import Image from "next/image";
import Link from "next/link";

import { FOCUS_RING } from "@/constants";
import { NAV_LEFT, NAV_RIGHT } from "@/data/estate";
import { cn } from "@/utils";

import { NavLink } from "./nav-link";
import { NavMotif } from "./nav-motif";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] bg-paper/85 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full max-w-[86rem] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 sm:flex-nowrap sm:justify-between sm:px-10"
      >
        <div className="flex items-center gap-5 sm:flex-1 sm:gap-9">
          <NavMotif src="/images/bottle-cut.webp" width={671} height={920} />
          <ul className="flex items-center gap-4 sm:gap-9">
            {NAV_LEFT.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <Link
          href="/"
          aria-label="Veloria Estate Winery, home"
          className={cn(
            "order-first w-full shrink-0 text-center sm:order-none sm:w-auto",
            FOCUS_RING,
          )}
        >
          <Image
            src="/images/logo-cut.webp"
            alt=""
            aria-hidden
            width={653}
            height={722}
            className="mx-auto h-8 w-auto sm:h-11"
          />
        </Link>

        <div className="flex items-center gap-5 sm:flex-1 sm:justify-end sm:gap-9">
          <ul className="flex items-center gap-4 sm:gap-9">
            {NAV_RIGHT.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>
          <NavMotif src="/images/grapes-cut.webp" width={681} height={810} />
        </div>
      </nav>
    </header>
  );
}
