import Image from "next/image";
import Link from "next/link";

import { EYEBROW, FOCUS_RING } from "@/constants";
import type { Person } from "@/types";
import { cn } from "@/utils";

type FamilyPortraitProps = {
  person: Person;
};

export function FamilyPortrait({ person }: FamilyPortraitProps) {
  const {
    slug,
    name,
    role,
    dates,
    line,
    portrait,
    portraitWidth,
    portraitHeight,
    portraitAlt,
  } = person;

  return (
    <li>
      <Link href={`/family/${slug}`} className={cn("group block", FOCUS_RING)}>
        <div className="flex h-56 items-end sm:h-64 lg:h-72">
          <Image
            src={portrait}
            alt={portraitAlt}
            width={portraitWidth}
            height={portraitHeight}
            sizes="(min-width: 1024px) 18rem, (min-width: 640px) 40vw, 70vw"
            className="lift h-full w-auto object-contain object-bottom"
          />
        </div>
        <p className="mt-7 text-base text-ink transition-colors duration-200 group-hover:text-vermilion sm:text-lg">
          {name}
        </p>
        <p className={cn("mt-2", EYEBROW)}>
          {dates ? `${role} · ${dates}` : role}
        </p>
        <p className="mt-4 text-base leading-[1.6] text-ink-soft">{line}</p>
      </Link>
    </li>
  );
}
