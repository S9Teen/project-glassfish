export default function SectionHeader({ eyebrow, title, text, align = 'left', dark = false }) {
  const center = align === 'center'
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <p data-reveal className={`eyebrow ${dark ? '!text-white/50' : ''}`}>
        {eyebrow}
      </p>
      <h2 data-reveal className={`heading mt-5 ${dark ? '!text-white' : ''}`}>
        {title}
      </h2>
      {text && (
        <p data-reveal className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/60' : 'text-navy/60'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
