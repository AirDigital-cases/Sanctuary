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
    <div className="glass-gold grain-overlay overflow-hidden">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-8">
          <div className="flex flex-col gap-5 border-b border-[rgba(200,164,93,0.18)] pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-4">
              <span className="pill-label">SANCTUARY ACCESS</span>
              <div className="space-y-2">
                <BrandMark showWordmark={false} className="h-12 w-12" imageClassName="top-[7%]" />
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#c8a45d]">
                  Private Guest
                </p>
              </div>
            </div>

            <div className="inline-flex rounded-full border border-[rgba(200,164,93,0.28)] bg-[rgba(200,164,93,0.08)] px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#e0c17a]">
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
              <p className="mt-2 text-lg uppercase tracking-[0.34em] text-[#e0c17a]">{code}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.26em] text-[#e9ddc7]/44">
            <span className="h-px flex-1 gold-gradient" />
            Curadoria Sanctuary
            <span className="h-px flex-1 gold-gradient" />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-[rgba(200,164,93,0.18)] bg-[rgba(3,3,3,0.48)] p-6">
          <div className="space-y-2">
            <p className="form-label">QR Placeholder</p>
            <p className="text-sm leading-relaxed text-[#e9ddc7]/56">
              Convite visual reservado para validacao privada antes da chegada.
            </p>
          </div>

          <div className="grid w-40 grid-cols-7 gap-1 self-center rounded-[24px] border border-[rgba(200,164,93,0.18)] bg-[rgba(200,164,93,0.04)] p-4">
            {qrPattern.map((cell, index) => (
              <div
                key={`${cell}-${index}`}
                className={`aspect-square rounded-[2px] ${cell ? 'bg-[#e0c17a]' : 'bg-[rgba(200,164,93,0.12)]'}`}
              />
            ))}
          </div>

          <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[#c8a45d]">
            Local revelado aos aprovados
          </p>
        </div>
      </div>
    </div>
  )
}
