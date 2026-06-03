import AccessPass from '../components/AccessPass'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { passPreview } from '../data/passPreview'
import AccessForm from '../sections/AccessForm'
import AccessRules from '../sections/AccessRules'
import ConceptSection from '../sections/ConceptSection'
import ExperienceSection from '../sections/ExperienceSection'
import Hero from '../sections/Hero'

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <ConceptSection />
        <ExperienceSection />

        <section className="py-24 sm:py-28">
          <div className="section-shell grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <Reveal className="space-y-8">
              <SectionHeading
                eyebrow="Access Pass"
                title="Um convite desenhado para parecer raro antes mesmo da entrada."
                description="O Access Pass funciona como extensão da identidade Sanctuary e está pronto para receber QR dinâmico, dados da edição e confirmação de acesso via API."
              />

              <div className="surface space-y-4 p-6">
                <p className="form-label">Preview visual</p>
                <p className="subtle-copy">
                  A aprovação pode evoluir para um fluxo completo com token autenticado, QR real, check-in e atualizações por status sem refazer a interface.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <AccessPass {...passPreview} />
            </Reveal>
          </div>
        </section>

        <AccessRules />
        <AccessForm />
      </main>
      <Footer />
    </div>
  )
}

