export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={`space-y-5 ${alignment}`.trim()}>
      {eyebrow ? <span className="pill-label">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="editorial-title text-4xl text-platinum sm:text-5xl lg:text-[4rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-[#e9ddc7]/66 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
