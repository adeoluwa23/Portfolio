export const profile = {
  name: 'Fakehinde Adeoluwa Olaoluwa',
  shortName: 'Adeoluwa',
  role: 'AI Engineer & Developer',
  tagline: 'AI Engineer & Developer building intelligent, production-ready software.',
  bio: "I'm an AI engineer and developer who builds backend and full-stack applications powered by large language models. I enjoy turning ideas into reliable, real-world products.",
  email: 'olaoluwaadeoluwa985@gmail.com',
}

export const socials = {
  github:'https://github.com/adeoluwa23', // TODO: add your GitHub link
  linkedin: '#', // TODO: add your LinkedIn link
  email: `mailto:${profile.email}`,
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  'Python',
  'FastAPI',
  'LLM APIs',
  'LangChain',
  'RAG',
  'React',
  'SQL',
  'Git',
]

// Placeholder projects. Replace these with your real ones later.
export const projects = [
  {
    title: 'Project One',
    description:
      'A short description of what this project does and the problem it solves.',
    tech: ['Python', 'FastAPI', 'SQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description:
      'A short description of what this project does and the problem it solves.',
    tech: ['React', 'LangChain', 'RAG'],
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description:
      'A short description of what this project does and the problem it solves.',
    tech: ['Python', 'LLM APIs', 'Git'],
    github: '#',
    live: '#',
  },
]
export const highlights = [
  {
    title: 'Backend',
    text: 'APIs and services built with Python and FastAPI, backed by SQL databases.',
  },
  {
    title: 'LLM applications',
    text: 'Products powered by LLM APIs, LangChain, and retrieval-augmented generation (RAG).',
  },
  {
    title: 'Full-stack',
    text: 'Responsive React interfaces connected to the services I build.',
  },
]