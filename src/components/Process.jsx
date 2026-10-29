import SectionHeader from './SectionHeader'

const steps = [
  { title: 'Measure & design', text: 'We survey the site or work from your drawings to define exact dimensions and fixings.' },
  { title: 'Cut & finish', text: 'CNC cutting, drilling and edge polishing are completed before the glass is tempered.' },
  { title: 'Temper', text: 'Panels are heated above 600 °C and quenched with air to lock in surface compression.' },
  { title: 'Inspect & install', text: 'Each panel is quality-checked, packed and delivered — with installation on request.' },
]

export default function Process() {
  return (
    <section id="process" className="section isolate overflow-hidden bg-deep text-white dark:bg-[#05101F]">
      <div aria-hidden="true" className="absolute -right-32 top-0 -z-10 h-[480px] w-[480px] rounded-full bg-royal/50 blur-[140px]" />
      <div aria-hidden="true" className="absolute -bottom-40 left-0 -z-10 h-[380px] w-[380px] rounded-full bg-bright/20 blur-[140px]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:160px_100%]" />

      <div className="container-site relative">
        <SectionHeader
          dark
          eyebrow="Our process"
          title="From raw float glass to finished panel."
          text="Four controlled stages, all under one roof, so quality and lead times stay in our hands."
        />

        <ol className="relative mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div
            data-line
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-bright via-bright/40 to-transparent lg:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="relative">
              <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-deep font-display text-sm text-bright shadow-[0_0_0_6px_rgba(39,137,255,0.08)] dark:bg-[#05101F]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="glass mt-6 h-[calc(100%-4.5rem)] rounded-3xl p-6 transition-colors duration-300 hover:bg-white/[0.1]">
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
