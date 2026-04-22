import Section from "@/app/components/Section";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-zinc-100">
            B.S. Computer Science
            <span className="text-zinc-400 font-normal">
              {" "}
              · University of North Carolina at Greensboro
            </span>
          </h3>
          <p className="mt-1 text-zinc-400 text-sm">
            Minor in Mathematics
          </p>
        </div>
        <p className="text-sm text-zinc-500 font-mono">2010 — 2015</p>
      </div>
    </Section>
  );
}
