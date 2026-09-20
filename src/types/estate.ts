export type NavLink = {
  label: string;
  href: string;
};

export type Ground = {
  thing: string;
  detail: string | null;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  dates?: string;
  line: string;
  story: string[];
  portrait: string;
  portraitWidth: number;
  portraitHeight: number;
  portraitAlt: string;
};
