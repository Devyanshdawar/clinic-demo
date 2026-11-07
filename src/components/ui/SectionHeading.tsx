import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 ${
            isCenter ? "mx-auto" : ""
          } bg-brand-50 text-brand-800 border border-brand-200/70`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}

