import type { Ground, NavLink, Person } from "@/types";

export const ESTATE = {
  name: "Veloria Estate Winery",
  tenuta: "Tenuta Veloria",
  founded: 1978,
  firstBottle: 1986,
  hectares: 42,
  hectaresAtFounding: 7,
  altitudeMetres: 340,
  place: "Siena, Toscana, Italia",
  region: "Province of Siena, Tuscany",
  tagline: "Made slowly. Remembered forever.",
  houseBuilt: 1892,
  nameMeaning:
    "The name comes from the old Tuscan velare, to veil, to conceal. The best things need time before they are uncovered.",
  email: "visit@veloria.it",
  phone: "+39 0577 000 000",
  openTo: "Open to visitors from spring through harvest.",
} as const;

export const GROUNDS = [
  { thing: "The family house", detail: "1892" },
  { thing: "The cellar", detail: "1978" },
  { thing: "The vineyards", detail: "42 hectares" },
  { thing: "The tasting room", detail: null },
  { thing: "The restaurant", detail: null },
  { thing: "A small guest hotel", detail: null },
  { thing: "The olive garden", detail: null },
  { thing: "A cellar of collector wines", detail: null },
] as const satisfies readonly Ground[];

const VISITABLE_THINGS: readonly (typeof GROUNDS)[number]["thing"][] = [
  "The tasting room",
  "The restaurant",
  "A small guest hotel",
  "The olive garden",
  "The cellar",
  "A cellar of collector wines",
];

export const VISITABLE = VISITABLE_THINGS.map((thing) => {
  const entry = GROUNDS.find((place) => place.thing === thing);
  if (!entry) {
    throw new Error(`VISITABLE names ${thing}, which is not on GROUNDS`);
  }
  return entry;
});

export const FAMILY: Person[] = [
  {
    slug: "matteo-bellandi",
    name: "Matteo Bellandi",
    role: "Founder",
    dates: "1948–2019",
    line: "Bought seven hectares on the southern hills of Siena in 1978 and made the first vintages in barrels under the family house.",
    story: [
      "He grew up on this ground before there was a label on it. His father farmed the slope, and the house they lived in had been standing since 1892. In 1978 Matteo bought seven hectares of it in his own name, with an old stone cellar on the land and no money for anything modern.",
      "The first vintages were made in barrels under the family house. There was no winery to speak of and no plan to build one quickly. What there was instead was a conviction, repeated often enough that the family still repeats it, that a wine which has been hurried will taste hurried.",
      "He worked the estate until his death in 2019. Most of what stands here was added while he was alive, a parcel at a time, and nothing about the way the wine is made was changed to keep up with it.",
    ],
    portrait: "/images/portrait-matteo.webp",
    portraitWidth: 255,
    portraitHeight: 418,
    portraitAlt:
      "A painted portrait of an older man with white hair in an olive jacket.",
  },
  {
    slug: "elisa-bellandi",
    name: "Elisa Bellandi",
    role: "Co-founder",
    line: "Drove the first sales and carried the name beyond the region.",
    story: [
      "Matteo made the wine. Elisa decided that somebody outside the province ought to be able to buy it. In 1986 the first bottle went out under the Veloria name, and it went out because she had found someone to send it to.",
      "The early sales were made the slow way, one merchant and one restaurant at a time, in a region where every hill already had a producer on it. What she built was not a distribution network so much as a list of people who would answer the telephone.",
      "The estate still works that way. Tastings are arranged by hand, one party at a time, and a case leaves here because somebody asked for it.",
    ],
    portrait: "/images/portrait-elisa.webp",
    portraitWidth: 214,
    portraitHeight: 407,
    portraitAlt:
      "A painted portrait of a woman with dark hair pinned up, in red.",
  },
  {
    slug: "lorenzo-bellandi",
    name: "Lorenzo Bellandi",
    role: "Winemaker",
    line: "Matteo’s son. Runs production today.",
    story: [
      "Lorenzo took over production and changed almost nothing. The fruit is still picked by hand, each parcel still ferments on its own in small batches, and what happens to it afterwards is decided afterwards rather than before.",
      "The Riserva is his to judge: thirty months in oak, then at least a year in bottle, and it does not leave the cellar early. The Vecchia Vigna is made only in the years that deserve it, from the oldest part of the estate where some of the vines are over sixty.",
      "Most of the decisions he makes are about when something is not finished yet.",
    ],
    portrait: "/images/portrait-lorenzo.webp",
    portraitWidth: 274,
    portraitHeight: 431,
    portraitAlt:
      "A painted portrait of a dark-haired man in a deep green shirt.",
  },
  {
    slug: "sofia-bellandi",
    name: "Sofia Bellandi",
    role: "Estate Director",
    line: "Fourth generation on this land.",
    story: [
      "Count from Matteo’s father and Sofia is the fourth to work this slope. The label only dates from 1978, so of the winery she is the third, and the older number is the truer one: the house was standing in 1892 and the ground was being farmed long before there was a bottle to put a name on.",
      "She runs the estate rather than the cellar. The tasting room, the restaurant, the guest rooms and the olive garden are hers, and so is the part of the year when people come up the hill.",
      "That the estate is open from spring through harvest and quiet for the rest of it is a decision, not a season. The work that happens in between is mostly in the dark and there is nothing to watch.",
    ],
    portrait: "/images/portrait-sofia.webp",
    portraitWidth: 243,
    portraitHeight: 385,
    portraitAlt:
      "A painted portrait of a young woman with short dark hair, in coral.",
  },
];

export function findPerson(slug: string) {
  return FAMILY.find((person) => person.slug === slug);
}

export const FOUNDER_QUOTE = {
  text: "I don’t want to make the most expensive wine in Tuscany. I want to make one we’ll still want to drink in twenty years.",
  attribution: "Matteo Bellandi, 1948–2019",
};

export const BACK_LABEL = [
  "Bottled at the estate.",
  "Tenuta Veloria, Siena, Italia.",
  "Some things are worth waiting for.",
];

export const NAV_LEFT: NavLink[] = [
  { label: "about", href: "/about" },
  { label: "wines", href: "/wines" },
  { label: "vineyards", href: "/vineyards" },
];

export const NAV_RIGHT: NavLink[] = [
  { label: "visit", href: "/visit" },
  { label: "contacts", href: "/contacts" },
];

export const NAV_ALL: NavLink[] = [...NAV_LEFT, ...NAV_RIGHT];
