import { Nav } from "@/components/spade/Nav";
import { Footer } from "@/components/spade/Footer";
import {
  BracketFrame,
  MonoLabel,
  DataField,
  Badge,
  Button,
  ButtonLink,
  GhostLink,
  Stat,
  Eyebrow,
} from "@/components/spade/ui";

/* ── Token tables ──────────────────────────────────── */
const COLORS = [
  { name: "Ink / green-950", v: "#18280E", varName: "--green-950" },
  { name: "Green-700", v: "#3c5230", varName: "--green-700" },
  { name: "Green-400", v: "#8a9a7d", varName: "--green-400" },
  { name: "Lime-400 · accent", v: "#B4EF6E", varName: "--lime-400" },
  { name: "Lime-600", v: "#82c23a", varName: "--lime-600" },
  { name: "Paper", v: "#F4FAEE", varName: "--paper" },
  { name: "Paper-200", v: "#e7efdb", varName: "--paper-200" },
  { name: "White", v: "#FFFFFF", varName: "--white" },
];

const CATS = ["risk", "rewards", "analytics", "experience", "developers"] as const;

const TYPE = [
  { label: "HERO", cls: "text-[clamp(40px,5vw,68px)]", w: 800, sample: "Instrument", note: "Archivo Expanded · clamp(48–92px)" },
  { label: "DISPLAY", cls: "text-[40px]", w: 800, sample: "Business banking", note: "Archivo Expanded · 40px" },
  { label: "TITLE", cls: "text-[26px]", w: 700, sample: "Auto-sweep treasury", note: "Archivo · 26px" },
  { label: "BODY", cls: "text-[16px] font-sans", w: 400, sample: "One ledger, read in real time.", note: "Archivo · 16px" },
];

