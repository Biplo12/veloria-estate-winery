import Image from "next/image";

const LEFT_LINKS = [
  { label: "about", href: "#about" },
  { label: "wines", href: "#wines" },
  { label: "vineyards", href: "#vineyards" },
];

const RIGHT_LINKS = [
  { label: "journal", href: "#journal" },
  { label: "visit", href: "#visit" },
  { label: "contacts", href: "#contacts" },
];

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-[0.72rem] uppercase tracking-[0.2em] text-ink-soft transition-colors duration-200 hover:text-vermilion focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion sm:text-[0.78rem]"
      >
        {label}
      </a>
    </li>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-5 sm:px-10 sm:pt-7">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[86rem] items-center justify-center gap-6 sm:justify-between sm:gap-10"
      >
        <div className="flex items-center gap-5 sm:gap-9">
          <Image
            src="/images/bottle-cut.webp"
            alt=""
            aria-hidden
            width={671}
            height={920}
            className="hidden h-8 w-auto sm:block"
          />
          <ul className="flex items-center gap-5 sm:gap-9">
            {LEFT_LINKS.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-5 sm:flex sm:gap-9">
          <ul className="flex items-center gap-5 sm:gap-9">
            {RIGHT_LINKS.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </ul>
          <Image
            src="/images/grapes-cut.webp"
            alt=""
            aria-hidden
            width={681}
            height={810}
            className="h-8 w-auto"
          />
        </div>
      </nav>
    </header>
  );
}
