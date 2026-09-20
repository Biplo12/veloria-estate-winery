import { Reveal } from "@/components/reveal";

type PlacesCaptionProps = {
  places: readonly string[];
};

export function PlacesCaption({ places }: PlacesCaptionProps) {
  return (
    <Reveal
      delay={180}
      className="mt-20 border-t border-white/25 pt-8 sm:mt-28"
    >
      <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-3">
        {places.map((place) => (
          <li
            key={place}
            className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-white/85"
          >
            {place}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
