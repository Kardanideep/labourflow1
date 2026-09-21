import data from "@/data/footer.json";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-[#f7faf9] pt-6">
      <div className="overflow-hidden bg-[#0b223f] text-white">
        {/* Main Footer */}
        <div className="grid gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-12 md:px-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
          
          {/* Brand */}
          <div >
            <a href="/" className="inline-flex items-center gap-2 rounded-xl bg-white p-1.5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center sm:h-11 sm:w-11">
                <img
                  src="/logo.png"
                  alt="LabourFlow"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 pr-1.5">
                {/* Brand Name */}
                <p className="text-lg font-extrabold tracking-tight sm:text-[24px]">
                  <span className="text-[#0B1F3A]">Labour</span>
                  <span className="text-[#0F7A6C]">Flow</span>
                </p>

                <p className="-mt-0.5 text-[8px] font-bold tracking-[0.2em] text-[#0B1F3A]">
                  COMPLIANCE. SIMPLIFIED.
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/55 sm:mt-6 sm:leading-7">
              {data.description}
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-2.5 sm:mt-6">
              {data.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    text-white/65
                    transition-all
                    duration-200
                    hover:border-[#8ed6ca]/30
                    hover:bg-[#8ed6ca]
                    hover:text-[#0f3153]
                  "
                >
                  {s.icon === "instagram" ? (
                    <span className="text-[11px] font-extrabold">
                      IG
                    </span>
                  ) : (
                    <span className="text-xs font-extrabold">
                      in
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8ed6ca]">
              Explore
            </p>

            <div className="mt-4 space-y-3 sm:mt-5">
              <a
                href="#modules"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Modules
              </a>

              <a
                href="#problem"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Problem
              </a>

              <a
                href="#product"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Solution
              </a>

              <a
                href="#how-it-works"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                How It Works
              </a>

              <a
                href="#why-us"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Why Us
              </a>

              <a
                href="#who-its-for"
                className="block text-sm text-white/60 transition hover:text-white"
              >
                Who It's For
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8ed6ca]">
              Get in touch
            </p>

            <div className="mt-4 space-y-3 sm:mt-5">
              <a
                href="mailto:labourflow01@gmail.com"
                className="
                  block truncate rounded-xl border border-white/10
                  bg-white/5 px-4 py-3
                  text-sm text-white/70
                  transition
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                labourflow01@gmail.com
              </a>

              <a
                href="tel:+919727927266"
                className="
                  block rounded-xl border border-white/10
                  bg-white/5 px-4 py-3
                  text-sm text-white/70
                  transition
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                +91 97279 27266
              </a>
            </div>

            <a
              href="#early-access"
              className="
                mt-5 inline-flex items-center
                rounded-full
                bg-[#128276]
                px-5 py-2.5
                text-xs font-bold
                text-white
                transition
                hover:bg-[#159688]
              "
            >
              Get Launch Updates
              <Icon name="arrow" className="ml-2" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 px-5 py-5 sm:px-8 md:px-10 lg:px-12">
          <div className="flex flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {data.copyright}
            </span>

            <span className="font-medium">
              labourflow.in
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}