import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <header className="mb-10">
          {eyebrow && (
            <p className="text-sm font-medium tracking-widest uppercase accent-text mb-3">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-zinc-400 max-w-2xl">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
