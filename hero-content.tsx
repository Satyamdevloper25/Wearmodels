"use client"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-sm font-medium relative z-10">✨ Professional Model Photography</span>
        </div>

        <h1 className="text-5xl md:text-7xl md:leading-tight tracking-tight font-light text-white mb-6">
          Transform Your
          <br />
          <span className="font-medium italic instrument text-secondary">Mockups</span> Into
          <br />
          <span className="font-light tracking-tight text-white">Professional Images</span>
        </h1>

        <p className="text-lg font-light text-white/80 mb-8 leading-relaxed max-w-xl">
          Convert plain product mockups into stunning professional model photography and videos. High-quality imagery
          that elevates your brand and drives conversions.
        </p>

        <div className="flex items-center gap-6 flex-wrap">
          <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm transition-all duration-200 hover:bg-secondary/90 cursor-pointer">
            Start Your Project
          </button>
          <button className="px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-medium text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            View Portfolio
          </button>
        </div>
      </div>
    </main>
  )
}
