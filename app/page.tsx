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
import { LiveTransactions } from "@/components/spade/LiveTransactions";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="hatch drift absolute opacity-[0.5]" style={{ top: -80, bottom: -80, left: 0, right: 0 }} aria-hidden />
          <div className="spade-wrap relative py-28 md:py-40">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
              <div className="rise">
                <h1
                  className="font-display leading-[0.96] tracking-[-0.02em]"
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
                  Spade is a neobank for operators. Accounts, corporate cards, payments and treasury.
                  One ledger, measured and readable in real time or over the API.
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
                    $2,418,930<span style={{ color: "var(--text-muted)" }}>.04</span>
                  </div>
                  <div className="mt-5">
                    <DataField label="OPERATING" value="$1,902,440.18" />
                    <DataField label="TREASURY (4.32% APY)" value="$480,000.00" />
                    <DataField label="CARDS OUTSTANDING" value="−$36,489.86" />
                    <DataField label="SETTLING T+1" value="$72,980.72" />
                  </div>
                  <div
                    className="hatch--dark mt-6 rounded-[var(--radius-spade)] p-4 flex items-center justify-between"
                    style={{ background: "var(--surface-terminal)", color: "var(--paper)" }}
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
                {/* Animated coin price chips */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {HERO_COINS.map((c, i) => (
                    <div
                      key={c.symbol}
                      style={{
                        animation: "coin-float 5s ease-in-out infinite",
                        animationDelay: `${-i * 1.8}s`,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        padding: "10px 12px",
                        borderRadius: "var(--radius-spade)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "color-mix(in srgb, var(--green-950) 88%, transparent)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.color, flexShrink: 0, display: "inline-block" }} />
                        <span style={{ fontSize: 10, letterSpacing: "0.08em", color: "rgba(244,250,238,0.5)" }}>{c.symbol}</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--paper)", lineHeight: 1.1 }}>{c.price}</div>
                      <div style={{ fontSize: 10, color: c.pos ? "#4ade80" : "#f87171" }}>
                        {c.pos ? "▲" : "▼"} {c.change}
                      </div>
                    </div>
                  ))}
                </div>
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

        {/* ── Live markets — coins + ledger stream ─────── */}
        <section style={{ background: "var(--surface-terminal)", borderTop: "1px solid rgba(180,239,110,0.12)" }}>
          <div className="spade-wrap py-16">
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span className="price-pulse" style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "var(--lime-400)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "rgba(244,250,238,0.5)", textTransform: "uppercase" }}>
                  Live Markets
                </span>
              </div>
              <h2
                className="font-display tracking-[-0.02em]"
                style={{ fontSize: "var(--type-display)", fontWeight: 800, color: "var(--paper)" }}
              >
                Crypto rails, on the ledger.
              </h2>
              <p className="mt-4 max-w-lg text-[17px] leading-relaxed" style={{ color: "var(--green-400)" }}>
                Spade accounts settle across crypto and fiat rails. Every coin and wire lands on one instrumented ledger.
              </p>
            </Reveal>
            <div className="mt-12 grid lg:grid-cols-[1fr_340px] gap-6 items-start">
              <div className="grid sm:grid-cols-3 gap-4">
                {MARKET_COINS.map(coin => (
                  <CoinCard key={coin.symbol} coin={coin} />
                ))}
              </div>
              <LiveTransactions />
            </div>
          </div>
        </section>

        {/* ── Product / bento grid ───────────────────────── */}
        <section id="product" className="spade-wrap py-24">
          <Reveal>
            <Eyebrow>WHAT YOU OPERATE</Eyebrow>
            <h2 className="font-display mt-5 max-w-2xl tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800 }}>
              One ledger. Every money movement, bracketed.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-6 md:auto-rows-fr">
            {/* f0 — wide */}
            <Reveal className="md:col-span-4" delay={0}>
              <FeatureTile f={FEATURES[0]} />
            </Reveal>
            {/* f1 */}
            <Reveal className="md:col-span-2" delay={80}>
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
                    Every cent, on one ledger.
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
              <Eyebrow>HOW IT WORKS</Eyebrow>
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
                    className="p-8 md:p-12 rounded-[var(--radius-spade-panel)] overflow-hidden relative"
                    style={{
                      background: s.dark ? "var(--green-950)" : "var(--surface-card)",
                      color: s.dark ? "var(--paper)" : "var(--green-950)",
                      boxShadow: "var(--shadow-lg)",
                    }}
                  >
                    {s.dark && <div className="hatch--dark absolute inset-0 opacity-30" aria-hidden />}
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
              <div className="self-center">
                <Reveal variant="up">
                  <div
                    className="font-display tracking-[-0.03em] leading-none"
                    style={{ fontSize: "clamp(64px,8vw,96px)", fontWeight: 800, color: "var(--lime-400)" }}
                  >
                    4.32%
                  </div>
                  <div style={{ color: "var(--paper)", fontSize: 18, fontWeight: 600, marginTop: 10 }}>
                    APY on idle cash
                  </div>
                  <p style={{ color: "var(--green-400)", fontSize: 15, marginTop: 6, maxWidth: 340, lineHeight: 1.65 }}>
                    Accrued per second and posted daily. Pull it back the moment payroll runs.
                  </p>
                </Reveal>
                <div className="mt-10 flex gap-12">
                  <Reveal variant="up" delay={90}>
                    <Stat inverse value="T+0" label="► DOMESTIC" sub="Instant rails" />
                  </Reveal>
                  <Reveal variant="up" delay={180}>
                    <Stat inverse value="$0" label="► MONTHLY FEE" sub="No minimums" />
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Developers terminal block ──────────────────── */}
        <section id="developers" className="spade-wrap py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <Reveal variant="left">
              <Eyebrow>PAYMENTS API</Eyebrow>
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
        <section className="spade-wrap pb-16">
          <Reveal variant="scale">
            <BracketFrame
              interactive
              className="rounded-[var(--radius-spade-panel)] p-10 md:p-16 text-center"
              style={{ background: "var(--paper)", border: "1px solid var(--line)", boxShadow: "var(--shadow-card)" }}
            >
              <h2 className="font-display mx-auto max-w-2xl tracking-[-0.02em]" style={{ fontSize: "var(--type-display)", fontWeight: 800 }}>
                Open a business account in minutes.
              </h2>
              <p className="mt-4 mx-auto max-w-md text-[17px]" style={{ color: "var(--text-muted)" }}>
                One KYB check, then you're live. Verify, fund, and start moving money the same day.
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
      className="h-full p-8 md:p-10 rounded-[var(--radius-spade-panel)] flex flex-col"
      style={{ background: "var(--surface-card)", boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-start justify-between">
        <span
          className="grid place-items-center rounded-[var(--radius-spade)]"
          style={{ width: 44, height: 44, background: "var(--surface-card)", border: "1px solid var(--line)" }}
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

/* ---- Coin market card (sparkline + price) ---- */
function CoinCard({ coin }: { coin: (typeof MARKET_COINS)[number] }) {
  const polyPoints = `0,44 ${coin.spark} 120,44`;
  const gradId = `spark-${coin.symbol.toLowerCase()}`;
  return (
    <div
      style={{
        background: "rgba(20,28,14,0.7)",
        border: "1px solid rgba(180,239,110,0.12)",
        borderRadius: "var(--radius-spade-panel)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: coin.color, display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "rgba(244,250,238,0.5)", textTransform: "uppercase" as const }}>
            {coin.symbol}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            color: coin.pos ? "#4ade80" : "#f87171",
            background: coin.pos ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
            padding: "2px 7px",
            borderRadius: 100,
          }}
        >
          {coin.pos ? "▲" : "▼"} {coin.change}
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: "var(--paper)", letterSpacing: "-0.02em" }}>
        {coin.price}
      </div>
      <svg viewBox="0 0 120 44" style={{ width: "100%", height: 44 }} preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={coin.pos ? "#4ade80" : "#f87171"} stopOpacity="0.3" />
            <stop offset="100%" stopColor={coin.pos ? "#4ade80" : "#f87171"} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={polyPoints} fill={`url(#${gradId})`} />
        <polyline
          points={coin.spark}
          fill="none"
          stroke={coin.pos ? "#4ade80" : "#f87171"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ display: "flex", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", color: "rgba(244,250,238,0.35)", marginBottom: 2 }}>MCap</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(244,250,238,0.7)", fontWeight: 600 }}>{coin.mcap}</div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em", color: "rgba(244,250,238,0.35)", marginBottom: 2 }}>24h Vol</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(244,250,238,0.7)", fontWeight: 600 }}>{coin.vol}</div>
        </div>
      </div>
    </div>
  );
}

