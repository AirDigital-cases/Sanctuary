import { motion } from 'framer-motion'
import { useState } from 'react'
import BrandMark from '../components/BrandMark'
import { sanctuaryAnimation, sanctuaryLogo } from '../lib/brandAssets'

const soundDirections = ['Afro House', 'Organic House', 'Progressive House']

export default function Hero() {
  const [showVideo, setShowVideo] = useState(Boolean(sanctuaryAnimation))

  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-vignette opacity-70" />
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />

      <div className="section-shell relative flex min-h-[calc(100vh-4.5rem)] items-center py-16 sm:py-20 lg:py-28">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center sm:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="surface flex w-full max-w-[22rem] flex-col items-center justify-center overflow-hidden bg-black/80 p-6 sm:max-w-[30rem] sm:p-8"
          >
            {showVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={sanctuaryLogo ?? undefined}
                className="mx-auto h-auto max-h-[18rem] w-full object-contain sm:max-h-[24rem]"
                onError={() => setShowVideo(false)}
              >
                <source src={sanctuaryAnimation} type="video/mp4" />
              </video>
            ) : sanctuaryLogo ? (
              <img
                src={sanctuaryLogo}
                alt="Sanctuary"
                className="mx-auto h-auto max-h-[18rem] w-full object-contain sm:max-h-[24rem]"
              />
            ) : (
              <BrandMark
                className="justify-center"
                imageClassName="h-16"
                textClassName="text-sm tracking-[0.6em]"
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <span className="pill-label">Edição exclusiva</span>
            <div className="space-y-5">
              <h1 className="text-6xl font-semibold leading-none text-platinum sm:text-7xl lg:text-[6.5rem]">
                SANCTUARY
              </h1>
              <p className="text-xl font-light text-white/76 sm:text-2xl lg:text-[1.85rem]">
                Onde cada set conta uma história.
              </p>
            </div>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Uma experiência premium de música eletrônica criada para pessoas selecionadas.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#access" className="action-button">
                Solicitar acesso
              </a>
              <a href="#experience" className="secondary-button">
                Entender a experiência
              </a>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {soundDirections.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 + index * 0.1 }}
                className="rounded-full border border-white/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em] text-white/55"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
