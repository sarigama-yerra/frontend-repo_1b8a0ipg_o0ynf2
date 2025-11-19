import { Sparkles, Fingerprint, Palette, Share2 } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Finish Generator',
    desc: 'Instantly explore chrome, matte, neon-glass, and gemstone accents powered by on-device inference.'
  },
  {
    icon: Fingerprint,
    title: 'Photo Try‑On',
    desc: 'Upload your hand photo and see the ring realistically aligned with lighting and perspective.'
  },
  {
    icon: Palette,
    title: 'Fine Controls',
    desc: 'Tune size, thickness, glow, and reflections using intuitive sliders with live preview.'
  },
  {
    icon: Share2,
    title: 'One‑Tap Share',
    desc: 'Export a clean shot or a looping motion clip to social in seconds.'
  }
]

export default function Features() {
  return (
    <section id="learn" className="relative z-10 bg-[#0b0b12] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-white sm:text-4xl">Designed for exploration</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 transition hover:bg-white/10">
              <div className="mb-3 inline-flex rounded-lg bg-purple-500/20 p-2 text-purple-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
