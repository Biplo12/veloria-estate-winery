import Image from "next/image";

/**
 * The colophon. It speaks as the person who built the site, not as the estate,
 * so it stays short: three notes, not a second telling of the history that the
 * whole page above has already given. It was 241 words, a third of the landing
 * page, and most of that was the estate's own story said a second time.
 */
type Column = {
  heading: string;
  body: string;
  /** The reference drops the last two columns below the first. */
  offset?: boolean;
  accent?: boolean;
};

const COLUMNS: Column[] = [
  {
    heading: "About",
    body: "A family estate on the southern hills of Siena. Forty-two hectares that began as seven, still worked by the Bellandi.",
  },
  {
    heading: "Task",
    body: "A place online that sells bottles and books tastings without flattening four decades of patience into a product grid.",
    offset: true,
  },
  {
    heading: "Solution",
    body: "Commissioned gouache carries the whole interface, and every colour is sampled from the paintings themselves. One typeface, tracked wide and set like a label.",
    offset: true,
    accent: true,
  },
];

export function EstateBrief() {
  return (
    <section
      id="project"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <Image
        src="/images/winery-photo.webp"
        alt="The Veloria vineyard at golden hour, rows curving up the slope to the estate house on the ridge."
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="vineyard-scrim absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-[86rem] grid-cols-1 gap-y-14 px-6 py-24 sm:px-10 lg:grid-cols-12 lg:gap-x-8 lg:py-[14vh]">
        {COLUMNS.map((column) => (
          <div
            key={column.heading}
            className={[
              "lg:col-span-3",
              column.offset ? "lg:mt-[16vh]" : "",
              column.heading === "Task" ? "lg:col-start-6" : "",
              column.heading === "Solution" ? "lg:col-start-9" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h2
              className={`text-3xl font-semibold italic leading-none lg:text-4xl ${
                column.accent ? "text-vine" : "text-white"
              }`}
            >
              {column.heading}
            </h2>
            <p
              className={`mt-6 hyphens-auto text-justify text-xl leading-[1.5] lg:text-[1.375rem] ${
                column.accent ? "text-vine" : "text-white"
              }`}
            >
              {column.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
