import SectionHeader from './SectionHeader'

const products = [
  { name: 'Clear tempered', spec: '4 – 19 mm', text: 'Our core panel. Maximum transparency for doors, partitions and enclosures.', tex: 'pane-front' },
  { name: 'Laminated tempered', spec: 'Multi-layer', text: 'Two tempered sheets bonded with an interlayer for overhead and balustrade safety.', tex: 'tex-stripes' },
  { name: 'Frosted & satin', spec: 'Acid-etched', text: 'Soft, even diffusion for privacy without sacrificing daylight.', tex: 'tex-dots' },
  { name: 'Tinted & reflective', spec: 'Solar control', text: 'Bronze, grey and blue tints that cut glare and heat on facades.', tex: 'pane-blue' },
  { name: 'Back-painted', spec: 'Any RAL colour', text: 'Durable colour-coated panels for splashbacks, walls and branded interiors.', tex: 'pane-blue' },
  { name: 'Insulated units', spec: 'Double glazing', text: 'Tempered IGUs for thermal and acoustic performance in windows and facades.', tex: 'tex-stripes' },
]

export default function Products() {
  return (
    <section id="products" className="section section-soft">
      <div className="grid-lines" />
      <div className="container-site">
        <SectionHeader
          align="center"
          eyebrow="Product range"
          title="Glass for every specification."
          text="Every product is available cut-to-size with polished edges, holes, notches and hardware cut-outs."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {products.map((p, i) => (
            <article key={p.name} data-reveal className="card card-hover group relative overflow-hidden p-6 sm:p-8">
              {/* Mini pane swatch */}
              <div aria-hidden="true" className="absolute -right-6 -top-6 h-28 w-20 [perspective:500px]">
                <div className={`glass-pane glass-pane-sm h-full w-full ${p.tex} transition-transform duration-500 [transform:rotateY(-30deg)_rotateZ(-14deg)] group-hover:[transform:rotateY(-10deg)_rotateZ(-6deg)]`} />
              </div>
              <span className="font-display text-sm text-navy/40">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 text-xl font-medium sm:text-2xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">{p.text}</p>
              <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5">
                <span className="rounded-full bg-bright/10 px-3 py-1 text-xs font-medium text-bright">{p.spec}</span>
                <span className="text-sm font-medium text-bright transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
