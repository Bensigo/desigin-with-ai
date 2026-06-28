import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

/* ============================================================
   Spade core primitives — faithful to Design System.html
   ► markers · [BRACKETED] mono labels · corner-bracket frames
   ============================================================ */

type Cls = { className?: string };

export function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---- Logo ---- */
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group">
      <span
        className="grid place-items-center rounded-[var(--radius-spade)]"
        style={{
          width: 28,
          height: 28,
          background: "var(--green-950)",
          color: "var(--lime-400)",
        }}
        aria-hidden
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1.2 2.6 8.1c-1.6 2-.3 5 2.3 5 .9 0 1.6-.4 2.1-1V14H9v-1.9c.5.6 1.2 1 2.1 1 2.6 0 3.9-3 2.3-5L8 1.2Z" />
        </svg>
      </span>
      <span
        className="font-display text-[19px] tracking-[-0.02em]"
        style={{ color: inverse ? "var(--paper)" : "var(--green-950)", fontWeight: 800 }}
      >
        Spade
      </span>
    </Link>
  );
}

/* ---- Mono label ([BRACKETED] technical voice) ---- */
export function MonoLabel({
  children,
  marker = false,
  className,
  style,
}: { children: ReactNode; marker?: boolean } & Cls & { style?: React.CSSProperties }) {
  return (
    <span className={cx("mono-label inline-flex items-center gap-1.5", className)} style={style}>
      {marker && <span style={{ color: "var(--lime-600)" }}>►</span>}
      {children}
    </span>
  );
}

/* ---- Corner-bracket frame (data-terminal motif) ---- */
export function BracketFrame({
  children,
  inverse = false,
  className,
  style,
}: { children: ReactNode; inverse?: boolean } & Cls & { style?: React.CSSProperties }) {
  return (
    <div className={cx("bracket", inverse && "bracket--inverse", className)} style={style}>
      <span className="bracket-i" aria-hidden />
      {children}
    </div>
  );
}

/* ---- Button / Pill ---- */
type ButtonVariant = "primary" | "inverse" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const SIZES: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-7 text-[16px]",
};

function variantStyle(v: ButtonVariant): React.CSSProperties {
  switch (v) {
    case "primary":
      return { background: "var(--lime-400)", color: "var(--green-950)", border: "1px solid var(--lime-500)" };
    case "inverse":
      return { background: "var(--green-950)", color: "var(--paper)", border: "1px solid var(--green-950)" };
    case "secondary":
      return { background: "transparent", color: "var(--green-950)", border: "1px solid var(--line-strong)" };
    case "ghost":
      return { background: "transparent", color: "var(--green-950)", border: "1px solid transparent" };
  }
}

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-full)] font-mono uppercase tracking-[0.08em] font-medium transition-[transform,background,border-color] duration-150 active:translate-y-px hover:-translate-y-px cursor-pointer";

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cx(baseBtn, SIZES[size], className)} style={variantStyle(variant)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link href={href} className={cx(baseBtn, SIZES[size], className)} style={variantStyle(variant)} {...rest}>
      {children}
    </Link>
  );
}

/* ---- Ghost link with ► hover marker ---- */
export function GhostLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-mono text-[13px] tracking-[0.04em] transition-colors"
      style={{ color: "var(--green-700)" }}
    >
      <span
        className="transition-transform duration-150 group-hover:translate-x-0.5"
        style={{ color: "var(--lime-600)" }}
      >
        ►
      </span>
      {children}
    </Link>
  );
}

/* ---- DataField — ►LABEL / value chip ---- */
export function DataField({
  label,
  value,
  inverse = false,
}: {
  label: string;
  value: ReactNode;
  inverse?: boolean;
}) {
  return (
    <div
      className="flex items-baseline justify-between gap-4 py-2.5"
      style={{
        borderBottom: `1px solid ${inverse ? "var(--line-inverse)" : "var(--line)"}`,
      }}
    >
      <span
        className="font-mono text-[11px] uppercase tracking-[0.14em] inline-flex items-center gap-1.5"
        style={{ color: inverse ? "var(--line-inverse-strong)" : "var(--text-muted)" }}
      >
        <span style={{ color: "var(--lime-600)" }}>►</span>
        {label}
      </span>
      <span
        className="font-mono text-[13px] tabular-nums"
        style={{ color: inverse ? "var(--paper)" : "var(--green-950)" }}
      >
        {value}
      </span>
    </div>
  );
}

/* ---- Category badge ---- */
const CAT: Record<string, string> = {
  risk: "var(--cat-risk)",
  rewards: "var(--cat-rewards)",
  analytics: "var(--cat-analytics)",
  experience: "var(--cat-experience)",
  developers: "var(--green-950)",
};

export function Badge({ children, cat = "analytics" }: { children: ReactNode; cat?: keyof typeof CAT }) {
  const color = CAT[cat];
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-[var(--radius-full)]"
      style={{ border: `1px solid ${color}`, color: "var(--green-950)" }}
    >
      <span style={{ width: 7, height: 7, borderRadius: 999, background: color }} aria-hidden />
      {children}
    </span>
  );
}

/* ---- Stat block ---- */
export function Stat({
  value,
  label,
  sub,
  inverse = false,
}: {
  value: ReactNode;
  label: string;
  sub?: string;
  inverse?: boolean;
}) {
  return (
    <div>
      <div
        className="font-display tracking-[-0.02em] leading-none"
        style={{ fontSize: "clamp(34px,4vw,52px)", fontWeight: 800, color: inverse ? "var(--paper)" : "var(--green-950)" }}
      >
        {value}
      </div>
      <div className="mono-label mt-3" style={inverse ? { color: "var(--line-inverse-strong)" } : undefined}>
        {label}
      </div>
      {sub && (
        <p className="mt-1.5 text-[14px]" style={{ color: inverse ? "var(--green-400)" : "var(--text-muted)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

/* ---- Section eyebrow (mono label + index) ---- */
export function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <MonoLabel marker>{children}</MonoLabel>
      <span className="font-mono text-[11px]" style={{ color: "var(--line-strong)" }}>
        {index}
      </span>
    </div>
  );
}
