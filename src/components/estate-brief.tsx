import Image from "next/image";

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
    body: "Veloria is a family estate on the southern hills of Siena, working forty-two hectares that started as seven. Matteo Bellandi made the first vintages in barrels under the family house in 1978. The same family still picks by hand, ferments in small batches, and waits, some wines for three years in French oak before anyone is allowed near them.",
  },
  {
    heading: "Task",
    body: "Give the estate a place online that sells bottles and books tastings without flattening four decades of patience into a product grid. It had to read as a house that has been here a while, and still behave like something built this year.",
    offset: true,
  },
  {
    heading: "Solution",
    body: "Commissioned gouache illustrations carry the whole interface, and every colour on the page is sampled out of the paintings themselves, the foliage, the roof, the red of a dress in the rows. Type stays out of their way: one geometric face, tracked wide and set like a label.",
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
