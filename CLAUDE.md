@AGENTS.md

# Git conventions

- Write all commit messages in English.
- Use Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`).
- Never add a co-author trailer. Do not append `Co-Authored-By: Claude ...` (or any
  other co-author line) to commits or pull request descriptions. The commit author
  is the repository owner only.

# The brand

Veloria is a fictional estate built for this portfolio project. Treat everything
below as canon: copy, data fixtures and seed content must agree with it. Site copy
is written in English.

## Identity

| | |
|---|---|
| Full name | Veloria Estate Winery |
| Founded | 1978 |
| Location | Province of Siena, Tuscany, Italy |
| Family | Bellandi |
| Tagline | Made slowly. Remembered forever. |
| Character | elegant, traditional, but contemporary |

The name comes from the old Tuscan *velare* — "to veil, to conceal" — a reminder
that the best things need time before they are uncovered.

## History

Matteo Bellandi, the son of a local farmer, bought a small plot on the southern
hills of Siena in 1978. He had no large vineyard and no money for modern
production — only 7 hectares, an old stone cellar, and the conviction that good
wine should never be rushed. The first vintages were made in barrels under the
family house.

In 1986 Matteo and his wife Elisa released the first bottle sold under the Veloria
name. The family enlarged the vineyard over the following decades without changing
its character. Today Veloria works 42 hectares, its own ageing cellar, and a small
winery still run by the Bellandi family.

## Philosophy

**Time is an ingredient.** Grapes are picked by hand. Fermentation happens in small
batches, and some wines age for several years in French oak. Veloria does not try
to make a wine that tastes good to everyone — it makes one that is remembered after
the first glass.

## Wines

| Wine | Grapes | Notes | Price |
|---|---|---|---|
| **Veloria Rosso 2021** | Sangiovese · Merlot | Red fruit, cherry, dried herbs, soft vanilla | €28 |
| **Bellandi Riserva 2019** | 100% Sangiovese | The estate's flagship. 30 months in oak, then at least a year in bottle. Cherry, tobacco, cocoa, cedar, spice | €64 |
| **Luna Bianca 2023** | Trebbiano · Malvasia | Fresh white — pear, citrus, white flowers | €24 |
| **Veloria Vecchia Vigna 2016** | 100% Sangiovese | Only made in the best years, from the oldest part of the estate where some vines are over 60 | €110 |

## The estate

Tenuta Veloria — 42 hectares, 340 m above sea level, Siena, Toscana, Italia.

On the grounds: the family house from 1892, the 1978 cellar, 42 ha of vineyards,
a tasting room, a restaurant, a small guest hotel, an olive garden, and a cellar of
collector wines.

## The family

- **Matteo Bellandi** — Founder, 1948–2019. *"I don't want to make the most
  expensive wine in Tuscany. I want to make one we'll still want to drink in twenty
  years."*
- **Elisa Bellandi** — Co-founder. Drove the first sales and the brand's growth
  beyond the region.
- **Lorenzo Bellandi** — Winemaker. Matteo's son; runs production today.
- **Sofia Bellandi** — Estate Director.

Sofia is the **fourth generation on the land, not of the winery**. The brief calls
her fourth generation while dating the founding to 1978, which would make her
third — but Matteo was "the son of a local farmer" and the family house is from
1892, so the Bellandi were farming this slope long before there was a label.
Count from Matteo's father: father, Matteo, Lorenzo, Sofia. Copy must say "fourth
generation on this land" and never "fourth generation of the winery".

## Numbered labels

Every bottle carries a numbered label — a detail worth carrying into the UI
(product pages, checkout, certificates):

```
BOTTLE 01842 / 12,000
BELLANDI RISERVA
VINTAGE 2019
```

Back label:

```
Bottled at the estate.
Tenuta Veloria, Siena, Italia.
Some things are worth waiting for.
```

## Visual direction

**Decided: the gouache.** The hand-painted illustrations in `public/images/` carry
the interface, and every colour on the page is sampled from the artwork itself.
The brief's alternative reading — *old money / Italian heritage*, an elegant serif
with burgundy and a V monogram — was considered and dropped. Do not reintroduce it
piecemeal; the palette tokens in `globals.css` are the contract.

Type is Jost alone: tracked caps for the wordmark and labels, light weights at
large sizes for statements.

## Design contract

One hand drew this page. Anything new must obey the same rules.

- **Colour** — only the tokens above, used as `bg-*` / `text-*` / `border-*`.
  Never a hex value in a component, never grey, black or white as a surface.
- **Type** — Jost alone, applied on `body`. Section heading
  `text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl`; lead
  `text-lg leading-[1.6] text-ink-soft sm:text-xl`; eyebrow
  `text-[0.68rem] uppercase tracking-[0.3em]`. Tracked caps always carry a
  matching `pl-[0.3em]` so the trailing letterspace does not break centring.
- **Layout** — section `bg-paper py-24 sm:py-32 lg:py-40`, inner container
  `mx-auto max-w-[86rem] px-6 sm:px-10`. Full-bleed bands sit outside it.
- **Motion** — exactly one primitive: `<Reveal>` in `src/components/reveal.tsx`,
  a 16px fade-and-rise on first entry, driven by IntersectionObserver and keyed
  off `data-reveal` in `globals.css`. Stagger with `delay` in 90ms steps, never
  more than three. No parallax, scale, or scroll effects. It reveals immediately
  under `prefers-reduced-motion`, and a `<noscript>` rule in `layout.tsx` keeps
  content visible without scripting.
- **Voice** — plain, unhurried, British-leaning English. Sentence case. No
  "discover", "experience", "journey", "nestled", no superlatives, no
  exclamation marks. Tell, do not sell.

## The site

Fourteen prerendered pages. The landing page is a sequence of sections; every
nav item is a real route, not an anchor.

| Route | What it is |
|---|---|
| `/` | hero → time → wines → vineyards → family → visit → journal → colophon |
| `/about` | the founding, the name, the founder's quote, the family |
| `/wines`, `/wines/[slug]` | the four wines, and one page each |
| `/vineyards` | the land, the painted map, 7 → 42 hectares |
| `/journal`, `/journal/[slug]` | notes from the estate |
| `/visit` | the tasting room, on the looping video |
| `/contacts` | how to reach the estate |

Facts live in `src/data/` — `wines.ts`, `estate.ts`, `journal.ts`. **Never retype a
price, vintage, hectare figure, name or date into a component.** Sections and
routes both read from there, so the two can never drift apart.

Nothing on the site transacts. There is no cart, no checkout, no booking backend
and no form that submits. A call to action links to `/contacts`. Do not add one
that pretends otherwise.

The colophon (`EstateBrief`, `#project`) speaks as the person who built the site,
not as the estate, which is why it sits last — the work first, then the account of
it. Everything above it stays in the estate's voice.

