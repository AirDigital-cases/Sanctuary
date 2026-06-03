import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <BrandMark />
          <p className="max-w-md text-sm text-white/48">
            Onde cada set conta uma história. Uma atmosfera criada para pessoas selecionadas.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-white/45">
          <a href="#access" className="transition hover:text-white/80">
            Lista limitada
          </a>
          <Link to="/admin" className="transition hover:text-white/80">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  )
}

