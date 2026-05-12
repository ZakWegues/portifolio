'use client'

import { motion } from 'framer-motion'
import FadeInUp from '@/components/ui/FadeInUp'
import { skills } from '@/lib/data'

const levelColor: Record<string, string> = {
  sólido: '#8B5CF6',
  aprendendo: '#F59E0B',
  básico: '#6B7280',
}

const levelLabel: Record<string, string> = {
  sólido: 'Sólido',
  aprendendo: 'Crescendo',
  básico: 'Básico',
}

const groups = ['Frontend', 'Backend', 'Design', 'Tools']

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs text-text-muted tracking-widest uppercase">03</span>
            <div className="h-px w-8 bg-violet-DEFAULT" />
            <span className="font-body text-xs text-violet-glow tracking-widest uppercase">Stack</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-16">
            Ferramentas<br />
            <span className="gradient-text">& habilidades</span>
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group, gi) => {
            const groupSkills = skills.filter((s) => s.group === group)
            if (!groupSkills.length) return null
            return (
              <FadeInUp key={group} delay={gi * 0.1}>
                <div className="rounded-2xl border border-border bg-surface p-6 h-full">
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-4">{group}</p>
                  <ul className="space-y-3">
                    {groupSkills.map((skill) => (
                      <li key={skill.name} className="flex items-center justify-between gap-4">
                        <span className="font-display font-semibold text-text-primary text-sm">
                          {skill.name}
                        </span>
                        <span
                          className="text-[10px] font-body px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{
                            color: levelColor[skill.level],
                            backgroundColor: `${levelColor[skill.level]}15`,
                            border: `1px solid ${levelColor[skill.level]}30`,
                          }}
                        >
                          {levelLabel[skill.level]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInUp>
            )
          })}
        </div>

        {/* Big typography element */}
        <FadeInUp delay={0.4}>
          <div className="mt-16 overflow-hidden">
            <motion.p
              className="font-display font-black text-[clamp(3rem,8vw,7rem)] text-white/[0.04] leading-none select-none whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              HTML · CSS · JavaScript · React · Vite · Supabase · Java · Canva · TypeScript · HTML · CSS · JavaScript · React · Vite · Supabase · Java · Canva · TypeScript ·&nbsp;
            </motion.p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
