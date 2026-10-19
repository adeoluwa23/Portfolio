import { profile, highlights } from '../data'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A little about me" />

        <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          {profile.bio}
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}