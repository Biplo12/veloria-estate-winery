export type WineSlug = "rosso" | "riserva" | "luna-bianca" | "vecchia-vigna";

export type Wine = {
  slug: WineSlug;
  name: string;
  vintage: string;
  grapes: string;
  note: string;
  priceEur: number;
  summary: string;
  story: string[];
  ageing: string;
  bottles: number;
  image: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
};
