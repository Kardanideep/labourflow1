// components/HeroVisual.tsx
// LabourFlow hero — Before/After + Timeline.
// Floating chips hidden below lg. Bottom footer always visible.

const OLD_TOOLS = [
  {
    label: "Excel sheets",
    cls: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    rot: "-rotate-3",
  },
  {
    label: "WhatsApp",
    cls: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    rot: "rotate-2",
  },
  {
    label: "Email",
    cls: "bg-rose-50 text-rose-700 ring-rose-200",
    rot: "-rotate-2",
  },
  {
    label: "Govt portals",
    cls: "bg-sky-50 text-sky-800 ring-sky-200",
    rot: "rotate-3",
  },
  {
    label: "Physical files",
    cls: "bg-violet-50 text-violet-800 ring-violet-200",
    rot: "-rotate-1",
  },
];

const NEW_MODULES = [
  "Clients",
  "Compliance",
  "Payroll",
  "Documents",
  "Notices",
  "Portal",
];

const DAY: Array<{
  time: string;
  text: string;
  tone: "start" | "done" | "soon" | "ai" | "end";
}> = [
  {
    time: "9:00",
    text: "Dashboard — clients & compliance at a glance",
    tone: "start",
  },
  {
    time: "9:30",
    text: "PF ECR prepared from payroll data",
    tone: "done",
  },
  {
    time: "10:30",
    text: "Licence renewal — 12 days remaining",
    tone: "soon",
  },
  {
    time: "12:00",
    text: "Government notice ready for review",
    tone: "ai",
  },
  {
    time: "2:00",
    text: "Payroll completed · payslips generated",
    tone: "done",
  },
  {
    time: "6:00",
    text: "Tasks reviewed · deadlines tracked",
    tone: "end",
  },
];

const TONE: Record<string, { dot: string; text: string; badge?: string }> = {
  start: {
    dot: "bg-[#0B2240]",
    text: "text-[#0B2240]",
  },
  done: {
    dot: "bg-[#128276]",
    text: "text-[#0b4d44]",
  },
  soon: {
    dot: "bg-amber-500",
    text: "text-amber-700",
  },
  ai: {
    dot: "bg-[#8b5cf6]",
    text: "text-[#6d28d9]",
    badge: "AI",
  },
  end: {
    dot: "bg-[#0B2240]",
    text: "text-[#0B2240]",
  },
};

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .lf-in {
            animation: lf-in 550ms cubic-bezier(.2,.8,.2,1) both;
          }

          .lf-p {
            animation: lf-p 2.6s ease-in-out infinite;
          }

          .lf-float {
            animation: lf-float 6s ease-in-out infinite;
          }

          .lf-float-2 {
            animation: lf-float 7s ease-in-out infinite;
            animation-delay: 1s;
          }

          .lf-float-3 {
            animation: lf-float 8s ease-in-out infinite;
            animation-delay: 2s;
          }
        }

        @keyframes lf-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lf-p {
          0%, 100% {
            opacity: .35;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes lf-float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>

      {/* =========================================================
          FLOATING CHIPS
          ========================================================= */}

    {/* Top-left — Compliance */}
<div
  className="
    lf-float absolute z-20 flex items-center gap-1.5 rounded-xl
    bg-white/70 backdrop-blur-md
    px-2 py-1 shadow-[0_10px_30px_-12px_rgba(11,34,64,0.3)] ring-1 ring-white/60
    -left-2 top-30
    sm:-left-4 sm:top-60 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:shadow-[0_15px_40px_-15px_rgba(11,34,64,0.35)]
    lg:-left-6 lg:top-60
  "
>
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFF4EF] text-[#0B6B5D] sm:h-6 sm:w-6">
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:h-3 sm:w-3">
      <path d="M3.5 8.5l3 3 6-7" />
    </svg>
  </span>
  <div className="min-w-0">
    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px]">Compliance</p>
    <p className="text-[10px] font-extrabold leading-tight text-[#0B2240] sm:text-[11px]">Deadline tracked</p>
  </div>
</div>

{/* Top-right — AI */}
<div
  className="
    lf-float-2 absolute z-20 flex items-center gap-1.5 rounded-xl
    bg-white/70 backdrop-blur-md
    px-2 py-1 shadow-[0_10px_30px_-12px_rgba(11,34,64,0.3)] ring-1 ring-white/60
    -right-2 top-60
    sm:-right-4 sm:top-8 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:shadow-[0_15px_40px_-15px_rgba(11,34,64,0.35)]
    lg:-right-6 lg:top-10
  "
>
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ede9fe] text-[#7c3aed] sm:h-6 sm:w-6">
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:h-3 sm:w-3">
      <rect x="3" y="5.5" width="10" height="7.5" rx="1.6" />
      <path d="M8 2.5v3M5.5 9h.01M10.5 9h.01M6 11h4" />
    </svg>
  </span>
  <div className="min-w-0">
    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px]">AI</p>
    <p className="text-[10px] font-extrabold leading-tight text-[#0B2240] sm:text-[11px]">Notice assistance</p>
  </div>
