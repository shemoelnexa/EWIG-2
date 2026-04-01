import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const textColor = dark ? "text-white" : "text-[#0a0b09]";
  const subtextColor = dark ? "text-white/90" : "text-[#4a4540]";

  return (
    <ScrollReveal className={`max-w-2xl ${alignClass}`}>
      {subtitle && (
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#94a901] mb-5">
          {subtitle}
        </p>
      )}
      <h2 className={`font-heading text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-[1.08] ${textColor}`}>
        {highlight ? (
          <>
            {title.split(highlight)[0]}
            <em className="italic">{highlight}</em>
            {title.split(highlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className={`mt-5 text-[16px] leading-relaxed ${subtextColor} max-w-xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      <div className={`w-14 h-px bg-[#94a901] mt-8 ${align === "center" ? "mx-auto" : ""}`} />
    </ScrollReveal>
  );
}
