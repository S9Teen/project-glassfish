import { useState } from 'react'

const sectors = ['Residential', 'Office', 'Event']

// Front-end only: no backend yet. Hook handleSubmit up to an email service / API later.
export default function QuoteCTA() {
  const [sector, setSector] = useState(sectors[0])
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="pb-20 sm:pb-28 lg:pb-32">
      <div className="container-site">
        <div className="relative isolate overflow-hidden rounded-4xl bg-gradient-to-br from-bright via-royal to-deep px-5 py-12 text-white xs:px-8 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-white/20 blur-[120px]" />
          <div aria-hidden="true" data-parallax="40" className="pointer-events-none absolute -bottom-10 right-[38%] -z-10 hidden w-[40%] space-y-3 opacity-30 lg:block">
            {[100, 86, 72, 58].map((w) => (
              <div key={w} className="slat h-4 bg-gradient-to-r from-white/70 to-transparent" style={{ width: `${w}%` }} />
            ))}
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p data-reveal className="eyebrow !text-white/60">Get a quote</p>
              <h2 data-reveal className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02]">
                Tell us about your project.
              </h2>
              <p data-reveal className="mt-5 max-w-md leading-relaxed text-white/75">
                Share a few details and our team will come back with a tailored quotation within one business day.
              </p>
            </div>

            <form data-reveal onSubmit={handleSubmit} className="glass rounded-3xl bg-white/10 p-6 sm:p-8">
              {sent ? (
                <div className="py-10 text-center">
                  <p className="font-display text-2xl font-semibold">Thank you.</p>
                  <p className="mt-2 text-white/75">We'll be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Project type">
                    {sectors.map((s) => (
                      <button
                        key={s}
                        type="button"
                        role="radio"
                        aria-checked={sector === s}
                        onClick={() => setSector(s)}
                        className={`rounded-full px-4 py-2 text-sm transition-colors ${
                          sector === s ? 'bg-white text-deep' : 'border border-white/25 text-white/80 hover:bg-white/10'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Name" name="name" />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                    <label className="sm:col-span-2">
                      <span className="sr-only">Project details</span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Dimensions, thickness, quantity…"
                        className="w-full resize-none rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
                      />
                    </label>
                  </div>
                  <button type="submit" className="btn mt-6 w-full bg-white text-deep hover:bg-white/90">
                    Send request
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', className = '' }) {
  return (
    <label className={className}>
      <span className="sr-only">{label}</span>
      <input
        name={name}
        type={type}
        required={name !== 'phone'}
        placeholder={label}
        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none"
      />
    </label>
  )
}
