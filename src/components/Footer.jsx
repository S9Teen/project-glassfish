const columns = [
  { title: 'Products', links: ['Clear tempered', 'Laminated', 'Frosted & satin', 'Back-painted'] },
  { title: 'Company', links: ['About us', 'Projects', 'Certifications', 'Careers'] },
  // PLACEHOLDER contact details
  { title: 'Contact', links: ['contact@vitrosak.com', '+000 000 000 000', 'Sétif, Algeria'] },
]

export default function Footer() {
  return (
    <footer className="bg-deep pb-[env(safe-area-inset-bottom)] text-white dark:border-t dark:border-white/10 dark:bg-[#05101F]">
      <div className="container-site grid grid-cols-2 gap-10 py-14 sm:py-16 md:grid-cols-[1.3fr_repeat(3,1fr)] md:gap-12">
        {/* Brand column spans full width on mobile */}
        <div className="col-span-2 md:col-span-1">
          <img src="brand/logo-horizontal-white.svg" alt="VitroSak" className="-ml-3 h-16 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            High-quality tempered glass for homes, offices and events — manufactured with precision.
          </p>
        </div>
        {columns.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold">{c.title}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/55">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-bright">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} VitroSak. All rights reserved.</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  )
}
