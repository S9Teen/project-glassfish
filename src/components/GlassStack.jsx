// Small tilted glass-pane composition — reuses the hero's visual language
// inside cards. IMAGE SLOT: swap for photography when available.
export default function GlassStack({ textures = ['tex-stripes', 'pane-front', 'pane-blue'], logo = false }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 [perspective:900px]">
      {textures.map((t, i) => (
        <div
          key={i}
          className="absolute [transform:rotateY(-32deg)_rotateX(8deg)_rotateZ(-14deg)]"
          style={{ left: `${14 + i * 22}%`, top: `${20 - i * 6}%`, width: '34%', height: '72%', zIndex: 10 - i }}
        >
          <div data-parallax={14 + i * 10} className={`glass-pane glass-pane-sm h-full w-full ${t}`}>
            {logo && i === 1 && (
              <img src="brand/logo-symbol-white.svg" alt="" className="absolute left-1/2 top-[40%] w-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
