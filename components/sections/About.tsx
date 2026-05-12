'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import FadeInUp from '@/components/ui/FadeInUp'
import { person } from '@/lib/data'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-body text-xs text-text-muted tracking-widest uppercase">01</span>
            <div className="h-px w-8 bg-violet-DEFAULT" />
            <span className="font-body text-xs text-violet-glow tracking-widest uppercase">Sobre</span>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div>
            <FadeInUp delay={0.1}>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
                Não espero<br />
                <span className="gradient-text">ter mais idade</span><br />
                pra construir.
              </h2>
            </FadeInUp>

            {person.bio.map((para, i) => (
              <FadeInUp key={i} delay={0.2 + i * 0.1}>
                <p className="font-body text-text-secondary text-base leading-relaxed mb-4">
                  {para}
                </p>
              </FadeInUp>
            ))}

            <FadeInUp delay={0.4}>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-3 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-xs font-body">
                  🇧🇷 Português nativo
                </span>
                <span className="px-3 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-xs font-body">
                  🇺🇸 Inglês avançado
                </span>
                <span className="px-3 py-1.5 rounded-full bg-surface border border-border text-text-secondary text-xs font-body">
                  📍 São Paulo, SP
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <a
                href="mailto:zakduwe@gmail.com"
                className="inline-flex items-center gap-2 mt-8 text-sm font-body text-violet-glow border-b border-violet-DEFAULT/30 hover:border-violet-DEFAULT transition-colors pb-0.5"
              >
                zakduwe@gmail.com →
              </a>
            </FadeInUp>
          </div>

          {/* Right: stats card + visual */}
          <div className="flex flex-col gap-6">
            <FadeInUp delay={0.2}>
              <div className="relative rounded-2xl border border-border bg-surface p-8 overflow-hidden">
                {/* Glow corner */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-DEFAULT/10 blur-2xl" />

                <div className="grid grid-cols-2 gap-8">
                  {[
                    { n: 2, suffix: '+', label: 'Projetos\nconcluídos' },
                    { n: 16, suffix: '', label: 'Anos\nde idade' },
                    { n: 2, suffix: '', label: 'Idiomas\nfluentes' },
                    { n: 2, suffix: '+', label: 'Anos\nestudando' },
                  ].map((s, i) => (
                    <div key={s.label} className="relative">
                      <p className="font-display font-black text-5xl text-text-primary">
                        <Counter target={s.n} />{s.suffix}
                      </p>
                      <p className="font-body text-xs text-text-muted mt-2 whitespace-pre-line leading-relaxed">
                        {s.label}
                      </p>
                      {i < 2 && <div className="absolute bottom-0 left-0 right-0 h-px bg-border mt-4" />}
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.35}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-4">Educação</p>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-DEFAULT/10 border border-violet-DEFAULT/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-text-primary">ETEC Guaianases</p>
                    <p className="font-body text-text-secondary text-sm mt-0.5">Técnico em Desenvolvimento de Sistemas</p>
                    <p className="font-body text-text-muted text-xs mt-1">2024 – 2026 · cursando</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  )
}
