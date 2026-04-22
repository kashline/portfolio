export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="glow-bg" aria-hidden />
      <p className="text-sm font-medium tracking-widest uppercase accent-text mb-4">
        Full-Stack Engineer · SRE Background
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
        <span className="text-zinc-100">Hi, I&apos;m </span>
        <span className="accent-text">Kevin Ashline</span>
        <span className="text-zinc-100">.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
        I build full-stack web products with a site-reliability engineer&apos;s
        instinct for what holds up in production. Nearly a decade of SRE and
        DevOps work across AWS, Kubernetes, and observability platforms informs
        every app I ship — from AI-driven prototypes to serverless Next.js
        applications.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-blue-500 to-emerald-500 text-zinc-950 font-medium hover:opacity-90 transition-opacity"
        >
          View projects
          <span aria-hidden>→</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-zinc-100 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
