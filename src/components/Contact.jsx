export default function Contact() {
  return (
    <section id="contact" className="section-shell pt-8">
      <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-4">
        <article className="glass-card p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Contact</h2>
          <div className="space-y-2 text-slate-200">
            <p><span className="text-softText">Location:</span> Hyderabad, India</p>
            <p><span className="text-softText">Email:</span> <a href="mailto:shaiknawaz.ahmed@proton.me" className="hover:text-neonBlue">shaiknawaz.ahmed@proton.me</a></p>
            <p><span className="text-softText">Phone:</span> <a href="tel:+919876543210" className="hover:text-neonBlue">+91 98765 43210</a></p>
            <p><span className="text-softText">LinkedIn:</span> <a href="https://www.linkedin.com/in/shaik-nawaz-ahmed" className="hover:text-neonBlue" target="_blank" rel="noreferrer">linkedin.com/in/shaik-nawaz-ahmed</a></p>
          </div>
        </article>
        <article className="glass-card p-6 flex flex-col justify-center gap-3">
          <a href="mailto:shaiknawaz.ahmed@proton.me" className="px-5 py-3 rounded-full font-bold text-slate-950 bg-gradient-to-r from-neonBlue to-neonPurple shadow-neon text-center">
            Hire Me
          </a>
          <a href="/Resume-KSA.txt" download className="px-5 py-3 rounded-full border border-white/20 text-center hover:border-neonBlue/50 transition-colors">
            Download Resume
          </a>
        </article>
      </div>
    </section>
  )
}
