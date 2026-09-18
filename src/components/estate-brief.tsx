import { Reveal } from "@/components/reveal";

/**
 * The colophon. Everything above it speaks as the estate; this speaks as the
 * person who built the site, so it closes quietly rather than shouting.
 *
 * It used to be a full-screen photograph carrying three columns of justified
 * white type — the only photograph on a site made of paintings, and the only
 * dark full-height block on a page made of cream. It ended the page with the
 * loudest thing on it, in the one voice that is not the estate's.
 */
const NOTES = [
  {
    label: "The estate",
    body: "Veloria is invented. A family estate on the southern hills of Siena, forty-two hectares that began as seven, still worked by the Bellandi.",
  },
  {
    label: "The task",
    body: "A place online that sells bottles and books tastings without flattening four decades of patience into a product grid.",
  },
  {
    label: "The approach",
    body: "Commissioned gouache carries the whole interface, and every colour is sampled from the paintings themselves. One typeface, tracked wide and set like a label.",
  },
];

export function EstateBrief() {
  return (
    <section id="project" className="bg-paper pb-24 pt-8 sm:pb-32 sm:pt-12">
      <div className="mx-auto max-w-[86rem] px-6 sm:px-10">
        <Reveal className="border-t border-ink/15 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                About this project
              </p>
              <p className="mt-6 max-w-[24ch] text-2xl font-light leading-[1.2] text-ink sm:text-[1.75rem]">
                A winery that does not exist, built as a portfolio piece.
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
              {NOTES.map(({ label, body }) => (
                <div key={label}>
                  <dt className="pl-[0.3em] text-[0.68rem] uppercase tracking-[0.3em] text-ink-soft">
                    {label}
                  </dt>
                  <dd className="mt-4 text-base leading-[1.6] text-ink-soft">
                    {body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
