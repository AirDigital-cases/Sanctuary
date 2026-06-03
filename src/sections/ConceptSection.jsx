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
                NEM TODOS SERÃO
                <br />
                CONVIDADOS.
              </h2>
            </div>

            <div className="space-y-6 xl:pl-10">
              <span className="block h-px w-24 gold-gradient" />
              <p className="max-w-xl text-base leading-relaxed text-[#e9ddc7]/64 sm:text-lg">
                Sanctuary é uma experiência privada criada para um círculo seleto.
              </p>
              <p className="text-sm uppercase tracking-[0.28em] text-[#e9ddc7]/52">
                Onde cada set conta uma história.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
