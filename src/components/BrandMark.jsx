import { sanctuaryLogo } from '../lib/brandAssets'

export default function BrandMark({
  className = '',
  imageClassName = '',
  textClassName = '',
  showWordmark = true,
}) {
  if (sanctuaryLogo && showWordmark) {
    return (
      <div className={`flex items-center gap-3 ${className}`.trim()}>
        <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/14 bg-white/[0.03] shadow-glow">
          <img
            src={sanctuaryLogo}
            alt="Sanctuary"
            className={`absolute left-1/2 top-[16%] h-[158%] w-[158%] max-w-none -translate-x-1/2 -translate-y-[16%] object-cover ${imageClassName}`.trim()}
          />
        </div>

        <span
          className={`text-xs font-medium uppercase tracking-[0.42em] text-white/72 ${textClassName}`.trim()}
        >
          SANCTUARY
        </span>
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {sanctuaryLogo ? (
        <img
          src={sanctuaryLogo}
          alt="Sanctuary"
          className={`h-10 w-auto object-contain ${imageClassName}`.trim()}
        />
      ) : (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-sm tracking-[0.3em] text-white/75">
          S
        </div>
      )}

      {showWordmark && !sanctuaryLogo ? (
        <span
          className={`text-xs font-medium uppercase tracking-[0.42em] text-white/72 ${textClassName}`.trim()}
        >
          SANCTUARY
        </span>
      ) : null}
    </div>
  )
}
