/**
 * The estate itself, the people, and the site's navigation. Single source of
 * truth for anything the canon in CLAUDE.md fixes.
 */

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
  /** The name comes from the old Tuscan *velare* — to veil, to conceal. */
  nameMeaning:
    "The name comes from the old Tuscan velare — to veil, to conceal. The best things need time before they are uncovered.",
  email: "visit@veloria.it",
  phone: "+39 0577 000 000",
  openTo: "Open to visitors from spring through harvest.",
} as const;

/** What stands on the grounds. Years only where a year is honest. */
export const GROUNDS = [
  { thing: "The family house", detail: "1892" },
  { thing: "The cellar", detail: "1978" },
  { thing: "The vineyards", detail: "42 hectares" },
  { thing: "The tasting room", detail: null },
  { thing: "The restaurant", detail: null },
  { thing: "A small guest hotel", detail: null },
  { thing: "The olive garden", detail: null },
  { thing: "A cellar of collector wines", detail: null },
] as const;

export type Person = {
  name: string;
  role: string;
  dates?: string;
  line: string;
};

export const FAMILY: Person[] = [
  {
    name: "Matteo Bellandi",
    role: "Founder",
    dates: "1948–2019",
    line: "Bought seven hectares on the southern hills of Siena in 1978 and made the first vintages in barrels under the family house.",
  },
  {
    name: "Elisa Bellandi",
    role: "Co-founder",
    line: "Drove the first sales and carried the name beyond the region.",
  },
  {
    name: "Lorenzo Bellandi",
    role: "Winemaker",
    line: "Matteo’s son. Runs production today.",
  },
  {
    name: "Sofia Bellandi",
    role: "Estate Director",
    // Fourth generation ON THE LAND, never "of the winery" — the label dates
    // from 1978, the family's work on this slope does not.
    line: "Fourth generation on this land.",
  },
];

export const FOUNDER_QUOTE = {
  text: "I don’t want to make the most expensive wine in Tuscany. I want to make one we’ll still want to drink in twenty years.",
  attribution: "Matteo Bellandi, 1948–2019",
};

/** The back label, printed on every bottle the estate sends out. */
export const BACK_LABEL = [
  "Bottled at the estate.",
  "Tenuta Veloria, Siena, Italia.",
  "Some things are worth waiting for.",
];

export type NavLink = { label: string; href: string };

export const NAV_LEFT: NavLink[] = [
  { label: "about", href: "/about" },
  { label: "wines", href: "/wines" },
  { label: "vineyards", href: "/vineyards" },
];

export const NAV_RIGHT: NavLink[] = [
  { label: "journal", href: "/journal" },
  { label: "visit", href: "/visit" },
  { label: "contacts", href: "/contacts" },
];

export const NAV_ALL: NavLink[] = [...NAV_LEFT, ...NAV_RIGHT];
