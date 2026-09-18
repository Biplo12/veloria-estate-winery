import Link from "next/link";

import { Reveal } from "@/components/reveal";

export type OnwardLink = {
  href: string;
  title: string;
  line: string;
};

/**
 * How every page that is not the landing page ends: two routes, side by side,
 * each under its own rule.
 *
 * It exists because the pages had stopped agreeing. /vineyards closed with a
 * pair of cards, /about with an eyebrow, a sentence and two underlined links
 * in a row, and /visit and /wines simply stopped. A reader who walks the site
 * end to end meets this block four times, and it has to be the same block.
 *
 * A page never lists itself. Nothing here transacts, so both are ordinary
 * internal routes.
 */
export function Onward({ links }: { links: readonly OnwardLink[] }) {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
            {links.map(({ href, title, line }) => (
              <li key={href} className="border-t border-ink/15">
                <Link
                  href={href}
                  className="group block py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion"
                >
                  <span className="block text-2xl font-light leading-[1.15] text-ink transition-colors duration-200 group-hover:text-vermilion sm:text-3xl">
                    {title}
                  </span>
                  <span className="mt-4 block max-w-[34ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                    {line}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
