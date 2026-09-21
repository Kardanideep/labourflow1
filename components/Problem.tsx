import data from "@/data/problem.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

const icons = ["building", "calendar", "bell", "file"];

export default function Problem() {
  return (
    <section id="problem" className="scroll-mt-10 bg-white py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          center
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {data.items.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                flex
                min-h-[220px]
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-[#f7faf9]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#128276]/20
                hover:bg-white
                hover:shadow-[0_15px_40px_rgba(11,34,63,0.08)]
                sm:min-h-[240px]
                sm:rounded-3xl
                sm:p-6
                lg:min-h-[260px]
                motion-reduce:transition-none
                motion-reduce:hover:translate-y-0
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-50
                  text-red-500
                  transition-all
                  duration-300
                  group-hover:bg-[#dff4ef]
                  group-hover:text-[#128276]
                  sm:h-11
                  sm:w-11
                  motion-reduce:transition-none
                "
              >
                <Icon
                  name={icons[index] || "bell"}
                  className="text-[15px] sm:text-[16px]"
                />
              </div>

              {/* Content */}
              <div className="mt-6 sm:mt-7">
                <h3 className="text-base font-bold leading-6 text-[#0b223f] sm:text-lg sm:leading-7">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                  {item.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div className="mt-auto pt-6 sm:pt-7">
                <div className="h-px w-full bg-slate-200 transition-colors duration-300 group-hover:bg-[#128276]/20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