export default function DesignSystemPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Header */}
        <section className="spade-wrap pt-16 pb-12">
          <Eyebrow index="// REF">► SPADE DESIGN SYSTEM</Eyebrow>
          <h1 className="font-display mt-5 max-w-3xl text-[clamp(40px,6vw,80px)] tracking-[-0.02em] leading-[0.98]" style={{ fontWeight: 800 }}>
            The system behind the
            <span style={{ position: "relative", whiteSpace: "nowrap", marginLeft: "0.2em" }}>
              instrument
              <span style={{ position: "absolute", left: 0, right: 0, bottom: "0.08em", height: "0.26em", background: "var(--lime-400)", zIndex: -1 }} />
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Tokens, type and components — the same primitives that build the Spade landing page, login and
            dashboard. Sentence-case prose, mono labels for the technical voice, brackets over shadows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/" variant="secondary">Back to landing</ButtonLink>
            <ButtonLink href="/dashboard" variant="inverse">View dashboard</ButtonLink>
          </div>
        </section>

        {/* Colours */}
        <Section index="// 01" title="Colour tokens" sub="Forest-green ink on pale-green paper, a single chartreuse accent.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COLORS.map((c) => (
              <BracketFrame key={c.varName} className="p-4 rounded-[var(--radius-spade-panel)]" style={{ background: "var(--white)" }}>
                <div className="h-20 rounded-[var(--radius-spade)]" style={{ background: c.v, border: "1px solid var(--line)" }} />
                <div className="mt-3 font-medium text-[14px]">{c.name}</div>
                <div className="mt-1 flex items-center justify-between font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>
                  <span>{c.varName}</span>
                  <span>{c.v.toUpperCase()}</span>
                </div>
              </BracketFrame>
            ))}
          </div>
        </Section>

        {/* Type */}
        <Section index="// 02" title="Typography" sub="Archivo Expanded for display, Archivo for prose, JetBrains Mono for the technical voice.">
          <div className="space-y-px rounded-[var(--radius-spade-panel)] overflow-hidden" style={{ border: "1px solid var(--line)" }}>
            {TYPE.map((t) => (
              <div key={t.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 px-6 py-6" style={{ background: "var(--white)", borderTop: "1px solid var(--line)" }}>
                <MonoLabel className="sm:w-28 shrink-0">{t.label}</MonoLabel>
                <div className="flex-1 min-w-0">
                  <div className={t.cls} style={{ fontFamily: t.label === "BODY" ? "var(--font-sans)" : "var(--font-display)", fontWeight: t.w, letterSpacing: "-0.02em" }}>
                    {t.sample}
                  </div>
                  <div className="mt-1 font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>{t.note}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons */}
        <Section index="// 03" title="Buttons & links" sub="Pill geometry, mono uppercase labels, a 1px lift on hover.">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="inverse">Inverse</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <GhostLink href="/design-system">Ghost link</GhostLink>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button variant="inverse" size="sm">Small</Button>
            <Button variant="inverse" size="md">Medium</Button>
            <Button variant="inverse" size="lg">Large</Button>
          </div>
        </Section>

        {/* Badges */}
        <Section index="// 04" title="Category badges" sub="Five operating domains, each with a reserved hue.">
          <div className="flex flex-wrap gap-3">
            {CATS.map((c) => (
              <Badge key={c} cat={c}>{c}</Badge>
            ))}
          </div>
        </Section>

        {/* Data + brackets */}
        <Section index="// 05" title="Data fields & frames" sub="The ►LABEL / value chip and the corner-bracket terminal frame.">
          <div className="grid gap-6 md:grid-cols-2">
            <BracketFrame className="p-6 rounded-[var(--radius-spade-panel)]" style={{ background: "var(--white)" }}>
              <MonoLabel marker>► ACCOUNT · USD</MonoLabel>
              <div className="mt-4">
                <DataField label="AVAILABLE" value="$1,840,204.55" />
                <DataField label="PENDING" value="$12,418.02" />
                <DataField label="APY" value="4.32%" />
                <DataField label="ROUTING" value="•••• 4021" />
              </div>
            </BracketFrame>
            <BracketFrame inverse className="p-6 rounded-[var(--radius-spade-panel)]" style={{ background: "var(--green-950)", color: "var(--paper)" }}>
              <MonoLabel style={{ color: "var(--line-inverse-strong)" }}>► INVERSE FRAME</MonoLabel>
              <div className="mt-4">
                <DataField inverse label="SWEPT" value="$512,000.00" />
                <DataField inverse label="YIELD · 30D" value="$1,842.66" />
                <DataField inverse label="UPTIME" value="99.99%" />
                <DataField inverse label="LATENCY" value="T+0" />
              </div>
            </BracketFrame>
          </div>
        </Section>

        {/* Stats */}
        <Section index="// 06" title="Stat blocks" sub="Big display numerals over a mono caption.">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Stat value="4.32%" label="// APY" sub="auto-sweep treasury" />
            <Stat value="T+0" label="// SETTLEMENT" sub="instant rails" />
            <Stat value="$0" label="// WIRE FEES" sub="domestic + intl" />
            <Stat value="99.99%" label="// UPTIME" sub="trailing 90d" />
          </div>
        </Section>

        {/* Textures */}
        <Section index="// 07" title="Textures" sub="Topographic hatch fills used behind hero and treasury panels.">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="hatch h-40 rounded-[var(--radius-spade-panel)]" style={{ border: "1px solid var(--line)" }} />
            <div className="hatch--dark h-40 rounded-[var(--radius-spade-panel)]" />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  index,
  title,
  sub,
  children,
}: {
  index: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section className="spade-wrap py-14" style={{ borderTop: "1px solid var(--line)" }}>
      <Eyebrow index={index}>► {title.toUpperCase()}</Eyebrow>
      <h2 className="font-display mt-4 text-[clamp(26px,3.4vw,40px)] tracking-[-0.02em]" style={{ fontWeight: 800 }}>
        {title}
      </h2>
      <p className="mt-2 max-w-xl text-[16px]" style={{ color: "var(--text-muted)" }}>{sub}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}
