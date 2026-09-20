import Image from "next/image";

import { cn } from "@/utils";

type NavMotifProps = {
  src: string;
  width: number;
  height: number;
  className?: string;
};

export function NavMotif({ src, width, height, className }: NavMotifProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      className={cn("hidden h-8 w-auto shrink-0 sm:block", className)}
    />
  );
}
