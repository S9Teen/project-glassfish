// Years (since 2004) and countries (Algeria, Tunisia, Mauritania) come from vitrosak.com.
// PLACEHOLDER: projects figure — confirm with VitroSak before launch.
const stats = [
  { value: 20, suffix: '+', label: 'Years of experience' },
  { value: 1200, suffix: '+', label: 'Projects delivered' },
  { value: 3, suffix: '', label: 'Countries served' },
  { value: 100, suffix: '%', label: 'Panels inspected' },
]

export default function Stats() {
  return (
    <section className="pb-12 pt-16 sm:pb-14 sm:pt-20">
      <div className="container-site">
        <div className="card grid grid-cols-2 gap-y-10 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:py-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              className={`px-3 sm:px-6 ${i % 2 ? 'border-l border-navy/10' : ''} ${i > 0 ? 'lg:border-l lg:border-navy/10' : ''}`}
            >
              <p
                data-count={s.value}
                data-suffix={s.suffix}
                className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium leading-none text-navy"
              >
                {s.value.toLocaleString('en-US')}
                {s.suffix}
              </p>
              <p className="mt-3 text-sm text-navy/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
