"use client"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-secondary">Wear</span>Models
        </div>
      </div>

      <nav className="flex items-center space-x-2">
        <a
          href="#home"
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Home
        </a>
        <a
          href="#labs"
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Labs
        </a>
        <a
          href="#about"
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="px-6 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm transition-all duration-300 hover:bg-secondary/90 cursor-pointer">
          Get Quote
        </button>
      </div>
    </header>
  )
}
