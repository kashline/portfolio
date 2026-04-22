import Image from "next/image";
import Section from "@/app/components/Section";

type ProjectObj = {
  title: string;
  url: string;
  description: string;
  tools: string[];
};

const commonTools = ["Next.js", "React", "TypeScript", "Tailwind", "Postgres"];

const projectData: ProjectObj[] = [
  {
    title: "Video Generation Pipeline",
    url: "https://video-generation-pipeline-silk.vercel.app/",
    description:
      "Generates videos by using trending topics and relevant sources to produce a script, narration, and final video — fully automated and highly customizable.",
    tools: ["Gemini", "Claude", "HeyGen", "ElevenLabs", "FFmpeg", "Remotion", "pgvector", "Prisma", ...commonTools],
  },
  {
    title: "Semantic Space Explorer",
    url: "https://semantic-space-explorer.vercel.app/",
    description:
      "A collection of word games that let you explore how language models represent meaning through vector embeddings.",
    tools: ["pgvector", "Drizzle", ...commonTools],
  },
  {
    title: "AI Chess",
    url: "https://ai-chess-xi.vercel.app/",
    description:
      "A full-stack chess interface that evaluates AI prompts against the Stockfish engine. Golang and Python workers run Stockfish in Docker containers and return move scores in real time, backed by Redis caching, Sequelize-tracked game state, and a ranked-bots system that simulates large-scale game activity on a global leaderboard.",
    tools: ["OpenAI", "Go", "GORM", "Python", "Flask", "Stockfish", "Redis", "Sequelize", "Auth.js", "GCP", ...commonTools],
  },
  {
    title: "Recipe Buddy",
    url: "https://recipe-buddy-next.vercel.app/",
    description:
      "A full-stack recipe manager supporting create / edit / share flows with persistent user accounts, comments, and ratings. Built on the Next.js App Router with Server Actions and middleware, authenticated via Auth.js, and deployed as Vercel serverless functions.",
    tools: ["Next.js App Router", "Server Actions", "Auth.js", "Sequelize", ...commonTools],
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built."
      subtitle="A selection of side projects exploring AI, data, and full-stack engineering."
    >
      <div className="flex flex-col gap-16">
        {projectData.map((project, index) => {
          const imageFirst = index % 2 === 0;
          const screenshot = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`;

          return (
            <article
              key={project.title}
              className={`flex flex-col gap-8 md:flex-row md:items-center ${
                imageFirst ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Screenshot */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-1/2 shrink-0 group overflow-hidden rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors block"
              >
                <Image
                  src={screenshot}
                  alt={`${project.title} preview`}
                  width={720}
                  height={450}
                  className="w-full h-52 sm:h-64 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
              </a>

              {/* Content */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase accent-text mb-2">
                    Project {String(index + 1).padStart(2, "0")}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-2"
                  >
                    <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors text-lg">
                      ↗
                    </span>
                  </a>
                  <p className="mt-3 text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="px-2.5 py-1 text-xs rounded-md bg-zinc-950/60 border border-zinc-800 text-zinc-400"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
