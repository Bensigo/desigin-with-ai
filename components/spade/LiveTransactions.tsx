"use client";
import { useEffect, useRef, useState } from "react";

const ALL = [
  { id: 1, label: "Wire received",    sub: "Sequoia Capital",       amount: "+$2,000,000.00", tag: "WIRE",    pos: true  },
  { id: 2, label: "Card charge",      sub: "AWS · ···4421",         amount: "−$8,491.06",     tag: "CARD",    pos: false },
  { id: 3, label: "Treasury sweep",   sub: "Operating → Treasury",  amount: "+$200,000.00",   tag: "SWEEP",   pos: true  },
  { id: 4, label: "Payroll disbursed",sub: "Operating → Payroll",   amount: "−$72,980.72",    tag: "PAYROLL", pos: false },
  { id: 5, label: "Card charge",      sub: "Stripe · ···7782",      amount: "−$12,350.00",    tag: "CARD",    pos: false },
  { id: 6, label: "Wire received",    sub: "Atlas Freight LLC",     amount: "+$145,000.00",   tag: "WIRE",    pos: true  },
  { id: 7, label: "Auto-sweep",       sub: "Operating → Treasury",  amount: "+$80,000.00",    tag: "SWEEP",   pos: true  },
  { id: 8, label: "API transfer",     sub: "acct_ops → vendor_001", amount: "−$3,200.00",     tag: "API",     pos: false },
];

type Row = (typeof ALL)[number] & { uid: string };

export function LiveTransactions() {
  const [rows, setRows] = useState<Row[]>(() =>
    ALL.slice(0, 4).map((r, i) => ({ ...r, uid: `init-${i}` }))
  );
  const ptrRef = useRef(4);

  useEffect(() => {
    const t = setInterval(() => {
      const p = ptrRef.current++;
      const next = ALL[p % ALL.length];
      setRows(prev => [{ ...next, uid: `${next.id}-${p}` }, ...prev.slice(0, 3)]);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        background: "rgba(20,28,14,0.6)",
        border: "1px solid rgba(180,239,110,0.15)",
        borderRadius: "var(--radius-spade-panel)",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          letterSpacing: "0.1em",
          color: "rgba(244,250,238,0.5)",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          className="price-pulse"
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "var(--lime-400)",
          }}
        />
        LIVE · LEDGER STREAM
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {rows.map((tx, i) => (
          <div
            key={tx.uid}
            className="txn-row"
            style={{
              padding: "10px 12px",
              borderRadius: "var(--radius-spade)",
              border: "1px solid rgba(180,239,110,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              animation: i === 0 ? "tx-slide-in 0.35s ease-out both" : undefined,
              opacity: Math.max(0.35, 1 - i * 0.2),
              transition: "opacity 0.3s ease",
              background: i === 0 ? "rgba(180,239,110,0.05)" : "transparent",
            }}
          >
            <div style={{ minWidth: 0, overflow: "hidden" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--paper)",
                  fontWeight: 600,
                  marginBottom: "2px",
                }}
              >
                {tx.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(244,250,238,0.45)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {tx.sub}
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: tx.pos ? "#4ade80" : "#f87171",
                }}
              >
                {tx.amount}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(180,239,110,0.6)",
                  letterSpacing: "0.08em",
                  marginTop: "2px",
                }}
              >
                {tx.tag}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
