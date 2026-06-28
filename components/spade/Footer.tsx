import Link from "next/link";
import { Logo, MonoLabel } from "./ui";

const COLS = [
  {
    head: "PRODUCT",
    links: [
      ["Business accounts", "/#product"],
      ["Corporate cards", "/#product"],
      ["Treasury", "/#treasury"],
      ["Payments API", "/#developers"],
    ],
  },
  {
    head: "COMPANY",
    links: [
      ["Design System", "/design-system"],
      ["Dashboard", "/dashboard"],
      ["Sign in", "/login"],
      ["Changelog", "/design-system"],
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--green-950)", color: "var(--paper)" }}>
      <div className="spade-wrap py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="[&_*]:!text-[var(--paper)]">
              <Logo inverse />
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed" style={{ color: "var(--green-400)" }}>
              Business banking as an instrument. Accounts, cards, treasury and a payments API — one
              ledger, read in real time.
            </p>
            <div className="mt-6">
              <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>
                ► SOC 2 TYPE II · FUNDS HELD AT PARTNER BANKS
              </MonoLabel>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.head}>
              <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>{col.head}</MonoLabel>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[15px] transition-colors hover:text-[var(--lime-400)]"
                      style={{ color: "var(--paper)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--line-inverse)" }}
        >
          <MonoLabel style={{ color: "var(--green-400)" }}>© 2026 SPADE FINANCIAL · ALL RIGHTS RESERVED</MonoLabel>
          <MonoLabel style={{ color: "var(--green-400)" }}>BUILT WITH THE SPADE DESIGN SYSTEM</MonoLabel>
        </div>
      </div>
    </footer>
  );
}
