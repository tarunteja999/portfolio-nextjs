type Props = {
  title: string
  description: string
  tech: string[]
  demo?: string
  code?: string
}

export default function ProjectCard({ title, description, tech, demo, code }: Props) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>
      <div className="mb-3">
        {tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <div className="space-x-4 text-sm">
        {demo && <a href={demo} target="_blank" rel="noreferrer">Live Demo ↗</a>}
        {code && <a href={code} target="_blank" rel="noreferrer">View Code ↗</a>}
      </div>
    </div>
  )
}
