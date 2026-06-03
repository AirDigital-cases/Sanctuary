import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import { experienceItems } from '../data/experienceItems'
import { executiveLoungeStill } from '../lib/brandAssets'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="A noite"
          title="Luz baixa. Música alta. Pessoas certas."
          description=""
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
                  São José dos Pinhais
                </span>
                <div className="space-y-3">
                  <h3 className="editorial-title text-3xl text-platinum sm:text-4xl">
                    Lounge escuro. Presença íntima.
                  </h3>
                  <p className="max-w-lg text-sm leading-relaxed text-[#e9ddc7]/66 sm:text-base">
                    Um ambiente feito para poucos.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-3 sm:grid-cols-2">
            {experienceItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[24px] border border-[rgba(200,164,93,0.1)] bg-[rgba(10,7,4,0.34)] px-4 py-4 shadow-[0_18px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-5 sm:py-5"
              >
                <div className="flex h-full flex-col justify-between gap-3">
                  <h3 className="text-[0.74rem] font-medium uppercase tracking-[0.3em] text-[#e0c17a]">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] leading-relaxed text-[#e9ddc7]/56">
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
