import { useRef, useState } from 'react'
import { UploadCloud, RefreshCw } from 'lucide-react'

export default function Studio() {
  const inputRef = useRef(null)
  const canvasRef = useRef(null)
  const [image, setImage] = useState(null)

  const onPick = () => inputRef.current?.click()

  const onFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setImage(url)
    // simple draw to canvas for mock try-on area
    requestAnimationFrame(() => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        // Placeholder: subtle ring guide overlay
        ctx.strokeStyle = 'rgba(168,85,247,0.9)'
        ctx.lineWidth = 6
        const r = Math.min(canvas.width, canvas.height) * 0.12
        ctx.beginPath()
        ctx.arc(canvas.width * 0.55, canvas.height * 0.6, r, 0, Math.PI * 2)
        ctx.stroke()
      }
      img.src = url
    })
  }

  const reset = () => {
    setImage(null)
    const c = canvasRef.current
    if (c) {
      const ctx = c.getContext('2d')
      ctx.clearRect(0, 0, c.width, c.height)
    }
  }

  return (
    <section id="studio" className="relative bg-[#0b0b12] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Try‑On Studio</h2>
          <div className="text-sm text-white/60">Alpha preview</div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <p className="text-white/80">Upload a hand photo to preview a ring overlay.</p>
              <div className="flex items-center gap-2">
                <button onClick={onPick} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-600 px-4 py-2 text-white">
                  <UploadCloud className="h-4 w-4" /> Upload
                </button>
                <button onClick={reset} className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-white/80 hover:bg-white/5">
                  <RefreshCw className="h-4 w-4" /> Reset
                </button>
              </div>
            </div>
            <input ref={inputRef} type="file" accept="image/*" hidden onChange={onFile} />
            <div className="mt-4 overflow-auto rounded-xl border border-white/10 bg-black/50 p-2">
              <canvas ref={canvasRef} className="mx-auto w-full max-h-[70vh]" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
            <h3 className="text-white">Style Controls</h3>
            <p className="mt-2 text-sm leading-relaxed">Interactive sliders will appear here to tune size, glow, metal finish and reflections. For now, upload a photo and preview the placement guide.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              <li>Drag to adjust the ring position (coming soon)</li>
              <li>AI alignment and lighting match in backend (planned)</li>
              <li>Export stills and loops</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
