export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={`${center ? "mx-auto max-w-5xl text-center" : "max-w-5xl"}`}
    >
      <p
        className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${
          dark ? "text-[#8ed6ca]" : "text-[#128276]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-4xl ${
          dark ? "text-white" : "text-[#0b223f]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            dark ? "text-white/60" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
