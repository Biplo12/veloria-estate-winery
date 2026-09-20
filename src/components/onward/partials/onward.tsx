import { Reveal } from "@/components/reveal";
import { CONTAINER, SECTION_TIGHT } from "@/constants";
import type { OnwardLink } from "@/types";
import { cn } from "@/utils";

import { OnwardCard } from "./onward-card";

type OnwardProps = {
  links: readonly OnwardLink[];
};

export function Onward({ links }: OnwardProps) {
  return (
    <section className={SECTION_TIGHT}>
      <div className={CONTAINER}>
        <Reveal>
          <ul className={cn("grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10")}>
            {links.map((link) => (
              <OnwardCard key={link.href} {...link} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
