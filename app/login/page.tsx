import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { Logo, BracketFrame, Button, MonoLabel, DataField, Badge } from "@/components/spade/ui";

export default function LoginPage() {
  return (
    <main className="flex-1 grid lg:grid-cols-2">
      {/* ── Left: instrument panel ─────────────────────── */}
      <aside
        className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden"
        style={{ background: "var(--green-950)", color: "var(--paper)" }}
      >
        <div className="hatch--dark absolute inset-0 opacity-60" aria-hidden />
        <div className="relative">
          <div className="[&_*]:!text-[var(--paper)]">
            <Logo inverse />
          </div>
          <MonoLabel className="mt-10" style={{ color: "var(--line-inverse-strong)" }}>
            ► CONSOLE / SECURE SESSION
          </MonoLabel>
          <h1 className="font-display mt-5 max-w-md tracking-[-0.02em]" style={{ fontSize: "44px", fontWeight: 800, color: "var(--paper)" }}>
            Sign in to your instrument.
          </h1>
          <p className="mt-4 max-w-sm text-[16px] leading-relaxed" style={{ color: "var(--green-400)" }}>
            One ledger, read in real time. Pick up exactly where your team left off.
          </p>
        </div>

        <div className="relative">
          <BracketFrame inverse className="p-6 rounded-[var(--radius-spade-panel)]">
            <div className="flex items-center justify-between">
              <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>► WORKSPACE</MonoLabel>
              <Badge cat="rewards">VERIFIED</Badge>
            </div>
            <div className="font-display mt-2 text-[26px]" style={{ fontWeight: 700 }}>
              Northwind Ops
            </div>
            <div className="mt-4">
              <DataField inverse label="LIVE BALANCE" value="$2,418,930.04" />
              <DataField inverse label="SEATS" value="14 active" />
              <DataField inverse label="LAST SESSION" value="2026-06-28 09:14" />
            </div>
          </BracketFrame>
        </div>
      </aside>

      {/* ── Right: form ────────────────────────────────── */}
      <section className="flex flex-col">
        <div className="p-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.1em]"
            style={{ color: "var(--green-700)" }}
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>

        <div className="flex-1 grid place-items-center px-6 pb-16">
          <div className="w-full max-w-sm rise">
            <div className="lg:hidden mb-8">
              <Logo />
            </div>
            <MonoLabel marker>► SIGN IN</MonoLabel>
            <h2 className="font-display mt-4 text-[34px] tracking-[-0.02em]" style={{ fontWeight: 800 }}>
              Welcome back.
            </h2>
            <p className="mt-2 text-[15px]" style={{ color: "var(--text-muted)" }}>
              Enter your credentials to open the console.
            </p>

            <form className="mt-8 space-y-5" action="/dashboard">
              <Field label="WORK EMAIL" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  required
                  defaultValue="ops@northwind.co"
                  placeholder="you@company.com"
                  className="spade-input"
                />
              </Field>

              <Field
                label="PASSWORD"
                htmlFor="password"
                aside={
                  <Link href="/login" className="font-mono text-[11px] tracking-[0.08em]" style={{ color: "var(--lime-600)" }}>
                    FORGOT?
                  </Link>
                }
              >
                <input id="password" type="password" required defaultValue="spade-demo" className="spade-input" />
              </Field>

              <label className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.04em]" style={{ color: "var(--green-700)" }}>
                <input type="checkbox" defaultChecked className="spade-check" />
                Keep this session for 30 days
              </label>

              <Button type="submit" variant="inverse" size="lg" className="w-full">
                <Lock size={16} /> Open console
              </Button>
            </form>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px flex-1" style={{ background: "var(--line)" }} />
              <MonoLabel>OR</MonoLabel>
              <span className="h-px flex-1" style={{ background: "var(--line)" }} />
            </div>

            <Link href="/dashboard">
              <span className="mt-5 flex h-11 items-center justify-center gap-2 rounded-[var(--radius-full)] font-mono text-[13px] uppercase tracking-[0.08em] transition-colors hover:bg-[var(--paper-200)]" style={{ border: "1px solid var(--line-strong)" }}>
                Continue with SSO
              </span>
            </Link>

            <p className="mt-8 text-center font-mono text-[12px] tracking-[0.04em]" style={{ color: "var(--text-muted)" }}>
              No account yet?{" "}
              <Link href="/login" style={{ color: "var(--lime-600)" }}>
                Request access ►
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  htmlFor,
  aside,
  children,
}: {
  label: string;
  htmlFor: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={htmlFor} className="mono-label">
          ► {label}
        </label>
        {aside}
      </div>
      {children}
    </div>
  );
}
