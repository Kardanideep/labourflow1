"use client";

import { useState } from "react";
import data from "@/data/site.json";
import Icon from "./Icon";

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(result.message || "Unable to send your request right now.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Unable to send your request right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      setSubmitted(false);
      setError("");
      setForm({
        name: "",
        email: "",
        phone: "",
      });
    }, 200);
  };

  return (
    <>
      {/* =========================
          CTA SECTION
      ========================== */}
      <section id="early-access" className="scroll-mt-20 px-4 py-8 sm:px-6 sm:py-10 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-[#128276]/15 bg-[#e8f3f1] px-5 py-8 sm:rounded-[2rem] sm:px-10 sm:py-12">
          {/* Background logo */}
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none absolute left-1/2 top-1/2
              h-40 w-40 -translate-x-1/2 -translate-y-1/2 opacity-[0.2]
              sm:left-30 sm:h-56 sm:w-56
            "
          />

          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#128276]/10 blur-3xl sm:h-48 sm:w-48" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 h-32 w-32 rounded-full bg-white/70 blur-3xl sm:h-40 sm:w-40" />

          <div className="relative flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#128276] sm:text-[11px]">
                LABOURFLOW · IN DEVELOPMENT
              </p>

              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-[#0b223f] sm:text-2xl md:text-3xl lg:text-4xl">
                Everything your labour consultancy runs on — in one place.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                One platform for clients, compliance, payroll and renewals —
                built for the way Indian labour consultants actually work. Get
                notified when we launch.
              </p>
            </div>

            {/* Right */}
            <div className="shrink-0 sm:text-center lg:text-right">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#128276]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_8px_25px_rgba(18,130,118,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#0b6f65]
                  hover:shadow-[0_12px_30px_rgba(18,130,118,0.25)]
                  sm:w-auto
                  motion-reduce:transition-none
                  motion-reduce:hover:translate-y-0
                "
              >
                Get Launch Updates
                <Icon name="arrow" className="ml-2" />
              </button>

              <p className="mt-3 text-center text-[10px] text-slate-400 sm:text-[11px] lg:text-right">
                Be notified when LabourFlow launches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          EARLY ACCESS MODAL
      ========================== */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b223f]/70 px-4 py-6 backdrop-blur-sm sm:px-5 sm:py-8"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-lg
              overflow-y-auto
              hide-scrollbar
              rounded-[1.5rem]
              bg-white
              shadow-[0_30px_100px_rgba(0,0,0,0.25)]
              sm:rounded-[2rem]
            "
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="
                absolute
                right-4
                top-4
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-slate-100
                text-slate-500
                transition
                hover:bg-slate-200
                hover:text-[#0b223f]
                sm:right-5
                sm:top-5
              "
            >
              <Icon name="close" />
            </button>

            {!submitted ? (
              <>
                {/* Modal header */}
                <div className="bg-[#0b223f] px-6 py-7 text-white sm:px-9 sm:py-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ed6ca] sm:text-xs">
                    Get Launch Updates
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold sm:text-2xl md:text-3xl">
                    Join LabourFlow
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/60">
                    Tell us a little about yourself and we'll keep you informed
                    about LabourFlow launch updates.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 px-6 py-6 sm:space-y-5 sm:px-9 sm:py-8"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#0b223f]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      disabled={isSubmitting}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-[#0b223f]
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#128276]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#128276]/10
                      "
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#0b223f]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        text-[#0b223f]
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#128276]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#128276]/10
                      "
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-[#0b223f]"
                    >
                      Phone Number
                    </label>

                    <div className="flex">
                      <span className="flex items-center rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 px-3 text-sm font-semibold text-slate-500">
                        +91
                      </span>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        disabled={isSubmitting}
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        className="
                          w-full
                          min-w-0
                          rounded-r-xl
                          border
                          border-slate-200
                          bg-slate-50
                          px-4
                          py-3
                          text-sm
                          text-[#0b223f]
                          outline-none
                          transition
                          placeholder:text-slate-400
                          focus:border-[#128276]
                          focus:bg-white
                          focus:ring-2
                          focus:ring-[#128276]/10
                        "
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold">
                        !
                      </span>
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#128276]
                      px-5
                      py-3.5
                      font-bold
                      text-white
                      transition
                      hover:bg-[#159688]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                        Sending request...
                      </>
                    ) : (
                      <>
                        Submit request
                        <Icon name="arrow" className="ml-2" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting, you agree to be contacted regarding
                    LabourFlow launch updates.
                  </p>
                </form>
              </>
            ) : (
              /* =========================
                 SUCCESS STATE
              ========================== */
              <div className="px-6 py-12 text-center sm:px-10 sm:py-14">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#dff4ef] text-[#128276] sm:h-16 sm:w-16">
                  <Icon name="success" className="text-xl sm:text-2xl" />
                </div>

                <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#128276]">
                  Request received
                </p>

                <h3 className="mt-2 text-xl font-extrabold text-[#0b223f] sm:text-2xl">
                  Welcome to LabourFlow
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-600">
                  Thanks for your interest. We sent a confirmation to{" "}
                  <span className="font-semibold text-[#0b223f]">{form.email}</span>{" "}
                  and will keep you updated about early access.
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="
                    mt-6
                    rounded-full
                    bg-[#0b223f]
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-[#128276]
                    sm:mt-7
                  "
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
