import { ESTATE } from "@/data/estate";
import type { OnwardLink } from "@/types";

export const ONWARD: readonly OnwardLink[] = [
  {
    href: "/wines",
    title: "The wines",
    line: "What is poured at that table, and what went into it.",
  },
  {
    href: "/vineyards",
    title: "The vineyards",
    line: "The slope the whole of it comes off.",
  },
];

export const TASTING_LEAD = `${ESTATE.tenuta} stands at ${ESTATE.altitudeMetres} metres on the southern hills above Siena. Between spring and harvest the shutters are open and the long table is back under the window.`;
