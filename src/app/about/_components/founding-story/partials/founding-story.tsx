import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, EYEBROW, HEADING, SECTION } from "@/constants";
import { ESTATE } from "@/data/estate";
import { cn } from "@/utils";

import { MOMENTS, STORY } from "../../../constants";
import { MomentsList } from "./moments-list";

export function FoundingStory() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <Reveal className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className={EYEBROW}>{ESTATE.tenuta}</p>
            <h2 className={cn("mt-6", HEADING)}>
              It started in barrels under the house.
            </h2>
            <div className="mt-10 max-w-[58ch] space-y-6">
              {STORY.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={BODY}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <Image
            src="/images/collecting-grapes.webp"
            alt="Two pickers in the vines, one up a ladder in the canopy and one filling a bucket below."
            width={1024}
            height={1024}
            sizes="(min-width: 1024px) 28rem, 80vw"
            className="h-auto w-full lg:col-span-5 lg:col-start-8"
          />
        </Reveal>
      </div>

      <div className={CONTAINER}>
        <Reveal className="mt-16 sm:mt-20">
          <MomentsList moments={MOMENTS} />
        </Reveal>
      </div>

      <div className="relative mt-20 aspect-1680/720 w-full sm:mt-24">
        <Image
          src="/images/winery-panorama.webp"
          alt="A painted panorama: a hill village of pale houses with terracotta roofs and a church tower, cypresses down the slope, terraced vineyard rows in the foreground and a lake below the wooded hills."
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
