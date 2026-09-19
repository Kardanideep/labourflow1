import data from "@/data/roadmap.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={data.eyebrow} title={data.title} center />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {data.phases.map((p, i) => (
            <div
              key={p.phase}
              className={`rounded-3xl border p-7 ${i === 0 ? "border-[#128276]/30 bg-[#f0f9f7]" : "border-slate-200 bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-widest text-[#128276]">
                  PHASE {p.phase}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-slate-500 shadow-sm">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-[#0b223f]">
                {p.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {p.items.map((x) => (
                  <li key={x} className="flex gap-3 text-sm text-slate-600">
                    <Icon name="check" className="mt-1 text-[#128276]" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
