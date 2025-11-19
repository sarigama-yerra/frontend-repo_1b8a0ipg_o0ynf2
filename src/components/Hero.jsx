import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('studio')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-8 md:py-24">
        <div className="z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Live 3D Preview
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Virtual AI Ring Try‑On
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Preview futuristic ring styles in real time. Explore neon, metal, and glass finishes with a reactive 3D showcase, then try them on your hand photo in our studio.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <button onClick={handleScroll} className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 px-5 py-3 text-white shadow-lg shadow-purple-700/30 transition hover:brightness-110">
              Open Try‑On Studio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a href="#learn" className="rounded-lg border border-white/10 px-5 py-3 text-white/80 hover:bg-white/5">
              Learn more
            </a>
          </div>
        </div>

        {/* 3D Hero Canvas */}
        <div className="relative h-[60vh] w-full flex-1 md:h-[70vh]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5/0 backdrop-blur-sm" />
          <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Decorative gradient overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent opacity-20" />
        </div>
      </div>
    </section>
  )
}
