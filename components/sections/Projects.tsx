'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FadeInUp from '@/components/ui/FadeInUp'
import { projects } from '@/lib/data'
import { ExternalLink } from 'lucide-react'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10
    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovering(false)
  }

  return (
    <FadeInUp delay={index * 0.15}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        data-cursor-hover
        className="group relative rounded-2xl border border-border bg-surface overflow-hidden"
      >
        {/* Color accent top bar */}
        <motion.div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.accent})` }}
          animate={{ scaleX: hovering ? 1 : 0.4, originX: 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-body px-2.5 py-1 rounded-full border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}40`,
                    backgroundColor: `${project.color}10`,
                  }}
                >
                  {project.category}
                </span>
                <span className="text-xs font-body text-text-muted">{project.year}</span>
              </div>
              <h3 className="font-display font-black text-3xl text-text-primary">{project.name}</h3>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-border hover:border-violet-DEFAULT/50 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-text-muted" />
              </a>
            )}
          </div>

          {/* Tagline */}
          <p className="font-display font-semibold text-lg mb-3" style={{ color: project.color }}>
            {project.tagline}
          </p>

          {/* Description */}
          <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm font-body text-text-secondary">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.color }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-body px-2.5 py-1 rounded-md bg-bg border border-border text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </FadeInUp>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-xs text-text-muted tracking-widest uppercase">02</span>
            <div className="h-px w-8 bg-amber-DEFAULT" />
            <span className="font-body text-xs text-amber-DEFAULT tracking-widest uppercase">Projetos</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4">
            Coisas que<br />
            <span className="gradient-text">construí de verdade</span>
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-body text-text-secondary text-base max-w-lg mb-16">
            Não são projetos de aula. São produtos com usuários reais, problemas reais e código funcional.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
