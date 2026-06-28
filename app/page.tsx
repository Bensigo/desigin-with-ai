import { ArrowUpRight, Cable, LineChart, ShieldCheck, Wallet } from "lucide-react";
import { Nav } from "@/components/spade/Nav";
import { Footer } from "@/components/spade/Footer";
import { Reveal } from "@/components/spade/Reveal";
import {
  Badge,
  BracketFrame,
  ButtonLink,
  Coin,
  DataField,
  Eyebrow,
  GhostLink,
  MonoLabel,
  Stat,
} from "@/components/spade/ui";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="hatch drift absolute opacity-[0.5]" style={{ top: -80, bottom: -80, left: 0, right: 0 }} aria-hidden />
          <div className="glow-blob" style={{ width: 420, height: 420, top: -120, right: -80 }} aria-hidden />
          <div
            className="glow-blob"
            style={{ width: 280, height: 280, bottom: -100, left: "8%", animationDelay: "-5s" }}
            aria-hidden
          />
          <div className="spade-wrap relative py-20 md:py-28">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
              <div className="rise">
                <Eyebrow index="// 01">BUSINESS BANKING</Eyebrow>
                <h1
                  className="font-display mt-6 leading-[0.96] tracking-[-0.02em]"
                  style={{ fontSize: "var(--type-hero)", fontWeight: 800 }}
                >
                  The account that
                  <br />
                  reads like an
                  <br />
                  <span className="relative inline-block">
                    instrument
                    <span
                      className="absolute left-0 -bottom-1 h-3 w-full -z-10"
                      style={{ background: "var(--lime-400)" }}
                      aria-hidden
                    />
                  </span>
                  .
                </h1>
                <p className="mt-7 max-w-lg text-[var(--type-lead)] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Spade is a neobank for operators. Accounts, corporate cards, payments and treasury
                  on one ledger — measured, bracketed and read in real time. No dashboards full of
                  noise. Just the numbers, instrumented.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/login" variant="primary" size="lg">
                    Open an account
                  </ButtonLink>
                  <ButtonLink href="/design-system" variant="secondary" size="lg">
                    View the design system
                  </ButtonLink>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                  <MonoLabel marker>NO MONTHLY FEES</MonoLabel>
                  <MonoLabel marker>USD · EUR · GBP ACCOUNTS</MonoLabel>
                  <MonoLabel marker>FDIC PARTNER BANKS</MonoLabel>
                </div>
              </div>

              {/* Instrument card */}
              <div className="rise drift-rev" style={{ animationDelay: "120ms" }}>
                <BracketFrame
                  interactive
                  className="p-6 rounded-[var(--radius-spade-panel)]"
                  style={{ background: "var(--surface-card)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center justify-between">
                    <MonoLabel>► LIVE BALANCE</MonoLabel>
                    <Badge cat="rewards">ACTIVE</Badge>
                  </div>
                  <div
                    className="font-display mt-3 tracking-[-0.02em]"
                    style={{ fontSize: "44px", fontWeight: 800 }}
                  >
                    $2,418,930<span style={{ color: "var(--green-400)" }}>.04</span>
                  </div>
                  <div className="mt-5">
                    <DataField label="OPERATING" value="$1,902,440.18" />
                    <DataField label="TREASURY (4.32% APY)" value="$480,000.00" />
                    <DataField label="CARDS OUTSTANDING" value="−$36,489.86" />
                    <DataField label="SETTLING T+1" value="$72,980.72" />
                  </div>
                  <div
                    className="hatch--dark mt-6 rounded-[var(--radius-spade)] p-4 flex items-center justify-between"
                    style={{ color: "var(--paper)" }}
                  >
                    <div>
                      <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>► 30D NET FLOW</MonoLabel>
                      <div className="font-display text-[22px]" style={{ fontWeight: 700 }}>
                        +$214,302
                      </div>
                    </div>
                    <LineChart size={40} style={{ color: "var(--lime-400)" }} strokeWidth={1.5} />
                  </div>
                </BracketFrame>
              </div>
            </div>
          </div>
        </section>

        {/* ── Logo / trust strip — infinite marquee ──────── */}
        <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="spade-wrap py-7 flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
            <MonoLabel className="shrink-0">► TRUSTED BY 4,200+ OPERATING TEAMS</MonoLabel>
            <div className="marquee flex-1">
              <div className="marquee__track gap-x-10 font-display text-[18px]" style={{ color: "var(--green-700)", fontWeight: 700 }}>
                {[...TRUST, ...TRUST].map((name, i) => (
                  <span key={i} className="inline-flex items-center gap-10">
                    {name}
                    <span style={{ color: "var(--lime-600)" }}>►</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Product / bento grid ───────────────────────── */}
        <section id="product" className="spade-wrap py-24">
          <Reveal>
            <Eyebrow index="// 02">WHAT YOU OPERATE</Eyebrow>
            <h2 className="font-display mt-5 max-w-2xl tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800 }}>
              One ledger. Every money movement, bracketed.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-6 md:auto-rows-fr">
            {/* f0 — wide */}
            <Reveal className="md:col-span-3" delay={0}>
              <FeatureTile f={FEATURES[0]} />
            </Reveal>
            {/* f1 */}
            <Reveal className="md:col-span-3" delay={80}>
              <FeatureTile f={FEATURES[1]} />
            </Reveal>
            {/* accent metric tile — dark */}
            <Reveal className="md:col-span-2" variant="scale" delay={0}>
              <BracketFrame
                interactive
                inverse
                className="h-full p-8 rounded-[var(--radius-spade-panel)] overflow-hidden relative flex flex-col justify-between"
                style={{ background: "var(--green-950)", color: "var(--paper)" }}
              >
                <div className="hatch--dark absolute inset-0 opacity-40" aria-hidden />
                <div className="relative flex items-start justify-between gap-4">
                  <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>► SETTLED · 30D</MonoLabel>
                  <Coin className="shrink-0 -mt-1" />
                </div>
                <div className="relative">
                  <div className="font-display text-[clamp(36px,4vw,52px)] leading-none" style={{ fontWeight: 800 }}>
                    $1.2B
                  </div>
                  <p className="mt-3 text-[14px]" style={{ color: "var(--green-400)" }}>
                    moved across Spade rails last month — every cent on one ledger.
                  </p>
                </div>
              </BracketFrame>
            </Reveal>
            {/* f2 — wide */}
            <Reveal className="md:col-span-4" delay={80}>
              <FeatureTile f={FEATURES[2]} />
            </Reveal>
            {/* f3 — full-width finale */}
            <Reveal className="md:col-span-6" delay={0}>
              <BracketFrame
                interactive
                className="h-full p-8 md:p-10 rounded-[var(--radius-spade-panel)] grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center"
                style={{ background: "var(--surface-card)" }}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className="grid place-items-center rounded-[var(--radius-spade)]"
                      style={{ width: 44, height: 44, background: "var(--surface-page)", border: "1px solid var(--line)" }}
                    >
                      <Cable size={20} strokeWidth={1.6} style={{ color: "var(--green-950)" }} />
                    </span>
                    <Badge cat="developers">{FEATURES[3].tag}</Badge>
                  </div>
                  <h3 className="font-display mt-6 text-[26px] tracking-[-0.01em]" style={{ fontWeight: 700 }}>
                    {FEATURES[3].title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[16px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {FEATURES[3].body}
                  </p>
                  <div className="mt-6">
                    <GhostLink href="/dashboard">{FEATURES[3].cta}</GhostLink>
                  </div>
                </div>
                <div className="font-mono text-[12px] leading-[1.9] rounded-[var(--radius-spade)] p-5" style={{ background: "var(--surface-terminal)", color: "var(--paper)" }}>
                  <div style={{ color: "var(--line-inverse-strong)" }}>► transfers.create</div>
                  <div className="mt-1">
                    <span style={{ color: "var(--lime-400)" }}>200</span> OK · idempotent
                  </div>
                  <div className="cursor">amount: 72_980_72</div>
                </div>
              </BracketFrame>
            </Reveal>
          </div>
        </section>

        {/* ── How it works — sticky scroll-stacking deck ─── */}
        <section style={{ borderTop: "1px solid var(--line)", background: "var(--surface-page)" }}>
          <div className="spade-wrap py-24">
            <Reveal>
              <Eyebrow index="// 03">HOW IT WORKS</Eyebrow>
              <h2 className="font-display mt-5 max-w-2xl tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800 }}>
                Three moves from signup to settled.
              </h2>
            </Reveal>
            <div className="mt-12 space-y-6">
              {STEPS.map((s, i) => (
                <div key={s.n} className="sticky" style={{ top: `${96 + i * 18}px` }}>
                  <BracketFrame
                    interactive
                    inverse={s.dark}
                    className="p-8 md:p-12 rounded-[var(--radius-spade-panel)] overflow-hidden relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12"
                    style={{
                      background: s.dark ? "var(--green-950)" : "var(--surface-card)",
                      color: s.dark ? "var(--paper)" : "var(--green-950)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    {s.dark && <div className="hatch--dark absolute inset-0 opacity-30" aria-hidden />}
                    <div
                      className="relative font-display leading-none"
                      style={{ fontSize: "clamp(60px,9vw,120px)", fontWeight: 800, color: s.dark ? "var(--lime-400)" : "var(--lime-500)" }}
                    >
                      {s.n}
                    </div>
                    <div className="relative">
                      <MonoLabel marker style={s.dark ? { color: "var(--line-inverse-strong)" } : undefined}>
                        {s.label}
                      </MonoLabel>
                      <h3 className="font-display mt-3 text-[clamp(24px,3vw,34px)] tracking-[-0.02em]" style={{ fontWeight: 700, color: s.dark ? "var(--paper)" : "var(--green-950)" }}>
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-[17px] leading-relaxed" style={{ color: s.dark ? "var(--green-400)" : "var(--text-muted)" }}>
                        {s.body}
                      </p>
                    </div>
                  </BracketFrame>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Treasury / stats band ──────────────────────── */}
        <section id="treasury" style={{ background: "var(--green-950)", color: "var(--paper)" }}>
          <div className="spade-wrap py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
              <Reveal variant="left">
                <Eyebrow index="// 04">TREASURY, INSTRUMENTED</Eyebrow>
                <h2 className="font-display mt-5 tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800, color: "var(--paper)" }}>
                  Idle cash should earn at the speed of your ops.
                </h2>
                <p className="mt-6 max-w-md text-[17px] leading-relaxed" style={{ color: "var(--green-400)" }}>
                  Sweep operating balance into treasury automatically. Watch yield accrue per second,
                  not per statement. Pull it back the moment payroll runs.
                </p>
                <div className="mt-8">
                  <ButtonLink href="/dashboard" variant="primary" size="md">
                    See the dashboard
                  </ButtonLink>
                </div>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12 self-center">
                {TREASURY_STATS.map((st, i) => (
                  <Reveal key={st.label} variant="up" delay={i * 90}>
                    <Stat inverse value={st.value} label={st.label} sub={st.sub} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Developers terminal block ──────────────────── */}
        <section id="developers" className="spade-wrap py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal variant="left">
              <Eyebrow index="// 05">PAYMENTS API</Eyebrow>
              <h2 className="font-display mt-5 tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800 }}>
                Move money in nine lines.
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Every Spade account is API-first. Idempotent transfers, typed webhooks, and a sandbox
                that mirrors production to the cent.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/design-system" variant="secondary" size="md">
                  Read the design system
                </ButtonLink>
                <GhostLink href="/dashboard">Explore API logs</GhostLink>
              </div>
            </Reveal>
            <Reveal variant="right">
              <BracketFrame
                interactive
                inverse
                className="rounded-[var(--radius-spade-panel)] overflow-hidden"
                style={{ background: "var(--surface-terminal)" }}
              >
                <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid var(--line-inverse)" }}>
                  <span style={{ width: 9, height: 9, borderRadius: 999, background: "var(--cat-risk)" }} />
                  <span style={{ width: 9, height: 9, borderRadius: 999, background: "var(--cat-experience)" }} />
                  <span style={{ width: 9, height: 9, borderRadius: 999, background: "var(--lime-400)" }} />
                  <span className="ml-3 font-mono text-[11px] tracking-[0.12em]" style={{ color: "var(--line-inverse-strong)" }}>
                    ► POST /v1/transfers
                  </span>
                </div>
                <pre className="px-5 py-5 font-mono text-[13px] leading-[1.7] overflow-x-auto" style={{ color: "var(--paper)" }}>
                  <code>{API_SNIPPET}</code>
                  <span className="cursor" aria-hidden />
                </pre>
              </BracketFrame>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <section className="spade-wrap pb-24">
          <Reveal variant="scale">
            <BracketFrame
              interactive
              className="sheen rounded-[var(--radius-spade-panel)] p-10 md:p-16 text-center"
              style={{ background: "var(--surface-card)", boxShadow: "var(--shadow-card)" }}
            >
              <MonoLabel marker>► READY WHEN YOU ARE</MonoLabel>
              <h2 className="font-display mt-5 mx-auto max-w-2xl tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800 }}>
                Open a business account in minutes.
              </h2>
              <p className="mt-4 mx-auto max-w-md text-[17px]" style={{ color: "var(--text-muted)" }}>
                No paperwork theatre. Verify, fund, and start moving money the same day.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/login" variant="inverse" size="lg">
                  Get started
                  <ArrowUpRight size={18} />
                </ButtonLink>
                <ButtonLink href="/design-system" variant="ghost" size="lg">
                  Browse the system
                </ButtonLink>
              </div>
            </BracketFrame>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---- Bento feature tile ---- */
function FeatureTile({ f }: { f: (typeof FEATURES)[number] }) {
  return (
    <BracketFrame
      interactive
      className="sheen h-full p-8 md:p-10 rounded-[var(--radius-spade-panel)] flex flex-col"
      style={{ background: "var(--surface-card)" }}
    >
      <div className="flex items-start justify-between">
        <span
          className="grid place-items-center rounded-[var(--radius-spade)]"
          style={{ width: 44, height: 44, background: "var(--surface-page)", border: "1px solid var(--line)" }}
        >
          <f.icon size={20} strokeWidth={1.6} style={{ color: "var(--green-950)" }} />
        </span>
        <Badge cat={f.cat}>{f.tag}</Badge>
      </div>
      <h3 className="font-display mt-6 text-[24px] tracking-[-0.01em]" style={{ fontWeight: 700 }}>
        {f.title}
      </h3>
      <p className="mt-3 text-[16px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {f.body}
      </p>
      <div className="mt-6 mt-auto pt-6">
        <GhostLink href="/dashboard">{f.cta}</GhostLink>
      </div>
    </BracketFrame>
  );
}

const TRUST = ["Northwind", "Atlas Freight", "Meridian", "Glasshaus", "Vector Labs", "Cobalt", "Driftwood"];

const TREASURY_STATS = [
  { value: "4.32%", label: "► TREASURY APY", sub: "Accrued and posted daily" },
  { value: "T+0", label: "► DOMESTIC PAYMENTS", sub: "Instant rails where available" },
  { value: "$0", label: "► MONTHLY ACCOUNT FEE", sub: "No minimums, no tiers" },
  { value: "99.99%", label: "► LEDGER UPTIME", sub: "Trailing 12 months" },
];

const STEPS = [
  {
    n: "01",
    dark: false,
    label: "VERIFY",
    title: "Open the account in minutes.",
    body: "Submit your entity once. We verify against partner-bank KYB in real time — no paperwork theatre, no week-long waits.",
  },
  {
    n: "02",
    dark: true,
    label: "FUND",
    title: "Fund and issue on day one.",
    body: "Wire in, connect an existing bank, or sweep from treasury. Issue virtual cards instantly and physical cards the same week.",
  },
  {
    n: "03",
    dark: false,
    label: "OPERATE",
    title: "Move money, instrumented.",
    body: "Every authorization, transfer and sweep streams to one ledger — bracketed, measured and readable in real time or over the API.",
  },
];

const FEATURES = [
  {
    icon: Wallet,
    tag: "ACCOUNTS",
    cat: "analytics" as const,
    title: "Multi-currency accounts",
    body: "Hold and settle in USD, EUR and GBP from one balance. Local rails, real account numbers, no wallet abstractions.",
    cta: "Open an account",
  },
  {
    icon: ShieldCheck,
    tag: "CARDS",
    cat: "risk" as const,
    title: "Corporate cards with leashes",
    body: "Issue virtual and physical cards with per-merchant, per-period limits. Every authorization streams to the ledger instantly.",
    cta: "Set card controls",
  },
  {
    icon: LineChart,
    tag: "TREASURY",
    cat: "rewards" as const,
    title: "Auto-sweep treasury",
    body: "Earn 4.32% on idle cash with automatic sweeps. Yield accrues per second and posts to the same instrument you operate from.",
    cta: "Configure sweeps",
  },
  {
    icon: Cable,
    tag: "API",
    cat: "developers" as const,
    title: "Programmable money movement",
    body: "Idempotent transfers, typed webhooks and a sandbox that mirrors production. Bank the way you ship — in code.",
    cta: "Read the API",
  },
];

const API_SNIPPET = `import { Spade } from "@spade/sdk";

const spade = new Spade(process.env.SPADE_KEY);

await spade.transfers.create({
  from:   "acct_operating",
  to:     "acct_payroll",
  amount: 72_980_72,        // cents
  currency: "USD",
  idempotencyKey: "run_2026_06_28",
});`;
