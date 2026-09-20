import type { Ground } from "@/types";

export function formatGround({ thing, detail }: Ground) {
  return detail ? `${thing}, ${detail}` : thing;
}
