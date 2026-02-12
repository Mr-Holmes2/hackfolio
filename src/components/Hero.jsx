import ParticleGrid from './ParticleGrid'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-72px)] flex items-center">
      <ParticleGrid />
      <div className="section-shell grid lg:grid-cols-[1.35fr_1fr] gap-8 items-center">
        <div>
          <p className="text-neonBlue font-['JetBrains_Mono'] text-sm mb-2">● Offensive Security Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Shaik Nawaz Ahmed</h1>
          <div className="mt-4 flex items-center gap-2 font-['JetBrains_Mono'] text-slate-200 text-sm sm:text-base">
            <span>OSCP-Certified Penetration Tester | Offensive Security Specialist</span>
            <span className="inline-block w-2 h-5 bg-neonBlue animate-blink shadow-neon" />
          </div>
          <p className="mt-6 text-softText max-w-3xl">
            Cybersecurity professional with hands-on experience in web, network, and Active Directory penetration testing,
            executing end-to-end attack simulations, identifying high-risk vulnerabilities, and delivering remediation that
            strengthens enterprise security posture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/Resume-KSA.txt" download className="px-6 py-3 rounded-full font-bold text-slate-950 bg-gradient-to-r from-neonBlue to-neonPurple shadow-neon hover:-translate-y-0.5 transition-transform">
              Download Resume
            </a>
            <a href="#experience" className="px-6 py-3 rounded-full border border-white/20 text-slate-100 hover:border-neonBlue/50 transition-colors">
              View Experience
            </a>
          </div>
        </div>

        <div className="glass-card neon-outline p-3 max-w-sm w-full justify-self-center animate-float">
          <div className="rounded-xl border border-white/15 bg-slate-900/70 min-h-80 grid place-items-center text-center p-6">
            <p className="text-neonBlue font-['JetBrains_Mono'] text-sm">Profile Photo Placeholder</p>
            <p className="text-softText text-sm mt-2">Replace with a high-resolution professional headshot.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
