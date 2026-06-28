"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";
import { cx } from "./ui";

type RevealVariant = "up" | "left" | "right" | "scale";

/* ============================================================
   Reveal — IntersectionObserver scroll-in. Children start
   hidden ([data-reveal]) and flip to .is-in when they enter
   the viewport. `delay` staggers siblings. Reduced-motion is
   handled in globals.css (forces visible).
   ============================================================ */
export function Reveal({
  children,
  as,
  variant = "up",
  delay = 0,
  className,
  style,
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Degenerate / non-visual environment (no viewport — headless capture,
    // some embeds): IO never fires its callback, so reveal unconditionally
    // rather than trapping content at opacity:0 forever.
    if (typeof IntersectionObserver === "undefined" || window.innerHeight === 0) {
      setShown(true);
      return;
    }
    // Already in view at mount (above-the-fold): reveal now. IO's initial
    // callback can be throttled in a backgrounded tab, which would otherwise
    // leave hero/top content invisible until the user scrolls.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setShown(true);
      if (once) return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal={variant === "up" ? "" : variant}
      className={cx(shown && "is-in", className)}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
