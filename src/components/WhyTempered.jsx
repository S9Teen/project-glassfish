import SectionHeader from './SectionHeader'

const features = [
  {
    title: 'Up to 5× stronger',
    text: 'Thermal tempering puts the surface under compression, giving far greater resistance to impact and load than annealed glass.',
    icon: 'M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7l7-4z',
  },
  {
    title: 'Safety by design',
    text: 'If it ever breaks, it shatters into small blunt fragments instead of sharp shards — a safety-glass standard.',
    icon: 'M4 12h4l2-5 4 10 2-5h4',
  },
  {
    title: 'Heat resistant',
    text: 'Handles sudden temperature changes, making it ideal for facades, kitchens and sun-exposed surfaces.',
    icon: 'M12 3v10m0 0a4 4 0 104 4M8 21h8',
  },
  {
    title: 'Made to measure',
    text: 'Every panel is cut, drilled and edge-polished to your drawings before tempering — no compromises on site.',
    icon: 'M4 20L20 4M7 4h13v13',
  },
]

export default function WhyTempered() {
  return (
    <section className="section overflow-hidden">
      {/* Logo slats as a quiet backdrop */}
      <div aria-hidden="true" data-parallax="60" className="pointer-events-none absolute -left-10 top-1/4 w-[46%] space-y-3 opacity-40">
        {[100, 88, 76, 64, 52].map((w) => (
          <div key={w} className="slat h-5 bg-gradient-to-r from-bright/50 to-transparent" style={{ width: `${w}%` }} />
        ))}
      </div>

      <div className="container-site relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Why tempered glass"
            title="Strength you can't see. Safety you can count on."
            text="Our glass is heated to over 600 °C and rapidly cooled, creating a panel that's dramatically tougher while staying perfectly transparent."
          />
          <a data-reveal href="#process" className="btn-outline mt-9">
            See how it's made
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {features.map((f) => (
            <div key={f.title} data-reveal className="card card-hover p-6 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-bright to-royal text-white shadow-[0_10px_24px_-10px_rgba(39,137,255,0.8)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={f.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
