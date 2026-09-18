/**
 * Notes from the estate. Written as a working property writes things down —
 * what happened, what it means, and then stop.
 *
 * Dates are fixed strings rather than Date objects: the site is statically
 * rendered and nothing here should shift because a build ran on a different day.
 */

export type Entry = {
  slug: string;
  /** Display date, already formatted. */
  date: string;
  /** Sortable, newest first. */
  iso: string;
  title: string;
  standfirst: string;
  body: string[];
  image: string;
  alt: string;
};

export const ENTRIES: Entry[] = [
  {
    slug: "the-morning-the-riserva-came-out-of-oak",
    date: "14 September",
    iso: "2024-09-14",
    title: "The morning the Riserva came out of oak",
    standfirst:
      "Thirty months, to the week. Lorenzo tasted it at six, said nothing for a while, and then said it could go to bottle.",
    body: [
      "There is no ceremony to it. The barrels are moved, the wine is racked, and the cellar smells for two days of something between cherry and wet stone. Everyone who works here finds a reason to walk past.",
      "It now waits another year in bottle before it is allowed out. That part happens in the dark and nobody visits it.",
      "This is the 2019, which was a slow year — a cold spring, then a long dry autumn that let the fruit hang. It is the kind of year the Riserva was designed for.",
    ],
    image: "/images/sun-rise.webp",
    alt: "A low red sun in a pink sky over the hills, a line of cypresses along the ridge with a house set among them, and three people sitting out on the slope below.",
  },
  {
    slug: "picking-the-old-vines-by-hand",
    date: "2 September",
    iso: "2024-09-02",
    title: "Picking the old vines by hand",
    standfirst:
      "The first seven hectares came in over four mornings. Some of those vines are older than anyone picking them.",
    body: [
      "The old plot is picked first and picked slowly. The vines give very little — a fraction of what the younger parcels give — and what they give has to be carried out in small baskets because the rows are too narrow for anything else.",
      "Nobody has decided yet whether this becomes Vecchia Vigna. That is not a decision you make in the vineyard. It is made months later, in the cellar, and in most years the answer is no.",
    ],
    image: "/images/collecting-grapes.webp",
    alt: "Two pickers standing under the vines at harvest, tipping dark red bunches into a tub already full of fruit.",
  },
  {
    slug: "the-table-is-out-again",
    date: "18 May",
    iso: "2024-05-18",
    title: "The table is out again",
    standfirst:
      "The long table went back under the window this week, which is how the estate knows the season has started.",
    body: [
      "From now until the harvest there are people at that table most days. The shutters stay open, the hills do the work of decoration, and lunch takes as long as it takes.",
      "The olive garden was cut back in March and is thickening again. The guest rooms above the tasting room are open from this week.",
    ],
    image: "/images/walk-with-kids.webp",
    alt: "Four figures walking a pale path between tall dark trees in the evening, with a small red boat out on the water beside them.",
  },
];

export function findEntry(slug: string): Entry | undefined {
  return ENTRIES.find((entry) => entry.slug === slug);
}
