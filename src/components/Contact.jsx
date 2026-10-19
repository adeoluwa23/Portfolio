import { useState } from 'react'
import { profile, socials } from '../data'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable: the visible email text can still be copied by hand
    }
  }

  return (
    <section
      id="contact"
      className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex justify-center">
          <SectionHeading eyebrow="Contact" title="Let's work together" />
        </div>

        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I'm open to new projects and opportunities. If you have an idea, a
          role, or just want to say hello, my inbox is open.
        </p>

        <p className="mt-6 break-all font-medium text-slate-800 dark:text-slate-200">
          {profile.email}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={socials.email}
            className="rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            Say hello
          </a>
          <button
            onClick={copyEmail}
            className="min-w-36 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-500 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <ul className="mt-10 flex items-center justify-center gap-6 text-sm font-medium">
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
      </div>
    </section>
  )
}