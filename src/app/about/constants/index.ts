import { ESTATE } from "@/data/estate";
import type { OnwardLink } from "@/types";

export const STORY = [
  `Matteo Bellandi was the son of a local farmer. In ${ESTATE.founded} he bought ${ESTATE.hectaresAtFounding} hectares on the southern hills of Siena, a slope, an old stone cellar, and no money for modern production. The first vintages were made in barrels under the family house.`,
  `In ${ESTATE.firstBottle} Matteo and his wife Elisa released the first bottle sold under the Veloria name. Elisa did the selling, and the name reached past the province because she carried it there.`,
  `The vineyard was enlarged over the decades that followed, one parcel at a time. It is ${ESTATE.hectares} hectares now, with its own ageing cellar and a small winery still run by the Bellandi family. The size changed. The way the wine is made did not.`,
];

export const MOMENTS = [
  { year: String(ESTATE.houseBuilt), what: "The family house" },
  {
    year: String(ESTATE.founded),
    what: `${ESTATE.hectaresAtFounding} hectares and an old stone cellar`,
  },
  {
    year: String(ESTATE.firstBottle),
    what: "The first bottle sold under the Veloria name",
  },
  {
    year: "Today",
    what: `${ESTATE.hectares} hectares, the ageing cellar, the same family`,
  },
];

export const ONWARD: readonly OnwardLink[] = [
  {
    href: "/wines",
    title: "The wines",
    line: "Four of them, and what each one is made of.",
  },
  {
    href: "/visit",
    title: "Visiting",
    line: ESTATE.openTo,
  },
];
