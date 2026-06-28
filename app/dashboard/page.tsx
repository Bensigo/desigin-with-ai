import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  CreditCard,
  Plus,
  Search,
  Settings,
} from "lucide-react";
import {
  Logo,
  BracketFrame,
  MonoLabel,
  DataField,
  Badge,
  Button,
  Stat,
  Eyebrow,
} from "@/components/spade/ui";

/* ── Fake account data ─────────────────────────────── */
const ACCOUNTS = [
  { name: "Operating · USD", no: "•••• 4021", balance: "$1,840,204.55", cat: "analytics" as const },
  { name: "Reserve · USD", no: "•••• 7785", balance: "$512,000.00", cat: "rewards" as const },
  { name: "Payroll · EUR", no: "•••• 1190", balance: "€66,725.49", cat: "risk" as const },
];

const TXNS = [
  { dir: "out", name: "AWS EMEA SARL", memo: "Cloud infrastructure", cat: "developers", amt: "-$12,418.02", date: "Jun 28" },
  { dir: "in", name: "Northwind Retail Ltd", memo: "Invoice #2041 settled", cat: "rewards", amt: "+$84,500.00", date: "Jun 28" },
  { dir: "out", name: "Figma Inc", memo: "Org seats · 24", memoCat: "experience", cat: "experience", amt: "-$1,080.00", date: "Jun 27" },
  { dir: "out", name: "Gusto Payroll", memo: "Bi-weekly run", cat: "risk", amt: "-$148,902.31", date: "Jun 27" },
  { dir: "in", name: "Stripe Payouts", memo: "Daily settlement", cat: "analytics", amt: "+$23,114.88", date: "Jun 26" },
  { dir: "out", name: "WeWork", memo: "HQ — June", cat: "experience", amt: "-$9,400.00", date: "Jun 25" },
] as const;

const NAV = [
  ["Overview", true],
  ["Accounts", false],
  ["Cards", false],
  ["Payments", false],
  ["Treasury", false],
  ["Developers", false],
] as const;

