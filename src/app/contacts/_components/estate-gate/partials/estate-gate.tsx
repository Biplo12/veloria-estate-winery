import Image from "next/image";

export function EstateGate() {
  return (
    <div className="relative aspect-3360/1440 w-full">
      <Image
        src="/images/winery-gate.webp"
        alt="A painted gravel drive running up between cypresses to an open iron gate in a low stone wall, with tile-roofed farm buildings among the trees on either side."
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
