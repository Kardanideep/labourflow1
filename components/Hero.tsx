import hero from "@/data/hero.json";
import Icon from "./Icon";
import HeroVisual from "./Herovisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(18,130,118,.12),transparent_28%),linear-gradient(135deg,#fbfcfc,#f2f8f7)]" />

      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-16 md:px-8 lg:grid-cols-[1fr_.95fr] lg:gap-14 lg:py-12">
        {/* ---------- LEFT COLUMN ---------- */}
        <div className="flex h-full flex-col justify-center text-center lg:text-left">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8 sm:gap-2.5 lg:justify-start">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#128276] shadow-[0_0_0_4px_rgba(18,130,118,.10)] sm:h-2 sm:w-2 sm:shadow-[0_0_0_5px_rgba(18,130,118,.10)]" />

            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#128276] sm:text-[11px] sm:tracking-[.22em]">
              {hero.eyebrow}
            </span>

            <span className="h-px w-6 bg-[#128276]/40 sm:w-12" />
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-3xl text-[28px] font-extrabold leading-[1.05] tracking-[-.03em] text-[#0b223f] sm:text-4xl sm:leading-[1.02] sm:tracking-[-.035em] md:text-5xl lg:mx-0 lg:text-6xl lg:leading-[.98] lg:tracking-[-.045em]">
            {hero.titleLine1}
            <span className="text-[#128276]"> {hero.titleLine2}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:mt-7 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            {hero.description}
          </p>

          {/* CTA */}
          <div className="mx-auto mt-7 flex w-full max-w-sm flex-col gap-3 sm:mt-9 sm:max-w-md sm:flex-row sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start">
            <a
              href="#product"
              className="inline-flex items-center justify-center rounded-full bg-[#0b223f] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#0b223f]/15 transition hover:bg-[#128276] sm:text-base"
            >
              {hero.primaryCta}
              <Icon name="arrow" className="ml-2" />
            </a>

            <a
              href="#early-access"
              className="rounded-full border border-[#0b223f]/15 bg-white/80 px-6 py-3.5 text-center text-sm font-bold text-[#0b223f] transition hover:border-[#128276] sm:text-base"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* Trust */}
          <div className="mt-7 flex items-center justify-center gap-2.5 text-[13px] font-semibold text-slate-500 sm:mt-10 sm:gap-3 sm:text-sm lg:justify-start">
            <Icon name="shield" className="text-[#128276]" />
            <span>{hero.trust}</span>
          </div>

          {/* Supporting points */}
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:max-w-2xl">
            <div className="flex items-center justify-center gap-2.5 text-left sm:flex-col sm:items-center sm:gap-2 lg:flex-row lg:items-center lg:gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF7F4] text-[#128276]">
                <Icon name="building" />
              </span>
              <span className="text-[11px] font-semibold leading-4 text-slate-600 sm:text-[12px]">
                Multi-client
                <br />
                management
              </span>
            </div>

            <div className="flex items-center justify-center gap-2.5 text-left sm:flex-col sm:items-center sm:gap-2 lg:flex-row lg:items-center lg:gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF7F4] text-[#128276]">
                <Icon name="shield" />
              </span>
              <span className="text-[11px] font-semibold leading-4 text-slate-600 sm:text-[12px]">
                Indian labour
                <br />
                compliance
              </span>
            </div>

            <div className="flex hidden sm:flex lg:flex items-center justify-center gap-2.5 text-left sm:flex-col sm:items-center sm:gap-2 lg:flex-row lg:items-center lg:gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF7F4] text-[#128276]">
                <Icon name="chart" />
              </span>
              <span className="text-[11px] font-semibold leading-4 text-slate-600 sm:text-[12px]">
                Payroll &
                <br />
                statutory work
              </span>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT COLUMN ---------- */}
        <div className="flex items-center justify-center px-2 sm:px-4 lg:px-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}