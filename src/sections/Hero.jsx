import { motion } from 'framer-motion'
import { sanctuaryLogo } from '../lib/brandAssets'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-obsidian">
      <div className="absolute inset-0 organic-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,193,122,0.08),transparent_18%),linear-gradient(180deg,rgba(3,3,3,0.2),rgba(3,3,3,0.92))]" />
      <div className="grain-overlay absolute inset-0" />

      <div className="section-shell relative flex min-h-screen items-center justify-center py-28 sm:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pill-label"
          >
            Lista privada • 80 acessos por edição
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            {sanctuaryLogo ? (
              <div className="relative mx-auto h-24 w-24 overflow-hidden sm:h-28 sm:w-28 lg:h-36 lg:w-36">
                <img
                  src={sanctuaryLogo}
                  alt="Sanctuary"
                  className="brand-mark-gold absolute left-1/2 top-[7%] h-[210%] w-[210%] max-w-none -translate-x-1/2 object-cover object-top"
                />
              </div>
            ) : (
              <div className="mx-auto flex h-24 w-24 items-center justify-center border border-[rgba(200,164,93,0.3)] text-4xl text-[#e0c17a] sm:h-28 sm:w-28 lg:h-36 lg:w-36 lg:text-5xl">
                S
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 space-y-6"
          >
            <h1 className="editorial-title gold-gradient-text text-[3.7rem] sm:text-[5.5rem] lg:text-[7.4rem]">
              SANCTUARY
            </h1>
            <p className="text-lg font-light text-[#e9ddc7] sm:text-2xl lg:text-[1.9rem]">
              Onde cada set conta uma história.
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#e9ddc7]/64 sm:text-lg">
              Uma experiência privada entre música, atmosfera e pertencimento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row"
          >
            <a href="#access" className="action-button w-full sm:w-auto">
              Entrar na lista privada
            </a>
            <a href="#experience" className="secondary-button w-full sm:w-auto">
              Conhecer a experiência
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