export default function DashboardPage() {
  return (
    <div className="min-h-screen lg:grid" style={{ gridTemplateColumns: "248px 1fr", background: "var(--surface-page)" }}>
      {/* ── Sidebar ─────────────────────────────────── */}
      <aside
        className="hidden lg:flex flex-col justify-between sticky top-0 h-screen p-6"
        style={{ background: "var(--green-950)", color: "var(--paper)" }}
      >
        <div>
          <div className="[&_*]:!text-[var(--paper)]">
            <Logo inverse />
          </div>
          <nav className="mt-10 space-y-1">
            {NAV.map(([label, active]) => (
              <Link
                key={label}
                href="/dashboard"
                className="flex items-center gap-2.5 rounded-[var(--radius-spade)] px-3 py-2.5 font-mono text-[13px] tracking-[0.04em] transition-colors"
                style={
                  active
                    ? { background: "var(--lime-400)", color: "var(--green-950)" }
                    : { color: "var(--green-400)" }
                }
              >
                <span style={{ color: active ? "var(--green-950)" : "var(--lime-600)" }}>►</span>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <BracketFrame inverse className="p-4 rounded-[var(--radius-spade)]">
          <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>► PLAN</MonoLabel>
          <div className="font-display mt-1.5 text-[18px]" style={{ fontWeight: 700 }}>
            Scale
          </div>
          <p className="mt-1 text-[12px]" style={{ color: "var(--green-400)" }}>
            14 of 25 seats used
          </p>
          <Link
            href="/design-system"
            className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em]"
            style={{ color: "var(--lime-400)" }}
          >
            View design system ►
          </Link>
        </BracketFrame>
      </aside>

      {/* ── Main ────────────────────────────────────── */}
      <div className="flex flex-col">
        {/* Topbar */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between gap-4 px-6 lg:px-10 h-16"
          style={{
            background: "color-mix(in srgb, var(--paper) 88%, transparent)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <Logo />
            </div>
            <MonoLabel className="hidden sm:flex">► CONSOLE / OVERVIEW</MonoLabel>
          </div>
          <div className="flex items-center gap-2">
            <button className="grid place-items-center h-10 w-10 rounded-[var(--radius-spade)]" style={{ border: "1px solid var(--line-strong)" }} aria-label="Search">
              <Search size={16} />
            </button>
            <button className="grid place-items-center h-10 w-10 rounded-[var(--radius-spade)]" style={{ border: "1px solid var(--line-strong)" }} aria-label="Notifications">
              <Bell size={16} />
            </button>
            <button className="grid place-items-center h-10 w-10 rounded-[var(--radius-spade)]" style={{ border: "1px solid var(--line-strong)" }} aria-label="Settings">
              <Settings size={16} />
            </button>
            <span
              className="ml-1 grid place-items-center h-10 w-10 rounded-[var(--radius-full)] font-mono text-[13px]"
              style={{ background: "var(--green-950)", color: "var(--lime-400)" }}
            >
              NO
            </span>
          </div>
        </header>

        <main className="px-6 lg:px-10 py-8 space-y-8">
          {/* Greeting + primary actions */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow index="// LIVE">► NORTHWIND OPS</Eyebrow>
              <h1 className="font-display mt-3 text-[clamp(30px,4vw,44px)] tracking-[-0.02em]" style={{ fontWeight: 800 }}>
                Good morning, Ada.
              </h1>
            </div>
            <div className="flex items-center gap-2.5">
              <Button variant="secondary" size="md">
                <CreditCard size={16} /> New card
              </Button>
              <Button variant="inverse" size="md">
                <Plus size={16} /> Move money
              </Button>
            </div>
          </div>

          {/* Top stat band */}
          <BracketFrame className="p-7 lg:p-9 rounded-[var(--radius-spade-panel)]" style={{ background: "var(--white)" }}>
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:divide-x" style={{ borderColor: "var(--line)" }}>
              <div className="md:pr-8">
                <MonoLabel marker>► TOTAL POSITION</MonoLabel>
                <div className="font-display mt-3 text-[clamp(36px,5vw,56px)] tracking-[-0.02em] leading-none" style={{ fontWeight: 800 }}>
                  $2,418,930.04
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge cat="rewards">+4.1% MoM</Badge>
                  <span className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
                    across 3 accounts
                  </span>
                </div>
              </div>
              <div className="md:px-8">
                <Stat value="$84.5k" label="// IN · 30D" sub="receivables settled" />
              </div>
              <div className="md:px-8">
                <Stat value="$171k" label="// OUT · 30D" sub="payroll + infra" />
              </div>
            </div>
          </BracketFrame>

          {/* Accounts + transactions */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            {/* Accounts column */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <MonoLabel marker>► ACCOUNTS</MonoLabel>
                <Link href="/dashboard" className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--lime-600)" }}>
                  Manage ►
                </Link>
              </div>
              {ACCOUNTS.map((a) => (
                <BracketFrame key={a.no} className="p-5 rounded-[var(--radius-spade-panel)]" style={{ background: "var(--white)" }}>
                  <div className="flex items-center justify-between">
                    <Badge cat={a.cat}>{a.name.split(" · ")[1]}</Badge>
                    <span className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
                      {a.no}
                    </span>
                  </div>
                  <div className="font-display mt-4 text-[26px] tracking-[-0.02em]" style={{ fontWeight: 700 }}>
                    {a.balance}
                  </div>
                  <div className="mt-1 font-mono text-[12px] uppercase tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
                    {a.name.split(" · ")[0]}
                  </div>
                </BracketFrame>
              ))}
            </section>

            {/* Transactions */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <MonoLabel marker>► RECENT ACTIVITY</MonoLabel>
                <Link href="/dashboard" className="font-mono text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--lime-600)" }}>
                  All transactions ►
                </Link>
              </div>
              <div className="rounded-[var(--radius-spade-panel)] overflow-hidden" style={{ background: "var(--white)", border: "1px solid var(--line)" }}>
                {TXNS.map((t, i) => {
                  const incoming = t.dir === "in";
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 px-5 py-4"
                      style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}
                    >
                      <span
                        className="grid place-items-center h-10 w-10 rounded-[var(--radius-spade)] shrink-0"
                        style={{
                          background: incoming ? "color-mix(in srgb, var(--cat-rewards) 18%, transparent)" : "var(--paper-200)",
                          color: incoming ? "var(--cat-rewards)" : "var(--green-950)",
                        }}
                        aria-hidden
                      >
                        {incoming ? <ArrowDownLeft size={17} /> : <ArrowUpRight size={17} />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-[15px] truncate">{t.name}</div>
                        <div className="font-mono text-[12px] truncate" style={{ color: "var(--text-muted)" }}>
                          {t.memo}
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <Badge cat={t.cat as "risk"}>{t.cat}</Badge>
                      </div>
                      <div className="text-right shrink-0">
                        <div
                          className="font-mono text-[14px] tabular-nums"
                          style={{ color: incoming ? "var(--cat-rewards)" : "var(--green-950)", fontWeight: 600 }}
                        >
                          {t.amt}
                        </div>
                        <div className="font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>
                          {t.date}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Treasury strip */}
          <BracketFrame inverse className="p-7 lg:p-9 rounded-[var(--radius-spade-panel)] overflow-hidden relative" style={{ background: "var(--green-950)", color: "var(--paper)" }}>
            <div className="hatch--dark absolute inset-0 opacity-40" aria-hidden />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:items-center">
              <div>
                <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>► AUTO-SWEEP TREASURY</MonoLabel>
                <div className="font-display mt-2 text-[24px] tracking-[-0.02em]" style={{ fontWeight: 700, color: "var(--paper)" }}>
                  Idle cash, instrumented.
                </div>
              </div>
              <Stat inverse value="4.32%" label="// APY" />
              <Stat inverse value="$512k" label="// SWEPT" />
              <div className="flex md:justify-end">
                <Link
                  href="/design-system"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-[var(--radius-full)] font-mono text-[13px] uppercase tracking-[0.08em]"
                  style={{ background: "var(--lime-400)", color: "var(--green-950)" }}
                >
                  Configure ►
                </Link>
              </div>
            </div>
          </BracketFrame>
        </main>
      </div>
    </div>
  );
}
