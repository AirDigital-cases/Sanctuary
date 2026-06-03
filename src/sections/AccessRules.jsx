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
            title="Uma edicao intima, limitada a 80 convidados, em um ambiente sofisticado preparado para receber quem entende a proposta."
            description="Sao Jose dos Pinhais. Acesso limitado, lista privada e local revelado apenas aos aprovados."
          />
        </Reveal>

        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-gold grain-overlay p-7 sm:p-9">
            <div className="space-y-6">
              <p className="editorial-title text-4xl text-platinum sm:text-5xl">
                Edicao limitada.
                <br />
                Curadoria definida por presenca, afinidade e proposta.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-[#e9ddc7]/64 sm:text-lg">
                Uma noite privada, em um ambiente sofisticado, preparada para receber quem entende a
                proposta e valoriza musica, ambiente e presenca.
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
