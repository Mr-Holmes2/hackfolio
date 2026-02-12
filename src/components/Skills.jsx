const cards = [
  {
    title: 'Penetration Testing',
    items: ['Web, Network, Active Directory', 'Full attack lifecycle execution', 'Post-exploitation and validation']
  },
  {
    title: 'Active Directory Attacks',
    items: ['Kerberoasting / AS-REP roasting', 'Credential dumping and lateral movement', 'Domain compromise simulation']
  },
  {
    title: 'Reporting & Risk',
    items: ['Executive and technical reporting', 'Compliance-aligned remediation', 'ISO 27001, SAMA, NCA ECC mapping']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Offensive Security Expertise</h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((card) => (
          <article key={card.title} className="glass-card p-6">
            <h3 className="text-neonBlue font-semibold">{card.title}</h3>
            <ul className="mt-3 text-sm text-slate-200 space-y-1 list-disc pl-5">
              {card.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
