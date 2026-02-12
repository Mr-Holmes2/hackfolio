const roles = [
  {
    title: 'Security Analyst – Offensive Security / VAPT',
    org: 'Cyber Defentech',
    period: 'Aug 2025 – Jan 2026',
    points: [
      'Performed web and Active Directory penetration testing under NDA.',
      'Executed lateral movement and post-exploitation attack chains.',
      'Discovered critical AD misconfiguration enabling full domain compromise.',
      'Reduced critical-risk exposure across 20+ enterprise systems.',
      'Delivered executive-level remediation reporting and was recognized by CEO.'
    ]
  },
  {
    title: 'Security Analyst Intern – VAPT',
    org: 'Huntmetrics Pvt. Ltd.',
    period: 'Aug 2024 – Sept 2024',
    points: [
      'Performed reconnaissance and vulnerability identification.',
      'Used Nmap, Nessus, and Metasploit during assessments.',
      'Delivered mitigation guidance to reduce exploitability.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-4">
        {roles.map((role) => (
          <article key={role.title} className="glass-card p-6">
            <h3 className="font-semibold text-lg">{role.title}</h3>
            <p className="text-neonBlue text-sm font-['JetBrains_Mono'] mt-1">{role.org} | {role.period}</p>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-200 text-sm">
              {role.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
