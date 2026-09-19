import data from "@/data/why-labourflow.json";
import Icon from "./Icon";

const icons = [
  "users",
  "building",
  "shield",
  "check",
  "bell",
  "search",
  "chart",
  "arrow",
];

export default function Why() {
  return (
    <section className="bg-[#f7faf9] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#0b223f] sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* =========================
                LEFT — FIXED / STICKY
            ========================== */}
            <div className="relative lg:sticky lg:top-24 lg:h-[800px]">
              <div className="relative h-full overflow-hidden p-6 sm:p-10 lg:p-14">
                {/* Decorative circles */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#8ed6ca]/10" />
                <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#128276]/10 blur-3xl" />

                <div className="relative">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8ed6ca] sm:mb-5 sm:text-xs">
                    {data.eyebrow}
                  </p>

                  <h2 className="max-w-lg text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[44px]">
                    {data.title}
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:mt-6 sm:text-base sm:leading-8">
                    {data.description}
                  </p>

                  {/* Positioning */}
                  <div className="mt-8 border-l-2 border-[#128276] pl-4 sm:mt-10 sm:pl-5">
                    <p className="text-sm font-semibold leading-7 text-white/80">
                      One platform for the way Indian labour consultancies
                      actually work.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-10 grid max-w-sm grid-cols-2 gap-3 sm:mt-12">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xl font-extrabold text-[#8ed6ca] sm:text-2xl">
                        Multi
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        Client focused
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xl font-extrabold text-[#8ed6ca] sm:text-2xl">
                        India
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        Compliance focused
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT — SCROLLABLE
            ========================== */}
            <div className="bg-white p-4 sm:p-6 lg:p-8">
              <div
                className="
                  max-h-[520px]
                  overflow-y-auto
                  pr-2
                  sm:max-h-[600px]
                  lg:max-h-[700px]
                  scrollbar-thin
                  scrollbar-track-transparent
                  scrollbar-thumb-[#128276]/40
                  hover:scrollbar-thumb-[#128276]/70
                "
              >
                <div className="grid gap-2">
                  {data.items.map((item, index) => (
                    <article
                      key={item.title}
                      className="
                        group
                        relative
                        flex
                        gap-3
                        rounded-2xl
                        border
                        border-transparent
                        p-4
                        transition-all
                        duration-300
                        hover:border-[#128276]/20
                        hover:bg-[#f7faf9]
                        sm:gap-5
                        sm:p-5
                      "
                    >
                      {/* Number — hidden on mobile, shown from sm up */}
                      <div className="hidden w-6 shrink-0 pt-1 sm:block sm:w-8">
                        <span className="text-[10px] font-extrabold tracking-widest text-[#128276] sm:text-xs">
                          {item.number || String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#dff4ef]
                          text-[#128276]
                          transition-all
                          duration-300
                          group-hover:bg-[#128276]
                          group-hover:text-white
                          sm:h-11
                          sm:w-11
                        "
                      >
                        <Icon
                          name={icons[index] || "check"}
                          className="text-[13px] sm:text-[15px]"
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-[#0b223f] sm:text-base lg:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-xs leading-6 text-slate-600 sm:mt-2 sm:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}