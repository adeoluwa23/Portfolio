export default function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-500 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400" />
    </div>
  )
}