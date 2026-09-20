import { cn } from "@/utils";

type ColumnLabelProps = {
  children: string;
};

export function ColumnLabel({ children }: ColumnLabelProps) {
  return (
    <h3
      className={cn(
        "pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-paper/60",
      )}
    >
      {children}
    </h3>
  );
}
