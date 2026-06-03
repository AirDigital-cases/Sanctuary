import { useDeferredValue, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccessPass from '../components/AccessPass'
import BrandMark from '../components/BrandMark'
import {
  ADMIN_PASSWORD,
  ADMIN_SESSION_KEY,
  STATUS_OPTIONS,
} from '../config/adminConfig'
import { formatDateTime, formatStatusBadge } from '../lib/formatters'
import {
  createRequestsCsv,
  getStoredRequests,
  updateRequestStatus,
} from '../lib/storage'

function getInitialSessionState() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true'
}

function downloadCsv(content) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `sanctuary-requests-${new Date().toISOString().slice(0, 10)}.csv`
  link.click()
  URL.revokeObjectURL(url)
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(getInitialSessionState)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [requests, setRequests] = useState(() => getStoredRequests())
  const [statusFilter, setStatusFilter] = useState('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const deferredSearchTerm = useDeferredValue(searchTerm)
  const normalizedSearchTerm = deferredSearchTerm.trim().toLowerCase()

  useEffect(() => {
    const syncRequests = () => setRequests(getStoredRequests())

    window.addEventListener('storage', syncRequests)
    return () => window.removeEventListener('storage', syncRequests)
  }, [])

  function handleLogin(event) {
    event.preventDefault()

    if (password === ADMIN_PASSWORD) {
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'true')
      setIsAuthenticated(true)
      setPassword('')
      setLoginError('')
      setRequests(getStoredRequests())
      return
    }

    setLoginError('Senha inválida. Use a senha mock definida no projeto.')
  }

  function handleLogout() {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY)
    setIsAuthenticated(false)
  }

  function handleStatusChange(requestId, status) {
    const updatedRequests = updateRequestStatus(requestId, status)
    setRequests(updatedRequests)
  }

  function handleExportCsv() {
    downloadCsv(createRequestsCsv(filteredRequests))
  }

  const filteredRequests = requests.filter((request) => {
    const matchesStatus = statusFilter === 'Todos' || request.status === statusFilter
    const searchableContent = `${request.fullName} ${request.instagram} ${request.whatsapp}`.toLowerCase()
    const matchesSearch =
      normalizedSearchTerm.length === 0 || searchableContent.includes(normalizedSearchTerm)

    return matchesStatus && matchesSearch
  })

  const accessPassPreview =
    filteredRequests.find((request) =>
      ['Aprovado', 'VIP', 'Mesa confirmada', 'Check-in realizado'].includes(request.status),
    ) ?? null

  if (!isAuthenticated) {
    return (
      <div className="section-shell flex min-h-screen items-center py-16">
        <div className="surface mx-auto w-full max-w-lg p-8 sm:p-10">
          <div className="space-y-5">
            <BrandMark />
            <div className="space-y-3">
              <span className="pill-label">Admin mock</span>
              <h1 className="text-4xl leading-none text-platinum">Área de curadoria local.</h1>
              <p className="subtle-copy">
                Proteção apenas visual por senha mock local. Ideal para fase inicial, sem backend real.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <label className="block space-y-3">
                <span className="form-label">Senha</span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-input"
                  placeholder="Digite a senha mock"
                />
              </label>
              {loginError ? <p className="text-sm text-rose-200/90">{loginError}</p> : null}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="action-button">
                  Entrar
                </button>
                <Link to="/" className="secondary-button">
                  Voltar para o site
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-16">
      <header className="border-b border-white/8 bg-black/30 backdrop-blur-xl">
        <div className="section-shell flex flex-col gap-6 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <BrandMark />
            <div className="space-y-2">
              <span className="pill-label">Curadoria Sanctuary</span>
              <h1 className="text-4xl leading-none text-platinum sm:text-5xl">Admin mock</h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/58">
                Solicitações armazenadas em `localStorage`, com busca, filtros, atualização de status e exportação CSV.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={handleExportCsv} className="secondary-button">
              Exportar CSV
            </button>
            <button type="button" onClick={handleLogout} className="action-button">
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="section-shell space-y-8 py-10">
        <section className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="surface grid gap-5 p-6 md:grid-cols-3">
            <label className="block space-y-3 md:col-span-2">
              <span className="form-label">Buscar por nome, Instagram ou WhatsApp</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="form-input"
                placeholder="Ex.: @nome ou +55..."
              />
            </label>

            <label className="block space-y-3">
              <span className="form-label">Filtrar por status</span>
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="form-input"
              >
                <option value="Todos">Todos</option>
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="surface grid gap-5 p-6 sm:grid-cols-3 lg:grid-cols-1">
            <div>
              <p className="form-label">Total</p>
              <p className="mt-2 text-3xl text-platinum">{requests.length}</p>
            </div>
            <div>
              <p className="form-label">Em análise</p>
              <p className="mt-2 text-3xl text-platinum">
                {requests.filter((request) => request.status === 'Em análise').length}
              </p>
            </div>
            <div>
              <p className="form-label">Filtrados</p>
              <p className="mt-2 text-3xl text-platinum">{filteredRequests.length}</p>
            </div>
          </div>
        </section>

        {accessPassPreview ? (
          <section className="space-y-5">
            <p className="form-label">Preview do Access Pass com base em uma solicitação elegível</p>
            <AccessPass
              name={accessPassPreview.fullName}
              edition="Sanctuary Curated Edition"
              date={formatDateTime(accessPassPreview.createdAt)}
              location="Local revelado após aprovação"
              code={accessPassPreview.accessCode}
              status={accessPassPreview.status}
            />
          </section>
        ) : null}

        <section className="grid gap-5">
          {filteredRequests.length === 0 ? (
            <div className="surface p-8 text-center">
              <p className="text-xl text-platinum">Nenhuma solicitação encontrada.</p>
              <p className="mt-3 text-sm text-white/50">
                Envie uma solicitação pela home para testar o fluxo completo.
              </p>
            </div>
          ) : null}

          {filteredRequests.map((request) => (
            <article key={request.id} className="surface p-6">
              <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
                <div className="space-y-5">
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <p className="text-2xl text-platinum">{request.fullName}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-white/56">
                        <span>{request.instagram || '-'}</span>
                        <span>{request.whatsapp || '-'}</span>
                        <span>{request.city || '-'}</span>
                      </div>
                    </div>

                    <span
                      className={`inline-flex rounded-full border px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${formatStatusBadge(request.status)}`}
                    >
                      {request.status}
                    </span>
                  </div>

                  <div className="grid gap-4 text-sm text-white/62 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <p className="form-label">Criado em</p>
                      <p className="mt-2">{formatDateTime(request.createdAt)}</p>
                    </div>
                    <div>
                      <p className="form-label">Código</p>
                      <p className="mt-2 uppercase tracking-[0.18em] text-white/78">
                        {request.accessCode}
                      </p>
                    </div>
                    <div>
                      <p className="form-label">Interesse</p>
                      <p className="mt-2">{request.interest || '-'}</p>
                    </div>
                    <div>
                      <p className="form-label">Gênero</p>
                      <p className="mt-2">{request.gender || '-'}</p>
                    </div>
                    <div>
                      <p className="form-label">Idade</p>
                      <p className="mt-2">{request.age || '-'}</p>
                    </div>
                    <div>
                      <p className="form-label">Companhia</p>
                      <p className="mt-2">{request.attendanceType || '-'}</p>
                    </div>
                    <div>
                      <p className="form-label">Indicação</p>
                      <p className="mt-2">{request.referredBy || '-'}</p>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <p className="form-label">Acompanhantes</p>
                      <p className="mt-2">{request.guestNames || '-'}</p>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-3">
                      <p className="form-label">Observação</p>
                      <p className="mt-2 leading-relaxed">{request.notes || '-'}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
                  <div className="space-y-4">
                    <p className="form-label">Atualizar status</p>
                    <select
                      value={request.status}
                      onChange={(event) => handleStatusChange(request.id, event.target.value)}
                      className="form-input"
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                    <p className="text-sm leading-relaxed text-white/48">
                      Ao conectar um backend, esta ação pode disparar notificações, emissão de pass e check-in em tempo real.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}

