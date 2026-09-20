import Image from "next/image";

import { HeroLockup } from "./hero-lockup";

export function Hero() {
  return (
    <section className="relative flex h-[calc(100svh-var(--header-h))] flex-col overflow-hidden bg-paper">
      <div className="relative flex w-full flex-1 flex-col">
        <div className="relative order-2 h-[56svh] w-full sm:h-full">
          <Image
            src="/images/winery-hero.webp"
            alt="The Veloria estate house on the slope, with guests walking the flowering rows below the vineyard."
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_20%]"
          />
        </div>

        <HeroLockup />
      </div>
    </section>
  );
}
