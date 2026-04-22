import Section from "@/app/components/Section";

const highlights: { label: string; value: string }[] = [
  { label: "Years in industry", value: "9+" },
  { label: "Companies shipped for", value: "3" },
  { label: "Focus", value: "Full-stack · AI" },
  { label: "Based in", value: "Seattle, USA" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer, builder, tinkerer.">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I&apos;m a full-stack engineer whose career started in Site
            Reliability Engineering — building CI/CD pipelines, taming
            Kubernetes clusters, and designing observability stacks for teams
            at Box, Advisor Engine, and Dude Solutions. That foundation shapes
            how I build product: I sweat the details that keep software
            healthy after it ships.
          </p>
          <p>
            These days I spend most of my time in TypeScript, Next.js, and
            Postgres, with a steady fascination for how modern AI tooling can
            be woven into polished, everyday products. My side projects
            explore language models, vector search, and generative media —
            always with an eye toward a clean user experience and an
            architecture that wouldn&apos;t scare an on-call engineer.
          </p>
          <p>
            I like the full arc of building: framing the problem, prototyping
            quickly, wiring up the infrastructure, and pushing a project
            through to something I&apos;d be happy to hand to a real user.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4"
            >
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {h.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-zinc-100">
                {h.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
