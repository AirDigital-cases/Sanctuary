import BrandMark from './BrandMark'

const navigation = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Lista', href: '#access' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/72 via-black/28 to-transparent backdrop-blur-[2px]">
      <div className="section-shell flex items-center justify-between py-5">
        <a href="#top" aria-label="Sanctuary home">
          <BrandMark className="gap-2.5" textClassName="text-[0.65rem] tracking-[0.42em]" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-[#e9ddc7]/66 transition hover:text-[#e0c17a]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#access" className="secondary-button px-5 py-2.5 text-[0.65rem]">
          Solicitar acesso
        </a>
      </div>
    </header>
  )
}
