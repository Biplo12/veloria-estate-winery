import Image from "next/image";
import Link from "next/link";
import { NAV_LEFT, NAV_RIGHT, type NavLink as Nav } from "@/data/estate";

function NavLink({ label, href }: Nav) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-soft transition-colors duration-200 hover:text-vermilion focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion sm:text-[0.78rem]"
      >
        {label}
      </Link>
    </li>
  );
}

/**
 * Unchromed navigation, sitting straight on the page with no bar behind it.
 * It is absolutely positioned, so anything below it has to clear it — the hero
 * does that with its own composition, every other page with <PageIntro>.
 */
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 sm:px-10 sm:pt-7">
      {/* The two groups sit at opposite ends on a wide screen, as the reference
          has them. On a phone they simply wrap and centre — every route has to
          stay reachable, so nothing here is allowed to hide a link. */}
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[86rem] flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:flex-nowrap sm:justify-between sm:gap-10"
      >
        <div className="flex items-center gap-5 sm:gap-9">
          <Link
            href="/"
            className="hidden shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion sm:block"
          >
            <Image
              src="/images/bottle-cut.webp"
              alt="Veloria Estate Winery — home"
              width={671}
              height={920}
              className="h-8 w-auto"
            />
          </Link>
          <ul className="flex items-center gap-5 sm:gap-9">
            {NAV_LEFT.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-5 sm:gap-9">
          <ul className="flex items-center gap-5 sm:gap-9">
            {NAV_RIGHT.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>
          <Image
            src="/images/grapes-cut.webp"
            alt=""
            aria-hidden
            width={681}
            height={810}
            className="hidden h-8 w-auto sm:block"
          />
        </div>
      </nav>
    </header>
  );
}
