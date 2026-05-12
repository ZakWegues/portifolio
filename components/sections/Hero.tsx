'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const words = ['Isaac', 'Duwe']

function WordReveal({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="overflow-hidden inline-block">
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-DEFAULT/8 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-amber-DEFAULT/6 blur-[100px]" />
      </div>

      {/* Floating decorative text */}
      <motion.div
        style={{ y }}
        className="absolute right-6 top-1/4 text-[8rem] font-display font-black text-white/[0.02] select-none pointer-events-none leading-none hidden lg:block"
      >
        DEV
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-DEFAULT/30 bg-violet-DEFAULT/5 text-violet-glow text-xs font-body tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponível para projetos
          </span>
        </motion.div>

        {/* Name */}
        <h1 className="font-display font-black leading-[0.9] mb-6">
          <div className="flex flex-wrap gap-x-6 text-[clamp(4rem,12vw,9rem)] text-text-primary">
            {words.map((word, i) => (
              <WordReveal key={word} word={word} delay={0.3 + i * 0.12} />
            ))}
          </div>
          <div className="overflow-hidden mt-2">
            <motion.span
              className="inline-block text-[clamp(2rem,6vw,4.5rem)] gradient-text"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Rodrigues
            </motion.span>
          </div>
        </h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-violet-DEFAULT" />
          <p className="font-body text-text-secondary text-lg md:text-xl tracking-wide">
            Desenvolvedor Web & Builder
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-semibold text-2xl md:text-3xl text-text-primary mb-12 max-w-xl"
        >
          Crio produtos reais.{' '}
          <span className="text-amber-DEFAULT">Com 16 anos.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-violet-DEFAULT text-white font-body font-medium rounded-full hover:bg-violet-dim transition-all duration-200 glow-violet"
          >
            Ver Projetos
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-border text-text-secondary hover:text-text-primary hover:border-violet-DEFAULT/50 font-body font-medium rounded-full transition-all duration-200"
          >
            Entrar em contato
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/50"
        >
          {[
            { n: '2', label: 'Projetos reais' },
            { n: '16', label: 'Anos de idade' },
            { n: 'SP', label: 'São Paulo' },
            { n: 'EN', label: 'Inglês avançado' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-text-primary">{s.n}</p>
              <p className="font-body text-xs text-text-muted uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-text-muted text-xs tracking-widest uppercase font-body">scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