</div>

{/* Bottom-left — Payroll */}
<div
  className="
    lf-float-3 absolute z-20 flex items-center gap-1.5 rounded-xl
    bg-white/70 backdrop-blur-md
    px-2 py-1 shadow-[0_10px_30px_-12px_rgba(11,34,64,0.3)] ring-1 ring-white/60
    -left-2 bottom-15
    sm:-left-4 sm:bottom-15 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:shadow-[0_15px_40px_-15px_rgba(11,34,64,0.35)]
    lg:-left-6 lg:bottom-15
  "
>
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFF4EF] text-[#0B6B5D] sm:h-6 sm:w-6">
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="sm:h-3 sm:w-3">
      <rect x="1.5" y="4" width="13" height="8.5" rx="1.6" />
      <circle cx="8" cy="8.2" r="2" />
    </svg>
  </span>
  <div className="min-w-0">
    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px]">Payroll</p>
    <p className="text-[10px] font-extrabold leading-tight text-[#0B2240] sm:text-[11px]">Payslips generated</p>
  </div>
</div>

{/* Bottom-right — WhatsApp */}
<div
  className="
    lf-float absolute z-20 flex items-center gap-1.5 rounded-xl
    bg-white/70 backdrop-blur-md
    px-2 py-1 shadow-[0_10px_30px_-12px_rgba(11,34,64,0.3)] ring-1 ring-white/60
    -right-2 bottom-32
    sm:-right-4 sm:bottom-40 sm:gap-2 sm:rounded-2xl sm:px-3 sm:py-2 sm:shadow-[0_15px_40px_-15px_rgba(11,34,64,0.35)]
    lg:-right-6 lg:bottom-1/3
  "
>
  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white sm:h-6 sm:w-6">
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="sm:h-3 sm:w-3">
      <path d="M2.5 13.5l.9-3A5.6 5.6 0 1 1 5.6 12.6l-3.1.9z" />
    </svg>
  </span>
  <div className="min-w-0">
    <p className="text-[8px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px]">WhatsApp</p>
    <p className="text-[10px] font-extrabold leading-tight text-[#0B2240] sm:text-[11px]">Client reminder</p>
  </div>
