import SectionHeader from './SectionHeader'
import GlassStack from './GlassStack'

const items = [
  {
    tag: '01',
    title: 'Residential',
    text: 'Shower enclosures, balustrades, sliding doors, kitchen splashbacks and frameless windows that bring light into every room.',
    textures: ['tex-stripes', 'pane-front', ''],
  },
  {
    tag: '02',
    title: 'Offices & commercial',
    text: 'Glass partitions, meeting rooms, storefronts and facades engineered for acoustics, privacy and everyday durability.',
    textures: ['pane-front', 'pane-blue', 'tex-dots'],
  },
  {
    tag: '03',
    title: 'Events & exhibitions',
    text: 'Display cases, stage panels and modular structures — fast to fabricate, safe in crowds and easy to reinstall.',
    textures: ['tex-dots', 'pane-blue', 'tex-stripes'],
  },
]

export default function Applications() {
  return (
    <section id="applications" className="section section-soft">
      <div className="grid-lines" />
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Where our glass lives"
            title="One material, engineered for three very different spaces."
          />
          <a data-reveal href="#contact" className="btn-outline self-start lg:self-auto">
            Discuss your project
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <article key={item.title} data-reveal className="card card-hover group overflow-hidden p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#EAF2FD] to-[#CFE2FB] dark:from-[#0D2440] dark:to-[#12376A]">
                <GlassStack textures={item.textures} />
                <span className="absolute left-4 top-4 z-20 rounded-full bg-surface/70 px-3 py-1 font-display text-xs text-navy/70 backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-medium sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
