import { accessConfig } from '../config/accessConfig'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

const editionDetails = [
  {
    label: 'Cidade',
    value: 'São José dos Pinhais',
  },
  {
    label: 'Capacidade',
    value: '80 acessos privados',
  },
  {
    label: 'Local',
    value: 'Revelado somente aos aprovados',
  },
  {
    label: 'Formato',
    value: accessConfig.mode === 'invite_only' ? 'Acesso por curadoria' : 'Configuração flexível',
  },
]

export default function AccessRules() {
  return (
    <section className="py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Próxima edição"
            title="80 acessos privados. O restante permanece fora do radar."
            description="São José dos Pinhais. Lista limitada. Local revelado apenas aos perfis aprovados pela curadoria Sanctuary."
          />
        </Reveal>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-gold grain-overlay p-7 sm:p-9">
            <div className="space-y-6">
              <p className="editorial-title text-4xl text-platinum sm:text-5xl">
                Lista limitada.
                <br />
                Convites definidos por presença, afinidade e atmosfera.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-[#e9ddc7]/64 sm:text-lg">
                Aqui não existe compra aberta. Existe solicitação, análise e resposta curada. A proposta
                é manter a energia certa em cada edição exclusiva.
              </p>

              <p className="form-label">Acesso sujeito à aprovação da curadoria Sanctuary.</p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {editionDetails.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08} className="glass-gold p-6 sm:p-7">
                <p className="form-label">{item.label}</p>
                <p className="mt-4 text-2xl leading-tight text-platinum">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
