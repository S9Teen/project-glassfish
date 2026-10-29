import SectionHeader from './SectionHeader'
import GlassStack from './GlassStack'

// PLACEHOLDER projects — swap GlassStack for real photography (IMAGE SLOT).
const projects = [
  {
    title: 'Corporate HQ partitions',
    meta: 'Office · 420 m²',
    span: 'lg:col-span-2 lg:row-span-2',
    tone: 'from-[#CFE2FB] via-[#9CC6FF] to-bright dark:from-[#0D2440] dark:via-[#12376A] dark:to-royal',
    textures: ['tex-stripes', 'pane-front', 'pane-blue'],
    logo: true,
  },
  { title: 'Villa pool balustrade', meta: 'Residential', span: '', tone: 'from-[#EAF2FD] to-[#B9D6FB] dark:from-[#0B1E36] dark:to-[#123A6B]', textures: ['pane-front', 'tex-dots', ''] },
  { title: 'Trade fair pavilion', meta: 'Event', span: '', tone: 'from-royal to-deep', textures: ['pane-blue', 'tex-stripes', 'tex-dots'] },
]

export default function Projects() {
  return (
    <section id="projects" className="section pt-8 sm:pt-12">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader eyebrow="Selected work" title="Projects that let the light in." />
          <a data-reveal href="#contact" className="btn-outline self-start lg:self-auto">
            View all projects
          </a>
        </div>

        <div className="mt-12 grid auto-rows-[260px] gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:auto-rows-[280px] lg:grid-cols-3 lg:gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              data-reveal
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.tone} ${p.span} sm:first:col-span-2`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <GlassStack textures={p.textures} logo={p.logo} />
              </div>
              <div className="absolute inset-x-3 bottom-3 z-20 rounded-2xl border border-white/30 bg-deep/35 p-5 text-white backdrop-blur-xl sm:inset-x-4 sm:bottom-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/80">{p.meta}</p>
                <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
