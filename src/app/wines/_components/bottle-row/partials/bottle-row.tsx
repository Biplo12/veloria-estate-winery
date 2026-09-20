import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { BODY, FOCUS_RING, INLINE_LINK } from "@/constants";
import { cn } from "@/utils";

export function BottleRow() {
  return (
    <section className="pb-16 sm:pb-24">
      <Reveal as="figure">
        <div className="relative aspect-3072/1134 w-full">
          <Image
            src="/images/bottles-of-wine.webp"
            alt="Four painted bottles standing in a row against red and olive brushstrokes, each carrying a label of its own."
            fill
            sizes="100vw"
            preload
            className="object-cover"
          />
        </div>
        <figcaption
          className={cn(
            "mx-auto mt-6 max-w-[62ch] px-6 sm:mt-8 sm:px-10",
            BODY,
          )}
        >
          Every bottle is numbered before it leaves the cellar. Nothing on this
          site sells wine. To ask about a case, or about tasting them here,{" "}
          <Link href="/contacts" className={cn(INLINE_LINK, FOCUS_RING)}>
            write to us
          </Link>
          .
        </figcaption>
      </Reveal>
    </section>
  );
}
