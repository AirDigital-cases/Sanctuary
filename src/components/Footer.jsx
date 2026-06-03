import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(200,164,93,0.12)] py-10">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <BrandMark />
          <p className="max-w-md text-sm text-[#e9ddc7]/44">
            Onde cada set conta uma história. Lista privada, curadoria de acesso e uma atmosfera desenhada para permanecer na memória.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.24em] text-[#e9ddc7]/42">
          <a href="#access" className="transition hover:text-[#e0c17a]">
            Lista limitada
          </a>
          <Link to="/admin" className="transition hover:text-[#e0c17a]">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  )
}
