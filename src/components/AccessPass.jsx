import BrandMark from './BrandMark'

const qrPattern = [
  1, 1, 1, 0, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 0,
  1, 1, 1, 0, 1, 1, 1,
  0, 0, 0, 1, 0, 0, 1,
  1, 1, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 1,
  1, 0, 1, 1, 1, 0, 1,
]

export default function AccessPass({ name, edition, date, location, code, status = 'Aprovado' }) {
  return (
    <div className="surface overflow-hidden">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.45fr_0.85fr]">
        <div className="space-y-8">
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-3">
              <span className="pill-label">Sanctuary Access Pass</span>
              <BrandMark showWordmark={false} imageClassName="h-12" />
            </div>
            <div className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-emerald-100">
              {status}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="form-label">Nome</p>
              <p className="mt-2 text-lg text-platinum">{name}</p>
            </div>
            <div>
              <p className="form-label">Edição</p>
              <p className="mt-2 text-lg text-platinum">{edition}</p>
            </div>
            <div>
              <p className="form-label">Data</p>
              <p className="mt-2 text-lg text-platinum">{date}</p>
            </div>
            <div>
              <p className="form-label">Local</p>
              <p className="mt-2 text-lg text-platinum">{location}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="form-label">Código</p>
              <p className="mt-2 text-lg uppercase tracking-[0.28em] text-white/88">{code}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between rounded-[24px] border border-dashed border-white/14 bg-black/40 p-6 text-center">
          <div className="space-y-2">
            <p className="form-label">QR Placeholder</p>
            <p className="text-sm text-white/55">Substituível por token dinâmico quando a API estiver ativa.</p>
          </div>

          <div className="grid w-36 grid-cols-7 gap-1 rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
            {qrPattern.map((cell, index) => (
              <div
                key={`${cell}-${index}`}
                className={`aspect-square rounded-[2px] ${cell ? 'bg-white/90' : 'bg-white/10'}`}
              />
            ))}
          </div>

          <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/42">
            Curadoria Sanctuary
          </p>
        </div>
      </div>
    </div>
  )
}

