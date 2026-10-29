import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

// PLACEHOLDER partner names — replace with real client logos (SVG) in /public/partners.
const partners = ['Atlas Build', 'Groupe Medina', 'Sahel Hotels', 'Nova Bank', 'Oran Expo', 'Tell Retail', 'BTP Horizon', 'Maghreb Offices']

export default function Trusted() {
  const track = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Track holds the list twice, so sliding by half loops seamlessly
      const tween = gsap.to(track.current, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
      const el = track.current
      const slow = () => gsap.to(tween, { timeScale: 0.2, duration: 0.6 })
      const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.6 })
      el.addEventListener('pointerenter', slow)
      el.addEventListener('pointerleave', resume)
      return () => {
        el.removeEventListener('pointerenter', slow)
        el.removeEventListener('pointerleave', resume)
      }
    })
    return () => mm.revert()
  }, [])

  return (
    <section className="pb-16 sm:pb-20">
      <div className="container-site">
        <div data-reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Trusted by</p>
            <h2 className="mt-3 font-display text-2xl font-medium text-navy sm:text-3xl">
              Builders, brands and institutions across the region.
            </h2>
          </div>
          <p className="text-sm text-navy/55">Algeria · Tunisia · Mauritania</p>
        </div>
      </div>

      <div
        data-reveal
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <ul ref={track} className="flex w-max">
          {[...partners, ...partners].map((name, i) => (
            <li key={i} aria-hidden={i >= partners.length} className="px-2 sm:px-3">
              <div className="card flex h-20 w-48 items-center justify-center gap-3 rounded-2xl px-5 text-navy/60 transition-colors hover:text-navy sm:h-24 sm:w-56">
                <span className="glass-pane glass-pane-sm h-7 w-5 shrink-0 rounded-md pane-blue [transform:skewX(-14deg)]" />
                <span className="whitespace-nowrap font-display text-lg font-medium">{name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
