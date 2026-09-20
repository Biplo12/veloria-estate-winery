import { Reveal } from "@/components/reveal";
import { CONTAINER, EYEBROW, LEAD, PAGE_TITLE } from "@/constants";
import { cn } from "@/utils";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <header className="bg-paper pb-12 pt-16 sm:pb-16 sm:pt-20">
      <div
        className={cn(
          CONTAINER,
          "grid grid-cols-1 gap-x-8 gap-y-7 lg:grid-cols-12 lg:items-end",
        )}
      >
        <div className="lg:col-span-6">
          {eyebrow ? (
            <Reveal as="p" className={EYEBROW}>
              {eyebrow}
            </Reveal>
          ) : null}
          <Reveal
            as="h1"
            delay={eyebrow ? 90 : 0}
            className={cn("mt-5 max-w-[16ch]", PAGE_TITLE)}
          >
            {title}
          </Reveal>
        </div>

        {lead ? (
          <Reveal
            as="p"
            delay={eyebrow ? 180 : 90}
            className={cn(LEAD, "lg:col-span-5 lg:col-start-8")}
          >
            {lead}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
