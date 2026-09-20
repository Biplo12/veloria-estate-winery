import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, LEAD, PAGE_TITLE } from "@/constants";
import type { Person } from "@/types";
import { cn } from "@/utils";

type PersonSummaryProps = {
  person: Person;
};

export function PersonSummary({ person }: PersonSummaryProps) {
  return (
    <section className="pb-16 pt-16 sm:pb-24 sm:pt-20">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="flex justify-center lg:col-span-4 lg:justify-start">
            <Image
              src={person.portrait}
              alt={person.portraitAlt}
              width={person.portraitWidth}
              height={person.portraitHeight}
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
              preload
              className="h-auto w-full max-w-[14rem] sm:max-w-[18rem]"
            />
          </Reveal>

          <Reveal delay={90} className="lg:col-span-7 lg:col-start-6">
            <p className={EYEBROW}>
              {person.dates ? `${person.role} · ${person.dates}` : person.role}
            </p>
            <h1 className={cn("mt-5", PAGE_TITLE)}>{person.name}</h1>
            <p className={cn("mt-7 max-w-[46ch]", LEAD)}>{person.line}</p>

            <div className="mt-12 max-w-[62ch] space-y-6">
              {person.story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={BODY}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
