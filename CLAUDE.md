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

> Open question: the source brief calls Sofia "fourth generation", which does not
> line up with a 1978 founding by Matteo (that would make her third). Settle this
> before it reaches an About page.

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

The brief's stated direction is *old money / Italian heritage + modern luxury*:
cream `#F3EDE0`, dark olive, burgundy, black, off-white; an elegant serif paired
with a very plain grotesque; a minimal **V** monogram with a subtle vine.

What is built today is a different register — the hand-painted gouache
illustrations in `public/images/`, with colours sampled from the artwork itself and
Jost used alone. The two directions do not merge cleanly: the naive gouache reads
as modern natural wine, not as heritage luxury. Pick one before expanding past the
hero, and say which in the commit.

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
