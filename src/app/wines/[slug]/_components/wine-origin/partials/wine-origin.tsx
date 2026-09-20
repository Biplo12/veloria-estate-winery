import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, HEADING, SECTION } from "@/constants";
import type { Wine } from "@/types";
import { cn } from "@/utils";

type WineOriginProps = {
  wine: Wine;
};

export function WineOrigin({ wine }: WineOriginProps) {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-12">
          <h2 className={cn("lg:col-span-4", HEADING)}>Where it comes from</h2>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            {wine.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className={BODY}>
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
