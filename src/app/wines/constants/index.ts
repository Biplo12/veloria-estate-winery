import { ESTATE } from "@/data/estate";
import type { OnwardLink } from "@/types";

export const ONWARD: readonly OnwardLink[] = [
  {
    href: "/vineyards",
    title: "The vineyards",
    line: "The land all four of them are grown on.",
  },
  {
    href: "/visit",
    title: "Visiting",
    line: ESTATE.openTo,
  },
];
