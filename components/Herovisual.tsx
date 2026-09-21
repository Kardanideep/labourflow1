// components/HeroVisual.tsx
// LabourFlow hero — simple Before → After transformation.
// Before = scattered floating tools.
// After = one clean connected LabourFlow workspace.
// Responsive: stacked on mobile (Before → After), side-by-side on md+.

const BEFORE_TOOLS = [
  {
    label: "Excel",
    icon: "▦",
    tone: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  },
  {
    label: "WhatsApp",
    icon: "◌",
    tone: "bg-[#F1FFF7] text-[#16855B] ring-emerald-200",
  },
  {
    label: "Email",
    icon: "✉",
    tone: "bg-rose-50 text-rose-700 ring-rose-200",
  },
  {
    label: "Govt Portal",
    icon: "⌂",
    tone: "bg-sky-50 text-sky-800 ring-sky-200",
  },
  {
    label: "Physical Files",
    icon: "▤",
    tone: "bg-violet-50 text-violet-800 ring-violet-200",
  },
];

const AFTER_ITEMS = [
  { label: "Compliance", icon: "✓", tone: "bg-[#DFF4EF] text-[#128276]" },
  { label: "Payroll", icon: "₹", tone: "bg-slate-100 text-[#0B2240]" },
  { label: "Documents", icon: "□", tone: "bg-violet-50 text-violet-600" },
  { label: "Deadlines", icon: "!", tone: "bg-amber-50 text-amber-600" },
];

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .lf-float {
            animation: lf-float 4.5s ease-in-out infinite;
          }

          .lf-float-delay-1 { animation-delay: .35s; }
          .lf-float-delay-2 { animation-delay: .7s; }
          .lf-float-delay-3 { animation-delay: 1.05s; }
          .lf-float-delay-4 { animation-delay: 1.4s; }

          .lf-arrow {
            animation: lf-arrow 2s ease-in-out infinite;
          }

          .lf-dot {
            animation: lf-dot 2s ease-in-out infinite;
          }

          .lf-pulse-ring {
            animation: lf-pulse-ring 2.6s ease-out infinite;
          }

          .lf-pulse-ring-delay {
            animation-delay: 1.3s;
          }

          .lf-flow {
            stroke-dasharray: 4 6;
            animation: lf-flow 1.6s linear infinite;
          }

          .lf-flow-branch {
            stroke-dasharray: 3 5;
            animation: lf-flow 1.6s linear infinite;
          }

          .lf-hub-pulse {
            animation: lf-hub-pulse 1.6s ease-in-out infinite;
          }

          .lf-connect-arrow {
            animation: lf-connect-arrow 1.8s ease-in-out infinite;
          }
        }

        @keyframes lf-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes lf-arrow {
          0%, 100% { transform: translateX(0); opacity: .65; }
          50% { transform: translateX(5px); opacity: 1; }
        }

        @keyframes lf-dot {
          0%, 100% { opacity: .35; }
          50% { opacity: 1; }
        }

        @keyframes lf-pulse-ring {
          0% { transform: scale(.7); opacity: .55; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        @keyframes lf-flow {
          to { stroke-dashoffset: -20; }
        }

        @keyframes lf-hub-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(88, 185, 169, .45);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 6px rgba(88, 185, 169, 0);
          }
        }

        @keyframes lf-connect-arrow {
          0%, 100% { transform: translateX(-4px); opacity: .5; }
          50% { transform: translateX(4px); opacity: 1; }
        }
      `}</style>

      {/* Main transformation area */}
      <div className="relative overflow-hidden rounded-[2rem] bg-[#F7FAFA] p-4 shadow-[0_35px_90px_-40px_rgba(11,34,64,.35)] ring-1 ring-slate-200/80 sm:p-7">
        {/* subtle background decoration */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#DFF4EF]/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-[#E9EEF7]/70 blur-3xl" />

        {/* ============ MOBILE LAYOUT (stacked) ============ */}
        <div className="relative flex flex-col gap-6 md:hidden">
          {/* BEFORE block */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                  Before
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold text-[#0B2240] shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  Scattered work
                </p>
              </div>
            </div>

            {/* Before cards — grid on mobile */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BEFORE_TOOLS.map((tool, index) => (
                <div
                  key={tool.label}
                  className={`lf-float lf-float-delay-${index} ${
                    index % 2 === 0 ? "-rotate-2" : "rotate-2"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] font-bold shadow-[0_12px_30px_-15px_rgba(11,34,64,.45)] ring-1 backdrop-blur-sm sm:text-[11px] ${tool.tone}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/80 text-[11px] shadow-sm">
                      {tool.icon}
                    </span>
                    <span className="truncate">{tool.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connector — Disconnected → Connected (mobile) */}
          <div className="flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-rose-100 bg-white px-2.5 py-1 text-[10px] font-bold text-rose-500 shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)]">
              <span className="lf-dot h-1.5 w-1.5 rounded-full bg-rose-400" />
              Disconnected
            </span>

            <span className="relative mx-1 flex flex-1 items-center">
              <span className="h-px w-full bg-gradient-to-r from-rose-200 via-slate-200 to-[#CDEBE5]" />
              <span className="lf-connect-arrow absolute left-1/2 flex -translate-x-1/2 items-center text-[#128276]">
                <svg
                  width="22"
                  height="10"
                  viewBox="0 0 26 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5 H20 M16 1.5 L20 5 L16 8.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>

            <span className="flex items-center gap-1.5 rounded-full border border-[#CDEBE5] bg-white px-2.5 py-1 text-[10px] font-bold text-[#128276] shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)]">
              <span className="lf-dot h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
              Connected
            </span>
          </div>

          {/* AFTER block */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="text-right w-full">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#128276]">
                  After
                </p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-[#CDEBE5] bg-white px-2.5 py-1 text-[10px] font-bold text-[#0B2240] shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
                  One connected workspace
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center">
              {/* Client card */}
              <div className="w-full max-w-[320px]">
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_-22px_rgba(11,34,64,.4)] ring-1 ring-slate-200">
                  <div className="flex items-center gap-2.5 p-3.5">
                    <div className="relative shrink-0">
                      <span className="lf-pulse-ring absolute inset-0 rounded-xl bg-[#58B9A9]/40" />
                      <span className="lf-pulse-ring lf-pulse-ring-delay absolute inset-0 rounded-xl bg-[#58B9A9]/30" />

                      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFF4EF] text-[12px] font-bold text-[#128276]">
                        AC
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12px] font-bold text-[#0B2240]">
                        ABC Industries
                      </p>
                      <p className="mt-0.5 truncate text-[10px] text-slate-700">
                        Client workspace
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/60">
                    <div className="px-2 py-2.5 text-center">
                      <p className="text-[12px] font-bold text-[#0B2240]">12</p>
                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                        Tasks
                      </p>
                    </div>
                    <div className="px-2 py-2.5 text-center">
                      <p className="text-[12px] font-bold text-[#128276]">
                        100%
                      </p>
                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                        Compliant
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 px-3.5 py-2">
                    <span className="text-[9px] text-slate-600">
                      Compliance status
                    </span>
                    <span className="flex items-center gap-1 text-[9px] font-semibold text-[#128276]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
                      Up to date
                    </span>
                  </div>
                </div>
              </div>

              {/* ===== Tree connector + module grid (mobile) — fully aligned ===== */}
              <div className="relative flex w-full max-w-[340px] flex-col items-center">
                {/* Single animated SVG: trunk + hub + branch bar + drops */}
                <svg
                  className="pointer-events-none h-[84px] w-[74%]"
                  viewBox="0 0 200 84"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* --- static base tree --- */}
                  {/* trunk: card bottom → hub */}
                  <line
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="32"
                    stroke="#CDEBE5"
                    strokeWidth="1"
                  />
                  {/* hub ring (static) */}
                  <circle
                    cx="100"
                    cy="32"
                    r="5"
                    fill="#ffffff"
                    stroke="#CDEBE5"
                    strokeWidth="1.5"
                  />
                  <circle cx="100" cy="32" r="2.5" fill="#58B9A9" />
                  {/* trunk: hub → branch bar */}
                  <line
                    x1="100"
                    y1="37"
                    x2="100"
                    y2="50"
                    stroke="#CDEBE5"
                    strokeWidth="1"
                  />
                  {/* branch bar */}
                  <line
                    x1="6"
                    y1="50"
                    x2="194"
                    y2="50"
                    stroke="#CDEBE5"
                    strokeWidth="1"
                  />
                  {/* drops */}
                  <path
                    d="M6 50 V84"
                    stroke="#CDEBE5"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M194 50 V84"
                    stroke="#CDEBE5"
                    strokeWidth="1"
                    fill="none"
                  />

                  {/* --- animated overlays --- */}
                  {/* animated trunk (card → hub) */}
                  <line
                    className="lf-flow"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="32"
                    stroke="#58B9A9"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* animated trunk (hub → bar) */}
                  <line
                    className="lf-flow"
                    x1="100"
                    y1="37"
                    x2="100"
                    y2="50"
                    stroke="#58B9A9"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  {/* animated left branch */}
                  <path
                    className="lf-flow-branch"
                    style={{ animationDelay: "0s" }}
                    d="M100 50 H6 V84"
                    stroke="#58B9A9"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* animated right branch */}
                  <path
                    className="lf-flow-branch"
                    style={{ animationDelay: ".5s" }}
                    d="M100 50 H194 V84"
                    stroke="#58B9A9"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>

                {/* pulsing hub halo — pinned exactly over SVG hub (cy=32 of 84) */}
                <span
                  className="lf-hub-pulse pointer-events-none absolute left-1/2 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full"
                  style={{ top: "calc(32 / 84 * 84px - 7px)" }}
                >
                  <span className="lf-dot h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
                </span>

                {/* module grid — starts immediately below the drops */}
                <div className="grid w-full grid-cols-2 gap-2">
                  {AFTER_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-xl bg-white px-2.5 py-2.5 shadow-[0_12px_25px_-18px_rgba(11,34,64,.4)] ring-1 ring-slate-200"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${item.tone}`}
                      >
                        {item.icon}
                      </span>
                      <span className="truncate text-[11px] font-semibold text-[#0B2240]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============ DESKTOP LAYOUT (md+) — unchanged ============ */}
        <div className="relative hidden h-[460px] md:block">
          {/* Labels */}
          <div className="absolute left-[4%] top-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Before
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-bold text-[#0B2240] shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Scattered work
            </p>
          </div>

          <div className="absolute right-[5%] top-0 text-right">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#128276]">
              After
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#CDEBE5] bg-white px-2.5 py-1 text-[10px] font-bold text-[#0B2240] shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
              One connected workspace
            </p>
          </div>

          {/* BEFORE — floating cards (desktop) */}
          <div className="absolute inset-0 right-[1%] top-[8%] bottom-[8%] sm:right-[1%]">
            {[
              {
                ...BEFORE_TOOLS[0],
                position: "left-[4%] top-[10%]",
                rotate: "-rotate-3",
              },
              {
                ...BEFORE_TOOLS[1],
                position: "left-[18%] top-[28%]",
                rotate: "rotate-2",
              },
              {
                ...BEFORE_TOOLS[2],
                position: "left-[2%] top-[46%]",
                rotate: "-rotate-2",
              },
              {
                ...BEFORE_TOOLS[3],
                position: "left-[20%] top-[63%]",
                rotate: "rotate-2",
              },
              {
                ...BEFORE_TOOLS[4],
                position: "left-[5%] bottom-[7%]",
                rotate: "-rotate-3",
              },
            ].map((tool, index) => (
              <div
                key={tool.label}
                className={`lf-float lf-float-delay-${index} absolute ${tool.position} ${tool.rotate} z-10`}
              >
                <div
                  className={`flex min-w-[104px] items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] font-bold shadow-[0_12px_30px_-15px_rgba(11,34,64,.45)] ring-1 backdrop-blur-sm sm:min-w-[122px] sm:px-3.5 sm:py-3 sm:text-[11px] ${tool.tone}`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/80 text-xs shadow-sm">
                    {tool.icon}
                  </span>
                  <span>{tool.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER TRANSFORMATION */}
          {/* <div className="absolute lg:left-60 top-[45%] z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:left-65">
            <div className="lf-arrow flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-[#128276] shadow-[0_15px_35px_-18px_rgba(11,34,64,.5)] ring-1 ring-[#CDEBE5]">
              →
            </div>
            <span className="mt-2 rounded-full bg-white/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 shadow-sm ring-1 ring-slate-200/70">
              Simplify
            </span>
          </div> */}

          {/* AFTER — desktop */}
          <div className="absolute right-[2%] top-[15%] w-[48%] sm:right-[1%] sm:w-[46%]">
            <div className="relative h-[330px] sm:h-[360px]">
              {/* Connection lines */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 200 350"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="100"
                  y1="140"
                  x2="100"
                  y2="200"
                  stroke="#CDEBE5"
                  strokeWidth="1"
                />
                <line
                  x1="30"
                  y1="200"
                  x2="170"
                  y2="200"
                  stroke="#CDEBE5"
                  strokeWidth="1"
                />
                <path
                  d="M30 200 V244"
                  stroke="#CDEBE5"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M170 200 V244"
                  stroke="#CDEBE5"
                  strokeWidth="1"
                  fill="none"
                />

                <line
                  className="lf-flow"
                  x1="100"
                  y1="140"
                  x2="100"
                  y2="200"
                  stroke="#58B9A9"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  className="lf-flow-branch"
                  style={{ animationDelay: "0s" }}
                  d="M100 200 H30 V244"
                  stroke="#58B9A9"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  className="lf-flow-branch"
                  style={{ animationDelay: ".5s" }}
                  d="M100 200 H170 V244"
                  stroke="#58B9A9"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              {/* Client card */}
              <div className="absolute left-1/2 top-0 z-20 w-[92%] -translate-x-1/2">
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_-22px_rgba(11,34,64,.4)] ring-1 ring-slate-200">
                  <div className="flex items-center gap-2.5 p-3.5 sm:p-4">
                    <div className="relative shrink-0">
                      <span className="lf-pulse-ring absolute inset-0 rounded-xl bg-[#58B9A9]/40" />
                      <span className="lf-pulse-ring lf-pulse-ring-delay absolute inset-0 rounded-xl bg-[#58B9A9]/30" />

                      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFF4EF] text-[12px] font-bold text-[#128276]">
                        AC
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[11px] font-bold text-[#0B2240] sm:text-[12px]">
                        ABC Industries
                      </p>
                      <p className="mt-0.5 truncate text-[10px] text-slate-700">
                        Client workspace
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/60">
                    <div className="px-2 py-2.5 text-center">
                      <p className="text-[11px] font-bold text-[#0B2240]">12</p>
                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                        Tasks
                      </p>
                    </div>
                    <div className="px-2 py-2.5 text-center">
                      <p className="text-[11px] font-bold text-[#128276]">
                        100%
                      </p>
                      <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-slate-600">
                        Compliant
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 px-3.5 py-2 sm:px-4">
                    <span className="text-[9px] text-slate-600">
                      Compliance status
                    </span>
                    <span className="flex items-center gap-1 text-[8px] font-semibold text-[#128276]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
                      Up to date
                    </span>
                  </div>
                </div>
              </div>

              {/* Hub node */}
              <div className="absolute left-1/2 top-[200px] z-20 -translate-x-1/2 -translate-y-1/2">
                <span className="lf-hub-pulse flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white ring-2 ring-[#CDEBE5]">
                  <span className="lf-dot h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
                </span>
              </div>

              {/* Module grid */}
              <div className="absolute left-1/2 top-[244px] z-20 w-full -translate-x-1/2">
                <div className="grid grid-cols-2 gap-2">
                  {AFTER_ITEMS.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-xl bg-white px-2.5 py-2.5 shadow-[0_12px_25px_-18px_rgba(11,34,64,.4)] ring-1 ring-slate-200 transition-transform hover:-translate-y-0.5"
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${item.tone}`}
                      >
                        {item.icon}
                      </span>
                      <span className="truncate text-[10px] font-semibold text-[#0B2240] sm:text-[11px]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* small visual connection lines */}
          <div className="pointer-events-none absolute left-[28%] top-[22%] hidden h-px w-[16%] rotate-[8deg] bg-gradient-to-r from-slate-300/0 via-slate-300/70 to-slate-300/0 sm:block" />
          <div className="pointer-events-none absolute left-[28%] top-[67%] hidden h-px w-[16%] -rotate-[10deg] bg-gradient-to-r from-slate-300/0 via-slate-300/70 to-slate-300/0 sm:block" />

          {/* BOTTOM — Disconnected → Connected */}
          <div className="absolute bottom-[0%] left-1/2 z-30 flex w-[88%] -translate-x-1/2 items-center justify-between sm:w-[80%]">
            <span className="flex items-center gap-1.5 rounded-full border border-rose-100 bg-white px-3 py-1.5 text-[10px] font-bold text-rose-500 shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)] sm:px-3.5 sm:text-[11px]">
              <span className="lf-dot h-1.5 w-1.5 rounded-full bg-rose-400" />
              Disconnected
            </span>

            <span className="relative mx-2 flex flex-1 items-center">
              <span className="h-px w-full bg-gradient-to-r from-rose-200 via-slate-200 to-[#CDEBE5]" />
              <span className="lf-connect-arrow absolute left-1/2 flex -translate-x-1/2 items-center text-[#128276]">
                <svg
                  width="26"
                  height="10"
                  viewBox="0 0 26 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5 H20 M16 1.5 L20 5 L16 8.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>

            <span className="flex items-center gap-1.5 rounded-full border border-[#CDEBE5] bg-white px-3 py-1.5 text-[10px] font-bold text-[#128276] shadow-[0_4px_12px_-6px_rgba(11,34,64,.25)] sm:px-3.5 sm:text-[11px]">
              <span className="lf-dot h-1.5 w-1.5 rounded-full bg-[#58B9A9]" />
              Connected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}