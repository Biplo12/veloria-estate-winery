import Image from "next/image";

export function TastingRoomFilm() {
  return (
    <section>
      <div>
        <div className="relative aspect-4/3 w-full sm:aspect-832/464 sm:max-h-[62svh]">
          <Image
            src="/images/tasting-room-poster.webp"
            alt="The tasting room: two people at the long wooden table, a bottle and glasses between them, the shutters thrown open on the hills beyond."
            fill
            sizes="100vw"
            preload
            className="object-cover"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/tasting-room-poster.webp"
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          >
            <source src="/video/tasting-room.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
