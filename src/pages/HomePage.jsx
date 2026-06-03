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
        <AccessRules />

        <section className="py-24 sm:py-28 lg:py-32">
          <div className="section-shell grid gap-10 xl:grid-cols-[0.84fr_1.16fr] xl:items-center">
            <Reveal className="space-y-8">
              <SectionHeading
                eyebrow="Access Pass"
                title="Um convite privado que parece raro antes mesmo da confirmação."
                description="O Access Pass traduz a aprovacao em objeto visual. Um convite pensado para parecer raro, discreto e desejado."
              />

              <div className="glass-gold space-y-4 p-6">
                <p className="form-label">Preview visual</p>
                <p className="text-base leading-relaxed text-[#e9ddc7]/62">
                  Não é um ingresso comum. É um sinal de acesso, status e pertencimento à edição
                  privada.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <AccessPass {...passPreview} />
            </Reveal>
          </div>
        </section>
        <AccessForm />
      </main>
      <Footer />
    </div>
  )
}
