import { profile, socials } from '../data'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', href: socials.github, icon: <GithubIcon />, external: true },
  { label: 'LinkedIn', href: socials.linkedin, icon: <LinkedinIcon />, external: true },
  { label: 'Email', href: socials.email, icon: <MailIcon />, external: false },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-16 sm:px-6"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p className="fade-up text-sm font-medium uppercase tracking-widest text-indigo-500 dark:text-cyan-400">
          Hi, my name is
        </p>

        <h1
          className="fade-up mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="bg-linear-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <h2
          className="fade-up mt-3 text-2xl font-semibold text-slate-600 sm:text-3xl dark:text-slate-300"
          style={{ animationDelay: '0.2s' }}
        >
          {profile.role}
        </h2>

        <p
          className="fade-up mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400"
          style={{ animationDelay: '0.3s' }}
        >
          {profile.tagline}
        </p>

        <div
          className="fade-up mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#projects"
            className="rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            Get in touch
          </a>
        </div>

        <ul
          className="fade-up mt-10 flex items-center gap-3"
          style={{ animationDelay: '0.5s' }}
        >
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
              >
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}