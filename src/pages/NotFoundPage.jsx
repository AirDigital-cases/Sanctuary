import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="section-shell flex min-h-screen items-center justify-center py-16">
      <div className="surface max-w-xl space-y-6 p-8 text-center sm:p-10">
        <span className="pill-label">Sanctuary</span>
        <h1 className="text-5xl leading-none text-platinum">Página não encontrada.</h1>
        <p className="subtle-copy">
          O caminho solicitado não faz parte da experiência atual. Retorne ao portal principal.
        </p>
        <div className="flex justify-center">
          <Link to="/" className="action-button">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  )
}
