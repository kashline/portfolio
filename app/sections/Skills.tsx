import Section from "@/app/components/Section";

type SkillGroup = {
  label: string;
  items: string[];
};

// Skills drawn from both full-stack product work and SRE / infra experience.
const groups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "C#", "Bash", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Remotion"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Flask",
      "Sequelize",
      "Prisma",
      "Drizzle",
      "GORM",
      "Auth.js",
      "Auth0",
    ],
  },
  {
    label: "Data & Storage",
    items: ["PostgreSQL", "pgvector", "Redis", "Kafka"],
  },
  {
    label: "AI / ML",
    items: [
      "OpenAI",
      "Claude",
      "Gemini",
      "ElevenLabs",
      "HeyGen",
      "Embeddings",
      "FFmpeg",
    ],
  },
  {
    label: "Cloud & Infra",
    items: [
      "AWS (EC2, S3, RDS, EKS, Lambda, ECS)",
      "GCP",
      "Vercel",
      "Kubernetes",
      "Helm",
      "Docker",
      "Terraform",
      "Ansible",
      "Puppet",
    ],
  },
  {
    label: "CI/CD & Observability",
    items: [
      "Jenkins",
      "TeamCity",
      "Octopus",
      "Prometheus",
      "Grafana",
      "New Relic",
      "Datadog",
      "Wavefront",
      "ELK",
      "Splunk",
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with."
      subtitle="A working set of the languages, frameworks, and platforms I reach for most often."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.label}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5"
          >
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 mb-4">
              {g.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-950/60 border border-zinc-800 text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
