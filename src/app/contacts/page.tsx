import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { BACK_LABEL, ESTATE } from "@/data/estate";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "How to reach Tenuta Veloria: an address to write to, a telephone, and where the estate stands. Open to visitors from spring through harvest.",
};

/** Dialled, not read: the printed number keeps its spaces, the link does not. */
const telHref = `tel:${ESTATE.phone.replace(/\s+/g, "")}`;

const linkClass =
  "underline decoration-ink/30 underline-offset-[6px] hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vermilion";

const termClass =
  "pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft sm:col-span-4";

export default function ContactsPage() {
  return (
    <main className="bg-paper">
      <PageIntro
        eyebrow="Contacts"
        title="How to reach the estate."
        lead={`${ESTATE.openTo} Write or telephone and one of the people who works here will answer, there is nothing automatic at this end.`}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
                  Write, or telephone.
                </h2>
                <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                  A tasting, a table in the restaurant, a room for a night or
                  two, all of it is arranged the same way. Say which days you
                  have in mind and how many of you there are.
                </p>
              </Reveal>

              <Reveal delay={90}>
                <dl className="mt-12 border-y border-ink/10">
                  <div className="grid gap-2 border-b border-ink/10 py-6 sm:grid-cols-12 sm:gap-8">
                    <dt className={termClass}>Email</dt>
                    <dd className="text-base leading-[1.6] text-ink sm:col-span-8 sm:text-lg">
                      <a href={`mailto:${ESTATE.email}`} className={linkClass}>
                        {ESTATE.email}
                      </a>
                    </dd>
                  </div>

                  <div className="grid gap-2 border-b border-ink/10 py-6 sm:grid-cols-12 sm:gap-8">
                    <dt className={termClass}>Telephone</dt>
                    <dd className="text-base leading-[1.6] text-ink sm:col-span-8 sm:text-lg">
                      <a href={telHref} className={linkClass}>
                        {ESTATE.phone}
                      </a>
                    </dd>
                  </div>

                  <div className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-8">
                    <dt className={termClass}>The estate</dt>
                    <dd className="text-base leading-[1.6] text-ink sm:col-span-8 sm:text-lg">
                      {ESTATE.tenuta}
                      <br />
                      {ESTATE.place}
                    </dd>
                  </div>
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
              <p className="mt-8 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                {ESTATE.hectares} hectares at {ESTATE.altitudeMetres} metres
                above sea level, in the {ESTATE.region}. The last of the way is
                uphill and slower than it looks on a map.
              </p>
              <p className="mt-6 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
                Write before you come. Tastings are arranged by hand, one party
                at a time, and somebody has to be free to walk you down to the
                cellar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="border-t border-ink/10 pt-16 sm:pt-20">
            <h2 className="text-3xl font-light leading-[1.15] text-ink sm:text-4xl">
              There is no form on this page.
            </h2>
            <p className="mt-7 max-w-[62ch] text-base leading-[1.6] text-ink-soft sm:text-lg">
              A form would take what you had written and send it to the address
              above, with a screen in between saying that it had gone. We have
              left out the screen. Write to{" "}
              <a href={`mailto:${ESTATE.email}`} className={linkClass}>
                {ESTATE.email}
              </a>{" "}
              and it is read here, by the people who can answer it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
          <Reveal className="border-t border-ink/10 pt-16 text-center sm:pt-24">
            <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
              Printed on the back of every bottle
            </p>
            <p className="mx-auto mt-12 max-w-[34ch] text-lg leading-[2.1] text-ink sm:mt-16 sm:text-xl">
              {BACK_LABEL.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
