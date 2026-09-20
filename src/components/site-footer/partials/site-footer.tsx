import Image from "next/image";
import { Fragment } from "react";

import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/constants";
import { BACK_LABEL, ESTATE } from "@/data/estate";

import { FooterColumns } from "./footer-columns";

export function SiteFooter() {
  return (
    <footer
      id="contacts"
      className="bg-ink pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pb-40"
    >
      <div className={CONTAINER}>
        <Reveal>
          <Image
            src="/images/logo-cut.webp"
            alt=""
            aria-hidden
            width={653}
            height={722}
            className="h-16 w-auto sm:h-20"
          />
          <h2 className="mt-10 max-w-[16ch] text-3xl font-light leading-[1.1] text-paper sm:text-4xl lg:text-[2.5rem]">
            Come and see the place.
          </h2>
          <p className="mt-7 max-w-[52ch] text-lg leading-[1.6] text-paper/70 sm:text-xl">
            {ESTATE.openTo} Write ahead, and someone will be free to walk you
            through the cellar.
          </p>
        </Reveal>

        <FooterColumns />

        <Reveal className="mt-20 border-t border-paper/15 pt-14 sm:mt-24 sm:pt-16">
          <p className="max-w-[34ch] text-base leading-[2.2] text-paper/70 sm:text-lg">
            {BACK_LABEL.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
          <p className="mt-16 max-w-[52ch] text-sm leading-[1.6] text-paper/60">
            © {ESTATE.name}. A fictional estate, built as a portfolio project.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
