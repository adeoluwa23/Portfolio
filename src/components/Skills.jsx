import { skills } from '../data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Tools I work with" />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-400"
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 transition group-hover:scale-125"
              />
              <span className="font-medium">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}