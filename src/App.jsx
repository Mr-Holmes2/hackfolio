import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ToolsTicker from './components/ToolsTicker'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(99,244,255,.08),transparent_55%)]" />
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <ToolsTicker />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
