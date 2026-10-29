import { useEffect, useState } from 'react'

const links = [
  { label: 'Applications', href: '#applications' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
    setDark(next)
  }
  return [dark, toggle]
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dark, toggleTheme] = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        scrolled || open ? 'border-b border-navy/5 bg-paper/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between sm:h-20">
        <a href="#top" aria-label="VitroSak home" className="shrink-0">
          <img src="brand/logo-horizontal.svg" alt="VitroSak" className="-ml-3 h-12 w-auto sm:h-14 dark:hidden" />
          <img src="brand/logo-horizontal-white.svg" alt="VitroSak" className="-ml-3 hidden h-12 w-auto sm:h-14 dark:block" />
        </a>

        <ul className="hidden items-center gap-7 text-sm text-navy/70 lg:flex xl:gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-bright">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 bg-surface/60 text-navy backdrop-blur transition-colors hover:border-bright/50"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#contact" className="btn-primary hidden sm:inline-flex">
            Request a quote
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-navy/10 bg-surface/60 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-navy transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-px w-4 bg-navy transition-all ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-navy/5 bg-paper lg:hidden">
          <ul className="container-site flex flex-col py-6">
            {links.map((l) => (
              <li key={l.href} className="border-b border-navy/5">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-2xl text-navy">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Request a quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
