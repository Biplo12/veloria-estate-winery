"use client";

import {
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Milliseconds to hold before this element starts, for staggering a group. */
  delay?: number;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

/**
 * The page's only motion primitive: a short fade and rise the first time an
 * element comes into view, and never again. Everything animated on this site
 * goes through here, so the whole page moves with one hand.
 *
 * It flips `data-reveal` on the node itself rather than holding React state.
 * The attribute is the only thing that changes, the stylesheet does the rest,
 * and nothing re-renders — a page with thirty of these would otherwise pay for
 * thirty extra renders to move some opacity.
 *
 * It reveals immediately when the visitor asks for reduced motion, and the
 * noscript rule in the root layout keeps the content visible when scripting is
 * off. An animation is never allowed to be the reason something cannot be read.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  children,
  className = "",
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.dataset.reveal = "in";
    };

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
        clearTimeout(failsafe);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );

    // Every word on this site starts at opacity 0, so an observer that never
    // fires means a page nobody can read. That can happen — a document that is
    // never painted, a tab restored in the background, a browser quirk. This
    // stops waiting after a few seconds and shows the content anyway.
    const failsafe = setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 3000);

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal="out"
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
