"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close menu on Escape
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7faf9]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
          <img
            src="/logo.png"
            alt="LabourFlow"
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />
          <span className="min-w-0 mt-1">
            <span className="block text-[23px] font-extrabold leading-none tracking-tight text-[#0B1F3A] sm:text-[25px]">
              Labour<span className="text-[#0F7A6C]">Flow</span>
            </span>
            <span className="mt-1 block text-[7px] font-bold tracking-[0.2em] text-[#0B1F3A] sm:text-[9px]">
              COMPLIANCE. SIMPLIFIED.
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          <a
            href="#modules"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#128276]"
          >
            Modules
          </a>
          <a
            href="#problem"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#128276]"
          >
            Problem
          </a>
          <a
            href="#product"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#128276]"
          >
            Solution
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#128276]"
          >
            How it works
          </a>
          <a
            href="#why-us"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#128276]"
          >
            Why Us
          </a>
          <a
            href="#who-its-for"
            className="text-sm font-semibold text-slate-600 transition hover:text-[#128276]"
          >
            Who it's for
          </a>
          <a
            href="#early-access"
            className="inline-flex items-center rounded-full bg-[#0b223f] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#0b223f]/15 transition hover:bg-[#128276]"
          >
            Get Launch Updates <Icon name="arrow" className="ml-2" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 p-2 text-[#0b223f] transition hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            <a
              onClick={() => setOpen(false)}
              href="#modules"
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7faf9] hover:text-[#128276]"
            >
              Modules
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#problem"
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7faf9] hover:text-[#128276]"
            >
              Problem
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#product"
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7faf9] hover:text-[#128276]"
            >
              Solution
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#how-it-works"
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7faf9] hover:text-[#128276]"
            >
              How it works
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#why-us"
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7faf9] hover:text-[#128276]"
            >
              Why Us
            </a>
            <a
              onClick={() => setOpen(false)}
              href="#who-its-for"
              className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#f7faf9] hover:text-[#128276]"
            >
              Who it's for
            </a>

            <a
              onClick={() => setOpen(false)}
              href="#early-access"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0b223f] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#128276]"
            >
              Join Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}