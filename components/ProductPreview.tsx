"use client";

import { useState } from "react";
import data from "@/data/product-preview.json";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function ProductPreview() {
  const [active, setActive] = useState(0);

  const activeStep = data.steps[active];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 lg:py-20">
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
            WORKFLOW WRAPPER
        ========================== */}
        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#d9ebe7] p-2 shadow-[0_25px_70px_rgba(11,34,63,0.12)] sm:mt-14 sm:rounded-[2rem] sm:p-3">
          <div className="rounded-[1.25rem] bg-white p-4 sm:rounded-[1.5rem] sm:p-6 lg:p-8">
            {/* =========================
                TOP STEP NAVIGATION
            ========================== */}
            <div
              className="
                -mx-4 overflow-x-auto px-4 pb-3
                sm:mx-0 sm:px-0
                [scrollbar-width:thin]
                [scrollbar-color:#128276_#dff4ef]
                [&::-webkit-scrollbar]:h-1.5
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-[#eef6f4]
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#128276]
                [&::-webkit-scrollbar-thumb]:hover:bg-[#0b223f]
              "
            >
              <div className="flex min-w-max items-center justify-start gap-1 sm:justify-center sm:gap-2">
                {data.steps.map((step, index) => {
                  const isActive = index === active;
                  const isCompleted = index < active;

                  return (
                    <div key={step.number} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        className="group flex items-center gap-2"
                      >
                        <span
                          className={`
                            flex h-8 w-8 shrink-0 items-center justify-center
                            rounded-full text-[11px] font-extrabold
                            transition-all duration-300
                            sm:h-9 sm:w-9 sm:text-xs
                            ${
                              isActive
                                ? "bg-[#128276] text-white shadow-lg shadow-[#128276]/20"
                                : isCompleted
                                  ? "bg-[#dff4ef] text-[#128276]"
                                  : "bg-slate-100 text-slate-400 group-hover:bg-[#dff4ef] group-hover:text-[#128276]"
                            }
                          `}
                        >
                          {isCompleted ? (
                            <Icon name="check" className="text-xs" />
                          ) : (
                            step.number
                          )}
                        </span>

                        <span
                          className={`
                            hidden whitespace-nowrap text-xs font-bold sm:block
                            ${isActive ? "text-[#0b223f]" : "text-slate-400"}
                          `}
                        >
                          {step.title}
                        </span>
                      </button>

                      {index < data.steps.length - 1 && (
                        <div
                          className={`
                            mx-1.5 h-px w-4 sm:mx-2 sm:w-8
                            ${index < active ? "bg-[#128276]" : "bg-slate-200"}
                          `}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =========================
                MAIN PREVIEW
            ========================== */}
            <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              {/* =========================
                  LEFT — STEP INFORMATION
              ========================== */}
              <div className="flex flex-col justify-center rounded-[1.25rem] bg-[#0b223f] p-6 text-white sm:rounded-[1.5rem] sm:p-8 lg:p-9">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#128276] text-base font-extrabold sm:h-12 sm:w-12 sm:text-lg">
                  {activeStep.number}
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ed6ca] sm:mt-7 sm:text-xs">
                  LabourFlow Workflow
                </p>

                <h3 className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl lg:text-3xl">
                  {activeStep.title}
                </h3>

                {/* Short description shown on LEFT */}
                <p className="mt-3 text-sm leading-6 text-white/65 sm:mt-4 sm:text-base sm:leading-7">
                  {activeStep.shortDescription}
                </p>

                <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-[#8ed6ca] sm:mt-7 sm:text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 sm:h-8 sm:w-8">
                    <Icon name="check" />
                  </span>
                  Connected to your consultancy workflow
                </div>
              </div>

              {/* =========================
                  RIGHT — PRODUCT PREVIEW
              ========================== */}
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.25rem] border border-slate-200 bg-[#f7faf9] p-4 sm:min-h-[380px] sm:rounded-[1.5rem] sm:p-6 lg:p-7">
                {/* Background decoration */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#128276]/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#0b223f]/5 blur-3xl" />

                <div className="relative">
                  {/* Preview Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4 sm:pb-5">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#128276]">
                        {activeStep.number} / {data.steps.length}
                      </p>

                      <h4 className="mt-1  text-lg font-extrabold text-[#0b223f] sm:text-xl">
                        {activeStep.title}
                      </h4>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#dff4ef] text-[#128276] sm:h-10 sm:w-10">
                      <Icon
                        name={
                          activeStep.title.includes("Client")
                            ? "building"
                            : activeStep.title.includes("Document")
                              ? "file"
                              : activeStep.title.includes("Compliance")
                                ? "calendar"
                                : activeStep.title.includes("Payroll")
                                  ? "chart"
                                  : activeStep.title.includes("Output")
                                    ? "check"
                                    : activeStep.title.includes("Renewal")
                                      ? "bell"
                                      : "list"
                        }
                      />
                    </div>
                  </div>

                  {/* Dynamic Preview Content */}
                  <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                    {/* CURRENT STEP */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-slate-400 sm:text-xs">
                          CURRENT STEP
                        </span>

                        <span className="shrink-0 rounded-full bg-[#dff4ef] px-2 py-0.5 text-[9px] font-bold text-[#128276] sm:px-2.5 sm:py-1 sm:text-[10px]">
                          Active
                        </span>
                      </div>

                      <p className="mt-4 text-base font-extrabold text-[#0b223f] sm:mt-5 sm:text-lg">
                        {activeStep.title}
                      </p>

                      {/* Full description shown on RIGHT */}
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {activeStep.description}
                      </p>
                    </div>

                    {/* WORKFLOW STATUS */}
                    {/* STEP-SPECIFIC INFORMATION */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                          {activeStep.rightTitle}
                        </p>

                        <span className="rounded-full bg-[#dff4ef] px-2.5 py-1 text-[10px] font-bold text-[#128276]">
                          {activeStep.number}
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        {activeStep.highlights.map((highlight: string) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 rounded-xl bg-[#f7faf9] px-3 py-2.5"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dff4ef] text-[#128276]">
                              <Icon name="check" className="text-xs" />
                            </span>

                            <span className="text-xs font-semibold text-[#0b223f]">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WORKFLOW PROGRESS */}
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-5 sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold text-slate-400 sm:text-xs">
                        WORKFLOW PROGRESS
                      </span>

                      <span className="text-xs font-extrabold text-[#128276]">
                        {Math.round(((active + 1) / data.steps.length) * 100)}%
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 sm:mt-4">
                      <div
                        className="h-full rounded-full bg-[#128276] transition-all duration-500"
                        style={{
                          width: `${((active + 1) / data.steps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                BOTTOM NAVIGATION
            ========================== */}
            <div className="mt-5 flex items-center justify-between gap-3 sm:mt-6">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-[#0b223f] transition hover:border-[#128276] hover:text-[#128276] disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Previous
              </button>

              <span className="text-[11px] font-semibold text-slate-400 sm:text-xs">
                Step {active + 1} of {data.steps.length}
              </span>

              <button
                type="button"
                disabled={active === data.steps.length - 1}
                onClick={() =>
                  setActive((prev) => Math.min(data.steps.length - 1, prev + 1))
                }
                className="rounded-full bg-[#0b223f] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#128276] disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:py-2.5 sm:text-sm"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
