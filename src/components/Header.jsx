import BrandMark from './BrandMark'

const navigation = [
  { label: 'Conceito', href: '#concept' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Solicitar acesso', href: '#access' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-black/35 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" aria-label="Sanctuary home">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#access" className="secondary-button px-5 py-2.5 text-[0.7rem]">
          Curadoria
        </a>
      </div>
    </header>
  )
}

