export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={`space-y-5 ${alignment}`.trim()}>
      {eyebrow ? <span className="pill-label">{eyebrow}</span> : null}
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold leading-none text-platinum sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-relaxed text-white/62 sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  )
}

