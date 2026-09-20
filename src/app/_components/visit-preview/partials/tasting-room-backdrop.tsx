import Image from "next/image";

export function TastingRoomBackdrop() {
  return (
    <>
      <Image
        src="/images/tasting-room-poster.webp"
        alt="The tasting room: two people at the long wooden table, shutters thrown open on the hills beyond."
        fill
        sizes="100vw"
        className="-z-30 object-cover"
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/tasting-room-poster.webp"
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/video/tasting-room.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-b from-ink/85 via-ink/90 to-ink/90 sm:from-ink/55 sm:via-ink/88 sm:via-30%"
      />
    </>
  );
}
