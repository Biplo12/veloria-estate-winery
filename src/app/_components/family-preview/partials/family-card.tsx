import Image from "next/image";
import Link from "next/link";

import { FOCUS_RING } from "@/constants";
import type { Person } from "@/types";
import { cn } from "@/utils";

type FamilyCardProps = {
  person: Person;
};

export function FamilyCard({ person }: FamilyCardProps) {
  const {
    slug,
    name,
    role,
    dates,
    portrait,
    portraitWidth,
    portraitHeight,
    portraitAlt,
  } = person;

  return (
    <Link href={`/family/${slug}`} className={cn("group block", FOCUS_RING)}>
      <div className="flex h-36 items-end sm:h-44">
        <Image
          src={portrait}
          alt={portraitAlt}
          width={portraitWidth}
          height={portraitHeight}
          sizes="(min-width: 1024px) 11rem, 40vw"
          className="lift h-full w-auto object-contain object-bottom"
        />
      </div>
      <p className="mt-5 text-base text-ink transition-colors duration-200 group-hover:text-vermilion">
        {name}
      </p>
      <p className="mt-2 text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
        {dates ? `${role}, ${dates}` : role}
      </p>
    </Link>
  );
}
