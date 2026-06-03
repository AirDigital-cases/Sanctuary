import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import { experienceItems } from '../data/experienceItems'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28 lg:py-32">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="A atmosfera"
          title="Natureza, curadoria e música em uma noite que não se explica por completo."
          description="Uma composição entre silêncio, textura, ritmo e presença. Menos anúncio. Mais desejo."
        />

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experienceItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.95, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-gold grain-overlay overflow-hidden p-6 sm:p-8 ${item.className}`}
              style={item.style}
            >
              <div className="flex h-full flex-col justify-between gap-6">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-[#c8a45d]">
                  Sanctuary
                </span>

                <div className="space-y-4">
                  <h3 className="editorial-title text-4xl text-platinum sm:text-[2.8rem]">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-[#e9ddc7]/62 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
