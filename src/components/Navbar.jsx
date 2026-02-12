const links = [
  ['Impact', '#impact'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact']
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-shell !py-4 flex items-center justify-between">
        <a href="#hero" className="font-['JetBrains_Mono'] text-neonBlue font-semibold tracking-wide">
          root@nawaz:~$
        </a>
        <ul className="hidden md:flex items-center gap-5 text-sm text-softText">
          {links.map(([name, href]) => (
            <li key={name}>
              <a href={href} className="hover:text-neonBlue transition-colors">{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
