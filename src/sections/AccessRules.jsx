import { accessConfig } from '../config/accessConfig'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

const ruleCards = [
  {
    label: 'Formato atual',
    value: accessConfig.mode === 'invite_only' ? 'Solicitação privada de acesso' : 'Configuração flexível',
  },
  {
    label: 'Diretriz da edição',
    value: accessConfig.maleRule,
  },
  {
    label: 'Curadoria da edição',
    value: accessConfig.femaleRule,
  },
]

export default function AccessRules() {
  return (
    <section className="py-24 sm:py-28">
      <div className="section-shell space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Acesso"
            title="Acesso sujeito à aprovação da curadoria Sanctuary."
            description="A estrutura abaixo já está preparada para ativar regras futuras por perfil, mesa, camarote ou áreas premium sem alterar a experiência principal."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface p-7 sm:p-8">
            <div className="space-y-5">
              <span className="pill-label">Lista limitada</span>
              <p className="text-2xl leading-tight text-platinum sm:text-[2rem]">
                Cada solicitação entra em análise para preservar a atmosfera, o conforto e o encontro entre pessoas certas.
              </p>
              <p className="subtle-copy">
                Nesta fase inicial, não há venda pública. O contato acontece apenas quando a curadoria aprova o acesso para a edição correspondente.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {ruleCards.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08} className="surface p-6">
                <p className="form-label">{item.label}</p>
                <p className="mt-3 text-lg leading-relaxed text-white/76">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

