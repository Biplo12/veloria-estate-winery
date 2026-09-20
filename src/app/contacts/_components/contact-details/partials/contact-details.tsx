import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BODY, CONTAINER, FOCUS_RING, HEADING, SECTION } from "@/constants";
import { ESTATE } from "@/data/estate";
import { cn } from "@/utils";

import { DetailRow } from "./detail-row";

const TEL_HREF = `tel:${ESTATE.phone.replace(/\s+/g, "")}`;

const CONTACT_LINK = cn(
  "underline decoration-ink/30 underline-offset-[6px] hover:decoration-ink",
  FOCUS_RING,
);

export function ContactDetails() {
  return (
    <section className={SECTION}>
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className={HEADING}>Write, or telephone.</h2>
              <p className={cn("mt-7 max-w-[62ch]", BODY)}>
                A tasting, a table in the restaurant, a room for a night or two,
                all of it is arranged the same way. Say which days you have in
                mind and how many of you there are.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <dl className="mt-12 border-t border-ink/10">
                <DetailRow term="Email">
                  <a href={`mailto:${ESTATE.email}`} className={CONTACT_LINK}>
                    {ESTATE.email}
                  </a>
                </DetailRow>
                <DetailRow term="Telephone">
                  <a href={TEL_HREF} className={CONTACT_LINK}>
                    {ESTATE.phone}
                  </a>
                </DetailRow>
                <DetailRow term="The estate" last>
                  {ESTATE.tenuta}
                  <br />
                  {ESTATE.place}
                </DetailRow>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-4 lg:col-start-9">
            <Image
              src="/images/logo-cut.webp"
              alt=""
              aria-hidden
              width={653}
              height={722}
              className="h-20 w-auto"
            />
            <p className={cn("mt-8 max-w-[62ch]", BODY)}>
              {ESTATE.hectares} hectares at {ESTATE.altitudeMetres} metres above
              sea level, in the {ESTATE.region}. The last of the way is uphill
              and slower than it looks on a map.
            </p>
            <p className={cn("mt-6 max-w-[62ch]", BODY)}>
              Write before you come. Tastings are arranged by hand, one party at
              a time, and somebody has to be free to walk you down to the
              cellar.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
