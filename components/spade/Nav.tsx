import Link from "next/link";
import { Logo, ButtonLink, MonoLabel } from "./ui";

const LINKS = [
  { href: "/#product", label: "Product" },
  { href: "/#treasury", label: "Treasury" },
  { href: "/design-system", label: "Design System" },
];

export function Nav() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: "color-mix(in srgb, var(--paper) 86%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="spade-wrap h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[12px] uppercase tracking-[0.1em] transition-colors hover:text-[var(--lime-600)]"
                style={{ color: "var(--green-700)" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex font-mono text-[12px] uppercase tracking-[0.1em]"
            style={{ color: "var(--green-950)" }}
          >
            Sign in
          </Link>
          <ButtonLink href="/login" variant="inverse" size="sm">
            Open account
          </ButtonLink>
        </div>
      </div>
      <div className="spade-wrap">
        <MonoLabel className="hidden lg:flex py-1.5" style={{ opacity: 0.6 }}>
          ► SPADE / BUSINESS BANKING / EST. 2026 · INSTRUMENTED FOR OPERATORS
        </MonoLabel>
      </div>
    </header>
  );
}
