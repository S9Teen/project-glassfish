import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/*
  Page-wide GSAP hooks, driven by data attributes:
  - [data-reveal]          fades/slides up when scrolled into view (batched + staggered)
  - [data-parallax="n"]    drifts n px vertically while its section scrolls past
  - [data-count]           counts up from 0 to its value (with optional data-suffix)
  - [data-line]            scales horizontally with scroll (process timeline)
*/
export default function useScrollAnimations() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.set('[data-reveal]', { opacity: 0, y: 36 })
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, stagger: 0.09, ease: 'power3.out', overwrite: true }),
      })

      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const amount = parseFloat(el.dataset.parallax) || 40
        gsap.fromTo(
          el,
          { y: amount },
          { y: -amount, ease: 'none', scrollTrigger: { trigger: el.closest('section') || el, scrub: true } },
        )
      })

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const end = parseFloat(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toLocaleString('en-US') + suffix
          },
        })
      })

      gsap.utils.toArray('[data-line]').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 40%', scrub: true } },
        )
      })
    })

    // Fonts/images can shift layout after load — recalc trigger positions
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)

    return () => {
      window.removeEventListener('load', refresh)
      mm.revert()
    }
  }, [])
}
