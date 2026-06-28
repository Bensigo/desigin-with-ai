"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────── */
const COINS = [
  {
    rank: 1, symbol: "BTC", name: "Bitcoin",
    price: 67234.12, change24h: 2.41, change7d: 8.73,
    marketCap: 1323.4e9, volume24h: 28.7e9, supply: "19.72M",
    color: "#f7931a",
    spark: "0,35 10,32 20,30 30,28 40,25 50,28 60,22 70,18 80,20 90,15 100,12 110,10 120,8",
  },
  {
    rank: 2, symbol: "ETH", name: "Ethereum",
    price: 3489.50, change24h: -0.83, change7d: 3.21,
    marketCap: 419.2e9, volume24h: 12.4e9, supply: "120.23M",
    color: "#627eea",
    spark: "0,15 10,12 20,18 30,15 40,20 50,18 60,22 70,20 80,18 90,22 100,25 110,22 120,24",
  },
  {
    rank: 3, symbol: "SOL", name: "Solana",
    price: 142.50, change24h: 5.20, change7d: 12.44,
    marketCap: 63.8e9, volume24h: 4.2e9, supply: "447.69M",
    color: "#9945ff",
    spark: "0,38 10,35 20,32 30,35 40,28 50,25 60,22 70,18 80,15 90,12 100,8 110,5 120,3",
  },
  {
    rank: 4, symbol: "BNB", name: "BNB",
    price: 592.40, change24h: 0.63, change7d: -1.44,
    marketCap: 86.3e9, volume24h: 1.8e9, supply: "145.74M",
    color: "#f3ba2f",
    spark: "0,25 10,22 20,20 30,22 40,20 50,22 60,18 70,20 80,18 90,20 100,18 110,17 120,16",
  },
  {
    rank: 5, symbol: "XRP", name: "XRP",
    price: 0.5842, change24h: -1.24, change7d: 2.18,
    marketCap: 32.5e9, volume24h: 1.4e9, supply: "55.68B",
    color: "#346aa9",
    spark: "0,15 10,18 20,15 30,20 40,18 50,22 60,20 70,22 80,25 90,22 100,25 110,22 120,25",
  },
  {
    rank: 6, symbol: "DOGE", name: "Dogecoin",
    price: 0.1234, change24h: 8.72, change7d: 22.41,
    marketCap: 17.2e9, volume24h: 2.1e9, supply: "144.68B",
    color: "#c3a634",
    spark: "0,38 10,35 20,32 30,38 40,35 50,28 60,22 70,18 80,15 90,10 100,6 110,4 120,2",
  },
  {
    rank: 7, symbol: "ADA", name: "Cardano",
    price: 0.4821, change24h: -2.13, change7d: -4.82,
    marketCap: 17.0e9, volume24h: 0.52e9, supply: "35.27B",
    color: "#0d9de2",
    spark: "0,10 10,12 20,15 30,12 40,18 50,15 60,20 70,18 80,22 90,20 100,25 110,22 120,28",
  },
  {
    rank: 8, symbol: "AVAX", name: "Avalanche",
    price: 38.72, change24h: -1.82, change7d: -3.14,
    marketCap: 15.9e9, volume24h: 0.73e9, supply: "411.02M",
    color: "#e84142",
    spark: "0,12 10,15 20,12 30,18 40,15 50,20 60,18 70,22 80,20 90,25 100,22 110,28 120,30",
  },
  {
    rank: 9, symbol: "LINK", name: "Chainlink",
    price: 18.34, change24h: 3.14, change7d: 7.82,
    marketCap: 11.1e9, volume24h: 0.61e9, supply: "608.10M",
    color: "#2a5ada",
    spark: "0,30 10,28 20,25 30,22 40,20 50,22 60,18 70,15 80,18 90,12 100,10 110,8 120,6",
  },
  {
    rank: 10, symbol: "DOT", name: "Polkadot",
    price: 8.14, change24h: -0.72, change7d: -2.41,
    marketCap: 11.0e9, volume24h: 0.38e9, supply: "1.35B",
    color: "#e6007a",
    spark: "0,18 10,20 20,18 30,22 40,20 50,22 60,20 70,22 80,20 90,22 100,20 110,22 120,23",
  },
];

type SortKey = "rank" | "price" | "change24h" | "change7d" | "marketCap" | "volume24h";

