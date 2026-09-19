"use client";

import { useEffect, useState } from "react";

export default function ComingSoonPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 5000);

    return () => window.clearTimeout(timer);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b223f]/45 px-4 py-6 backdrop-blur-sm sm:px-5 sm:py-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="coming-soon-title"
        className="
          relative
          max-h-[92vh]
          w-full
          max-w-sm
          overflow-y-auto
          hide-scrollbar
          rounded-[1.5rem]
          bg-white
          p-6
          text-center
          shadow-[0_25px_80px_rgba(11,34,63,0.2)]
          sm:rounded-[2rem]
          sm:p-8
          md:p-10
        "
      >
        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={() => setIsOpen(false)}
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-xl
            leading-none
            text-slate-400
            transition
            hover:bg-slate-100
            hover:text-[#0b223f]
            sm:right-4
            sm:top-4
          "
        >
          ×
        </button>

        {/* Logo */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef6f4] sm:h-20 sm:w-20">
          <img
            src="/logo.png"
            alt="LabourFlow"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
        </div>

        {/* Status */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#eef6f4] px-3 py-1.5 sm:mt-6 sm:px-4 sm:py-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#128276]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#128276]">
            Coming Soon
          </span>
        </div>

        {/* Title */}
        <h2
          id="coming-soon-title"
          className="
            mt-4
            text-2xl
            font-extrabold
            leading-tight
            tracking-tight
            text-[#0b223f]
            sm:mt-5
            sm:text-3xl
          "
        >
          LabourFlow is under development.
        </h2>

        {/* Short message */}
        <p className="mt-3 text-sm leading-6 text-slate-500 sm:mt-4">
          We’re working on something built specifically for labour
          compliance consultants.
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="
            mt-6
            w-full
            rounded-full
            bg-[#128276]
            px-6
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:bg-[#0b223f]
            sm:mt-7
          "
        >
          Continue to website
        </button>
      </div>
    </div>
  );
}