import hero from "@/data/hero.json";
import Icon from "./Icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(18,130,118,.12),transparent_28%),linear-gradient(135deg,#fbfcfc,#f2f8f7)]" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[1fr_.95fr] lg:gap-14 lg:py-10">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#128276]/30 bg-white/70 px-3 py-1.5 text-[10px] font-bold tracking-[.18em] text-[#128276] shadow-sm sm:mb-7 sm:gap-3 sm:px-4 sm:py-2 sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#128276] shadow-[0_0_0_5px_rgba(18,130,118,.10)]" />
            {hero.eyebrow}
          </div>

          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.02] tracking-[-.035em] text-[#0b223f] sm:text-4xl md:text-5xl lg:mx-0 lg:text-6xl lg:leading-[.98] lg:tracking-[-.045em]">
            {hero.titleLine1}
            <span className="text-[#128276]">{hero.titleLine2}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8 lg:mx-0">
            {hero.description}
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-full bg-[#0b223f] px-6 py-3.5 text-center font-bold text-white shadow-xl shadow-[#0b223f]/15 transition hover:bg-[#128276]"
            >
              {hero.primaryCta} <Icon name="arrow" className="ml-2" />
            </a>
            <a
              href="#early-access"
              className="rounded-full border border-[#0b223f]/15 bg-white/80 px-6 py-3.5 text-center font-bold text-[#0b223f] transition hover:border-[#128276]"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm font-semibold text-slate-500 sm:mt-10 lg:justify-start">
            <Icon name="shield" className="text-[#128276]" /> {hero.trust}
          </div>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="relative mx-auto w-full max-w-md px-2 sm:max-w-lg sm:px-0 lg:max-w-xl">
          {/* decorative rings – hidden on very small screens to avoid overflow */}
          <div className="pointer-events-none absolute inset-8 hidden rounded-full border border-[#128276]/20 sm:block" />
          <div className="pointer-events-none absolute inset-20 hidden rounded-full border border-[#128276]/15 sm:block" />

          <div className="relative rounded-[1.75rem] border border-white/80 bg-white/75 p-3 shadow-[0_30px_100px_rgba(11,34,63,.13)] backdrop-blur-xl sm:rounded-[2rem] sm:p-5">
            <div className="rounded-[1.25rem] bg-[#0b223f] p-4 text-white sm:rounded-[1.5rem] sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-white/60 sm:text-xs">
                    LABOURFLOW
                  </p>
                  <p className="mt-1 truncate text-base font-bold sm:text-xl">
                    Consultancy Overview
                  </p>
                </div>
                <img
                  src="/logo.png"
                  alt=""
                  className="h-9 w-9 shrink-0 rounded-xl bg-white/90 p-1 sm:h-10 sm:w-10"
                />
              </div>

              {/* metrics – stays 3 cols, but tighter on mobile */}
              <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
                {hero.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl bg-white/10 p-2.5 sm:rounded-2xl sm:p-4"
                  >
                    <p className="text-[9px] uppercase tracking-wider text-white/55 sm:text-[10px]">
                      {m.label}
                    </p>
                    <p className="mt-1.5 text-xs font-bold sm:mt-2 sm:text-sm">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-xl bg-white p-3 text-[#0b223f] sm:mt-4 sm:rounded-2xl sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                    Today's workflow
                  </span>
                  <span className="shrink-0 rounded-full bg-[#dff4ef] px-2 py-1 text-[9px] font-bold text-[#128276] sm:text-[10px]">
                    Live view
                  </span>
                </div>

                {[
                  "PF filing · 8 clients",
                  "Documents · 11 pending",
                  "Licence renewals · 4 due",
                  "Team tasks · 3 overdue",
                ].map((x, i) => (
                  <div
                    key={x}
                    className="mt-3 flex items-center gap-2.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0 sm:gap-3"
                  >
                    <Icon
                      name={i === 3 ? "bell" : "check"}
                      className={
                        i === 3 ? "text-amber-500" : "text-[#128276]"
                      }
                    />
                    <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                      {x}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating CLIENTS card */}
          <div
            className="
              absolute
              -left-2
              -top-6
              z-20
              animate-[float_5s_ease-in-out_infinite]
              rounded-2xl
              border border-[#dff4ef]
              bg-white
              px-3 py-2.5
              shadow-[0_15px_35px_rgba(11,34,63,.12)]
              sm:-left-6 sm:-top-10 sm:px-5 sm:py-4
              md:-left-8 md:-top-12
              lg:-left-10
            "
          >
            <p className="text-[9px] font-bold tracking-[0.16em] text-slate-400 sm:text-[10px]">
              CLIENTS
            </p>
            <p className="mt-1 text-lg font-extrabold text-[#0b223f] sm:text-2xl">
              Multi
            </p>
          </div>

          {/* Floating COMPLIANCE card */}
          <div
            className="
              absolute
              -right-2
              bottom-4
              z-20
              animate-[float_5s_ease-in-out_infinite]
              rounded-2xl
              border border-[#dff4ef]
              bg-white
              px-3 py-2.5
              shadow-[0_15px_35px_rgba(11,34,63,.12)]
              [animation-delay:1.5s]
              sm:-right-6 sm:bottom-8 sm:px-5 sm:py-4
              md:-right-8 md:bottom-10
              lg:-right-10 lg:bottom-12
            "
          >
            <p className="text-[9px] font-bold tracking-[0.16em] text-slate-400 sm:text-[10px]">
              COMPLIANCE
            </p>
            <p className="mt-1 text-lg font-extrabold text-[#128276] sm:text-2xl">
              Central
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}