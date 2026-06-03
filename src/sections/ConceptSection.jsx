import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'

export default function ConceptSection() {
  return (
    <section id="concept" className="py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="surface p-8 sm:p-10 lg:p-14">
          <SectionHeading
            eyebrow="Conceito"
            title="Um movimento desenhado para quem reconhece valor na atmosfera."
            description="Sanctuary não nasce para ser mais uma festa. Nasce como um movimento onde música, estética, lifestyle e exclusividade se encontram."
          />
        </Reveal>
      </div>
    </section>
  )
}

