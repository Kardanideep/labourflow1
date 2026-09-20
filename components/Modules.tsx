import data from "@/data/Modules.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function Modules() {
  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-[#0b223f] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#128276]/15 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#128276]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          center
          dark
        />

        {/* Modules */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {data.modules.map((module, index) => (
            <article
              key={module.number}
              className="
                group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-white/[0.05]
                p-5
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#128276]/60
                hover:bg-white/[0.08]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                sm:rounded-[2rem]
                sm:p-7
                md:p-8
              "
            >
              {/* Large background number */}
              <span
                className="
                  pointer-events-none absolute
                  -right-2 -top-6
                  text-[90px] font-black leading-none
                  text-white/[0.035]
                  transition-all duration-500
                  group-hover:text-[#128276]/10
                  sm:-right-3 sm:-top-8 sm:text-[120px]
                "
              >
                {module.number}
              </span>

              {/* Top row */}
              <div className="relative flex items-start justify-between gap-3">
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-xl
                    bg-[#dff4ef]
                    text-[#128276]
                    shadow-[0_8px_25px_rgba(18,130,118,0.15)]
                    transition-transform duration-300
                    group-hover:scale-105
                    sm:h-14 sm:w-14 sm:rounded-2xl
                  "
                >
                  <Icon
                    name={
                      index === 0
                        ? "building"
                        : index === 1
                          ? "calendar"
                          : index === 2
                            ? "file"
                            : "users"
                    }
                    className="text-lg sm:text-xl"
                  />
                </div>

                <span
                  className="
                    shrink-0 rounded-full border border-white/10
                    bg-white/5 px-2.5 py-1
                    text-[9px] font-bold
                    tracking-[0.18em]
                    text-[#8ed6ca]
                    sm:px-3 sm:py-1.5 sm:text-[10px]
                  "
                >
                  MODULE {module.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-6 sm:mt-8">
                <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                  {module.title}
                </h3>

                <p className="mt-2.5 max-w-xl text-sm leading-6 text-white/60 sm:mt-3 sm:text-[15px] sm:leading-7">
                  {module.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="relative mt-6 flex items-center gap-3 sm:mt-7">
                <span className="h-px w-8 bg-[#128276] sm:w-10" />

                <span className="text-xs font-semibold text-white/40 transition-colors group-hover:text-[#8ed6ca]">
                  Connected to LabourFlow
                </span>

                <Icon
                  name="arrow"
                  className="
                    text-[#8ed6ca]
                    opacity-0
                    -translate-x-2
                    transition-all duration-300
                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}