/* ─── Helpers ─────────────────────────────────────────────────────── */
function fmtPrice(p: number) {
  if (p >= 10000) return `$${p.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (p >= 1)     return `$${p.toFixed(2)}`;
  return `$${p.toFixed(4)}`;
}
function fmtLarge(n: number) {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9)  return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6)  return `$${(n / 1e6).toFixed(2)}M`;
  return `$${n.toFixed(0)}`;
}

/* ─── Sparkline ───────────────────────────────────────────────────── */
function Sparkline({ points, change, uid, h = 44 }: { points: string; change: number; uid: string; h?: number }) {
  const color = change >= 0 ? "#4ade80" : "#f87171";
  const gid = `sg-${uid}`;
  return (
    <svg viewBox={`0 0 120 ${h}`} width="100%" height={h} preserveAspectRatio="none">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${h} ${points} 120,${h}`} fill={`url(#${gid})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Corner brackets (lime-tinted) ──────────────────────────────── */
function Corners({ color = "rgba(180,239,110,0.4)" }: { color?: string }) {
  const b = `1.5px solid ${color}`;
  const base: React.CSSProperties = { position: "absolute", width: 13, height: 13, pointerEvents: "none" };
  return (
    <>
      <span style={{ ...base, top: 10, left: 10, borderTop: b, borderLeft: b }} />
      <span style={{ ...base, top: 10, right: 10, borderTop: b, borderRight: b }} />
      <span style={{ ...base, bottom: 10, left: 10, borderBottom: b, borderLeft: b }} />
      <span style={{ ...base, bottom: 10, right: 10, borderBottom: b, borderRight: b }} />
    </>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function CryptoPage() {
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortDir, setSortDir] = useState<1 | -1>(1);
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);

  const sorted = useMemo(() => {
    let list = [...COINS];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q));
    }
    return list.sort((a, b) => {
      const av = a[sortKey] as number;
      const bv = b[sortKey] as number;
      return (av < bv ? -1 : av > bv ? 1 : 0) * sortDir;
    });
  }, [sortKey, sortDir, search]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => (d === 1 ? -1 : 1));
    else { setSortKey(key); setSortDir(key === "rank" ? 1 : -1); }
  }

  const featured = COINS.slice(0, 3);
  const BG = "#090d06";
  const CARD = "rgba(18,26,11,0.90)";
  const LIME = "#b4ef6e";
  const BORDER = "rgba(180,239,110,0.12)";
  const TEXT = "#f4faee";
  const MUTED = "rgba(244,250,238,0.40)";
  const FAINT = "rgba(244,250,238,0.22)";

  const POS = "#4ade80";
  const NEG = "#f87171";

  const colGrid = "44px 200px 1fr 90px 90px 148px 148px 100px 76px";

  const TABLE_HEADERS: { label: string; key: SortKey | null }[] = [
    { label: "#", key: "rank" },
    { label: "COIN", key: null },
    { label: "PRICE", key: "price" },
    { label: "24H %", key: "change24h" },
    { label: "7D %", key: "change7d" },
    { label: "MARKET CAP", key: "marketCap" },
    { label: "VOLUME (24H)", key: "volume24h" },
    { label: "CHART", key: null },
    { label: "", key: null },
  ];

  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh", fontFamily: "var(--font-sans)" }}>
      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ticker-inner { animation: scroll 50s linear infinite; display: flex; }
        .ticker-inner:hover { animation-play-state: paused; }
        .coin-card { transition: transform 180ms ease, box-shadow 180ms ease; cursor: pointer; }
        .coin-card:hover { transform: translateY(-3px); }
        .trow { transition: background 120ms ease; cursor: pointer; }
        .trow:hover { background: rgba(180,239,110,0.04) !important; }
        .shd:hover { color: ${LIME}; }
        input::placeholder { color: rgba(244,250,238,0.25); }
        input:focus { outline: none; border-color: rgba(180,239,110,0.4) !important; box-shadow: 0 0 0 3px rgba(180,239,110,0.10); }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.4; } }
        .live-dot { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* ── NAV ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(9,13,6,0.92)", backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(180,239,110,0.12)",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
              <span style={{ width: 30, height: 30, background: LIME, borderRadius: 7, display: "grid", placeItems: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, color: "#090d06" }}>S</span>
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800, letterSpacing: "0.09em", textTransform: "uppercase", color: TEXT }}>SPADE</span>
              <span style={{ color: FAINT, fontSize: 14, margin: "0 2px" }}>/</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: LIME }}>CRYPTO</span>
            </Link>
            <nav style={{ display: "flex", gap: 24 }}>
              {["Markets", "Trade", "Portfolio", "Earn"].map(l => (
                <span key={l} style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, cursor: "pointer" }}>{l}</span>
              ))}
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ position: "relative" }}>
              <input
                style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(180,239,110,0.18)",
                  borderRadius: 8, height: 36, padding: "0 12px 0 34px",
                  fontFamily: "var(--font-mono)", fontSize: 12, color: TEXT, width: 190,
                  transition: "border-color 150ms, box-shadow 150ms",
                }}
                placeholder="Search coins…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: FAINT, fontSize: 13, pointerEvents: "none" }}>⌕</span>
            </div>
            <button style={{
              background: LIME, color: "#090d06", border: "none", borderRadius: 8,
              padding: "0 18px", height: 36, fontFamily: "var(--font-mono)",
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
            }}>
              Trade Now ▶
            </button>
          </div>
        </div>
      </header>

      {/* ── TICKER ── */}
      <div style={{ background: "rgba(180,239,110,0.025)", borderBottom: "1px solid rgba(180,239,110,0.08)", overflow: "hidden" }}>
        <div className="ticker-inner" style={{ whiteSpace: "nowrap", padding: "7px 0" }}>
          {[...COINS, ...COINS].map((c, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "0 22px", borderRight: "1px solid rgba(180,239,110,0.07)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: LIME, letterSpacing: "0.06em" }}>{c.symbol}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: TEXT }}>{fmtPrice(c.price)}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: c.change24h >= 0 ? POS : NEG }}>
                {c.change24h >= 0 ? "▲" : "▼"} {Math.abs(c.change24h).toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 32px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 48, marginBottom: 56 }}>

          {/* Left: headline */}
          <div style={{ flex: "0 0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <span className="live-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: POS, display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: POS }}>
                LIVE MARKETS · JUNE 2026
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 800, lineHeight: 1.02, margin: "0 0 20px", letterSpacing: "-0.02em", color: TEXT }}>
              Crypto<br />
              <span style={{ color: LIME }}>Markets</span>
            </h1>
            <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.65, maxWidth: 340, margin: 0 }}>
              Real-time prices, sparklines, and micro-data across the top digital assets — all in one terminal.
            </p>
          </div>

          {/* Right: global stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flexShrink: 0 }}>
            {[
              { label: "Global Market Cap", value: "$2.67T", sub: "+1.2% · 24h", pos: true },
              { label: "24h Trading Volume", value: "$94.3B", sub: "−3.8% · 24h", pos: false },
              { label: "BTC Dominance", value: "49.4%", sub: "+0.2% share", pos: true },
              { label: "Active Assets", value: "10,847", sub: "across 542 exchanges", pos: null },
            ].map((s) => (
              <div key={s.label} style={{
                background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12,
                padding: "14px 18px", minWidth: 170,
              }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: FAINT, marginBottom: 7 }}>{s.label}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 700, color: TEXT, letterSpacing: "-0.01em" }}>{s.value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: s.pos === true ? POS : s.pos === false ? NEG : MUTED, marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEATURED COINS ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: FAINT }}>[FEATURED ASSETS]</span>
          <span style={{ flex: 1, height: 1, background: "rgba(180,239,110,0.08)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: FAINT }}>TOP 3 BY MARKET CAP</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 56 }}>
          {featured.map(coin => {
            const isUp = coin.change24h >= 0;
            return (
              <div
                key={coin.symbol}
                className="coin-card"
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 16,
                  padding: "24px",
                  position: "relative",
                  boxShadow: hovered === coin.symbol
                    ? `0 8px 40px ${coin.color}18, 0 0 0 1px ${coin.color}30`
                    : "none",
                  transition: "box-shadow 200ms ease, transform 180ms ease",
                }}
                onMouseEnter={() => setHovered(coin.symbol)}
                onMouseLeave={() => setHovered(null)}
              >
                <Corners color={`${coin.color}55`} />

                {/* header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 10,
                      background: `${coin.color}18`, border: `1.5px solid ${coin.color}44`,
                      display: "grid", placeItems: "center", flexShrink: 0,
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: coin.color, letterSpacing: "0.04em" }}>
                        {coin.symbol.slice(0, 4)}
                      </span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: FAINT }}>
                        [{coin.symbol}]
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: TEXT, marginTop: 2 }}>{coin.name}</div>
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: FAINT }}>#{coin.rank}</span>
                </div>

                {/* price */}
                <div style={{ marginBottom: 4 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 30, fontWeight: 700, color: TEXT, letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {fmtPrice(coin.price)}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: isUp ? POS : NEG }}>
                      {isUp ? "▲" : "▼"} {Math.abs(coin.change24h).toFixed(2)}%
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: FAINT, letterSpacing: "0.1em" }}>24H</span>
                    <span style={{ width: 1, height: 12, background: FAINT }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: coin.change7d >= 0 ? POS : NEG }}>
                      {coin.change7d >= 0 ? "+" : ""}{coin.change7d.toFixed(2)}%
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: FAINT, letterSpacing: "0.1em" }}>7D</span>
                  </div>
                </div>

                {/* sparkline */}
                <div style={{ margin: "16px -4px 0", height: 52 }}>
                  <Sparkline points={coin.spark} change={coin.change24h} uid={`feat-${coin.symbol}`} h={52} />
                </div>

                {/* micro-data */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0, paddingTop: 14, borderTop: "1px solid rgba(180,239,110,0.07)", marginTop: 14 }}>
                  {[
                    { label: "MKTCAP", value: fmtLarge(coin.marketCap) },
                    { label: "VOL 24H", value: fmtLarge(coin.volume24h) },
                    { label: "SUPPLY", value: coin.supply },
                  ].map(m => (
                    <div key={m.label}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: FAINT, marginBottom: 4 }}>{m.label}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 500, color: "rgba(244,250,238,0.72)" }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MARKET TABLE ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: FAINT }}>[ALL MARKETS]</span>
          <span style={{ flex: 1, height: 1, background: "rgba(180,239,110,0.08)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: FAINT }}>{sorted.length} assets</span>
        </div>

        <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, overflow: "hidden", marginBottom: 80 }}>
          {/* header */}
          <div style={{
            display: "grid", gridTemplateColumns: colGrid,
            padding: "11px 20px", alignItems: "center",
            borderBottom: "1px solid rgba(180,239,110,0.09)",
            background: "rgba(180,239,110,0.03)",
          }}>
            {TABLE_HEADERS.map(h => (
              <div
                key={h.label || "action"}
                className={h.key ? "shd" : ""}
                onClick={() => h.key && toggleSort(h.key)}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: sortKey === h.key ? LIME : FAINT,
                  cursor: h.key ? "pointer" : "default",
                  userSelect: "none",
                  transition: "color 120ms",
                }}
              >
                {h.label}{sortKey === h.key ? (sortDir === 1 ? " ▲" : " ▼") : ""}
              </div>
            ))}
          </div>

          {/* rows */}
          {sorted.map((coin, idx) => (
            <div
              key={coin.symbol}
              className="trow"
              style={{
                display: "grid", gridTemplateColumns: colGrid,
                padding: "13px 20px", alignItems: "center",
                borderBottom: idx < sorted.length - 1 ? "1px solid rgba(180,239,110,0.06)" : "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: FAINT }}>{coin.rank}</div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                  background: `${coin.color}18`, border: `1px solid ${coin.color}33`,
                  display: "grid", placeItems: "center",
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: coin.color }}>
                    {coin.symbol.slice(0, 4)}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{coin.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: FAINT, letterSpacing: "0.06em", marginTop: 1 }}>{coin.symbol}</div>
                </div>
              </div>

              <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: TEXT }}>{fmtPrice(coin.price)}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: coin.change24h >= 0 ? POS : NEG }}>
                {coin.change24h >= 0 ? "+" : ""}{coin.change24h.toFixed(2)}%
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: coin.change7d >= 0 ? POS : NEG }}>
                {coin.change7d >= 0 ? "+" : ""}{coin.change7d.toFixed(2)}%
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(244,250,238,0.65)" }}>{fmtLarge(coin.marketCap)}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(244,250,238,0.65)" }}>{fmtLarge(coin.volume24h)}</div>

              <div style={{ width: 88, height: 32 }}>
                <Sparkline points={coin.spark} change={coin.change24h} uid={`tbl-${coin.symbol}`} h={32} />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button style={{
                  background: "rgba(180,239,110,0.10)", border: "1px solid rgba(180,239,110,0.22)",
                  borderRadius: 6, padding: "5px 11px",
                  fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: LIME, cursor: "pointer",
                  transition: "background 120ms",
                }}>TRADE</button>
              </div>
            </div>
          ))}

          {sorted.length === 0 && (
            <div style={{ padding: "40px 20px", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 12, color: FAINT }}>
              No assets match &ldquo;{search}&rdquo;
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(180,239,110,0.08)",
        padding: "28px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 1160, margin: "0 auto",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: FAINT }}>
          © 2026 SPADE CRYPTO · DEMO ONLY · NOT FINANCIAL ADVICE
        </span>
        <Link href="/" style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(180,239,110,0.45)", textDecoration: "none" }}>
          ← BACK TO SPADE
        </Link>
      </footer>
    </div>
  );
}
