const projects = [
  {
    title: 'Active Directory Attack Simulation',
    lines: [
      'Built a corporate-style Active Directory lab environment.',
      'Achieved full domain compromise from low-privilege access.',
      'Mapped detection gaps and defensive control improvements.'
    ]
  },
  {
    title: 'Enterprise-Style Security Labs',
    lines: [
      'Completed 50+ real-world attack simulations.',
      'Executed end-to-end attack chains from recon to post-exploitation.',
      'Produced compliance-aligned technical reports and risk summaries.'
    ]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects & Research</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <article key={project.title} className="glass-card p-6">
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-slate-200">
              {project.lines.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
