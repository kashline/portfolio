import Section from "@/app/components/Section";

type Role = {
  title: string;
  company: string;
  period: string;
  bullets: string[];
};

// Role history drawn from resume — SRE / DevOps experience that underpins
// current full-stack work.
const roles: Role[] = [
  {
    title: "SRE 3, Observability",
    company: "Box",
    period: "2022 — 2023",
    bullets: [
      "Automated regular patching of hundreds of P1 infrastructure hosts using Python, reducing weekly team workload by dozens of hours.",
      "Built a custom RHEL package and Puppet manifests to deploy the Vector log-tailing agent across multiple system architectures.",
      "Established monitoring-as-code for the team's services, managing alerting and service-health dashboards through single-commit changes.",
      "Onboarded services to continuous delivery, using service-health KPIs to enable one-commit deployments to production.",
      "Led delivery of a service that handled a time-consuming alert remediation automatically.",
    ],
  },
  {
    title: "Senior Site Reliability Engineer",
    company: "Advisor Engine",
    period: "2018 — 2022",
    bullets: [
      "Built a Go API to handle build metadata — software version tracking, deployment status, and more.",
      "Built a Slack-integrated chat bot in JavaScript to handle ad-hoc requests, queue deployments, and manage user access.",
      "Built a modern monitoring solution from the ground up using ELK, Telegraf, Prometheus/InfluxDB, Grafana, New Relic, and Splunk.",
      "Migrated Terraform-managed Kubernetes clusters to EKS while implementing security improvements.",
      "Designed a disaster-recovery process ensuring multi-region failover and full functionality restoration in under 24 hours.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Dude Solutions",
    period: "2016 — 2018",
    bullets: [
      "Managed the CI/CD pipeline for C# workloads using TeamCity and Octopus Deploy.",
      "Founded the DevOps chapter group to identify SDLC pain points and guide contributions across the wider organisation.",
      "Created new paved paths for deployables including Qlik Sense applications, ClickOnce applications, and Docker Swarm.",
      "Wrote C# applications to automatically create and link monitoring resources for each new microservice.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked."
    >
      <ol className="relative border-l border-zinc-800 pl-6 space-y-10">
        {roles.map((r, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 ring-4 ring-zinc-950"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-zinc-100">
                {r.title}{" "}
                <span className="text-zinc-400 font-normal">· {r.company}</span>
              </h3>
              <p className="text-sm text-zinc-500 font-mono">{r.period}</p>
            </div>
            <ul className="mt-3 space-y-2 text-zinc-300 leading-relaxed list-disc list-outside ml-5">
              {r.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
