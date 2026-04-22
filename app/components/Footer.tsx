export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} Kevin Ashline. Built with Next.js &
          Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kashline"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-ashline/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kevin.ashline92@gmail.com"
            className="hover:text-zinc-200 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
