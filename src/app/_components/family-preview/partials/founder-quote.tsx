import Image from "next/image";

import { FOUNDER_QUOTE } from "@/data/estate";

export function FounderQuote() {
  return (
    <>
      <Image
        src="/images/grapes-cut.webp"
        alt=""
        aria-hidden
        width={681}
        height={810}
        className="h-auto w-20 sm:w-24"
      />
      <blockquote className="mt-10">
        <p className="max-w-[18ch] text-3xl font-light leading-[1.15] text-ink sm:text-4xl lg:text-[2.75rem]">
          {`\u201C${FOUNDER_QUOTE.text}\u201D`}
        </p>
        <cite className="mt-8 block text-[0.68rem] uppercase not-italic tracking-[0.3em] text-ink-soft sm:mt-10">
          {FOUNDER_QUOTE.attribution}
        </cite>
      </blockquote>
    </>
  );
}
