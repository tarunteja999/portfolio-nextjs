export default function Navbar() {
  return (
    <header className="border-b border-white/10" role="navigation" aria-label="Main">
      <div className="container py-4 flex items-center justify-between">
        <div className="font-semibold">Tarun Teja Akkipalli</div>
        <nav className="space-x-6 text-sm">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certs">Certifications</a>
          <a href="#contact">Contact</a>
          <a href="/Tarun-Teja-Akkipalli-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  )
}
