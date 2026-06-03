import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import { experienceItems } from '../data/experienceItems'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Experiência"
          title="Uma narrativa sonora, visual e social criada com precisão."
          description="Cada edição equilibra energia, elegância e seleção cuidadosa para manter a identidade Sanctuary intacta."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experienceItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="surface p-6 sm:p-7"
            >
              <div className="space-y-4">
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-white/42">
                  Sanctuary
                </span>
                <h3 className="text-3xl leading-none text-platinum">{item.title}</h3>
                <p className="subtle-copy">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

