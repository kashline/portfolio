"use client";

import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-900"
      style={{ height: "var(--nav-height)" }}
    >
      <nav className="max-w-6xl mx-auto h-full px-6 flex items-center justify-between">
        <a
          href="#top"
          className="font-semibold tracking-tight text-zinc-100 hover:opacity-80 transition-opacity"
        >
          <span className="accent-text">KA</span>
          <span className="text-zinc-500"> / </span>
          <span className="text-zinc-300">Kevin Ashline</span>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="sm:hidden text-zinc-300 hover:text-zinc-100"
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <ul className="hidden sm:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? "text-zinc-100 bg-zinc-900"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 text-sm rounded-md bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-zinc-700 hover:border-zinc-500 text-zinc-100 transition-colors"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <ul className="sm:hidden bg-zinc-950/95 border-b border-zinc-900 px-6 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-zinc-300 hover:text-zinc-100 rounded-md hover:bg-zinc-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
