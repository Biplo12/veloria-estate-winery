import { ESTATE } from "@/data/estate";
import type { OnwardLink } from "@/types";

export const PARCEL_MARKS = Array.from(
  { length: ESTATE.hectares },
  (_, index) => ({
    key: index,
    original: index < ESTATE.hectaresAtFounding,
  }),
);

export const ONWARD: readonly OnwardLink[] = [
  {
    href: "/wines",
    title: "The wines",
    line: "What this slope tastes like once it has been left alone for long enough.",
  },
  {
    href: "/visit",
    title: "Visiting",
    line: ESTATE.openTo,
  },
];
