import Section from "@/app/components/Section";

const socials: { label: string; href: string }[] = [
  { label: "kevin.ashline92@gmail.com", href: "mailto:kevin.ashline92@gmail.com" },
  { label: "GitHub", href: "https://github.com/kashline" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kevin-ashline/" },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-10 sm:p-14 text-center">
        <div className="glow-bg" aria-hidden />
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Let&apos;s build something together.
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-zinc-400">
          Open to full-stack engineering roles, collaborations, and
          interesting problems at the intersection of product, AI, and
          infrastructure. The fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={
                s.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="px-5 py-2.5 rounded-md border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
