/**
 * The four wines, exactly as the estate canon in CLAUDE.md records them.
 * Sections and wine pages both read from here — a price or a vintage must never
 * be written twice.
 */

export type Wine = {
  slug: string;
  name: string;
  vintage: string;
  grapes: string;
  /** The tasting note, as the estate writes it. */
  note: string;
  priceEur: number;
  /** One line for lists and cards. */
  summary: string;
  /** The wine's own page. */
  story: string[];
  ageing: string;
  /** Bottles made of this vintage — the numbered label on every one. */
  bottles: number;
  /**
   * The painted bottle, alpha-keyed and redrawn onto one 900x1200 canvas with
   * the glass centred, scaled to a common height and standing on a common
   * baseline. Each was trimmed to its own brushwork first, which put the bottle
   * at a different place and size in every file and made a row of them jump.
   */
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
};

export const WINES: Wine[] = [
  {
    slug: "rosso",
    name: "Veloria Rosso",
    vintage: "2021",
    grapes: "Sangiovese · Merlot",
    note: "Red fruit, cherry, dried herbs, soft vanilla.",
    priceEur: 28,
    summary: "The wine the family drinks. Made every year, and meant to be opened.",
    story: [
      "Rosso is the estate speaking normally. It takes Sangiovese from the younger parcels and softens it with Merlot from the two plots nearest the road, where the soil holds more water and the fruit comes in rounder.",
      "It spends a year in old oak, old on purpose, so the barrel lends structure and not flavour. Nothing about it is held back for later. It is the bottle that goes on the table when the family eats.",
    ],
    ageing: "Twelve months in old French oak, then six in bottle.",
    bottles: 24000,
    image: "/images/wine-rosso-cut.webp",
    imageWidth: 900,
    imageHeight: 1200,
    alt: "A painted dark green bottle with a plain cream label, against a coral brushstroke.",
  },
  {
    slug: "riserva",
    name: "Bellandi Riserva",
    vintage: "2019",
    grapes: "100% Sangiovese",
    note: "Cherry, tobacco, cocoa, cedar, spice.",
    priceEur: 64,
    summary: "The flagship. Thirty months in oak, then at least a year in bottle before it leaves.",
    story: [
      "The Riserva carries the family name, which at Veloria means it is the wine the estate is willing to be judged on. It is made only from Sangiovese, and only from the parcels on the southern face where the slope holds the afternoon.",
      "Thirty months in French oak, then a minimum of twelve in bottle before a single case leaves the property. By the time you open it, most of its life has already happened somewhere dark and cool without you.",
    ],
    ageing: "Thirty months in French oak, then at least twelve in bottle.",
    bottles: 12000,
    image: "/images/wine-riserva-cut.webp",
    imageWidth: 900,
    imageHeight: 1200,
    alt: "A painted deep red bottle with a gold and dark label banded in red.",
  },
  {
    slug: "luna-bianca",
    name: "Luna Bianca",
    vintage: "2023",
    grapes: "Trebbiano · Malvasia",
    note: "Pear, citrus, white flowers.",
    priceEur: 24,
    summary: "The estate’s only white. Picked early, pressed the same morning, never near oak.",
    story: [
      "Luna Bianca comes off the highest and coolest corner of the property, where the vines catch the wind and the fruit keeps its acid. It is picked before dawn and pressed the same morning, because the distance between the vine and the press is the only thing that matters here.",
      "It sees no oak at all. It is bottled young and drunk young, and the estate makes no apology for that.",
    ],
    ageing: "Four months in steel. No oak.",
    bottles: 9000,
    image: "/images/wine-luna-bianca-pale-cut.webp",
    imageWidth: 900,
    imageHeight: 1200,
    alt: "A painted bottle of pale olive glass with a plain cream label, against soft blue and olive leaves.",
  },
  {
    slug: "vecchia-vigna",
    name: "Veloria Vecchia Vigna",
    vintage: "2016",
    grapes: "100% Sangiovese",
    note: "Only made in the years that deserve it.",
    priceEur: 110,
    summary: "From the oldest part of the estate, where some vines are over sixty. Not made every year.",
    story: [
      "Vecchia Vigna comes from the first seven hectares, the plot Matteo bought in 1978, already old then. Some of those vines have been bearing for more than sixty years. They give very little fruit and they give it slowly.",
      "It is declared only in the years that earn it. In the years that do not, the fruit goes quietly into the Riserva and nobody is told which ones.",
    ],
    ageing: "Thirty-six months in French oak, then two years in bottle.",
    bottles: 2400,
    image: "/images/wine-vecchia-vigna-cut.webp",
    imageWidth: 900,
    imageHeight: 1200,
    alt: "A painted dark bottle with a faded, muted label against a coral brushstroke.",
  },
];

export function findWine(slug: string): Wine | undefined {
  return WINES.find((wine) => wine.slug === slug);
}

/** How the price is written everywhere on the site. */
export function price(wine: Wine): string {
  return `€${wine.priceEur}`;
}

/**
 * Every bottle carries a number. The estate prints it like this, and so do we —
 * on the wine's page, and on anything that ever becomes a receipt.
 */
export function labelNumber(wine: Wine, bottle = 1842): string {
  return `Bottle ${String(bottle).padStart(5, "0")} of ${wine.bottles.toLocaleString("en-GB")}`;
}
