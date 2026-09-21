import data from "@/data/audience.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

const icons = ["users", "building", "chart", "list"];

export default function Audience() {
  return (
    <section id="who-its-for" className="scroll-mt-10 bg-[#F7FAF9] py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          center
        />

        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          {/* Numbered rows */}
          <div className="divide-y divide-slate-200/80 rounded-[1.5rem] border border-slate-200/80 bg-white shadow-[0_20px_60px_-40px_rgba(11,34,63,0.15)] sm:rounded-[2rem]">
            {data.items.map((item, index) => (
              <article
                key={item.title}
                className="
                  group relative flex items-start gap-4 p-5
                  transition-all duration-300
                  hover:bg-[#F7FAF9]
                  sm:items-center sm:gap-6 sm:p-7
                  md:p-8
                "
              >
                {/* Left — big number */}
                <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            

                  {/* Icon in circle */}
                  <span
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center rounded-full
                      bg-[#EAF7F4] text-[#128276]
                      transition-all duration-300
                      group-hover:bg-[#128276] group-hover:text-white
                      sm:h-12 sm:w-12
                    "
                  >
                    <Icon name={icons[index] || "users"} className="text-[15px] sm:text-[17px]" />
                  </span>
                </div>

                {/* Right — text */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold tracking-tight text-[#0b223f] sm:text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-slate-600 sm:mt-2 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </div>

                {/* Far right — hover arrow */}
                <span
                  className="
                    hidden h-9 w-9 shrink-0 items-center justify-center rounded-full
                    border border-slate-200 text-slate-400
                    transition-all duration-300
                    group-hover:-translate-y-0.5 group-hover:border-[#128276] group-hover:text-[#128276]
                    sm:flex
                  "
                >
                  <Icon name="arrow" className="text-[13px]" />
                </span>
              </article>
            ))}
          </div>

      
        </div>
      </div>
    </section>
  );
}