import Link from "next/link";

import { ESTATE, NAV_ALL } from "@/data/estate";
import { cn } from "@/utils";

import { ColumnLabel } from "./column-label";
import { FOOTER_LINK } from "./footer-link";

const COLUMN_BODY = "text-base leading-[1.6] text-paper/70 sm:text-lg";

export function FooterColumns() {
  return (
    <div className="mt-20 grid gap-12 sm:mt-24 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
      <div>
        <ColumnLabel>The estate</ColumnLabel>
        <p className="mt-6 pl-[0.3em] text-[0.78rem] uppercase tracking-[0.3em] text-paper">
          {ESTATE.tenuta}
        </p>
        <p className={cn("mt-4", COLUMN_BODY)}>
          {ESTATE.place}.
          <br />
          {ESTATE.hectares} hectares, {ESTATE.altitudeMetres} m above sea level.
        </p>
      </div>

      <nav aria-label="Footer">
        <ColumnLabel>Pages</ColumnLabel>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
          {NAV_ALL.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-[0.78rem] uppercase tracking-[0.2em] text-paper/70",
                  FOOTER_LINK,
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <ColumnLabel>Contact</ColumnLabel>
        <p className={cn("mt-6", COLUMN_BODY)}>
          <a href={`mailto:${ESTATE.email}`} className={FOOTER_LINK}>
            {ESTATE.email}
          </a>
          <br />
          <a
            href={`tel:${ESTATE.phone.replace(/\s+/g, "")}`}
            className={FOOTER_LINK}
          >
            {ESTATE.phone}
          </a>
        </p>
        <p className={cn("mt-4", COLUMN_BODY)}>
          Tastings and rooms are arranged by hand, one party at a time.
        </p>
      </div>
    </div>
  );
}