## Longer-term scope

The project is meant to grow past a landing page: shop, tasting reservations,
vintage archive, interactive estate map, CMS and an admin panel.

# Assets

`public/images/` holds the estate illustrations, as WebP. They arrived as PNGs
totalling 47 MB, which is not something to put in git history — re-encoding at
q82 brought the set to 4 MB with no visible loss. The PNG originals were left in
the folder they came from and are not tracked here.

Files ending in `-cut` (`logo-cut`, `bottle-cut`, `grapes-cut`) are alpha-keyed:
the flat cream paper was flood-filled away from the border, so light areas
*inside* the artwork — a bottle label, the bowl of a glass — keep their paint.
Use a `-cut` file whenever a motif sits on anything other than plain cream.

## Which file is which wine

| Canon wine | File |
|---|---|
| Veloria Rosso 2021 | `wine-rosso.webp` |
| Bellandi Riserva 2019 | `wine-riserva.webp` |
| Luna Bianca 2023 | `wine-luna-bianca.webp` |
| Veloria Vecchia Vigna 2016 | `wine-vecchia-vigna.webp` |
| all four together | `bottles-of-wine.webp` |

`wine-luna-bianca` is painted as dark green glass, which reads as a red. It is the
one asset that disagrees with the canon; regenerate it paler if the wines section
makes that obvious.

## Portraits

`portrait-matteo` / `-elisa` / `-lorenzo` / `-sofia` are alpha-keyed cut-outs from
a single painted row, so all four share one scale, one light and one hand. They
carry simplified painted faces — a few brushmarks for the features, no likeness —
which is the register `faces.webp` already set. A photographic or finely detailed
portrait of an invented person would break it.

The source sheet held five figures; the woman in the navy apron is kept as
`portrait-spare.webp` and is not used. Assignment to the canon: Matteo is the
older man, because he is remembered as the founder who died in 2019; Lorenzo
reads a little young for fifty.

## Moving image

`public/video/tasting-room.mp4` is the tasting room animated — 832x464, silent,
574 KB, already cut into a seamless forward-then-reverse loop so it repeats with
no visible jump (the source was a 5.5 MB 5-second clip that cut hard). Poster
frame: `public/images/tasting-room-poster.webp`. It has no audio track, so never
render a mute control, and always hide it under `motion-reduce:` with the poster
showing underneath.

## Icons and sharing

`src/app/icon.png`, `apple-icon.png` and `opengraph-image.jpg` are generated from
`logo-cut` and the hero. The OG image carries **no words** — Jost is only present
as a woff2 subset, which cannot be rendered into an image, and a card shows the
title in the platform's own type anyway. At 32px the mark reads as a warm pink and
green blob rather than a legible object; a simplified mark would serve the favicon
better if the brand ever gets one.

## Paper colours do not match

Each illustration was painted on its own sheet and none of those creams is the
page's `--paper` (`#f4eadd`) — `barrels-of-wine-2` is `#e5d8b8`, `visit-room` is
`#e9e0d3`, `wine-rosso` is `#faf3df`. So a full-frame illustration must never be
dropped onto the page as a floating rectangle: bleed it to the full width and use
`.band-dissolve` to fade its top and bottom edges, or alpha-key it into a `-cut`.
