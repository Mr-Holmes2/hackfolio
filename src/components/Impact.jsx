const stats = [
  {
    value: '20+ enterprise systems',
    label: 'secured through offensive validation',
    note: 'Reduced critical-risk exposure with prioritized remediation.'
  },
  {
    value: '300+ users protected',
    label: 'from AD domain compromise risk',
    note: 'Uncovered identity attack paths before exploitation.'
  },
  {
    value: 'Top 10% globally',
    label: 'TryHackMe practical ranking',
    note: 'Consistent hands-on offensive labs and challenge wins.'
  },
  {
    value: 'OSCP | CEH Practical',
    label: 'OSEP currently in progress',
    note: 'Focused growth toward advanced red-team tradecraft.'
  }
]

export default function Impact() {
  return (
    <section id="impact" className="section-shell">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Impact Snapshot</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((item) => (
          <article key={item.value} className="glass-card p-5 hover:border-cyan-300/30 transition group">
            <p className="text-neonBlue font-extrabold text-xl leading-tight">{item.value}</p>
            <p className="text-softText text-sm mt-2">{item.label}</p>
            <p className="text-slate-300 text-xs mt-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
              {item.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
