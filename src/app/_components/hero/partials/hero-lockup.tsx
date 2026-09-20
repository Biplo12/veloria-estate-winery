import Image from "next/image";

export function HeroLockup() {
  return (
    <div className="order-1 flex flex-1 flex-col justify-center px-6 text-center sm:absolute sm:inset-x-0 sm:top-[4%] sm:z-20 sm:block sm:flex-none sm:p-0">
      <Image
        src="/images/logo-cut.webp"
        alt=""
        aria-hidden
        width={653}
        height={722}
        preload
        className="rise mx-auto h-24 w-auto sm:h-[clamp(3.5rem,9svh,6rem)]"
      />

      <h1 className="mt-4 flex flex-col items-center gap-1.5 sm:mt-2.5 lg:gap-2">
        <span
          className="rise pl-[0.3em] text-[2rem] font-medium uppercase leading-none tracking-[0.3em] text-ink sm:text-[clamp(1.5rem,4.6svh,2.75rem)]"
          style={{ animationDelay: "110ms" }}
        >
          Veloria
        </span>
        <span
          className="rise pl-[0.42em] text-[0.68rem] uppercase leading-none tracking-[0.42em] text-ink-soft sm:text-[clamp(0.6rem,1.2svh,0.8rem)]"
          style={{ animationDelay: "220ms" }}
        >
          Estate Winery
        </span>
      </h1>
    </div>
  );
}
