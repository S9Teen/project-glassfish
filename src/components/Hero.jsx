import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Glass panes fanned along a diagonal. Position/size are % of the stage.
const panes = [
  { left: 0, top: 44, w: 34, h: 58, z: 1, tex: 'tex-stripes' },
  { left: 16, top: 4, w: 32, h: 64, z: 6, tex: 'pane-front', logo: true },
  { left: 38, top: 20, w: 28, h: 56, z: 5, tex: 'pane-blue' },
  { left: 53, top: 13, w: 26, h: 54, z: 4, tex: 'tex-dots' },
  { left: 67, top: 7, w: 24, h: 52, z: 3, tex: '' },
  { left: 80, top: 2, w: 22, h: 50, z: 2, tex: 'opacity-70' },
]


export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      '(prefers-reduced-motion: no-preference)',
      () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('[data-hero-line]', { yPercent: 110, duration: 1.1, stagger: 0.12 })
          .from('[data-hero-fade]', { y: 20, opacity: 0, duration: 0.8, stagger: 0.08 }, '-=0.7')
          .from(
            '[data-pane]',
            { y: 180, rotationX: -30, opacity: 0, duration: 1.6, stagger: 0.09, ease: 'expo.out' },
            0.15,
          )

        // Idle float — each pane breathes on its own rhythm
        gsap.utils.toArray('[data-float]').forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 ? -14 : 14,
            duration: 3.2 + i * 0.45,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })

        // Mouse parallax on the whole stage
        const stage = root.current.querySelector('[data-stage]')
        const rotY = gsap.quickTo(stage, 'rotationY', { duration: 1.2, ease: 'power3.out' })
        const rotX = gsap.quickTo(stage, 'rotationX', { duration: 1.2, ease: 'power3.out' })
        const onMove = (e) => {
          rotY((e.clientX / window.innerWidth - 0.5) * 10)
          rotX((e.clientY / window.innerHeight - 0.5) * -8)
        }
        window.addEventListener('pointermove', onMove)

        // Panes lift away as the page scrolls
        gsap.to(stage, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })

        return () => window.removeEventListener('pointermove', onMove)
      },
      root,
    )

    return () => mm.revert()
  }, [])

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate overflow-hidden bg-gradient-to-br from-paper via-[#EEF4FD] to-[#DCE9FC] pt-16 dark:via-[#0A1A30] dark:to-[#0D2A50] sm:pt-20"
    >
      {/* Faint construction grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(var(--ink)/0.05)_1px,transparent_1px)] bg-[size:160px_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div aria-hidden="true" className="absolute -right-40 top-10 -z-10 h-[720px] w-[720px] rounded-full bg-bright/25 blur-[140px]" />

      <div className="container-site relative grid items-center gap-2 pb-12 pt-8 sm:pt-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-0 lg:pb-16">
      <div className="relative z-10 flex flex-col">
        <HeroCopy />
      </div>

      {/* Visual stage — sits right next to the copy; stacks below it on mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative h-[340px] [perspective:1600px] xs:h-[420px] sm:h-[520px] lg:-mr-10 lg:h-[680px]"
      >
        <div data-stage className="relative h-full w-full [transform-style:preserve-3d]">
          {panes.map((p, i) => (
            <div
              key={i}
              className="absolute [transform:rotateY(-34deg)_rotateX(10deg)_rotateZ(-16deg)] [transform-style:preserve-3d]"
              style={{ left: `${p.left}%`, top: `${p.top + 8}%`, width: `${p.w}%`, height: `${p.h}%`, zIndex: p.z }}
            >
              <div data-float className="h-full w-full">
                <div data-pane className={`glass-pane h-full w-full ${p.tex}`}>
                  {p.logo && (
                    <img src="brand/logo-symbol-white.svg" alt="" className="absolute left-1/2 top-[38%] w-[42%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_4px_12px_rgba(20,94,172,0.35)]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <>
        <p data-hero-fade className="text-xs font-medium uppercase tracking-[0.2em] text-navy/50">
          Tempered glass for homes · offices · events
        </p>

        <div className="relative mt-6 max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,9vw,2.75rem)] sm:text-[clamp(3rem,5.6vw,5.75rem)] font-medium leading-[0.98] tracking-tight text-navy">
            <span className="block overflow-hidden pb-1"><span data-hero-line className="block">Glass engineered</span></span>
            <span className="block overflow-hidden pb-1"><span data-hero-line className="block">for clearer</span></span>
            <span className="block overflow-hidden pb-2"><span data-hero-line className="block text-bright">living spaces</span></span>
          </h1>
        </div>

        <p data-hero-fade className="mt-7 max-w-md text-base leading-relaxed text-navy/65 sm:text-lg">
          VitroSak manufactures high-performance tempered glass for homes, offices and events — cut to size,
          heat-strengthened and finished to the millimetre.
        </p>

        <div data-hero-fade className="mt-9 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary px-7 py-3.5">
            Request a quote
            <Arrow />
          </a>
          <a href="#products" className="btn border border-navy/10 bg-white/60 px-7 py-3.5 text-navy backdrop-blur hover:bg-white">
            Explore products
          </a>
        </div>

        {/* PLACEHOLDER figure — replace with real numbers */}
        <div data-hero-fade className="mt-10 flex items-center gap-4">
          <div className="flex -space-x-2">
            {['bg-deep', 'bg-royal', 'bg-bright'].map((c) => (
              <span key={c} className={`grid h-9 w-9 place-items-center rounded-full border-2 border-paper ${c}`}>
                <img src="brand/logo-symbol-white.svg" alt="" className="w-5" />
              </span>
            ))}
          </div>
          <p className="text-sm leading-snug text-navy/60">
            1,200+ projects delivered
            <br />
            across homes, offices & events
          </p>
        </div>
    </>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
