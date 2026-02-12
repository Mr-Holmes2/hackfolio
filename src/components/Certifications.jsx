const certs = [
  'OSCP – Offensive Security (Dec 2025)',
  'OSEP – In Progress',
  'CEH Practical (July 2025)',
  'Google Cybersecurity Certificate (Oct 2024)'
]

export default function Certifications() {
  return (
    <section className="section-shell">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Certifications</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {certs.map((cert) => (
          <article key={cert} className="glass-card p-5 text-center font-semibold text-sm border-cyan-200/20">
            {cert}
          </article>
        ))}
      </div>
    </section>
  )
}
