import { sanctuaryLogo } from '../lib/brandAssets'

export default function BrandMark({
  className = '',
  imageClassName = '',
  textClassName = '',
  showWordmark = true,
}) {
  const frameClassName = showWordmark ? 'h-10 w-10' : 'h-12 w-12'

  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {sanctuaryLogo ? (
        <div className={`relative shrink-0 overflow-hidden ${frameClassName}`.trim()}>
          <img
            src={sanctuaryLogo}
            alt="Sanctuary"
            className={`brand-mark-gold absolute left-1/2 top-[6%] h-[205%] w-[205%] max-w-none -translate-x-1/2 object-cover object-top ${imageClassName}`.trim()}
          />
        </div>
      ) : (
        <div
          className={`flex shrink-0 items-center justify-center border border-[rgba(200,164,93,0.3)] bg-[rgba(200,164,93,0.05)] text-sm tracking-[0.3em] text-[#e0c17a] ${frameClassName}`.trim()}
        >
          S
        </div>
      )}

      {showWordmark ? (
        <span
          className={`text-[0.72rem] font-medium uppercase tracking-[0.46em] text-[#e9ddc7] ${textClassName}`.trim()}
        >
          SANCTUARY
        </span>
      ) : null}
    </div>
  )
}
