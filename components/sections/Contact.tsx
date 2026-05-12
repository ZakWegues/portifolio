'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeInUp from '@/components/ui/FadeInUp'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato via portfólio — ${form.name}`)
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\nMensagem:\n${form.message}`)
    window.open(`mailto:zakduwe@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-surface/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-DEFAULT/10 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-DEFAULT/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs text-text-muted tracking-widest uppercase">05</span>
            <div className="h-px w-8 bg-violet-DEFAULT" />
            <span className="font-body text-xs text-violet-glow tracking-widest uppercase">Contato</span>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeInUp delay={0.1}>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
                Vamos construir<br />
                <span className="gradient-text">algo juntos?</span>
              </h2>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="font-body text-text-secondary text-base leading-relaxed mb-8">
                Seja um projeto, uma parceria, ou só trocar ideia sobre tecnologia — minha caixa de entrada está aberta.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <a
                href="mailto:zakduwe@gmail.com"
                className="group inline-flex items-center gap-3 text-xl font-display font-bold text-text-primary hover:text-violet-glow transition-colors"
              >
                <Mail className="w-5 h-5 text-violet-DEFAULT" />
                zakduwe@gmail.com
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-violet-DEFAULT"
                >
                  →
                </motion.span>
              </a>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="mt-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-body text-text-secondary text-sm">
                  São Paulo, SP · disponível para projetos
                </span>
              </div>
            </FadeInUp>
          </div>

          {/* Right: form */}
          <FadeInUp delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-body text-xs text-text-muted uppercase tracking-widest mb-2">
                  Seu nome
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-text-primary font-body text-sm placeholder-text-muted focus:outline-none focus:border-violet-DEFAULT transition-colors"
                  placeholder="Como devo te chamar?"
                />
              </div>

              <div>
                <label className="block font-body text-xs text-text-muted uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-text-primary font-body text-sm placeholder-text-muted focus:outline-none focus:border-violet-DEFAULT transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block font-body text-xs text-text-muted uppercase tracking-widest mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3.5 text-text-primary font-body text-sm placeholder-text-muted focus:outline-none focus:border-violet-DEFAULT transition-colors resize-none"
                  placeholder="Conta sobre seu projeto ou ideia..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-4 bg-violet-DEFAULT text-white font-display font-bold rounded-xl hover:bg-violet-dim transition-colors glow-violet"
              >
                {sent ? (
                  '✓ Abrindo seu email...'
                ) : (
                  <>
                    Enviar mensagem
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
