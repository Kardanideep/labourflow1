"use client";

import { useState } from "react";
import data from "@/data/solution.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

type ImagePanelProps = {
  active: number;
};

function ImagePanel({ active }: ImagePanelProps) {
  return (
    <div className="w-full">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#f8faf9] shadow-[0_20px_60px_rgba(11,34,63,0.12)]">
        {data.items.map((item, index) => (
          <img
            key={item.title}
            src={item.image}
            alt={index === active ? item.title : ""}
            className={`
              absolute
              inset-0
              h-full
              w-full
              object-fit
              transition-opacity
              duration-500
              ease-out
              motion-reduce:transition-none
              ${
                index === active
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default function Solution() {
  const [active, setActive] = useState(0);

  return (
    <section id="product" className="scroll-mt-10 bg-white py-14 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* =========================
            SECTION HEADING
        ========================== */}
        <SectionHeading
          eyebrow={data.eyebrow}
          title={data.title}
          description={data.description}
          center
        />

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="mt-10 grid items-start gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* =========================
              LEFT — FEATURE CARDS
          ========================== */}
          <div className="space-y-3">
            {data.items.map((item, index) => {
              const isActive = index === active;

              return (
                <article
                  key={item.title}
                  aria-current={isActive}
                  tabIndex={0}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`
                    group
                    flex
                    cursor-pointer
                    flex-col
                    gap-4
                    rounded-2xl
                    border-2
                    px-4
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    ease-out
                    focus-visible:ring-2
                    focus-visible:ring-[#128276]
                    focus-visible:ring-offset-2
                    motion-reduce:transition-none
                    sm:gap-5
                    sm:px-5
                    sm:py-5

                    ${
                      isActive
                        ? `
                          border-[#128276]
                          bg-[#f7faf9]
                          shadow-[0_10px_30px_rgba(11,34,63,0.08)]
                        `
                        : `
                          border-transparent
                          bg-transparent
                          hover:border-[#128276]/40
                          hover:bg-[#f8faf9]/70
                        `
                    }
                  `}
                >
                  {/* =========================
                      TOP ROW — ICON + TEXT
                  ========================== */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* ICON */}
                    <div
                      className={`
                        mt-0.5
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        transition-all
                        duration-300
                        motion-reduce:transition-none
                        sm:h-10
                        sm:w-10

                        ${
                          isActive
                            ? `
                              bg-[#dff4ef]
                              text-[#128276]
                            `
                            : `
                              bg-transparent
                              text-[#0b223f]
                              group-hover:bg-[#dff4ef]
                              group-hover:text-[#128276]
                            `
                        }
                      `}
                    >
                      <Icon
                        name={item.icon}
                        className="text-[15px] sm:text-[17px]"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold leading-6 text-[#0b223f] transition-colors duration-300 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* =========================
                      BOTTOM IMAGE (SMALL SCREENS ONLY)
                  ========================== */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-100 bg-[#f8faf9] lg:hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        h-full
                        w-full
                        object-fit
                      "
                    />
                  </div>
                </article>
              );
            })}
          </div>

          {/* =========================
              RIGHT — PRODUCT IMAGE (sticky panel, LARGE SCREENS ONLY)
          ========================== */}
          <div className="hidden lg:block lg:sticky lg:top-28">
            <ImagePanel active={active} />
          </div>
        </div>
      </div>
    </section>
  );
}