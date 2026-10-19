import { navLinks, profile, socials } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 px-4 py-10 sm:px-6 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <a
            href="#hero"
            className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-lg font-bold text-transparent"
          >
            {profile.shortName}
          </a>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 transition-colors hover:text-indigo-500 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <a
          href="#hero"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  )
}