import type { WineSlug } from "@/types";

type ColumnLayout = {
  note: boolean;
  summary: boolean;
};

export const COLUMN_LAYOUT: Record<WineSlug, ColumnLayout> = {
  rosso: { note: true, summary: false },
  riserva: { note: true, summary: true },
  "luna-bianca": { note: true, summary: true },
  "vecchia-vigna": { note: false, summary: true },
};
