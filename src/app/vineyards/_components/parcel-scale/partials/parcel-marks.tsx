import { cn } from "@/utils";

type ParcelMark = {
  key: number;
  original: boolean;
};

type ParcelMarksProps = {
  marks: readonly ParcelMark[];
};

export function ParcelMarks({ marks }: ParcelMarksProps) {
  return (
    <div
      aria-hidden
      className="grid max-w-[26rem] grid-cols-7 gap-1.5 sm:gap-2"
    >
      {marks.map(({ key, original }) => (
        <span
          key={key}
          className={cn("aspect-square", original ? "bg-ink" : "bg-ink/10")}
        />
      ))}
    </div>
  );
}
