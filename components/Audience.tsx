import data from "@/data/audience.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

const icons = ["users", "building", "chart", "list"];

export default function Audience() {
  return (
    <section id="who-its-for" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          center
        />

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {data.items.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-[#f8faf9]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#128276]/40
                hover:bg-white
                hover:shadow-[0_18px_45px_rgba(11,34,63,0.07)]
                sm:rounded-[2rem]
                sm:p-7
                md:p-8
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                {/* Persona number */}
                <span className="text-xs font-extrabold tracking-[0.18em] text-[#128276] sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    text-[#0b223f]
                    transition-all
                    duration-300
                    group-hover:border-[#128276]/30
                    group-hover:bg-[#dff4ef]
                    group-hover:text-[#128276]
                    sm:h-11
                    sm:w-11
                    motion-reduce:transition-none
                  "
                >
                  <Icon
                    name={icons[index] || "users"}
                    className="text-[15px] sm:text-[16px]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 sm:mt-12">
                <h3 className="text-lg font-bold tracking-tight text-[#0b223f] sm:text-xl md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-6 flex items-center gap-3 sm:mt-8">
                <span
                  className="
                    h-[2px]
                    w-6
                    bg-slate-200
                    transition-all
                    duration-300
                    group-hover:w-14
                    group-hover:bg-[#128276]
                    sm:w-8
                    motion-reduce:transition-none
                  "
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 sm:text-[11px]">
                  LabourFlow
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}