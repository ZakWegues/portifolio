import FadeInUp from '@/components/ui/FadeInUp'
import { education, languages } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs text-text-muted tracking-widest uppercase">04</span>
            <div className="h-px w-8 bg-amber-DEFAULT" />
            <span className="font-body text-xs text-amber-DEFAULT tracking-widest uppercase">Formação</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] mb-16">
            De onde<br />
            <span className="gradient-text">venho aprendendo</span>
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <FadeInUp delay={0.2}>
            <div className="rounded-2xl border border-border bg-surface p-8 h-full">
              <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-6">Educação formal</p>
              {education.map((edu) => (
                <div key={edu.institution} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-violet-DEFAULT mt-1" />
                    <div className="w-px flex-1 bg-border mt-2" />
                  </div>
                  <div className="pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-body px-2 py-0.5 rounded-full bg-violet-DEFAULT/10 text-violet-glow border border-violet-DEFAULT/20">
                        {edu.status}
                      </span>
                      <span className="text-xs font-body text-text-muted">{edu.period}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-text-primary">{edu.institution}</h3>
                    <p className="font-body text-text-secondary text-sm mt-1">{edu.course}</p>
                    <p className="font-body text-text-muted text-xs mt-0.5">{edu.note} · {edu.location}</p>
                  </div>
                </div>
              ))}

              {/* Self-taught */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-DEFAULT mt-1" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-body px-2 py-0.5 rounded-full bg-amber-DEFAULT/10 text-amber-DEFAULT border border-amber-DEFAULT/20">
                      contínuo
                    </span>
                    <span className="text-xs font-body text-text-muted">2023 – presente</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary">Autodidata</h3>
                  <p className="font-body text-text-secondary text-sm mt-1">
                    React, Vite, Supabase, TypeScript — aprendido construindo projetos reais
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Languages + extras */}
          <div className="flex flex-col gap-6">
            <FadeInUp delay={0.3}>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-6">Idiomas</p>
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between">
                      <span className="font-display font-bold text-lg text-text-primary">{lang.name}</span>
                      <span className="text-sm font-body text-text-secondary">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="rounded-2xl border border-violet-DEFAULT/20 bg-violet-DEFAULT/5 p-8 relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-violet-DEFAULT/10 blur-2xl" />
                <p className="font-body text-xs text-violet-glow uppercase tracking-widest mb-3">Inglês avançado</p>
                <p className="font-display font-black text-2xl text-text-primary mb-2">
                  Consumo conteúdo técnico direto na fonte
                </p>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  Documentações, tutoriais, podcasts e comunidades internacionais — sem barreiras de idioma.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  )
}
