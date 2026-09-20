import type { Metadata } from "next";
import Link from "next/link";
import { CONTAINER, EYEBROW, FOCUS_RING } from "@/constants";
import { cn } from "@/utils";

export const metadata: Metadata = {
  title: "Page not found",
  description: "There is nothing at this address.",
};

const LINK = cn(
  "w-fit border-b border-ink/25 pb-2 pl-[0.3em] text-[0.72rem] uppercase tracking-[0.3em] text-ink hover:border-ink",
  FOCUS_RING,
);

export default function NotFound() {
  return (
    <main className="bg-paper pt-32 sm:pt-40">
      <div className={cn(CONTAINER, "pb-24 sm:pb-32")}>
        <p className={EYEBROW}>404</p>

        <h1 className="mt-5 max-w-[16ch] text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
          There is nothing at this address.
        </h1>

        <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-ink-soft sm:text-xl">
          Either the page has been put somewhere else or the address was typed a
          letter out. Both are easily mended, start again from one of these.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:gap-12">
          <Link href="/" className={LINK}>
            The estate
          </Link>
          <Link href="/wines" className={LINK}>
            The wines
          </Link>
        </div>
      </div>
    </main>
  );
}