const TRUST = ["Northwind", "Atlas Freight", "Meridian", "Glasshaus", "Vector Labs", "Cobalt", "Driftwood"];

const HERO_COINS = [
  { symbol: "BTC", price: "$67,234", change: "+2.41%", pos: true,  color: "#f7931a" },
  { symbol: "ETH", price: "$3,489",  change: "−0.83%", pos: false, color: "#627eea" },
  { symbol: "SOL", price: "$142.50", change: "+5.20%", pos: true,  color: "#9945ff" },
];

const MARKET_COINS = [
  {
    symbol: "BTC", name: "Bitcoin",  price: "$67,234.12", change: "+2.41%", pos: true,  color: "#f7931a",
    mcap: "$1.32T",  vol: "$28.7B",
    spark: "0,38 10,35 20,33 30,30 40,28 50,26 60,24 70,22 80,18 90,15 100,10 110,8 120,6",
  },
  {
    symbol: "ETH", name: "Ethereum", price: "$3,489.50",  change: "−0.83%", pos: false, color: "#627eea",
    mcap: "$419.2B", vol: "$12.4B",
    spark: "0,12 10,10 20,14 30,11 40,16 50,14 60,18 70,16 80,15 90,18 100,22 110,20 120,24",
  },
  {
    symbol: "SOL", name: "Solana",   price: "$142.50",    change: "+5.20%", pos: true,  color: "#9945ff",
    mcap: "$63.8B",  vol: "$4.2B",
    spark: "0,40 10,38 20,35 30,36 40,30 50,26 60,24 70,20 80,16 90,12 100,8 110,6 120,4",
  },
];

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
    body: "Submit your entity once. We verify against partner-bank KYB in real time. Approved same day, funded the same afternoon.",
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
    body: "Every authorization, transfer and sweep streams to one ledger, bracketed and measured in real time or over the API.",
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
