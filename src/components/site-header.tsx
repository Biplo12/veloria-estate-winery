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
 * Sticky, with the mark in the middle and a painted motif at either end.
 *
 * The bottle and the grapes are decoration and nothing else: they carry no
 * link and no alt text, so the row still reads as five links and a home mark.
 * Both are `-cut` files, because the header's ground is the translucent paper
 * and not the flat cream those sheets were painted on.
 *
 * It carries a translucent paper ground rather than none: once it follows the
 * reader down the page it passes over paintings and over the dark visiting
 * section, and unchromed type would be unreadable on both. Over the hero that
 * ground is nearly invisible anyway, because the sky the painter left there is
 * within a couple of units of the page's own cream.
 *
 * Being sticky it sits in the flow and takes real height, so the hero measures
 * itself against `--header-h` rather than against the whole viewport.
 *
 * On a phone the mark takes its own line above the links and the two motifs
 * drop out entirely: five links and a mark in one row overflowed 375px by
 * 67px, and nothing here is allowed to push the page sideways.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] bg-paper/85 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full max-w-[86rem] flex-wrap items-center justify-center gap-x-5 gap-y-1 px-5 sm:flex-nowrap sm:justify-between sm:px-10"
      >
        <div className="flex items-center gap-5 sm:flex-1 sm:gap-9">
          <Image
            src="/images/bottle-cut.webp"
            alt=""
            aria-hidden
            width={671}
            height={920}
            className="hidden h-8 w-auto shrink-0 sm:block"
          />
          <ul className="flex items-center gap-4 sm:gap-9">
            {NAV_LEFT.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <Link
          href="/"
          aria-label="Veloria Estate Winery, home"
          className="order-first w-full shrink-0 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion sm:order-none sm:w-auto"
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
          <Image
            src="/images/grapes-cut.webp"
            alt=""
            aria-hidden
            width={681}
            height={810}
            className="hidden h-8 w-auto shrink-0 sm:block"
          />
        </div>
      </nav>
    </header>
  );
}
