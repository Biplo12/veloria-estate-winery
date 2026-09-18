import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { Reveal } from "@/components/reveal";
import { BACK_LABEL, ESTATE, NAV_ALL } from "@/data/estate";

/** Eyebrow caps, sat above each column of the footer's standing details. */
function ColumnLabel({ children }: { children: string }) {
  return (
    <h3 className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-paper/60">
      {children}
    </h3>
  );
}

/** Shared with the footer nav: cream that warms to vine, and a visible ring. */
const linkClass =
  "transition-colors duration-200 hover:text-vine focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion";

/**
 * The close of the page, and the only place that inverts: the cream runs out
 * and the darkest foliage green takes over, so the site ends the way an evening
 * on the estate does. Every colour is still one of the sampled tokens — on this
 * ground the paper cream becomes the type, carried at reduced opacity where it
 * would otherwise shout, and the painted mark reads as a lit shape.
 *
 * Every standing fact here — the address, the figures, the pages, the contact
 * details and the back label — comes from @/data/estate. Only the writing
 * around them lives in this file.
 */
export function SiteFooter() {
  return (
    <footer id="contacts" className="bg-ink pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pb-40">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <Image
            src="/images/logo-cut.webp"
            alt=""
            aria-hidden
            width={653}
            height={722}
            className="h-16 w-auto sm:h-20"
          />
          <h2 className="mt-10 max-w-[16ch] text-3xl font-light leading-[1.1] text-paper sm:text-4xl lg:text-[2.5rem]">
            Come and see the place.
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-paper/70 sm:text-xl">
            {ESTATE.openTo} Write ahead, and someone will be free to walk you
            through the cellar.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 sm:mt-24 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          <div>
            <ColumnLabel>The estate</ColumnLabel>
            <p className="mt-6 pl-[0.3em] text-[0.78rem] uppercase tracking-[0.3em] text-paper">
              {ESTATE.tenuta}
            </p>
            <p className="mt-4 text-base leading-[1.6] text-paper/70 sm:text-lg">
              {ESTATE.place}.
              <br />
              {ESTATE.hectares} hectares, {ESTATE.altitudeMetres} m above sea
              level.
            </p>
          </div>

          <nav aria-label="Footer">
            <ColumnLabel>Pages</ColumnLabel>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {NAV_ALL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[0.78rem] uppercase tracking-[0.2em] text-paper/70 ${linkClass}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnLabel>Contact</ColumnLabel>
            <p className="mt-6 text-base leading-[1.6] text-paper/70 sm:text-lg">
              <a href={`mailto:${ESTATE.email}`} className={linkClass}>
                {ESTATE.email}
              </a>
              <br />
              <a
                href={`tel:${ESTATE.phone.replace(/\s+/g, "")}`}
                className={linkClass}
              >
                {ESTATE.phone}
              </a>
            </p>
            <p className="mt-4 text-base leading-[1.6] text-paper/70 sm:text-lg">
              Tastings and rooms are arranged by hand, one party at a time.
            </p>
          </div>
        </div>

        <Reveal className="mt-20 border-t border-paper/15 pt-14 sm:mt-24 sm:pt-16">
          <p className="max-w-[34ch] text-base leading-[2.2] text-paper/70 sm:text-lg">
            {BACK_LABEL.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          <p className="mt-16 max-w-[52ch] text-sm leading-[1.6] text-paper/60">
            © {ESTATE.name}. A fictional estate, built as a portfolio project.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
