import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import { experienceItems } from '../data/experienceItems'
import { executiveLoungeStill } from '../lib/brandAssets'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="A experiencia"
          title="Uma noite pensada para quem valoriza musica, ambiente e presenca."
          description="Lounge escuro, iluminacao quente e uma energia desenhada para um circulo seleto."
        />

        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="glass-gold grain-overlay overflow-hidden"
          >
            <div className="relative min-h-[16rem] sm:min-h-[20rem]">
              {executiveLoungeStill ? (
                <img
                  src={executiveLoungeStill}
                  alt="Ambiente do Executive"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.08),rgba(3,3,3,0.84)),radial-gradient(circle_at_top,rgba(224,193,122,0.18),transparent_28%)]" />

              <div className="relative flex h-full flex-col justify-end gap-4 p-6 sm:p-8">
                <span className="text-[0.68rem] uppercase tracking-[0.3em] text-[#e0c17a]">
                  Sao Jose dos Pinhais
                </span>
                <div className="space-y-3">
                  <h3 className="editorial-title text-3xl text-platinum sm:text-4xl">
                    Lounge escuro, luz quente e presenca intimista.
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-[#e9ddc7]/66 sm:text-base">
                    O ambiente real inspira uma noite privada, sofisticada e feita para ser vivida de
                    perto.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {experienceItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[26px] border border-[rgba(200,164,93,0.14)] bg-[rgba(10,7,4,0.42)] px-5 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-6 sm:py-6"
              >
                <div className="flex h-full flex-col justify-between gap-4">
                  <h3 className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-[#e0c17a]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#e9ddc7]/58 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
