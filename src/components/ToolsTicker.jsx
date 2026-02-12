const tools = 'Nmap • Burp Suite • Metasploit • BloodHound • Mimikatz • Hashcat • SQLmap • ffuf • winPEAS • PowerSploit • Wireshark • Kali Linux • VMware • '

export default function ToolsTicker() {
  return (
    <section className="section-shell">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Tools & Technologies</h2>
      <div className="glass-card rounded-full overflow-hidden py-3">
        <div className="flex w-max gap-8 animate-marquee font-['JetBrains_Mono'] text-neonBlue text-sm pl-6 whitespace-nowrap">
          <span>{tools}</span>
          <span>{tools}</span>
        </div>
      </div>
    </section>
  )
}
