import Reveal from '../components/ui/Reveal'

export default function ConceptSection() {
  return (
    <section id="manifesto" className="py-24 sm:py-28 lg:py-32">
      <div className="section-shell">
        <Reveal className="space-y-10">
          <span className="pill-label">Manifesto</span>

          <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
            <div className="space-y-6">
              <h2 className="editorial-title max-w-4xl text-5xl text-platinum sm:text-6xl lg:text-[5.3rem]">
                Não criamos festas.
                <br />
                Criamos memórias.
              </h2>
            </div>

            <div className="space-y-6 xl:pl-10">
              <span className="block h-px w-24 gold-gradient" />
              <p className="max-w-xl text-base leading-relaxed text-[#e9ddc7]/64 sm:text-lg">
                Sanctuary nasce para pessoas que valorizam música, atmosfera, estética e pertencimento.
                Cada edição é pensada como um ritual. Cada encontro é curado. Cada set conta uma
                história.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