</div>

      {/* =========================================================
          MAIN PLATE
          ========================================================= */}

      <div className="rounded-[1.75rem] bg-gradient-to-b from-white to-[#EEF5F3] p-5 shadow-[0_30px_80px_-30px_rgba(11,34,64,0.35)] ring-1 ring-slate-200/80 sm:p-6">
        {/* BEFORE → AFTER */}
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#128276]">
            Before → After
          </p>

          <span className="rounded-full bg-[#EAF7F4] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#128276]">
            The LabourFlow way
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
          {/* OLD WAY */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:flex-col sm:gap-2">
            {OLD_TOOLS.map((o, i) => (
              <span
                key={o.label}
                className={`lf-in inline-flex rounded-lg px-2.5 py-1.5 text-[11px] font-semibold ring-1 sm:text-xs ${o.cls} ${o.rot}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                {o.label}
              </span>
            ))}
          </div>

          {/* ARROW */}
          <div className="flex items-center justify-center">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#128276"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-90 sm:rotate-0"
              aria-hidden="true"
            >
              <path d="M4 12h14M13 7l5 5-5 5" />
            </svg>
          </div>

          {/* LABOURFLOW */}
          <div
            className="lf-in relative rounded-2xl bg-[#0B2240] p-4 shadow-[0_20px_50px_-20px_rgba(11,34,64,0.5)]"
            style={{ animationDelay: "450ms" }}
          >
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="LabourFlow"
                width={22}
                height={22}
                className="h-5 w-5 rounded-md bg-white/95 p-0.5"
              />

              <span className="text-sm font-bold text-white">LabourFlow</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {NEW_MODULES.map((m) => (
                <span
                  key={m}
                  className="rounded-md bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#8ed6ca] ring-1 ring-white/10 sm:px-2 sm:py-1 sm:text-[10px]"
                >
                  {m}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8ed6ca]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ed6ca]" />
              One connected workspace
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-slate-200" />

          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
            A day with LabourFlow
          </span>

          <span className="h-px flex-1 bg-slate-200" />
        </div>

        {/* TIMELINE */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#128276]">
              Labour Consultancy
            </p>

            <p className="mt-0.5 text-[11px] text-slate-500">
              One connected workflow
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF7F4] px-2.5 py-1 text-[10px] font-bold text-[#128276]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="lf-p absolute inline-flex h-full w-full rounded-full bg-[#128276]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#128276]" />
            </span>
            Connected
          </span>
        </div>

        {/* TIMELINE CONTENT */}
        <div className="relative mt-4 pl-1">
          <div className="absolute left-[46px] top-2 bottom-2 w-px bg-gradient-to-b from-slate-200 via-[#128276]/40 to-slate-200 sm:left-[50px]" />

          <ul className="space-y-3.5">
            {DAY.map((d, i) => {
              const t = TONE[d.tone];

              return (
                <li
                  key={d.time}
                  className="lf-in relative flex items-start gap-3"
                  style={{
                    animationDelay: `${650 + i * 100}ms`,
                  }}
                >
                  <span className="w-10 shrink-0 pt-0.5 text-right text-[10px] font-bold tabular-nums text-slate-400 sm:text-xs">
                    {d.time}
                  </span>

                  <span className="relative mt-1 flex h-3 w-3 shrink-0 items-center justify-center">
                    <span
                      className={`absolute inline-flex h-full w-full rounded-full ${t.dot} ${
                        i === 3 ? "lf-p" : ""
                      }`}
                    />

                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <p
                    className={`pt-0.5 text-[12px] font-medium leading-snug sm:text-[13px] ${t.text}`}
                  >
                    {d.text}

                    {t.badge && (
                      <span className="ml-1.5 inline-flex items-center rounded-full bg-[#ede9fe] px-1.5 py-0.5 align-middle text-[8px] font-bold uppercase tracking-wider text-[#7c3aed]">
                        {t.badge}
                      </span>
                    )}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* FOOTER */}
        <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-[#0B2240] px-4 py-3">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#8ed6ca]">
              One platform
            </p>

            <p className="mt-0.5 text-base font-extrabold leading-none text-white">
              All client work
            </p>
          </div>

          <div className="border-l border-white/10 pl-4">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#8ed6ca]">
              Compliance
            </p>

            <p className="mt-0.5 text-base font-extrabold leading-none text-white">
              Always visible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
